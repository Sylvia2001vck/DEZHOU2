/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetConfigurationFile } from "./FleetConfigurationFile";
import { FleetDetectedIntegration } from "./FleetDetectedIntegration";
import { FleetIntegrationDetails } from "./FleetIntegrationDetails";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Integrations organized by their status.
 */
export declare class FleetIntegrationsByStatus {
    /**
     * Configuration files for integrations.
     */
    "configurationFiles"?: Array<FleetConfigurationFile>;
    /**
     * The unique agent key identifier.
     */
    "datadogAgentKey"?: string;
    /**
     * Integrations with errors.
     */
    "errorIntegrations"?: Array<FleetIntegrationDetails>;
    /**
     * Detected but not configured integrations.
     */
    "missingIntegrations"?: Array<FleetDetectedIntegration>;
    /**
     * Integrations with warnings.
     */
    "warningIntegrations"?: Array<FleetIntegrationDetails>;
    /**
     * Integrations that are working correctly.
     */
    "workingIntegrations"?: Array<FleetIntegrationDetails>;
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
