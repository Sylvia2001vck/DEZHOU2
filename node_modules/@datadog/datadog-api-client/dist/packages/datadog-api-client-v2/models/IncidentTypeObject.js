"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTypeObject = void 0;
/**
 * Incident type response data.
 */
class IncidentTypeObject {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTypeObject.attributeTypeMap;
    }
}
exports.IncidentTypeObject = IncidentTypeObject;
/**
 * @ignore
 */
IncidentTypeObject.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentTypeAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "IncidentTypeRelationships",
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
//# sourceMappingURL=IncidentTypeObject.js.map