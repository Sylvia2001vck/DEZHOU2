"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftTeamsUpdateTenantBasedHandleRequest = void 0;
/**
 * Update tenant-based handle request.
 */
class MicrosoftTeamsUpdateTenantBasedHandleRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MicrosoftTeamsUpdateTenantBasedHandleRequest.attributeTypeMap;
    }
}
exports.MicrosoftTeamsUpdateTenantBasedHandleRequest = MicrosoftTeamsUpdateTenantBasedHandleRequest;
/**
 * @ignore
 */
MicrosoftTeamsUpdateTenantBasedHandleRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MicrosoftTeamsUpdateTenantBasedHandleRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MicrosoftTeamsUpdateTenantBasedHandleRequest.js.map