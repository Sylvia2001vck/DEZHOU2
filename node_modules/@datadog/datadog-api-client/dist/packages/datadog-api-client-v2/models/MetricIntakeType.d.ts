/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The type of metric. The available types are `0` (unspecified), `1` (count), `2` (rate), and `3` (gauge).
 */
export declare type MetricIntakeType = typeof UNSPECIFIED | typeof COUNT | typeof RATE | typeof GAUGE | UnparsedObject;
export declare const UNSPECIFIED = 0;
export declare const COUNT = 1;
export declare const RATE = 2;
export declare const GAUGE = 3;
