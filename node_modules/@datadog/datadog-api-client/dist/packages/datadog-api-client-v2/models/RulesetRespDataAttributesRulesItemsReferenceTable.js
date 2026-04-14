"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesetRespDataAttributesRulesItemsReferenceTable = void 0;
/**
 * The definition of `RulesetRespDataAttributesRulesItemsReferenceTable` object.
 */
class RulesetRespDataAttributesRulesItemsReferenceTable {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RulesetRespDataAttributesRulesItemsReferenceTable.attributeTypeMap;
    }
}
exports.RulesetRespDataAttributesRulesItemsReferenceTable = RulesetRespDataAttributesRulesItemsReferenceTable;
/**
 * @ignore
 */
RulesetRespDataAttributesRulesItemsReferenceTable.attributeTypeMap = {
    caseInsensitivity: {
        baseName: "case_insensitivity",
        type: "boolean",
    },
    fieldPairs: {
        baseName: "field_pairs",
        type: "Array<RulesetRespDataAttributesRulesItemsReferenceTableFieldPairsItems>",
        required: true,
    },
    ifNotExists: {
        baseName: "if_not_exists",
        type: "boolean",
    },
    ifTagExists: {
        baseName: "if_tag_exists",
        type: "DataAttributesRulesItemsIfTagExists",
    },
    sourceKeys: {
        baseName: "source_keys",
        type: "Array<string>",
        required: true,
    },
    tableName: {
        baseName: "table_name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RulesetRespDataAttributesRulesItemsReferenceTable.js.map