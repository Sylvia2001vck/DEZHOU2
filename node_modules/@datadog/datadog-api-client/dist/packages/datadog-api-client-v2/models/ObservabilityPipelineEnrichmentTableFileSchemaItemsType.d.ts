/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Declares allowed data types for enrichment table columns.
 */
export declare type ObservabilityPipelineEnrichmentTableFileSchemaItemsType = typeof STRING | typeof BOOLEAN | typeof INTEGER | typeof FLOAT | typeof DATE | typeof TIMESTAMP | UnparsedObject;
export declare const STRING = "string";
export declare const BOOLEAN = "boolean";
export declare const INTEGER = "integer";
export declare const FLOAT = "float";
export declare const DATE = "date";
export declare const TIMESTAMP = "timestamp";
