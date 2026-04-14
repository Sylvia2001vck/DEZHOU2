"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineEnrichmentTableFileSchemaItems = void 0;
/**
 * Describes a single column and its type in an enrichment table schema.
 */
class ObservabilityPipelineEnrichmentTableFileSchemaItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineEnrichmentTableFileSchemaItems.attributeTypeMap;
    }
}
exports.ObservabilityPipelineEnrichmentTableFileSchemaItems = ObservabilityPipelineEnrichmentTableFileSchemaItems;
/**
 * @ignore
 */
ObservabilityPipelineEnrichmentTableFileSchemaItems.attributeTypeMap = {
    column: {
        baseName: "column",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineEnrichmentTableFileSchemaItemsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineEnrichmentTableFileSchemaItems.js.map