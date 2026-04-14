"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowTicketResult = void 0;
/**
 * ServiceNow ticket information
 */
class ServiceNowTicketResult {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowTicketResult.attributeTypeMap;
    }
}
exports.ServiceNowTicketResult = ServiceNowTicketResult;
/**
 * @ignore
 */
ServiceNowTicketResult.attributeTypeMap = {
    sysTargetLink: {
        baseName: "sys_target_link",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceNowTicketResult.js.map