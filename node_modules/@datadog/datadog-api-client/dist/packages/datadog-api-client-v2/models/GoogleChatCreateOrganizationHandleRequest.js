"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleChatCreateOrganizationHandleRequest = void 0;
/**
 * Create organization handle request.
 */
class GoogleChatCreateOrganizationHandleRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GoogleChatCreateOrganizationHandleRequest.attributeTypeMap;
    }
}
exports.GoogleChatCreateOrganizationHandleRequest = GoogleChatCreateOrganizationHandleRequest;
/**
 * @ignore
 */
GoogleChatCreateOrganizationHandleRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "GoogleChatCreateOrganizationHandleRequestData",
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
//# sourceMappingURL=GoogleChatCreateOrganizationHandleRequest.js.map