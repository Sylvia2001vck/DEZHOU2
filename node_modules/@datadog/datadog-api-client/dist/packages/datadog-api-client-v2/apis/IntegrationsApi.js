"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationsApi = exports.IntegrationsApiResponseProcessor = exports.IntegrationsApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class IntegrationsApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    listIntegrations(_options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // Path Params
            const localVarPath = "/api/v2/integrations";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.IntegrationsApi.listIntegrations")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
}
exports.IntegrationsApiRequestFactory = IntegrationsApiRequestFactory;
class IntegrationsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIntegrations
     * @throws ApiException if the response code was not in [200, 299]
     */
    listIntegrations(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ListIntegrationsResponse");
                return body;
            }
            if (response.httpStatusCode === 429) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "APIErrorResponse");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
            }
            // Work around for missing responses in specification, e.g. for petstore.yaml
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ListIntegrationsResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.IntegrationsApiResponseProcessor = IntegrationsApiResponseProcessor;
class IntegrationsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new IntegrationsApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new IntegrationsApiResponseProcessor();
    }
    /**
     * @param param The request object
     */
    listIntegrations(options) {
        const requestContextPromise = this.requestFactory.listIntegrations(options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listIntegrations(responseContext);
            });
        });
    }
}
exports.IntegrationsApi = IntegrationsApi;
//# sourceMappingURL=IntegrationsApi.js.map