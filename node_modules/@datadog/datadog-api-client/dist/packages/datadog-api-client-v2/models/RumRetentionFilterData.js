"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumRetentionFilterData = void 0;
/**
 * The RUM retention filter.
 */
class RumRetentionFilterData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumRetentionFilterData.attributeTypeMap;
    }
}
exports.RumRetentionFilterData = RumRetentionFilterData;
/**
 * @ignore
 */
RumRetentionFilterData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RumRetentionFilterAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "RumRetentionFilterType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumRetentionFilterData.js.map