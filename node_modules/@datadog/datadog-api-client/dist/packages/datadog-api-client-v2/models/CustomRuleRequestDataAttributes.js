"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRuleRequestDataAttributes = void 0;
class CustomRuleRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomRuleRequestDataAttributes.attributeTypeMap;
    }
}
exports.CustomRuleRequestDataAttributes = CustomRuleRequestDataAttributes;
/**
 * @ignore
 */
CustomRuleRequestDataAttributes.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomRuleRequestDataAttributes.js.map