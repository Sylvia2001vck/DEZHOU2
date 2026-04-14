"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamHierarchyLinkTeamAttributes = void 0;
/**
 * Team hierarchy links connect different teams. This represents attributes from teams that are connected by the team hierarchy link.
 */
class TeamHierarchyLinkTeamAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamHierarchyLinkTeamAttributes.attributeTypeMap;
    }
}
exports.TeamHierarchyLinkTeamAttributes = TeamHierarchyLinkTeamAttributes;
/**
 * @ignore
 */
TeamHierarchyLinkTeamAttributes.attributeTypeMap = {
    avatar: {
        baseName: "avatar",
        type: "string",
    },
    banner: {
        baseName: "banner",
        type: "number",
        format: "int64",
    },
    handle: {
        baseName: "handle",
        type: "string",
        required: true,
    },
    isManaged: {
        baseName: "is_managed",
        type: "boolean",
    },
    isOpenMembership: {
        baseName: "is_open_membership",
        type: "boolean",
    },
    linkCount: {
        baseName: "link_count",
        type: "number",
        format: "int64",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    summary: {
        baseName: "summary",
        type: "string",
    },
    userCount: {
        baseName: "user_count",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamHierarchyLinkTeamAttributes.js.map