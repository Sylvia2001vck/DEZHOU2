"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansQueryOptions = void 0;
/**
 * Global query options that are used during the query.
 * Note: You should only supply timezone or time offset but not both otherwise the query will fail.
 */
class SpansQueryOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansQueryOptions.attributeTypeMap;
    }
}
exports.SpansQueryOptions = SpansQueryOptions;
/**
 * @ignore
 */
SpansQueryOptions.attributeTypeMap = {
    timeOffset: {
        baseName: "timeOffset",
        type: "number",
        format: "int64",
    },
    timezone: {
        baseName: "timezone",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansQueryOptions.js.map