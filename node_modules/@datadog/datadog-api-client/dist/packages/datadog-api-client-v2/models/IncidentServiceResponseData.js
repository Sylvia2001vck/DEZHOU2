"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentServiceResponseData = void 0;
/**
 * Incident Service data from responses.
 */
class IncidentServiceResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentServiceResponseData.attributeTypeMap;
    }
}
exports.IncidentServiceResponseData = IncidentServiceResponseData;
/**
 * @ignore
 */
IncidentServiceResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentServiceResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "IncidentServiceRelationships",
    },
    type: {
        baseName: "type",
        type: "IncidentServiceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentServiceResponseData.js.map