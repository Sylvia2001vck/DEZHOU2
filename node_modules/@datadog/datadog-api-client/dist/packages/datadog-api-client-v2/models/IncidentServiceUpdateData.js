"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentServiceUpdateData = void 0;
/**
 * Incident Service payload for update requests.
 */
class IncidentServiceUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentServiceUpdateData.attributeTypeMap;
    }
}
exports.IncidentServiceUpdateData = IncidentServiceUpdateData;
/**
 * @ignore
 */
IncidentServiceUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentServiceUpdateAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=IncidentServiceUpdateData.js.map