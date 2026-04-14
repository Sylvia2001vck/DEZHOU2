"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorConfigPolicyListResponse = void 0;
/**
 * Response for retrieving all monitor configuration policies.
 */
class MonitorConfigPolicyListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorConfigPolicyListResponse.attributeTypeMap;
    }
}
exports.MonitorConfigPolicyListResponse = MonitorConfigPolicyListResponse;
/**
 * @ignore
 */
MonitorConfigPolicyListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<MonitorConfigPolicyResponseData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorConfigPolicyListResponse.js.map