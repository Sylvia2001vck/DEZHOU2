"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftTeamsUpdateTenantBasedHandleRequestData = void 0;
/**
 * Tenant-based handle data from a response.
 */
class MicrosoftTeamsUpdateTenantBasedHandleRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MicrosoftTeamsUpdateTenantBasedHandleRequestData.attributeTypeMap;
    }
}
exports.MicrosoftTeamsUpdateTenantBasedHandleRequestData = MicrosoftTeamsUpdateTenantBasedHandleRequestData;
/**
 * @ignore
 */
MicrosoftTeamsUpdateTenantBasedHandleRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MicrosoftTeamsTenantBasedHandleAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "MicrosoftTeamsTenantBasedHandleType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MicrosoftTeamsUpdateTenantBasedHandleRequestData.js.map