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
exports.LLMObservabilityApi = exports.LLMObservabilityApiResponseProcessor = exports.LLMObservabilityApiRequestFactory = void 0;
const baseapi_1 = require("../../datadog-api-client-common/baseapi");
const configuration_1 = require("../../datadog-api-client-common/configuration");
const http_1 = require("../../datadog-api-client-common/http/http");
const logger_1 = require("../../../logger");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("../../datadog-api-client-common/exception");
class LLMObservabilityApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    createLLMObsDataset(projectId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'createLLMObsDataset'");
            if (!_config.unstableOperations["v2.createLLMObsDataset"]) {
                throw new Error("Unstable operation 'createLLMObsDataset' is disabled");
            }
            // verify required parameter 'projectId' is not null or undefined
            if (projectId === null || projectId === undefined) {
                throw new baseapi_1.RequiredError("projectId", "createLLMObsDataset");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createLLMObsDataset");
            }
            // Path Params
            const localVarPath = "/api/v2/llm-obs/v1/{project_id}/datasets".replace("{project_id}", encodeURIComponent(String(projectId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LLMObservabilityApi.createLLMObsDataset")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "LLMObsDatasetRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    createLLMObsDatasetRecords(projectId, datasetId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'createLLMObsDatasetRecords'");
            if (!_config.unstableOperations["v2.createLLMObsDatasetRecords"]) {
                throw new Error("Unstable operation 'createLLMObsDatasetRecords' is disabled");
            }
            // verify required parameter 'projectId' is not null or undefined
            if (projectId === null || projectId === undefined) {
                throw new baseapi_1.RequiredError("projectId", "createLLMObsDatasetRecords");
            }
            // verify required parameter 'datasetId' is not null or undefined
            if (datasetId === null || datasetId === undefined) {
                throw new baseapi_1.RequiredError("datasetId", "createLLMObsDatasetRecords");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createLLMObsDatasetRecords");
            }
            // Path Params
            const localVarPath = "/api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/records"
                .replace("{project_id}", encodeURIComponent(String(projectId)))
                .replace("{dataset_id}", encodeURIComponent(String(datasetId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LLMObservabilityApi.createLLMObsDatasetRecords")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "LLMObsDatasetRecordsRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    createLLMObsExperiment(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'createLLMObsExperiment'");
            if (!_config.unstableOperations["v2.createLLMObsExperiment"]) {
                throw new Error("Unstable operation 'createLLMObsExperiment' is disabled");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createLLMObsExperiment");
            }
            // Path Params
            const localVarPath = "/api/v2/llm-obs/v1/experiments";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LLMObservabilityApi.createLLMObsExperiment")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "LLMObsExperimentRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    createLLMObsExperimentEvents(experimentId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'createLLMObsExperimentEvents'");
            if (!_config.unstableOperations["v2.createLLMObsExperimentEvents"]) {
                throw new Error("Unstable operation 'createLLMObsExperimentEvents' is disabled");
            }
            // verify required parameter 'experimentId' is not null or undefined
            if (experimentId === null || experimentId === undefined) {
                throw new baseapi_1.RequiredError("experimentId", "createLLMObsExperimentEvents");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createLLMObsExperimentEvents");
            }
            // Path Params
            const localVarPath = "/api/v2/llm-obs/v1/experiments/{experiment_id}/events".replace("{experiment_id}", encodeURIComponent(String(experimentId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LLMObservabilityApi.createLLMObsExperimentEvents")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "*/*");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "LLMObsExperimentEventsRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    createLLMObsProject(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'createLLMObsProject'");
            if (!_config.unstableOperations["v2.createLLMObsProject"]) {
                throw new Error("Unstable operation 'createLLMObsProject' is disabled");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "createLLMObsProject");
            }
            // Path Params
            const localVarPath = "/api/v2/llm-obs/v1/projects";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LLMObservabilityApi.createLLMObsProject")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "LLMObsProjectRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    deleteLLMObsDatasetRecords(projectId, datasetId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'deleteLLMObsDatasetRecords'");
            if (!_config.unstableOperations["v2.deleteLLMObsDatasetRecords"]) {
                throw new Error("Unstable operation 'deleteLLMObsDatasetRecords' is disabled");
            }
            // verify required parameter 'projectId' is not null or undefined
            if (projectId === null || projectId === undefined) {
                throw new baseapi_1.RequiredError("projectId", "deleteLLMObsDatasetRecords");
            }
            // verify required parameter 'datasetId' is not null or undefined
            if (datasetId === null || datasetId === undefined) {
                throw new baseapi_1.RequiredError("datasetId", "deleteLLMObsDatasetRecords");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "deleteLLMObsDatasetRecords");
            }
            // Path Params
            const localVarPath = "/api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/records/delete"
                .replace("{project_id}", encodeURIComponent(String(projectId)))
                .replace("{dataset_id}", encodeURIComponent(String(datasetId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LLMObservabilityApi.deleteLLMObsDatasetRecords")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "*/*");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "LLMObsDeleteDatasetRecordsRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    deleteLLMObsDatasets(projectId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'deleteLLMObsDatasets'");
            if (!_config.unstableOperations["v2.deleteLLMObsDatasets"]) {
                throw new Error("Unstable operation 'deleteLLMObsDatasets' is disabled");
            }
            // verify required parameter 'projectId' is not null or undefined
            if (projectId === null || projectId === undefined) {
                throw new baseapi_1.RequiredError("projectId", "deleteLLMObsDatasets");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "deleteLLMObsDatasets");
            }
            // Path Params
            const localVarPath = "/api/v2/llm-obs/v1/{project_id}/datasets/delete".replace("{project_id}", encodeURIComponent(String(projectId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LLMObservabilityApi.deleteLLMObsDatasets")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "*/*");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "LLMObsDeleteDatasetsRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    deleteLLMObsExperiments(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'deleteLLMObsExperiments'");
            if (!_config.unstableOperations["v2.deleteLLMObsExperiments"]) {
                throw new Error("Unstable operation 'deleteLLMObsExperiments' is disabled");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "deleteLLMObsExperiments");
            }
            // Path Params
            const localVarPath = "/api/v2/llm-obs/v1/experiments/delete";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LLMObservabilityApi.deleteLLMObsExperiments")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "*/*");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "LLMObsDeleteExperimentsRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    deleteLLMObsProjects(body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'deleteLLMObsProjects'");
            if (!_config.unstableOperations["v2.deleteLLMObsProjects"]) {
                throw new Error("Unstable operation 'deleteLLMObsProjects' is disabled");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "deleteLLMObsProjects");
            }
            // Path Params
            const localVarPath = "/api/v2/llm-obs/v1/projects/delete";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LLMObservabilityApi.deleteLLMObsProjects")
                .makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "*/*");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "LLMObsDeleteProjectsRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    listLLMObsDatasetRecords(projectId, datasetId, filterVersion, pageCursor, pageLimit, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'listLLMObsDatasetRecords'");
            if (!_config.unstableOperations["v2.listLLMObsDatasetRecords"]) {
                throw new Error("Unstable operation 'listLLMObsDatasetRecords' is disabled");
            }
            // verify required parameter 'projectId' is not null or undefined
            if (projectId === null || projectId === undefined) {
                throw new baseapi_1.RequiredError("projectId", "listLLMObsDatasetRecords");
            }
            // verify required parameter 'datasetId' is not null or undefined
            if (datasetId === null || datasetId === undefined) {
                throw new baseapi_1.RequiredError("datasetId", "listLLMObsDatasetRecords");
            }
            // Path Params
            const localVarPath = "/api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/records"
                .replace("{project_id}", encodeURIComponent(String(projectId)))
                .replace("{dataset_id}", encodeURIComponent(String(datasetId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LLMObservabilityApi.listLLMObsDatasetRecords")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (filterVersion !== undefined) {
                requestContext.setQueryParam("filter[version]", ObjectSerializer_1.ObjectSerializer.serialize(filterVersion, "number", "int64"), "");
            }
            if (pageCursor !== undefined) {
                requestContext.setQueryParam("page[cursor]", ObjectSerializer_1.ObjectSerializer.serialize(pageCursor, "string", ""), "");
            }
            if (pageLimit !== undefined) {
                requestContext.setQueryParam("page[limit]", ObjectSerializer_1.ObjectSerializer.serialize(pageLimit, "number", "int64"), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    listLLMObsDatasets(projectId, filterName, filterId, pageCursor, pageLimit, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'listLLMObsDatasets'");
            if (!_config.unstableOperations["v2.listLLMObsDatasets"]) {
                throw new Error("Unstable operation 'listLLMObsDatasets' is disabled");
            }
            // verify required parameter 'projectId' is not null or undefined
            if (projectId === null || projectId === undefined) {
                throw new baseapi_1.RequiredError("projectId", "listLLMObsDatasets");
            }
            // Path Params
            const localVarPath = "/api/v2/llm-obs/v1/{project_id}/datasets".replace("{project_id}", encodeURIComponent(String(projectId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LLMObservabilityApi.listLLMObsDatasets")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (filterName !== undefined) {
                requestContext.setQueryParam("filter[name]", ObjectSerializer_1.ObjectSerializer.serialize(filterName, "string", ""), "");
            }
            if (filterId !== undefined) {
                requestContext.setQueryParam("filter[id]", ObjectSerializer_1.ObjectSerializer.serialize(filterId, "string", ""), "");
            }
            if (pageCursor !== undefined) {
                requestContext.setQueryParam("page[cursor]", ObjectSerializer_1.ObjectSerializer.serialize(pageCursor, "string", ""), "");
            }
            if (pageLimit !== undefined) {
                requestContext.setQueryParam("page[limit]", ObjectSerializer_1.ObjectSerializer.serialize(pageLimit, "number", "int64"), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    listLLMObsExperiments(filterProjectId, filterDatasetId, filterId, pageCursor, pageLimit, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'listLLMObsExperiments'");
            if (!_config.unstableOperations["v2.listLLMObsExperiments"]) {
                throw new Error("Unstable operation 'listLLMObsExperiments' is disabled");
            }
            // Path Params
            const localVarPath = "/api/v2/llm-obs/v1/experiments";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LLMObservabilityApi.listLLMObsExperiments")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (filterProjectId !== undefined) {
                requestContext.setQueryParam("filter[project_id]", ObjectSerializer_1.ObjectSerializer.serialize(filterProjectId, "string", ""), "");
            }
            if (filterDatasetId !== undefined) {
                requestContext.setQueryParam("filter[dataset_id]", ObjectSerializer_1.ObjectSerializer.serialize(filterDatasetId, "string", ""), "");
            }
            if (filterId !== undefined) {
                requestContext.setQueryParam("filter[id]", ObjectSerializer_1.ObjectSerializer.serialize(filterId, "string", ""), "");
            }
            if (pageCursor !== undefined) {
                requestContext.setQueryParam("page[cursor]", ObjectSerializer_1.ObjectSerializer.serialize(pageCursor, "string", ""), "");
            }
            if (pageLimit !== undefined) {
                requestContext.setQueryParam("page[limit]", ObjectSerializer_1.ObjectSerializer.serialize(pageLimit, "number", "int64"), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    listLLMObsProjects(filterId, filterName, pageCursor, pageLimit, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'listLLMObsProjects'");
            if (!_config.unstableOperations["v2.listLLMObsProjects"]) {
                throw new Error("Unstable operation 'listLLMObsProjects' is disabled");
            }
            // Path Params
            const localVarPath = "/api/v2/llm-obs/v1/projects";
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LLMObservabilityApi.listLLMObsProjects")
                .makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Query Params
            if (filterId !== undefined) {
                requestContext.setQueryParam("filter[id]", ObjectSerializer_1.ObjectSerializer.serialize(filterId, "string", ""), "");
            }
            if (filterName !== undefined) {
                requestContext.setQueryParam("filter[name]", ObjectSerializer_1.ObjectSerializer.serialize(filterName, "string", ""), "");
            }
            if (pageCursor !== undefined) {
                requestContext.setQueryParam("page[cursor]", ObjectSerializer_1.ObjectSerializer.serialize(pageCursor, "string", ""), "");
            }
            if (pageLimit !== undefined) {
                requestContext.setQueryParam("page[limit]", ObjectSerializer_1.ObjectSerializer.serialize(pageLimit, "number", "int64"), "");
            }
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    updateLLMObsDataset(projectId, datasetId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'updateLLMObsDataset'");
            if (!_config.unstableOperations["v2.updateLLMObsDataset"]) {
                throw new Error("Unstable operation 'updateLLMObsDataset' is disabled");
            }
            // verify required parameter 'projectId' is not null or undefined
            if (projectId === null || projectId === undefined) {
                throw new baseapi_1.RequiredError("projectId", "updateLLMObsDataset");
            }
            // verify required parameter 'datasetId' is not null or undefined
            if (datasetId === null || datasetId === undefined) {
                throw new baseapi_1.RequiredError("datasetId", "updateLLMObsDataset");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateLLMObsDataset");
            }
            // Path Params
            const localVarPath = "/api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}"
                .replace("{project_id}", encodeURIComponent(String(projectId)))
                .replace("{dataset_id}", encodeURIComponent(String(datasetId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LLMObservabilityApi.updateLLMObsDataset")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "LLMObsDatasetUpdateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    updateLLMObsDatasetRecords(projectId, datasetId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'updateLLMObsDatasetRecords'");
            if (!_config.unstableOperations["v2.updateLLMObsDatasetRecords"]) {
                throw new Error("Unstable operation 'updateLLMObsDatasetRecords' is disabled");
            }
            // verify required parameter 'projectId' is not null or undefined
            if (projectId === null || projectId === undefined) {
                throw new baseapi_1.RequiredError("projectId", "updateLLMObsDatasetRecords");
            }
            // verify required parameter 'datasetId' is not null or undefined
            if (datasetId === null || datasetId === undefined) {
                throw new baseapi_1.RequiredError("datasetId", "updateLLMObsDatasetRecords");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateLLMObsDatasetRecords");
            }
            // Path Params
            const localVarPath = "/api/v2/llm-obs/v1/{project_id}/datasets/{dataset_id}/records"
                .replace("{project_id}", encodeURIComponent(String(projectId)))
                .replace("{dataset_id}", encodeURIComponent(String(datasetId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LLMObservabilityApi.updateLLMObsDatasetRecords")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "LLMObsDatasetRecordsUpdateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    updateLLMObsExperiment(experimentId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'updateLLMObsExperiment'");
            if (!_config.unstableOperations["v2.updateLLMObsExperiment"]) {
                throw new Error("Unstable operation 'updateLLMObsExperiment' is disabled");
            }
            // verify required parameter 'experimentId' is not null or undefined
            if (experimentId === null || experimentId === undefined) {
                throw new baseapi_1.RequiredError("experimentId", "updateLLMObsExperiment");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateLLMObsExperiment");
            }
            // Path Params
            const localVarPath = "/api/v2/llm-obs/v1/experiments/{experiment_id}".replace("{experiment_id}", encodeURIComponent(String(experimentId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LLMObservabilityApi.updateLLMObsExperiment")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "LLMObsExperimentUpdateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            // Apply auth methods
            (0, configuration_1.applySecurityAuthentication)(_config, requestContext, [
                "apiKeyAuth",
                "appKeyAuth",
            ]);
            return requestContext;
        });
    }
    updateLLMObsProject(projectId, body, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _config = _options || this.configuration;
            logger_1.logger.warn("Using unstable operation 'updateLLMObsProject'");
            if (!_config.unstableOperations["v2.updateLLMObsProject"]) {
                throw new Error("Unstable operation 'updateLLMObsProject' is disabled");
            }
            // verify required parameter 'projectId' is not null or undefined
            if (projectId === null || projectId === undefined) {
                throw new baseapi_1.RequiredError("projectId", "updateLLMObsProject");
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new baseapi_1.RequiredError("body", "updateLLMObsProject");
            }
            // Path Params
            const localVarPath = "/api/v2/llm-obs/v1/projects/{project_id}".replace("{project_id}", encodeURIComponent(String(projectId)));
            // Make Request Context
            const requestContext = _config
                .getServer("v2.LLMObservabilityApi.updateLLMObsProject")
                .makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json");
            requestContext.setHttpConfig(_config.httpConfig);
            // Body Params
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json",
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "LLMObsProjectUpdateRequest", ""), contentType);
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
exports.LLMObservabilityApiRequestFactory = LLMObservabilityApiRequestFactory;
class LLMObservabilityApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createLLMObsDataset
     * @throws ApiException if the response code was not in [200, 299]
     */
    createLLMObsDataset(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200 || response.httpStatusCode === 201) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LLMObsDatasetResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LLMObsDatasetResponse", "");
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
     * @params response Response returned by the server for a request to createLLMObsDatasetRecords
     * @throws ApiException if the response code was not in [200, 299]
     */
    createLLMObsDatasetRecords(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200 || response.httpStatusCode === 201) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LLMObsDatasetRecordsMutationResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LLMObsDatasetRecordsMutationResponse", "");
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
     * @params response Response returned by the server for a request to createLLMObsExperiment
     * @throws ApiException if the response code was not in [200, 299]
     */
    createLLMObsExperiment(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200 || response.httpStatusCode === 201) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LLMObsExperimentResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
                response.httpStatusCode === 403) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LLMObsExperimentResponse", "");
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
     * @params response Response returned by the server for a request to createLLMObsExperimentEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
    createLLMObsExperimentEvents(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 202) {
                return;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
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
     * @params response Response returned by the server for a request to createLLMObsProject
     * @throws ApiException if the response code was not in [200, 299]
     */
    createLLMObsProject(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200 || response.httpStatusCode === 201) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LLMObsProjectResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
                response.httpStatusCode === 403) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LLMObsProjectResponse", "");
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
     * @params response Response returned by the server for a request to deleteLLMObsDatasetRecords
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteLLMObsDatasetRecords(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 204) {
                return;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
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
     * @params response Response returned by the server for a request to deleteLLMObsDatasets
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteLLMObsDatasets(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 204) {
                return;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
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
     * @params response Response returned by the server for a request to deleteLLMObsExperiments
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteLLMObsExperiments(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 204) {
                return;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
                response.httpStatusCode === 403) {
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
     * @params response Response returned by the server for a request to deleteLLMObsProjects
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteLLMObsProjects(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 204) {
                return;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
                response.httpStatusCode === 403) {
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
     * @params response Response returned by the server for a request to listLLMObsDatasetRecords
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLLMObsDatasetRecords(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LLMObsDatasetRecordsListResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LLMObsDatasetRecordsListResponse", "");
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
     * @params response Response returned by the server for a request to listLLMObsDatasets
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLLMObsDatasets(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LLMObsDatasetsResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LLMObsDatasetsResponse", "");
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
     * @params response Response returned by the server for a request to listLLMObsExperiments
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLLMObsExperiments(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LLMObsExperimentsResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
                response.httpStatusCode === 403) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LLMObsExperimentsResponse", "");
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
     * @params response Response returned by the server for a request to listLLMObsProjects
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLLMObsProjects(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LLMObsProjectsResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
                response.httpStatusCode === 403) {
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LLMObsProjectsResponse", "");
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
     * @params response Response returned by the server for a request to updateLLMObsDataset
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateLLMObsDataset(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LLMObsDatasetResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LLMObsDatasetResponse", "");
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
     * @params response Response returned by the server for a request to updateLLMObsDatasetRecords
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateLLMObsDatasetRecords(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LLMObsDatasetRecordsMutationResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LLMObsDatasetRecordsMutationResponse", "");
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
     * @params response Response returned by the server for a request to updateLLMObsExperiment
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateLLMObsExperiment(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LLMObsExperimentResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LLMObsExperimentResponse", "");
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
     * @params response Response returned by the server for a request to updateLLMObsProject
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateLLMObsProject(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (response.httpStatusCode === 200) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LLMObsProjectResponse");
                return body;
            }
            if (response.httpStatusCode === 400 ||
                response.httpStatusCode === 401 ||
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
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "LLMObsProjectResponse", "");
                return body;
            }
            const body = (yield response.body.text()) || "";
            throw new exception_1.ApiException(response.httpStatusCode, 'Unknown API Status Code!\nBody: "' + body + '"');
        });
    }
}
exports.LLMObservabilityApiResponseProcessor = LLMObservabilityApiResponseProcessor;
class LLMObservabilityApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory =
            requestFactory || new LLMObservabilityApiRequestFactory(configuration);
        this.responseProcessor =
            responseProcessor || new LLMObservabilityApiResponseProcessor();
    }
    /**
     * Create a new LLM Observability dataset within the specified project.
     * @param param The request object
     */
    createLLMObsDataset(param, options) {
        const requestContextPromise = this.requestFactory.createLLMObsDataset(param.projectId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createLLMObsDataset(responseContext);
            });
        });
    }
    /**
     * Append one or more records to an LLM Observability dataset.
     * @param param The request object
     */
    createLLMObsDatasetRecords(param, options) {
        const requestContextPromise = this.requestFactory.createLLMObsDatasetRecords(param.projectId, param.datasetId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createLLMObsDatasetRecords(responseContext);
            });
        });
    }
    /**
     * Create a new LLM Observability experiment.
     * @param param The request object
     */
    createLLMObsExperiment(param, options) {
        const requestContextPromise = this.requestFactory.createLLMObsExperiment(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createLLMObsExperiment(responseContext);
            });
        });
    }
    /**
     * Push spans and metrics for an LLM Observability experiment.
     * @param param The request object
     */
    createLLMObsExperimentEvents(param, options) {
        const requestContextPromise = this.requestFactory.createLLMObsExperimentEvents(param.experimentId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createLLMObsExperimentEvents(responseContext);
            });
        });
    }
    /**
     * Create a new LLM Observability project. Returns the existing project if a name conflict occurs.
     * @param param The request object
     */
    createLLMObsProject(param, options) {
        const requestContextPromise = this.requestFactory.createLLMObsProject(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.createLLMObsProject(responseContext);
            });
        });
    }
    /**
     * Delete one or more records from an LLM Observability dataset.
     * @param param The request object
     */
    deleteLLMObsDatasetRecords(param, options) {
        const requestContextPromise = this.requestFactory.deleteLLMObsDatasetRecords(param.projectId, param.datasetId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteLLMObsDatasetRecords(responseContext);
            });
        });
    }
    /**
     * Delete one or more LLM Observability datasets within the specified project.
     * @param param The request object
     */
    deleteLLMObsDatasets(param, options) {
        const requestContextPromise = this.requestFactory.deleteLLMObsDatasets(param.projectId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteLLMObsDatasets(responseContext);
            });
        });
    }
    /**
     * Delete one or more LLM Observability experiments.
     * @param param The request object
     */
    deleteLLMObsExperiments(param, options) {
        const requestContextPromise = this.requestFactory.deleteLLMObsExperiments(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteLLMObsExperiments(responseContext);
            });
        });
    }
    /**
     * Delete one or more LLM Observability projects.
     * @param param The request object
     */
    deleteLLMObsProjects(param, options) {
        const requestContextPromise = this.requestFactory.deleteLLMObsProjects(param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.deleteLLMObsProjects(responseContext);
            });
        });
    }
    /**
     * List all records in an LLM Observability dataset, sorted by creation date, newest first.
     * @param param The request object
     */
    listLLMObsDatasetRecords(param, options) {
        const requestContextPromise = this.requestFactory.listLLMObsDatasetRecords(param.projectId, param.datasetId, param.filterVersion, param.pageCursor, param.pageLimit, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listLLMObsDatasetRecords(responseContext);
            });
        });
    }
    /**
     * List all LLM Observability datasets for a project, sorted by creation date, newest first.
     * @param param The request object
     */
    listLLMObsDatasets(param, options) {
        const requestContextPromise = this.requestFactory.listLLMObsDatasets(param.projectId, param.filterName, param.filterId, param.pageCursor, param.pageLimit, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listLLMObsDatasets(responseContext);
            });
        });
    }
    /**
     * List all LLM Observability experiments sorted by creation date, newest first.
     * @param param The request object
     */
    listLLMObsExperiments(param = {}, options) {
        const requestContextPromise = this.requestFactory.listLLMObsExperiments(param.filterProjectId, param.filterDatasetId, param.filterId, param.pageCursor, param.pageLimit, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listLLMObsExperiments(responseContext);
            });
        });
    }
    /**
     * List all LLM Observability projects sorted by creation date, newest first.
     * @param param The request object
     */
    listLLMObsProjects(param = {}, options) {
        const requestContextPromise = this.requestFactory.listLLMObsProjects(param.filterId, param.filterName, param.pageCursor, param.pageLimit, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.listLLMObsProjects(responseContext);
            });
        });
    }
    /**
     * Partially update an existing LLM Observability dataset within the specified project.
     * @param param The request object
     */
    updateLLMObsDataset(param, options) {
        const requestContextPromise = this.requestFactory.updateLLMObsDataset(param.projectId, param.datasetId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateLLMObsDataset(responseContext);
            });
        });
    }
    /**
     * Update one or more existing records in an LLM Observability dataset.
     * @param param The request object
     */
    updateLLMObsDatasetRecords(param, options) {
        const requestContextPromise = this.requestFactory.updateLLMObsDatasetRecords(param.projectId, param.datasetId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateLLMObsDatasetRecords(responseContext);
            });
        });
    }
    /**
     * Partially update an existing LLM Observability experiment.
     * @param param The request object
     */
    updateLLMObsExperiment(param, options) {
        const requestContextPromise = this.requestFactory.updateLLMObsExperiment(param.experimentId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateLLMObsExperiment(responseContext);
            });
        });
    }
    /**
     * Partially update an existing LLM Observability project.
     * @param param The request object
     */
    updateLLMObsProject(param, options) {
        const requestContextPromise = this.requestFactory.updateLLMObsProject(param.projectId, param.body, options);
        return requestContextPromise.then((requestContext) => {
            return this.configuration.httpApi
                .send(requestContext)
                .then((responseContext) => {
                return this.responseProcessor.updateLLMObsProject(responseContext);
            });
        });
    }
}
exports.LLMObservabilityApi = LLMObservabilityApi;
//# sourceMappingURL=LLMObservabilityApi.js.map