"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationPolicyDataRelationshipsSteps = void 0;
/**
 * Defines the relationship to a collection of steps within an escalation policy. Contains an array of step data references.
 */
class EscalationPolicyDataRelationshipsSteps {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationPolicyDataRelationshipsSteps.attributeTypeMap;
    }
}
exports.EscalationPolicyDataRelationshipsSteps = EscalationPolicyDataRelationshipsSteps;
/**
 * @ignore
 */
EscalationPolicyDataRelationshipsSteps.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<EscalationPolicyDataRelationshipsStepsDataItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationPolicyDataRelationshipsSteps.js.map