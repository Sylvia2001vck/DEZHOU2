"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationJiraSyncProperties = void 0;
class IntegrationJiraSyncProperties {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IntegrationJiraSyncProperties.attributeTypeMap;
    }
}
exports.IntegrationJiraSyncProperties = IntegrationJiraSyncProperties;
/**
 * @ignore
 */
IntegrationJiraSyncProperties.attributeTypeMap = {
    assignee: {
        baseName: "assignee",
        type: "SyncProperty",
    },
    comments: {
        baseName: "comments",
        type: "SyncProperty",
    },
    customFields: {
        baseName: "custom_fields",
        type: "{ [key: string]: IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties; }",
    },
    description: {
        baseName: "description",
        type: "SyncProperty",
    },
    dueDate: {
        baseName: "due_date",
        type: "IntegrationJiraSyncDueDate",
    },
    priority: {
        baseName: "priority",
        type: "SyncPropertyWithMapping",
    },
    status: {
        baseName: "status",
        type: "SyncPropertyWithMapping",
    },
    title: {
        baseName: "title",
        type: "SyncProperty",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IntegrationJiraSyncProperties.js.map