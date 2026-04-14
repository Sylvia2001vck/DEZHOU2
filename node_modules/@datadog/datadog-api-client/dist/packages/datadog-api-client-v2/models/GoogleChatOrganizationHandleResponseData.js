"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleChatOrganizationHandleResponseData = void 0;
/**
 * Organization handle data from a response.
 */
class GoogleChatOrganizationHandleResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GoogleChatOrganizationHandleResponseData.attributeTypeMap;
    }
}
exports.GoogleChatOrganizationHandleResponseData = GoogleChatOrganizationHandleResponseData;
/**
 * @ignore
 */
GoogleChatOrganizationHandleResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "GoogleChatOrganizationHandleResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "GoogleChatOrganizationHandleType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GoogleChatOrganizationHandleResponseData.js.map