"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTenancyConfigDataAttributes = void 0;
class CreateTenancyConfigDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateTenancyConfigDataAttributes.attributeTypeMap;
    }
}
exports.CreateTenancyConfigDataAttributes = CreateTenancyConfigDataAttributes;
/**
 * @ignore
 */
CreateTenancyConfigDataAttributes.attributeTypeMap = {
    authCredentials: {
        baseName: "auth_credentials",
        type: "CreateTenancyConfigDataAttributesAuthCredentials",
        required: true,
    },
    configVersion: {
        baseName: "config_version",
        type: "number",
        format: "int64",
    },
    costCollectionEnabled: {
        baseName: "cost_collection_enabled",
        type: "boolean",
    },
    ddCompartmentId: {
        baseName: "dd_compartment_id",
        type: "string",
    },
    ddStackId: {
        baseName: "dd_stack_id",
        type: "string",
    },
    homeRegion: {
        baseName: "home_region",
        type: "string",
        required: true,
    },
    logsConfig: {
        baseName: "logs_config",
        type: "CreateTenancyConfigDataAttributesLogsConfig",
    },
    metricsConfig: {
        baseName: "metrics_config",
        type: "CreateTenancyConfigDataAttributesMetricsConfig",
    },
    regionsConfig: {
        baseName: "regions_config",
        type: "CreateTenancyConfigDataAttributesRegionsConfig",
    },
    resourceCollectionEnabled: {
        baseName: "resource_collection_enabled",
        type: "boolean",
    },
    userOcid: {
        baseName: "user_ocid",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateTenancyConfigDataAttributes.js.map