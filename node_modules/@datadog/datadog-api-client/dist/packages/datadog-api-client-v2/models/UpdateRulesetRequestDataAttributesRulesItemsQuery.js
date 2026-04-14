"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRulesetRequestDataAttributesRulesItemsQuery = void 0;
/**
 * The definition of `UpdateRulesetRequestDataAttributesRulesItemsQuery` object.
 */
class UpdateRulesetRequestDataAttributesRulesItemsQuery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateRulesetRequestDataAttributesRulesItemsQuery.attributeTypeMap;
    }
}
exports.UpdateRulesetRequestDataAttributesRulesItemsQuery = UpdateRulesetRequestDataAttributesRulesItemsQuery;
/**
 * @ignore
 */
UpdateRulesetRequestDataAttributesRulesItemsQuery.attributeTypeMap = {
    addition: {
        baseName: "addition",
        type: "UpdateRulesetRequestDataAttributesRulesItemsQueryAddition",
        required: true,
    },
    caseInsensitivity: {
        baseName: "case_insensitivity",
        type: "boolean",
    },
    ifNotExists: {
        baseName: "if_not_exists",
        type: "boolean",
    },
    ifTagExists: {
        baseName: "if_tag_exists",
        type: "DataAttributesRulesItemsIfTagExists",
    },
    query: {
        baseName: "query",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateRulesetRequestDataAttributesRulesItemsQuery.js.map