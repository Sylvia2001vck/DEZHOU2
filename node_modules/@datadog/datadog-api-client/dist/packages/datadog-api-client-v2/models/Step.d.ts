/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CompletionGate } from "./CompletionGate";
import { ErrorHandler } from "./ErrorHandler";
import { OutboundEdge } from "./OutboundEdge";
import { Parameter } from "./Parameter";
import { ReadinessGate } from "./ReadinessGate";
import { StepDisplay } from "./StepDisplay";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * A Step is a sub-component of a workflow. Each Step performs an action.
 */
export declare class Step {
    /**
     * The unique identifier of an action.
     */
    "actionId": string;
    /**
     * Used to create conditions before running subsequent actions.
     */
    "completionGate"?: CompletionGate;
    /**
     * The unique identifier of a connection defined in the spec.
     */
    "connectionLabel"?: string;
    /**
     * The definition of `StepDisplay` object.
     */
    "display"?: StepDisplay;
    /**
     * The `Step` `errorHandlers`.
     */
    "errorHandlers"?: Array<ErrorHandler>;
    /**
     * Name of the step.
     */
    "name": string;
    /**
     * A list of subsequent actions to run.
     */
    "outboundEdges"?: Array<OutboundEdge>;
    /**
     * A list of inputs for an action.
     */
    "parameters"?: Array<Parameter>;
    /**
     * Used to merge multiple branches into a single branch.
     */
    "readinessGate"?: ReadinessGate;
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
