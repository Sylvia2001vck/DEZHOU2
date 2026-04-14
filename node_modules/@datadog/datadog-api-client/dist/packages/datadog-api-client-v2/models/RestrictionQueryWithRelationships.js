"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictionQueryWithRelationships = void 0;
/**
 * Restriction query object returned by the API.
 */
class RestrictionQueryWithRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RestrictionQueryWithRelationships.attributeTypeMap;
    }
}
exports.RestrictionQueryWithRelationships = RestrictionQueryWithRelationships;
/**
 * @ignore
 */
RestrictionQueryWithRelationships.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RestrictionQueryAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "UserRelationships",
    },
    type: {
        baseName: "type",
        type: "LogsRestrictionQueriesType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RestrictionQueryWithRelationships.js.map