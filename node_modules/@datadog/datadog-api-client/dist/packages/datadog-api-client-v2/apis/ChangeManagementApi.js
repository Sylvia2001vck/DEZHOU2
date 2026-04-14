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
exports.ChangeManagementApi = exports.ChangeManagementApiResponseProcessor = exports.ChangeManagementApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class ChangeManagementApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    createChangeRequest(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'createChangeRequest'");
            if (!_config.unstableOperations["v2.createChangeRequest"]) {
                throw new Error("Unstable operation 'createChangeRequest' is disabled");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createChangeRequest");
            }
            // Path Params
            const localVarPath = "/api/v2/change-management/change-request";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ChangeManagementApi.createChangeRequest")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "ChangeRequestCreateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
                "AuthZ",
            ]);
            return requestContext;
        });
    }
    createChangeRequestBranch(changeRequestId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'createChangeRequestBranch'");
            if (!_config.unstableOperations["v2.createChangeRequestBranch"]) {
                throw new Error("Unstable operation 'createChangeRequestBranch' is disabled");
            }
            // verify required parameter 'changeRequestId' is not null or undefined
            if (changeRequestId === null || changeRequestId === undefined) {
                throw new baseapi_1.RequiredError("changeRequestId", "createChangeRequestBranch");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createChangeRequestBranch");
            }
            // Path Params
            const localVarPath = "/api/v2/change-management/change-request/{change_request_id}/branch".replace("{change_request_id}", encodeURIComponent(String(changeRequestId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ChangeManagementApi.createChangeRequestBranch")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "ChangeRequestBranchCreateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
                "AuthZ",
            ]);
            return requestContext;
        });
    }
    deleteChangeRequestDecision(changeRequestId, decisionId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'deleteChangeRequestDecision'");
            if (!_config.unstableOperations["v2.deleteChangeRequestDecision"]) {
                throw new Error("Unstable operation 'deleteChangeRequestDecision' is disabled");
            }
            // verify required parameter 'changeRequestId' is not null or undefined
            if (changeRequestId === null || changeRequestId === undefined) {
                throw new baseapi_1.RequiredError("changeRequestId", "deleteChangeRequestDecision");
            }
            // verify required parameter 'decisionId' is not null or undefined
            if (decisionId === null || decisionId === undefined) {
                throw new baseapi_1.RequiredError("decisionId", "deleteChangeRequestDecision");
            }
            // Path Params
            const localVarPath = "/api/v2/change-management/change-request/{change_request_id}/decisions/{decision_id}"
                .replace("{change_request_id}", encodeURIComponent(String(changeRequestId)))
                .replace("{decision_id}", encodeURIComponent(String(decisionId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ChangeManagementApi.deleteChangeRequestDecision")
                .makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
                "AuthZ",
            ]);
            return requestContext;
        });
    }
    getChangeRequest(changeRequestId, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'getChangeRequest'");
            if (!_config.unstableOperations["v2.getChangeRequest"]) {
                throw new Error("Unstable operation 'getChangeRequest' is disabled");
            }
            // verify required parameter 'changeRequestId' is not null or undefined
            if (changeRequestId === null || changeRequestId === undefined) {
                throw new baseapi_1.RequiredError("changeRequestId", "getChangeRequest");
            }
            // Path Params
            const localVarPath = "/api/v2/change-management/change-request/{change_request_id}".replace("{change_request_id}", encodeURIComponent(String(changeRequestId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ChangeManagementApi.getChangeRequest")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
                "AuthZ",
            ]);
            return requestContext;
        });
    }
    updateChangeRequest(changeRequestId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'updateChangeRequest'");
            if (!_config.unstableOperations["v2.updateChangeRequest"]) {
                throw new Error("Unstable operation 'updateChangeRequest' is disabled");
            }
            // verify required parameter 'changeRequestId' is not null or undefined
            if (changeRequestId === null || changeRequestId === undefined) {
                throw new baseapi_1.RequiredError("changeRequestId", "updateChangeRequest");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateChangeRequest");
            }
            // Path Params
            const localVarPath = "/api/v2/change-management/change-request/{change_request_id}".replace("{change_request_id}", encodeURIComponent(String(changeRequestId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ChangeManagementApi.updateChangeRequest")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "ChangeRequestUpdateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
                "AuthZ",
            ]);
            return requestContext;
        });
    }
    updateChangeRequestDecision(changeRequestId, decisionId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'updateChangeRequestDecision'");
            if (!_config.unstableOperations["v2.updateChangeRequestDecision"]) {
                throw new Error("Unstable operation 'updateChangeRequestDecision' is disabled");
            }
            // verify required parameter 'changeRequestId' is not null or undefined
            if (changeRequestId === null || changeRequestId === undefined) {
                throw new baseapi_1.RequiredError("changeRequestId", "updateChangeRequestDecision");
            }
            // verify required parameter 'decisionId' is not null or undefined
            if (decisionId === null || decisionId === undefined) {
                throw new baseapi_1.RequiredError("decisionId", "updateChangeRequestDecision");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateChangeRequestDecision");
            }
            // Path Params
            const localVarPath = "/api/v2/change-management/change-request/{change_request_id}/decisions/{decision_id}"
                .replace("{change_request_id}", encodeURIComponent(String(changeRequestId)))
                .replace("{decision_id}", encodeURIComponent(String(decisionId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.ChangeManagementApi.updateChangeRequestDecision")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "ChangeRequestDecisionUpdateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
                "AuthZ",
            ]);
            return requestContext;
        });
    }
}
exports.ChangeManagementApiRequestFactory = ChangeManagementApiRequestFactory;
class ChangeManagementApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createChangeRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
    createChangeRequest(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 201) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ChangeRequestResponse");
                return body;
            }
            if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "JSONAPIErrorResponse");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ChangeRequestResponse", "");
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
     * @params response Response returned by the server for a request to createChangeRequestBranch
     * @throws ApiException if the response code was not in [200, 299]
     */
    createChangeRequestBranch(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ChangeRequestResponse");
                return body;
            }
            if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "JSONAPIErrorResponse");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ChangeRequestResponse", "");
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
     * @params response Response returned by the server for a request to deleteChangeRequestDecision
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteChangeRequestDecision(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ChangeRequestResponse");
                return body;
            }
            if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "JSONAPIErrorResponse");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ChangeRequestResponse", "");
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
     * @params response Response returned by the server for a request to getChangeRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
    getChangeRequest(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ChangeRequestResponse");
                return body;
            }
            if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "JSONAPIErrorResponse");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ChangeRequestResponse", "");
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
     * @params response Response returned by the server for a request to updateChangeRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateChangeRequest(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ChangeRequestResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 403 ||
                response.httpStatusCode === 404) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "JSONAPIErrorResponse");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ChangeRequestResponse", "");
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
     * @params response Response returned by the server for a request to updateChangeRequestDecision
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateChangeRequestDecision(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ChangeRequestResponse");
                return body;
            }
            if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
                const bodyText = ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType);
                let body;
                try {
                    body = ObjectSerializer_1.ObjectSerializer.deserialize(bodyText, "JSONAPIErrorResponse");
                }
                catch (error) {
                    logger_1.logger.debug(`Got error deserializing error: ${error}`);
                    throw new exception_1.ApiException(response.httpStatusCode, bodyText);
                }
                throw new exception_1.ApiException(response.httpStatusCode, body);
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "ChangeRequestResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.ChangeManagementApiResponseProcessor = ChangeManagementApiResponseProcessor;
class ChangeManagementApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new ChangeManagementApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new ChangeManagementApiResponseProcessor();
    }
    /**
     * Create a new change request.
     * @param param The request object
     */
    createChangeRequest(param, options) {
        const requestContextPromise = this.requestFactory.createChangeRequest(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createChangeRequest(responseContext);
            });
        });
    }
    /**
     * Create a new branch in a repository for a change request.
     * @param param The request object
     */
    createChangeRequestBranch(param, options) {
        const requestContextPromise = this.requestFactory.createChangeRequestBranch(param.changeRequestId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createChangeRequestBranch(responseContext);
            });
        });
    }
    /**
     * Delete a decision from a change request.
     * @param param The request object
     */
    deleteChangeRequestDecision(param, options) {
        const requestContextPromise = this.requestFactory.deleteChangeRequestDecision(param.changeRequestId, param.decisionId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteChangeRequestDecision(responseContext);
            });
        });
    }
    /**
     * Get the details of a change request by its ID.
     * @param param The request object
     */
    getChangeRequest(param, options) {
        const requestContextPromise = this.requestFactory.getChangeRequest(param.changeRequestId, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.getChangeRequest(responseContext);
            });
        });
    }
    /**
     * Update the properties of a change request.
     * @param param The request object
     */
    updateChangeRequest(param, options) {
        const requestContextPromise = this.requestFactory.updateChangeRequest(param.changeRequestId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateChangeRequest(responseContext);
            });
        });
    }
    /**
     * Update a decision on a change request, such as approving or declining it.
     * @param param The request object
     */
    updateChangeRequestDecision(param, options) {
        const requestContextPromise = this.requestFactory.updateChangeRequestDecision(param.changeRequestId, param.decisionId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateChangeRequestDecision(responseContext);
            });
        });
    }
}
exports.ChangeManagementApi = ChangeManagementApi;
//# sourceMappingURL=ChangeManagementApi.js.map