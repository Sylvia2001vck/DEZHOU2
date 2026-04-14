"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftTeamsTenantBasedHandleInfoResponseData = void 0;
/**
 * Tenant-based handle data from a response.
 */
class MicrosoftTeamsTenantBasedHandleInfoResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MicrosoftTeamsTenantBasedHandleInfoResponseData.attributeTypeMap;
    }
}
exports.MicrosoftTeamsTenantBasedHandleInfoResponseData = MicrosoftTeamsTenantBasedHandleInfoResponseData;
/**
 * @ignore
 */
MicrosoftTeamsTenantBasedHandleInfoResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MicrosoftTeamsTenantBasedHandleInfoResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "MicrosoftTeamsTenantBasedHandleInfoType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MicrosoftTeamsTenantBasedHandleInfoResponseData.js.map