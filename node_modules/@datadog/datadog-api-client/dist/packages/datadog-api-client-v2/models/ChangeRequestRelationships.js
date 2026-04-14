"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestRelationships = void 0;
/**
 * Relationships of a change request.
 */
class ChangeRequestRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestRelationships.attributeTypeMap;
    }
}
exports.ChangeRequestRelationships = ChangeRequestRelationships;
/**
 * @ignore
 */
ChangeRequestRelationships.attributeTypeMap = {
    changeRequestDecisions: {
        baseName: "change_request_decisions",
        type: "ChangeRequestDecisionsRelationship",
        required: true,
    },
    createdBy: {
        baseName: "created_by",
        type: "ChangeRequestUserRelationship",
        required: true,
    },
    modifiedBy: {
        baseName: "modified_by",
        type: "ChangeRequestUserRelationship",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeRequestRelationships.js.map