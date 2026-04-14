"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailedFindingAttributes = void 0;
/**
 * The JSON:API attributes of the detailed finding.
 */
class DetailedFindingAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DetailedFindingAttributes.attributeTypeMap;
    }
}
exports.DetailedFindingAttributes = DetailedFindingAttributes;
/**
 * @ignore
 */
DetailedFindingAttributes.attributeTypeMap = {
    evaluation: {
        baseName: "evaluation",
        type: "FindingEvaluation",
    },
    evaluationChangedAt: {
        baseName: "evaluation_changed_at",
        type: "number",
    },
    message: {
        baseName: "message",
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
    resourceConfiguration: {
        baseName: "resource_configuration",
        type: "any",
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
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DetailedFindingAttributes.js.map