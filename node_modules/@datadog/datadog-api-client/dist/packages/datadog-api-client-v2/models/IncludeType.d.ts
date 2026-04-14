/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Supported include types.
 */
export declare type IncludeType = typeof SCHEMA | typeof RAW_SCHEMA | typeof ONCALL | typeof INCIDENT | typeof RELATION | UnparsedObject;
export declare const SCHEMA = "schema";
export declare const RAW_SCHEMA = "raw_schema";
export declare const ONCALL = "oncall";
export declare const INCIDENT = "incident";
export declare const RELATION = "relation";
