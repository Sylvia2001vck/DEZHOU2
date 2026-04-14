"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastlyAccountCreateRequest = void 0;
/**
 * Payload schema when adding a Fastly account.
 */
class FastlyAccountCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FastlyAccountCreateRequest.attributeTypeMap;
    }
}
exports.FastlyAccountCreateRequest = FastlyAccountCreateRequest;
/**
 * @ignore
 */
FastlyAccountCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "FastlyAccountCreateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FastlyAccountCreateRequest.js.map