"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansAttributes = void 0;
/**
 * JSON object containing all span attributes and their associated values.
 */
class SpansAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansAttributes.attributeTypeMap;
    }
}
exports.SpansAttributes = SpansAttributes;
/**
 * @ignore
 */
SpansAttributes.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "{ [key: string]: any; }",
    },
    custom: {
        baseName: "custom",
        type: "{ [key: string]: any; }",
    },
    endTimestamp: {
        baseName: "end_timestamp",
        type: "Date",
        format: "date-time",
    },
    env: {
        baseName: "env",
        type: "string",
    },
    host: {
        baseName: "host",
        type: "string",
    },
    ingestionReason: {
        baseName: "ingestion_reason",
        type: "string",
    },
    parentId: {
        baseName: "parent_id",
        type: "string",
    },
    resourceHash: {
        baseName: "resource_hash",
        type: "string",
    },
    resourceName: {
        baseName: "resource_name",
        type: "string",
    },
    retainedBy: {
        baseName: "retained_by",
        type: "string",
    },
    service: {
        baseName: "service",
        type: "string",
    },
    singleSpan: {
        baseName: "single_span",
        type: "boolean",
    },
    spanId: {
        baseName: "span_id",
        type: "string",
    },
    startTimestamp: {
        baseName: "start_timestamp",
        type: "Date",
        format: "date-time",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    traceId: {
        baseName: "trace_id",
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
//# sourceMappingURL=SpansAttributes.js.map