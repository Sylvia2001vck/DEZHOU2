"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutcomesResponseDataItem = void 0;
/**
 * A single rule outcome.
 */
class OutcomesResponseDataItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OutcomesResponseDataItem.attributeTypeMap;
    }
}
exports.OutcomesResponseDataItem = OutcomesResponseDataItem;
/**
 * @ignore
 */
OutcomesResponseDataItem.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "OutcomesBatchResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "RuleOutcomeRelationships",
    },
    type: {
        baseName: "type",
        type: "OutcomeType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OutcomesResponseDataItem.js.map