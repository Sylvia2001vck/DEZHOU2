"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseIncludedRelatedIncidentAttributes = void 0;
/**
 * Incident attributes.
 */
class EntityResponseIncludedRelatedIncidentAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseIncludedRelatedIncidentAttributes.attributeTypeMap;
    }
}
exports.EntityResponseIncludedRelatedIncidentAttributes = EntityResponseIncludedRelatedIncidentAttributes;
/**
 * @ignore
 */
EntityResponseIncludedRelatedIncidentAttributes.attributeTypeMap = {
    createdAt: {
        baseName: "createdAt",
        type: "Date",
        format: "date-time",
    },
    htmlUrl: {
        baseName: "htmlURL",
        type: "string",
    },
    provider: {
        baseName: "provider",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "string",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityResponseIncludedRelatedIncidentAttributes.js.map