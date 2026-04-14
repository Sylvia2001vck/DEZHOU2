"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleChatAppNamedSpaceResponse = void 0;
/**
 * Response with Google Chat space information.
 */
class GoogleChatAppNamedSpaceResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GoogleChatAppNamedSpaceResponse.attributeTypeMap;
    }
}
exports.GoogleChatAppNamedSpaceResponse = GoogleChatAppNamedSpaceResponse;
/**
 * @ignore
 */
GoogleChatAppNamedSpaceResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "GoogleChatAppNamedSpaceResponseData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GoogleChatAppNamedSpaceResponse.js.map