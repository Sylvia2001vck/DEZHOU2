"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTenancyConfigDataAttributesRegionsConfig = void 0;
class UpdateTenancyConfigDataAttributesRegionsConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateTenancyConfigDataAttributesRegionsConfig.attributeTypeMap;
    }
}
exports.UpdateTenancyConfigDataAttributesRegionsConfig = UpdateTenancyConfigDataAttributesRegionsConfig;
/**
 * @ignore
 */
UpdateTenancyConfigDataAttributesRegionsConfig.attributeTypeMap = {
    available: {
        baseName: "available",
        type: "Array<string>",
    },
    disabled: {
        baseName: "disabled",
        type: "Array<string>",
    },
    enabled: {
        baseName: "enabled",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateTenancyConfigDataAttributesRegionsConfig.js.map