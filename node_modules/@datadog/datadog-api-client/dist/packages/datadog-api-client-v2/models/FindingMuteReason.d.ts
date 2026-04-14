/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The reason why this finding is muted or unmuted.
 */
export declare type FindingMuteReason = typeof PENDING_FIX | typeof FALSE_POSITIVE | typeof ACCEPTED_RISK | typeof NO_PENDING_FIX | typeof HUMAN_ERROR | typeof NO_LONGER_ACCEPTED_RISK | typeof OTHER | UnparsedObject;
export declare const PENDING_FIX = "PENDING_FIX";
export declare const FALSE_POSITIVE = "FALSE_POSITIVE";
export declare const ACCEPTED_RISK = "ACCEPTED_RISK";
export declare const NO_PENDING_FIX = "NO_PENDING_FIX";
export declare const HUMAN_ERROR = "HUMAN_ERROR";
export declare const NO_LONGER_ACCEPTED_RISK = "NO_LONGER_ACCEPTED_RISK";
export declare const OTHER = "OTHER";
