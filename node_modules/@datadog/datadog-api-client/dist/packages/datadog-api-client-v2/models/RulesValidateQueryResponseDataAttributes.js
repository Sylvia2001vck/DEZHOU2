"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesValidateQueryResponseDataAttributes = void 0;
/**
 * The definition of `RulesValidateQueryResponseDataAttributes` object.
 */
class RulesValidateQueryResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RulesValidateQueryResponseDataAttributes.attributeTypeMap;
    }
}
exports.RulesValidateQueryResponseDataAttributes = RulesValidateQueryResponseDataAttributes;
/**
 * @ignore
 */
RulesValidateQueryResponseDataAttributes.attributeTypeMap = {
    canonical: {
        baseName: "Canonical",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RulesValidateQueryResponseDataAttributes.js.map