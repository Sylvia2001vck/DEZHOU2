"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentRelationshipData = void 0;
/**
 * Incident relationship data
 */
class IncidentRelationshipData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentRelationshipData.attributeTypeMap;
    }
}
exports.IncidentRelationshipData = IncidentRelationshipData;
/**
 * @ignore
 */
IncidentRelationshipData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "IncidentResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentRelationshipData.js.map