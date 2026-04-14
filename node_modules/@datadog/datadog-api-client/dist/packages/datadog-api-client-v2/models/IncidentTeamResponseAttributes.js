"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTeamResponseAttributes = void 0;
/**
 * The incident team's attributes from a response.
 */
class IncidentTeamResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTeamResponseAttributes.attributeTypeMap;
    }
}
exports.IncidentTeamResponseAttributes = IncidentTeamResponseAttributes;
/**
 * @ignore
 */
IncidentTeamResponseAttributes.attributeTypeMap = {
    created: {
        baseName: "created",
        type: "Date",
        format: "date-time",
    },
    modified: {
        baseName: "modified",
        type: "Date",
        format: "date-time",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTeamResponseAttributes.js.map