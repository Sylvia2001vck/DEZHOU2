"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsArchiveOrderAttributes = void 0;
/**
 * The attributes associated with the archive order.
 */
class LogsArchiveOrderAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsArchiveOrderAttributes.attributeTypeMap;
    }
}
exports.LogsArchiveOrderAttributes = LogsArchiveOrderAttributes;
/**
 * @ignore
 */
LogsArchiveOrderAttributes.attributeTypeMap = {
    archiveIds: {
        baseName: "archive_ids",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsArchiveOrderAttributes.js.map