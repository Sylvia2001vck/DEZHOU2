"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamHierarchyLinkAttributes = void 0;
/**
 * Team hierarchy link attributes
 */
class TeamHierarchyLinkAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamHierarchyLinkAttributes.attributeTypeMap;
    }
}
exports.TeamHierarchyLinkAttributes = TeamHierarchyLinkAttributes;
/**
 * @ignore
 */
TeamHierarchyLinkAttributes.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "Date",
        required: true,
        format: "date-time",
    },
    provisionedBy: {
        baseName: "provisioned_by",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamHierarchyLinkAttributes.js.map