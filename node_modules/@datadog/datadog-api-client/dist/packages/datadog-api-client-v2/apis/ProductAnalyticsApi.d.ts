import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { ProductAnalyticsAnalyticsRequest } from "../models/ProductAnalyticsAnalyticsRequest";
import { ProductAnalyticsScalarResponse } from "../models/ProductAnalyticsScalarResponse";
import { ProductAnalyticsServerSideEventItem } from "../models/ProductAnalyticsServerSideEventItem";
import { ProductAnalyticsTimeseriesResponse } from "../models/ProductAnalyticsTimeseriesResponse";
export declare class ProductAnalyticsApiRequestFactory extends BaseAPIRequestFactory {
    queryProductAnalyticsScalar(body: ProductAnalyticsAnalyticsRequest, _options?: Configuration): Promise<RequestContext>;
    queryProductAnalyticsTimeseries(body: ProductAnalyticsAnalyticsRequest, _options?: Configuration): Promise<RequestContext>;
    submitProductAnalyticsEvent(body: ProductAnalyticsServerSideEventItem, _options?: Configuration): Promise<RequestContext>;
}
export declare class ProductAnalyticsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to queryProductAnalyticsScalar
     * @throws ApiException if the response code was not in [200, 299]
     */
    queryProductAnalyticsScalar(response: ResponseContext): Promise<ProductAnalyticsScalarResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to queryProductAnalyticsTimeseries
     * @throws ApiException if the response code was not in [200, 299]
     */
    queryProductAnalyticsTimeseries(response: ResponseContext): Promise<ProductAnalyticsTimeseriesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to submitProductAnalyticsEvent
     * @throws ApiException if the response code was not in [200, 299]
     */
    submitProductAnalyticsEvent(response: ResponseContext): Promise<any>;
}
export interface ProductAnalyticsApiQueryProductAnalyticsScalarRequest {
    /**
     * @type ProductAnalyticsAnalyticsRequest
     */
    body: ProductAnalyticsAnalyticsRequest;
}
export interface ProductAnalyticsApiQueryProductAnalyticsTimeseriesRequest {
    /**
     * @type ProductAnalyticsAnalyticsRequest
     */
    body: ProductAnalyticsAnalyticsRequest;
}
export interface ProductAnalyticsApiSubmitProductAnalyticsEventRequest {
    /**
     * Server-side event to send (JSON format).
     * @type ProductAnalyticsServerSideEventItem
     */
    body: ProductAnalyticsServerSideEventItem;
}
export declare class ProductAnalyticsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ProductAnalyticsApiRequestFactory, responseProcessor?: ProductAnalyticsApiResponseProcessor);
    /**
     * Compute scalar analytics results for Product Analytics data.
     * Returns aggregated values (counts, averages, percentiles) optionally grouped by facets.
     * @param param The request object
     */
    queryProductAnalyticsScalar(param: ProductAnalyticsApiQueryProductAnalyticsScalarRequest, options?: Configuration): Promise<ProductAnalyticsScalarResponse>;
    /**
     * Compute timeseries analytics results for Product Analytics data.
     * Returns time-bucketed values for charts and trend analysis.
     * The `compute.interval` field (milliseconds) is required for time bucketing.
     * @param param The request object
     */
    queryProductAnalyticsTimeseries(param: ProductAnalyticsApiQueryProductAnalyticsTimeseriesRequest, options?: Configuration): Promise<ProductAnalyticsTimeseriesResponse>;
    /**
     * Send server-side events to Product Analytics. Server-side events are retained for 15 months.
     *
     * Server-Side events in Product Analytics are helpful for tracking events that occur on the server,
     * as opposed to client-side events, which are captured by Real User Monitoring (RUM) SDKs.
     * This allows for a more comprehensive view of the user journey by including actions that happen on the server.
     * Typical examples could be `checkout.completed` or `payment.processed`.
     *
     * Ingested server-side events are integrated into Product Analytics to allow users to select and filter
     * these events in the event picker, similar to how views or actions are handled.
     *
     * **Requirements:**
     * - At least one of `usr`, `account`, or `session` must be provided with a valid ID.
     * - The `application.id` must reference a Product Analytics-enabled application.
     *
     * **Custom Attributes:**
     * Any additional fields in the payload are flattened and searchable as facets.
     * For example, a payload with `{"customer": {"tier": "premium"}}` is searchable with
     * the syntax `@customer.tier:premium` in Datadog.
     *
     * The status codes answered by the HTTP API are:
     * - 202: Accepted: The request has been accepted for processing
     * - 400: Bad request (likely an issue in the payload formatting)
     * - 401: Unauthorized (likely a missing API Key)
     * - 403: Permission issue (likely using an invalid API Key)
     * - 408: Request Timeout, request should be retried after some time
     * - 413: Payload too large (batch is above 5MB uncompressed)
     * - 429: Too Many Requests, request should be retried after some time
     * - 500: Internal Server Error, the server encountered an unexpected condition that prevented it from fulfilling the request, request should be retried after some time
     * - 503: Service Unavailable, the server is not ready to handle the request probably because it is overloaded, request should be retried after some time
     * @param param The request object
     */
    submitProductAnalyticsEvent(param: ProductAnalyticsApiSubmitProductAnalyticsEventRequest, options?: Configuration): Promise<any>;
}
