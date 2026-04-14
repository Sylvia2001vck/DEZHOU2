"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentHandleAttributesRequest = void 0;
/**
 * Incident handle attributes for requests
 */
class IncidentHandleAttributesRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentHandleAttributesRequest.attributeTypeMap;
    }
}
exports.IncidentHandleAttributesRequest = IncidentHandleAttributesRequest;
/**
 * @ignore
 */
IncidentHandleAttributesRequest.attributeTypeMap = {
    fields: {
        baseName: "fields",
        type: "IncidentHandleAttributesFields",
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
//# sourceMappingURL=IncidentHandleAttributesRequest.js.map