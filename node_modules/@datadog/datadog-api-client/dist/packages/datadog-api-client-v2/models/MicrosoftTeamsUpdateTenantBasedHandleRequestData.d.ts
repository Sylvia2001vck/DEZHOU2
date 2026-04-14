/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MicrosoftTeamsTenantBasedHandleAttributes } from "./MicrosoftTeamsTenantBasedHandleAttributes";
import { MicrosoftTeamsTenantBasedHandleType } from "./MicrosoftTeamsTenantBasedHandleType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Tenant-based handle data from a response.
 */
export declare class MicrosoftTeamsUpdateTenantBasedHandleRequestData {
    /**
     * Tenant-based handle attributes.
     */
    "attributes": MicrosoftTeamsTenantBasedHandleAttributes;
    /**
     * Specifies the tenant-based handle resource type.
     */
    "type": MicrosoftTeamsTenantBasedHandleType;
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
