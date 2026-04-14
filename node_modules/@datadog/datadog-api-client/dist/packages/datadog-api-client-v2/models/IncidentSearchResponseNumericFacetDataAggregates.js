"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentSearchResponseNumericFacetDataAggregates = void 0;
/**
 * Aggregate information for numeric incident data.
 */
class IncidentSearchResponseNumericFacetDataAggregates {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentSearchResponseNumericFacetDataAggregates.attributeTypeMap;
    }
}
exports.IncidentSearchResponseNumericFacetDataAggregates = IncidentSearchResponseNumericFacetDataAggregates;
/**
 * @ignore
 */
IncidentSearchResponseNumericFacetDataAggregates.attributeTypeMap = {
    max: {
        baseName: "max",
        type: "number",
        format: "double",
    },
    min: {
        baseName: "min",
        type: "number",
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentSearchResponseNumericFacetDataAggregates.js.map