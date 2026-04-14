/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EntityV3DatadogEventItem } from "./EntityV3DatadogEventItem";
import { EntityV3DatadogLogItem } from "./EntityV3DatadogLogItem";
import { EntityV3DatadogPerformance } from "./EntityV3DatadogPerformance";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Datadog product integrations for the datastore entity.
 */
export declare class EntityV3DatastoreDatadog {
    /**
     * Events associations.
     */
    "events"?: Array<EntityV3DatadogEventItem>;
    /**
     * Logs association.
     */
    "logs"?: Array<EntityV3DatadogLogItem>;
    /**
     * Performance stats association.
     */
    "performanceData"?: EntityV3DatadogPerformance;
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
