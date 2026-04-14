"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorConfigPolicyAttributeCreateRequest = void 0;
/**
 * Policy and policy type for a monitor configuration policy.
 */
class MonitorConfigPolicyAttributeCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorConfigPolicyAttributeCreateRequest.attributeTypeMap;
    }
}
exports.MonitorConfigPolicyAttributeCreateRequest = MonitorConfigPolicyAttributeCreateRequest;
/**
 * @ignore
 */
MonitorConfigPolicyAttributeCreateRequest.attributeTypeMap = {
    policy: {
        baseName: "policy",
        type: "MonitorConfigPolicyPolicyCreateRequest",
        required: true,
    },
    policyType: {
        baseName: "policy_type",
        type: "MonitorConfigPolicyType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorConfigPolicyAttributeCreateRequest.js.map