"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTagsResponseData = void 0;
/**
 * The list tags response data.
 */
class ListTagsResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListTagsResponseData.attributeTypeMap;
    }
}
exports.ListTagsResponseData = ListTagsResponseData;
/**
 * @ignore
 */
ListTagsResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ListTagsResponseDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListTagsResponseData.js.map