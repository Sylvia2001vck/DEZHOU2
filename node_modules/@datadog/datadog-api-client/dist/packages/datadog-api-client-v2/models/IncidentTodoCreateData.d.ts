/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTodoAttributes } from "./IncidentTodoAttributes";
import { IncidentTodoType } from "./IncidentTodoType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Incident todo data for a create request.
 */
export declare class IncidentTodoCreateData {
    /**
     * Incident todo's attributes.
     */
    "attributes": IncidentTodoAttributes;
    /**
     * Todo resource type.
     */
    "type": IncidentTodoType;
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
