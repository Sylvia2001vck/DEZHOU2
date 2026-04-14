"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRulesetRequest = void 0;
class CustomRulesetRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomRulesetRequest.attributeTypeMap;
    }
}
exports.CustomRulesetRequest = CustomRulesetRequest;
/**
 * @ignore
 */
CustomRulesetRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CustomRulesetRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomRulesetRequest.js.map