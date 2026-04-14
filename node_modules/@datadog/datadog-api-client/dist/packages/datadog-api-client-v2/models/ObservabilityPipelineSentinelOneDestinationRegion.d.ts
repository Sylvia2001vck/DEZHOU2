/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The SentinelOne region to send logs to.
 */
export declare type ObservabilityPipelineSentinelOneDestinationRegion = typeof US | typeof EU | typeof CA | typeof DATA_SET_US | UnparsedObject;
export declare const US = "us";
export declare const EU = "eu";
export declare const CA = "ca";
export declare const DATA_SET_US = "data_set_us";
