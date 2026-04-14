"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineDatadogLogsDestinationRoute = void 0;
/**
 * Defines how the `datadog_logs` destination routes matching logs to a Datadog site using a specific API key.
 */
class ObservabilityPipelineDatadogLogsDestinationRoute {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineDatadogLogsDestinationRoute.attributeTypeMap;
    }
}
exports.ObservabilityPipelineDatadogLogsDestinationRoute = ObservabilityPipelineDatadogLogsDestinationRoute;
/**
 * @ignore
 */
ObservabilityPipelineDatadogLogsDestinationRoute.attributeTypeMap = {
    apiKeyKey: {
        baseName: "api_key_key",
        type: "string",
    },
    include: {
        baseName: "include",
        type: "string",
    },
    routeId: {
        baseName: "route_id",
        type: "string",
    },
    site: {
        baseName: "site",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineDatadogLogsDestinationRoute.js.map