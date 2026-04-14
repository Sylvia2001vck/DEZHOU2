"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerRuleIncludedItem = void 0;
/**
 * A Scanning Rule included item.
 */
class SensitiveDataScannerRuleIncludedItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerRuleIncludedItem.attributeTypeMap;
    }
}
exports.SensitiveDataScannerRuleIncludedItem = SensitiveDataScannerRuleIncludedItem;
/**
 * @ignore
 */
SensitiveDataScannerRuleIncludedItem.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SensitiveDataScannerRuleAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "SensitiveDataScannerRuleRelationships",
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
//# sourceMappingURL=SensitiveDataScannerRuleIncludedItem.js.map