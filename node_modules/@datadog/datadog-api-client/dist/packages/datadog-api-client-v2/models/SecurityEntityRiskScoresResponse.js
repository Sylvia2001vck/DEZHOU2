"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityEntityRiskScoresResponse = void 0;
/**
 * Response containing a list of entity risk scores
 */
class SecurityEntityRiskScoresResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityEntityRiskScoresResponse.attributeTypeMap;
    }
}
exports.SecurityEntityRiskScoresResponse = SecurityEntityRiskScoresResponse;
/**
 * @ignore
 */
SecurityEntityRiskScoresResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<SecurityEntityRiskScore>",
        required: true,
    },
    meta: {
        baseName: "meta",
        type: "SecurityEntityRiskScoresMeta",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityEntityRiskScoresResponse.js.map