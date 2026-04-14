/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorUserTemplateTemplateVariablesItems } from "./MonitorUserTemplateTemplateVariablesItems";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Attributes for a monitor user template.
 */
export declare class MonitorUserTemplateRequestAttributes {
    /**
     * A brief description of the monitor user template.
     */
    "description"?: string;
    /**
     * A valid monitor definition in the same format as the [V1 Monitor API](https://docs.datadoghq.com/api/latest/monitors/#create-a-monitor).
     */
    "monitorDefinition": {
        [key: string]: any;
    };
    /**
     * The definition of `MonitorUserTemplateTags` object.
     */
    "tags": Array<string>;
    /**
     * The definition of `MonitorUserTemplateTemplateVariables` object.
     */
    "templateVariables"?: Array<MonitorUserTemplateTemplateVariablesItems>;
    /**
     * The title of the monitor user template.
     */
    "title": string;
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
