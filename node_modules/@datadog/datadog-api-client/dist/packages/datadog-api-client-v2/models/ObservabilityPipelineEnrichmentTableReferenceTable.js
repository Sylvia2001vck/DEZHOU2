"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineEnrichmentTableReferenceTable = void 0;
/**
 * Uses a Datadog reference table to enrich logs.
 */
class ObservabilityPipelineEnrichmentTableReferenceTable {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineEnrichmentTableReferenceTable.attributeTypeMap;
    }
}
exports.ObservabilityPipelineEnrichmentTableReferenceTable = ObservabilityPipelineEnrichmentTableReferenceTable;
/**
 * @ignore
 */
ObservabilityPipelineEnrichmentTableReferenceTable.attributeTypeMap = {
    appKeyKey: {
        baseName: "app_key_key",
        type: "string",
    },
    columns: {
        baseName: "columns",
        type: "Array<string>",
    },
    keyField: {
        baseName: "key_field",
        type: "string",
        required: true,
    },
    tableId: {
        baseName: "table_id",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineEnrichmentTableReferenceTable.js.map