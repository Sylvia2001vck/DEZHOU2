"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastlyAccountResponse = void 0;
/**
 * The expected response schema when getting a Fastly account.
 */
class FastlyAccountResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FastlyAccountResponse.attributeTypeMap;
    }
}
exports.FastlyAccountResponse = FastlyAccountResponse;
/**
 * @ignore
 */
FastlyAccountResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "FastlyAccountResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FastlyAccountResponse.js.map