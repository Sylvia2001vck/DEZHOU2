/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Type of file operation to perform on the target configuration file.
 * - `merge-patch`: Merges the provided patch data with the existing configuration file.
 *   Creates the file if it doesn't exist.
 * - `delete`: Removes the specified configuration file from the target hosts.
 */
export declare type FleetDeploymentFileOp = typeof MERGE_PATCH | typeof DELETE | UnparsedObject;
export declare const MERGE_PATCH = "merge-patch";
export declare const DELETE = "delete";
