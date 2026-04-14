import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { AWSCloudAuthPersonaMappingCreateRequest } from "../models/AWSCloudAuthPersonaMappingCreateRequest";
import { AWSCloudAuthPersonaMappingResponse } from "../models/AWSCloudAuthPersonaMappingResponse";
import { AWSCloudAuthPersonaMappingsResponse } from "../models/AWSCloudAuthPersonaMappingsResponse";
export declare class CloudAuthenticationApiRequestFactory extends BaseAPIRequestFactory {
    createAWSCloudAuthPersonaMapping(body: AWSCloudAuthPersonaMappingCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteAWSCloudAuthPersonaMapping(personaMappingId: string, _options?: Configuration): Promise<RequestContext>;
    getAWSCloudAuthPersonaMapping(personaMappingId: string, _options?: Configuration): Promise<RequestContext>;
    listAWSCloudAuthPersonaMappings(_options?: Configuration): Promise<RequestContext>;
}
export declare class CloudAuthenticationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAWSCloudAuthPersonaMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
    createAWSCloudAuthPersonaMapping(response: ResponseContext): Promise<AWSCloudAuthPersonaMappingResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAWSCloudAuthPersonaMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteAWSCloudAuthPersonaMapping(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAWSCloudAuthPersonaMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAWSCloudAuthPersonaMapping(response: ResponseContext): Promise<AWSCloudAuthPersonaMappingResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAWSCloudAuthPersonaMappings
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAWSCloudAuthPersonaMappings(response: ResponseContext): Promise<AWSCloudAuthPersonaMappingsResponse>;
}
export interface CloudAuthenticationApiCreateAWSCloudAuthPersonaMappingRequest {
    /**
     * @type AWSCloudAuthPersonaMappingCreateRequest
     */
    body: AWSCloudAuthPersonaMappingCreateRequest;
}
export interface CloudAuthenticationApiDeleteAWSCloudAuthPersonaMappingRequest {
    /**
     * The ID of the persona mapping
     * @type string
     */
    personaMappingId: string;
}
export interface CloudAuthenticationApiGetAWSCloudAuthPersonaMappingRequest {
    /**
     * The ID of the persona mapping
     * @type string
     */
    personaMappingId: string;
}
export declare class CloudAuthenticationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CloudAuthenticationApiRequestFactory, responseProcessor?: CloudAuthenticationApiResponseProcessor);
    /**
     * Create an AWS cloud authentication persona mapping. This endpoint associates an AWS IAM principal with a Datadog user.
     * @param param The request object
     */
    createAWSCloudAuthPersonaMapping(param: CloudAuthenticationApiCreateAWSCloudAuthPersonaMappingRequest, options?: Configuration): Promise<AWSCloudAuthPersonaMappingResponse>;
    /**
     * Delete an AWS cloud authentication persona mapping by ID. This removes the association between an AWS IAM principal and a Datadog user.
     * @param param The request object
     */
    deleteAWSCloudAuthPersonaMapping(param: CloudAuthenticationApiDeleteAWSCloudAuthPersonaMappingRequest, options?: Configuration): Promise<void>;
    /**
     * Get a specific AWS cloud authentication persona mapping by ID. This endpoint retrieves a single configured persona mapping that associates an AWS IAM principal with a Datadog user.
     * @param param The request object
     */
    getAWSCloudAuthPersonaMapping(param: CloudAuthenticationApiGetAWSCloudAuthPersonaMappingRequest, options?: Configuration): Promise<AWSCloudAuthPersonaMappingResponse>;
    /**
     * List all AWS cloud authentication persona mappings. This endpoint retrieves all configured persona mappings that associate AWS IAM principals with Datadog users.
     * @param param The request object
     */
    listAWSCloudAuthPersonaMappings(options?: Configuration): Promise<AWSCloudAuthPersonaMappingsResponse>;
}
