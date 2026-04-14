"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRulesResponseDataItem = void 0;
/**
 * Rule details.
 */
class ListRulesResponseDataItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListRulesResponseDataItem.attributeTypeMap;
    }
}
exports.ListRulesResponseDataItem = ListRulesResponseDataItem;
/**
 * @ignore
 */
ListRulesResponseDataItem.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RuleAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "RelationshipToRule",
    },
    type: {
        baseName: "type",
        type: "RuleType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListRulesResponseDataItem.js.map