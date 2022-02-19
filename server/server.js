const express = require("express");
//installed latest version of apollo - will check to see if we need to downgrade to version 2
const { ApolloServer } = require("apollo-server-express");
const { authMiddleware } = require("./utils/auth");

//curious about path 
const path = require("path");

const db = require("./config/connection");

//waiting for schemas so this is commented out for now
//const { typeDefs, resolvers } = require("./schemas");

const app = express();
const PORT = process.env.PORT || 3001;

const startServer = async() => {
    const server = new ApolloServer({
        //typeDefs,
        //resolvers,
        context: authMiddleware
    });

    await server.start();

    server.applyMiddleware({ app });

    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});