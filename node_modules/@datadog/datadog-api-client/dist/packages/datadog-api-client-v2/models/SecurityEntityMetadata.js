"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityEntityMetadata = void 0;
/**
 * Metadata about the entity from cloud providers
 */
class SecurityEntityMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityEntityMetadata.attributeTypeMap;
    }
}
exports.SecurityEntityMetadata = SecurityEntityMetadata;
/**
 * @ignore
 */
SecurityEntityMetadata.attributeTypeMap = {
    accountId: {
        baseName: "accountID",
        type: "string",
    },
    environments: {
        baseName: "environments",
        type: "Array<string>",
        required: true,
    },
    mitreTactics: {
        baseName: "mitreTactics",
        type: "Array<string>",
        required: true,
    },
    mitreTechniques: {
        baseName: "mitreTechniques",
        type: "Array<string>",
        required: true,
    },
    projectId: {
        baseName: "projectID",
        type: "string",
    },
    services: {
        baseName: "services",
        type: "Array<string>",
        required: true,
    },
    sources: {
        baseName: "sources",
        type: "Array<string>",
        required: true,
    },
    subscriptionId: {
        baseName: "subscriptionID",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityEntityMetadata.js.map