/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The metric key for DNS metrics.
 */
export declare type DnsMetricKey = typeof DNS_TOTAL_REQUESTS | typeof DNS_FAILURES | typeof DNS_SUCCESSFUL_RESPONSES | typeof DNS_FAILED_RESPONSES | typeof DNS_TIMEOUTS | typeof DNS_RESPONSES_NXDOMAIN | typeof DNS_RESPONSES_SERVFAIL | typeof DNS_RESPONSES_OTHER | typeof DNS_SUCCESS_LATENCY_PERCENTILE | typeof DNS_FAILURE_LATENCY_PERCENTILE | UnparsedObject;
export declare const DNS_TOTAL_REQUESTS = "dns_total_requests";
export declare const DNS_FAILURES = "dns_failures";
export declare const DNS_SUCCESSFUL_RESPONSES = "dns_successful_responses";
export declare const DNS_FAILED_RESPONSES = "dns_failed_responses";
export declare const DNS_TIMEOUTS = "dns_timeouts";
export declare const DNS_RESPONSES_NXDOMAIN = "dns_responses.nxdomain";
export declare const DNS_RESPONSES_SERVFAIL = "dns_responses.servfail";
export declare const DNS_RESPONSES_OTHER = "dns_responses.other";
export declare const DNS_SUCCESS_LATENCY_PERCENTILE = "dns_success_latency_percentile";
export declare const DNS_FAILURE_LATENCY_PERCENTILE = "dns_failure_latency_percentile";
