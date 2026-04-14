"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyCostAttributionBody = void 0;
/**
 * Cost data.
 */
class MonthlyCostAttributionBody {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonthlyCostAttributionBody.attributeTypeMap;
    }
}
exports.MonthlyCostAttributionBody = MonthlyCostAttributionBody;
/**
 * @ignore
 */
MonthlyCostAttributionBody.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MonthlyCostAttributionAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "CostAttributionType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonthlyCostAttributionBody.js.map