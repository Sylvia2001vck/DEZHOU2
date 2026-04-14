"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestDecisionCreateItem = void 0;
/**
 * An included change request decision for a create or update operation.
 */
class ChangeRequestDecisionCreateItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestDecisionCreateItem.attributeTypeMap;
    }
}
exports.ChangeRequestDecisionCreateItem = ChangeRequestDecisionCreateItem;
/**
 * @ignore
 */
ChangeRequestDecisionCreateItem.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ChangeRequestDecisionCreateAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "ChangeRequestDecisionCreateRelationships",
    },
    type: {
        baseName: "type",
        type: "ChangeRequestDecisionResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeRequestDecisionCreateItem.js.map