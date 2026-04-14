"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitlabIntegration = void 0;
/**
 * The definition of the `GitlabIntegration` object.
 */
class GitlabIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GitlabIntegration.attributeTypeMap;
    }
}
exports.GitlabIntegration = GitlabIntegration;
/**
 * @ignore
 */
GitlabIntegration.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "GitlabCredentials",
        required: true,
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
//# sourceMappingURL=GitlabIntegration.js.map