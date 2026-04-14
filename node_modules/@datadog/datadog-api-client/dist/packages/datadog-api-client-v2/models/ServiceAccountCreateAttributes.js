"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceAccountCreateAttributes = void 0;
/**
 * Attributes of the created user.
 */
class ServiceAccountCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceAccountCreateAttributes.attributeTypeMap;
    }
}
exports.ServiceAccountCreateAttributes = ServiceAccountCreateAttributes;
/**
 * @ignore
 */
ServiceAccountCreateAttributes.attributeTypeMap = {
    email: {
        baseName: "email",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
    },
    serviceAccount: {
        baseName: "service_account",
        type: "boolean",
        required: true,
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
//# sourceMappingURL=ServiceAccountCreateAttributes.js.map