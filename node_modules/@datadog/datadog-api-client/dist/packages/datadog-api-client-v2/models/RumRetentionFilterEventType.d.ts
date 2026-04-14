/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The type of RUM events to filter on.
 */
export declare type RumRetentionFilterEventType = typeof SESSION | typeof VIEW | typeof ACTION | typeof ERROR | typeof RESOURCE | typeof LONG_TASK | typeof VITAL | UnparsedObject;
export declare const SESSION = "session";
export declare const VIEW = "view";
export declare const ACTION = "action";
export declare const ERROR = "error";
export declare const RESOURCE = "resource";
export declare const LONG_TASK = "long_task";
export declare const VITAL = "vital";
