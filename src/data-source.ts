import "reflect-metadata"
import { DataSource } from "typeorm"
import { Asset } from "./assets/Asset"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: process.env.NODE_ENV == "test" ? "test.sqlite" : "database.sqlite",
    synchronize: true,
    logging: false,
    dropSchema: process.env.NODE_ENV == "test",
    entities: [Asset],
    migrations: [],
    subscribers: [],
})
