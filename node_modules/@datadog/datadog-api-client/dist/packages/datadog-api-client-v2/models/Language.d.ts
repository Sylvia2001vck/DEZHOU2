/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Programming language
 */
export declare type Language = typeof PYTHON | typeof JAVASCRIPT | typeof TYPESCRIPT | typeof JAVA | typeof GO | typeof YAML | typeof RUBY | typeof CSHARP | typeof PHP | typeof KOTLIN | typeof SWIFT | UnparsedObject;
export declare const PYTHON = "PYTHON";
export declare const JAVASCRIPT = "JAVASCRIPT";
export declare const TYPESCRIPT = "TYPESCRIPT";
export declare const JAVA = "JAVA";
export declare const GO = "GO";
export declare const YAML = "YAML";
export declare const RUBY = "RUBY";
export declare const CSHARP = "CSHARP";
export declare const PHP = "PHP";
export declare const KOTLIN = "KOTLIN";
export declare const SWIFT = "SWIFT";
