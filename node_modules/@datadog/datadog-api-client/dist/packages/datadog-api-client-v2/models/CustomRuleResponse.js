"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRuleResponse = void 0;
class CustomRuleResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomRuleResponse.attributeTypeMap;
    }
}
exports.CustomRuleResponse = CustomRuleResponse;
/**
 * @ignore
 */
CustomRuleResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CustomRuleResponseData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomRuleResponse.js.map