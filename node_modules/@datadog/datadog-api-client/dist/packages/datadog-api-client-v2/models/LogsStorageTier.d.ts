/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Specifies storage type as indexes, online-archives or flex
 */
export declare type LogsStorageTier = typeof INDEXES | typeof ONLINE_ARCHIVES | typeof FLEX | UnparsedObject;
export declare const INDEXES = "indexes";
export declare const ONLINE_ARCHIVES = "online-archives";
export declare const FLEX = "flex";
