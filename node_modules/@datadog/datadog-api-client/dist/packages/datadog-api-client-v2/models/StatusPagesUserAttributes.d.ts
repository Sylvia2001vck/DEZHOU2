/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Attributes of the Datadog user.
 */
export declare class StatusPagesUserAttributes {
    /**
     * The email of the Datadog user.
     */
    "email"?: string;
    /**
     * The handle of the Datadog user.
     */
    "handle"?: string;
    /**
     * The icon of the Datadog user.
     */
    "icon"?: string;
    /**
     * The name of the Datadog user.
     */
    "name"?: string;
    /**
     * The UUID of the Datadog user.
     */
    "uuid"?: string;
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
