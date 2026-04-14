"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties = void 0;
class IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties.attributeTypeMap;
    }
}
exports.IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties = IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties;
/**
 * @ignore
 */
IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties.attributeTypeMap = {
    syncType: {
        baseName: "sync_type",
        type: "string",
    },
    value: {
        baseName: "value",
        type: "AnyValue",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties.js.map