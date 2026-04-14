"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escalation = void 0;
/**
 * Represents an escalation policy step.
 */
class Escalation {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Escalation.attributeTypeMap;
    }
}
exports.Escalation = Escalation;
/**
 * @ignore
 */
Escalation.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "EscalationRelationships",
    },
    type: {
        baseName: "type",
        type: "EscalationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Escalation.js.map