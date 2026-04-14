/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Item in the Microsoft Teams integration metadata teams array.
 */
export declare class MSTeamsIntegrationMetadataTeamsItem {
    /**
     * Microsoft Teams channel ID.
     */
    "msChannelId": string;
    /**
     * Microsoft Teams channel name.
     */
    "msChannelName": string;
    /**
     * Microsoft Teams tenant ID.
     */
    "msTenantId": string;
    /**
     * URL redirecting to the Microsoft Teams channel.
     */
    "redirectUrl": string;
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
