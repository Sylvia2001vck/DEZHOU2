/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatastoreDataAttributes } from "./DatastoreDataAttributes";
import { DatastoreDataType } from "./DatastoreDataType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Core information about a datastore, including its unique identifier and attributes.
 */
export declare class DatastoreData {
    /**
     * Detailed information about a datastore.
     */
    "attributes"?: DatastoreDataAttributes;
    /**
     * The unique identifier of the datastore.
     */
    "id"?: string;
    /**
     * The resource type for datastores.
     */
    "type": DatastoreDataType;
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
