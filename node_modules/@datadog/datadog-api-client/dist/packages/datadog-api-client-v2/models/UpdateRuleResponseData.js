"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRuleResponseData = void 0;
/**
 * The data for a rule update response.
 */
class UpdateRuleResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateRuleResponseData.attributeTypeMap;
    }
}
exports.UpdateRuleResponseData = UpdateRuleResponseData;
/**
 * @ignore
 */
UpdateRuleResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RuleAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "RelationshipToRule",
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
//# sourceMappingURL=UpdateRuleResponseData.js.map