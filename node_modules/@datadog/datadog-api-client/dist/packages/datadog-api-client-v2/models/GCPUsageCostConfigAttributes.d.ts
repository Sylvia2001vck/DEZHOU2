/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Attributes for a Google Cloud Usage Cost config.
 */
export declare class GCPUsageCostConfigAttributes {
    /**
     * The Google Cloud account ID.
     */
    "accountId": string;
    /**
     * The Google Cloud bucket name used to store the Usage Cost export.
     */
    "bucketName": string;
    /**
     * The timestamp when the Google Cloud Usage Cost config was created.
     */
    "createdAt"?: string;
    /**
     * The export dataset name used for the Google Cloud Usage Cost Report.
     */
    "dataset": string;
    /**
     * The error messages for the Google Cloud Usage Cost config.
     */
    "errorMessages"?: Array<string>;
    /**
     * The export prefix used for the Google Cloud Usage Cost Report.
     */
    "exportPrefix": string;
    /**
     * The name of the Google Cloud Usage Cost Report.
     */
    "exportProjectName": string;
    /**
     * The number of months the report has been backfilled.
     */
    "months"?: number;
    /**
     * The `project_id` of the Google Cloud Usage Cost report.
     */
    "projectId"?: string;
    /**
     * The unique Google Cloud service account email.
     */
    "serviceAccount": string;
    /**
     * The status of the Google Cloud Usage Cost config.
     */
    "status": string;
    /**
     * The timestamp when the Google Cloud Usage Cost config status was updated.
     */
    "statusUpdatedAt"?: string;
    /**
     * The timestamp when the Google Cloud Usage Cost config status was updated.
     */
    "updatedAt"?: string;
    /**
     * A container for additional, undeclared properties.
     * This is a holder for any undeclared properties as specified with
     * the 'additionalProperties' keyword in the OAS document.
     */
    "additionalProperties"?: {
        [key: string]: any;
    };
    /**
     * @ignore
     */
    "_unparsed"?: boolean;
    /**
     * @ignore
     */
    static readonly attributeTypeMap: AttributeTypeMap;
    /**
     * @ignore
     */
    static getAttributeTypeMap(): AttributeTypeMap;
    constructor();
}
