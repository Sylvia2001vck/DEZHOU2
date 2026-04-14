"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListInterfaceTagsResponseData = void 0;
/**
 * Response data for listing interface tags.
 */
class ListInterfaceTagsResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListInterfaceTagsResponseData.attributeTypeMap;
    }
}
exports.ListInterfaceTagsResponseData = ListInterfaceTagsResponseData;
/**
 * @ignore
 */
ListInterfaceTagsResponseData.attributeTypeMap = {
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
//# sourceMappingURL=ListInterfaceTagsResponseData.js.map