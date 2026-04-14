/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Object related to an incident.
 */
export declare type IncidentRelatedObject = typeof USERS | typeof ATTACHMENTS | UnparsedObject;
export declare const USERS = "users";
export declare const ATTACHMENTS = "attachments";
