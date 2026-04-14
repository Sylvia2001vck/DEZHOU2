/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Attributes of a ServiceNow user
 */
export declare class ServiceNowUserAttributes {
    /**
     * The email address of the user
     */
    "email": string;
    /**
     * The full name of the user
     */
    "fullName"?: string;
    /**
     * The ID of the ServiceNow instance
     */
    "instanceId": string;
    /**
     * The username of the ServiceNow user
     */
    "userName": string;
    /**
     * The system ID of the user in ServiceNow
     */
    "userSysId": string;
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
