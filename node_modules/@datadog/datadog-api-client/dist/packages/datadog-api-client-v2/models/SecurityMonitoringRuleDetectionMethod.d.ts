/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The detection method.
 */
export declare type SecurityMonitoringRuleDetectionMethod = typeof THRESHOLD | typeof NEW_VALUE | typeof ANOMALY_DETECTION | typeof IMPOSSIBLE_TRAVEL | typeof HARDCODED | typeof THIRD_PARTY | typeof ANOMALY_THRESHOLD | typeof SEQUENCE_DETECTION | UnparsedObject;
export declare const THRESHOLD = "threshold";
export declare const NEW_VALUE = "new_value";
export declare const ANOMALY_DETECTION = "anomaly_detection";
export declare const IMPOSSIBLE_TRAVEL = "impossible_travel";
export declare const HARDCODED = "hardcoded";
export declare const THIRD_PARTY = "third_party";
export declare const ANOMALY_THRESHOLD = "anomaly_threshold";
export declare const SEQUENCE_DETECTION = "sequence_detection";
