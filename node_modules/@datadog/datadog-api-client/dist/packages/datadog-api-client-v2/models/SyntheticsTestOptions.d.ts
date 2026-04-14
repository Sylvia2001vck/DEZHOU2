/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestOptionsMonitorOptions } from "./SyntheticsTestOptionsMonitorOptions";
import { SyntheticsTestOptionsRetry } from "./SyntheticsTestOptionsRetry";
import { SyntheticsTestOptionsScheduling } from "./SyntheticsTestOptionsScheduling";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Object describing the extra options for a Synthetic test.
 */
export declare class SyntheticsTestOptions {
    /**
     * Minimum amount of time in failure required to trigger an alert.
     */
    "minFailureDuration"?: number;
    /**
     * Minimum number of locations in failure required to trigger
     * an alert.
     */
    "minLocationFailed"?: number;
    /**
     * The monitor name is used for the alert title as well as for all monitor dashboard widgets and SLOs.
     */
    "monitorName"?: string;
    /**
     * Object containing the options for a Synthetic test as a monitor
     * (for example, renotification).
     */
    "monitorOptions"?: SyntheticsTestOptionsMonitorOptions;
    /**
     * Integer from 1 (high) to 5 (low) indicating alert severity.
     */
    "monitorPriority"?: number;
    /**
     * A list of role identifiers that can be pulled from the Roles API, for restricting read and write access. This field is deprecated. Use the restriction policies API to manage permissions.
     */
    "restrictedRoles"?: Array<string>;
    /**
     * Object describing the retry strategy to apply to a Synthetic test.
     */
    "retry"?: SyntheticsTestOptionsRetry;
    /**
     * Object containing timeframes and timezone used for advanced scheduling.
     */
    "scheduling"?: SyntheticsTestOptionsScheduling;
    /**
     * The frequency at which to run the Synthetic test (in seconds).
     */
    "tickEvery"?: number;
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
