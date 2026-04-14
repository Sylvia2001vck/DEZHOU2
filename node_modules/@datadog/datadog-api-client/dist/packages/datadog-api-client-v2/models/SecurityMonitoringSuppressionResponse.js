"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSuppressionResponse = void 0;
/**
 * Response object containing a single suppression rule.
 */
class SecurityMonitoringSuppressionResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSuppressionResponse.attributeTypeMap;
    }
}
exports.SecurityMonitoringSuppressionResponse = SecurityMonitoringSuppressionResponse;
/**
 * @ignore
 */
SecurityMonitoringSuppressionResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SecurityMonitoringSuppression",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSuppressionResponse.js.map