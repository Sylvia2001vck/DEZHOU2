"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentUpdateData = void 0;
/**
 * Incident data for an update request.
 */
class IncidentUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentUpdateData.attributeTypeMap;
    }
}
exports.IncidentUpdateData = IncidentUpdateData;
/**
 * @ignore
 */
IncidentUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentUpdateAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "IncidentUpdateRelationships",
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
//# sourceMappingURL=IncidentUpdateData.js.map