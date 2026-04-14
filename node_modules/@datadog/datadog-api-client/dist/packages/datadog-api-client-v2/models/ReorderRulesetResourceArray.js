"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReorderRulesetResourceArray = void 0;
/**
 * The definition of `ReorderRulesetResourceArray` object.
 */
class ReorderRulesetResourceArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ReorderRulesetResourceArray.attributeTypeMap;
    }
}
exports.ReorderRulesetResourceArray = ReorderRulesetResourceArray;
/**
 * @ignore
 */
ReorderRulesetResourceArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ReorderRulesetResourceData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ReorderRulesetResourceArray.js.map