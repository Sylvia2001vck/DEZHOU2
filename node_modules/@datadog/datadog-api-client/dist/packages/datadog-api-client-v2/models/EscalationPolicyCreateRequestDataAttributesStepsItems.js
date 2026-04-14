"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationPolicyCreateRequestDataAttributesStepsItems = void 0;
/**
 * Defines a single escalation step within an escalation policy creation request. Contains assignment strategy, escalation timeout, and a list of targets.
 */
class EscalationPolicyCreateRequestDataAttributesStepsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationPolicyCreateRequestDataAttributesStepsItems.attributeTypeMap;
    }
}
exports.EscalationPolicyCreateRequestDataAttributesStepsItems = EscalationPolicyCreateRequestDataAttributesStepsItems;
/**
 * @ignore
 */
EscalationPolicyCreateRequestDataAttributesStepsItems.attributeTypeMap = {
    assignment: {
        baseName: "assignment",
        type: "EscalationPolicyStepAttributesAssignment",
    },
    escalateAfterSeconds: {
        baseName: "escalate_after_seconds",
        type: "number",
        format: "int64",
    },
    targets: {
        baseName: "targets",
        type: "Array<EscalationPolicyStepTarget>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationPolicyCreateRequestDataAttributesStepsItems.js.map