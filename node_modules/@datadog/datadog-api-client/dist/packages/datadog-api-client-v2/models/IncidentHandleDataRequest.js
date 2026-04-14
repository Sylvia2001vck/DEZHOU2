"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentHandleDataRequest = void 0;
class IncidentHandleDataRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentHandleDataRequest.attributeTypeMap;
    }
}
exports.IncidentHandleDataRequest = IncidentHandleDataRequest;
/**
 * @ignore
 */
IncidentHandleDataRequest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentHandleAttributesRequest",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "IncidentHandleRelationshipsRequest",
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
//# sourceMappingURL=IncidentHandleDataRequest.js.map