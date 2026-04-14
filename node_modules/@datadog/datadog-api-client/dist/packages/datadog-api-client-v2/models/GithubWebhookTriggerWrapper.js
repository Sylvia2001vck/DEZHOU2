"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubWebhookTriggerWrapper = void 0;
/**
 * Schema for a GitHub webhook-based trigger.
 */
class GithubWebhookTriggerWrapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GithubWebhookTriggerWrapper.attributeTypeMap;
    }
}
exports.GithubWebhookTriggerWrapper = GithubWebhookTriggerWrapper;
/**
 * @ignore
 */
GithubWebhookTriggerWrapper.attributeTypeMap = {
    githubWebhookTrigger: {
        baseName: "githubWebhookTrigger",
        type: "GithubWebhookTrigger",
        required: true,
    },
    startStepNames: {
        baseName: "startStepNames",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GithubWebhookTriggerWrapper.js.map