"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutcomesResponseIncludedItem = void 0;
/**
 * Attributes of the included rule.
 */
class OutcomesResponseIncludedItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OutcomesResponseIncludedItem.attributeTypeMap;
    }
}
exports.OutcomesResponseIncludedItem = OutcomesResponseIncludedItem;
/**
 * @ignore
 */
OutcomesResponseIncludedItem.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "OutcomesResponseIncludedRuleAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=OutcomesResponseIncludedItem.js.map