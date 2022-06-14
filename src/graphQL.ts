import {buildSchema} from "type-graphql";
import {AssetResolver} from "./assets/AssetResolver";
import {Container} from "typedi";

const resolvers = [
    AssetResolver
] as const;


export const graphqlSchema = async () => {
    return buildSchema({
        resolvers: resolvers,
        validate: true,
        container: Container,
        emitSchemaFile: true,
    });
};
