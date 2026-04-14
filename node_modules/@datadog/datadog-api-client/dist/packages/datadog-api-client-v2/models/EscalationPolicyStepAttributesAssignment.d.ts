/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Specifies how this escalation step will assign targets (example `default` or `round-robin`).
 */
export declare type EscalationPolicyStepAttributesAssignment = typeof DEFAULT | typeof ROUND_ROBIN | UnparsedObject;
export declare const DEFAULT = "default";
export declare const ROUND_ROBIN = "round-robin";
