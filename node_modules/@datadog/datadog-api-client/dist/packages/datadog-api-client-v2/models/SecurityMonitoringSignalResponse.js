"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignalResponse = void 0;
/**
 * Security Signal response data object.
 */
class SecurityMonitoringSignalResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignalResponse.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignalResponse = SecurityMonitoringSignalResponse;
/**
 * @ignore
 */
SecurityMonitoringSignalResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SecurityMonitoringSignal",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSignalResponse.js.map