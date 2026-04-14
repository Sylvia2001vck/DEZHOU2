"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentSearchResponseFacetsData = void 0;
/**
 * Facet data for incidents returned by a search query.
 */
class IncidentSearchResponseFacetsData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentSearchResponseFacetsData.attributeTypeMap;
    }
}
exports.IncidentSearchResponseFacetsData = IncidentSearchResponseFacetsData;
/**
 * @ignore
 */
IncidentSearchResponseFacetsData.attributeTypeMap = {
    commander: {
        baseName: "commander",
        type: "Array<IncidentSearchResponseUserFacetData>",
    },
    createdBy: {
        baseName: "created_by",
        type: "Array<IncidentSearchResponseUserFacetData>",
    },
    fields: {
        baseName: "fields",
        type: "Array<IncidentSearchResponsePropertyFieldFacetData>",
    },
    impact: {
        baseName: "impact",
        type: "Array<IncidentSearchResponseFieldFacetData>",
    },
    lastModifiedBy: {
        baseName: "last_modified_by",
        type: "Array<IncidentSearchResponseUserFacetData>",
    },
    postmortem: {
        baseName: "postmortem",
        type: "Array<IncidentSearchResponseFieldFacetData>",
    },
    responder: {
        baseName: "responder",
        type: "Array<IncidentSearchResponseUserFacetData>",
    },
    severity: {
        baseName: "severity",
        type: "Array<IncidentSearchResponseFieldFacetData>",
    },
    state: {
        baseName: "state",
        type: "Array<IncidentSearchResponseFieldFacetData>",
    },
    timeToRepair: {
        baseName: "time_to_repair",
        type: "Array<IncidentSearchResponseNumericFacetData>",
    },
    timeToResolve: {
        baseName: "time_to_resolve",
        type: "Array<IncidentSearchResponseNumericFacetData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentSearchResponseFacetsData.js.map