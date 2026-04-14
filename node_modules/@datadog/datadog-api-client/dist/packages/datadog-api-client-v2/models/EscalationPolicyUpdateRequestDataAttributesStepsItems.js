"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationPolicyUpdateRequestDataAttributesStepsItems = void 0;
/**
 * Defines a single escalation step within an escalation policy update request. Contains assignment strategy, escalation timeout, an optional step ID, and a list of targets.
 */
class EscalationPolicyUpdateRequestDataAttributesStepsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationPolicyUpdateRequestDataAttributesStepsItems.attributeTypeMap;
    }
}
exports.EscalationPolicyUpdateRequestDataAttributesStepsItems = EscalationPolicyUpdateRequestDataAttributesStepsItems;
/**
 * @ignore
 */
EscalationPolicyUpdateRequestDataAttributesStepsItems.attributeTypeMap = {
    assignment: {
        baseName: "assignment",
        type: "EscalationPolicyStepAttributesAssignment",
    },
    escalateAfterSeconds: {
        baseName: "escalate_after_seconds",
        type: "number",
        format: "int64",
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=EscalationPolicyUpdateRequestDataAttributesStepsItems.js.map