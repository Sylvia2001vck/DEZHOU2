"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSuppressionVersionHistoryResponse = void 0;
/**
 * Response for getting the suppression version history.
 */
class GetSuppressionVersionHistoryResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetSuppressionVersionHistoryResponse.attributeTypeMap;
    }
}
exports.GetSuppressionVersionHistoryResponse = GetSuppressionVersionHistoryResponse;
/**
 * @ignore
 */
GetSuppressionVersionHistoryResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "GetSuppressionVersionHistoryData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetSuppressionVersionHistoryResponse.js.map