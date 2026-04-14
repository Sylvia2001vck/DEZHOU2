"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowTicketCreateData = void 0;
/**
 * ServiceNow ticket creation data
 */
class ServiceNowTicketCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowTicketCreateData.attributeTypeMap;
    }
}
exports.ServiceNowTicketCreateData = ServiceNowTicketCreateData;
/**
 * @ignore
 */
ServiceNowTicketCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ServiceNowTicketCreateAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ServiceNowTicketResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceNowTicketCreateData.js.map