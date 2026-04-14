"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutcomesResponseIncludedRuleAttributes = void 0;
/**
 * Details of a rule.
 */
class OutcomesResponseIncludedRuleAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OutcomesResponseIncludedRuleAttributes.attributeTypeMap;
    }
}
exports.OutcomesResponseIncludedRuleAttributes = OutcomesResponseIncludedRuleAttributes;
/**
 * @ignore
 */
OutcomesResponseIncludedRuleAttributes.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
    },
    scorecardName: {
        baseName: "scorecard_name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OutcomesResponseIncludedRuleAttributes.js.map