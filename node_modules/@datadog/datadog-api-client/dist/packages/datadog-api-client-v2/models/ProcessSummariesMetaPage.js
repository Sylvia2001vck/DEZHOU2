"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessSummariesMetaPage = void 0;
/**
 * Paging attributes.
 */
class ProcessSummariesMetaPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProcessSummariesMetaPage.attributeTypeMap;
    }
}
exports.ProcessSummariesMetaPage = ProcessSummariesMetaPage;
/**
 * @ignore
 */
ProcessSummariesMetaPage.attributeTypeMap = {
    after: {
        baseName: "after",
        type: "string",
    },
    size: {
        baseName: "size",
        type: "number",
        format: "int32",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProcessSummariesMetaPage.js.map