"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentCreateData = void 0;
/**
 * Incident data for a create request.
 */
class IncidentCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentCreateData.attributeTypeMap;
    }
}
exports.IncidentCreateData = IncidentCreateData;
/**
 * @ignore
 */
IncidentCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentCreateAttributes",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "IncidentCreateRelationships",
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
//# sourceMappingURL=IncidentCreateData.js.map