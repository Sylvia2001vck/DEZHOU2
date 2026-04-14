/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Event category identifying the type of event.
 */
export declare type EventCategory = typeof CHANGE | typeof ALERT | UnparsedObject;
export declare const CHANGE = "change";
export declare const ALERT = "alert";
