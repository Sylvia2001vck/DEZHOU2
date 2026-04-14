"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignalIncidentsUpdateRequest = void 0;
/**
 * Request body for changing the related incidents of a given security monitoring signal.
 */
class SecurityMonitoringSignalIncidentsUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignalIncidentsUpdateRequest.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignalIncidentsUpdateRequest = SecurityMonitoringSignalIncidentsUpdateRequest;
/**
 * @ignore
 */
SecurityMonitoringSignalIncidentsUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SecurityMonitoringSignalIncidentsUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSignalIncidentsUpdateRequest.js.map