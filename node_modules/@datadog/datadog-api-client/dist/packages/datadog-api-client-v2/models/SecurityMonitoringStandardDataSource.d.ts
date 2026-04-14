/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Source of events, either logs, audit trail, or Datadog events.
 */
export declare type SecurityMonitoringStandardDataSource = typeof LOGS | typeof AUDIT | typeof APP_SEC_SPANS | typeof SPANS | typeof SECURITY_RUNTIME | typeof NETWORK | typeof EVENTS | UnparsedObject;
export declare const LOGS = "logs";
export declare const AUDIT = "audit";
export declare const APP_SEC_SPANS = "app_sec_spans";
export declare const SPANS = "spans";
export declare const SECURITY_RUNTIME = "security_runtime";
export declare const NETWORK = "network";
export declare const EVENTS = "events";
