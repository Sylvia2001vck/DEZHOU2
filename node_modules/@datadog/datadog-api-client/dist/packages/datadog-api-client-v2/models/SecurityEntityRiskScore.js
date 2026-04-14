"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityEntityRiskScore = void 0;
/**
 * An entity risk score containing security risk assessment information
 */
class SecurityEntityRiskScore {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityEntityRiskScore.attributeTypeMap;
    }
}
exports.SecurityEntityRiskScore = SecurityEntityRiskScore;
/**
 * @ignore
 */
SecurityEntityRiskScore.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SecurityEntityRiskScoreAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "SecurityEntityRiskScoreType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityEntityRiskScore.js.map