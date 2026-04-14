/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The suppression rule properties to be updated.
 */
export declare class SecurityMonitoringSuppressionUpdateAttributes {
    /**
     * An exclusion query on the input data of the security rules, which could be logs, Agent events, or other types of data based on the security rule. Events matching this query are ignored by any detection rules referenced in the suppression rule.
     */
    "dataExclusionQuery"?: string;
    /**
     * A description for the suppression rule.
     */
    "description"?: string;
    /**
     * Whether the suppression rule is enabled.
     */
    "enabled"?: boolean;
    /**
     * A Unix millisecond timestamp giving an expiration date for the suppression rule. After this date, it won't suppress signals anymore. If unset, the expiration date of the suppression rule is left untouched. If set to `null`, the expiration date is removed.
     */
    "expirationDate"?: number;
    /**
     * The name of the suppression rule.
     */
    "name"?: string;
    /**
     * The rule query of the suppression rule, with the same syntax as the search bar for detection rules.
     */
    "ruleQuery"?: string;
    /**
     * A Unix millisecond timestamp giving the start date for the suppression rule. After this date, it starts suppressing signals. If unset, the start date of the suppression rule is left untouched. If set to `null`, the start date is removed.
     */
    "startDate"?: number;
    /**
     * The suppression query of the suppression rule. If a signal matches this query, it is suppressed and not triggered. Same syntax as the queries to search signals in the signal explorer.
     */
    "suppressionQuery"?: string;
    /**
     * List of tags associated with the suppression rule.
     */
    "tags"?: Array<string>;
    /**
     * The current version of the suppression. This is optional, but it can help prevent concurrent modifications.
     */
    "version"?: number;
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
