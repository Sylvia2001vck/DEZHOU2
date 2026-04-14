"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowTemplateUpdateRequestData = void 0;
/**
 * Data object for updating a ServiceNow template
 */
class ServiceNowTemplateUpdateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowTemplateUpdateRequestData.attributeTypeMap;
    }
}
exports.ServiceNowTemplateUpdateRequestData = ServiceNowTemplateUpdateRequestData;
/**
 * @ignore
 */
ServiceNowTemplateUpdateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ServiceNowTemplateUpdateRequestAttributes",
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
//# sourceMappingURL=ServiceNowTemplateUpdateRequestData.js.map