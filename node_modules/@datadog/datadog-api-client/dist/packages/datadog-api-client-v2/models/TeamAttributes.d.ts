/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Team attributes
 */
export declare class TeamAttributes {
    /**
     * Unicode representation of the avatar for the team, limited to a single grapheme
     */
    "avatar"?: string;
    /**
     * Banner selection for the team
     */
    "banner"?: number;
    /**
     * Creation date of the team
     */
    "createdAt"?: Date;
    /**
     * Free-form markdown description/content for the team's homepage
     */
    "description"?: string;
    /**
     * The team's identifier
     */
    "handle": string;
    /**
     * Collection of hidden modules for the team
     */
    "hiddenModules"?: Array<string>;
    /**
     * Whether the team is managed from an external source
     */
    "isManaged"?: boolean;
    /**
     * The number of links belonging to the team
     */
    "linkCount"?: number;
    /**
     * Modification date of the team
     */
    "modifiedAt"?: Date;
    /**
     * The name of the team
     */
    "name": string;
    /**
     * A brief summary of the team, derived from the `description`
     */
    "summary"?: string;
    /**
     * The number of users belonging to the team
     */
    "userCount"?: number;
    /**
     * Collection of visible modules for the team
     */
    "visibleModules"?: Array<string>;
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
