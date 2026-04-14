"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuppressionVersions = void 0;
/**
 * A suppression version with a list of updates.
 */
class SuppressionVersions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SuppressionVersions.attributeTypeMap;
    }
}
exports.SuppressionVersions = SuppressionVersions;
/**
 * @ignore
 */
SuppressionVersions.attributeTypeMap = {
    changes: {
        baseName: "changes",
        type: "Array<VersionHistoryUpdate>",
    },
    suppression: {
        baseName: "suppression",
        type: "SecurityMonitoringSuppressionAttributes",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SuppressionVersions.js.map