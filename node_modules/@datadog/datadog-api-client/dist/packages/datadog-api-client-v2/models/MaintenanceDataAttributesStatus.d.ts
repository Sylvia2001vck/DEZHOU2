/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The status of the maintenance.
 */
export declare type MaintenanceDataAttributesStatus = typeof SCHEDULED | typeof IN_PROGRESS | typeof COMPLETED | UnparsedObject;
export declare const SCHEDULED = "scheduled";
export declare const IN_PROGRESS = "in_progress";
export declare const COMPLETED = "completed";
