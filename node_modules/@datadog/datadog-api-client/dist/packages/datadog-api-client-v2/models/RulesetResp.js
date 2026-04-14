"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesetResp = void 0;
/**
 * The definition of `RulesetResp` object.
 */
class RulesetResp {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RulesetResp.attributeTypeMap;
    }
}
exports.RulesetResp = RulesetResp;
/**
 * @ignore
 */
RulesetResp.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RulesetRespData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RulesetResp.js.map