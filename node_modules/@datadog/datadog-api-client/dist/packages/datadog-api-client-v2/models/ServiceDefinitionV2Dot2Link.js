"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV2Dot2Link = void 0;
/**
 * Service's external links.
 */
class ServiceDefinitionV2Dot2Link {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV2Dot2Link.attributeTypeMap;
    }
}
exports.ServiceDefinitionV2Dot2Link = ServiceDefinitionV2Dot2Link;
/**
 * @ignore
 */
ServiceDefinitionV2Dot2Link.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    provider: {
        baseName: "provider",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
        required: true,
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
//# sourceMappingURL=ServiceDefinitionV2Dot2Link.js.map