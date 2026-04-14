/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Attributes for an aggregated connection.
 */
export declare class SingleAggregatedConnectionResponseDataAttributes {
    /**
     * The total number of bytes sent by the client over the given period.
     */
    "bytesSentByClient"?: number;
    /**
     * The total number of bytes sent by the server over the given period.
     */
    "bytesSentByServer"?: number;
    /**
     * The key, value pairs for each group by.
     */
    "groupBys"?: {
        [key: string]: Array<string>;
    };
    /**
     * The total number of packets sent by the client over the given period.
     */
    "packetsSentByClient"?: number;
    /**
     * The total number of packets sent by the server over the given period.
     */
    "packetsSentByServer"?: number;
    /**
     * Measured as TCP smoothed round trip time in microseconds (the time between a TCP frame being sent and acknowledged).
     */
    "rttMicroSeconds"?: number;
    /**
     * The number of TCP connections in a closed state. Measured in connections per second from the client.
     */
    "tcpClosedConnections"?: number;
    /**
     * The number of TCP connections in an established state. Measured in connections per second from the client.
     */
    "tcpEstablishedConnections"?: number;
    /**
     * The number of TCP connections that were refused by the server. Typically this indicates an attempt to connect to an IP/port that is not receiving connections, or a firewall/security misconfiguration.
     */
    "tcpRefusals"?: number;
    /**
     * The number of TCP connections that were reset by the server.
     */
    "tcpResets"?: number;
    /**
     * TCP Retransmits represent detected failures that are retransmitted to ensure delivery. Measured in count of retransmits from the client.
     */
    "tcpRetransmits"?: number;
    /**
     * The number of TCP connections that timed out from the perspective of the operating system. This can indicate general connectivity and latency issues.
     */
    "tcpTimeouts"?: number;
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
