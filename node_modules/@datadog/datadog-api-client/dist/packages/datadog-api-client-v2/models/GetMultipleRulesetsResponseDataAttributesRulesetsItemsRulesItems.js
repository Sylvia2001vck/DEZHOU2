"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems = void 0;
class GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems.attributeTypeMap;
    }
}
exports.GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems = GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems;
/**
 * @ignore
 */
GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems.attributeTypeMap = {
    arguments: {
        baseName: "arguments",
        type: "Array<GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems>",
    },
    category: {
        baseName: "category",
        type: "string",
    },
    checksum: {
        baseName: "checksum",
        type: "string",
    },
    code: {
        baseName: "code",
        type: "string",
    },
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    createdBy: {
        baseName: "created_by",
        type: "string",
    },
    cve: {
        baseName: "cve",
        type: "string",
    },
    cwe: {
        baseName: "cwe",
        type: "string",
    },
    data: {
        baseName: "data",
        type: "GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData",
        required: true,
    },
    description: {
        baseName: "description",
        type: "string",
    },
    documentationUrl: {
        baseName: "documentation_url",
        type: "string",
    },
    entityChecked: {
        baseName: "entity_checked",
        type: "string",
    },
    isPublished: {
        baseName: "is_published",
        type: "boolean",
    },
    isTesting: {
        baseName: "is_testing",
        type: "boolean",
    },
    language: {
        baseName: "language",
        type: "string",
    },
    lastUpdatedAt: {
        baseName: "last_updated_at",
        type: "Date",
        format: "date-time",
    },
    lastUpdatedBy: {
        baseName: "last_updated_by",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    regex: {
        baseName: "regex",
        type: "string",
    },
    severity: {
        baseName: "severity",
        type: "string",
    },
    shortDescription: {
        baseName: "short_description",
        type: "string",
    },
    shouldUseAiFix: {
        baseName: "should_use_ai_fix",
        type: "boolean",
    },
    tests: {
        baseName: "tests",
        type: "Array<GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems>",
    },
    treeSitterQuery: {
        baseName: "tree_sitter_query",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems.js.map