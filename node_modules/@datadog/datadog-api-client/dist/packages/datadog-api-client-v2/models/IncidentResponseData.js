"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentResponseData = void 0;
/**
 * Incident data from a response.
 */
class IncidentResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentResponseData.attributeTypeMap;
    }
}
exports.IncidentResponseData = IncidentResponseData;
/**
 * @ignore
 */
IncidentResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "IncidentResponseRelationships",
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
//# sourceMappingURL=IncidentResponseData.js.map