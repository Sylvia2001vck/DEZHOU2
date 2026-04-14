"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesetRespArray = void 0;
/**
 * The definition of `RulesetRespArray` object.
 */
class RulesetRespArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RulesetRespArray.attributeTypeMap;
    }
}
exports.RulesetRespArray = RulesetRespArray;
/**
 * @ignore
 */
RulesetRespArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RulesetRespData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RulesetRespArray.js.map