"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyCostAttributionResponse = void 0;
/**
 * Response containing the monthly cost attribution by tag(s).
 */
class MonthlyCostAttributionResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonthlyCostAttributionResponse.attributeTypeMap;
    }
}
exports.MonthlyCostAttributionResponse = MonthlyCostAttributionResponse;
/**
 * @ignore
 */
MonthlyCostAttributionResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<MonthlyCostAttributionBody>",
    },
    meta: {
        baseName: "meta",
        type: "MonthlyCostAttributionMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonthlyCostAttributionResponse.js.map