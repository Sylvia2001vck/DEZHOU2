"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftTeamsCreateWorkflowsWebhookHandleRequest = void 0;
/**
 * Create Workflows webhook handle request.
 */
class MicrosoftTeamsCreateWorkflowsWebhookHandleRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MicrosoftTeamsCreateWorkflowsWebhookHandleRequest.attributeTypeMap;
    }
}
exports.MicrosoftTeamsCreateWorkflowsWebhookHandleRequest = MicrosoftTeamsCreateWorkflowsWebhookHandleRequest;
/**
 * @ignore
 */
MicrosoftTeamsCreateWorkflowsWebhookHandleRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MicrosoftTeamsWorkflowsWebhookHandleRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MicrosoftTeamsCreateWorkflowsWebhookHandleRequest.js.map