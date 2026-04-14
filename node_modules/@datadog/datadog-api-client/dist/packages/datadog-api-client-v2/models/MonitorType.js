"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorType = void 0;
/**
 * Attributes from the monitor that triggered the event.
 */
class MonitorType {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorType.attributeTypeMap;
    }
}
exports.MonitorType = MonitorType;
/**
 * @ignore
 */
MonitorType.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "number",
        format: "int64",
    },
    groupStatus: {
        baseName: "group_status",
        type: "number",
        format: "int32",
    },
    groups: {
        baseName: "groups",
        type: "Array<string>",
    },
    id: {
        baseName: "id",
        type: "number",
        format: "int64",
    },
    message: {
        baseName: "message",
        type: "string",
    },
    modified: {
        baseName: "modified",
        type: "number",
        format: "int64",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    query: {
        baseName: "query",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    templatedName: {
        baseName: "templated_name",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorType.js.map