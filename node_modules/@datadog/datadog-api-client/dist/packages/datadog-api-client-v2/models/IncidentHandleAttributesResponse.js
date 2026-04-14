"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentHandleAttributesResponse = void 0;
/**
 * Incident handle attributes for responses
 */
class IncidentHandleAttributesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentHandleAttributesResponse.attributeTypeMap;
    }
}
exports.IncidentHandleAttributesResponse = IncidentHandleAttributesResponse;
/**
 * @ignore
 */
IncidentHandleAttributesResponse.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "Date",
        required: true,
        format: "date-time",
    },
    fields: {
        baseName: "fields",
        type: "IncidentHandleAttributesFields",
        required: true,
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        required: true,
        format: "date-time",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentHandleAttributesResponse.js.map