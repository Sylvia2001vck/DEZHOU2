"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowAssignmentGroupsResponse = void 0;
/**
 * Response containing ServiceNow assignment groups
 */
class ServiceNowAssignmentGroupsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowAssignmentGroupsResponse.attributeTypeMap;
    }
}
exports.ServiceNowAssignmentGroupsResponse = ServiceNowAssignmentGroupsResponse;
/**
 * @ignore
 */
ServiceNowAssignmentGroupsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ServiceNowAssignmentGroupData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceNowAssignmentGroupsResponse.js.map