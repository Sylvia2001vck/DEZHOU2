"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartialAPIKeyAttributes = void 0;
/**
 * Attributes of a partial API key.
 */
class PartialAPIKeyAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PartialAPIKeyAttributes.attributeTypeMap;
    }
}
exports.PartialAPIKeyAttributes = PartialAPIKeyAttributes;
/**
 * @ignore
 */
PartialAPIKeyAttributes.attributeTypeMap = {
    category: {
        baseName: "category",
        type: "string",
    },
    createdAt: {
        baseName: "created_at",
        type: "string",
    },
    dateLastUsed: {
        baseName: "date_last_used",
        type: "Date",
        format: "date-time",
    },
    last4: {
        baseName: "last4",
        type: "string",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "string",
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
//# sourceMappingURL=PartialAPIKeyAttributes.js.map