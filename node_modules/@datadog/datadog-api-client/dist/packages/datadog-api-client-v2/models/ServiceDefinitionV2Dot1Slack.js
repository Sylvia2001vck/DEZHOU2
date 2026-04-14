"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV2Dot1Slack = void 0;
/**
 * Service owner's Slack channel.
 */
class ServiceDefinitionV2Dot1Slack {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV2Dot1Slack.attributeTypeMap;
    }
}
exports.ServiceDefinitionV2Dot1Slack = ServiceDefinitionV2Dot1Slack;
/**
 * @ignore
 */
ServiceDefinitionV2Dot1Slack.attributeTypeMap = {
    contact: {
        baseName: "contact",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ServiceDefinitionV2Dot1SlackType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionV2Dot1Slack.js.map