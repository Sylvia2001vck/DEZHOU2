"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftTeamsWorkflowsWebhookHandleResponseData = void 0;
/**
 * Workflows Webhook handle data from a response.
 */
class MicrosoftTeamsWorkflowsWebhookHandleResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MicrosoftTeamsWorkflowsWebhookHandleResponseData.attributeTypeMap;
    }
}
exports.MicrosoftTeamsWorkflowsWebhookHandleResponseData = MicrosoftTeamsWorkflowsWebhookHandleResponseData;
/**
 * @ignore
 */
MicrosoftTeamsWorkflowsWebhookHandleResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MicrosoftTeamsWorkflowsWebhookResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "MicrosoftTeamsWorkflowsWebhookHandleType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MicrosoftTeamsWorkflowsWebhookHandleResponseData.js.map