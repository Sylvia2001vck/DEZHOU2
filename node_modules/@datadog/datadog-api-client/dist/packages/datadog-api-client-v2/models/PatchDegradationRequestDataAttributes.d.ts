/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PatchDegradationRequestDataAttributesComponentsAffectedItems } from "./PatchDegradationRequestDataAttributesComponentsAffectedItems";
import { PatchDegradationRequestDataAttributesStatus } from "./PatchDegradationRequestDataAttributesStatus";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The supported attributes for updating a degradation.
 */
export declare class PatchDegradationRequestDataAttributes {
    /**
     * The components affected by the degradation.
     */
    "componentsAffected"?: Array<PatchDegradationRequestDataAttributesComponentsAffectedItems>;
    /**
     * The description of the degradation.
     */
    "description"?: string;
    /**
     * The status of the degradation.
     */
    "status"?: PatchDegradationRequestDataAttributesStatus;
    /**
     * The title of the degradation.
     */
    "title"?: string;
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
