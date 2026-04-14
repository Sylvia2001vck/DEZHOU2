"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictionQueryListResponse = void 0;
/**
 * Response containing information about multiple restriction queries.
 */
class RestrictionQueryListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RestrictionQueryListResponse.attributeTypeMap;
    }
}
exports.RestrictionQueryListResponse = RestrictionQueryListResponse;
/**
 * @ignore
 */
RestrictionQueryListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RestrictionQueryWithoutRelationships>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RestrictionQueryListResponse.js.map