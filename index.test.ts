import { Tavus } from "./index";

describe("tavus-typescript-sdk", () => {
    it("initialize client", async () => {
        const tavus = new Tavus({
            apiKey: "API_KEY",
        });
    });
});
