//will work on this on another branch
const { gql } = require("apollo-server-express");

// wait to add 'me' query - refer class notes
//user exercise workout - type must be added
// follow directs to unadded friends model 
//for mutation figure out how to add friend follow and mention exercise body usage
const typeDefs = gql `
    type User {
        _id: ID
        username: String
        email: String
        workouts: [Workout]
        follow: [User]
        followCount: Int
    }

    type Exercise {
        _id: ID
        exerciseBody: String
        username: String
        createdAt: String
    }

    type Workout {
        _id: ID 
        description: String
        username: String
        createdAt: String
        scheduled: String
        exercises: [Exercise]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        workouts(username: String!): [Workout]
        allWorkouts: [Workout]
        workout(_id: ID!): Workout
        exercises(username: String!): [Exercise]
        allExercises: [Exercise]
        exercise(_id: ID!): Exercise
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addExercise(exerciseBody: String!): Exercise
        addWorkout(description: String!, exercises: [ID]!, scheduled: String!): Workout
        addFriend(friendId: ID!): User
    }

`;

module.exports = typeDefs;