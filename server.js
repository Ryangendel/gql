const express = require("express")
const { ApolloServer } = require("apollo-server-express")
const typeDefs = require("./utils/typeDefs")
const resolvers = require("./utils/resolvers")

const PORT = process.env.PORT || 3000

const app = express()

const server = new ApolloServer({
    typeDefs, 
    resolvers
})

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start()
    server.applyMiddleware({app})

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    app.listen(PORT,()=>{
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
}

startApolloServer(typeDefs, resolvers)