/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeRequestChangeType } from "./ChangeRequestChangeType";
import { ChangeRequestRiskLevel } from "./ChangeRequestRiskLevel";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Attributes of a change request response.
 */
export declare class ChangeRequestResponseAttributes {
    /**
     * Timestamp of when the change request was archived.
     */
    "archivedAt"?: Date;
    /**
     * Custom attributes of the change request as key-value pairs.
     */
    "attributes": {
        [key: string]: Array<string>;
    };
    /**
     * The UUID of the linked incident.
     */
    "changeRequestLinkedIncidentUuid": string;
    /**
     * The maintenance window query for the change request.
     */
    "changeRequestMaintenanceWindowQuery": string;
    /**
     * The plan associated with the change request.
     */
    "changeRequestPlan": string;
    /**
     * The risk level of the change request.
     */
    "changeRequestRisk": ChangeRequestRiskLevel;
    /**
     * The type of the change request.
     */
    "changeRequestType": ChangeRequestChangeType;
    /**
     * Timestamp of when the change request was closed.
     */
    "closedAt"?: Date;
    /**
     * Timestamp of when the change request was created.
     */
    "createdAt": Date;
    /**
     * The source from which the change request was created.
     */
    "creationSource": string;
    /**
     * The description of the change request.
     */
    "description": string;
    /**
     * The planned end date of the change request.
     */
    "endDate"?: Date;
    /**
     * The human-readable key of the change request.
     */
    "key": string;
    /**
     * Timestamp of when the change request was last modified.
     */
    "modifiedAt": Date;
    /**
     * The notebook ID associated with the change request plan.
     */
    "planNotebookId": number;
    /**
     * The priority of the change request.
     */
    "priority": string;
    /**
     * The project UUID associated with the change request.
     */
    "projectId": string;
    /**
     * The planned start date of the change request.
     */
    "startDate"?: Date;
    /**
     * The current status of the change request.
     */
    "status": string;
    /**
     * The title of the change request.
     */
    "title": string;
    /**
     * The case type.
     */
    "type": string;
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
