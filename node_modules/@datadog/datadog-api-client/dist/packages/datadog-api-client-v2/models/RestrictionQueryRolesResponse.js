"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictionQueryRolesResponse = void 0;
/**
 * Response containing information about roles attached to a restriction query.
 */
class RestrictionQueryRolesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RestrictionQueryRolesResponse.attributeTypeMap;
    }
}
exports.RestrictionQueryRolesResponse = RestrictionQueryRolesResponse;
/**
 * @ignore
 */
RestrictionQueryRolesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RestrictionQueryRole>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RestrictionQueryRolesResponse.js.map