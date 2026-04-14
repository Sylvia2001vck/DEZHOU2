"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamRelationshipsLinks = void 0;
/**
 * Links attributes.
 */
class TeamRelationshipsLinks {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamRelationshipsLinks.attributeTypeMap;
    }
}
exports.TeamRelationshipsLinks = TeamRelationshipsLinks;
/**
 * @ignore
 */
TeamRelationshipsLinks.attributeTypeMap = {
    related: {
        baseName: "related",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamRelationshipsLinks.js.map