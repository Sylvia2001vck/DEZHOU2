"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFrameworkWithoutRequirements = void 0;
/**
 * Framework without requirements.
 */
class CustomFrameworkWithoutRequirements {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomFrameworkWithoutRequirements.attributeTypeMap;
    }
}
exports.CustomFrameworkWithoutRequirements = CustomFrameworkWithoutRequirements;
/**
 * @ignore
 */
CustomFrameworkWithoutRequirements.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    handle: {
        baseName: "handle",
        type: "string",
        required: true,
    },
    iconUrl: {
        baseName: "icon_url",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    version: {
        baseName: "version",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomFrameworkWithoutRequirements.js.map