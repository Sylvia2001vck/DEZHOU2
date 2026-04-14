"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictionQueryWithoutRelationships = void 0;
/**
 * Restriction query object returned by the API.
 */
class RestrictionQueryWithoutRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RestrictionQueryWithoutRelationships.attributeTypeMap;
    }
}
exports.RestrictionQueryWithoutRelationships = RestrictionQueryWithoutRelationships;
/**
 * @ignore
 */
RestrictionQueryWithoutRelationships.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RestrictionQueryAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RestrictionQueryWithoutRelationships.js.map