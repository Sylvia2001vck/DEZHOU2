"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentSearchResponseFieldFacetData = void 0;
/**
 * Facet value and number of occurrences for a property field of an incident.
 */
class IncidentSearchResponseFieldFacetData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentSearchResponseFieldFacetData.attributeTypeMap;
    }
}
exports.IncidentSearchResponseFieldFacetData = IncidentSearchResponseFieldFacetData;
/**
 * @ignore
 */
IncidentSearchResponseFieldFacetData.attributeTypeMap = {
    count: {
        baseName: "count",
        type: "number",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentSearchResponseFieldFacetData.js.map