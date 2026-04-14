"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleTemplateDataAttributes = void 0;
/**
 * The definition of `RoleTemplateDataAttributes` object.
 */
class RoleTemplateDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RoleTemplateDataAttributes.attributeTypeMap;
    }
}
exports.RoleTemplateDataAttributes = RoleTemplateDataAttributes;
/**
 * @ignore
 */
RoleTemplateDataAttributes.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RoleTemplateDataAttributes.js.map