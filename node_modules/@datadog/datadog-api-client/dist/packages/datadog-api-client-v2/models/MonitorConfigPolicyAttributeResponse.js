"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorConfigPolicyAttributeResponse = void 0;
/**
 * Policy and policy type for a monitor configuration policy.
 */
class MonitorConfigPolicyAttributeResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorConfigPolicyAttributeResponse.attributeTypeMap;
    }
}
exports.MonitorConfigPolicyAttributeResponse = MonitorConfigPolicyAttributeResponse;
/**
 * @ignore
 */
MonitorConfigPolicyAttributeResponse.attributeTypeMap = {
    policy: {
        baseName: "policy",
        type: "MonitorConfigPolicyPolicy",
    },
    policyType: {
        baseName: "policy_type",
        type: "MonitorConfigPolicyType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorConfigPolicyAttributeResponse.js.map