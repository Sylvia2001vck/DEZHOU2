"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowIntegrationUpdate = void 0;
/**
 * The definition of the `ServiceNowIntegrationUpdate` object.
 */
class ServiceNowIntegrationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowIntegrationUpdate.attributeTypeMap;
    }
}
exports.ServiceNowIntegrationUpdate = ServiceNowIntegrationUpdate;
/**
 * @ignore
 */
ServiceNowIntegrationUpdate.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "ServiceNowCredentialsUpdate",
    },
    type: {
        baseName: "type",
        type: "ServiceNowIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceNowIntegrationUpdate.js.map