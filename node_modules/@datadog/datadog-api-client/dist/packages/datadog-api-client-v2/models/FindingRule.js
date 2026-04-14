"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindingRule = void 0;
/**
 * The rule that triggered this finding.
 */
class FindingRule {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FindingRule.attributeTypeMap;
    }
}
exports.FindingRule = FindingRule;
/**
 * @ignore
 */
FindingRule.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
};
//# sourceMappingURL=FindingRule.js.map