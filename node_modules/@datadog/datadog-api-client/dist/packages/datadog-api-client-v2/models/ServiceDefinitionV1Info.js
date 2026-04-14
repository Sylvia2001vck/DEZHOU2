"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV1Info = void 0;
/**
 * Basic information about a service.
 */
class ServiceDefinitionV1Info {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV1Info.attributeTypeMap;
    }
}
exports.ServiceDefinitionV1Info = ServiceDefinitionV1Info;
/**
 * @ignore
 */
ServiceDefinitionV1Info.attributeTypeMap = {
    ddService: {
        baseName: "dd-service",
        type: "string",
        required: true,
    },
    description: {
        baseName: "description",
        type: "string",
    },
    displayName: {
        baseName: "display-name",
        type: "string",
    },
    serviceTier: {
        baseName: "service-tier",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionV1Info.js.map