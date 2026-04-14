"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignalsListResponse = void 0;
/**
 * The response object with all security signals matching the request
 * and pagination information.
 */
class SecurityMonitoringSignalsListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignalsListResponse.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignalsListResponse = SecurityMonitoringSignalsListResponse;
/**
 * @ignore
 */
SecurityMonitoringSignalsListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<SecurityMonitoringSignal>",
    },
    links: {
        baseName: "links",
        type: "SecurityMonitoringSignalsListResponseLinks",
    },
    meta: {
        baseName: "meta",
        type: "SecurityMonitoringSignalsListResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSignalsListResponse.js.map