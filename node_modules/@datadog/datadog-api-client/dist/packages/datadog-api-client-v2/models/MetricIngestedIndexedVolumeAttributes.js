"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricIngestedIndexedVolumeAttributes = void 0;
/**
 * Object containing the definition of a metric's ingested and indexed volume.
 */
class MetricIngestedIndexedVolumeAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricIngestedIndexedVolumeAttributes.attributeTypeMap;
    }
}
exports.MetricIngestedIndexedVolumeAttributes = MetricIngestedIndexedVolumeAttributes;
/**
 * @ignore
 */
MetricIngestedIndexedVolumeAttributes.attributeTypeMap = {
    indexedVolume: {
        baseName: "indexed_volume",
        type: "number",
        format: "int64",
    },
    ingestedVolume: {
        baseName: "ingested_volume",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricIngestedIndexedVolumeAttributes.js.map