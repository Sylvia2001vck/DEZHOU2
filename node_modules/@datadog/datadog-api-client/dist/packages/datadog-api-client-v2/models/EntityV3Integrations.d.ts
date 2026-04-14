/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EntityV3DatadogIntegrationOpsgenie } from "./EntityV3DatadogIntegrationOpsgenie";
import { EntityV3DatadogIntegrationPagerduty } from "./EntityV3DatadogIntegrationPagerduty";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * A base schema for defining third-party integrations.
 */
export declare class EntityV3Integrations {
    /**
     * An Opsgenie integration schema.
     */
    "opsgenie"?: EntityV3DatadogIntegrationOpsgenie;
    /**
     * A PagerDuty integration schema.
     */
    "pagerduty"?: EntityV3DatadogIntegrationPagerduty;
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
