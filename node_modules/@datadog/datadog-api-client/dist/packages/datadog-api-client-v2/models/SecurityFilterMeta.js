"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityFilterMeta = void 0;
/**
 * Optional metadata associated to the response.
 */
class SecurityFilterMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityFilterMeta.attributeTypeMap;
    }
}
exports.SecurityFilterMeta = SecurityFilterMeta;
/**
 * @ignore
 */
SecurityFilterMeta.attributeTypeMap = {
    warning: {
        baseName: "warning",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityFilterMeta.js.map