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
exports.GoogleChatIntegrationApi = exports.GoogleChatIntegrationApiResponseProcessor = exports.GoogleChatIntegrationApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class GoogleChatIntegrationApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    createOrganizationHandle(organizationBindingId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'organizationBindingId' is not null or undefined
            if (organizationBindingId === null || organizationBindingId === undefined) {
                throw new baseapi_1.RequiredError("organizationBindingId", "createOrganizationHandle");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createOrganizationHandle");
            }
            // Path Params
            const localVarPath = "/api/v2/integration/google-chat/organizations/{organization_binding_id}/organization-handles".replace("{organization_binding_id}", encodeURIComponent(String(organizationBindingId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.GoogleChatIntegrationApi.createOrganizationHandle")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "GoogleChatCreateOrganizationHandleRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    deleteOrganizationHandle(organizationBindingId, handleId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'organizationBindingId' is not null or undefined
            if (organizationBindingId === null || organizationBindingId === undefined) {
                throw new baseapi_1.RequiredError("organizationBindingId", "deleteOrganizationHandle");
            }
            // verify required parameter 'handleId' is not null or undefined
            if (handleId === null || handleId === undefined) {
                throw new baseapi_1.RequiredError("handleId", "deleteOrganizationHandle");
            }
            // Path Params
            const localVarPath = "/api/v2/integration/google-chat/organizations/{organization_binding_id}/organization-handles/{handle_id}"
                .replace("{organization_binding_id}", encodeURIComponent(String(organizationBindingId)))
                .replace("{handle_id}", encodeURIComponent(String(handleId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.GoogleChatIntegrationApi.deleteOrganizationHandle")
                .makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "*/*");
            requestContext.setHttpConfig(_config.httpConfig);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    getOrganizationHandle(organizationBindingId, handleId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'organizationBindingId' is not null or undefined
            if (organizationBindingId === null || organizationBindingId === undefined) {
                throw new baseapi_1.RequiredError("organizationBindingId", "getOrganizationHandle");
            }
            // verify required parameter 'handleId' is not null or undefined
            if (handleId === null || handleId === undefined) {
                throw new baseapi_1.RequiredError("handleId", "getOrganizationHandle");
            }
            // Path Params
            const localVarPath = "/api/v2/integration/google-chat/organizations/{organization_binding_id}/organization-handles/{handle_id}"
                .replace("{organization_binding_id}", encodeURIComponent(String(organizationBindingId)))
                .replace("{handle_id}", encodeURIComponent(String(handleId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.GoogleChatIntegrationApi.getOrganizationHandle")
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
    getSpaceByDisplayName(domainName, spaceDisplayName, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'domainName' is not null or undefined
            if (domainName === null || domainName === undefined) {
                throw new baseapi_1.RequiredError("domainName", "getSpaceByDisplayName");
            }
            // verify required parameter 'spaceDisplayName' is not null or undefined
            if (spaceDisplayName === null || spaceDisplayName === undefined) {
                throw new baseapi_1.RequiredError("spaceDisplayName", "getSpaceByDisplayName");
            }
            // Path Params
            const localVarPath = "/api/v2/integration/google-chat/organizations/app/named-spaces/{domain_name}/{space_display_name}"
                .replace("{domain_name}", encodeURIComponent(String(domainName)))
                .replace("{space_display_name}", encodeURIComponent(String(spaceDisplayName)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.GoogleChatIntegrationApi.getSpaceByDisplayName")
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
    listOrganizationHandles(organizationBindingId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'organizationBindingId' is not null or undefined
            if (organizationBindingId === null || organizationBindingId === undefined) {
                throw new baseapi_1.RequiredError("organizationBindingId", "listOrganizationHandles");
            }
            // Path Params
            const localVarPath = "/api/v2/integration/google-chat/organizations/{organization_binding_id}/organization-handles".replace("{organization_binding_id}", encodeURIComponent(String(organizationBindingId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.GoogleChatIntegrationApi.listOrganizationHandles")
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
    updateOrganizationHandle(organizationBindingId, handleId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            // verify required parameter 'organizationBindingId' is not null or undefined
            if (organizationBindingId === null || organizationBindingId === undefined) {
                throw new baseapi_1.RequiredError("organizationBindingId", "updateOrganizationHandle");
            }
            // verify required parameter 'handleId' is not null or undefined
            if (handleId === null || handleId === undefined) {
                throw new baseapi_1.RequiredError("handleId", "updateOrganizationHandle");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateOrganizationHandle");
            }
            // Path Params
            const localVarPath = "/api/v2/integration/google-chat/organizations/{organization_binding_id}/organization-handles/{handle_id}"
                .replace("{organization_binding_id}", encodeURIComponent(String(organizationBindingId)))
                .replace("{handle_id}", encodeURIComponent(String(handleId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.GoogleChatIntegrationApi.updateOrganizationHandle")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "GoogleChatUpdateOrganizationHandleRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
}
exports.GoogleChatIntegrationApiRequestFactory = GoogleChatIntegrationApiRequestFactory;
class GoogleChatIntegrationApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOrganizationHandle
     * @throws ApiException if the response code was not in [200, 299]
     */
    createOrganizationHandle(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 201) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "GoogleChatOrganizationHandleResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404 ||
                response.httpStatusCode === 409 ||
                response.httpStatusCode === 429) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "GoogleChatOrganizationHandleResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteOrganizationHandle
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteOrganizationHandle(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 204) {
                return;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 429) {
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
                return;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOrganizationHandle
     * @throws ApiException if the response code was not in [200, 299]
     */
    getOrganizationHandle(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "GoogleChatOrganizationHandleResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404 ||
                response.httpStatusCode === 429) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "GoogleChatOrganizationHandleResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSpaceByDisplayName
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSpaceByDisplayName(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "GoogleChatAppNamedSpaceResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404 ||
                response.httpStatusCode === 429) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "GoogleChatAppNamedSpaceResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOrganizationHandles
     * @throws ApiException if the response code was not in [200, 299]
     */
    listOrganizationHandles(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "GoogleChatOrganizationHandlesResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404 ||
                response.httpStatusCode === 429) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "GoogleChatOrganizationHandlesResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateOrganizationHandle
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateOrganizationHandle(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "GoogleChatOrganizationHandleResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404 ||
                response.httpStatusCode === 409 ||
                response.httpStatusCode === 429) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "GoogleChatOrganizationHandleResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.GoogleChatIntegrationApiResponseProcessor = GoogleChatIntegrationApiResponseProcessor;
class GoogleChatIntegrationApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory ||
                new GoogleChatIntegrationApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new GoogleChatIntegrationApiResponseProcessor();
    }
    /**
     * Create an organization handle in the Datadog Google Chat integration.
     * @param param The request object
     */
    createOrganizationHandle(param, options) {
        const requestContextPromise = this.requestFactory.createOrganizationHandle(param.organizationBindingId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createOrganizationHandle(responseContext);
            });
        });
    }
    /**
     * Delete an organization handle from the Datadog Google Chat integration.
     * @param param The request object
     */
    deleteOrganizationHandle(param, options) {
        const requestContextPromise = this.requestFactory.deleteOrganizationHandle(param.organizationBindingId, param.handleId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteOrganizationHandle(responseContext);
            });
        });
    }
    /**
     * Get an organization handle from the Datadog Google Chat integration.
     * @param param The request object
     */
    getOrganizationHandle(param, options) {
        const requestContextPromise = this.requestFactory.getOrganizationHandle(param.organizationBindingId, param.handleId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getOrganizationHandle(responseContext);
            });
        });
    }
    /**
     * Get the resource name and organization binding ID of a space in the Datadog Google Chat integration.
     * @param param The request object
     */
    getSpaceByDisplayName(param, options) {
        const requestContextPromise = this.requestFactory.getSpaceByDisplayName(param.domainName, param.spaceDisplayName, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getSpaceByDisplayName(responseContext);
            });
        });
    }
    /**
     * Get a list of all organization handles from the Datadog Google Chat integration.
     * @param param The request object
     */
    listOrganizationHandles(param, options) {
        const requestContextPromise = this.requestFactory.listOrganizationHandles(param.organizationBindingId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listOrganizationHandles(responseContext);
            });
        });
    }
    /**
     * Update an organization handle from the Datadog Google Chat integration.
     * @param param The request object
     */
    updateOrganizationHandle(param, options) {
        const requestContextPromise = this.requestFactory.updateOrganizationHandle(param.organizationBindingId, param.handleId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateOrganizationHandle(responseContext);
            });
        });
    }
}
exports.GoogleChatIntegrationApi = GoogleChatIntegrationApi;
//# sourceMappingURL=GoogleChatIntegrationApi.js.map