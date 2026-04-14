/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScalarResponse } from "./ScalarResponse";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * A message containing one or more responses to scalar queries.
 */
export declare class ScalarFormulaQueryResponse {
    /**
     * A message containing the response to a scalar query.
     */
    "data"?: ScalarResponse;
    /**
     * An error generated when processing a request.
     */
    "errors"?: string;
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
