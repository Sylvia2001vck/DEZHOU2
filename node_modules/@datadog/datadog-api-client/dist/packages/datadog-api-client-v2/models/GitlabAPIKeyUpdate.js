"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitlabAPIKeyUpdate = void 0;
/**
 * The definition of the `GitlabAPIKey` object.
 */
class GitlabAPIKeyUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GitlabAPIKeyUpdate.attributeTypeMap;
    }
}
exports.GitlabAPIKeyUpdate = GitlabAPIKeyUpdate;
/**
 * @ignore
 */
GitlabAPIKeyUpdate.attributeTypeMap = {
    apiToken: {
        baseName: "api_token",
        type: "string",
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
//# sourceMappingURL=GitlabAPIKeyUpdate.js.map