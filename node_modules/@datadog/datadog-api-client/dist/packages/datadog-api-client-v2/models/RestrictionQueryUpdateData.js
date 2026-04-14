"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictionQueryUpdateData = void 0;
/**
 * Data related to the update of a restriction query.
 */
class RestrictionQueryUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RestrictionQueryUpdateData.attributeTypeMap;
    }
}
exports.RestrictionQueryUpdateData = RestrictionQueryUpdateData;
/**
 * @ignore
 */
RestrictionQueryUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RestrictionQueryUpdateAttributes",
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
//# sourceMappingURL=RestrictionQueryUpdateData.js.map