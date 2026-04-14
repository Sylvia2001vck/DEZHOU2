/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { State } from "./State";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Scorecard outcome for a single entity and rule.
 */
export declare class UpdateOutcomesAsyncRequestItem {
    /**
     * The unique reference for an IDP entity.
     */
    "entityReference": string;
    /**
     * Any remarks regarding the scorecard rule's evaluation. Supports HTML hyperlinks.
     */
    "remarks"?: string;
    /**
     * The unique ID for a scorecard rule.
     */
    "ruleId": string;
    /**
     * The state of the rule evaluation.
     */
    "state": State;
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
