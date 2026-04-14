/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The Elasticsearch API version to use. Set to `auto` to auto-detect.
 */
export declare type ObservabilityPipelineElasticsearchDestinationApiVersion = typeof AUTO | typeof V6 | typeof V7 | typeof V8 | UnparsedObject;
export declare const AUTO = "auto";
export declare const V6 = "v6";
export declare const V7 = "v7";
export declare const V8 = "v8";
