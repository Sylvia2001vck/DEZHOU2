/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMProductScales } from "./RUMProductScales";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * RUM application attributes.
 */
export declare class RUMApplicationAttributes {
    /**
     * ID of the API key associated with the application.
     */
    "apiKeyId"?: number;
    /**
     * ID of the RUM application.
     */
    "applicationId": string;
    /**
     * Client token of the RUM application.
     */
    "clientToken": string;
    /**
     * Timestamp in ms of the creation date.
     */
    "createdAt": number;
    /**
     * Handle of the creator user.
     */
    "createdByHandle": string;
    /**
     * Hash of the RUM application. Optional.
     */
    "hash"?: string;
    /**
     * Indicates if the RUM application is active.
     */
    "isActive"?: boolean;
    /**
     * Name of the RUM application.
     */
    "name": string;
    /**
     * Org ID of the RUM application.
     */
    "orgId": number;
    /**
     * Product Scales configuration for the RUM application.
     */
    "productScales"?: RUMProductScales;
    /**
     * Type of the RUM application. Supported values are `browser`, `ios`, `android`, `react-native`, `flutter`, `roku`, `electron`, `unity`, `kotlin-multiplatform`.
     */
    "type": string;
    /**
     * Timestamp in ms of the last update date.
     */
    "updatedAt": number;
    /**
     * Handle of the updater user.
     */
    "updatedByHandle": string;
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
