"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORAListFailuresRequestAttributes = void 0;
/**
 * Attributes to get a list of incidents.
 */
class DORAListFailuresRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORAListFailuresRequestAttributes.attributeTypeMap;
    }
}
exports.DORAListFailuresRequestAttributes = DORAListFailuresRequestAttributes;
/**
 * @ignore
 */
DORAListFailuresRequestAttributes.attributeTypeMap = {
    from: {
        baseName: "from",
        type: "Date",
        format: "date-time",
    },
    limit: {
        baseName: "limit",
        type: "number",
        format: "int32",
    },
    query: {
        baseName: "query",
        type: "string",
    },
    sort: {
        baseName: "sort",
        type: "string",
    },
    to: {
        baseName: "to",
        type: "Date",
        format: "date-time",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DORAListFailuresRequestAttributes.js.map