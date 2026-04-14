/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeResourceType } from "./DowntimeResourceType";
import { DowntimeUpdateRequestAttributes } from "./DowntimeUpdateRequestAttributes";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Object to update a downtime.
 */
export declare class DowntimeUpdateRequestData {
    /**
     * Attributes of the downtime to update.
     */
    "attributes": DowntimeUpdateRequestAttributes;
    /**
     * ID of this downtime.
     */
    "id": string;
    /**
     * Downtime resource type.
     */
    "type": DowntimeResourceType;
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
