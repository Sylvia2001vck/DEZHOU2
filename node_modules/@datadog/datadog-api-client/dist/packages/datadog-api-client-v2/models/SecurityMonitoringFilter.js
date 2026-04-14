"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringFilter = void 0;
/**
 * The rule's suppression filter.
 */
class SecurityMonitoringFilter {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringFilter.attributeTypeMap;
    }
}
exports.SecurityMonitoringFilter = SecurityMonitoringFilter;
/**
 * @ignore
 */
SecurityMonitoringFilter.attributeTypeMap = {
    action: {
        baseName: "action",
        type: "SecurityMonitoringFilterAction",
    },
    query: {
        baseName: "query",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringFilter.js.map