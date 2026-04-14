"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSuppressionsResponse = void 0;
/**
 * Response object containing the available suppression rules.
 */
class SecurityMonitoringSuppressionsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSuppressionsResponse.attributeTypeMap;
    }
}
exports.SecurityMonitoringSuppressionsResponse = SecurityMonitoringSuppressionsResponse;
/**
 * @ignore
 */
SecurityMonitoringSuppressionsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<SecurityMonitoringSuppression>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSuppressionsResponse.js.map