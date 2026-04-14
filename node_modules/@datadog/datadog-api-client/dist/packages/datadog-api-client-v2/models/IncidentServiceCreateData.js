"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentServiceCreateData = void 0;
/**
 * Incident Service payload for create requests.
 */
class IncidentServiceCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentServiceCreateData.attributeTypeMap;
    }
}
exports.IncidentServiceCreateData = IncidentServiceCreateData;
/**
 * @ignore
 */
IncidentServiceCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentServiceCreateAttributes",
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
//# sourceMappingURL=IncidentServiceCreateData.js.map