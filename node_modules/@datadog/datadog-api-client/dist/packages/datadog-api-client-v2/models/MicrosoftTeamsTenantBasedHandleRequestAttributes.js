"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftTeamsTenantBasedHandleRequestAttributes = void 0;
/**
 * Tenant-based handle attributes.
 */
class MicrosoftTeamsTenantBasedHandleRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MicrosoftTeamsTenantBasedHandleRequestAttributes.attributeTypeMap;
    }
}
exports.MicrosoftTeamsTenantBasedHandleRequestAttributes = MicrosoftTeamsTenantBasedHandleRequestAttributes;
/**
 * @ignore
 */
MicrosoftTeamsTenantBasedHandleRequestAttributes.attributeTypeMap = {
    channelId: {
        baseName: "channel_id",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    teamId: {
        baseName: "team_id",
        type: "string",
        required: true,
    },
    tenantId: {
        baseName: "tenant_id",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MicrosoftTeamsTenantBasedHandleRequestAttributes.js.map