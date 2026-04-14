"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignalStateUpdateAttributes = void 0;
/**
 * Attributes describing the change of state of a security signal.
 */
class SecurityMonitoringSignalStateUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignalStateUpdateAttributes.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignalStateUpdateAttributes = SecurityMonitoringSignalStateUpdateAttributes;
/**
 * @ignore
 */
SecurityMonitoringSignalStateUpdateAttributes.attributeTypeMap = {
    archiveComment: {
        baseName: "archive_comment",
        type: "string",
    },
    archiveReason: {
        baseName: "archive_reason",
        type: "SecurityMonitoringSignalArchiveReason",
    },
    state: {
        baseName: "state",
        type: "SecurityMonitoringSignalState",
        required: true,
    },
    version: {
        baseName: "version",
        type: "number",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSignalStateUpdateAttributes.js.map