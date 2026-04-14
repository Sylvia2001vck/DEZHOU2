"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORADeploymentRequestAttributes = void 0;
/**
 * Attributes to create a DORA deployment event.
 */
class DORADeploymentRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORADeploymentRequestAttributes.attributeTypeMap;
    }
}
exports.DORADeploymentRequestAttributes = DORADeploymentRequestAttributes;
/**
 * @ignore
 */
DORADeploymentRequestAttributes.attributeTypeMap = {
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
        required: true,
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
    service: {
        baseName: "service",
        type: "string",
        required: true,
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
//# sourceMappingURL=DORADeploymentRequestAttributes.js.map