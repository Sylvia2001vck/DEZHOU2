"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleChatUpdateOrganizationHandleRequestData = void 0;
/**
 * Organization handle data for an update request.
 */
class GoogleChatUpdateOrganizationHandleRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GoogleChatUpdateOrganizationHandleRequestData.attributeTypeMap;
    }
}
exports.GoogleChatUpdateOrganizationHandleRequestData = GoogleChatUpdateOrganizationHandleRequestData;
/**
 * @ignore
 */
GoogleChatUpdateOrganizationHandleRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "GoogleChatUpdateOrganizationHandleRequestAttributes",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GoogleChatUpdateOrganizationHandleRequestData.js.map