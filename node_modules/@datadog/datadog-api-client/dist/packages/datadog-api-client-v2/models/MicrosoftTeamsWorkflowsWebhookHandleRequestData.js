"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftTeamsWorkflowsWebhookHandleRequestData = void 0;
/**
 * Workflows Webhook handle data from a response.
 */
class MicrosoftTeamsWorkflowsWebhookHandleRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MicrosoftTeamsWorkflowsWebhookHandleRequestData.attributeTypeMap;
    }
}
exports.MicrosoftTeamsWorkflowsWebhookHandleRequestData = MicrosoftTeamsWorkflowsWebhookHandleRequestData;
/**
 * @ignore
 */
MicrosoftTeamsWorkflowsWebhookHandleRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "MicrosoftTeamsWorkflowsWebhookHandleType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MicrosoftTeamsWorkflowsWebhookHandleRequestData.js.map