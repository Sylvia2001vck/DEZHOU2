"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleVersionHistory = void 0;
/**
 * Response object containing the version history of a rule.
 */
class RuleVersionHistory {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RuleVersionHistory.attributeTypeMap;
    }
}
exports.RuleVersionHistory = RuleVersionHistory;
/**
 * @ignore
 */
RuleVersionHistory.attributeTypeMap = {
    count: {
        baseName: "count",
        type: "number",
        format: "int32",
    },
    data: {
        baseName: "data",
        type: "{ [key: string]: RuleVersions; }",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RuleVersionHistory.js.map