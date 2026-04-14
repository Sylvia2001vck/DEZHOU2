"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleChatOrganizationHandlesResponse = void 0;
/**
 * List of organization handles for monitor notifications to Google Chat spaces within a Google organization.
 */
class GoogleChatOrganizationHandlesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GoogleChatOrganizationHandlesResponse.attributeTypeMap;
    }
}
exports.GoogleChatOrganizationHandlesResponse = GoogleChatOrganizationHandlesResponse;
/**
 * @ignore
 */
GoogleChatOrganizationHandlesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<GoogleChatOrganizationHandleResponseData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GoogleChatOrganizationHandlesResponse.js.map