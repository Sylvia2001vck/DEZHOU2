"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftTeamsWorkflowsWebhookHandleResponse = void 0;
/**
 * Response of a Workflows webhook handle.
 */
class MicrosoftTeamsWorkflowsWebhookHandleResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MicrosoftTeamsWorkflowsWebhookHandleResponse.attributeTypeMap;
    }
}
exports.MicrosoftTeamsWorkflowsWebhookHandleResponse = MicrosoftTeamsWorkflowsWebhookHandleResponse;
/**
 * @ignore
 */
MicrosoftTeamsWorkflowsWebhookHandleResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MicrosoftTeamsWorkflowsWebhookHandleResponseData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MicrosoftTeamsWorkflowsWebhookHandleResponse.js.map