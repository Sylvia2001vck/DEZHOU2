"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamConnectionAttributes = void 0;
/**
 * Attributes of the team connection.
 */
class TeamConnectionAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamConnectionAttributes.attributeTypeMap;
    }
}
exports.TeamConnectionAttributes = TeamConnectionAttributes;
/**
 * @ignore
 */
TeamConnectionAttributes.attributeTypeMap = {
    managedBy: {
        baseName: "managed_by",
        type: "string",
    },
    source: {
        baseName: "source",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamConnectionAttributes.js.map