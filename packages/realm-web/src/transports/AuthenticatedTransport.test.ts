import { expect } from "chai";

import { AuthenticatedTransport } from "./AuthenticatedTransport";
import { MockTransport } from "../test/MockTransport";

describe("AuthenticatedTransport", () => {
    it("constructs", () => {
        const transport = new AuthenticatedTransport(new MockTransport(), {
            currentUser: null,
        });
        // Expect something of the getters and setters
        expect(typeof transport.fetch).equals("function");
    });
});
