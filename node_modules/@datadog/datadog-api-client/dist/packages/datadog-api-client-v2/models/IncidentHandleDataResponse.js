"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentHandleDataResponse = void 0;
class IncidentHandleDataResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentHandleDataResponse.attributeTypeMap;
    }
}
exports.IncidentHandleDataResponse = IncidentHandleDataResponse;
/**
 * @ignore
 */
IncidentHandleDataResponse.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentHandleAttributesResponse",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "IncidentHandleRelationships",
    },
    type: {
        baseName: "type",
        type: "IncidentHandleType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentHandleDataResponse.js.map