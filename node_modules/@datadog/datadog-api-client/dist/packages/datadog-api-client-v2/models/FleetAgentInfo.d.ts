/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetAgentInfoAttributes } from "./FleetAgentInfoAttributes";
import { FleetAgentInfoResourceType } from "./FleetAgentInfoResourceType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Represents detailed information about a specific Datadog Agent.
 */
export declare class FleetAgentInfo {
    /**
     * Attributes for agent information.
     */
    "attributes": FleetAgentInfoAttributes;
    /**
     * The unique agent key identifier.
     */
    "id": string;
    /**
     * The type of Agent info resource.
     */
    "type": FleetAgentInfoResourceType;
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
