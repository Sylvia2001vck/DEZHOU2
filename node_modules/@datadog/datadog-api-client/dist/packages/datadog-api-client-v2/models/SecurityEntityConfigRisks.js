"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityEntityConfigRisks = void 0;
/**
 * Configuration risks associated with the entity
 */
class SecurityEntityConfigRisks {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityEntityConfigRisks.attributeTypeMap;
    }
}
exports.SecurityEntityConfigRisks = SecurityEntityConfigRisks;
/**
 * @ignore
 */
SecurityEntityConfigRisks.attributeTypeMap = {
    hasIdentityRisk: {
        baseName: "hasIdentityRisk",
        type: "boolean",
        required: true,
    },
    hasMisconfiguration: {
        baseName: "hasMisconfiguration",
        type: "boolean",
        required: true,
    },
    hasPrivilegedRole: {
        baseName: "hasPrivilegedRole",
        type: "boolean",
        required: true,
    },
    isPrivileged: {
        baseName: "isPrivileged",
        type: "boolean",
        required: true,
    },
    isProduction: {
        baseName: "isProduction",
        type: "boolean",
        required: true,
    },
    isPubliclyAccessible: {
        baseName: "isPubliclyAccessible",
        type: "boolean",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityEntityConfigRisks.js.map