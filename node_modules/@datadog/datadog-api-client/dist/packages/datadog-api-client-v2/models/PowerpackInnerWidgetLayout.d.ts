/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Powerpack inner widget layout.
 */
export declare class PowerpackInnerWidgetLayout {
    /**
     * The height of the widget. Should be a non-negative integer.
     */
    "height": number;
    /**
     * The width of the widget. Should be a non-negative integer.
     */
    "width": number;
    /**
     * The position of the widget on the x (horizontal) axis. Should be a non-negative integer.
     */
    "x": number;
    /**
     * The position of the widget on the y (vertical) axis. Should be a non-negative integer.
     */
    "y": number;
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
