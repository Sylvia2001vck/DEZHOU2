/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMProductAnalyticsRetentionState } from "./RUMProductAnalyticsRetentionState";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Product Analytics retention scale configuration.
 */
export declare class RUMProductAnalyticsRetentionScale {
    /**
     * Timestamp in milliseconds when this scale was last modified.
     */
    "lastModifiedAt"?: number;
    /**
     * Controls the retention policy for Product Analytics data derived from RUM events.
     */
    "state"?: RUMProductAnalyticsRetentionState;
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
