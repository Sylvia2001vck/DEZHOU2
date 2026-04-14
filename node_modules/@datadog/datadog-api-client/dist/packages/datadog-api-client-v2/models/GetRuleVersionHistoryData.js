"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRuleVersionHistoryData = void 0;
/**
 * Data for the rule version history.
 */
class GetRuleVersionHistoryData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetRuleVersionHistoryData.attributeTypeMap;
    }
}
exports.GetRuleVersionHistoryData = GetRuleVersionHistoryData;
/**
 * @ignore
 */
GetRuleVersionHistoryData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RuleVersionHistory",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "GetRuleVersionHistoryDataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetRuleVersionHistoryData.js.map