"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsAggregateRequestPage = void 0;
/**
 * Paging settings
 */
class LogsAggregateRequestPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsAggregateRequestPage.attributeTypeMap;
    }
}
exports.LogsAggregateRequestPage = LogsAggregateRequestPage;
/**
 * @ignore
 */
LogsAggregateRequestPage.attributeTypeMap = {
    cursor: {
        baseName: "cursor",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsAggregateRequestPage.js.map