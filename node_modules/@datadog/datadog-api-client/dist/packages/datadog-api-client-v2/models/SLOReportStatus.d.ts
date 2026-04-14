/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The status of the SLO report job.
 */
export declare type SLOReportStatus = typeof IN_PROGRESS | typeof COMPLETED | typeof COMPLETED_WITH_ERRORS | typeof FAILED | UnparsedObject;
export declare const IN_PROGRESS = "in_progress";
export declare const COMPLETED = "completed";
export declare const COMPLETED_WITH_ERRORS = "completed_with_errors";
export declare const FAILED = "failed";
