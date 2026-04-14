"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMObsCursorMeta = void 0;
/**
 * Pagination cursor metadata.
 */
class LLMObsCursorMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LLMObsCursorMeta.attributeTypeMap;
    }
}
exports.LLMObsCursorMeta = LLMObsCursorMeta;
/**
 * @ignore
 */
LLMObsCursorMeta.attributeTypeMap = {
    after: {
        baseName: "after",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LLMObsCursorMeta.js.map