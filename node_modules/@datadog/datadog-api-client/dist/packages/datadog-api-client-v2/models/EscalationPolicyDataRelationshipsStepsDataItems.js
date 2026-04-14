"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationPolicyDataRelationshipsStepsDataItems = void 0;
/**
 * Defines a relationship to a single step within an escalation policy. Contains the step's `id` and `type`.
 */
class EscalationPolicyDataRelationshipsStepsDataItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationPolicyDataRelationshipsStepsDataItems.attributeTypeMap;
    }
}
exports.EscalationPolicyDataRelationshipsStepsDataItems = EscalationPolicyDataRelationshipsStepsDataItems;
/**
 * @ignore
 */
EscalationPolicyDataRelationshipsStepsDataItems.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "EscalationPolicyDataRelationshipsStepsDataItemsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationPolicyDataRelationshipsStepsDataItems.js.map