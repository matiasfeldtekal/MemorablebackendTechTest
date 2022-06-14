import "reflect-metadata"
import { DataSource } from "typeorm"
import { Asset } from "./assets/Asset"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [Asset],
    migrations: [],
    subscribers: [],
})
