"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitlabIntegrationUpdate = void 0;
/**
 * The definition of the `GitlabIntegrationUpdate` object.
 */
class GitlabIntegrationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GitlabIntegrationUpdate.attributeTypeMap;
    }
}
exports.GitlabIntegrationUpdate = GitlabIntegrationUpdate;
/**
 * @ignore
 */
GitlabIntegrationUpdate.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "GitlabCredentialsUpdate",
    },
    type: {
        baseName: "type",
        type: "GitlabIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GitlabIntegrationUpdate.js.map