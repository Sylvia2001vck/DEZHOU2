"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationPolicyCreateRequest = void 0;
/**
 * Represents a request to create a new escalation policy, including the policy data.
 */
class EscalationPolicyCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationPolicyCreateRequest.attributeTypeMap;
    }
}
exports.EscalationPolicyCreateRequest = EscalationPolicyCreateRequest;
/**
 * @ignore
 */
EscalationPolicyCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "EscalationPolicyCreateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationPolicyCreateRequest.js.map