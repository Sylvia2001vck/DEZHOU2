"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VulnerabilityRisks = void 0;
/**
 * Vulnerability risks.
 */
class VulnerabilityRisks {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return VulnerabilityRisks.attributeTypeMap;
    }
}
exports.VulnerabilityRisks = VulnerabilityRisks;
/**
 * @ignore
 */
VulnerabilityRisks.attributeTypeMap = {
    epss: {
        baseName: "epss",
        type: "EPSS",
    },
    exploitAvailable: {
        baseName: "exploit_available",
        type: "boolean",
        required: true,
    },
    exploitSources: {
        baseName: "exploit_sources",
        type: "Array<string>",
        required: true,
    },
    exploitationProbability: {
        baseName: "exploitation_probability",
        type: "boolean",
        required: true,
    },
    pocExploitAvailable: {
        baseName: "poc_exploit_available",
        type: "boolean",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=VulnerabilityRisks.js.map