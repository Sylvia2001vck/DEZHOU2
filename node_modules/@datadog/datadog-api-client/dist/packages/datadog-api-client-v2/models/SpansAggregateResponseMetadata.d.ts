/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SpansAggregateResponseStatus } from "./SpansAggregateResponseStatus";
import { SpansWarning } from "./SpansWarning";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The metadata associated with a request.
 */
export declare class SpansAggregateResponseMetadata {
    /**
     * The time elapsed in milliseconds.
     */
    "elapsed"?: number;
    /**
     * The identifier of the request.
     */
    "requestId"?: string;
    /**
     * The status of the response.
     */
    "status"?: SpansAggregateResponseStatus;
    /**
     * A list of warnings (non fatal errors) encountered, partial results might be returned if
     * warnings are present in the response.
     */
    "warnings"?: Array<SpansWarning>;
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
