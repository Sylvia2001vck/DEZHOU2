/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Link type.
 */
export declare type ServiceDefinitionV2Dot1LinkType = typeof DOC | typeof REPO | typeof RUNBOOK | typeof DASHBOARD | typeof OTHER | UnparsedObject;
export declare const DOC = "doc";
export declare const REPO = "repo";
export declare const RUNBOOK = "runbook";
export declare const DASHBOARD = "dashboard";
export declare const OTHER = "other";
