"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansWarning = void 0;
/**
 * A warning message indicating something that went wrong with the query.
 */
class SpansWarning {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansWarning.attributeTypeMap;
    }
}
exports.SpansWarning = SpansWarning;
/**
 * @ignore
 */
SpansWarning.attributeTypeMap = {
    code: {
        baseName: "code",
        type: "string",
    },
    detail: {
        baseName: "detail",
        type: "string",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansWarning.js.map