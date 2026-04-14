/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsNetworkTestConfig } from "./SyntheticsNetworkTestConfig";
import { SyntheticsNetworkTestSubType } from "./SyntheticsNetworkTestSubType";
import { SyntheticsNetworkTestType } from "./SyntheticsNetworkTestType";
import { SyntheticsTestOptions } from "./SyntheticsTestOptions";
import { SyntheticsTestPauseStatus } from "./SyntheticsTestPauseStatus";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Object containing details about a Network Path test.
 */
export declare class SyntheticsNetworkTest {
    /**
     * Configuration object for a Network Path test.
     */
    "config": SyntheticsNetworkTestConfig;
    /**
     * Array of locations used to run the test. Network Path tests can be run from managed locations to test public endpoints,
     * or from a [Datadog Agent](https://docs.datadoghq.com/synthetics/network_path_tests/#agent-configuration) to test private environments.
     */
    "locations": Array<string>;
    /**
     * Notification message associated with the test.
     */
    "message": string;
    /**
     * The associated monitor ID.
     */
    "monitorId"?: number;
    /**
     * Name of the test.
     */
    "name": string;
    /**
     * Object describing the extra options for a Synthetic test.
     */
    "options": SyntheticsTestOptions;
    /**
     * The public ID for the test.
     */
    "publicId"?: string;
    /**
     * Define whether you want to start (`live`) or pause (`paused`) a
     * Synthetic test.
     */
    "status"?: SyntheticsTestPauseStatus;
    /**
     * Subtype of the Synthetic Network Path test: `tcp`, `udp`, or `icmp`.
     */
    "subtype"?: SyntheticsNetworkTestSubType;
    /**
     * Array of tags attached to the test.
     */
    "tags"?: Array<string>;
    /**
     * Type of the Synthetic test, `network`.
     */
    "type": SyntheticsNetworkTestType;
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
