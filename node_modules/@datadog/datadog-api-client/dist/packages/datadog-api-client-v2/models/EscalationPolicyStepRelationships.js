"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationPolicyStepRelationships = void 0;
/**
 * Represents the relationship of an escalation policy step to its targets.
 */
class EscalationPolicyStepRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationPolicyStepRelationships.attributeTypeMap;
    }
}
exports.EscalationPolicyStepRelationships = EscalationPolicyStepRelationships;
/**
 * @ignore
 */
EscalationPolicyStepRelationships.attributeTypeMap = {
    targets: {
        baseName: "targets",
        type: "EscalationTargets",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationPolicyStepRelationships.js.map