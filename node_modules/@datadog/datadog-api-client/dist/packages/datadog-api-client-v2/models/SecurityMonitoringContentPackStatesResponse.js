"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringContentPackStatesResponse = void 0;
/**
 * Response containing content pack states.
 */
class SecurityMonitoringContentPackStatesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringContentPackStatesResponse.attributeTypeMap;
    }
}
exports.SecurityMonitoringContentPackStatesResponse = SecurityMonitoringContentPackStatesResponse;
/**
 * @ignore
 */
SecurityMonitoringContentPackStatesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<SecurityMonitoringContentPackStateData>",
        required: true,
    },
    meta: {
        baseName: "meta",
        type: "SecurityMonitoringContentPackStateMeta",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringContentPackStatesResponse.js.map