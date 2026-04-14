/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Object related to an incident that can be included in the response.
 */
export declare type IncidentImportRelatedObject = typeof LAST_MODIFIED_BY_USER | typeof CREATED_BY_USER | typeof COMMANDER_USER | typeof DECLARED_BY_USER | typeof INCIDENT_TYPE | UnparsedObject;
export declare const LAST_MODIFIED_BY_USER = "last_modified_by_user";
export declare const CREATED_BY_USER = "created_by_user";
export declare const COMMANDER_USER = "commander_user";
export declare const DECLARED_BY_USER = "declared_by_user";
export declare const INCIDENT_TYPE = "incident_type";
