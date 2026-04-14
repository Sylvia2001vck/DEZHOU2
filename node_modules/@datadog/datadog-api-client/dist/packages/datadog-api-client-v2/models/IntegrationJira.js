"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationJira = void 0;
/**
 * Jira integration settings
 */
class IntegrationJira {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IntegrationJira.attributeTypeMap;
    }
}
exports.IntegrationJira = IntegrationJira;
/**
 * @ignore
 */
IntegrationJira.attributeTypeMap = {
    autoCreation: {
        baseName: "auto_creation",
        type: "IntegrationJiraAutoCreation",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    metadata: {
        baseName: "metadata",
        type: "IntegrationJiraMetadata",
    },
    sync: {
        baseName: "sync",
        type: "IntegrationJiraSync",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IntegrationJira.js.map