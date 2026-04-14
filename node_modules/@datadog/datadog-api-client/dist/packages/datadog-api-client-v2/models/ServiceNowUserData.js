"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowUserData = void 0;
/**
 * Data object for a ServiceNow user
 */
class ServiceNowUserData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowUserData.attributeTypeMap;
    }
}
exports.ServiceNowUserData = ServiceNowUserData;
/**
 * @ignore
 */
ServiceNowUserData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ServiceNowUserAttributes",
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
        type: "ServiceNowUserType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceNowUserData.js.map