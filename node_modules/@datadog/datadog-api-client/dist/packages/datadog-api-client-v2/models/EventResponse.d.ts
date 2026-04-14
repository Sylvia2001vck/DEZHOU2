/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventResponseAttributes } from "./EventResponseAttributes";
import { EventType } from "./EventType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The object description of an event after being processed and stored by Datadog.
 */
export declare class EventResponse {
    /**
     * The object description of an event response attribute.
     */
    "attributes"?: EventResponseAttributes;
    /**
     * the unique ID of the event.
     */
    "id"?: string;
    /**
     * Type of the event.
     */
    "type"?: EventType;
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
