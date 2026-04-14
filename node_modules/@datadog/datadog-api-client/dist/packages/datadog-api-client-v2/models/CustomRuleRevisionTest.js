"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRuleRevisionTest = void 0;
class CustomRuleRevisionTest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomRuleRevisionTest.attributeTypeMap;
    }
}
exports.CustomRuleRevisionTest = CustomRuleRevisionTest;
/**
 * @ignore
 */
CustomRuleRevisionTest.attributeTypeMap = {
    annotationCount: {
        baseName: "annotation_count",
        type: "number",
        required: true,
        format: "int64",
    },
    code: {
        baseName: "code",
        type: "string",
        required: true,
    },
    filename: {
        baseName: "filename",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomRuleRevisionTest.js.map