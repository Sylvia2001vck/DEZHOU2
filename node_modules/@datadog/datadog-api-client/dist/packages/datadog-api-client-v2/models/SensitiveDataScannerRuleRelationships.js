"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerRuleRelationships = void 0;
/**
 * Relationships of a scanning rule.
 */
class SensitiveDataScannerRuleRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerRuleRelationships.attributeTypeMap;
    }
}
exports.SensitiveDataScannerRuleRelationships = SensitiveDataScannerRuleRelationships;
/**
 * @ignore
 */
SensitiveDataScannerRuleRelationships.attributeTypeMap = {
    group: {
        baseName: "group",
        type: "SensitiveDataScannerGroupData",
    },
    standardPattern: {
        baseName: "standard_pattern",
        type: "SensitiveDataScannerStandardPatternData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerRuleRelationships.js.map