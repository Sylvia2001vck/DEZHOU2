/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Included related resources optionally requested.
 */
export declare type ListTeamsInclude = typeof TEAM_LINKS | typeof USER_TEAM_PERMISSIONS | UnparsedObject;
export declare const TEAM_LINKS = "team_links";
export declare const USER_TEAM_PERMISSIONS = "user_team_permissions";
