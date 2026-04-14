"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationPolicyStep = void 0;
/**
 * Represents a single step in an escalation policy, including its attributes, relationships, and resource type.
 */
class EscalationPolicyStep {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationPolicyStep.attributeTypeMap;
    }
}
exports.EscalationPolicyStep = EscalationPolicyStep;
/**
 * @ignore
 */
EscalationPolicyStep.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "EscalationPolicyStepAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "EscalationPolicyStepRelationships",
    },
    type: {
        baseName: "type",
        type: "EscalationPolicyStepType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationPolicyStep.js.map