/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The rule type.
 */
export declare type SecurityMonitoringRuleTypeRead = typeof LOG_DETECTION | typeof INFRASTRUCTURE_CONFIGURATION | typeof WORKLOAD_SECURITY | typeof CLOUD_CONFIGURATION | typeof APPLICATION_SECURITY | typeof API_SECURITY | typeof WORKLOAD_ACTIVITY | UnparsedObject;
export declare const LOG_DETECTION = "log_detection";
export declare const INFRASTRUCTURE_CONFIGURATION = "infrastructure_configuration";
export declare const WORKLOAD_SECURITY = "workload_security";
export declare const CLOUD_CONFIGURATION = "cloud_configuration";
export declare const APPLICATION_SECURITY = "application_security";
export declare const API_SECURITY = "api_security";
export declare const WORKLOAD_ACTIVITY = "workload_activity";
