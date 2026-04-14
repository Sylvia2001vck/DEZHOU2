/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The definition of Entity V3 Service Spec object.
 */
export declare class EntityV3ServiceSpec {
    /**
     * A list of components the service is a part of
     */
    "componentOf"?: Array<string>;
    /**
     * A list of components the service depends on.
     */
    "dependsOn"?: Array<string>;
    /**
     * The service's programming language.
     */
    "languages"?: Array<string>;
    /**
     * The lifecycle state of the component.
     */
    "lifecycle"?: string;
    /**
     * The importance of the component.
     */
    "tier"?: string;
    /**
     * The type of service.
     */
    "type"?: string;
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
