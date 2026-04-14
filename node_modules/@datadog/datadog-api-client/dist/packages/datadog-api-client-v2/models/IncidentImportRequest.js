"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentImportRequest = void 0;
/**
 * Import request for an incident. Used to import historical incidents from external systems.
 */
class IncidentImportRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentImportRequest.attributeTypeMap;
    }
}
exports.IncidentImportRequest = IncidentImportRequest;
/**
 * @ignore
 */
IncidentImportRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentImportRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentImportRequest.js.map