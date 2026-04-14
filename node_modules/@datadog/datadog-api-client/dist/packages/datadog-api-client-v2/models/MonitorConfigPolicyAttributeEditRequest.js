"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorConfigPolicyAttributeEditRequest = void 0;
/**
 * Policy and policy type for a monitor configuration policy.
 */
class MonitorConfigPolicyAttributeEditRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorConfigPolicyAttributeEditRequest.attributeTypeMap;
    }
}
exports.MonitorConfigPolicyAttributeEditRequest = MonitorConfigPolicyAttributeEditRequest;
/**
 * @ignore
 */
MonitorConfigPolicyAttributeEditRequest.attributeTypeMap = {
    policy: {
        baseName: "policy",
        type: "MonitorConfigPolicyPolicy",
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
//# sourceMappingURL=MonitorConfigPolicyAttributeEditRequest.js.map