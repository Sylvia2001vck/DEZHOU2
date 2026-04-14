"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesetRespDataAttributesModified = void 0;
/**
 * The definition of `RulesetRespDataAttributesModified` object.
 */
class RulesetRespDataAttributesModified {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RulesetRespDataAttributesModified.attributeTypeMap;
    }
}
exports.RulesetRespDataAttributesModified = RulesetRespDataAttributesModified;
/**
 * @ignore
 */
RulesetRespDataAttributesModified.attributeTypeMap = {
    nanos: {
        baseName: "nanos",
        type: "number",
        format: "int32",
    },
    seconds: {
        baseName: "seconds",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RulesetRespDataAttributesModified.js.map