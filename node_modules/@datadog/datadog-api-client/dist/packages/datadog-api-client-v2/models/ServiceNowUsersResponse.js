"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowUsersResponse = void 0;
/**
 * Response containing ServiceNow users
 */
class ServiceNowUsersResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowUsersResponse.attributeTypeMap;
    }
}
exports.ServiceNowUsersResponse = ServiceNowUsersResponse;
/**
 * @ignore
 */
ServiceNowUsersResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ServiceNowUserData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceNowUsersResponse.js.map