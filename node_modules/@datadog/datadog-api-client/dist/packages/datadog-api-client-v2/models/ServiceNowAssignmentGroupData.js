"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowAssignmentGroupData = void 0;
/**
 * Data object for a ServiceNow assignment group
 */
class ServiceNowAssignmentGroupData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowAssignmentGroupData.attributeTypeMap;
    }
}
exports.ServiceNowAssignmentGroupData = ServiceNowAssignmentGroupData;
/**
 * @ignore
 */
ServiceNowAssignmentGroupData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ServiceNowAssignmentGroupAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
    },
    type: {
        baseName: "type",
        type: "ServiceNowAssignmentGroupType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceNowAssignmentGroupData.js.map