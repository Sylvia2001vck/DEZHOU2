"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentImpactAttributes = void 0;
/**
 * The incident impact's attributes.
 */
class IncidentImpactAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentImpactAttributes.attributeTypeMap;
    }
}
exports.IncidentImpactAttributes = IncidentImpactAttributes;
/**
 * @ignore
 */
IncidentImpactAttributes.attributeTypeMap = {
    created: {
        baseName: "created",
        type: "Date",
        format: "date-time",
    },
    description: {
        baseName: "description",
        type: "string",
        required: true,
    },
    endAt: {
        baseName: "end_at",
        type: "Date",
        format: "date-time",
    },
    fields: {
        baseName: "fields",
        type: "{ [key: string]: any; }",
    },
    impactType: {
        baseName: "impact_type",
        type: "string",
    },
    modified: {
        baseName: "modified",
        type: "Date",
        format: "date-time",
    },
    startAt: {
        baseName: "start_at",
        type: "Date",
        required: true,
        format: "date-time",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentImpactAttributes.js.map