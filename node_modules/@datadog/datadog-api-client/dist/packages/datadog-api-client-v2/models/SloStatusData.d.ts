/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SloStatusDataAttributes } from "./SloStatusDataAttributes";
import { SloStatusType } from "./SloStatusType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The data portion of the SLO status response.
 */
export declare class SloStatusData {
    /**
     * The attributes of the SLO status.
     */
    "attributes": SloStatusDataAttributes;
    /**
     * The ID of the SLO.
     */
    "id": string;
    /**
     * The type of the SLO status resource.
     */
    "type": SloStatusType;
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
