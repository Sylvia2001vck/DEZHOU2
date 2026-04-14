/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseInsightsItems } from "./CaseInsightsItems";
import { FindingJiraIssue } from "./FindingJiraIssue";
import { RelationshipToUser } from "./RelationshipToUser";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Attributes of the case.
 */
export declare class FindingCaseResponseDataAttributes {
    /**
     * Timestamp of when the case was archived.
     */
    "archivedAt"?: Date;
    /**
     * Relationship to user.
     */
    "assignedTo"?: RelationshipToUser;
    "attributes"?: {
        [key: string]: Array<string>;
    };
    /**
     * Timestamp of when the case was closed.
     */
    "closedAt"?: Date;
    /**
     * Timestamp of when the case was created.
     */
    "createdAt"?: Date;
    /**
     * Source of the case creation.
     */
    "creationSource"?: string;
    /**
     * Description of the case.
     */
    "description"?: string;
    /**
     * Due date of the case.
     */
    "dueDate"?: string;
    /**
     * Insights of the case.
     */
    "insights"?: Array<CaseInsightsItems>;
    /**
     * Jira issue associated with the case.
     */
    "jiraIssue"?: FindingJiraIssue;
    /**
     * Key of the case.
     */
    "key"?: string;
    /**
     * Timestamp of when the case was last modified.
     */
    "modifiedAt"?: Date;
    /**
     * Priority of the case.
     */
    "priority"?: string;
    /**
     * Status of the case.
     */
    "status"?: string;
    /**
     * Status group of the case.
     */
    "statusGroup"?: string;
    /**
     * Status name of the case.
     */
    "statusName"?: string;
    /**
     * Title of the case.
     */
    "title"?: string;
    /**
     * Type of the case. For security cases, this is always "SECURITY".
     */
    "type"?: string;
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
