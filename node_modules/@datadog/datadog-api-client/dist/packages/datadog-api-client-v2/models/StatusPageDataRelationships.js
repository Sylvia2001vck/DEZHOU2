"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPageDataRelationships = void 0;
/**
 * The relationships of a status page.
 */
class StatusPageDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPageDataRelationships.attributeTypeMap;
    }
}
exports.StatusPageDataRelationships = StatusPageDataRelationships;
/**
 * @ignore
 */
StatusPageDataRelationships.attributeTypeMap = {
    createdByUser: {
        baseName: "created_by_user",
        type: "StatusPageDataRelationshipsCreatedByUser",
    },
    lastModifiedByUser: {
        baseName: "last_modified_by_user",
        type: "StatusPageDataRelationshipsLastModifiedByUser",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=StatusPageDataRelationships.js.map