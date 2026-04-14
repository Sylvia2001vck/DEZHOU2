"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV2 = void 0;
/**
 * Service definition V2 for providing service metadata and integrations.
 */
class ServiceDefinitionV2 {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV2.attributeTypeMap;
    }
}
exports.ServiceDefinitionV2 = ServiceDefinitionV2;
/**
 * @ignore
 */
ServiceDefinitionV2.attributeTypeMap = {
    contacts: {
        baseName: "contacts",
        type: "Array<ServiceDefinitionV2Contact>",
    },
    ddService: {
        baseName: "dd-service",
        type: "string",
        required: true,
    },
    ddTeam: {
        baseName: "dd-team",
        type: "string",
    },
    docs: {
        baseName: "docs",
        type: "Array<ServiceDefinitionV2Doc>",
    },
    extensions: {
        baseName: "extensions",
        type: "{ [key: string]: any; }",
    },
    integrations: {
        baseName: "integrations",
        type: "ServiceDefinitionV2Integrations",
    },
    links: {
        baseName: "links",
        type: "Array<ServiceDefinitionV2Link>",
    },
    repos: {
        baseName: "repos",
        type: "Array<ServiceDefinitionV2Repo>",
    },
    schemaVersion: {
        baseName: "schema-version",
        type: "ServiceDefinitionV2Version",
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
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionV2.js.map