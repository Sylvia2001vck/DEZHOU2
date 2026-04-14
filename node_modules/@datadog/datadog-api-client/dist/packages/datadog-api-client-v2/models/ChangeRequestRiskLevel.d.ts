/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The risk level of the change request.
 */
export declare type ChangeRequestRiskLevel = typeof UNDEFINED | typeof LOW | typeof MEDIUM | typeof HIGH | UnparsedObject;
export declare const UNDEFINED = "UNDEFINED";
export declare const LOW = "LOW";
export declare const MEDIUM = "MEDIUM";
export declare const HIGH = "HIGH";
