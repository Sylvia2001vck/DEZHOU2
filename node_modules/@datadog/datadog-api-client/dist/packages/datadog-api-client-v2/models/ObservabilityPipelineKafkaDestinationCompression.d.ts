/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Compression codec for Kafka messages.
 */
export declare type ObservabilityPipelineKafkaDestinationCompression = typeof NONE | typeof GZIP | typeof SNAPPY | typeof LZ4 | typeof ZSTD | UnparsedObject;
export declare const NONE = "none";
export declare const GZIP = "gzip";
export declare const SNAPPY = "snappy";
export declare const LZ4 = "lz4";
export declare const ZSTD = "zstd";
