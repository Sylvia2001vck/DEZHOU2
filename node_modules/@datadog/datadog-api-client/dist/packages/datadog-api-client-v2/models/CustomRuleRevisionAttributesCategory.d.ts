/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Rule category
 */
export declare type CustomRuleRevisionAttributesCategory = typeof SECURITY | typeof BEST_PRACTICES | typeof CODE_STYLE | typeof ERROR_PRONE | typeof PERFORMANCE | UnparsedObject;
export declare const SECURITY = "SECURITY";
export declare const BEST_PRACTICES = "BEST_PRACTICES";
export declare const CODE_STYLE = "CODE_STYLE";
export declare const ERROR_PRONE = "ERROR_PRONE";
export declare const PERFORMANCE = "PERFORMANCE";
