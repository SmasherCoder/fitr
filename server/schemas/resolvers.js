const { User, Workout } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
    // for now use User Workout model from Abel to reference
    //consider adding friends aspect later as more functionality will be added 
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select("-__v -password")
                .populate("workouts")

                return userData;
            }

            throw new AuthenticationError("Not logged in!");
        },
    },
    //add users
    user:  async (parent, { username }) => {
        return User.findOne({username})
        .select("-__v -password")
        .populate('workouts');
    },
    //add workouts (multiple)
    workout: async ( parent, { _id }) => {
        return Thought.findOne({ _id });
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
                const workout = await Workout.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { workouts: workout._id } },
                    { new: true }
                );

                return workout;
            }

            throw new AuthenticationError("Not logged in!");
        }
        // same with friends functionality - friend model must be added
    }
};

module.exports = resolvers;