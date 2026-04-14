"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSuppressionUpdateRequest = void 0;
/**
 * Request object containing the fields to update on the suppression rule.
 */
class SecurityMonitoringSuppressionUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSuppressionUpdateRequest.attributeTypeMap;
    }
}
exports.SecurityMonitoringSuppressionUpdateRequest = SecurityMonitoringSuppressionUpdateRequest;
/**
 * @ignore
 */
SecurityMonitoringSuppressionUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SecurityMonitoringSuppressionUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSuppressionUpdateRequest.js.map