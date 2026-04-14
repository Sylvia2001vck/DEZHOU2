/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The user's status.
 */
export declare type UserAttributesStatus = typeof ACTIVE | typeof DEACTIVATED | typeof PENDING | UnparsedObject;
export declare const ACTIVE = "active";
export declare const DEACTIVATED = "deactivated";
export declare const PENDING = "pending";
