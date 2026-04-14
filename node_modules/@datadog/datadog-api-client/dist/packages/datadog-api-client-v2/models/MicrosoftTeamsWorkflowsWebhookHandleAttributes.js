"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftTeamsWorkflowsWebhookHandleAttributes = void 0;
/**
 * Workflows Webhook handle attributes.
 */
class MicrosoftTeamsWorkflowsWebhookHandleAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MicrosoftTeamsWorkflowsWebhookHandleAttributes.attributeTypeMap;
    }
}
exports.MicrosoftTeamsWorkflowsWebhookHandleAttributes = MicrosoftTeamsWorkflowsWebhookHandleAttributes;
/**
 * @ignore
 */
MicrosoftTeamsWorkflowsWebhookHandleAttributes.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
    },
    url: {
        baseName: "url",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MicrosoftTeamsWorkflowsWebhookHandleAttributes.js.map