"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListApplicationKeysResponse = void 0;
/**
 * Response for a list of application keys.
 */
class ListApplicationKeysResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListApplicationKeysResponse.attributeTypeMap;
    }
}
exports.ListApplicationKeysResponse = ListApplicationKeysResponse;
/**
 * @ignore
 */
ListApplicationKeysResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<PartialApplicationKey>",
    },
    included: {
        baseName: "included",
        type: "Array<ApplicationKeyResponseIncludedItem>",
    },
    meta: {
        baseName: "meta",
        type: "ApplicationKeyResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListApplicationKeysResponse.js.map