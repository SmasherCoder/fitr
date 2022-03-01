const faker = require('faker');

const db = require('../config/connection');
const { Workout, User } = require('../models');

db.once('open', async () => {
  await Workout.deleteMany({});
  await User.deleteMany({});

  const userCollection = db.collection("user");
  const workoutCollectoin = db.collection("workout");
  const exerciseCollection = db.collection("exercise");

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create follows
  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.insertedCount);
    const { _id: userId } = createdUsers.insertedIds[randomUserIndex];

    let followId = userId;

    while (followId === userId) {
          const randomUserIndex = Math.floor(Math.random() * createdUsers.insertedCount);
      followId = createdUsers.insertedIds[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { follow: followId } });
  }

  // create workouts
  let createdWorkouts = [];
  for (let i = 0; i < 100; i += 1) {
    const description = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const scheduled = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.insertedCount);
    const { username, _id: userId } = userData[randomUserIndex];


    const createdWorkout = await Workout.create({ description, scheduled, username });

    await User.updateOne(
      { _id: userId },
      { $push: { workout: createdWorkout._id } }
    );

    createdWorkouts.push(createdWorkout);
  }

  // create exercises
  for (let i = 0; i < 100; i += 1) {
    const exerciseBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.insertedCount);
    const { username } = userData[randomUserIndex];

    const randomWorkoutIndex = Math.floor(Math.random() * createdWorkouts.length);
    const { _id: workoutId } = createdWorkouts[randomWorkoutIndex];

    await Workout.updateOne(
      { _id: workoutId },
      { $push: { exercise: { exerciseBody, username } } },
      { runValidators: true }
    );
  }

  console.log('all done!');
  process.exit(0);
});
