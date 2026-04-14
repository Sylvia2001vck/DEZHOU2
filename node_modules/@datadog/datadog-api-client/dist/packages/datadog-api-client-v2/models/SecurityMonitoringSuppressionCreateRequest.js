"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSuppressionCreateRequest = void 0;
/**
 * Request object that includes the suppression rule that you would like to create.
 */
class SecurityMonitoringSuppressionCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSuppressionCreateRequest.attributeTypeMap;
    }
}
exports.SecurityMonitoringSuppressionCreateRequest = SecurityMonitoringSuppressionCreateRequest;
/**
 * @ignore
 */
SecurityMonitoringSuppressionCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SecurityMonitoringSuppressionCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSuppressionCreateRequest.js.map