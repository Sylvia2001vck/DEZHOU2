"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV2Dot1Integrations = void 0;
/**
 * Third party integrations that Datadog supports.
 */
class ServiceDefinitionV2Dot1Integrations {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV2Dot1Integrations.attributeTypeMap;
    }
}
exports.ServiceDefinitionV2Dot1Integrations = ServiceDefinitionV2Dot1Integrations;
/**
 * @ignore
 */
ServiceDefinitionV2Dot1Integrations.attributeTypeMap = {
    opsgenie: {
        baseName: "opsgenie",
        type: "ServiceDefinitionV2Dot1Opsgenie",
    },
    pagerduty: {
        baseName: "pagerduty",
        type: "ServiceDefinitionV2Dot1Pagerduty",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionV2Dot1Integrations.js.map