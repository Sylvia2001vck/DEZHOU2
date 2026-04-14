"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerRuleResponse = void 0;
/**
 * Response data related to the creation of a rule.
 */
class SensitiveDataScannerRuleResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerRuleResponse.attributeTypeMap;
    }
}
exports.SensitiveDataScannerRuleResponse = SensitiveDataScannerRuleResponse;
/**
 * @ignore
 */
SensitiveDataScannerRuleResponse.attributeTypeMap = {
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
//# sourceMappingURL=SensitiveDataScannerRuleResponse.js.map