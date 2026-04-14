"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgConfigReadAttributes = void 0;
/**
 * Readable attributes of an Org Config.
 */
class OrgConfigReadAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgConfigReadAttributes.attributeTypeMap;
    }
}
exports.OrgConfigReadAttributes = OrgConfigReadAttributes;
/**
 * @ignore
 */
OrgConfigReadAttributes.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
        required: true,
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    value: {
        baseName: "value",
        type: "any",
        required: true,
    },
    valueType: {
        baseName: "value_type",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrgConfigReadAttributes.js.map