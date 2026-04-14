"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartialApplicationKeyResponse = void 0;
/**
 * Response for retrieving a partial application key.
 */
class PartialApplicationKeyResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PartialApplicationKeyResponse.attributeTypeMap;
    }
}
exports.PartialApplicationKeyResponse = PartialApplicationKeyResponse;
/**
 * @ignore
 */
PartialApplicationKeyResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "PartialApplicationKey",
    },
    included: {
        baseName: "included",
        type: "Array<ApplicationKeyResponseIncludedItem>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PartialApplicationKeyResponse.js.map