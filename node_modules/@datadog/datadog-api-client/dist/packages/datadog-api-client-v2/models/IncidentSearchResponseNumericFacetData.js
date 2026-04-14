"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentSearchResponseNumericFacetData = void 0;
/**
 * Facet data numeric attributes of an incident.
 */
class IncidentSearchResponseNumericFacetData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentSearchResponseNumericFacetData.attributeTypeMap;
    }
}
exports.IncidentSearchResponseNumericFacetData = IncidentSearchResponseNumericFacetData;
/**
 * @ignore
 */
IncidentSearchResponseNumericFacetData.attributeTypeMap = {
    aggregates: {
        baseName: "aggregates",
        type: "IncidentSearchResponseNumericFacetDataAggregates",
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
//# sourceMappingURL=IncidentSearchResponseNumericFacetData.js.map