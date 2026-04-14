"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Findings = void 0;
/**
 * A list of security findings.
 */
class Findings {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Findings.attributeTypeMap;
    }
}
exports.Findings = Findings;
/**
 * @ignore
 */
Findings.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<FindingData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Findings.js.map