/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsNetworkTestRequestTCPMethod } from "./SyntheticsNetworkTestRequestTCPMethod";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Object describing the request for a Network Path test.
 */
export declare class SyntheticsNetworkTestRequest {
    /**
     * An optional label displayed for the destination host in the Network Path visualization.
     */
    "destinationService"?: string;
    /**
     * The number of packets sent to probe the destination to measure packet loss, latency and jitter.
     */
    "e2eQueries": number;
    /**
     * Host name to query.
     */
    "host": string;
    /**
     * The maximum time-to-live (max number of hops) used in outgoing probe packets.
     */
    "maxTtl": number;
    /**
     * For TCP or UDP tests, the port to use when performing the test.
     * If not set on a UDP test, a random port is assigned, which may affect the results.
     */
    "port"?: number;
    /**
     * An optional label displayed for the source host in the Network Path visualization.
     */
    "sourceService"?: string;
    /**
     * For TCP tests, the TCP traceroute strategy.
     */
    "tcpMethod"?: SyntheticsNetworkTestRequestTCPMethod;
    /**
     * Timeout in seconds.
     */
    "timeout"?: number;
    /**
     * The number of traceroute path tracings.
     */
    "tracerouteQueries": number;
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
