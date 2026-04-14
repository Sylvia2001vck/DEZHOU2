/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The vulnerability type of the finding.
 */
export declare type FindingVulnerabilityType = typeof MISCONFIGURATION | typeof ATTACK_PATH | typeof IDENTITY_RISK | typeof API_SECURITY | UnparsedObject;
export declare const MISCONFIGURATION = "misconfiguration";
export declare const ATTACK_PATH = "attack_path";
export declare const IDENTITY_RISK = "identity_risk";
export declare const API_SECURITY = "api_security";
