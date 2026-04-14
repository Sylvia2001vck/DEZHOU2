"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentImpactCreateData = void 0;
/**
 * Incident impact data for a create request.
 */
class IncidentImpactCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentImpactCreateData.attributeTypeMap;
    }
}
exports.IncidentImpactCreateData = IncidentImpactCreateData;
/**
 * @ignore
 */
IncidentImpactCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentImpactCreateAttributes",
        required: true,
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
//# sourceMappingURL=IncidentImpactCreateData.js.map