"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentImpactResponseData = void 0;
/**
 * Incident impact data from a response.
 */
class IncidentImpactResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentImpactResponseData.attributeTypeMap;
    }
}
exports.IncidentImpactResponseData = IncidentImpactResponseData;
/**
 * @ignore
 */
IncidentImpactResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentImpactAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "IncidentImpactRelationships",
    },
    type: {
        baseName: "type",
        type: "IncidentImpactType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentImpactResponseData.js.map