/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Configures which RUM events are processed and stored for the application.
 */
export declare type RUMEventProcessingState = typeof ALL | typeof ERROR_FOCUSED_MODE | typeof NONE | UnparsedObject;
export declare const ALL = "ALL";
export declare const ERROR_FOCUSED_MODE = "ERROR_FOCUSED_MODE";
export declare const NONE = "NONE";
