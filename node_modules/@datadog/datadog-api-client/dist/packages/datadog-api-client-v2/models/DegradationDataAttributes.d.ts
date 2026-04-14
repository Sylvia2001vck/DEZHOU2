/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateDegradationRequestDataAttributesStatus } from "./CreateDegradationRequestDataAttributesStatus";
import { DegradationDataAttributesComponentsAffectedItems } from "./DegradationDataAttributesComponentsAffectedItems";
import { DegradationDataAttributesSource } from "./DegradationDataAttributesSource";
import { DegradationDataAttributesUpdatesItems } from "./DegradationDataAttributesUpdatesItems";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The attributes of a degradation.
 */
export declare class DegradationDataAttributes {
    /**
     * Components affected by the degradation.
     */
    "componentsAffected"?: Array<DegradationDataAttributesComponentsAffectedItems>;
    /**
     * Timestamp of when the degradation was created.
     */
    "createdAt"?: Date;
    /**
     * Description of the degradation.
     */
    "description"?: string;
    /**
     * Timestamp of when the degradation was last modified.
     */
    "modifiedAt"?: Date;
    /**
     * The source of the degradation.
     */
    "source"?: DegradationDataAttributesSource;
    /**
     * The status of the degradation.
     */
    "status"?: CreateDegradationRequestDataAttributesStatus;
    /**
     * Title of the degradation.
     */
    "title"?: string;
    /**
     * Past updates made to the degradation.
     */
    "updates"?: Array<DegradationDataAttributesUpdatesItems>;
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
