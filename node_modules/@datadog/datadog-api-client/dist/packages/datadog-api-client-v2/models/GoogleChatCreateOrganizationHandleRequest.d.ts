/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GoogleChatCreateOrganizationHandleRequestData } from "./GoogleChatCreateOrganizationHandleRequestData";
import { GoogleChatOrganizationHandleType } from "./GoogleChatOrganizationHandleType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Create organization handle request.
 */
export declare class GoogleChatCreateOrganizationHandleRequest {
    /**
     * Organization handle data for a create request.
     */
    "data": GoogleChatCreateOrganizationHandleRequestData;
    /**
     * Organization handle resource type.
     */
    "type": GoogleChatOrganizationHandleType;
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
