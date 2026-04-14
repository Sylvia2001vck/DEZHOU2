"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationRelationshipsRespondersDataItems = void 0;
/**
 * Represents a user assigned to an escalation step.
 */
class EscalationRelationshipsRespondersDataItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationRelationshipsRespondersDataItems.attributeTypeMap;
    }
}
exports.EscalationRelationshipsRespondersDataItems = EscalationRelationshipsRespondersDataItems;
/**
 * @ignore
 */
EscalationRelationshipsRespondersDataItems.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "EscalationRelationshipsRespondersDataItemsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationRelationshipsRespondersDataItems.js.map