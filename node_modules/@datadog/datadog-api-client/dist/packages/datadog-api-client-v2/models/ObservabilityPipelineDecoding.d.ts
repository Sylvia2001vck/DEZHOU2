/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The decoding format used to interpret incoming logs.
 */
export declare type ObservabilityPipelineDecoding = typeof DECODE_BYTES | typeof DECODE_GELF | typeof DECODE_JSON | typeof DECODE_SYSLOG | UnparsedObject;
export declare const DECODE_BYTES = "bytes";
export declare const DECODE_GELF = "gelf";
export declare const DECODE_JSON = "json";
export declare const DECODE_SYSLOG = "syslog";
