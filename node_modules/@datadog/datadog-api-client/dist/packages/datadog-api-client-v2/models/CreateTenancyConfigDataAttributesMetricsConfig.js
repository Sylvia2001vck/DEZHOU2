"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTenancyConfigDataAttributesMetricsConfig = void 0;
class CreateTenancyConfigDataAttributesMetricsConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateTenancyConfigDataAttributesMetricsConfig.attributeTypeMap;
    }
}
exports.CreateTenancyConfigDataAttributesMetricsConfig = CreateTenancyConfigDataAttributesMetricsConfig;
/**
 * @ignore
 */
CreateTenancyConfigDataAttributesMetricsConfig.attributeTypeMap = {
    compartmentTagFilters: {
        baseName: "compartment_tag_filters",
        type: "Array<string>",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    excludedServices: {
        baseName: "excluded_services",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateTenancyConfigDataAttributesMetricsConfig.js.map