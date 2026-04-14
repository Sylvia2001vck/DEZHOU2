"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationPolicyDataRelationships = void 0;
/**
 * Represents the relationships for an escalation policy, including references to steps and teams.
 */
class EscalationPolicyDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationPolicyDataRelationships.attributeTypeMap;
    }
}
exports.EscalationPolicyDataRelationships = EscalationPolicyDataRelationships;
/**
 * @ignore
 */
EscalationPolicyDataRelationships.attributeTypeMap = {
    steps: {
        baseName: "steps",
        type: "EscalationPolicyDataRelationshipsSteps",
        required: true,
    },
    teams: {
        baseName: "teams",
        type: "DataRelationshipsTeams",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationPolicyDataRelationships.js.map