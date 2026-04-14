/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The vulnerability status.
 */
export declare type VulnerabilityStatus = typeof OPEN | typeof MUTED | typeof REMEDIATED | typeof INPROGRESS | typeof AUTOCLOSED | UnparsedObject;
export declare const OPEN = "Open";
export declare const MUTED = "Muted";
export declare const REMEDIATED = "Remediated";
export declare const INPROGRESS = "InProgress";
export declare const AUTOCLOSED = "AutoClosed";
