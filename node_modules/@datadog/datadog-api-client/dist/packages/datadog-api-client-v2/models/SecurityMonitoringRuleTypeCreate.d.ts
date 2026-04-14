/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The rule type.
 */
export declare type SecurityMonitoringRuleTypeCreate = typeof API_SECURITY | typeof APPLICATION_SECURITY | typeof LOG_DETECTION | typeof WORKLOAD_ACTIVITY | typeof WORKLOAD_SECURITY | UnparsedObject;
export declare const API_SECURITY = "api_security";
export declare const APPLICATION_SECURITY = "application_security";
export declare const LOG_DETECTION = "log_detection";
export declare const WORKLOAD_ACTIVITY = "workload_activity";
export declare const WORKLOAD_SECURITY = "workload_security";
