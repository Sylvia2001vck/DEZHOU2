"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorConfigPolicyResponse = void 0;
/**
 * Response for retrieving a monitor configuration policy.
 */
class MonitorConfigPolicyResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorConfigPolicyResponse.attributeTypeMap;
    }
}
exports.MonitorConfigPolicyResponse = MonitorConfigPolicyResponse;
/**
 * @ignore
 */
MonitorConfigPolicyResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MonitorConfigPolicyResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorConfigPolicyResponse.js.map