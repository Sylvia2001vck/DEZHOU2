/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail } from "./TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail";
import { TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAzureDetail } from "./TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAzureDetail";
import { TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail } from "./TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Cloud storage access configuration for the reference table data file.
 */
export declare class TableResultV2DataAttributesFileMetadataOneOfAccessDetails {
    /**
     * Amazon Web Services S3 storage access configuration.
     */
    "awsDetail"?: TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail;
    /**
     * Azure Blob Storage access configuration.
     */
    "azureDetail"?: TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAzureDetail;
    /**
     * Google Cloud Platform storage access configuration.
     */
    "gcpDetail"?: TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail;
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
