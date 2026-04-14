/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * For TCP tests, the TCP traceroute strategy.
 */
export declare type SyntheticsNetworkTestRequestTCPMethod = typeof PREFER_SACK | typeof SYN | typeof SACK | UnparsedObject;
export declare const PREFER_SACK = "prefer_sack";
export declare const SYN = "syn";
export declare const SACK = "sack";
