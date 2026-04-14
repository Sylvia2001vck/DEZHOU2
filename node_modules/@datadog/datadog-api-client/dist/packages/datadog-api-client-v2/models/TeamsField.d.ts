/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Supported teams field.
 */
export declare type TeamsField = typeof ID | typeof NAME | typeof HANDLE | typeof SUMMARY | typeof DESCRIPTION | typeof AVATAR | typeof BANNER | typeof VISIBLE_MODULES | typeof HIDDEN_MODULES | typeof CREATED_AT | typeof MODIFIED_AT | typeof USER_COUNT | typeof LINK_COUNT | typeof TEAM_LINKS | typeof USER_TEAM_PERMISSIONS | UnparsedObject;
export declare const ID = "id";
export declare const NAME = "name";
export declare const HANDLE = "handle";
export declare const SUMMARY = "summary";
export declare const DESCRIPTION = "description";
export declare const AVATAR = "avatar";
export declare const BANNER = "banner";
export declare const VISIBLE_MODULES = "visible_modules";
export declare const HIDDEN_MODULES = "hidden_modules";
export declare const CREATED_AT = "created_at";
export declare const MODIFIED_AT = "modified_at";
export declare const USER_COUNT = "user_count";
export declare const LINK_COUNT = "link_count";
export declare const TEAM_LINKS = "team_links";
export declare const USER_TEAM_PERMISSIONS = "user_team_permissions";
