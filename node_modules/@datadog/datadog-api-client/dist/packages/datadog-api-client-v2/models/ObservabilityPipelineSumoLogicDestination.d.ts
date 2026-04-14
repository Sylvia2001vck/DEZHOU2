/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineBufferOptions } from "./ObservabilityPipelineBufferOptions";
import { ObservabilityPipelineSumoLogicDestinationEncoding } from "./ObservabilityPipelineSumoLogicDestinationEncoding";
import { ObservabilityPipelineSumoLogicDestinationHeaderCustomFieldsItem } from "./ObservabilityPipelineSumoLogicDestinationHeaderCustomFieldsItem";
import { ObservabilityPipelineSumoLogicDestinationType } from "./ObservabilityPipelineSumoLogicDestinationType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The `sumo_logic` destination forwards logs to Sumo Logic.
 *
 * **Supported pipeline types:** logs
 */
export declare class ObservabilityPipelineSumoLogicDestination {
    /**
     * Configuration for buffer settings on destination components.
     */
    "buffer"?: ObservabilityPipelineBufferOptions;
    /**
     * The output encoding format.
     */
    "encoding"?: ObservabilityPipelineSumoLogicDestinationEncoding;
    /**
     * Name of the environment variable or secret that holds the Sumo Logic HTTP endpoint URL.
     */
    "endpointUrlKey"?: string;
    /**
     * A list of custom headers to include in the request to Sumo Logic.
     */
    "headerCustomFields"?: Array<ObservabilityPipelineSumoLogicDestinationHeaderCustomFieldsItem>;
    /**
     * Optional override for the host name header.
     */
    "headerHostName"?: string;
    /**
     * Optional override for the source category header.
     */
    "headerSourceCategory"?: string;
    /**
     * Optional override for the source name header.
     */
    "headerSourceName"?: string;
    /**
     * The unique identifier for this component.
     */
    "id": string;
    /**
     * A list of component IDs whose output is used as the `input` for this component.
     */
    "inputs": Array<string>;
    /**
     * The destination type. The value should always be `sumo_logic`.
     */
    "type": ObservabilityPipelineSumoLogicDestinationType;
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
