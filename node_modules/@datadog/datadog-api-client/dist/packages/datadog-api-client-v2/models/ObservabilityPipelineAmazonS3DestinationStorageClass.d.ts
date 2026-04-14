/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * S3 storage class.
 */
export declare type ObservabilityPipelineAmazonS3DestinationStorageClass = typeof STANDARD | typeof REDUCED_REDUNDANCY | typeof INTELLIGENT_TIERING | typeof STANDARD_IA | typeof EXPRESS_ONEZONE | typeof ONEZONE_IA | typeof GLACIER | typeof GLACIER_IR | typeof DEEP_ARCHIVE | UnparsedObject;
export declare const STANDARD = "STANDARD";
export declare const REDUCED_REDUNDANCY = "REDUCED_REDUNDANCY";
export declare const INTELLIGENT_TIERING = "INTELLIGENT_TIERING";
export declare const STANDARD_IA = "STANDARD_IA";
export declare const EXPRESS_ONEZONE = "EXPRESS_ONEZONE";
export declare const ONEZONE_IA = "ONEZONE_IA";
export declare const GLACIER = "GLACIER";
export declare const GLACIER_IR = "GLACIER_IR";
export declare const DEEP_ARCHIVE = "DEEP_ARCHIVE";
