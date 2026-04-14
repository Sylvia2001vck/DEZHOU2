"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowInstanceData = void 0;
/**
 * Data object for a ServiceNow instance
 */
class ServiceNowInstanceData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowInstanceData.attributeTypeMap;
    }
}
exports.ServiceNowInstanceData = ServiceNowInstanceData;
/**
 * @ignore
 */
ServiceNowInstanceData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ServiceNowInstanceAttributes",
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
        type: "ServiceNowInstanceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceNowInstanceData.js.map