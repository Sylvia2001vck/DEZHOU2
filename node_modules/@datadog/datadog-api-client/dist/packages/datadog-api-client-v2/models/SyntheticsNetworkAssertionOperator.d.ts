/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Assertion operator to apply.
 */
export declare type SyntheticsNetworkAssertionOperator = typeof IS | typeof IS_NOT | typeof LESS_THAN | typeof LESS_THAN_OR_EQUAL | typeof MORE_THAN | typeof MORE_THAN_OR_EQUAL | UnparsedObject;
export declare const IS = "is";
export declare const IS_NOT = "isNot";
export declare const LESS_THAN = "lessThan";
export declare const LESS_THAN_OR_EQUAL = "lessThanOrEqual";
export declare const MORE_THAN = "moreThan";
export declare const MORE_THAN_OR_EQUAL = "moreThanOrEqual";
