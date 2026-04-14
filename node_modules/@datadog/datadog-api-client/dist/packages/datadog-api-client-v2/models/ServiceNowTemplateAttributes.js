"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceNowTemplateAttributes = void 0;
/**
 * Attributes of a ServiceNow template
 */
class ServiceNowTemplateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceNowTemplateAttributes.attributeTypeMap;
    }
}
exports.ServiceNowTemplateAttributes = ServiceNowTemplateAttributes;
/**
 * @ignore
 */
ServiceNowTemplateAttributes.attributeTypeMap = {
    assignmentGroupId: {
        baseName: "assignment_group_id",
        type: "string",
        format: "uuid",
    },
    businessServiceId: {
        baseName: "business_service_id",
        type: "string",
        format: "uuid",
    },
    fieldsMapping: {
        baseName: "fields_mapping",
        type: "{ [key: string]: string; }",
    },
    handleName: {
        baseName: "handle_name",
        type: "string",
        required: true,
    },
    instanceId: {
        baseName: "instance_id",
        type: "string",
        required: true,
        format: "uuid",
    },
    servicenowTablename: {
        baseName: "servicenow_tablename",
        type: "string",
        required: true,
    },
    userId: {
        baseName: "user_id",
        type: "string",
        format: "uuid",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceNowTemplateAttributes.js.map