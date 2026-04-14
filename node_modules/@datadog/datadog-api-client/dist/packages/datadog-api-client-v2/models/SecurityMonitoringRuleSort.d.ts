/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The sort parameters used for querying security monitoring rules.
 */
export declare type SecurityMonitoringRuleSort = typeof NAME | typeof CREATION_DATE | typeof UPDATE_DATE | typeof ENABLED | typeof TYPE | typeof HIGHEST_SEVERITY | typeof SOURCE | typeof NAME_DESCENDING | typeof CREATION_DATE_DESCENDING | typeof UPDATE_DATE_DESCENDING | typeof ENABLED_DESCENDING | typeof TYPE_DESCENDING | typeof HIGHEST_SEVERITY_DESCENDING | typeof SOURCE_DESCENDING | UnparsedObject;
export declare const NAME = "name";
export declare const CREATION_DATE = "creation_date";
export declare const UPDATE_DATE = "update_date";
export declare const ENABLED = "enabled";
export declare const TYPE = "type";
export declare const HIGHEST_SEVERITY = "highest_severity";
export declare const SOURCE = "source";
export declare const NAME_DESCENDING = "-name";
export declare const CREATION_DATE_DESCENDING = "-creation_date";
export declare const UPDATE_DATE_DESCENDING = "-update_date";
export declare const ENABLED_DESCENDING = "-enabled";
export declare const TYPE_DESCENDING = "-type";
export declare const HIGHEST_SEVERITY_DESCENDING = "-highest_severity";
export declare const SOURCE_DESCENDING = "-source";
