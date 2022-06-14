import {Query, Resolver} from "type-graphql";
import {Service} from "typedi";
import {Asset} from "./Asset";
import {AppDataSource} from "../data-source";
import {MoreThan} from "typeorm";

@Service()
@Resolver()
export class AssetResolver {

    @Query((_returns) => [Asset], {description: "Get all assets"})
    async getAllAssets() {
        // Example of how to use the database
        return await AppDataSource.getRepository(Asset).find({
            where: {
                id: MoreThan(0)
            }
        });
    }
}
