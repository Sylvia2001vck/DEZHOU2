"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationPolicyUpdateRequestDataRelationships = void 0;
/**
 * Represents relationships in an escalation policy update request, including references to teams.
 */
class EscalationPolicyUpdateRequestDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationPolicyUpdateRequestDataRelationships.attributeTypeMap;
    }
}
exports.EscalationPolicyUpdateRequestDataRelationships = EscalationPolicyUpdateRequestDataRelationships;
/**
 * @ignore
 */
EscalationPolicyUpdateRequestDataRelationships.attributeTypeMap = {
    teams: {
        baseName: "teams",
        type: "DataRelationshipsTeams",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationPolicyUpdateRequestDataRelationships.js.map