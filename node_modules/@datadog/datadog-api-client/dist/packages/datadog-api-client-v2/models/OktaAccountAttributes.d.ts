/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Attributes object for an Okta account.
 */
export declare class OktaAccountAttributes {
    /**
     * The API key of the Okta account.
     */
    "apiKey"?: string;
    /**
     * The authorization method for an Okta account.
     */
    "authMethod": string;
    /**
     * The Client ID of an Okta app integration.
     */
    "clientId"?: string;
    /**
     * The client secret of an Okta app integration.
     */
    "clientSecret"?: string;
    /**
     * The domain of the Okta account.
     */
    "domain": string;
    /**
     * The name of the Okta account.
     */
    "name": string;
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
