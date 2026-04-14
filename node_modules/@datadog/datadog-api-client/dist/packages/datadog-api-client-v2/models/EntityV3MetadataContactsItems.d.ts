/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The definition of Entity V3 Metadata Contacts Items object.
 */
export declare class EntityV3MetadataContactsItems {
    /**
     * Contact value.
     */
    "contact": string;
    /**
     * Contact name.
     */
    "name"?: string;
    /**
     * Contact type.
     */
    "type": string;
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
