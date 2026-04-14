/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Severity associated with this critical asset. Either an explicit severity can be set, or the severity can be increased or decreased.
 */
export declare type SecurityMonitoringCriticalAssetSeverity = typeof INFO | typeof LOW | typeof MEDIUM | typeof HIGH | typeof CRITICAL | typeof INCREASE | typeof DECREASE | UnparsedObject;
export declare const INFO = "info";
export declare const LOW = "low";
export declare const MEDIUM = "medium";
export declare const HIGH = "high";
export declare const CRITICAL = "critical";
export declare const INCREASE = "increase";
export declare const DECREASE = "decrease";
