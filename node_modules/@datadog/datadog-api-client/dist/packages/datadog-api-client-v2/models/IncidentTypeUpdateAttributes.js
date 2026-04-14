"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTypeUpdateAttributes = void 0;
/**
 * Incident type's attributes for updates.
 */
class IncidentTypeUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTypeUpdateAttributes.attributeTypeMap;
    }
}
exports.IncidentTypeUpdateAttributes = IncidentTypeUpdateAttributes;
/**
 * @ignore
 */
IncidentTypeUpdateAttributes.attributeTypeMap = {
    createdAt: {
        baseName: "createdAt",
        type: "Date",
        format: "date-time",
    },
    createdBy: {
        baseName: "createdBy",
        type: "string",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    isDefault: {
        baseName: "is_default",
        type: "boolean",
    },
    lastModifiedBy: {
        baseName: "lastModifiedBy",
        type: "string",
    },
    modifiedAt: {
        baseName: "modifiedAt",
        type: "Date",
        format: "date-time",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    prefix: {
        baseName: "prefix",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTypeUpdateAttributes.js.map