"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleAggregatedConnectionResponseDataAttributes = void 0;
/**
 * Attributes for an aggregated connection.
 */
class SingleAggregatedConnectionResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SingleAggregatedConnectionResponseDataAttributes.attributeTypeMap;
    }
}
exports.SingleAggregatedConnectionResponseDataAttributes = SingleAggregatedConnectionResponseDataAttributes;
/**
 * @ignore
 */
SingleAggregatedConnectionResponseDataAttributes.attributeTypeMap = {
    bytesSentByClient: {
        baseName: "bytes_sent_by_client",
        type: "number",
        format: "int64",
    },
    bytesSentByServer: {
        baseName: "bytes_sent_by_server",
        type: "number",
        format: "int64",
    },
    groupBys: {
        baseName: "group_bys",
        type: "{ [key: string]: Array<string>; }",
    },
    packetsSentByClient: {
        baseName: "packets_sent_by_client",
        type: "number",
        format: "int64",
    },
    packetsSentByServer: {
        baseName: "packets_sent_by_server",
        type: "number",
        format: "int64",
    },
    rttMicroSeconds: {
        baseName: "rtt_micro_seconds",
        type: "number",
        format: "int64",
    },
    tcpClosedConnections: {
        baseName: "tcp_closed_connections",
        type: "number",
        format: "int64",
    },
    tcpEstablishedConnections: {
        baseName: "tcp_established_connections",
        type: "number",
        format: "int64",
    },
    tcpRefusals: {
        baseName: "tcp_refusals",
        type: "number",
        format: "int64",
    },
    tcpResets: {
        baseName: "tcp_resets",
        type: "number",
        format: "int64",
    },
    tcpRetransmits: {
        baseName: "tcp_retransmits",
        type: "number",
        format: "int64",
    },
    tcpTimeouts: {
        baseName: "tcp_timeouts",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SingleAggregatedConnectionResponseDataAttributes.js.map