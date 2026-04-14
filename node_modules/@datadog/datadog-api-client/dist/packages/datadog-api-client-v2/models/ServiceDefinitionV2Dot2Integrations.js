"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV2Dot2Integrations = void 0;
/**
 * Third party integrations that Datadog supports.
 */
class ServiceDefinitionV2Dot2Integrations {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV2Dot2Integrations.attributeTypeMap;
    }
}
exports.ServiceDefinitionV2Dot2Integrations = ServiceDefinitionV2Dot2Integrations;
/**
 * @ignore
 */
ServiceDefinitionV2Dot2Integrations.attributeTypeMap = {
    opsgenie: {
        baseName: "opsgenie",
        type: "ServiceDefinitionV2Dot2Opsgenie",
    },
    pagerduty: {
        baseName: "pagerduty",
        type: "ServiceDefinitionV2Dot2Pagerduty",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionV2Dot2Integrations.js.map