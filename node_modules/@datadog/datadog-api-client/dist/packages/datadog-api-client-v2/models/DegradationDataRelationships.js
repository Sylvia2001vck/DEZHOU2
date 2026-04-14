"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DegradationDataRelationships = void 0;
/**
 * The relationships of a degradation.
 */
class DegradationDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DegradationDataRelationships.attributeTypeMap;
    }
}
exports.DegradationDataRelationships = DegradationDataRelationships;
/**
 * @ignore
 */
DegradationDataRelationships.attributeTypeMap = {
    createdByUser: {
        baseName: "created_by_user",
        type: "DegradationDataRelationshipsCreatedByUser",
    },
    lastModifiedByUser: {
        baseName: "last_modified_by_user",
        type: "DegradationDataRelationshipsLastModifiedByUser",
    },
    statusPage: {
        baseName: "status_page",
        type: "DegradationDataRelationshipsStatusPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DegradationDataRelationships.js.map