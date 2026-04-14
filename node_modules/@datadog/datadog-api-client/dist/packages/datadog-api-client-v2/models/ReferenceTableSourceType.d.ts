/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The source type for reference table data. Includes all possible source types that can appear in responses.
 */
export declare type ReferenceTableSourceType = typeof LOCAL_FILE | typeof S3 | typeof GCS | typeof AZURE | typeof SERVICENOW | typeof SALESFORCE | typeof DATABRICKS | typeof SNOWFLAKE | UnparsedObject;
export declare const LOCAL_FILE = "LOCAL_FILE";
export declare const S3 = "S3";
export declare const GCS = "GCS";
export declare const AZURE = "AZURE";
export declare const SERVICENOW = "SERVICENOW";
export declare const SALESFORCE = "SALESFORCE";
export declare const DATABRICKS = "DATABRICKS";
export declare const SNOWFLAKE = "SNOWFLAKE";
