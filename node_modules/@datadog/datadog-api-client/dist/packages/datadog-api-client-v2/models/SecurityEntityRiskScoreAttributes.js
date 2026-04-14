"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityEntityRiskScoreAttributes = void 0;
/**
 * Attributes of an entity risk score
 */
class SecurityEntityRiskScoreAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityEntityRiskScoreAttributes.attributeTypeMap;
    }
}
exports.SecurityEntityRiskScoreAttributes = SecurityEntityRiskScoreAttributes;
/**
 * @ignore
 */
SecurityEntityRiskScoreAttributes.attributeTypeMap = {
    configRisks: {
        baseName: "configRisks",
        type: "SecurityEntityConfigRisks",
        required: true,
    },
    entityId: {
        baseName: "entityID",
        type: "string",
        required: true,
    },
    entityMetadata: {
        baseName: "entityMetadata",
        type: "SecurityEntityMetadata",
        required: true,
    },
    entityName: {
        baseName: "entityName",
        type: "string",
    },
    entityProviders: {
        baseName: "entityProviders",
        type: "Array<string>",
        required: true,
    },
    entityRoles: {
        baseName: "entityRoles",
        type: "Array<string>",
    },
    entityType: {
        baseName: "entityType",
        type: "string",
        required: true,
    },
    firstDetected: {
        baseName: "firstDetected",
        type: "number",
        required: true,
        format: "int64",
    },
    lastActivityTitle: {
        baseName: "lastActivityTitle",
        type: "string",
        required: true,
    },
    lastDetected: {
        baseName: "lastDetected",
        type: "number",
        required: true,
        format: "int64",
    },
    riskScore: {
        baseName: "riskScore",
        type: "number",
        required: true,
        format: "double",
    },
    riskScoreEvolution: {
        baseName: "riskScoreEvolution",
        type: "number",
        required: true,
        format: "double",
    },
    severity: {
        baseName: "severity",
        type: "SecurityEntityRiskScoreAttributesSeverity",
        required: true,
    },
    signalsDetected: {
        baseName: "signalsDetected",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityEntityRiskScoreAttributes.js.map