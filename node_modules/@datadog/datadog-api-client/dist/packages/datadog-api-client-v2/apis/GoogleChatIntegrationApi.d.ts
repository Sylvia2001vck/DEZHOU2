import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { GoogleChatAppNamedSpaceResponse } from "../models/GoogleChatAppNamedSpaceResponse";
import { GoogleChatCreateOrganizationHandleRequest } from "../models/GoogleChatCreateOrganizationHandleRequest";
import { GoogleChatOrganizationHandleResponse } from "../models/GoogleChatOrganizationHandleResponse";
import { GoogleChatOrganizationHandlesResponse } from "../models/GoogleChatOrganizationHandlesResponse";
import { GoogleChatUpdateOrganizationHandleRequest } from "../models/GoogleChatUpdateOrganizationHandleRequest";
export declare class GoogleChatIntegrationApiRequestFactory extends BaseAPIRequestFactory {
    createOrganizationHandle(organizationBindingId: string, body: GoogleChatCreateOrganizationHandleRequest, _options?: Configuration): Promise<RequestContext>;
    deleteOrganizationHandle(organizationBindingId: string, handleId: string, _options?: Configuration): Promise<RequestContext>;
    getOrganizationHandle(organizationBindingId: string, handleId: string, _options?: Configuration): Promise<RequestContext>;
    getSpaceByDisplayName(domainName: string, spaceDisplayName: string, _options?: Configuration): Promise<RequestContext>;
    listOrganizationHandles(organizationBindingId: string, _options?: Configuration): Promise<RequestContext>;
    updateOrganizationHandle(organizationBindingId: string, handleId: string, body: GoogleChatUpdateOrganizationHandleRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class GoogleChatIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOrganizationHandle
     * @throws ApiException if the response code was not in [200, 299]
     */
    createOrganizationHandle(response: ResponseContext): Promise<GoogleChatOrganizationHandleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteOrganizationHandle
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteOrganizationHandle(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOrganizationHandle
     * @throws ApiException if the response code was not in [200, 299]
     */
    getOrganizationHandle(response: ResponseContext): Promise<GoogleChatOrganizationHandleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSpaceByDisplayName
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSpaceByDisplayName(response: ResponseContext): Promise<GoogleChatAppNamedSpaceResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOrganizationHandles
     * @throws ApiException if the response code was not in [200, 299]
     */
    listOrganizationHandles(response: ResponseContext): Promise<GoogleChatOrganizationHandlesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateOrganizationHandle
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateOrganizationHandle(response: ResponseContext): Promise<GoogleChatOrganizationHandleResponse>;
}
export interface GoogleChatIntegrationApiCreateOrganizationHandleRequest {
    /**
     * Your organization binding ID.
     * @type string
     */
    organizationBindingId: string;
    /**
     * Organization handle payload.
     * @type GoogleChatCreateOrganizationHandleRequest
     */
    body: GoogleChatCreateOrganizationHandleRequest;
}
export interface GoogleChatIntegrationApiDeleteOrganizationHandleRequest {
    /**
     * Your organization binding ID.
     * @type string
     */
    organizationBindingId: string;
    /**
     * Your organization handle ID.
     * @type string
     */
    handleId: string;
}
export interface GoogleChatIntegrationApiGetOrganizationHandleRequest {
    /**
     * Your organization binding ID.
     * @type string
     */
    organizationBindingId: string;
    /**
     * Your organization handle ID.
     * @type string
     */
    handleId: string;
}
export interface GoogleChatIntegrationApiGetSpaceByDisplayNameRequest {
    /**
     * The Google Chat domain name.
     * @type string
     */
    domainName: string;
    /**
     * The Google Chat space display name.
     * @type string
     */
    spaceDisplayName: string;
}
export interface GoogleChatIntegrationApiListOrganizationHandlesRequest {
    /**
     * Your organization binding ID.
     * @type string
     */
    organizationBindingId: string;
}
export interface GoogleChatIntegrationApiUpdateOrganizationHandleRequest {
    /**
     * Your organization binding ID.
     * @type string
     */
    organizationBindingId: string;
    /**
     * Your organization handle ID.
     * @type string
     */
    handleId: string;
    /**
     * Organization handle payload.
     * @type GoogleChatUpdateOrganizationHandleRequest
     */
    body: GoogleChatUpdateOrganizationHandleRequest;
}
export declare class GoogleChatIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: GoogleChatIntegrationApiRequestFactory, responseProcessor?: GoogleChatIntegrationApiResponseProcessor);
    /**
     * Create an organization handle in the Datadog Google Chat integration.
     * @param param The request object
     */
    createOrganizationHandle(param: GoogleChatIntegrationApiCreateOrganizationHandleRequest, options?: Configuration): Promise<GoogleChatOrganizationHandleResponse>;
    /**
     * Delete an organization handle from the Datadog Google Chat integration.
     * @param param The request object
     */
    deleteOrganizationHandle(param: GoogleChatIntegrationApiDeleteOrganizationHandleRequest, options?: Configuration): Promise<void>;
    /**
     * Get an organization handle from the Datadog Google Chat integration.
     * @param param The request object
     */
    getOrganizationHandle(param: GoogleChatIntegrationApiGetOrganizationHandleRequest, options?: Configuration): Promise<GoogleChatOrganizationHandleResponse>;
    /**
     * Get the resource name and organization binding ID of a space in the Datadog Google Chat integration.
     * @param param The request object
     */
    getSpaceByDisplayName(param: GoogleChatIntegrationApiGetSpaceByDisplayNameRequest, options?: Configuration): Promise<GoogleChatAppNamedSpaceResponse>;
    /**
     * Get a list of all organization handles from the Datadog Google Chat integration.
     * @param param The request object
     */
    listOrganizationHandles(param: GoogleChatIntegrationApiListOrganizationHandlesRequest, options?: Configuration): Promise<GoogleChatOrganizationHandlesResponse>;
    /**
     * Update an organization handle from the Datadog Google Chat integration.
     * @param param The request object
     */
    updateOrganizationHandle(param: GoogleChatIntegrationApiUpdateOrganizationHandleRequest, options?: Configuration): Promise<GoogleChatOrganizationHandleResponse>;
}
