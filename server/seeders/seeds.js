const faker = require('faker');

const db = require('../config/connection');
const { Workout, User } = require('../models');

db.once('open', async () => {
  await Workout.deleteMany({});
  await User.deleteMany({});

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
    console.log(createdUsers.insertedCount);
    const randomUserIndex = Math.floor(Math.random() * createdUsers.insertedCount);
    console.log(randomUserIndex);
    const { _id: userId } = createdUsers[randomUserIndex];

    let followId = userId;

    while (followId === userId) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
      followId = createdUsers[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { follow: followId } });
  }

  // create workouts
  let createdWorkouts = [];
  for (let i = 0; i < 100; i += 1) {
    const workoutText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
    const { username, _id: userId } = createdUsers[randomUserIndex];

    const createdWorkout = await Workout.create({ workoutText, username });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { workout: createdWorkout._id } }
    );

    createdWorkouts.push(createdWorkout);
  }

  // create exercises
  for (let i = 0; i < 100; i += 1) {
    const exerciseBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
    const { username } = createdUsers[randomUserIndex];

    const randomWorkoutIndex = Math.floor(Math.random() * createdThoughts.length);
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
