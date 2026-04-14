"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VulnerabilityCvss = void 0;
/**
 * Vulnerability severities.
 */
class VulnerabilityCvss {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return VulnerabilityCvss.attributeTypeMap;
    }
}
exports.VulnerabilityCvss = VulnerabilityCvss;
/**
 * @ignore
 */
VulnerabilityCvss.attributeTypeMap = {
    base: {
        baseName: "base",
        type: "CVSS",
        required: true,
    },
    datadog: {
        baseName: "datadog",
        type: "CVSS",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=VulnerabilityCvss.js.map