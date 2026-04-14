"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignalIncidentsUpdateData = void 0;
/**
 * Data containing the patch for changing the related incidents of a signal.
 */
class SecurityMonitoringSignalIncidentsUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignalIncidentsUpdateData.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignalIncidentsUpdateData = SecurityMonitoringSignalIncidentsUpdateData;
/**
 * @ignore
 */
SecurityMonitoringSignalIncidentsUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SecurityMonitoringSignalIncidentsUpdateAttributes",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSignalIncidentsUpdateData.js.map