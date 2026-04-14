"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OktaAccountAttributes = void 0;
/**
 * Attributes object for an Okta account.
 */
class OktaAccountAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OktaAccountAttributes.attributeTypeMap;
    }
}
exports.OktaAccountAttributes = OktaAccountAttributes;
/**
 * @ignore
 */
OktaAccountAttributes.attributeTypeMap = {
    apiKey: {
        baseName: "api_key",
        type: "string",
    },
    authMethod: {
        baseName: "auth_method",
        type: "string",
        required: true,
    },
    clientId: {
        baseName: "client_id",
        type: "string",
    },
    clientSecret: {
        baseName: "client_secret",
        type: "string",
    },
    domain: {
        baseName: "domain",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OktaAccountAttributes.js.map