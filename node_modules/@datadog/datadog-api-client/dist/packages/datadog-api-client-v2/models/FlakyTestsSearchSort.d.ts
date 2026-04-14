/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Parameter for sorting flaky test results. The default sort is by ascending Fully Qualified Name (FQN). The FQN is the concatenation of the test module, suite, and name.
 */
export declare type FlakyTestsSearchSort = typeof FQN_ASCENDING | typeof FQN_DESCENDING | typeof FIRST_FLAKED_ASCENDING | typeof FIRST_FLAKED_DESCENDING | typeof LAST_FLAKED_ASCENDING | typeof LAST_FLAKED_DESCENDING | typeof FAILURE_RATE_ASCENDING | typeof FAILURE_RATE_DESCENDING | typeof PIPELINES_FAILED_ASCENDING | typeof PIPELINES_FAILED_DESCENDING | typeof PIPELINES_DURATION_LOST_ASCENDING | typeof PIPELINES_DURATION_LOST_DESCENDING | UnparsedObject;
export declare const FQN_ASCENDING = "fqn";
export declare const FQN_DESCENDING = "-fqn";
export declare const FIRST_FLAKED_ASCENDING = "first_flaked";
export declare const FIRST_FLAKED_DESCENDING = "-first_flaked";
export declare const LAST_FLAKED_ASCENDING = "last_flaked";
export declare const LAST_FLAKED_DESCENDING = "-last_flaked";
export declare const FAILURE_RATE_ASCENDING = "failure_rate";
export declare const FAILURE_RATE_DESCENDING = "-failure_rate";
export declare const PIPELINES_FAILED_ASCENDING = "pipelines_failed";
export declare const PIPELINES_FAILED_DESCENDING = "-pipelines_failed";
export declare const PIPELINES_DURATION_LOST_ASCENDING = "pipelines_duration_lost";
export declare const PIPELINES_DURATION_LOST_DESCENDING = "-pipelines_duration_lost";
