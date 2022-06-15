import {expect} from "chai";
import {AssetResolver} from "../src/assets/AssetResolver";
import {AppDataSource} from "../src/data-source";

describe("Example suite", () => {

    beforeEach(async () => {
        // Initialize and reset the db before each test
        await AppDataSource.initialize();
    });

    it("should pass", async () => {
        const resolver = new AssetResolver();
        const result = await resolver.getAllAssets();
        expect(result.length).to.eq(0);
    });

});
