"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowUserAttributes = void 0;
/**
 * Attributes of a ServiceNow user
 */
class ServiceNowUserAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowUserAttributes.attributeTypeMap;
    }
}
exports.ServiceNowUserAttributes = ServiceNowUserAttributes;
/**
 * @ignore
 */
ServiceNowUserAttributes.attributeTypeMap = {
    email: {
        baseName: "email",
        type: "string",
        required: true,
    },
    fullName: {
        baseName: "full_name",
        type: "string",
    },
    instanceId: {
        baseName: "instance_id",
        type: "string",
        required: true,
        format: "uuid",
    },
    userName: {
        baseName: "user_name",
        type: "string",
        required: true,
    },
    userSysId: {
        baseName: "user_sys_id",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceNowUserAttributes.js.map