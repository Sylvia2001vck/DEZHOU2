/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The current status of a content pack
 */
export declare type SecurityMonitoringContentPackStatus = typeof INSTALL | typeof ACTIVATE | typeof INITIALIZING | typeof ACTIVE | typeof WARNING | typeof BROKEN | UnparsedObject;
export declare const INSTALL = "install";
export declare const ACTIVATE = "activate";
export declare const INITIALIZING = "initializing";
export declare const ACTIVE = "active";
export declare const WARNING = "warning";
export declare const BROKEN = "broken";
