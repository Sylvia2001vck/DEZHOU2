/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Sorting options for roles.
 */
export declare type RolesSort = typeof NAME_ASCENDING | typeof NAME_DESCENDING | typeof MODIFIED_AT_ASCENDING | typeof MODIFIED_AT_DESCENDING | typeof USER_COUNT_ASCENDING | typeof USER_COUNT_DESCENDING | UnparsedObject;
export declare const NAME_ASCENDING = "name";
export declare const NAME_DESCENDING = "-name";
export declare const MODIFIED_AT_ASCENDING = "modified_at";
export declare const MODIFIED_AT_DESCENDING = "-modified_at";
export declare const USER_COUNT_ASCENDING = "user_count";
export declare const USER_COUNT_DESCENDING = "-user_count";
