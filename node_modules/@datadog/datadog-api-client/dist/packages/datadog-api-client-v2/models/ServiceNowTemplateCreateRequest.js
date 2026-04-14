"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowTemplateCreateRequest = void 0;
/**
 * Request to create a ServiceNow template
 */
class ServiceNowTemplateCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowTemplateCreateRequest.attributeTypeMap;
    }
}
exports.ServiceNowTemplateCreateRequest = ServiceNowTemplateCreateRequest;
/**
 * @ignore
 */
ServiceNowTemplateCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ServiceNowTemplateCreateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceNowTemplateCreateRequest.js.map