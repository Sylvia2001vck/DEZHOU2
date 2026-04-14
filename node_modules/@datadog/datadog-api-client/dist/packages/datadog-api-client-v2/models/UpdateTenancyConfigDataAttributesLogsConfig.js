"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTenancyConfigDataAttributesLogsConfig = void 0;
class UpdateTenancyConfigDataAttributesLogsConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateTenancyConfigDataAttributesLogsConfig.attributeTypeMap;
    }
}
exports.UpdateTenancyConfigDataAttributesLogsConfig = UpdateTenancyConfigDataAttributesLogsConfig;
/**
 * @ignore
 */
UpdateTenancyConfigDataAttributesLogsConfig.attributeTypeMap = {
    compartmentTagFilters: {
        baseName: "compartment_tag_filters",
        type: "Array<string>",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    enabledServices: {
        baseName: "enabled_services",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateTenancyConfigDataAttributesLogsConfig.js.map