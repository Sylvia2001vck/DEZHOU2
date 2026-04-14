"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentImportRequestData = void 0;
/**
 * Incident data for an import request.
 */
class IncidentImportRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentImportRequestData.attributeTypeMap;
    }
}
exports.IncidentImportRequestData = IncidentImportRequestData;
/**
 * @ignore
 */
IncidentImportRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentImportRequestAttributes",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "IncidentImportRelationships",
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
//# sourceMappingURL=IncidentImportRequestData.js.map