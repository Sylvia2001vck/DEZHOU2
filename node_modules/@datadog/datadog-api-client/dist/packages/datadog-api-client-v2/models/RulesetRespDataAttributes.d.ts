/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RulesetRespDataAttributesCreated } from "./RulesetRespDataAttributesCreated";
import { RulesetRespDataAttributesModified } from "./RulesetRespDataAttributesModified";
import { RulesetRespDataAttributesRulesItems } from "./RulesetRespDataAttributesRulesItems";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The definition of `RulesetRespDataAttributes` object.
 */
export declare class RulesetRespDataAttributes {
    /**
     * The definition of `RulesetRespDataAttributesCreated` object.
     */
    "created": RulesetRespDataAttributesCreated;
    /**
     * The `attributes` `enabled`.
     */
    "enabled": boolean;
    /**
     * The `attributes` `last_modified_user_uuid`.
     */
    "lastModifiedUserUuid": string;
    /**
     * The definition of `RulesetRespDataAttributesModified` object.
     */
    "modified": RulesetRespDataAttributesModified;
    /**
     * The `attributes` `name`.
     */
    "name": string;
    /**
     * The `attributes` `position`.
     */
    "position": number;
    /**
     * The `attributes` `processing_status`.
     */
    "processingStatus"?: string;
    /**
     * The `attributes` `rules`.
     */
    "rules": Array<RulesetRespDataAttributesRulesItems>;
    /**
     * The `attributes` `version`.
     */
    "version": number;
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
