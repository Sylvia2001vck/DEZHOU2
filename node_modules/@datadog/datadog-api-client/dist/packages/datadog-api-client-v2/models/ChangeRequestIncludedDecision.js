"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestIncludedDecision = void 0;
/**
 * An included change request decision resource.
 */
class ChangeRequestIncludedDecision {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestIncludedDecision.attributeTypeMap;
    }
}
exports.ChangeRequestIncludedDecision = ChangeRequestIncludedDecision;
/**
 * @ignore
 */
ChangeRequestIncludedDecision.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ChangeRequestDecisionResponseAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "ChangeRequestDecisionRelationships",
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
//# sourceMappingURL=ChangeRequestIncludedDecision.js.map