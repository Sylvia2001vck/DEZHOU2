"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MSTeamsIntegrationMetadataTeamsItem = void 0;
/**
 * Item in the Microsoft Teams integration metadata teams array.
 */
class MSTeamsIntegrationMetadataTeamsItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MSTeamsIntegrationMetadataTeamsItem.attributeTypeMap;
    }
}
exports.MSTeamsIntegrationMetadataTeamsItem = MSTeamsIntegrationMetadataTeamsItem;
/**
 * @ignore
 */
MSTeamsIntegrationMetadataTeamsItem.attributeTypeMap = {
    msChannelId: {
        baseName: "ms_channel_id",
        type: "string",
        required: true,
    },
    msChannelName: {
        baseName: "ms_channel_name",
        type: "string",
        required: true,
    },
    msTenantId: {
        baseName: "ms_tenant_id",
        type: "string",
        required: true,
    },
    redirectUrl: {
        baseName: "redirect_url",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MSTeamsIntegrationMetadataTeamsItem.js.map