/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Team link attributes
 */
export declare class TeamLinkAttributes {
    /**
     * The link's label
     */
    "label": string;
    /**
     * The link's position, used to sort links for the team
     */
    "position"?: number;
    /**
     * ID of the team the link is associated with
     */
    "teamId"?: string;
    /**
     * The URL for the link
     */
    "url": string;
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
