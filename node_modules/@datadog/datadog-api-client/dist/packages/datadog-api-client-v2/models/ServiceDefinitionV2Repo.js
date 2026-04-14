"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV2Repo = void 0;
/**
 * Service code repositories.
 */
class ServiceDefinitionV2Repo {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV2Repo.attributeTypeMap;
    }
}
exports.ServiceDefinitionV2Repo = ServiceDefinitionV2Repo;
/**
 * @ignore
 */
ServiceDefinitionV2Repo.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    provider: {
        baseName: "provider",
        type: "string",
    },
    url: {
        baseName: "url",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionV2Repo.js.map