"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowTicket = void 0;
/**
 * ServiceNow ticket attached to case
 */
class ServiceNowTicket {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowTicket.attributeTypeMap;
    }
}
exports.ServiceNowTicket = ServiceNowTicket;
/**
 * @ignore
 */
ServiceNowTicket.attributeTypeMap = {
    result: {
        baseName: "result",
        type: "ServiceNowTicketResult",
    },
    status: {
        baseName: "status",
        type: "Case3rdPartyTicketStatus",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceNowTicket.js.map