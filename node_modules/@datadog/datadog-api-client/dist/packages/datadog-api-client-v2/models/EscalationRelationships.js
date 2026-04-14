"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationRelationships = void 0;
/**
 * Contains the relationships of an escalation object, including its responders.
 */
class EscalationRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationRelationships.attributeTypeMap;
    }
}
exports.EscalationRelationships = EscalationRelationships;
/**
 * @ignore
 */
EscalationRelationships.attributeTypeMap = {
    responders: {
        baseName: "responders",
        type: "EscalationRelationshipsResponders",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationRelationships.js.map