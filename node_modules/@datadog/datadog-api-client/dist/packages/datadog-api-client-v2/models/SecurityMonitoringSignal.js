"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignal = void 0;
/**
 * Object description of a security signal.
 */
class SecurityMonitoringSignal {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignal.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignal = SecurityMonitoringSignal;
/**
 * @ignore
 */
SecurityMonitoringSignal.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SecurityMonitoringSignalAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SecurityMonitoringSignalType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSignal.js.map