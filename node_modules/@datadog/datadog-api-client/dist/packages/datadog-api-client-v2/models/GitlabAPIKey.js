"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitlabAPIKey = void 0;
/**
 * The definition of the `GitlabAPIKey` object.
 */
class GitlabAPIKey {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GitlabAPIKey.attributeTypeMap;
    }
}
exports.GitlabAPIKey = GitlabAPIKey;
/**
 * @ignore
 */
GitlabAPIKey.attributeTypeMap = {
    apiToken: {
        baseName: "api_token",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "GitlabAPIKeyType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GitlabAPIKey.js.map