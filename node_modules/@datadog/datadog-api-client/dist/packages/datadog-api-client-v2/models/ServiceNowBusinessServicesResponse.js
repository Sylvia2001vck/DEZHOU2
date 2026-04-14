"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowBusinessServicesResponse = void 0;
/**
 * Response containing ServiceNow business services
 */
class ServiceNowBusinessServicesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowBusinessServicesResponse.attributeTypeMap;
    }
}
exports.ServiceNowBusinessServicesResponse = ServiceNowBusinessServicesResponse;
/**
 * @ignore
 */
ServiceNowBusinessServicesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ServiceNowBusinessServiceData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceNowBusinessServicesResponse.js.map