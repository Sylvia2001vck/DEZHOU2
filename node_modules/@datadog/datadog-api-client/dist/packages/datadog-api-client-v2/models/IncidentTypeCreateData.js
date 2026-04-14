"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTypeCreateData = void 0;
/**
 * Incident type data for a create request.
 */
class IncidentTypeCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTypeCreateData.attributeTypeMap;
    }
}
exports.IncidentTypeCreateData = IncidentTypeCreateData;
/**
 * @ignore
 */
IncidentTypeCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentTypeAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "IncidentTypeType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTypeCreateData.js.map