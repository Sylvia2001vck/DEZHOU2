/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Schema versions
 */
export declare type ServiceDefinitionSchemaVersions = typeof V1 | typeof V2 | typeof V2_1 | typeof V2_2 | UnparsedObject;
export declare const V1 = "v1";
export declare const V2 = "v2";
export declare const V2_1 = "v2.1";
export declare const V2_2 = "v2.2";
