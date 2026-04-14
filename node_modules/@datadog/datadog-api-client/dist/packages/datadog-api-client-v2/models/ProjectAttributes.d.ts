/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProjectColumnsConfig } from "./ProjectColumnsConfig";
import { ProjectSettings } from "./ProjectSettings";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Project attributes
 */
export declare class ProjectAttributes {
    /**
     * Project columns configuration
     */
    "columnsConfig"?: ProjectColumnsConfig;
    /**
     * List of enabled custom case type IDs
     */
    "enabledCustomCaseTypes"?: Array<string>;
    /**
     * The project's key
     */
    "key"?: string;
    /**
     * Project's name
     */
    "name"?: string;
    /**
     * Whether the project is restricted
     */
    "restricted"?: boolean;
    /**
     * Project settings
     */
    "settings"?: ProjectSettings;
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
