"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerRuleUpdate = void 0;
/**
 * Data related to the update of a rule.
 */
class SensitiveDataScannerRuleUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerRuleUpdate.attributeTypeMap;
    }
}
exports.SensitiveDataScannerRuleUpdate = SensitiveDataScannerRuleUpdate;
/**
 * @ignore
 */
SensitiveDataScannerRuleUpdate.attributeTypeMap = {
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
//# sourceMappingURL=SensitiveDataScannerRuleUpdate.js.map