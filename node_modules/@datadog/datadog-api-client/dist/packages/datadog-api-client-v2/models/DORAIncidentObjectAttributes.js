"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORAIncidentObjectAttributes = void 0;
/**
 * The attributes of the incident event.
 */
class DORAIncidentObjectAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORAIncidentObjectAttributes.attributeTypeMap;
    }
}
exports.DORAIncidentObjectAttributes = DORAIncidentObjectAttributes;
/**
 * @ignore
 */
DORAIncidentObjectAttributes.attributeTypeMap = {
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
//# sourceMappingURL=DORAIncidentObjectAttributes.js.map