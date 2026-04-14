"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORADeploymentObjectAttributes = void 0;
/**
 * The attributes of the deployment event.
 */
class DORADeploymentObjectAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORADeploymentObjectAttributes.attributeTypeMap;
    }
}
exports.DORADeploymentObjectAttributes = DORADeploymentObjectAttributes;
/**
 * @ignore
 */
DORADeploymentObjectAttributes.attributeTypeMap = {
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
//# sourceMappingURL=DORADeploymentObjectAttributes.js.map