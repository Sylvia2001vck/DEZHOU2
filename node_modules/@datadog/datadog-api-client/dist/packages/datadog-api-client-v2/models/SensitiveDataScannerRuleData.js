"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerRuleData = void 0;
/**
 * Rules included in the group.
 */
class SensitiveDataScannerRuleData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerRuleData.attributeTypeMap;
    }
}
exports.SensitiveDataScannerRuleData = SensitiveDataScannerRuleData;
/**
 * @ignore
 */
SensitiveDataScannerRuleData.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<SensitiveDataScannerRule>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerRuleData.js.map