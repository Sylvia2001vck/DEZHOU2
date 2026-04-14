"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData = void 0;
/**
 * Workflows Webhook handle data from a response.
 */
class MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData.attributeTypeMap;
    }
}
exports.MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData = MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData;
/**
 * @ignore
 */
MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MicrosoftTeamsWorkflowsWebhookHandleAttributes",
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
//# sourceMappingURL=MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData.js.map