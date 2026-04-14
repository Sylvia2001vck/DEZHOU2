/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeRequestChangeType } from "./ChangeRequestChangeType";
import { ChangeRequestRiskLevel } from "./ChangeRequestRiskLevel";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Attributes for creating a change request.
 */
export declare class ChangeRequestCreateAttributes {
    /**
     * The UUID of an incident to link to the change request.
     */
    "changeRequestLinkedIncidentUuid"?: string;
    /**
     * The maintenance window query for the change request.
     */
    "changeRequestMaintenanceWindowQuery"?: string;
    /**
     * The plan associated with the change request.
     */
    "changeRequestPlan"?: string;
    /**
     * The risk level of the change request.
     */
    "changeRequestRisk"?: ChangeRequestRiskLevel;
    /**
     * The type of the change request.
     */
    "changeRequestType"?: ChangeRequestChangeType;
    /**
     * The description of the change request.
     */
    "description"?: string;
    /**
     * The planned end date of the change request.
     */
    "endDate"?: Date;
    /**
     * The project UUID to associate with the change request.
     */
    "projectId"?: string;
    /**
     * A list of team handles to request decisions from.
     */
    "requestedTeams"?: Array<string>;
    /**
     * The planned start date of the change request.
     */
    "startDate"?: Date;
    /**
     * The title of the change request.
     */
    "title": string;
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
