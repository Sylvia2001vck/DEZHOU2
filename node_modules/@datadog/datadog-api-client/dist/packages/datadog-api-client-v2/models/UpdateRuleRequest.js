"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRuleRequest = void 0;
/**
 * Request to update a scorecard rule.
 */
class UpdateRuleRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateRuleRequest.attributeTypeMap;
    }
}
exports.UpdateRuleRequest = UpdateRuleRequest;
/**
 * @ignore
 */
UpdateRuleRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "UpdateRuleRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateRuleRequest.js.map