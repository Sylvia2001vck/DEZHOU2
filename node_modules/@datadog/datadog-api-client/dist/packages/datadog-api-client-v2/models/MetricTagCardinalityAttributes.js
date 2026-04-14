"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricTagCardinalityAttributes = void 0;
/**
 * An object containing properties related to the tag key
 */
class MetricTagCardinalityAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricTagCardinalityAttributes.attributeTypeMap;
    }
}
exports.MetricTagCardinalityAttributes = MetricTagCardinalityAttributes;
/**
 * @ignore
 */
MetricTagCardinalityAttributes.attributeTypeMap = {
    cardinalityDelta: {
        baseName: "cardinality_delta",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricTagCardinalityAttributes.js.map