"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationAttributes = void 0;
/**
 * Attributes of the organization.
 */
class OrganizationAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrganizationAttributes.attributeTypeMap;
    }
}
exports.OrganizationAttributes = OrganizationAttributes;
/**
 * @ignore
 */
OrganizationAttributes.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    disabled: {
        baseName: "disabled",
        type: "boolean",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    publicId: {
        baseName: "public_id",
        type: "string",
    },
    sharing: {
        baseName: "sharing",
        type: "string",
    },
    url: {
        baseName: "url",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrganizationAttributes.js.map