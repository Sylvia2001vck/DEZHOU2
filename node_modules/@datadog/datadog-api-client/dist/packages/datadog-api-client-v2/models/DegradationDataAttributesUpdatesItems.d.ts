/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateDegradationRequestDataAttributesStatus } from "./CreateDegradationRequestDataAttributesStatus";
import { DegradationDataAttributesUpdatesItemsComponentsAffectedItems } from "./DegradationDataAttributesUpdatesItemsComponentsAffectedItems";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
export declare class DegradationDataAttributesUpdatesItems {
    /**
     * The components affected at the time of the update.
     */
    "componentsAffected"?: Array<DegradationDataAttributesUpdatesItemsComponentsAffectedItems>;
    /**
     * Timestamp of when the update was created.
     */
    "createdAt"?: Date;
    /**
     * Description of the update.
     */
    "description"?: string;
    /**
     * Identifier of the update.
     */
    "id"?: string;
    /**
     * Timestamp of when the update was last modified.
     */
    "modifiedAt"?: Date;
    /**
     * Timestamp of when the update started.
     */
    "startedAt"?: Date;
    /**
     * The status of the degradation.
     */
    "status"?: CreateDegradationRequestDataAttributesStatus;
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
