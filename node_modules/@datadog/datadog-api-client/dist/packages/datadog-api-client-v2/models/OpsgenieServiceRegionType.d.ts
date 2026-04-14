/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The region for the Opsgenie service.
 */
export declare type OpsgenieServiceRegionType = typeof US | typeof EU | typeof CUSTOM | UnparsedObject;
export declare const US = "us";
export declare const EU = "eu";
export declare const CUSTOM = "custom";
