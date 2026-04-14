/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Specifies the format of the e-mail that is sent for On-Call notifications
 */
export declare type NotificationChannelEmailFormatType = typeof HTML | typeof TEXT | UnparsedObject;
export declare const HTML = "html";
export declare const TEXT = "text";
