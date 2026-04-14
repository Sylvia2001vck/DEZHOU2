"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleChatAppNamedSpaceResponseData = void 0;
/**
 * Google Chat space data from a response.
 */
class GoogleChatAppNamedSpaceResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GoogleChatAppNamedSpaceResponseData.attributeTypeMap;
    }
}
exports.GoogleChatAppNamedSpaceResponseData = GoogleChatAppNamedSpaceResponseData;
/**
 * @ignore
 */
GoogleChatAppNamedSpaceResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "GoogleChatAppNamedSpaceResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "GoogleChatAppNamedSpaceType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GoogleChatAppNamedSpaceResponseData.js.map