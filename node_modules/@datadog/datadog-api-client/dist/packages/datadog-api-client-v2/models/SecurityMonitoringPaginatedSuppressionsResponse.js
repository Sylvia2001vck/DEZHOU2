"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringPaginatedSuppressionsResponse = void 0;
/**
 * Response object containing the available suppression rules with pagination metadata.
 */
class SecurityMonitoringPaginatedSuppressionsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringPaginatedSuppressionsResponse.attributeTypeMap;
    }
}
exports.SecurityMonitoringPaginatedSuppressionsResponse = SecurityMonitoringPaginatedSuppressionsResponse;
/**
 * @ignore
 */
SecurityMonitoringPaginatedSuppressionsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<SecurityMonitoringSuppression>",
    },
    meta: {
        baseName: "meta",
        type: "SecurityMonitoringSuppressionsMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringPaginatedSuppressionsResponse.js.map