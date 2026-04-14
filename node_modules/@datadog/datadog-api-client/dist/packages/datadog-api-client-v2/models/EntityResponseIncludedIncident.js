"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseIncludedIncident = void 0;
/**
 * Included incident.
 */
class EntityResponseIncludedIncident {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseIncludedIncident.attributeTypeMap;
    }
}
exports.EntityResponseIncludedIncident = EntityResponseIncludedIncident;
/**
 * @ignore
 */
EntityResponseIncludedIncident.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "EntityResponseIncludedRelatedIncidentAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "EntityResponseIncludedIncidentType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityResponseIncludedIncident.js.map