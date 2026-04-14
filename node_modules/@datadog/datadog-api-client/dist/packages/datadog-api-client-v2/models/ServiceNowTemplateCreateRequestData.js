"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowTemplateCreateRequestData = void 0;
/**
 * Data object for creating a ServiceNow template
 */
class ServiceNowTemplateCreateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowTemplateCreateRequestData.attributeTypeMap;
    }
}
exports.ServiceNowTemplateCreateRequestData = ServiceNowTemplateCreateRequestData;
/**
 * @ignore
 */
ServiceNowTemplateCreateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ServiceNowTemplateCreateRequestAttributes",
        required: true,
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
//# sourceMappingURL=ServiceNowTemplateCreateRequestData.js.map