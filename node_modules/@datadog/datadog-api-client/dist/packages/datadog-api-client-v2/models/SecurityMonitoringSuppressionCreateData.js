"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSuppressionCreateData = void 0;
/**
 * Object for a single suppression rule.
 */
class SecurityMonitoringSuppressionCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSuppressionCreateData.attributeTypeMap;
    }
}
exports.SecurityMonitoringSuppressionCreateData = SecurityMonitoringSuppressionCreateData;
/**
 * @ignore
 */
SecurityMonitoringSuppressionCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SecurityMonitoringSuppressionCreateAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "SecurityMonitoringSuppressionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSuppressionCreateData.js.map