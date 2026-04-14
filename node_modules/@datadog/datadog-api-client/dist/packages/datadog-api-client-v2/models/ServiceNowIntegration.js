"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowIntegration = void 0;
/**
 * The definition of the `ServiceNowIntegration` object.
 */
class ServiceNowIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowIntegration.attributeTypeMap;
    }
}
exports.ServiceNowIntegration = ServiceNowIntegration;
/**
 * @ignore
 */
ServiceNowIntegration.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "ServiceNowCredentials",
        required: true,
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
//# sourceMappingURL=ServiceNowIntegration.js.map