"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowTicketCreateAttributes = void 0;
/**
 * ServiceNow ticket creation attributes
 */
class ServiceNowTicketCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowTicketCreateAttributes.attributeTypeMap;
    }
}
exports.ServiceNowTicketCreateAttributes = ServiceNowTicketCreateAttributes;
/**
 * @ignore
 */
ServiceNowTicketCreateAttributes.attributeTypeMap = {
    assignmentGroup: {
        baseName: "assignment_group",
        type: "string",
    },
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
//# sourceMappingURL=ServiceNowTicketCreateAttributes.js.map