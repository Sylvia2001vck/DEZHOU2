/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Link type.
 */
export declare type ServiceDefinitionV1ResourceType = typeof DOC | typeof WIKI | typeof RUNBOOK | typeof URL | typeof REPO | typeof DASHBOARD | typeof ONCALL | typeof CODE | typeof LINK | UnparsedObject;
export declare const DOC = "doc";
export declare const WIKI = "wiki";
export declare const RUNBOOK = "runbook";
export declare const URL = "url";
export declare const REPO = "repo";
export declare const DASHBOARD = "dashboard";
export declare const ONCALL = "oncall";
export declare const CODE = "code";
export declare const LINK = "link";
