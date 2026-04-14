/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * HTTP authentication strategy.
 */
export declare type ObservabilityPipelineHttpClientDestinationAuthStrategy = typeof NONE | typeof BASIC | typeof BEARER | UnparsedObject;
export declare const NONE = "none";
export declare const BASIC = "basic";
export declare const BEARER = "bearer";
