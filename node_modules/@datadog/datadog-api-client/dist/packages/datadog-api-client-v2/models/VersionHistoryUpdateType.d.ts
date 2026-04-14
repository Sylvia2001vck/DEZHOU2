/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The type of change.
 */
export declare type VersionHistoryUpdateType = typeof CREATE | typeof UPDATE | typeof DELETE | UnparsedObject;
export declare const CREATE = "create";
export declare const UPDATE = "update";
export declare const DELETE = "delete";
