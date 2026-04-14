"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineEnrichmentTableProcessor = void 0;
/**
 * The `enrichment_table` processor enriches logs using a static CSV file, GeoIP database, or reference table. Exactly one of `file`, `geoip`, or `reference_table` must be configured.
 *
 * **Supported pipeline types:** logs
 */
class ObservabilityPipelineEnrichmentTableProcessor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineEnrichmentTableProcessor.attributeTypeMap;
    }
}
exports.ObservabilityPipelineEnrichmentTableProcessor = ObservabilityPipelineEnrichmentTableProcessor;
/**
 * @ignore
 */
ObservabilityPipelineEnrichmentTableProcessor.attributeTypeMap = {
    displayName: {
        baseName: "display_name",
        type: "string",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
        required: true,
    },
    file: {
        baseName: "file",
        type: "ObservabilityPipelineEnrichmentTableFile",
    },
    geoip: {
        baseName: "geoip",
        type: "ObservabilityPipelineEnrichmentTableGeoIp",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    include: {
        baseName: "include",
        type: "string",
        required: true,
    },
    referenceTable: {
        baseName: "reference_table",
        type: "ObservabilityPipelineEnrichmentTableReferenceTable",
    },
    target: {
        baseName: "target",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineEnrichmentTableProcessorType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineEnrichmentTableProcessor.js.map