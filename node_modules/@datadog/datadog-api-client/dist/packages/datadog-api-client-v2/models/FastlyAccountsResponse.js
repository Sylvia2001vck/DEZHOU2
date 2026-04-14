"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastlyAccountsResponse = void 0;
/**
 * The expected response schema when getting Fastly accounts.
 */
class FastlyAccountsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FastlyAccountsResponse.attributeTypeMap;
    }
}
exports.FastlyAccountsResponse = FastlyAccountsResponse;
/**
 * @ignore
 */
FastlyAccountsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<FastlyAccountResponseData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FastlyAccountsResponse.js.map