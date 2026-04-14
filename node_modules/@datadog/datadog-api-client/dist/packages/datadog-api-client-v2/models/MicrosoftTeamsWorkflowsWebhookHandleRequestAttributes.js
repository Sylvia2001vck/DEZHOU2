"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes = void 0;
/**
 * Workflows Webhook handle attributes.
 */
class MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes.attributeTypeMap;
    }
}
exports.MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes = MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes;
/**
 * @ignore
 */
MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    url: {
        baseName: "url",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes.js.map