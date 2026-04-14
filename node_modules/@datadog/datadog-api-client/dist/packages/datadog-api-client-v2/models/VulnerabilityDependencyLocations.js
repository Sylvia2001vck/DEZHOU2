"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VulnerabilityDependencyLocations = void 0;
/**
 * Static library vulnerability location.
 */
class VulnerabilityDependencyLocations {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return VulnerabilityDependencyLocations.attributeTypeMap;
    }
}
exports.VulnerabilityDependencyLocations = VulnerabilityDependencyLocations;
/**
 * @ignore
 */
VulnerabilityDependencyLocations.attributeTypeMap = {
    block: {
        baseName: "block",
        type: "DependencyLocation",
        required: true,
    },
    name: {
        baseName: "name",
        type: "DependencyLocation",
    },
    version: {
        baseName: "version",
        type: "DependencyLocation",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=VulnerabilityDependencyLocations.js.map