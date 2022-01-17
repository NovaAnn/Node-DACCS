const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    
    type Details{
        _id: ID!
        firstName: String!
         lastName: String!
         email: String!
         city: String!
         phoneNumber: Float!
         bankAccount: String!
         streetLine1: String!
    }

    type RootQuery {
        getDetails(phoneNumber:Float!):Details
    
    }

    type RootMutation {
    
        editProfile(firstName: String!, lastName: String!,email: String!, city: String!): Boolean
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
