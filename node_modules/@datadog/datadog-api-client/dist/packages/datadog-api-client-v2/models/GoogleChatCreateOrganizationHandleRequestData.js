"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleChatCreateOrganizationHandleRequestData = void 0;
/**
 * Organization handle data for a create request.
 */
class GoogleChatCreateOrganizationHandleRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GoogleChatCreateOrganizationHandleRequestData.attributeTypeMap;
    }
}
exports.GoogleChatCreateOrganizationHandleRequestData = GoogleChatCreateOrganizationHandleRequestData;
/**
 * @ignore
 */
GoogleChatCreateOrganizationHandleRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "GoogleChatCreateOrganizationHandleRequestAttributes",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GoogleChatCreateOrganizationHandleRequestData.js.map