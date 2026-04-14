"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPAllowlistEntryAttributes = void 0;
/**
 * Attributes of the IP allowlist entry.
 */
class IPAllowlistEntryAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IPAllowlistEntryAttributes.attributeTypeMap;
    }
}
exports.IPAllowlistEntryAttributes = IPAllowlistEntryAttributes;
/**
 * @ignore
 */
IPAllowlistEntryAttributes.attributeTypeMap = {
    cidrBlock: {
        baseName: "cidr_block",
        type: "string",
    },
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    note: {
        baseName: "note",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IPAllowlistEntryAttributes.js.map