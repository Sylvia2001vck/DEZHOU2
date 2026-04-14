"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRulesetRequestDataAttributesRulesItems = void 0;
/**
 * The definition of `UpdateRulesetRequestDataAttributesRulesItems` object.
 */
class UpdateRulesetRequestDataAttributesRulesItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateRulesetRequestDataAttributesRulesItems.attributeTypeMap;
    }
}
exports.UpdateRulesetRequestDataAttributesRulesItems = UpdateRulesetRequestDataAttributesRulesItems;
/**
 * @ignore
 */
UpdateRulesetRequestDataAttributesRulesItems.attributeTypeMap = {
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
        type: "UpdateRulesetRequestDataAttributesRulesItemsQuery",
    },
    referenceTable: {
        baseName: "reference_table",
        type: "UpdateRulesetRequestDataAttributesRulesItemsReferenceTable",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateRulesetRequestDataAttributesRulesItems.js.map