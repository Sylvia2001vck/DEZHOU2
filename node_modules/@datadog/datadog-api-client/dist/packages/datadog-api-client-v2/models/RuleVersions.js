"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleVersions = void 0;
/**
 * A rule version with a list of updates.
 */
class RuleVersions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RuleVersions.attributeTypeMap;
    }
}
exports.RuleVersions = RuleVersions;
/**
 * @ignore
 */
RuleVersions.attributeTypeMap = {
    changes: {
        baseName: "changes",
        type: "Array<VersionHistoryUpdate>",
    },
    rule: {
        baseName: "rule",
        type: "SecurityMonitoringRuleResponse",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RuleVersions.js.map