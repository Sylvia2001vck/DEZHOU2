/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeRequestDecisionCreateItem } from "./ChangeRequestDecisionCreateItem";
import { ChangeRequestDecisionUpdateData } from "./ChangeRequestDecisionUpdateData";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Request object to update a change request decision.
 */
export declare class ChangeRequestDecisionUpdateRequest {
    /**
     * Data object to update a change request decision.
     */
    "data": ChangeRequestDecisionUpdateData;
    /**
     * Included resources for the change request update.
     */
    "included"?: Array<ChangeRequestDecisionCreateItem>;
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
