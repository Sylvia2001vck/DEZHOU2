"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems = void 0;
class SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems.attributeTypeMap;
    }
}
exports.SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems = SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems;
/**
 * @ignore
 */
SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems.attributeTypeMap = {
    end: {
        baseName: "end",
        type: "number",
        format: "int64",
    },
    start: {
        baseName: "start",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems.js.map