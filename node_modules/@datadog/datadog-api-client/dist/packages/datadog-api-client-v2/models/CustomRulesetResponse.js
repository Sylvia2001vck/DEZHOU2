"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRulesetResponse = void 0;
class CustomRulesetResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomRulesetResponse.attributeTypeMap;
    }
}
exports.CustomRulesetResponse = CustomRulesetResponse;
/**
 * @ignore
 */
CustomRulesetResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CustomRuleset",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomRulesetResponse.js.map