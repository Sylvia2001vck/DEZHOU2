"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftTeamsTenantBasedHandlesResponse = void 0;
/**
 * Response with a list of tenant-based handles.
 */
class MicrosoftTeamsTenantBasedHandlesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MicrosoftTeamsTenantBasedHandlesResponse.attributeTypeMap;
    }
}
exports.MicrosoftTeamsTenantBasedHandlesResponse = MicrosoftTeamsTenantBasedHandlesResponse;
/**
 * @ignore
 */
MicrosoftTeamsTenantBasedHandlesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<MicrosoftTeamsTenantBasedHandleInfoResponseData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MicrosoftTeamsTenantBasedHandlesResponse.js.map