"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV2Dot1 = void 0;
/**
 * Service definition v2.1 for providing service metadata and integrations.
 */
class ServiceDefinitionV2Dot1 {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV2Dot1.attributeTypeMap;
    }
}
exports.ServiceDefinitionV2Dot1 = ServiceDefinitionV2Dot1;
/**
 * @ignore
 */
ServiceDefinitionV2Dot1.attributeTypeMap = {
    application: {
        baseName: "application",
        type: "string",
    },
    contacts: {
        baseName: "contacts",
        type: "Array<ServiceDefinitionV2Dot1Contact>",
    },
    ddService: {
        baseName: "dd-service",
        type: "string",
        required: true,
    },
    description: {
        baseName: "description",
        type: "string",
    },
    extensions: {
        baseName: "extensions",
        type: "{ [key: string]: any; }",
    },
    integrations: {
        baseName: "integrations",
        type: "ServiceDefinitionV2Dot1Integrations",
    },
    lifecycle: {
        baseName: "lifecycle",
        type: "string",
    },
    links: {
        baseName: "links",
        type: "Array<ServiceDefinitionV2Dot1Link>",
    },
    schemaVersion: {
        baseName: "schema-version",
        type: "ServiceDefinitionV2Dot1Version",
        required: true,
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    team: {
        baseName: "team",
        type: "string",
    },
    tier: {
        baseName: "tier",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionV2Dot1.js.map