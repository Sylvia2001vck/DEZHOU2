"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VulnerabilityAttributes = void 0;
/**
 * The JSON:API attributes of the vulnerability.
 */
class VulnerabilityAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return VulnerabilityAttributes.attributeTypeMap;
    }
}
exports.VulnerabilityAttributes = VulnerabilityAttributes;
/**
 * @ignore
 */
VulnerabilityAttributes.attributeTypeMap = {
    advisory: {
        baseName: "advisory",
        type: "VulnerabilityAdvisory",
    },
    advisoryId: {
        baseName: "advisory_id",
        type: "string",
    },
    codeLocation: {
        baseName: "code_location",
        type: "CodeLocation",
    },
    cveList: {
        baseName: "cve_list",
        type: "Array<string>",
        required: true,
    },
    cvss: {
        baseName: "cvss",
        type: "VulnerabilityCvss",
        required: true,
    },
    dependencyLocations: {
        baseName: "dependency_locations",
        type: "VulnerabilityDependencyLocations",
    },
    description: {
        baseName: "description",
        type: "string",
        required: true,
    },
    ecosystem: {
        baseName: "ecosystem",
        type: "VulnerabilityEcosystem",
    },
    exposureTime: {
        baseName: "exposure_time",
        type: "number",
        required: true,
        format: "int64",
    },
    firstDetection: {
        baseName: "first_detection",
        type: "string",
        required: true,
    },
    fixAvailable: {
        baseName: "fix_available",
        type: "boolean",
        required: true,
    },
    language: {
        baseName: "language",
        type: "string",
        required: true,
    },
    lastDetection: {
        baseName: "last_detection",
        type: "string",
        required: true,
    },
    library: {
        baseName: "library",
        type: "Library",
    },
    origin: {
        baseName: "origin",
        type: "Array<string>",
        required: true,
    },
    remediations: {
        baseName: "remediations",
        type: "Array<Remediation>",
        required: true,
    },
    repoDigests: {
        baseName: "repo_digests",
        type: "Array<string>",
    },
    risks: {
        baseName: "risks",
        type: "VulnerabilityRisks",
        required: true,
    },
    runningKernel: {
        baseName: "running_kernel",
        type: "boolean",
    },
    status: {
        baseName: "status",
        type: "VulnerabilityStatus",
        required: true,
    },
    title: {
        baseName: "title",
        type: "string",
        required: true,
    },
    tool: {
        baseName: "tool",
        type: "VulnerabilityTool",
        required: true,
    },
    type: {
        baseName: "type",
        type: "VulnerabilityType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=VulnerabilityAttributes.js.map