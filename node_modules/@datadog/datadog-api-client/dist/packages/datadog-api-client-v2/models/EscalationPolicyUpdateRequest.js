"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationPolicyUpdateRequest = void 0;
/**
 * Represents a request to update an existing escalation policy, including the updated policy data.
 */
class EscalationPolicyUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationPolicyUpdateRequest.attributeTypeMap;
    }
}
exports.EscalationPolicyUpdateRequest = EscalationPolicyUpdateRequest;
/**
 * @ignore
 */
EscalationPolicyUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "EscalationPolicyUpdateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationPolicyUpdateRequest.js.map