/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Attributes for creating a ServiceNow template
 */
export declare class ServiceNowTemplateCreateRequestAttributes {
    /**
     * The ID of the assignment group
     */
    "assignmentGroupId"?: string;
    /**
     * The ID of the business service
     */
    "businessServiceId"?: string;
    /**
     * Custom field mappings for the template
     */
    "fieldsMapping"?: {
        [key: string]: string;
    };
    /**
     * The handle name of the template
     */
    "handleName": string;
    /**
     * The ID of the ServiceNow instance
     */
    "instanceId": string;
    /**
     * The name of the destination ServiceNow table
     */
    "servicenowTablename": string;
    /**
     * The ID of the user
     */
    "userId"?: string;
    /**
     * A container for additional, undeclared properties.
     * This is a holder for any undeclared properties as specified with
     * the 'additionalProperties' keyword in the OAS document.
     */
    "additionalProperties"?: {
        [key: string]: any;
    };
    /**
     * @ignore
     */
    "_unparsed"?: boolean;
    /**
     * @ignore
     */
    static readonly attributeTypeMap: AttributeTypeMap;
    /**
     * @ignore
     */
    static getAttributeTypeMap(): AttributeTypeMap;
    constructor();
}
