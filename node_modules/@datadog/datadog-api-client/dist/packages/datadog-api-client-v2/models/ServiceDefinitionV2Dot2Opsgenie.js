"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV2Dot2Opsgenie = void 0;
/**
 * Opsgenie integration for the service.
 */
class ServiceDefinitionV2Dot2Opsgenie {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV2Dot2Opsgenie.attributeTypeMap;
    }
}
exports.ServiceDefinitionV2Dot2Opsgenie = ServiceDefinitionV2Dot2Opsgenie;
/**
 * @ignore
 */
ServiceDefinitionV2Dot2Opsgenie.attributeTypeMap = {
    region: {
        baseName: "region",
        type: "ServiceDefinitionV2Dot2OpsgenieRegion",
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
//# sourceMappingURL=ServiceDefinitionV2Dot2Opsgenie.js.map