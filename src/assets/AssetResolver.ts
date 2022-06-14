import {Mutation, Query, Resolver} from "type-graphql";
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

    @Mutation((_returns) => Asset, {description: "Create an asset"})
    async createAsset() {
        // Example of how to use the database
        const asset = new Asset();
        asset.name = `New Asset ${Math.random()}`;
        return await AppDataSource.getRepository(Asset).save(asset);
    }
}
