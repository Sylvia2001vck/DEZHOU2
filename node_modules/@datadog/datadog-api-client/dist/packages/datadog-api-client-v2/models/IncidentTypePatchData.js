"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTypePatchData = void 0;
/**
 * Incident type data for a patch request.
 */
class IncidentTypePatchData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTypePatchData.attributeTypeMap;
    }
}
exports.IncidentTypePatchData = IncidentTypePatchData;
/**
 * @ignore
 */
IncidentTypePatchData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentTypeUpdateAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=IncidentTypePatchData.js.map