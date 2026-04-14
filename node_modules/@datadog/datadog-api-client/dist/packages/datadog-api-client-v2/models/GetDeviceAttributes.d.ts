/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The device attributes
 */
export declare class GetDeviceAttributes {
    /**
     * A description of the device.
     */
    "description"?: string;
    /**
     * The type of the device.
     */
    "deviceType"?: string;
    /**
     * The integration of the device.
     */
    "integration"?: string;
    /**
     * The IP address of the device.
     */
    "ipAddress"?: string;
    /**
     * The location of the device.
     */
    "location"?: string;
    /**
     * The model of the device.
     */
    "model"?: string;
    /**
     * The name of the device.
     */
    "name"?: string;
    /**
     * The operating system hostname of the device.
     */
    "osHostname"?: string;
    /**
     * The operating system name of the device.
     */
    "osName"?: string;
    /**
     * The operating system version of the device.
     */
    "osVersion"?: string;
    /**
     * The ping status of the device.
     */
    "pingStatus"?: string;
    /**
     * The product name of the device.
     */
    "productName"?: string;
    /**
     * The serial number of the device.
     */
    "serialNumber"?: string;
    /**
     * The status of the device.
     */
    "status"?: string;
    /**
     * The subnet of the device.
     */
    "subnet"?: string;
    /**
     * The device `sys_object_id`.
     */
    "sysObjectId"?: string;
    /**
     * A list of tags associated with the device.
     */
    "tags"?: Array<string>;
    /**
     * The vendor of the device.
     */
    "vendor"?: string;
    /**
     * The version of the device.
     */
    "version"?: string;
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
