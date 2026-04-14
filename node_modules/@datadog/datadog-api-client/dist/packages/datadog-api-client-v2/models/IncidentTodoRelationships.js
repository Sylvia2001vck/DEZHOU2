"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTodoRelationships = void 0;
/**
 * The incident's relationships from a response.
 */
class IncidentTodoRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTodoRelationships.attributeTypeMap;
    }
}
exports.IncidentTodoRelationships = IncidentTodoRelationships;
/**
 * @ignore
 */
IncidentTodoRelationships.attributeTypeMap = {
    createdByUser: {
        baseName: "created_by_user",
        type: "RelationshipToUser",
    },
    lastModifiedByUser: {
        baseName: "last_modified_by_user",
        type: "RelationshipToUser",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTodoRelationships.js.map