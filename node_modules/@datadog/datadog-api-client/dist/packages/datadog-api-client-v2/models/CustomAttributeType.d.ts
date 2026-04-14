/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Custom attributes type
 */
export declare type CustomAttributeType = typeof URL | typeof TEXT | typeof NUMBER | typeof SELECT | UnparsedObject;
export declare const URL = "URL";
export declare const TEXT = "TEXT";
export declare const NUMBER = "NUMBER";
export declare const SELECT = "SELECT";
