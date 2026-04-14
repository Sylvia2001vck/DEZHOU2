/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DORAFailureType } from "./DORAFailureType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Response after receiving a DORA incident event.
 */
export declare class DORAFailureResponseData {
    /**
     * The ID of the received DORA incident event.
     */
    "id": string;
    /**
     * JSON:API type for DORA incident events.
     */
    "type"?: DORAFailureType;
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
