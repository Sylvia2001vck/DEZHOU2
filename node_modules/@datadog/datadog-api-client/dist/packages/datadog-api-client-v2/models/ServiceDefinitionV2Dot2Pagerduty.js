"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV2Dot2Pagerduty = void 0;
/**
 * PagerDuty integration for the service.
 */
class ServiceDefinitionV2Dot2Pagerduty {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV2Dot2Pagerduty.attributeTypeMap;
    }
}
exports.ServiceDefinitionV2Dot2Pagerduty = ServiceDefinitionV2Dot2Pagerduty;
/**
 * @ignore
 */
ServiceDefinitionV2Dot2Pagerduty.attributeTypeMap = {
    serviceUrl: {
        baseName: "service-url",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionV2Dot2Pagerduty.js.map