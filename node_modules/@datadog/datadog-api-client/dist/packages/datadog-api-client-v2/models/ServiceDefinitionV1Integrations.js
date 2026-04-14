"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV1Integrations = void 0;
/**
 * Third party integrations that Datadog supports.
 */
class ServiceDefinitionV1Integrations {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV1Integrations.attributeTypeMap;
    }
}
exports.ServiceDefinitionV1Integrations = ServiceDefinitionV1Integrations;
/**
 * @ignore
 */
ServiceDefinitionV1Integrations.attributeTypeMap = {
    pagerduty: {
        baseName: "pagerduty",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionV1Integrations.js.map