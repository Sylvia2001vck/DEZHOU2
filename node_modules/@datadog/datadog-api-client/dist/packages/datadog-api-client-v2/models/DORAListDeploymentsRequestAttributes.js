"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORAListDeploymentsRequestAttributes = void 0;
/**
 * Attributes to get a list of deployments.
 */
class DORAListDeploymentsRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORAListDeploymentsRequestAttributes.attributeTypeMap;
    }
}
exports.DORAListDeploymentsRequestAttributes = DORAListDeploymentsRequestAttributes;
/**
 * @ignore
 */
DORAListDeploymentsRequestAttributes.attributeTypeMap = {
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
//# sourceMappingURL=DORAListDeploymentsRequestAttributes.js.map