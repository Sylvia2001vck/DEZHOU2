"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyCostAttributionMeta = void 0;
/**
 * The object containing document metadata.
 */
class MonthlyCostAttributionMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonthlyCostAttributionMeta.attributeTypeMap;
    }
}
exports.MonthlyCostAttributionMeta = MonthlyCostAttributionMeta;
/**
 * @ignore
 */
MonthlyCostAttributionMeta.attributeTypeMap = {
    aggregates: {
        baseName: "aggregates",
        type: "Array<CostAttributionAggregatesBody>",
    },
    pagination: {
        baseName: "pagination",
        type: "MonthlyCostAttributionPagination",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonthlyCostAttributionMeta.js.map