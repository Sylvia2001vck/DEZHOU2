"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineEnrichmentTableFileEncoding = void 0;
/**
 * File encoding format.
 */
class ObservabilityPipelineEnrichmentTableFileEncoding {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineEnrichmentTableFileEncoding.attributeTypeMap;
    }
}
exports.ObservabilityPipelineEnrichmentTableFileEncoding = ObservabilityPipelineEnrichmentTableFileEncoding;
/**
 * @ignore
 */
ObservabilityPipelineEnrichmentTableFileEncoding.attributeTypeMap = {
    delimiter: {
        baseName: "delimiter",
        type: "string",
        required: true,
    },
    includesHeaders: {
        baseName: "includes_headers",
        type: "boolean",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ObservabilityPipelineEnrichmentTableFileEncodingType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineEnrichmentTableFileEncoding.js.map