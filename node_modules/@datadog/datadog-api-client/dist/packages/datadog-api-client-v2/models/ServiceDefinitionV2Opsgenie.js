"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV2Opsgenie = void 0;
/**
 * Opsgenie integration for the service.
 */
class ServiceDefinitionV2Opsgenie {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV2Opsgenie.attributeTypeMap;
    }
}
exports.ServiceDefinitionV2Opsgenie = ServiceDefinitionV2Opsgenie;
/**
 * @ignore
 */
ServiceDefinitionV2Opsgenie.attributeTypeMap = {
    region: {
        baseName: "region",
        type: "ServiceDefinitionV2OpsgenieRegion",
    },
    serviceUrl: {
        baseName: "service-url",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionV2Opsgenie.js.map