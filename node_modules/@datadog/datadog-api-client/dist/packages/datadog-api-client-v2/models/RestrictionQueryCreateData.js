"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictionQueryCreateData = void 0;
/**
 * Data related to the creation of a restriction query.
 */
class RestrictionQueryCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RestrictionQueryCreateData.attributeTypeMap;
    }
}
exports.RestrictionQueryCreateData = RestrictionQueryCreateData;
/**
 * @ignore
 */
RestrictionQueryCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RestrictionQueryCreateAttributes",
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
//# sourceMappingURL=RestrictionQueryCreateData.js.map