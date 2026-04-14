"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRuleRequest = void 0;
class CustomRuleRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomRuleRequest.attributeTypeMap;
    }
}
exports.CustomRuleRequest = CustomRuleRequest;
/**
 * @ignore
 */
CustomRuleRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CustomRuleRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomRuleRequest.js.map