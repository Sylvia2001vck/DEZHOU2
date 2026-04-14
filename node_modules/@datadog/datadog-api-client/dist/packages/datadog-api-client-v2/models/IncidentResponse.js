"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentResponse = void 0;
/**
 * Response with an incident.
 */
class IncidentResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentResponse.attributeTypeMap;
    }
}
exports.IncidentResponse = IncidentResponse;
/**
 * @ignore
 */
IncidentResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentResponseData",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<IncidentResponseIncludedItem>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentResponse.js.map