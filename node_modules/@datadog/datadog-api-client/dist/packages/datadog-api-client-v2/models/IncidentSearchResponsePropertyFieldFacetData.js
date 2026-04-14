"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentSearchResponsePropertyFieldFacetData = void 0;
/**
 * Facet data for the incident property fields.
 */
class IncidentSearchResponsePropertyFieldFacetData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentSearchResponsePropertyFieldFacetData.attributeTypeMap;
    }
}
exports.IncidentSearchResponsePropertyFieldFacetData = IncidentSearchResponsePropertyFieldFacetData;
/**
 * @ignore
 */
IncidentSearchResponsePropertyFieldFacetData.attributeTypeMap = {
    aggregates: {
        baseName: "aggregates",
        type: "IncidentSearchResponseNumericFacetDataAggregates",
    },
    facets: {
        baseName: "facets",
        type: "Array<IncidentSearchResponseFieldFacetData>",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentSearchResponsePropertyFieldFacetData.js.map