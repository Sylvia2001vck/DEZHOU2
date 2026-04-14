"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerRuleAttributes = void 0;
/**
 * Attributes of the Sensitive Data Scanner rule.
 */
class SensitiveDataScannerRuleAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerRuleAttributes.attributeTypeMap;
    }
}
exports.SensitiveDataScannerRuleAttributes = SensitiveDataScannerRuleAttributes;
/**
 * @ignore
 */
SensitiveDataScannerRuleAttributes.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    excludedNamespaces: {
        baseName: "excluded_namespaces",
        type: "Array<string>",
    },
    includedKeywordConfiguration: {
        baseName: "included_keyword_configuration",
        type: "SensitiveDataScannerIncludedKeywordConfiguration",
    },
    isEnabled: {
        baseName: "is_enabled",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    namespaces: {
        baseName: "namespaces",
        type: "Array<string>",
    },
    pattern: {
        baseName: "pattern",
        type: "string",
    },
    priority: {
        baseName: "priority",
        type: "number",
        format: "int64",
    },
    suppressions: {
        baseName: "suppressions",
        type: "SensitiveDataScannerSuppressions",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    textReplacement: {
        baseName: "text_replacement",
        type: "SensitiveDataScannerTextReplacement",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerRuleAttributes.js.map