"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowBasicAuthUpdate = void 0;
/**
 * The definition of the `ServiceNowBasicAuth` object.
 */
class ServiceNowBasicAuthUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowBasicAuthUpdate.attributeTypeMap;
    }
}
exports.ServiceNowBasicAuthUpdate = ServiceNowBasicAuthUpdate;
/**
 * @ignore
 */
ServiceNowBasicAuthUpdate.attributeTypeMap = {
    instance: {
        baseName: "instance",
        type: "string",
    },
    password: {
        baseName: "password",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ServiceNowBasicAuthType",
        required: true,
    },
    username: {
        baseName: "username",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceNowBasicAuthUpdate.js.map