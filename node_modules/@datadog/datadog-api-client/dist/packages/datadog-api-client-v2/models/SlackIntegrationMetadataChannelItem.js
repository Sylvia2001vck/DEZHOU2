"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackIntegrationMetadataChannelItem = void 0;
/**
 * Item in the Slack integration metadata channel array.
 */
class SlackIntegrationMetadataChannelItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SlackIntegrationMetadataChannelItem.attributeTypeMap;
    }
}
exports.SlackIntegrationMetadataChannelItem = SlackIntegrationMetadataChannelItem;
/**
 * @ignore
 */
SlackIntegrationMetadataChannelItem.attributeTypeMap = {
    channelId: {
        baseName: "channel_id",
        type: "string",
        required: true,
    },
    channelName: {
        baseName: "channel_name",
        type: "string",
        required: true,
    },
    redirectUrl: {
        baseName: "redirect_url",
        type: "string",
        required: true,
    },
    teamId: {
        baseName: "team_id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SlackIntegrationMetadataChannelItem.js.map