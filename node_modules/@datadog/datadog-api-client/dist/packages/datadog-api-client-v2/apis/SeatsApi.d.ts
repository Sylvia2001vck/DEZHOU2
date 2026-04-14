import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { AssignSeatsUserRequest } from "../models/AssignSeatsUserRequest";
import { AssignSeatsUserResponse } from "../models/AssignSeatsUserResponse";
import { SeatUserDataArray } from "../models/SeatUserDataArray";
import { UnassignSeatsUserRequest } from "../models/UnassignSeatsUserRequest";
export declare class SeatsApiRequestFactory extends BaseAPIRequestFactory {
    assignSeatsUser(body: AssignSeatsUserRequest, _options?: Configuration): Promise<RequestContext>;
    getSeatsUsers(productCode: string, pageLimit?: number, pageCursor?: string, _options?: Configuration): Promise<RequestContext>;
    unassignSeatsUser(body: UnassignSeatsUserRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class SeatsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignSeatsUser
     * @throws ApiException if the response code was not in [200, 299]
     */
    assignSeatsUser(response: ResponseContext): Promise<AssignSeatsUserResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSeatsUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSeatsUsers(response: ResponseContext): Promise<SeatUserDataArray>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unassignSeatsUser
     * @throws ApiException if the response code was not in [200, 299]
     */
    unassignSeatsUser(response: ResponseContext): Promise<void>;
}
export interface SeatsApiAssignSeatsUserRequest {
    /**
     * @type AssignSeatsUserRequest
     */
    body: AssignSeatsUserRequest;
}
export interface SeatsApiGetSeatsUsersRequest {
    /**
     * The product code for which to retrieve seat users.
     * @type string
     */
    productCode: string;
    /**
     * Maximum number of results to return.
     * @type number
     */
    pageLimit?: number;
    /**
     * Cursor for pagination.
     * @type string
     */
    pageCursor?: string;
}
export interface SeatsApiUnassignSeatsUserRequest {
    /**
     * @type UnassignSeatsUserRequest
     */
    body: UnassignSeatsUserRequest;
}
export declare class SeatsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SeatsApiRequestFactory, responseProcessor?: SeatsApiResponseProcessor);
    /**
     * Assign seats to users for a product code.
     * @param param The request object
     */
    assignSeatsUser(param: SeatsApiAssignSeatsUserRequest, options?: Configuration): Promise<AssignSeatsUserResponse>;
    /**
     * Get the list of users assigned seats for a product code.
     * @param param The request object
     */
    getSeatsUsers(param: SeatsApiGetSeatsUsersRequest, options?: Configuration): Promise<SeatUserDataArray>;
    /**
     * Unassign seats from users for a product code.
     * @param param The request object
     */
    unassignSeatsUser(param: SeatsApiUnassignSeatsUserRequest, options?: Configuration): Promise<void>;
}
