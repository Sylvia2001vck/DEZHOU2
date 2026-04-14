"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleChatUpdateOrganizationHandleRequest = void 0;
/**
 * Update organization handle request.
 */
class GoogleChatUpdateOrganizationHandleRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GoogleChatUpdateOrganizationHandleRequest.attributeTypeMap;
    }
}
exports.GoogleChatUpdateOrganizationHandleRequest = GoogleChatUpdateOrganizationHandleRequest;
/**
 * @ignore
 */
GoogleChatUpdateOrganizationHandleRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "GoogleChatUpdateOrganizationHandleRequestData",
        required: true,
    },
    type: {
        baseName: "type",
        type: "GoogleChatOrganizationHandleType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GoogleChatUpdateOrganizationHandleRequest.js.map