"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowTemplateData = void 0;
/**
 * Data object for a ServiceNow template
 */
class ServiceNowTemplateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowTemplateData.attributeTypeMap;
    }
}
exports.ServiceNowTemplateData = ServiceNowTemplateData;
/**
 * @ignore
 */
ServiceNowTemplateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ServiceNowTemplateAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
    },
    type: {
        baseName: "type",
        type: "ServiceNowTemplateType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceNowTemplateData.js.map