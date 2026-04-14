"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTypeListResponse = void 0;
/**
 * Response with a list of incident types.
 */
class IncidentTypeListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTypeListResponse.attributeTypeMap;
    }
}
exports.IncidentTypeListResponse = IncidentTypeListResponse;
/**
 * @ignore
 */
IncidentTypeListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<IncidentTypeObject>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTypeListResponse.js.map