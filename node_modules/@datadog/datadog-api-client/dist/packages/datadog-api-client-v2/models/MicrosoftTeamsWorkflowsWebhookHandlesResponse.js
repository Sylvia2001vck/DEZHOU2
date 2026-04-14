"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftTeamsWorkflowsWebhookHandlesResponse = void 0;
/**
 * Response with a list of Workflows webhook handles.
 */
class MicrosoftTeamsWorkflowsWebhookHandlesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MicrosoftTeamsWorkflowsWebhookHandlesResponse.attributeTypeMap;
    }
}
exports.MicrosoftTeamsWorkflowsWebhookHandlesResponse = MicrosoftTeamsWorkflowsWebhookHandlesResponse;
/**
 * @ignore
 */
MicrosoftTeamsWorkflowsWebhookHandlesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<MicrosoftTeamsWorkflowsWebhookHandleResponseData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MicrosoftTeamsWorkflowsWebhookHandlesResponse.js.map