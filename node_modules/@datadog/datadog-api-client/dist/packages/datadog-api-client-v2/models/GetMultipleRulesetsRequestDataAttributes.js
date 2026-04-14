"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMultipleRulesetsRequestDataAttributes = void 0;
class GetMultipleRulesetsRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetMultipleRulesetsRequestDataAttributes.attributeTypeMap;
    }
}
exports.GetMultipleRulesetsRequestDataAttributes = GetMultipleRulesetsRequestDataAttributes;
/**
 * @ignore
 */
GetMultipleRulesetsRequestDataAttributes.attributeTypeMap = {
    includeTestingRules: {
        baseName: "include_testing_rules",
        type: "boolean",
    },
    includeTests: {
        baseName: "include_tests",
        type: "boolean",
    },
    rulesets: {
        baseName: "rulesets",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetMultipleRulesetsRequestDataAttributes.js.map