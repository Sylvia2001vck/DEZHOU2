"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowTicketCreateRequest = void 0;
/**
 * ServiceNow ticket creation request
 */
class ServiceNowTicketCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowTicketCreateRequest.attributeTypeMap;
    }
}
exports.ServiceNowTicketCreateRequest = ServiceNowTicketCreateRequest;
/**
 * @ignore
 */
ServiceNowTicketCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ServiceNowTicketCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceNowTicketCreateRequest.js.map