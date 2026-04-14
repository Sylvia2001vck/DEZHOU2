"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationJiraSync = void 0;
class IntegrationJiraSync {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IntegrationJiraSync.attributeTypeMap;
    }
}
exports.IntegrationJiraSync = IntegrationJiraSync;
/**
 * @ignore
 */
IntegrationJiraSync.attributeTypeMap = {
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    properties: {
        baseName: "properties",
        type: "IntegrationJiraSyncProperties",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IntegrationJiraSync.js.map