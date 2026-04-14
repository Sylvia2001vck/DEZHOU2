/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringRuleCaseActionOptions } from "./SecurityMonitoringRuleCaseActionOptions";
import { SecurityMonitoringRuleCaseActionType } from "./SecurityMonitoringRuleCaseActionType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Action to perform when a signal is triggered. Only available for Application Security rule type.
 */
export declare class SecurityMonitoringRuleCaseAction {
    /**
     * Options for the rule action
     */
    "options"?: SecurityMonitoringRuleCaseActionOptions;
    /**
     * The action type.
     */
    "type"?: SecurityMonitoringRuleCaseActionType;
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
