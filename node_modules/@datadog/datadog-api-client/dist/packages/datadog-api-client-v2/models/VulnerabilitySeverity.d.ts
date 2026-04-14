/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The vulnerability severity.
 */
export declare type VulnerabilitySeverity = typeof UNKNOWN | typeof NONE | typeof LOW | typeof MEDIUM | typeof HIGH | typeof CRITICAL | UnparsedObject;
export declare const UNKNOWN = "Unknown";
export declare const NONE = "None";
export declare const LOW = "Low";
export declare const MEDIUM = "Medium";
export declare const HIGH = "High";
export declare const CRITICAL = "Critical";
