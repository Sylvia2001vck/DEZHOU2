"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindingAttributes = void 0;
/**
 * The JSON:API attributes of the finding.
 */
class FindingAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FindingAttributes.attributeTypeMap;
    }
}
exports.FindingAttributes = FindingAttributes;
/**
 * @ignore
 */
FindingAttributes.attributeTypeMap = {
    datadogLink: {
        baseName: "datadog_link",
        type: "string",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    evaluation: {
        baseName: "evaluation",
        type: "FindingEvaluation",
    },
    evaluationChangedAt: {
        baseName: "evaluation_changed_at",
        type: "number",
    },
    externalId: {
        baseName: "external_id",
        type: "string",
    },
    mute: {
        baseName: "mute",
        type: "FindingMute",
    },
    resource: {
        baseName: "resource",
        type: "string",
    },
    resourceDiscoveryDate: {
        baseName: "resource_discovery_date",
        type: "number",
    },
    resourceType: {
        baseName: "resource_type",
        type: "string",
    },
    rule: {
        baseName: "rule",
        type: "FindingRule",
    },
    status: {
        baseName: "status",
        type: "FindingStatus",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    vulnerabilityType: {
        baseName: "vulnerability_type",
        type: "FindingVulnerabilityType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FindingAttributes.js.map