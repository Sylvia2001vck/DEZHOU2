"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentImportResponse = void 0;
/**
 * Response with an incident.
 */
class IncidentImportResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentImportResponse.attributeTypeMap;
    }
}
exports.IncidentImportResponse = IncidentImportResponse;
/**
 * @ignore
 */
IncidentImportResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentImportResponseData",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<IncidentImportResponseIncludedItem>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentImportResponse.js.map