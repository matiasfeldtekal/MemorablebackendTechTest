import {AppDataSource} from "./data-source"
import {graphqlSchema} from "./graphQL";
import {ApolloServer} from "apollo-server-express";
import Express from "express";
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core";

AppDataSource.initialize().then(async () => {

    // initialize graphql
    const schema = await graphqlSchema();


    // initialize apollo server
    const plugins = [ApolloServerPluginLandingPageGraphQLPlayground()];

    const server = new ApolloServer({schema, plugins});

    const app = Express();
    await server.start();

    server.applyMiddleware({app});

    app.listen({port: 3333}, () =>
        console.log(`🚀 Server ready and listening at ==> http://localhost:3333${server.graphqlPath}`),
    );

}).catch(error => console.log(error))
