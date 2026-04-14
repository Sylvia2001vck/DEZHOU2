"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesetRespDataAttributesRulesItemsQuery = void 0;
/**
 * The definition of `RulesetRespDataAttributesRulesItemsQuery` object.
 */
class RulesetRespDataAttributesRulesItemsQuery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RulesetRespDataAttributesRulesItemsQuery.attributeTypeMap;
    }
}
exports.RulesetRespDataAttributesRulesItemsQuery = RulesetRespDataAttributesRulesItemsQuery;
/**
 * @ignore
 */
RulesetRespDataAttributesRulesItemsQuery.attributeTypeMap = {
    addition: {
        baseName: "addition",
        type: "RulesetRespDataAttributesRulesItemsQueryAddition",
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
//# sourceMappingURL=RulesetRespDataAttributesRulesItemsQuery.js.map