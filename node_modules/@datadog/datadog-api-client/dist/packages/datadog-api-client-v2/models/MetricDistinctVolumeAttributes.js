"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricDistinctVolumeAttributes = void 0;
/**
 * Object containing the definition of a metric's distinct volume.
 */
class MetricDistinctVolumeAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricDistinctVolumeAttributes.attributeTypeMap;
    }
}
exports.MetricDistinctVolumeAttributes = MetricDistinctVolumeAttributes;
/**
 * @ignore
 */
MetricDistinctVolumeAttributes.attributeTypeMap = {
    distinctVolume: {
        baseName: "distinct_volume",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricDistinctVolumeAttributes.js.map