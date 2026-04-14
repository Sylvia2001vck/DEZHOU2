"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV2Integrations = void 0;
/**
 * Third party integrations that Datadog supports.
 */
class ServiceDefinitionV2Integrations {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV2Integrations.attributeTypeMap;
    }
}
exports.ServiceDefinitionV2Integrations = ServiceDefinitionV2Integrations;
/**
 * @ignore
 */
ServiceDefinitionV2Integrations.attributeTypeMap = {
    opsgenie: {
        baseName: "opsgenie",
        type: "ServiceDefinitionV2Opsgenie",
    },
    pagerduty: {
        baseName: "pagerduty",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionV2Integrations.js.map