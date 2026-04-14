"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftTeamsTenantBasedHandleResponseData = void 0;
/**
 * Tenant-based handle data from a response.
 */
class MicrosoftTeamsTenantBasedHandleResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MicrosoftTeamsTenantBasedHandleResponseData.attributeTypeMap;
    }
}
exports.MicrosoftTeamsTenantBasedHandleResponseData = MicrosoftTeamsTenantBasedHandleResponseData;
/**
 * @ignore
 */
MicrosoftTeamsTenantBasedHandleResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MicrosoftTeamsTenantBasedHandleAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "MicrosoftTeamsTenantBasedHandleType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MicrosoftTeamsTenantBasedHandleResponseData.js.map