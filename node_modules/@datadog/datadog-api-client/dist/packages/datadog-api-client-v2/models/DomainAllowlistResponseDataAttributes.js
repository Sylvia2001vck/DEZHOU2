"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainAllowlistResponseDataAttributes = void 0;
/**
 * The details of the email domain allowlist.
 */
class DomainAllowlistResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DomainAllowlistResponseDataAttributes.attributeTypeMap;
    }
}
exports.DomainAllowlistResponseDataAttributes = DomainAllowlistResponseDataAttributes;
/**
 * @ignore
 */
DomainAllowlistResponseDataAttributes.attributeTypeMap = {
    domains: {
        baseName: "domains",
        type: "Array<string>",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DomainAllowlistResponseDataAttributes.js.map