/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The type of error that occurred during file processing. This field provides high-level error categories for easier troubleshooting and is only present when there are errors.
 */
export declare type TableResultV2DataAttributesFileMetadataCloudStorageErrorType = typeof TABLE_SCHEMA_ERROR | typeof FILE_FORMAT_ERROR | typeof CONFIGURATION_ERROR | typeof QUOTA_EXCEEDED | typeof CONFLICT_ERROR | typeof VALIDATION_ERROR | typeof STATE_ERROR | typeof OPERATION_ERROR | typeof SYSTEM_ERROR | UnparsedObject;
export declare const TABLE_SCHEMA_ERROR = "TABLE_SCHEMA_ERROR";
export declare const FILE_FORMAT_ERROR = "FILE_FORMAT_ERROR";
export declare const CONFIGURATION_ERROR = "CONFIGURATION_ERROR";
export declare const QUOTA_EXCEEDED = "QUOTA_EXCEEDED";
export declare const CONFLICT_ERROR = "CONFLICT_ERROR";
export declare const VALIDATION_ERROR = "VALIDATION_ERROR";
export declare const STATE_ERROR = "STATE_ERROR";
export declare const OPERATION_ERROR = "OPERATION_ERROR";
export declare const SYSTEM_ERROR = "SYSTEM_ERROR";
