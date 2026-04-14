"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRuleVersionHistoryResponse = void 0;
/**
 * Response for getting the rule version history.
 */
class GetRuleVersionHistoryResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetRuleVersionHistoryResponse.attributeTypeMap;
    }
}
exports.GetRuleVersionHistoryResponse = GetRuleVersionHistoryResponse;
/**
 * @ignore
 */
GetRuleVersionHistoryResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "GetRuleVersionHistoryData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetRuleVersionHistoryResponse.js.map