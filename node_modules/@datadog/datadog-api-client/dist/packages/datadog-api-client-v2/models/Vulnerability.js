"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vulnerability = void 0;
/**
 * A single vulnerability
 */
class Vulnerability {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Vulnerability.attributeTypeMap;
    }
}
exports.Vulnerability = Vulnerability;
/**
 * @ignore
 */
Vulnerability.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "VulnerabilityAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "VulnerabilityRelationships",
        required: true,
    },
    type: {
        baseName: "type",
        type: "VulnerabilitiesType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Vulnerability.js.map