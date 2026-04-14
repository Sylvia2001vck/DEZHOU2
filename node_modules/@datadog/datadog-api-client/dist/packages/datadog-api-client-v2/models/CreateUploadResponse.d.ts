/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateUploadResponseData } from "./CreateUploadResponseData";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Information about the upload created containing the upload ID and pre-signed URLs to PUT chunks of the CSV file to.
 */
export declare class CreateUploadResponse {
    /**
     * Upload ID and attributes of the created upload.
     */
    "data"?: CreateUploadResponseData;
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
