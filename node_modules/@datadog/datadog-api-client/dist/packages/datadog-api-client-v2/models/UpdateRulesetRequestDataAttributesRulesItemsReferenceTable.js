"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRulesetRequestDataAttributesRulesItemsReferenceTable = void 0;
/**
 * The definition of `UpdateRulesetRequestDataAttributesRulesItemsReferenceTable` object.
 */
class UpdateRulesetRequestDataAttributesRulesItemsReferenceTable {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateRulesetRequestDataAttributesRulesItemsReferenceTable.attributeTypeMap;
    }
}
exports.UpdateRulesetRequestDataAttributesRulesItemsReferenceTable = UpdateRulesetRequestDataAttributesRulesItemsReferenceTable;
/**
 * @ignore
 */
UpdateRulesetRequestDataAttributesRulesItemsReferenceTable.attributeTypeMap = {
    caseInsensitivity: {
        baseName: "case_insensitivity",
        type: "boolean",
    },
    fieldPairs: {
        baseName: "field_pairs",
        type: "Array<UpdateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems>",
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
//# sourceMappingURL=UpdateRulesetRequestDataAttributesRulesItemsReferenceTable.js.map