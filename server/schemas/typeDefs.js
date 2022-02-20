//will work on this on another branch
const { gql } = require("apollo-server-express");

// wait to add 'me' query - refer class notes
//user exercise workout - type must be added
// follow directs to unadded friends model 
const typeDefs = gql `
    type User {
        _id: ID
        username: String
        email: String
        workout: [workouts]
        follow: [User]
        followCount: Int
    }

    type Workout {
        
    }


`;

module.exports = typeDefs;