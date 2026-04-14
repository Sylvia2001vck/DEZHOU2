"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestDecisionRelationshipData = void 0;
/**
 * Change request decision relationship data.
 */
class ChangeRequestDecisionRelationshipData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestDecisionRelationshipData.attributeTypeMap;
    }
}
exports.ChangeRequestDecisionRelationshipData = ChangeRequestDecisionRelationshipData;
/**
 * @ignore
 */
ChangeRequestDecisionRelationshipData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
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
//# sourceMappingURL=ChangeRequestDecisionRelationshipData.js.map