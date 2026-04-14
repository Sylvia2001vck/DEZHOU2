/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { QueryEventFilteredUsersRequestDataAttributesEventQuery } from "./QueryEventFilteredUsersRequestDataAttributesEventQuery";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
export declare class QueryEventFilteredUsersRequestDataAttributes {
    "eventQuery"?: QueryEventFilteredUsersRequestDataAttributesEventQuery;
    "includeRowCount"?: boolean;
    "limit"?: number;
    "query"?: string;
    "selectColumns"?: Array<string>;
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
