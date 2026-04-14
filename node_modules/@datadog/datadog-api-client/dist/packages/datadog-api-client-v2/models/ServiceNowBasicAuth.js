"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowBasicAuth = void 0;
/**
 * The definition of the `ServiceNowBasicAuth` object.
 */
class ServiceNowBasicAuth {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowBasicAuth.attributeTypeMap;
    }
}
exports.ServiceNowBasicAuth = ServiceNowBasicAuth;
/**
 * @ignore
 */
ServiceNowBasicAuth.attributeTypeMap = {
    instance: {
        baseName: "instance",
        type: "string",
        required: true,
    },
    password: {
        baseName: "password",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ServiceNowBasicAuthType",
        required: true,
    },
    username: {
        baseName: "username",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceNowBasicAuth.js.map