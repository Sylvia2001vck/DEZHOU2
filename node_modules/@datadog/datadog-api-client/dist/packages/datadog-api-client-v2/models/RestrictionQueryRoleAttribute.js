"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictionQueryRoleAttribute = void 0;
/**
 * Attributes of the role for a restriction query.
 */
class RestrictionQueryRoleAttribute {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RestrictionQueryRoleAttribute.attributeTypeMap;
    }
}
exports.RestrictionQueryRoleAttribute = RestrictionQueryRoleAttribute;
/**
 * @ignore
 */
RestrictionQueryRoleAttribute.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RestrictionQueryRoleAttribute.js.map