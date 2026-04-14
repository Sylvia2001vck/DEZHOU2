"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRuleResponse = void 0;
/**
 * The response from a rule update request.
 */
class UpdateRuleResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateRuleResponse.attributeTypeMap;
    }
}
exports.UpdateRuleResponse = UpdateRuleResponse;
/**
 * @ignore
 */
UpdateRuleResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "UpdateRuleResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateRuleResponse.js.map