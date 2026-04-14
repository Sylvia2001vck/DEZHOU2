"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentImpactCreateAttributes = void 0;
/**
 * The incident impact's attributes for a create request.
 */
class IncidentImpactCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentImpactCreateAttributes.attributeTypeMap;
    }
}
exports.IncidentImpactCreateAttributes = IncidentImpactCreateAttributes;
/**
 * @ignore
 */
IncidentImpactCreateAttributes.attributeTypeMap = {
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
//# sourceMappingURL=IncidentImpactCreateAttributes.js.map