/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The definition of `UCConfigPairDataAttributesConfigsItems` object.
 */
export declare class UCConfigPairDataAttributesConfigsItems {
    /**
     * The `items` `account_id`.
     */
    "accountId"?: string;
    /**
     * The `items` `client_id`.
     */
    "clientId"?: string;
    /**
     * The `items` `created_at`.
     */
    "createdAt"?: string;
    /**
     * The `items` `dataset_type`.
     */
    "datasetType"?: string;
    /**
     * The `items` `error_messages`.
     */
    "errorMessages"?: Array<string>;
    /**
     * The `items` `export_name`.
     */
    "exportName"?: string;
    /**
     * The `items` `export_path`.
     */
    "exportPath"?: string;
    /**
     * The `items` `id`.
     */
    "id"?: string;
    /**
     * The `items` `months`.
     */
    "months"?: number;
    /**
     * The `items` `scope`.
     */
    "scope"?: string;
    /**
     * The `items` `status`.
     */
    "status"?: string;
    /**
     * The `items` `status_updated_at`.
     */
    "statusUpdatedAt"?: string;
    /**
     * The `items` `storage_account`.
     */
    "storageAccount"?: string;
    /**
     * The `items` `storage_container`.
     */
    "storageContainer"?: string;
    /**
     * The `items` `updated_at`.
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
