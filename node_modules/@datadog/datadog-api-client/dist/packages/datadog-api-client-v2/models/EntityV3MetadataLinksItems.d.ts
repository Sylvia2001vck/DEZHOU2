/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The definition of Entity V3 Metadata Links Items object.
 */
export declare class EntityV3MetadataLinksItems {
    /**
     * Link name.
     */
    "name": string;
    /**
     * Link provider.
     */
    "provider"?: string;
    /**
     * Link type.
     */
    "type": string;
    /**
     * Link URL.
     */
    "url": string;
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
