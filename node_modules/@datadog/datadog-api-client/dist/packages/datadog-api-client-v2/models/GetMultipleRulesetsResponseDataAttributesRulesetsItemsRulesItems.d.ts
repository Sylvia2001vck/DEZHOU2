/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems";
import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData";
import { GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
export declare class GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems {
    "arguments"?: Array<GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems>;
    "category"?: string;
    "checksum"?: string;
    "code"?: string;
    "createdAt"?: Date;
    "createdBy"?: string;
    "cve"?: string;
    "cwe"?: string;
    "data": GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData;
    "description"?: string;
    "documentationUrl"?: string;
    "entityChecked"?: string;
    "isPublished"?: boolean;
    "isTesting"?: boolean;
    "language"?: string;
    "lastUpdatedAt"?: Date;
    "lastUpdatedBy"?: string;
    "name"?: string;
    "regex"?: string;
    "severity"?: string;
    "shortDescription"?: string;
    "shouldUseAiFix"?: boolean;
    "tests"?: Array<GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems>;
    "treeSitterQuery"?: string;
    "type"?: string;
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
