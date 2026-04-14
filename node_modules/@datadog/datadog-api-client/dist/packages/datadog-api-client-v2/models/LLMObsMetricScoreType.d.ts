/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Type of metric recorded for an LLM Observability experiment.
 */
export declare type LLMObsMetricScoreType = typeof SCORE | typeof CATEGORICAL | typeof BOOLEAN | typeof JSON | UnparsedObject;
export declare const SCORE = "score";
export declare const CATEGORICAL = "categorical";
export declare const BOOLEAN = "boolean";
export declare const JSON = "json";
