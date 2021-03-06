const { AuthenticationError } = require("apollo-server-express");
const { User, Workout, Exercise } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    // for now use User Workout model from Abel to reference
    //consider adding friends aspect later as more functionality will be added 
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate("workouts")
                .populate("follow");

                return userData;
            }

            throw new AuthenticationError("Not logged in!");
        },
        users: async() => {
            const users = User.find()
            .select('-__v -password')
            .populate("workouts")
            .populate("follow");
    
            return users;
        },
        user: async (parent, { username }) => {
            return User.findOne({username})
            .select("-__v -password")
            .populate("workouts")
            .populate({
                path: 'workouts',
                populate: {
                    path: 'exercises'
                }
            })
            .populate("follow");
        },

            //add workouts (multiple)
        workout: async ( parent, { _id }) => {
            return Workout.findOne({ _id })
            .populate("exercises");
        },
        allWorkouts: async () => {
            return await Workout.find()
            .populate("exercises");
        },
        allExercises: async(parent, args) => {
            return await Exercise.find();
        },
        exercise: async( parent, {_id}, context) => {
            return await Exercise.findById({ _id })
        }
},

    Mutation: {
        addUser: async (parent, args) => {
            try {
                const user = await User.create(args);

                const token = signToken(user);
                return { token, user };
            } catch (error) {
                console.log(error);
            }
        },
        //login will be for email and password
        login: async (parent, {email, password}) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const token = signToken(user);
            return { token, user };
        },
        // save workout model create workout model and remove workout model goes here
        addWorkout: async (parent, args, context) => {
            if (context.user) {
                const exercises = [];
                for (let i=0; i<args.exercises.length; i++) {
                    const exercise = await Exercise.findById({ _id: args.exercises[i] })
                    exercises.push(exercise);
                }
                const workout = await Workout.create({ ...args, username: context.user.username, exercises: exercises  });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { workouts: workout._id } },
                    { new: true }
                );

                return workout;
            }

            throw new AuthenticationError("Not logged in!");
        },
        addExercise: async (parent, args, context) => {
            try {
                const exercise = await Exercise.create(args);
                return exercise;
            } catch (e) {
                console.log(e)
            }
        },
        addFriend: async (parent, { friendId }, context) => {
            try {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { follow: friendId } },
                    { new: true }
                ).populate('follow');
                return updatedUser
            } catch (e) {
                console.log(e);
            }
        },
        removeWorkout: async (parent, { workoutId }, context) => {
            try {
                const workout = await Workout.findOneAndDelete(
                    { _id: workoutId },
                    { new: true }
                );
                return workout
            } catch (e) {
                console.log(e);
            }
        }
        // same with friends functionality - friend model must be added
    }
};

module.exports = resolvers;