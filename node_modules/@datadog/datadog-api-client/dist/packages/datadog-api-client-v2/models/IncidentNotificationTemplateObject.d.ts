/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentNotificationTemplateAttributes } from "./IncidentNotificationTemplateAttributes";
import { IncidentNotificationTemplateRelationships } from "./IncidentNotificationTemplateRelationships";
import { IncidentNotificationTemplateType } from "./IncidentNotificationTemplateType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * A notification template object for inclusion in other resources.
 */
export declare class IncidentNotificationTemplateObject {
    /**
     * The notification template's attributes.
     */
    "attributes"?: IncidentNotificationTemplateAttributes;
    /**
     * The unique identifier of the notification template.
     */
    "id": string;
    /**
     * The notification template's resource relationships.
     */
    "relationships"?: IncidentNotificationTemplateRelationships;
    /**
     * Notification templates resource type.
     */
    "type": IncidentNotificationTemplateType;
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
