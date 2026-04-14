"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubWebhookTrigger = void 0;
/**
 * Trigger a workflow from a GitHub webhook. To trigger a workflow from GitHub, you must set a `webhookSecret`. In your GitHub Webhook Settings, set the Payload URL to "base_url"/api/v2/workflows/"workflow_id"/webhook?orgId="org_id", select application/json for the content type, and be highly recommend enabling SSL verification for security. The workflow must be published.
 */
class GithubWebhookTrigger {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GithubWebhookTrigger.attributeTypeMap;
    }
}
exports.GithubWebhookTrigger = GithubWebhookTrigger;
/**
 * @ignore
 */
GithubWebhookTrigger.attributeTypeMap = {
    rateLimit: {
        baseName: "rateLimit",
        type: "TriggerRateLimit",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GithubWebhookTrigger.js.map