"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionMetaWarnings = void 0;
/**
 * Schema validation warnings.
 */
class ServiceDefinitionMetaWarnings {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionMetaWarnings.attributeTypeMap;
    }
}
exports.ServiceDefinitionMetaWarnings = ServiceDefinitionMetaWarnings;
/**
 * @ignore
 */
ServiceDefinitionMetaWarnings.attributeTypeMap = {
    instanceLocation: {
        baseName: "instance-location",
        type: "string",
    },
    keywordLocation: {
        baseName: "keyword-location",
        type: "string",
    },
    message: {
        baseName: "message",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionMetaWarnings.js.map