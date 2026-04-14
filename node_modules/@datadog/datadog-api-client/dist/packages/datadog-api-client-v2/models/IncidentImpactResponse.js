"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentImpactResponse = void 0;
/**
 * Response with an incident impact.
 */
class IncidentImpactResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentImpactResponse.attributeTypeMap;
    }
}
exports.IncidentImpactResponse = IncidentImpactResponse;
/**
 * @ignore
 */
IncidentImpactResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentImpactResponseData",
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
//# sourceMappingURL=IncidentImpactResponse.js.map