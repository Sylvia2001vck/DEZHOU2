"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTypeRelationships = void 0;
/**
 * The incident type's resource relationships.
 */
class IncidentTypeRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTypeRelationships.attributeTypeMap;
    }
}
exports.IncidentTypeRelationships = IncidentTypeRelationships;
/**
 * @ignore
 */
IncidentTypeRelationships.attributeTypeMap = {
    createdByUser: {
        baseName: "created_by_user",
        type: "RelationshipToUser",
    },
    googleMeetConfiguration: {
        baseName: "google_meet_configuration",
        type: "GoogleMeetConfigurationReference",
    },
    lastModifiedByUser: {
        baseName: "last_modified_by_user",
        type: "RelationshipToUser",
    },
    microsoftTeamsConfiguration: {
        baseName: "microsoft_teams_configuration",
        type: "MicrosoftTeamsConfigurationReference",
    },
    zoomConfiguration: {
        baseName: "zoom_configuration",
        type: "ZoomConfigurationReference",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTypeRelationships.js.map