"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowBusinessServiceData = void 0;
/**
 * Data object for a ServiceNow business service
 */
class ServiceNowBusinessServiceData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowBusinessServiceData.attributeTypeMap;
    }
}
exports.ServiceNowBusinessServiceData = ServiceNowBusinessServiceData;
/**
 * @ignore
 */
ServiceNowBusinessServiceData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ServiceNowBusinessServiceAttributes",
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
        type: "ServiceNowBusinessServiceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceNowBusinessServiceData.js.map