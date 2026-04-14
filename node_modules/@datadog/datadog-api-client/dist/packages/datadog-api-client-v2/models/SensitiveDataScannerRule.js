"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerRule = void 0;
/**
 * Rule item included in the group.
 */
class SensitiveDataScannerRule {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerRule.attributeTypeMap;
    }
}
exports.SensitiveDataScannerRule = SensitiveDataScannerRule;
/**
 * @ignore
 */
SensitiveDataScannerRule.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SensitiveDataScannerRuleType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerRule.js.map