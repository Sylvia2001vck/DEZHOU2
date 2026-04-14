"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansFilter = void 0;
/**
 * The spans filter used to index spans.
 */
class SpansFilter {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansFilter.attributeTypeMap;
    }
}
exports.SpansFilter = SpansFilter;
/**
 * @ignore
 */
SpansFilter.attributeTypeMap = {
    query: {
        baseName: "query",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansFilter.js.map