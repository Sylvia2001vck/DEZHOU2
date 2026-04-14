"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignalListRequest = void 0;
/**
 * The request for a security signal list.
 */
class SecurityMonitoringSignalListRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignalListRequest.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignalListRequest = SecurityMonitoringSignalListRequest;
/**
 * @ignore
 */
SecurityMonitoringSignalListRequest.attributeTypeMap = {
    filter: {
        baseName: "filter",
        type: "SecurityMonitoringSignalListRequestFilter",
    },
    page: {
        baseName: "page",
        type: "SecurityMonitoringSignalListRequestPage",
    },
    sort: {
        baseName: "sort",
        type: "SecurityMonitoringSignalsSort",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSignalListRequest.js.map