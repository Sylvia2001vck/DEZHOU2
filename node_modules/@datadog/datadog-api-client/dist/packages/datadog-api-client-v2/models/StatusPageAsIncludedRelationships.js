"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPageAsIncludedRelationships = void 0;
/**
 * The relationships of a status page.
 */
class StatusPageAsIncludedRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPageAsIncludedRelationships.attributeTypeMap;
    }
}
exports.StatusPageAsIncludedRelationships = StatusPageAsIncludedRelationships;
/**
 * @ignore
 */
StatusPageAsIncludedRelationships.attributeTypeMap = {
    createdByUser: {
        baseName: "created_by_user",
        type: "StatusPageAsIncludedRelationshipsCreatedByUser",
    },
    lastModifiedByUser: {
        baseName: "last_modified_by_user",
        type: "StatusPageAsIncludedRelationshipsLastModifiedByUser",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=StatusPageAsIncludedRelationships.js.map