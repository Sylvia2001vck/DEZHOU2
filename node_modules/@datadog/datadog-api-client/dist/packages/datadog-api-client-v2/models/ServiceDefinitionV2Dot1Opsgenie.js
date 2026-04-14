"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV2Dot1Opsgenie = void 0;
/**
 * Opsgenie integration for the service.
 */
class ServiceDefinitionV2Dot1Opsgenie {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV2Dot1Opsgenie.attributeTypeMap;
    }
}
exports.ServiceDefinitionV2Dot1Opsgenie = ServiceDefinitionV2Dot1Opsgenie;
/**
 * @ignore
 */
ServiceDefinitionV2Dot1Opsgenie.attributeTypeMap = {
    region: {
        baseName: "region",
        type: "ServiceDefinitionV2Dot1OpsgenieRegion",
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
//# sourceMappingURL=ServiceDefinitionV2Dot1Opsgenie.js.map