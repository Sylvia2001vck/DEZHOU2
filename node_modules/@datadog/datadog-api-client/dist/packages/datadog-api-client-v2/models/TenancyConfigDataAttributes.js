"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenancyConfigDataAttributes = void 0;
class TenancyConfigDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TenancyConfigDataAttributes.attributeTypeMap;
    }
}
exports.TenancyConfigDataAttributes = TenancyConfigDataAttributes;
/**
 * @ignore
 */
TenancyConfigDataAttributes.attributeTypeMap = {
    billingPlanId: {
        baseName: "billing_plan_id",
        type: "number",
        format: "int32",
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
    },
    logsConfig: {
        baseName: "logs_config",
        type: "TenancyConfigDataAttributesLogsConfig",
    },
    metricsConfig: {
        baseName: "metrics_config",
        type: "TenancyConfigDataAttributesMetricsConfig",
    },
    parentTenancyName: {
        baseName: "parent_tenancy_name",
        type: "string",
    },
    regionsConfig: {
        baseName: "regions_config",
        type: "TenancyConfigDataAttributesRegionsConfig",
    },
    resourceCollectionEnabled: {
        baseName: "resource_collection_enabled",
        type: "boolean",
    },
    tenancyName: {
        baseName: "tenancy_name",
        type: "string",
    },
    userOcid: {
        baseName: "user_ocid",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TenancyConfigDataAttributes.js.map