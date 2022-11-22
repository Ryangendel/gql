const { gql } = require("apollo-server-express")

const typeDefs = gql`
    type Dogs{
        name: String
        age: Int
        caretaker: String
    }

    type Person{
        person_name: String
        address: String
        dog: String
    }

    type Query {
        getAllDogs: Dogs
        banana: [Dogs]
    }
`

module.exports = typeDefs

//CRUD
//create, read, update, delete

//Query ===READ
//Mutation === Create, update, delete