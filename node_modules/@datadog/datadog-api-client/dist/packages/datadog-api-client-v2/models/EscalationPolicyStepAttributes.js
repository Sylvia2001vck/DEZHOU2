"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationPolicyStepAttributes = void 0;
/**
 * Defines attributes for an escalation policy step, such as assignment strategy and escalation timeout.
 */
class EscalationPolicyStepAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationPolicyStepAttributes.attributeTypeMap;
    }
}
exports.EscalationPolicyStepAttributes = EscalationPolicyStepAttributes;
/**
 * @ignore
 */
EscalationPolicyStepAttributes.attributeTypeMap = {
    assignment: {
        baseName: "assignment",
        type: "EscalationPolicyStepAttributesAssignment",
    },
    escalateAfterSeconds: {
        baseName: "escalate_after_seconds",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationPolicyStepAttributes.js.map