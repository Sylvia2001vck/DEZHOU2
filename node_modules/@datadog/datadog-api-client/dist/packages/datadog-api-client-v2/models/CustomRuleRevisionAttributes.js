"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRuleRevisionAttributes = void 0;
class CustomRuleRevisionAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomRuleRevisionAttributes.attributeTypeMap;
    }
}
exports.CustomRuleRevisionAttributes = CustomRuleRevisionAttributes;
/**
 * @ignore
 */
CustomRuleRevisionAttributes.attributeTypeMap = {
    arguments: {
        baseName: "arguments",
        type: "Array<Argument>",
        required: true,
    },
    category: {
        baseName: "category",
        type: "CustomRuleRevisionAttributesCategory",
        required: true,
    },
    checksum: {
        baseName: "checksum",
        type: "string",
        required: true,
    },
    code: {
        baseName: "code",
        type: "string",
        required: true,
    },
    createdAt: {
        baseName: "created_at",
        type: "Date",
        required: true,
        format: "date-time",
    },
    createdBy: {
        baseName: "created_by",
        type: "string",
        required: true,
    },
    creationMessage: {
        baseName: "creation_message",
        type: "string",
        required: true,
    },
    cve: {
        baseName: "cve",
        type: "string",
        required: true,
    },
    cwe: {
        baseName: "cwe",
        type: "string",
        required: true,
    },
    description: {
        baseName: "description",
        type: "string",
        required: true,
    },
    documentationUrl: {
        baseName: "documentation_url",
        type: "string",
        required: true,
    },
    isPublished: {
        baseName: "is_published",
        type: "boolean",
        required: true,
    },
    isTesting: {
        baseName: "is_testing",
        type: "boolean",
        required: true,
    },
    language: {
        baseName: "language",
        type: "Language",
        required: true,
    },
    severity: {
        baseName: "severity",
        type: "CustomRuleRevisionAttributesSeverity",
        required: true,
    },
    shortDescription: {
        baseName: "short_description",
        type: "string",
        required: true,
    },
    shouldUseAiFix: {
        baseName: "should_use_ai_fix",
        type: "boolean",
        required: true,
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
        required: true,
    },
    tests: {
        baseName: "tests",
        type: "Array<CustomRuleRevisionTest>",
        required: true,
    },
    treeSitterQuery: {
        baseName: "tree_sitter_query",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomRuleRevisionAttributes.js.map