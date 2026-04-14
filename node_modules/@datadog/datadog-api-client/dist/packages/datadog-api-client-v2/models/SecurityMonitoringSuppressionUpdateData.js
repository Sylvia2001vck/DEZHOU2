"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSuppressionUpdateData = void 0;
/**
 * The new suppression properties; partial updates are supported.
 */
class SecurityMonitoringSuppressionUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSuppressionUpdateData.attributeTypeMap;
    }
}
exports.SecurityMonitoringSuppressionUpdateData = SecurityMonitoringSuppressionUpdateData;
/**
 * @ignore
 */
SecurityMonitoringSuppressionUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SecurityMonitoringSuppressionUpdateAttributes",
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
//# sourceMappingURL=SecurityMonitoringSuppressionUpdateData.js.map