/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Specifies the type of escalation target (example `users`, `schedules`, or `teams`).
 */
export declare type EscalationPolicyStepTargetType = typeof USERS | typeof SCHEDULES | typeof TEAMS | UnparsedObject;
export declare const USERS = "users";
export declare const SCHEDULES = "schedules";
export declare const TEAMS = "teams";
