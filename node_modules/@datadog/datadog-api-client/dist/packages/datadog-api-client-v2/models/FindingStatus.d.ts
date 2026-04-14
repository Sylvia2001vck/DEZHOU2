/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The status of the finding.
 */
export declare type FindingStatus = typeof CRITICAL | typeof HIGH | typeof MEDIUM | typeof LOW | typeof INFO | UnparsedObject;
export declare const CRITICAL = "critical";
export declare const HIGH = "high";
export declare const MEDIUM = "medium";
export declare const LOW = "low";
export declare const INFO = "info";
