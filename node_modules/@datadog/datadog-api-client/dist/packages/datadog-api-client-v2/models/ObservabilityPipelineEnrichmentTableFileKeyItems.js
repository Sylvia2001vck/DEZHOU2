"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineEnrichmentTableFileKeyItems = void 0;
/**
 * Defines how to map log fields to enrichment table columns during lookups.
 */
class ObservabilityPipelineEnrichmentTableFileKeyItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineEnrichmentTableFileKeyItems.attributeTypeMap;
    }
}
exports.ObservabilityPipelineEnrichmentTableFileKeyItems = ObservabilityPipelineEnrichmentTableFileKeyItems;
/**
 * @ignore
 */
ObservabilityPipelineEnrichmentTableFileKeyItems.attributeTypeMap = {
    column: {
        baseName: "column",
        type: "string",
        required: true,
    },
    comparison: {
        baseName: "comparison",
        type: "ObservabilityPipelineEnrichmentTableFileKeyItemsComparison",
        required: true,
    },
    field: {
        baseName: "field",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineEnrichmentTableFileKeyItems.js.map