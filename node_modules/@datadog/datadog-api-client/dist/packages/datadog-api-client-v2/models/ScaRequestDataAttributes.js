"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScaRequestDataAttributes = void 0;
class ScaRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScaRequestDataAttributes.attributeTypeMap;
    }
}
exports.ScaRequestDataAttributes = ScaRequestDataAttributes;
/**
 * @ignore
 */
ScaRequestDataAttributes.attributeTypeMap = {
    commit: {
        baseName: "commit",
        type: "ScaRequestDataAttributesCommit",
    },
    dependencies: {
        baseName: "dependencies",
        type: "Array<ScaRequestDataAttributesDependenciesItems>",
    },
    env: {
        baseName: "env",
        type: "string",
    },
    files: {
        baseName: "files",
        type: "Array<ScaRequestDataAttributesFilesItems>",
    },
    relations: {
        baseName: "relations",
        type: "Array<ScaRequestDataAttributesRelationsItems>",
    },
    repository: {
        baseName: "repository",
        type: "ScaRequestDataAttributesRepository",
    },
    service: {
        baseName: "service",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "{ [key: string]: string; }",
    },
    vulnerabilities: {
        baseName: "vulnerabilities",
        type: "Array<ScaRequestDataAttributesVulnerabilitiesItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScaRequestDataAttributes.js.map