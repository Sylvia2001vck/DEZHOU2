import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { ListIntegrationsResponse } from "../models/ListIntegrationsResponse";
export declare class IntegrationsApiRequestFactory extends BaseAPIRequestFactory {
    listIntegrations(_options?: Configuration): Promise<RequestContext>;
}
export declare class IntegrationsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIntegrations
     * @throws ApiException if the response code was not in [200, 299]
     */
    listIntegrations(response: ResponseContext): Promise<ListIntegrationsResponse>;
}
export declare class IntegrationsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: IntegrationsApiRequestFactory, responseProcessor?: IntegrationsApiResponseProcessor);
    /**
     * @param param The request object
     */
    listIntegrations(options?: Configuration): Promise<ListIntegrationsResponse>;
}
