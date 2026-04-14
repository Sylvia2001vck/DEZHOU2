"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryResponseDataAttributes = void 0;
class QueryResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return QueryResponseDataAttributes.attributeTypeMap;
    }
}
exports.QueryResponseDataAttributes = QueryResponseDataAttributes;
/**
 * @ignore
 */
QueryResponseDataAttributes.attributeTypeMap = {
    hits: {
        baseName: "hits",
        type: "Array<{ [key: string]: any; }>",
    },
    total: {
        baseName: "total",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=QueryResponseDataAttributes.js.map