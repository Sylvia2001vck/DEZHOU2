import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { ChangeRequestBranchCreateRequest } from "../models/ChangeRequestBranchCreateRequest";
import { ChangeRequestCreateRequest } from "../models/ChangeRequestCreateRequest";
import { ChangeRequestDecisionUpdateRequest } from "../models/ChangeRequestDecisionUpdateRequest";
import { ChangeRequestResponse } from "../models/ChangeRequestResponse";
import { ChangeRequestUpdateRequest } from "../models/ChangeRequestUpdateRequest";
export declare class ChangeManagementApiRequestFactory extends BaseAPIRequestFactory {
    createChangeRequest(body: ChangeRequestCreateRequest, _options?: Configuration): Promise<RequestContext>;
    createChangeRequestBranch(changeRequestId: string, body: ChangeRequestBranchCreateRequest, _options?: Configuration): Promise<RequestContext>;
    deleteChangeRequestDecision(changeRequestId: string, decisionId: string, _options?: Configuration): Promise<RequestContext>;
    getChangeRequest(changeRequestId: string, _options?: Configuration): Promise<RequestContext>;
    updateChangeRequest(changeRequestId: string, body: ChangeRequestUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    updateChangeRequestDecision(changeRequestId: string, decisionId: string, body: ChangeRequestDecisionUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class ChangeManagementApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createChangeRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
    createChangeRequest(response: ResponseContext): Promise<ChangeRequestResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createChangeRequestBranch
     * @throws ApiException if the response code was not in [200, 299]
     */
    createChangeRequestBranch(response: ResponseContext): Promise<ChangeRequestResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteChangeRequestDecision
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteChangeRequestDecision(response: ResponseContext): Promise<ChangeRequestResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getChangeRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
    getChangeRequest(response: ResponseContext): Promise<ChangeRequestResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateChangeRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateChangeRequest(response: ResponseContext): Promise<ChangeRequestResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateChangeRequestDecision
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateChangeRequestDecision(response: ResponseContext): Promise<ChangeRequestResponse>;
}
export interface ChangeManagementApiCreateChangeRequestRequest {
    /**
     * Change request payload.
     * @type ChangeRequestCreateRequest
     */
    body: ChangeRequestCreateRequest;
}
export interface ChangeManagementApiCreateChangeRequestBranchRequest {
    /**
     * The identifier of the change request.
     * @type string
     */
    changeRequestId: string;
    /**
     * Branch creation payload.
     * @type ChangeRequestBranchCreateRequest
     */
    body: ChangeRequestBranchCreateRequest;
}
export interface ChangeManagementApiDeleteChangeRequestDecisionRequest {
    /**
     * The identifier of the change request.
     * @type string
     */
    changeRequestId: string;
    /**
     * The identifier of the change request decision.
     * @type string
     */
    decisionId: string;
}
export interface ChangeManagementApiGetChangeRequestRequest {
    /**
     * The identifier of the change request.
     * @type string
     */
    changeRequestId: string;
}
export interface ChangeManagementApiUpdateChangeRequestRequest {
    /**
     * The identifier of the change request.
     * @type string
     */
    changeRequestId: string;
    /**
     * Change request update payload.
     * @type ChangeRequestUpdateRequest
     */
    body: ChangeRequestUpdateRequest;
}
export interface ChangeManagementApiUpdateChangeRequestDecisionRequest {
    /**
     * The identifier of the change request.
     * @type string
     */
    changeRequestId: string;
    /**
     * The identifier of the change request decision.
     * @type string
     */
    decisionId: string;
    /**
     * Decision update payload.
     * @type ChangeRequestDecisionUpdateRequest
     */
    body: ChangeRequestDecisionUpdateRequest;
}
export declare class ChangeManagementApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ChangeManagementApiRequestFactory, responseProcessor?: ChangeManagementApiResponseProcessor);
    /**
     * Create a new change request.
     * @param param The request object
     */
    createChangeRequest(param: ChangeManagementApiCreateChangeRequestRequest, options?: Configuration): Promise<ChangeRequestResponse>;
    /**
     * Create a new branch in a repository for a change request.
     * @param param The request object
     */
    createChangeRequestBranch(param: ChangeManagementApiCreateChangeRequestBranchRequest, options?: Configuration): Promise<ChangeRequestResponse>;
    /**
     * Delete a decision from a change request.
     * @param param The request object
     */
    deleteChangeRequestDecision(param: ChangeManagementApiDeleteChangeRequestDecisionRequest, options?: Configuration): Promise<ChangeRequestResponse>;
    /**
     * Get the details of a change request by its ID.
     * @param param The request object
     */
    getChangeRequest(param: ChangeManagementApiGetChangeRequestRequest, options?: Configuration): Promise<ChangeRequestResponse>;
    /**
     * Update the properties of a change request.
     * @param param The request object
     */
    updateChangeRequest(param: ChangeManagementApiUpdateChangeRequestRequest, options?: Configuration): Promise<ChangeRequestResponse>;
    /**
     * Update a decision on a change request, such as approving or declining it.
     * @param param The request object
     */
    updateChangeRequestDecision(param: ChangeManagementApiUpdateChangeRequestDecisionRequest, options?: Configuration): Promise<ChangeRequestResponse>;
}
