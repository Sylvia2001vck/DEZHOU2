/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Metadata related to paging information that is included in the response when querying the team hierarchy links
 */
export declare class TeamsHierarchyLinksResponseMetaPage {
    /**
     * First page number.
     */
    "firstNumber"?: number;
    /**
     * Last page number.
     */
    "lastNumber"?: number;
    /**
     * Next page number.
     */
    "nextNumber"?: number;
    /**
     * Page number.
     */
    "number"?: number;
    /**
     * Previous page number.
     */
    "prevNumber"?: number;
    /**
     * Page size.
     */
    "size"?: number;
    /**
     * Total number of results.
     */
    "total"?: number;
    /**
     * Pagination type.
     */
    "type"?: string;
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
