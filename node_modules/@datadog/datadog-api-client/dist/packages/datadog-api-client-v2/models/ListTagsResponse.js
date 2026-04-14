"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTagsResponse = void 0;
/**
 * List tags response.
 */
class ListTagsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListTagsResponse.attributeTypeMap;
    }
}
exports.ListTagsResponse = ListTagsResponse;
/**
 * @ignore
 */
ListTagsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ListTagsResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListTagsResponse.js.map