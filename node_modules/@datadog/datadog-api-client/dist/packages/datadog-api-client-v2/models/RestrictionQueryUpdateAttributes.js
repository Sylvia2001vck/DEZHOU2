"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictionQueryUpdateAttributes = void 0;
/**
 * Attributes of the edited restriction query.
 */
class RestrictionQueryUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RestrictionQueryUpdateAttributes.attributeTypeMap;
    }
}
exports.RestrictionQueryUpdateAttributes = RestrictionQueryUpdateAttributes;
/**
 * @ignore
 */
RestrictionQueryUpdateAttributes.attributeTypeMap = {
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
//# sourceMappingURL=RestrictionQueryUpdateAttributes.js.map