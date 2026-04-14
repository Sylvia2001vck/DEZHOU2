"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictionQueryWithRelationshipsResponse = void 0;
/**
 * Response containing information about a single restriction query.
 */
class RestrictionQueryWithRelationshipsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RestrictionQueryWithRelationshipsResponse.attributeTypeMap;
    }
}
exports.RestrictionQueryWithRelationshipsResponse = RestrictionQueryWithRelationshipsResponse;
/**
 * @ignore
 */
RestrictionQueryWithRelationshipsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RestrictionQueryWithRelationships",
    },
    included: {
        baseName: "included",
        type: "Array<RestrictionQueryResponseIncludedItem>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RestrictionQueryWithRelationshipsResponse.js.map