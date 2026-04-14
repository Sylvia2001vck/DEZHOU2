"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowInstanceAttributes = void 0;
/**
 * Attributes of a ServiceNow instance
 */
class ServiceNowInstanceAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowInstanceAttributes.attributeTypeMap;
    }
}
exports.ServiceNowInstanceAttributes = ServiceNowInstanceAttributes;
/**
 * @ignore
 */
ServiceNowInstanceAttributes.attributeTypeMap = {
    instanceName: {
        baseName: "instance_name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceNowInstanceAttributes.js.map