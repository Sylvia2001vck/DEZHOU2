"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowTemplateResponse = void 0;
/**
 * Response containing a single ServiceNow template
 */
class ServiceNowTemplateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowTemplateResponse.attributeTypeMap;
    }
}
exports.ServiceNowTemplateResponse = ServiceNowTemplateResponse;
/**
 * @ignore
 */
ServiceNowTemplateResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ServiceNowTemplateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceNowTemplateResponse.js.map