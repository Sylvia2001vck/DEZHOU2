"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentImportResponseData = void 0;
/**
 * Incident data from an import response.
 */
class IncidentImportResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentImportResponseData.attributeTypeMap;
    }
}
exports.IncidentImportResponseData = IncidentImportResponseData;
/**
 * @ignore
 */
IncidentImportResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentImportResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "IncidentImportResponseRelationships",
    },
    type: {
        baseName: "type",
        type: "IncidentType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentImportResponseData.js.map