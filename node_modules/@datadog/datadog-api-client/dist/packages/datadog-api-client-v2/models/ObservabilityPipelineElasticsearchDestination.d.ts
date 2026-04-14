/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineBufferOptions } from "./ObservabilityPipelineBufferOptions";
import { ObservabilityPipelineElasticsearchDestinationApiVersion } from "./ObservabilityPipelineElasticsearchDestinationApiVersion";
import { ObservabilityPipelineElasticsearchDestinationAuth } from "./ObservabilityPipelineElasticsearchDestinationAuth";
import { ObservabilityPipelineElasticsearchDestinationDataStream } from "./ObservabilityPipelineElasticsearchDestinationDataStream";
import { ObservabilityPipelineElasticsearchDestinationType } from "./ObservabilityPipelineElasticsearchDestinationType";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * The `elasticsearch` destination writes logs to an Elasticsearch cluster.
 *
 * **Supported pipeline types:** logs
 */
export declare class ObservabilityPipelineElasticsearchDestination {
    /**
     * The Elasticsearch API version to use. Set to `auto` to auto-detect.
     */
    "apiVersion"?: ObservabilityPipelineElasticsearchDestinationApiVersion;
    /**
     * Authentication settings for the Elasticsearch destination.
     * When `strategy` is `basic`, use `username_key` and `password_key` to reference credentials stored in environment variables or secrets.
     */
    "auth"?: ObservabilityPipelineElasticsearchDestinationAuth;
    /**
     * Configuration for buffer settings on destination components.
     */
    "buffer"?: ObservabilityPipelineBufferOptions;
    /**
     * The index to write logs to in Elasticsearch.
     */
    "bulkIndex"?: string;
    /**
     * Configuration options for writing to Elasticsearch Data Streams instead of a fixed index.
     */
    "dataStream"?: ObservabilityPipelineElasticsearchDestinationDataStream;
    /**
     * Name of the environment variable or secret that holds the Elasticsearch endpoint URL.
     */
    "endpointUrlKey"?: string;
    /**
     * The unique identifier for this component.
     */
    "id": string;
    /**
     * A list of component IDs whose output is used as the `input` for this component.
     */
    "inputs": Array<string>;
    /**
     * The destination type. The value should always be `elasticsearch`.
     */
    "type": ObservabilityPipelineElasticsearchDestinationType;
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
