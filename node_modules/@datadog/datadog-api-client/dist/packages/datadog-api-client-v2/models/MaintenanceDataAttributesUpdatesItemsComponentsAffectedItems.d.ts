/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PatchMaintenanceRequestDataAttributesComponentsAffectedItemsStatus } from "./PatchMaintenanceRequestDataAttributesComponentsAffectedItemsStatus";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
export declare class MaintenanceDataAttributesUpdatesItemsComponentsAffectedItems {
    /**
     * Identifier of the component affected at the time of the update.
     */
    "id": string;
    /**
     * The name of the component affected at the time of the update.
     */
    "name"?: string;
    /**
     * The status of the component.
     */
    "status": PatchMaintenanceRequestDataAttributesComponentsAffectedItemsStatus;
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
