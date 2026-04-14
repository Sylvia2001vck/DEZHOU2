"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuppressionVersionHistory = void 0;
/**
 * Response object containing the version history of a suppression.
 */
class SuppressionVersionHistory {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SuppressionVersionHistory.attributeTypeMap;
    }
}
exports.SuppressionVersionHistory = SuppressionVersionHistory;
/**
 * @ignore
 */
SuppressionVersionHistory.attributeTypeMap = {
    count: {
        baseName: "count",
        type: "number",
        format: "int32",
    },
    data: {
        baseName: "data",
        type: "{ [key: string]: SuppressionVersions; }",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SuppressionVersionHistory.js.map