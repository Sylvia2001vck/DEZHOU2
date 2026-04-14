"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionMeta = void 0;
/**
 * Metadata about a service definition.
 */
class ServiceDefinitionMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionMeta.attributeTypeMap;
    }
}
exports.ServiceDefinitionMeta = ServiceDefinitionMeta;
/**
 * @ignore
 */
ServiceDefinitionMeta.attributeTypeMap = {
    githubHtmlUrl: {
        baseName: "github-html-url",
        type: "string",
    },
    ingestedSchemaVersion: {
        baseName: "ingested-schema-version",
        type: "string",
    },
    ingestionSource: {
        baseName: "ingestion-source",
        type: "string",
    },
    lastModifiedTime: {
        baseName: "last-modified-time",
        type: "string",
    },
    origin: {
        baseName: "origin",
        type: "string",
    },
    originDetail: {
        baseName: "origin-detail",
        type: "string",
    },
    warnings: {
        baseName: "warnings",
        type: "Array<ServiceDefinitionMetaWarnings>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionMeta.js.map