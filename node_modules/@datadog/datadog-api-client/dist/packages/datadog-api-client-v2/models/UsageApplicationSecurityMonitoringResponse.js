"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageApplicationSecurityMonitoringResponse = void 0;
/**
 * Application Security Monitoring usage response.
 */
class UsageApplicationSecurityMonitoringResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageApplicationSecurityMonitoringResponse.attributeTypeMap;
    }
}
exports.UsageApplicationSecurityMonitoringResponse = UsageApplicationSecurityMonitoringResponse;
/**
 * @ignore
 */
UsageApplicationSecurityMonitoringResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<UsageDataObject>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageApplicationSecurityMonitoringResponse.js.map