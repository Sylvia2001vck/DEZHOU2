"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSuppressionVersionHistoryData = void 0;
/**
 * Data for the suppression version history.
 */
class GetSuppressionVersionHistoryData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetSuppressionVersionHistoryData.attributeTypeMap;
    }
}
exports.GetSuppressionVersionHistoryData = GetSuppressionVersionHistoryData;
/**
 * @ignore
 */
GetSuppressionVersionHistoryData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SuppressionVersionHistory",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "GetSuppressionVersionHistoryDataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetSuppressionVersionHistoryData.js.map