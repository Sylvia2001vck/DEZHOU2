"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlParam = void 0;
/**
 * The definition of `UrlParam` object.
 */
class UrlParam {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UrlParam.attributeTypeMap;
    }
}
exports.UrlParam = UrlParam;
/**
 * @ignore
 */
UrlParam.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    value: {
        baseName: "value",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UrlParam.js.map