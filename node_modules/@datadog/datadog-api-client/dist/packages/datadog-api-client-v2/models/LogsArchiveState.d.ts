/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The state of the archive.
 */
export declare type LogsArchiveState = typeof UNKNOWN | typeof WORKING | typeof FAILING | typeof WORKING_AUTH_LEGACY | UnparsedObject;
export declare const UNKNOWN = "UNKNOWN";
export declare const WORKING = "WORKING";
export declare const FAILING = "FAILING";
export declare const WORKING_AUTH_LEGACY = "WORKING_AUTH_LEGACY";
