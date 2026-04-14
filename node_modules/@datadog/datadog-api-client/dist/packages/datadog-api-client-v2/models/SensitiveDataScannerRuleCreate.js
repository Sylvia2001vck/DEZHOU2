"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerRuleCreate = void 0;
/**
 * Data related to the creation of a rule.
 */
class SensitiveDataScannerRuleCreate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerRuleCreate.attributeTypeMap;
    }
}
exports.SensitiveDataScannerRuleCreate = SensitiveDataScannerRuleCreate;
/**
 * @ignore
 */
SensitiveDataScannerRuleCreate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SensitiveDataScannerRuleAttributes",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "SensitiveDataScannerRuleRelationships",
        required: true,
    },
    type: {
        baseName: "type",
        type: "SensitiveDataScannerRuleType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerRuleCreate.js.map