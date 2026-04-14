"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORAFailureRequestAttributes = void 0;
/**
 * Attributes to create a DORA incident event.
 */
class DORAFailureRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORAFailureRequestAttributes.attributeTypeMap;
    }
}
exports.DORAFailureRequestAttributes = DORAFailureRequestAttributes;
/**
 * @ignore
 */
DORAFailureRequestAttributes.attributeTypeMap = {
    customTags: {
        baseName: "custom_tags",
        type: "Array<string>",
    },
    env: {
        baseName: "env",
        type: "string",
    },
    finishedAt: {
        baseName: "finished_at",
        type: "number",
        format: "int64",
    },
    git: {
        baseName: "git",
        type: "DORAGitInfo",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    services: {
        baseName: "services",
        type: "Array<string>",
    },
    severity: {
        baseName: "severity",
        type: "string",
    },
    startedAt: {
        baseName: "started_at",
        type: "number",
        required: true,
        format: "int64",
    },
    team: {
        baseName: "team",
        type: "string",
    },
    version: {
        baseName: "version",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DORAFailureRequestAttributes.js.map