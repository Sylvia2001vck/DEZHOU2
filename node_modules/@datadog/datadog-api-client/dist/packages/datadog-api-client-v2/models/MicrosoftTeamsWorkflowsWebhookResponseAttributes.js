"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftTeamsWorkflowsWebhookResponseAttributes = void 0;
/**
 * Workflows Webhook handle attributes.
 */
class MicrosoftTeamsWorkflowsWebhookResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MicrosoftTeamsWorkflowsWebhookResponseAttributes.attributeTypeMap;
    }
}
exports.MicrosoftTeamsWorkflowsWebhookResponseAttributes = MicrosoftTeamsWorkflowsWebhookResponseAttributes;
/**
 * @ignore
 */
MicrosoftTeamsWorkflowsWebhookResponseAttributes.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MicrosoftTeamsWorkflowsWebhookResponseAttributes.js.map