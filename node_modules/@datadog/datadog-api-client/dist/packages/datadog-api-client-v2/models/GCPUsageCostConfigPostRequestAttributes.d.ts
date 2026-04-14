/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Attributes for Google Cloud Usage Cost config post request.
 */
export declare class GCPUsageCostConfigPostRequestAttributes {
    /**
     * The Google Cloud account ID.
     */
    "billingAccountId": string;
    /**
     * The Google Cloud bucket name used to store the Usage Cost export.
     */
    "bucketName": string;
    /**
     * The export dataset name used for the Google Cloud Usage Cost report.
     */
    "exportDatasetName": string;
    /**
     * The export prefix used for the Google Cloud Usage Cost report.
     */
    "exportPrefix"?: string;
    /**
     * The name of the Google Cloud Usage Cost report.
     */
    "exportProjectName": string;
    /**
     * The unique Google Cloud service account email.
     */
    "serviceAccount": string;
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
