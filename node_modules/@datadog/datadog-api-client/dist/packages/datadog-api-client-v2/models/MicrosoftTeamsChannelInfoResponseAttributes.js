"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftTeamsChannelInfoResponseAttributes = void 0;
/**
 * Channel attributes.
 */
class MicrosoftTeamsChannelInfoResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MicrosoftTeamsChannelInfoResponseAttributes.attributeTypeMap;
    }
}
exports.MicrosoftTeamsChannelInfoResponseAttributes = MicrosoftTeamsChannelInfoResponseAttributes;
/**
 * @ignore
 */
MicrosoftTeamsChannelInfoResponseAttributes.attributeTypeMap = {
    isPrimary: {
        baseName: "is_primary",
        type: "boolean",
    },
    teamId: {
        baseName: "team_id",
        type: "string",
    },
    tenantId: {
        baseName: "tenant_id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MicrosoftTeamsChannelInfoResponseAttributes.js.map