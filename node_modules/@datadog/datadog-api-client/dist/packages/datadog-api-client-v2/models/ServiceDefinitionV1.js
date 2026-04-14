"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV1 = void 0;
/**
 * Deprecated - Service definition V1 for providing additional service metadata and integrations.
 */
class ServiceDefinitionV1 {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV1.attributeTypeMap;
    }
}
exports.ServiceDefinitionV1 = ServiceDefinitionV1;
/**
 * @ignore
 */
ServiceDefinitionV1.attributeTypeMap = {
    contact: {
        baseName: "contact",
        type: "ServiceDefinitionV1Contact",
    },
    extensions: {
        baseName: "extensions",
        type: "{ [key: string]: any; }",
    },
    externalResources: {
        baseName: "external-resources",
        type: "Array<ServiceDefinitionV1Resource>",
    },
    info: {
        baseName: "info",
        type: "ServiceDefinitionV1Info",
        required: true,
    },
    integrations: {
        baseName: "integrations",
        type: "ServiceDefinitionV1Integrations",
    },
    org: {
        baseName: "org",
        type: "ServiceDefinitionV1Org",
    },
    schemaVersion: {
        baseName: "schema-version",
        type: "ServiceDefinitionV1Version",
        required: true,
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionV1.js.map