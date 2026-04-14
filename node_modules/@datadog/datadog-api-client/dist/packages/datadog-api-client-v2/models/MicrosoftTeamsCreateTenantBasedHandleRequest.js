"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftTeamsCreateTenantBasedHandleRequest = void 0;
/**
 * Create tenant-based handle request.
 */
class MicrosoftTeamsCreateTenantBasedHandleRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MicrosoftTeamsCreateTenantBasedHandleRequest.attributeTypeMap;
    }
}
exports.MicrosoftTeamsCreateTenantBasedHandleRequest = MicrosoftTeamsCreateTenantBasedHandleRequest;
/**
 * @ignore
 */
MicrosoftTeamsCreateTenantBasedHandleRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MicrosoftTeamsTenantBasedHandleRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MicrosoftTeamsCreateTenantBasedHandleRequest.js.map