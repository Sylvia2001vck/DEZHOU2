"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentSearchResponseAttributes = void 0;
/**
 * Attributes returned by an incident search.
 */
class IncidentSearchResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentSearchResponseAttributes.attributeTypeMap;
    }
}
exports.IncidentSearchResponseAttributes = IncidentSearchResponseAttributes;
/**
 * @ignore
 */
IncidentSearchResponseAttributes.attributeTypeMap = {
    facets: {
        baseName: "facets",
        type: "IncidentSearchResponseFacetsData",
        required: true,
    },
    incidents: {
        baseName: "incidents",
        type: "Array<IncidentSearchResponseIncidentsData>",
        required: true,
    },
    total: {
        baseName: "total",
        type: "number",
        required: true,
        format: "int32",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentSearchResponseAttributes.js.map