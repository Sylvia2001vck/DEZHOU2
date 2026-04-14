"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTenancyConfigDataAttributesRegionsConfig = void 0;
class CreateTenancyConfigDataAttributesRegionsConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateTenancyConfigDataAttributesRegionsConfig.attributeTypeMap;
    }
}
exports.CreateTenancyConfigDataAttributesRegionsConfig = CreateTenancyConfigDataAttributesRegionsConfig;
/**
 * @ignore
 */
CreateTenancyConfigDataAttributesRegionsConfig.attributeTypeMap = {
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
//# sourceMappingURL=CreateTenancyConfigDataAttributesRegionsConfig.js.map