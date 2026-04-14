"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowTemplatesResponse = void 0;
/**
 * Response containing ServiceNow templates
 */
class ServiceNowTemplatesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowTemplatesResponse.attributeTypeMap;
    }
}
exports.ServiceNowTemplatesResponse = ServiceNowTemplatesResponse;
/**
 * @ignore
 */
ServiceNowTemplatesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ServiceNowTemplateData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceNowTemplatesResponse.js.map