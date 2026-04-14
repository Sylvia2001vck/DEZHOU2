/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Unit for quota enforcement in bytes for data size or events for count.
 */
export declare type ObservabilityPipelineQuotaProcessorLimitEnforceType = typeof BYTES | typeof EVENTS | UnparsedObject;
export declare const BYTES = "bytes";
export declare const EVENTS = "events";
