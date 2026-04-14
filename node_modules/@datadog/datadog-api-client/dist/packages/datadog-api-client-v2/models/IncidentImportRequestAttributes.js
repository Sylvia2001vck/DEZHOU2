"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentImportRequestAttributes = void 0;
/**
 * The incident's attributes for an import request.
 */
class IncidentImportRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentImportRequestAttributes.attributeTypeMap;
    }
}
exports.IncidentImportRequestAttributes = IncidentImportRequestAttributes;
/**
 * @ignore
 */
IncidentImportRequestAttributes.attributeTypeMap = {
    declared: {
        baseName: "declared",
        type: "Date",
        format: "date-time",
    },
    detected: {
        baseName: "detected",
        type: "Date",
        format: "date-time",
    },
    fields: {
        baseName: "fields",
        type: "{ [key: string]: IncidentImportFieldAttributes; }",
    },
    incidentTypeUuid: {
        baseName: "incident_type_uuid",
        type: "string",
    },
    resolved: {
        baseName: "resolved",
        type: "Date",
        format: "date-time",
    },
    title: {
        baseName: "title",
        type: "string",
        required: true,
    },
    visibility: {
        baseName: "visibility",
        type: "IncidentImportVisibility",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentImportRequestAttributes.js.map