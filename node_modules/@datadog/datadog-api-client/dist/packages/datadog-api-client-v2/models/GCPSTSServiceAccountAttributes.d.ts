/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GCPMetricNamespaceConfig } from "./GCPMetricNamespaceConfig";
import { GCPMonitoredResourceConfig } from "./GCPMonitoredResourceConfig";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Attributes associated with your service account.
 */
export declare class GCPSTSServiceAccountAttributes {
    /**
     * Tags to be associated with GCP metrics and service checks from your account.
     */
    "accountTags"?: Array<string>;
    /**
     * Silence monitors for expected GCE instance shutdowns.
     */
    "automute"?: boolean;
    /**
     * Your service account email address.
     */
    "clientEmail"?: string;
    /**
     * List of filters to limit the Cloud Run revisions that are pulled into Datadog by using tags.
     * Only Cloud Run revision resources that apply to specified filters are imported into Datadog.
     * **Note:** This field is deprecated. Instead, use `monitored_resource_configs` with `type=cloud_run_revision`
     */
    "cloudRunRevisionFilters"?: Array<string>;
    /**
     * List of filters to limit the VM instances that are pulled into Datadog by using tags.
     * Only VM instance resources that apply to specified filters are imported into Datadog.
     * **Note:** This field is deprecated. Instead, use `monitored_resource_configs` with `type=gce_instance`
     */
    "hostFilters"?: Array<string>;
    /**
     * When enabled, Datadog will activate the Cloud Security Monitoring product for this service account. Note: This requires resource_collection_enabled to be set to true.
     */
    "isCspmEnabled"?: boolean;
    /**
     * When enabled, Datadog collects metrics where location is explicitly stated as "global" or where location information cannot be deduced from GCP labels.
     */
    "isGlobalLocationEnabled"?: boolean;
    /**
     * When enabled, Datadog applies the `X-Goog-User-Project` header, attributing Google Cloud billing and quota usage to the project being monitored rather than the default service account project.
     */
    "isPerProjectQuotaEnabled"?: boolean;
    /**
     * When enabled, Datadog scans for all resource change data in your Google Cloud environment.
     */
    "isResourceChangeCollectionEnabled"?: boolean;
    /**
     * When enabled, Datadog will attempt to collect Security Command Center Findings. Note: This requires additional permissions on the service account.
     */
    "isSecurityCommandCenterEnabled"?: boolean;
    /**
     * Configurations for GCP metric namespaces.
     */
    "metricNamespaceConfigs"?: Array<GCPMetricNamespaceConfig>;
    /**
     * Configurations for GCP monitored resources.
     */
    "monitoredResourceConfigs"?: Array<GCPMonitoredResourceConfig>;
    /**
     * Configurations for GCP location filtering, such as region, multi-region, or zone. Only monitored resources that match the specified regions are imported into Datadog. By default, Datadog collects from all locations.
     */
    "regionFilterConfigs"?: Array<string>;
    /**
     * When enabled, Datadog scans for all resources in your GCP environment.
     */
    "resourceCollectionEnabled"?: boolean;
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
