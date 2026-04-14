"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftTeamsTenantBasedHandleResponse = void 0;
/**
 * Response of a tenant-based handle.
 */
class MicrosoftTeamsTenantBasedHandleResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MicrosoftTeamsTenantBasedHandleResponse.attributeTypeMap;
    }
}
exports.MicrosoftTeamsTenantBasedHandleResponse = MicrosoftTeamsTenantBasedHandleResponse;
/**
 * @ignore
 */
MicrosoftTeamsTenantBasedHandleResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MicrosoftTeamsTenantBasedHandleResponseData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MicrosoftTeamsTenantBasedHandleResponse.js.map