"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReorderRuleResourceArray = void 0;
/**
 * The definition of `ReorderRuleResourceArray` object.
 */
class ReorderRuleResourceArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ReorderRuleResourceArray.attributeTypeMap;
    }
}
exports.ReorderRuleResourceArray = ReorderRuleResourceArray;
/**
 * @ignore
 */
ReorderRuleResourceArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ReorderRuleResourceData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ReorderRuleResourceArray.js.map