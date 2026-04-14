"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationPolicyCreateRequestDataRelationships = void 0;
/**
 * Represents relationships in an escalation policy creation request, including references to teams.
 */
class EscalationPolicyCreateRequestDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationPolicyCreateRequestDataRelationships.attributeTypeMap;
    }
}
exports.EscalationPolicyCreateRequestDataRelationships = EscalationPolicyCreateRequestDataRelationships;
/**
 * @ignore
 */
EscalationPolicyCreateRequestDataRelationships.attributeTypeMap = {
    teams: {
        baseName: "teams",
        type: "DataRelationshipsTeams",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationPolicyCreateRequestDataRelationships.js.map