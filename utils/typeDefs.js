const { gql } = require("apollo-server-express")

const typeDefs = gql`
    type Dog{
        id: Int
        name: String
        age: Int
        caretaker: String
    }

    type Person{
        id: Int
        person_name: String
        address: String
        dog: String
    }

    type Query {
        getAllDogs: Dog
        banana: [Dog]
        specificDog(id: ID!): Dog
    }

    type Mutation {
        addDog( name:String!, age: Int!, caretaker: String!):Dog
    }


`

module.exports = typeDefs

//CRUD
//create, read, update, delete

//Query ===READ
//Mutation === Create, update, delete