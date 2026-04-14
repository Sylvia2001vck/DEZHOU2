/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Teams response metadata.
 */
export declare class TeamsResponseMetaPagination {
    /**
     * The first offset.
     */
    "firstOffset"?: number;
    /**
     * The last offset.
     */
    "lastOffset"?: number;
    /**
     * Pagination limit.
     */
    "limit"?: number;
    /**
     * The next offset.
     */
    "nextOffset"?: number;
    /**
     * The offset.
     */
    "offset"?: number;
    /**
     * The previous offset.
     */
    "prevOffset"?: number;
    /**
     * Total results.
     */
    "total"?: number;
    /**
     * Offset type.
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
