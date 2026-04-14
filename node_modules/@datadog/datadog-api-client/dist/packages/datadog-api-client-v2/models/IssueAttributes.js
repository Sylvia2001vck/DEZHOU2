"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueAttributes = void 0;
/**
 * Object containing the information of an issue.
 */
class IssueAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssueAttributes.attributeTypeMap;
    }
}
exports.IssueAttributes = IssueAttributes;
/**
 * @ignore
 */
IssueAttributes.attributeTypeMap = {
    errorMessage: {
        baseName: "error_message",
        type: "string",
    },
    errorType: {
        baseName: "error_type",
        type: "string",
    },
    filePath: {
        baseName: "file_path",
        type: "string",
    },
    firstSeen: {
        baseName: "first_seen",
        type: "number",
        format: "int64",
    },
    firstSeenVersion: {
        baseName: "first_seen_version",
        type: "string",
    },
    functionName: {
        baseName: "function_name",
        type: "string",
    },
    isCrash: {
        baseName: "is_crash",
        type: "boolean",
    },
    languages: {
        baseName: "languages",
        type: "Array<IssueLanguage>",
    },
    lastSeen: {
        baseName: "last_seen",
        type: "number",
        format: "int64",
    },
    lastSeenVersion: {
        baseName: "last_seen_version",
        type: "string",
    },
    platform: {
        baseName: "platform",
        type: "IssuePlatform",
    },
    service: {
        baseName: "service",
        type: "string",
    },
    state: {
        baseName: "state",
        type: "IssueState",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssueAttributes.js.map