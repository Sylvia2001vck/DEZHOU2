/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { InterfaceAttributesStatus } from "./InterfaceAttributesStatus";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The interface attributes
 */
export declare class InterfaceAttributes {
    /**
     * The interface alias
     */
    "alias"?: string;
    /**
     * The interface description
     */
    "description"?: string;
    /**
     * The interface index
     */
    "index"?: number;
    /**
     * The interface IP addresses
     */
    "ipAddresses"?: Array<string>;
    /**
     * The interface MAC address
     */
    "macAddress"?: string;
    /**
     * The interface name
     */
    "name"?: string;
    /**
     * The interface status
     */
    "status"?: InterfaceAttributesStatus;
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
