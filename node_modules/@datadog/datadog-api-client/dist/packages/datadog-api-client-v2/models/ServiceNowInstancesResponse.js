"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowInstancesResponse = void 0;
/**
 * Response containing ServiceNow instances
 */
class ServiceNowInstancesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowInstancesResponse.attributeTypeMap;
    }
}
exports.ServiceNowInstancesResponse = ServiceNowInstancesResponse;
/**
 * @ignore
 */
ServiceNowInstancesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ServiceNowInstanceData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceNowInstancesResponse.js.map