"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftTeamsTenantBasedHandleRequestData = void 0;
/**
 * Tenant-based handle data from a response.
 */
class MicrosoftTeamsTenantBasedHandleRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MicrosoftTeamsTenantBasedHandleRequestData.attributeTypeMap;
    }
}
exports.MicrosoftTeamsTenantBasedHandleRequestData = MicrosoftTeamsTenantBasedHandleRequestData;
/**
 * @ignore
 */
MicrosoftTeamsTenantBasedHandleRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MicrosoftTeamsTenantBasedHandleRequestAttributes",
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
//# sourceMappingURL=MicrosoftTeamsTenantBasedHandleRequestData.js.map