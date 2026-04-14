"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationRelationshipsResponders = void 0;
/**
 * Lists the users involved in a specific step of the escalation policy.
 */
class EscalationRelationshipsResponders {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationRelationshipsResponders.attributeTypeMap;
    }
}
exports.EscalationRelationshipsResponders = EscalationRelationshipsResponders;
/**
 * @ignore
 */
EscalationRelationshipsResponders.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<EscalationRelationshipsRespondersDataItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationRelationshipsResponders.js.map