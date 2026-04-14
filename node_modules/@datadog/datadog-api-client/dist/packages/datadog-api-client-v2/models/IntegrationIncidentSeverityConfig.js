"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationIncidentSeverityConfig = void 0;
class IntegrationIncidentSeverityConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IntegrationIncidentSeverityConfig.attributeTypeMap;
    }
}
exports.IntegrationIncidentSeverityConfig = IntegrationIncidentSeverityConfig;
/**
 * @ignore
 */
IntegrationIncidentSeverityConfig.attributeTypeMap = {
    priorityMapping: {
        baseName: "priority_mapping",
        type: "{ [key: string]: string; }",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IntegrationIncidentSeverityConfig.js.map