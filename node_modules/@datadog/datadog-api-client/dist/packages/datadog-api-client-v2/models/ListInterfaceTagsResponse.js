"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListInterfaceTagsResponse = void 0;
/**
 * Response for listing interface tags.
 */
class ListInterfaceTagsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListInterfaceTagsResponse.attributeTypeMap;
    }
}
exports.ListInterfaceTagsResponse = ListInterfaceTagsResponse;
/**
 * @ignore
 */
ListInterfaceTagsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ListInterfaceTagsResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListInterfaceTagsResponse.js.map