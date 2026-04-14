"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullAPIKeyAttributes = void 0;
/**
 * Attributes of a full API key.
 */
class FullAPIKeyAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FullAPIKeyAttributes.attributeTypeMap;
    }
}
exports.FullAPIKeyAttributes = FullAPIKeyAttributes;
/**
 * @ignore
 */
FullAPIKeyAttributes.attributeTypeMap = {
    category: {
        baseName: "category",
        type: "string",
    },
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    dateLastUsed: {
        baseName: "date_last_used",
        type: "Date",
        format: "date-time",
    },
    key: {
        baseName: "key",
        type: "string",
    },
    last4: {
        baseName: "last4",
        type: "string",
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
    remoteConfigReadEnabled: {
        baseName: "remote_config_read_enabled",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FullAPIKeyAttributes.js.map