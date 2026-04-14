"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesetRespDataAttributesRulesItems = void 0;
/**
 * The definition of `RulesetRespDataAttributesRulesItems` object.
 */
class RulesetRespDataAttributesRulesItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RulesetRespDataAttributesRulesItems.attributeTypeMap;
    }
}
exports.RulesetRespDataAttributesRulesItems = RulesetRespDataAttributesRulesItems;
/**
 * @ignore
 */
RulesetRespDataAttributesRulesItems.attributeTypeMap = {
    enabled: {
        baseName: "enabled",
        type: "boolean",
        required: true,
    },
    mapping: {
        baseName: "mapping",
        type: "DataAttributesRulesItemsMapping",
    },
    metadata: {
        baseName: "metadata",
        type: "{ [key: string]: string; }",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    query: {
        baseName: "query",
        type: "RulesetRespDataAttributesRulesItemsQuery",
    },
    referenceTable: {
        baseName: "reference_table",
        type: "RulesetRespDataAttributesRulesItemsReferenceTable",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RulesetRespDataAttributesRulesItems.js.map