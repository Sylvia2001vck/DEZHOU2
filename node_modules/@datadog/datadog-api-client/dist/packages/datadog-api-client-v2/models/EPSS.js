"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EPSS = void 0;
/**
 * Vulnerability EPSS severity.
 */
class EPSS {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EPSS.attributeTypeMap;
    }
}
exports.EPSS = EPSS;
/**
 * @ignore
 */
EPSS.attributeTypeMap = {
    score: {
        baseName: "score",
        type: "number",
        required: true,
        format: "double",
    },
    severity: {
        baseName: "severity",
        type: "VulnerabilitySeverity",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EPSS.js.map