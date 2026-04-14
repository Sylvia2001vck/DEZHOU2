"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictionQueryCreateAttributes = void 0;
/**
 * Attributes of the created restriction query.
 */
class RestrictionQueryCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RestrictionQueryCreateAttributes.attributeTypeMap;
    }
}
exports.RestrictionQueryCreateAttributes = RestrictionQueryCreateAttributes;
/**
 * @ignore
 */
RestrictionQueryCreateAttributes.attributeTypeMap = {
    restrictionQuery: {
        baseName: "restriction_query",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RestrictionQueryCreateAttributes.js.map