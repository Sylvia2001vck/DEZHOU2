/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomDestinationForwardDestinationMicrosoftSentinelType } from "./CustomDestinationForwardDestinationMicrosoftSentinelType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The Microsoft Sentinel destination.
 */
export declare class CustomDestinationForwardDestinationMicrosoftSentinel {
    /**
     * Client ID from the Datadog Azure integration.
     */
    "clientId": string;
    /**
     * Azure data collection endpoint.
     */
    "dataCollectionEndpoint": string;
    /**
     * Azure data collection rule ID.
     */
    "dataCollectionRuleId": string;
    /**
     * Azure stream name.
     */
    "streamName": string;
    /**
     * Tenant ID from the Datadog Azure integration.
     */
    "tenantId": string;
    /**
     * Type of the Microsoft Sentinel destination.
     */
    "type": CustomDestinationForwardDestinationMicrosoftSentinelType;
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
