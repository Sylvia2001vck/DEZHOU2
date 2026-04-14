"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationPolicyUpdateRequestData = void 0;
/**
 * Represents the data for updating an existing escalation policy, including its ID, attributes, relationships, and resource type.
 */
class EscalationPolicyUpdateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationPolicyUpdateRequestData.attributeTypeMap;
    }
}
exports.EscalationPolicyUpdateRequestData = EscalationPolicyUpdateRequestData;
/**
 * @ignore
 */
EscalationPolicyUpdateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "EscalationPolicyUpdateRequestDataAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "EscalationPolicyUpdateRequestDataRelationships",
    },
    type: {
        baseName: "type",
        type: "EscalationPolicyUpdateRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationPolicyUpdateRequestData.js.map