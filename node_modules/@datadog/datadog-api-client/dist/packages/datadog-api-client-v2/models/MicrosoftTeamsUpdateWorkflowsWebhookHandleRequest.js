"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest = void 0;
/**
 * Update Workflows webhook handle request.
 */
class MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest.attributeTypeMap;
    }
}
exports.MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest = MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest;
/**
 * @ignore
 */
MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest.js.map