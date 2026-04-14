"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRuleRequestData = void 0;
/**
 * Data for the request to update a scorecard rule.
 */
class UpdateRuleRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateRuleRequestData.attributeTypeMap;
    }
}
exports.UpdateRuleRequestData = UpdateRuleRequestData;
/**
 * @ignore
 */
UpdateRuleRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RuleAttributes",
    },
    type: {
        baseName: "type",
        type: "RuleType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateRuleRequestData.js.map