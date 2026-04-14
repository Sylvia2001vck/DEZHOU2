"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSuppression = void 0;
/**
 * The suppression rule's properties.
 */
class SecurityMonitoringSuppression {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSuppression.attributeTypeMap;
    }
}
exports.SecurityMonitoringSuppression = SecurityMonitoringSuppression;
/**
 * @ignore
 */
SecurityMonitoringSuppression.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SecurityMonitoringSuppressionAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SecurityMonitoringSuppressionType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSuppression.js.map