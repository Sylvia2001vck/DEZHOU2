"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentHandleRelationships = void 0;
class IncidentHandleRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentHandleRelationships.attributeTypeMap;
    }
}
exports.IncidentHandleRelationships = IncidentHandleRelationships;
/**
 * @ignore
 */
IncidentHandleRelationships.attributeTypeMap = {
    commanderUser: {
        baseName: "commander_user",
        type: "IncidentHandleRelationship",
    },
    createdByUser: {
        baseName: "created_by_user",
        type: "IncidentHandleRelationship",
        required: true,
    },
    incidentType: {
        baseName: "incident_type",
        type: "IncidentHandleRelationship",
        required: true,
    },
    lastModifiedByUser: {
        baseName: "last_modified_by_user",
        type: "IncidentHandleRelationship",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentHandleRelationships.js.map