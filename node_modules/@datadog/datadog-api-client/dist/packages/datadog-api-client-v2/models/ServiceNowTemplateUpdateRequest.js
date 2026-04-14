"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowTemplateUpdateRequest = void 0;
/**
 * Request to update a ServiceNow template
 */
class ServiceNowTemplateUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowTemplateUpdateRequest.attributeTypeMap;
    }
}
exports.ServiceNowTemplateUpdateRequest = ServiceNowTemplateUpdateRequest;
/**
 * @ignore
 */
ServiceNowTemplateUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ServiceNowTemplateUpdateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceNowTemplateUpdateRequest.js.map