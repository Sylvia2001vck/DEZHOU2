"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV2Dot2 = void 0;
/**
 * Service definition v2.2 for providing service metadata and integrations.
 */
class ServiceDefinitionV2Dot2 {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV2Dot2.attributeTypeMap;
    }
}
exports.ServiceDefinitionV2Dot2 = ServiceDefinitionV2Dot2;
/**
 * @ignore
 */
ServiceDefinitionV2Dot2.attributeTypeMap = {
    application: {
        baseName: "application",
        type: "string",
    },
    ciPipelineFingerprints: {
        baseName: "ci-pipeline-fingerprints",
        type: "Array<string>",
    },
    contacts: {
        baseName: "contacts",
        type: "Array<ServiceDefinitionV2Dot2Contact>",
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
        type: "ServiceDefinitionV2Dot2Integrations",
    },
    languages: {
        baseName: "languages",
        type: "Array<string>",
    },
    lifecycle: {
        baseName: "lifecycle",
        type: "string",
    },
    links: {
        baseName: "links",
        type: "Array<ServiceDefinitionV2Dot2Link>",
    },
    schemaVersion: {
        baseName: "schema-version",
        type: "ServiceDefinitionV2Dot2Version",
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
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionV2Dot2.js.map