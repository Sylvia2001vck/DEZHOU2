/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringContentPackActivation } from "./SecurityMonitoringContentPackActivation";
import { SecurityMonitoringContentPackIntegrationStatus } from "./SecurityMonitoringContentPackIntegrationStatus";
import { SecurityMonitoringContentPackStatus } from "./SecurityMonitoringContentPackStatus";
import { SecurityMonitoringContentPackTimestampBucket } from "./SecurityMonitoringContentPackTimestampBucket";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Attributes of a content pack state
 */
export declare class SecurityMonitoringContentPackStateAttributes {
    /**
     * Whether the cloud SIEM index configuration is incorrect (only applies to certain pricing models)
     */
    "cloudSiemIndexIncorrect": boolean;
    /**
     * The activation status of a content pack
     */
    "cpActivation": SecurityMonitoringContentPackActivation;
    /**
     * Whether filters (Security Filters or Index Query depending on the pricing model) are configured for logs
     */
    "filtersConfiguredForLogs": boolean;
    /**
     * The installation status of the related integration
     */
    "integrationInstalledStatus"?: SecurityMonitoringContentPackIntegrationStatus;
    /**
     * Timestamp bucket indicating when logs were last collected
     */
    "logsLastCollected": SecurityMonitoringContentPackTimestampBucket;
    /**
     * Whether logs have been seen from any index
     */
    "logsSeenFromAnyIndex": boolean;
    /**
     * The current status of a content pack
     */
    "state": SecurityMonitoringContentPackStatus;
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
