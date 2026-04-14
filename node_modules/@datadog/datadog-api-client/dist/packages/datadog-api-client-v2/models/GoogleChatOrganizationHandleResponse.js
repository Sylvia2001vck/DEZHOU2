"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleChatOrganizationHandleResponse = void 0;
/**
 * Organization handle for monitor notifications to a Google Chat space within a Google organization.
 */
class GoogleChatOrganizationHandleResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GoogleChatOrganizationHandleResponse.attributeTypeMap;
    }
}
exports.GoogleChatOrganizationHandleResponse = GoogleChatOrganizationHandleResponse;
/**
 * @ignore
 */
GoogleChatOrganizationHandleResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "GoogleChatOrganizationHandleResponseData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GoogleChatOrganizationHandleResponse.js.map