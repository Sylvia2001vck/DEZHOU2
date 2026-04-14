"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Remediation = void 0;
/**
 * Vulnerability remediation.
 */
class Remediation {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Remediation.attributeTypeMap;
    }
}
exports.Remediation = Remediation;
/**
 * @ignore
 */
Remediation.attributeTypeMap = {
    autoSolvable: {
        baseName: "auto_solvable",
        type: "boolean",
        required: true,
    },
    avoidedAdvisories: {
        baseName: "avoided_advisories",
        type: "Array<Advisory>",
        required: true,
    },
    fixedAdvisories: {
        baseName: "fixed_advisories",
        type: "Array<Advisory>",
        required: true,
    },
    libraryName: {
        baseName: "library_name",
        type: "string",
        required: true,
    },
    libraryVersion: {
        baseName: "library_version",
        type: "string",
        required: true,
    },
    newAdvisories: {
        baseName: "new_advisories",
        type: "Array<Advisory>",
        required: true,
    },
    remainingAdvisories: {
        baseName: "remaining_advisories",
        type: "Array<Advisory>",
        required: true,
    },
    type: {
        baseName: "type",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Remediation.js.map