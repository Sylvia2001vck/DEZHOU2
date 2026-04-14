/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Static library vulnerability location.
 */
export declare class DependencyLocation {
    /**
     * Location column end.
     */
    "columnEnd": number;
    /**
     * Location column start.
     */
    "columnStart": number;
    /**
     * Location file name.
     */
    "fileName": string;
    /**
     * Location line end.
     */
    "lineEnd": number;
    /**
     * Location line start.
     */
    "lineStart": number;
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
