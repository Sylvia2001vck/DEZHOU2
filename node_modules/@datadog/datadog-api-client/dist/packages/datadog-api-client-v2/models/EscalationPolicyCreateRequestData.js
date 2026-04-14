"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationPolicyCreateRequestData = void 0;
/**
 * Represents the data for creating an escalation policy, including its attributes, relationships, and resource type.
 */
class EscalationPolicyCreateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationPolicyCreateRequestData.attributeTypeMap;
    }
}
exports.EscalationPolicyCreateRequestData = EscalationPolicyCreateRequestData;
/**
 * @ignore
 */
EscalationPolicyCreateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "EscalationPolicyCreateRequestDataAttributes",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "EscalationPolicyCreateRequestDataRelationships",
    },
    type: {
        baseName: "type",
        type: "EscalationPolicyCreateRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationPolicyCreateRequestData.js.map