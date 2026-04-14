"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV2Slack = void 0;
/**
 * Service owner's Slack channel.
 */
class ServiceDefinitionV2Slack {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV2Slack.attributeTypeMap;
    }
}
exports.ServiceDefinitionV2Slack = ServiceDefinitionV2Slack;
/**
 * @ignore
 */
ServiceDefinitionV2Slack.attributeTypeMap = {
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
        type: "ServiceDefinitionV2SlackType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionV2Slack.js.map