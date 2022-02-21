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
        workout: [Workout]
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
        workoutText: String
        username: String
        createdAt: String
        exercise: [Exercise]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        workouts(username: String): [Workout]
        workout(_id: ID!): Workout
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addWorkout(workoutText: String!): Workout
    }

`;

module.exports = typeDefs;