/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeviceAttributesInterfaceStatuses } from "./DeviceAttributesInterfaceStatuses";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The device attributes
 */
export declare class DeviceAttributes {
    /**
     * The device description
     */
    "description"?: string;
    /**
     * The device type
     */
    "deviceType"?: string;
    /**
     * The device integration
     */
    "integration"?: string;
    /**
     * Count of the device interfaces by status
     */
    "interfaceStatuses"?: DeviceAttributesInterfaceStatuses;
    /**
     * The device IP address
     */
    "ipAddress"?: string;
    /**
     * The device location
     */
    "location"?: string;
    /**
     * The device model
     */
    "model"?: string;
    /**
     * The device name
     */
    "name"?: string;
    /**
     * The device OS hostname
     */
    "osHostname"?: string;
    /**
     * The device OS name
     */
    "osName"?: string;
    /**
     * The device OS version
     */
    "osVersion"?: string;
    /**
     * The device ping status
     */
    "pingStatus"?: string;
    /**
     * The device product name
     */
    "productName"?: string;
    /**
     * The device serial number
     */
    "serialNumber"?: string;
    /**
     * The device SNMP status
     */
    "status"?: string;
    /**
     * The device subnet
     */
    "subnet"?: string;
    /**
     * The device `sys_object_id`
     */
    "sysObjectId"?: string;
    /**
     * The list of device tags
     */
    "tags"?: Array<string>;
    /**
     * The device vendor
     */
    "vendor"?: string;
    /**
     * The device version
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
