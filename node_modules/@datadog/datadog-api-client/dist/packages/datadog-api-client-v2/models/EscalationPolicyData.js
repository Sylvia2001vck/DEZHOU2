"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationPolicyData = void 0;
/**
 * Represents the data for a single escalation policy, including its attributes, ID, relationships, and resource type.
 */
class EscalationPolicyData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationPolicyData.attributeTypeMap;
    }
}
exports.EscalationPolicyData = EscalationPolicyData;
/**
 * @ignore
 */
EscalationPolicyData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "EscalationPolicyDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "EscalationPolicyDataRelationships",
    },
    type: {
        baseName: "type",
        type: "EscalationPolicyDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationPolicyData.js.map