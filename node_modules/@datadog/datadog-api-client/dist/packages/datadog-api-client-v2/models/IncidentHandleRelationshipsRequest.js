"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentHandleRelationshipsRequest = void 0;
class IncidentHandleRelationshipsRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentHandleRelationshipsRequest.attributeTypeMap;
    }
}
exports.IncidentHandleRelationshipsRequest = IncidentHandleRelationshipsRequest;
/**
 * @ignore
 */
IncidentHandleRelationshipsRequest.attributeTypeMap = {
    commanderUser: {
        baseName: "commander_user",
        type: "IncidentHandleRelationship",
    },
    incidentType: {
        baseName: "incident_type",
        type: "IncidentHandleRelationship",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentHandleRelationshipsRequest.js.map