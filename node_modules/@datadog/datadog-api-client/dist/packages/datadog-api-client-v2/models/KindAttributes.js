"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.KindAttributes = void 0;
/**
 * Kind attributes.
 */
class KindAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return KindAttributes.attributeTypeMap;
    }
}
exports.KindAttributes = KindAttributes;
/**
 * @ignore
 */
KindAttributes.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    displayName: {
        baseName: "displayName",
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
//# sourceMappingURL=KindAttributes.js.map