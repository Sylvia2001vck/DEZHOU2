"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesetRespDataAttributesRulesItemsQueryAddition = void 0;
/**
 * The definition of `RulesetRespDataAttributesRulesItemsQueryAddition` object.
 */
class RulesetRespDataAttributesRulesItemsQueryAddition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RulesetRespDataAttributesRulesItemsQueryAddition.attributeTypeMap;
    }
}
exports.RulesetRespDataAttributesRulesItemsQueryAddition = RulesetRespDataAttributesRulesItemsQueryAddition;
/**
 * @ignore
 */
RulesetRespDataAttributesRulesItemsQueryAddition.attributeTypeMap = {
    key: {
        baseName: "key",
        type: "string",
        required: true,
    },
    value: {
        baseName: "value",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RulesetRespDataAttributesRulesItemsQueryAddition.js.map