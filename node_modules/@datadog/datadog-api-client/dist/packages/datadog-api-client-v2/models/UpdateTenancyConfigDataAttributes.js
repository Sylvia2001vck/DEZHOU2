"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTenancyConfigDataAttributes = void 0;
class UpdateTenancyConfigDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateTenancyConfigDataAttributes.attributeTypeMap;
    }
}
exports.UpdateTenancyConfigDataAttributes = UpdateTenancyConfigDataAttributes;
/**
 * @ignore
 */
UpdateTenancyConfigDataAttributes.attributeTypeMap = {
    authCredentials: {
        baseName: "auth_credentials",
        type: "UpdateTenancyConfigDataAttributesAuthCredentials",
    },
    costCollectionEnabled: {
        baseName: "cost_collection_enabled",
        type: "boolean",
    },
    homeRegion: {
        baseName: "home_region",
        type: "string",
    },
    logsConfig: {
        baseName: "logs_config",
        type: "UpdateTenancyConfigDataAttributesLogsConfig",
    },
    metricsConfig: {
        baseName: "metrics_config",
        type: "UpdateTenancyConfigDataAttributesMetricsConfig",
    },
    regionsConfig: {
        baseName: "regions_config",
        type: "UpdateTenancyConfigDataAttributesRegionsConfig",
    },
    resourceCollectionEnabled: {
        baseName: "resource_collection_enabled",
        type: "boolean",
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
//# sourceMappingURL=UpdateTenancyConfigDataAttributes.js.map