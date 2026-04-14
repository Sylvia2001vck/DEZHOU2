"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineEnrichmentTableGeoIp = void 0;
/**
 * Uses a GeoIP database to enrich logs based on an IP field.
 */
class ObservabilityPipelineEnrichmentTableGeoIp {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineEnrichmentTableGeoIp.attributeTypeMap;
    }
}
exports.ObservabilityPipelineEnrichmentTableGeoIp = ObservabilityPipelineEnrichmentTableGeoIp;
/**
 * @ignore
 */
ObservabilityPipelineEnrichmentTableGeoIp.attributeTypeMap = {
    keyField: {
        baseName: "key_field",
        type: "string",
        required: true,
    },
    locale: {
        baseName: "locale",
        type: "string",
        required: true,
    },
    path: {
        baseName: "path",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineEnrichmentTableGeoIp.js.map