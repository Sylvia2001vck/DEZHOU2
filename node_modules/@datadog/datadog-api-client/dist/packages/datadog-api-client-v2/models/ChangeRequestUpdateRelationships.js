"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestUpdateRelationships = void 0;
/**
 * Relationships for updating a change request.
 */
class ChangeRequestUpdateRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestUpdateRelationships.attributeTypeMap;
    }
}
exports.ChangeRequestUpdateRelationships = ChangeRequestUpdateRelationships;
/**
 * @ignore
 */
ChangeRequestUpdateRelationships.attributeTypeMap = {
    changeRequestDecisions: {
        baseName: "change_request_decisions",
        type: "ChangeRequestDecisionsRelationship",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeRequestUpdateRelationships.js.map