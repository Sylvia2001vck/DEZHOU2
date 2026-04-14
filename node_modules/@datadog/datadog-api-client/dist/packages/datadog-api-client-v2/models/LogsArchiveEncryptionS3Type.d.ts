/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Type of S3 encryption for a destination.
 */
export declare type LogsArchiveEncryptionS3Type = typeof NO_OVERRIDE | typeof SSE_S3 | typeof SSE_KMS | UnparsedObject;
export declare const NO_OVERRIDE = "NO_OVERRIDE";
export declare const SSE_S3 = "SSE_S3";
export declare const SSE_KMS = "SSE_KMS";
