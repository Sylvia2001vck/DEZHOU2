"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictionPolicyBinding = void 0;
/**
 * Specifies which principals are associated with a relation.
 */
class RestrictionPolicyBinding {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RestrictionPolicyBinding.attributeTypeMap;
    }
}
exports.RestrictionPolicyBinding = RestrictionPolicyBinding;
/**
 * @ignore
 */
RestrictionPolicyBinding.attributeTypeMap = {
    principals: {
        baseName: "principals",
        type: "Array<string>",
        required: true,
    },
    relation: {
        baseName: "relation",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RestrictionPolicyBinding.js.map