"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsResponseMetadataPage = void 0;
/**
 * Paging attributes.
 */
class LogsResponseMetadataPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsResponseMetadataPage.attributeTypeMap;
    }
}
exports.LogsResponseMetadataPage = LogsResponseMetadataPage;
/**
 * @ignore
 */
LogsResponseMetadataPage.attributeTypeMap = {
    after: {
        baseName: "after",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsResponseMetadataPage.js.map