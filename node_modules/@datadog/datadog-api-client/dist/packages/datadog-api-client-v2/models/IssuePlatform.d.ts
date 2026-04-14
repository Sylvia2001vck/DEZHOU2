/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Platform associated with the issue.
 */
export declare type IssuePlatform = typeof ANDROID | typeof BACKEND | typeof BROWSER | typeof FLUTTER | typeof IOS | typeof REACT_NATIVE | typeof ROKU | typeof UNKNOWN | UnparsedObject;
export declare const ANDROID = "ANDROID";
export declare const BACKEND = "BACKEND";
export declare const BROWSER = "BROWSER";
export declare const FLUTTER = "FLUTTER";
export declare const IOS = "IOS";
export declare const REACT_NATIVE = "REACT_NATIVE";
export declare const ROKU = "ROKU";
export declare const UNKNOWN = "UNKNOWN";
