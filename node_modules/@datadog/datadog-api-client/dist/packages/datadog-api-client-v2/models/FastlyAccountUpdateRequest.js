"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastlyAccountUpdateRequest = void 0;
/**
 * Payload schema when updating a Fastly account.
 */
class FastlyAccountUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FastlyAccountUpdateRequest.attributeTypeMap;
    }
}
exports.FastlyAccountUpdateRequest = FastlyAccountUpdateRequest;
/**
 * @ignore
 */
FastlyAccountUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "FastlyAccountUpdateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FastlyAccountUpdateRequest.js.map