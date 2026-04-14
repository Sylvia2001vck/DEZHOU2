"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentSearchResponseIncidentsData = void 0;
/**
 * Incident returned by the search.
 */
class IncidentSearchResponseIncidentsData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentSearchResponseIncidentsData.attributeTypeMap;
    }
}
exports.IncidentSearchResponseIncidentsData = IncidentSearchResponseIncidentsData;
/**
 * @ignore
 */
IncidentSearchResponseIncidentsData.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentResponseData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentSearchResponseIncidentsData.js.map