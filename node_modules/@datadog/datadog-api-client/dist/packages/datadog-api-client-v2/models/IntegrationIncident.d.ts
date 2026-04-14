/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IntegrationIncidentFieldMappingsItems } from "./IntegrationIncidentFieldMappingsItems";
import { IntegrationIncidentSeverityConfig } from "./IntegrationIncidentSeverityConfig";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Incident integration settings
 */
export declare class IntegrationIncident {
    /**
     * Query for auto-escalation
     */
    "autoEscalationQuery"?: string;
    /**
     * Default incident commander
     */
    "defaultIncidentCommander"?: string;
    /**
     * Whether incident integration is enabled
     */
    "enabled"?: boolean;
    "fieldMappings"?: Array<IntegrationIncidentFieldMappingsItems>;
    /**
     * Incident type
     */
    "incidentType"?: string;
    "severityConfig"?: IntegrationIncidentSeverityConfig;
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
