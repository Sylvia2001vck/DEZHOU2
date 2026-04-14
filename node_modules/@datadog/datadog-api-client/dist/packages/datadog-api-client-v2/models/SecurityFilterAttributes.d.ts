/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityFilterExclusionFilterResponse } from "./SecurityFilterExclusionFilterResponse";
import { SecurityFilterFilteredDataType } from "./SecurityFilterFilteredDataType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The object describing a security filter.
 */
export declare class SecurityFilterAttributes {
    /**
     * The list of exclusion filters applied in this security filter.
     */
    "exclusionFilters"?: Array<SecurityFilterExclusionFilterResponse>;
    /**
     * The filtered data type.
     */
    "filteredDataType"?: SecurityFilterFilteredDataType;
    /**
     * Whether the security filter is the built-in filter.
     */
    "isBuiltin"?: boolean;
    /**
     * Whether the security filter is enabled.
     */
    "isEnabled"?: boolean;
    /**
     * The security filter name.
     */
    "name"?: string;
    /**
     * The security filter query. Logs accepted by this query will be accepted by this filter.
     */
    "query"?: string;
    /**
     * The version of the security filter.
     */
    "version"?: number;
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
