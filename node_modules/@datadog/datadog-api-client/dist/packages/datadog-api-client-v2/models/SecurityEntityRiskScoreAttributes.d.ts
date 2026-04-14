/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityEntityConfigRisks } from "./SecurityEntityConfigRisks";
import { SecurityEntityMetadata } from "./SecurityEntityMetadata";
import { SecurityEntityRiskScoreAttributesSeverity } from "./SecurityEntityRiskScoreAttributesSeverity";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Attributes of an entity risk score
 */
export declare class SecurityEntityRiskScoreAttributes {
    /**
     * Configuration risks associated with the entity
     */
    "configRisks": SecurityEntityConfigRisks;
    /**
     * Unique identifier for the entity
     */
    "entityId": string;
    /**
     * Metadata about the entity from cloud providers
     */
    "entityMetadata": SecurityEntityMetadata;
    /**
     * Human-readable name of the entity
     */
    "entityName"?: string;
    /**
     * Cloud providers associated with the entity
     */
    "entityProviders": Array<string>;
    /**
     * Roles associated with the entity
     */
    "entityRoles"?: Array<string>;
    /**
     * Type of the entity (e.g., aws_iam_user, aws_ec2_instance)
     */
    "entityType": string;
    /**
     * Timestamp when the entity was first detected (Unix milliseconds)
     */
    "firstDetected": number;
    /**
     * Title of the most recent signal detected for this entity
     */
    "lastActivityTitle": string;
    /**
     * Timestamp when the entity was last detected (Unix milliseconds)
     */
    "lastDetected": number;
    /**
     * Current risk score for the entity
     */
    "riskScore": number;
    /**
     * Change in risk score compared to previous period
     */
    "riskScoreEvolution": number;
    /**
     * Severity level based on risk score
     */
    "severity": SecurityEntityRiskScoreAttributesSeverity;
    /**
     * Number of security signals detected for this entity
     */
    "signalsDetected": number;
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
