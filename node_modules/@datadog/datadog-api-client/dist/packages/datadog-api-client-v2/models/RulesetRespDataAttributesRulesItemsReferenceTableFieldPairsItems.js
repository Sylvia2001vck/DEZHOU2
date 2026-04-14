"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesetRespDataAttributesRulesItemsReferenceTableFieldPairsItems = void 0;
/**
 * The definition of `RulesetRespDataAttributesRulesItemsReferenceTableFieldPairsItems` object.
 */
class RulesetRespDataAttributesRulesItemsReferenceTableFieldPairsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RulesetRespDataAttributesRulesItemsReferenceTableFieldPairsItems.attributeTypeMap;
    }
}
exports.RulesetRespDataAttributesRulesItemsReferenceTableFieldPairsItems = RulesetRespDataAttributesRulesItemsReferenceTableFieldPairsItems;
/**
 * @ignore
 */
RulesetRespDataAttributesRulesItemsReferenceTableFieldPairsItems.attributeTypeMap = {
    inputColumn: {
        baseName: "input_column",
        type: "string",
        required: true,
    },
    outputKey: {
        baseName: "output_key",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RulesetRespDataAttributesRulesItemsReferenceTableFieldPairsItems.js.map