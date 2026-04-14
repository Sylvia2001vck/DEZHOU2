"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineEnrichmentTableFile = void 0;
/**
 * Defines a static enrichment table loaded from a CSV file.
 */
class ObservabilityPipelineEnrichmentTableFile {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineEnrichmentTableFile.attributeTypeMap;
    }
}
exports.ObservabilityPipelineEnrichmentTableFile = ObservabilityPipelineEnrichmentTableFile;
/**
 * @ignore
 */
ObservabilityPipelineEnrichmentTableFile.attributeTypeMap = {
    encoding: {
        baseName: "encoding",
        type: "ObservabilityPipelineEnrichmentTableFileEncoding",
        required: true,
    },
    key: {
        baseName: "key",
        type: "Array<ObservabilityPipelineEnrichmentTableFileKeyItems>",
        required: true,
    },
    path: {
        baseName: "path",
        type: "string",
        required: true,
    },
    schema: {
        baseName: "schema",
        type: "Array<ObservabilityPipelineEnrichmentTableFileSchemaItems>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineEnrichmentTableFile.js.map