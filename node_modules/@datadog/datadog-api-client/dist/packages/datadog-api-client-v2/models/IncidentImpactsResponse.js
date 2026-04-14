"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentImpactsResponse = void 0;
/**
 * Response with a list of incident impacts.
 */
class IncidentImpactsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentImpactsResponse.attributeTypeMap;
    }
}
exports.IncidentImpactsResponse = IncidentImpactsResponse;
/**
 * @ignore
 */
IncidentImpactsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<IncidentImpactResponseData>",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<IncidentUserData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentImpactsResponse.js.map