/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The current state of the flaky test.
 */
export declare type FlakyTestAttributesFlakyState = typeof ACTIVE | typeof FIXED | typeof QUARANTINED | typeof DISABLED | UnparsedObject;
export declare const ACTIVE = "active";
export declare const FIXED = "fixed";
export declare const QUARANTINED = "quarantined";
export declare const DISABLED = "disabled";
