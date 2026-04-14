/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The state of the rule evaluation.
 */
export declare type State = typeof PASS | typeof FAIL | typeof SKIP | UnparsedObject;
export declare const PASS = "pass";
export declare const FAIL = "fail";
export declare const SKIP = "skip";
