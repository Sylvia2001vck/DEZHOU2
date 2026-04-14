"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems = void 0;
/**
 * The definition of `UpdateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems` object.
 */
class UpdateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems.attributeTypeMap;
    }
}
exports.UpdateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems = UpdateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems;
/**
 * @ignore
 */
UpdateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems.attributeTypeMap = {
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
//# sourceMappingURL=UpdateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems.js.map