/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentFieldAttributes } from "./IncidentFieldAttributes";
import { IncidentNonDatadogCreator } from "./IncidentNonDatadogCreator";
import { IncidentNotificationHandle } from "./IncidentNotificationHandle";
import { IncidentSeverity } from "./IncidentSeverity";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The incident's attributes from an import response.
 */
export declare class IncidentImportResponseAttributes {
    /**
     * Timestamp when the incident was archived.
     */
    "archived"?: Date;
    /**
     * The incident case ID.
     */
    "caseId"?: number;
    /**
     * Timestamp when the incident was created.
     */
    "created"?: Date;
    /**
     * UUID of the user who created the incident.
     */
    "createdByUuid"?: string;
    /**
     * A unique key used to ensure idempotent incident creation.
     */
    "creationIdempotencyKey"?: string;
    /**
     * Timestamp when customers were no longer impacted by the incident.
     */
    "customerImpactEnd"?: Date;
    /**
     * A summary of the impact customers experienced during the incident.
     */
    "customerImpactScope"?: string;
    /**
     * Timestamp when customers began to be impacted by the incident.
     */
    "customerImpactStart"?: Date;
    /**
     * Timestamp when the incident was declared.
     */
    "declared"?: Date;
    /**
     * UUID of the user who declared the incident.
     */
    "declaredByUuid"?: string;
    /**
     * Timestamp when the incident was detected.
     */
    "detected"?: Date;
    /**
     * A condensed view of the user-defined fields attached to incidents.
     */
    "fields"?: {
        [key: string]: IncidentFieldAttributes;
    };
    /**
     * A unique identifier that represents an incident type.
     */
    "incidentTypeUuid"?: string;
    /**
     * A flag indicating whether the incident is a test incident.
     */
    "isTest"?: boolean;
    /**
     * UUID of the user who last modified the incident.
     */
    "lastModifiedByUuid"?: string;
    /**
     * Timestamp when the incident was last modified.
     */
    "modified"?: Date;
    /**
     * Incident's non Datadog creator.
     */
    "nonDatadogCreator"?: IncidentNonDatadogCreator;
    /**
     * Notification handles that are notified of the incident during update.
     */
    "notificationHandles"?: Array<IncidentNotificationHandle>;
    /**
     * The monotonically increasing integer ID for the incident.
     */
    "publicId"?: number;
    /**
     * Timestamp when the incident's state was last changed from active or stable to resolved or completed.
     */
    "resolved"?: Date;
    /**
     * The incident severity.
     */
    "severity"?: IncidentSeverity;
    /**
     * The state of the incident.
     */
    "state"?: string;
    /**
     * The title of the incident that summarizes what happened.
     */
    "title": string;
    /**
     * The incident visibility status.
     */
    "visibility"?: string;
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
