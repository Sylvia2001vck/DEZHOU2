"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamLinkAttributes = void 0;
/**
 * Team link attributes
 */
class TeamLinkAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamLinkAttributes.attributeTypeMap;
    }
}
exports.TeamLinkAttributes = TeamLinkAttributes;
/**
 * @ignore
 */
TeamLinkAttributes.attributeTypeMap = {
    label: {
        baseName: "label",
        type: "string",
        required: true,
    },
    position: {
        baseName: "position",
        type: "number",
        format: "int32",
    },
    teamId: {
        baseName: "team_id",
        type: "string",
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
//# sourceMappingURL=TeamLinkAttributes.js.map