/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Type of the replacement text. None means no replacement.
 * hash means the data will be stubbed. replacement_string means that
 * one can chose a text to replace the data. partial_replacement_from_beginning
 * allows a user to partially replace the data from the beginning, and
 * partial_replacement_from_end on the other hand, allows to replace data from
 * the end.
 */
export declare type SensitiveDataScannerTextReplacementType = typeof NONE | typeof HASH | typeof REPLACEMENT_STRING | typeof PARTIAL_REPLACEMENT_FROM_BEGINNING | typeof PARTIAL_REPLACEMENT_FROM_END | UnparsedObject;
export declare const NONE = "none";
export declare const HASH = "hash";
export declare const REPLACEMENT_STRING = "replacement_string";
export declare const PARTIAL_REPLACEMENT_FROM_BEGINNING = "partial_replacement_from_beginning";
export declare const PARTIAL_REPLACEMENT_FROM_END = "partial_replacement_from_end";
