"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowBusinessServiceAttributes = void 0;
/**
 * Attributes of a ServiceNow business service
 */
class ServiceNowBusinessServiceAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowBusinessServiceAttributes.attributeTypeMap;
    }
}
exports.ServiceNowBusinessServiceAttributes = ServiceNowBusinessServiceAttributes;
/**
 * @ignore
 */
ServiceNowBusinessServiceAttributes.attributeTypeMap = {
    instanceId: {
        baseName: "instance_id",
        type: "string",
        required: true,
        format: "uuid",
    },
    serviceName: {
        baseName: "service_name",
        type: "string",
        required: true,
    },
    serviceSysId: {
        baseName: "service_sys_id",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceNowBusinessServiceAttributes.js.map