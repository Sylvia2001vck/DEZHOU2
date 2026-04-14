import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { LLMObsDatasetRecordsListResponse } from "../models/LLMObsDatasetRecordsListResponse";
import { LLMObsDatasetRecordsMutationResponse } from "../models/LLMObsDatasetRecordsMutationResponse";
import { LLMObsDatasetRecordsRequest } from "../models/LLMObsDatasetRecordsRequest";
import { LLMObsDatasetRecordsUpdateRequest } from "../models/LLMObsDatasetRecordsUpdateRequest";
import { LLMObsDatasetRequest } from "../models/LLMObsDatasetRequest";
import { LLMObsDatasetResponse } from "../models/LLMObsDatasetResponse";
import { LLMObsDatasetsResponse } from "../models/LLMObsDatasetsResponse";
import { LLMObsDatasetUpdateRequest } from "../models/LLMObsDatasetUpdateRequest";
import { LLMObsDeleteDatasetRecordsRequest } from "../models/LLMObsDeleteDatasetRecordsRequest";
import { LLMObsDeleteDatasetsRequest } from "../models/LLMObsDeleteDatasetsRequest";
import { LLMObsDeleteExperimentsRequest } from "../models/LLMObsDeleteExperimentsRequest";
import { LLMObsDeleteProjectsRequest } from "../models/LLMObsDeleteProjectsRequest";
import { LLMObsExperimentEventsRequest } from "../models/LLMObsExperimentEventsRequest";
import { LLMObsExperimentRequest } from "../models/LLMObsExperimentRequest";
import { LLMObsExperimentResponse } from "../models/LLMObsExperimentResponse";
import { LLMObsExperimentsResponse } from "../models/LLMObsExperimentsResponse";
import { LLMObsExperimentUpdateRequest } from "../models/LLMObsExperimentUpdateRequest";
import { LLMObsProjectRequest } from "../models/LLMObsProjectRequest";
import { LLMObsProjectResponse } from "../models/LLMObsProjectResponse";
import { LLMObsProjectsResponse } from "../models/LLMObsProjectsResponse";
import { LLMObsProjectUpdateRequest } from "../models/LLMObsProjectUpdateRequest";
export declare class LLMObservabilityApiRequestFactory extends BaseAPIRequestFactory {
    createLLMObsDataset(projectId: string, body: LLMObsDatasetRequest, _options?: Configuration): Promise<RequestContext>;
    createLLMObsDatasetRecords(projectId: string, datasetId: string, body: LLMObsDatasetRecordsRequest, _options?: Configuration): Promise<RequestContext>;
    createLLMObsExperiment(body: LLMObsExperimentRequest, _options?: Configuration): Promise<RequestContext>;
    createLLMObsExperimentEvents(experimentId: string, body: LLMObsExperimentEventsRequest, _options?: Configuration): Promise<RequestContext>;
    createLLMObsProject(body: LLMObsProjectRequest, _options?: Configuration): Promise<RequestContext>;
    deleteLLMObsDatasetRecords(projectId: string, datasetId: string, body: LLMObsDeleteDatasetRecordsRequest, _options?: Configuration): Promise<RequestContext>;
    deleteLLMObsDatasets(projectId: string, body: LLMObsDeleteDatasetsRequest, _options?: Configuration): Promise<RequestContext>;
    deleteLLMObsExperiments(body: LLMObsDeleteExperimentsRequest, _options?: Configuration): Promise<RequestContext>;
    deleteLLMObsProjects(body: LLMObsDeleteProjectsRequest, _options?: Configuration): Promise<RequestContext>;
    listLLMObsDatasetRecords(projectId: string, datasetId: string, filterVersion?: number, pageCursor?: string, pageLimit?: number, _options?: Configuration): Promise<RequestContext>;
    listLLMObsDatasets(projectId: string, filterName?: string, filterId?: string, pageCursor?: string, pageLimit?: number, _options?: Configuration): Promise<RequestContext>;
    listLLMObsExperiments(filterProjectId?: string, filterDatasetId?: string, filterId?: string, pageCursor?: string, pageLimit?: number, _options?: Configuration): Promise<RequestContext>;
    listLLMObsProjects(filterId?: string, filterName?: string, pageCursor?: string, pageLimit?: number, _options?: Configuration): Promise<RequestContext>;
    updateLLMObsDataset(projectId: string, datasetId: string, body: LLMObsDatasetUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    updateLLMObsDatasetRecords(projectId: string, datasetId: string, body: LLMObsDatasetRecordsUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    updateLLMObsExperiment(experimentId: string, body: LLMObsExperimentUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    updateLLMObsProject(projectId: string, body: LLMObsProjectUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class LLMObservabilityApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createLLMObsDataset
     * @throws ApiException if the response code was not in [200, 299]
     */
    createLLMObsDataset(response: ResponseContext): Promise<LLMObsDatasetResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createLLMObsDatasetRecords
     * @throws ApiException if the response code was not in [200, 299]
     */
    createLLMObsDatasetRecords(response: ResponseContext): Promise<LLMObsDatasetRecordsMutationResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createLLMObsExperiment
     * @throws ApiException if the response code was not in [200, 299]
     */
    createLLMObsExperiment(response: ResponseContext): Promise<LLMObsExperimentResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createLLMObsExperimentEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
    createLLMObsExperimentEvents(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createLLMObsProject
     * @throws ApiException if the response code was not in [200, 299]
     */
    createLLMObsProject(response: ResponseContext): Promise<LLMObsProjectResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteLLMObsDatasetRecords
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteLLMObsDatasetRecords(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteLLMObsDatasets
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteLLMObsDatasets(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteLLMObsExperiments
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteLLMObsExperiments(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteLLMObsProjects
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteLLMObsProjects(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLLMObsDatasetRecords
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLLMObsDatasetRecords(response: ResponseContext): Promise<LLMObsDatasetRecordsListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLLMObsDatasets
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLLMObsDatasets(response: ResponseContext): Promise<LLMObsDatasetsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLLMObsExperiments
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLLMObsExperiments(response: ResponseContext): Promise<LLMObsExperimentsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLLMObsProjects
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLLMObsProjects(response: ResponseContext): Promise<LLMObsProjectsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLLMObsDataset
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateLLMObsDataset(response: ResponseContext): Promise<LLMObsDatasetResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLLMObsDatasetRecords
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateLLMObsDatasetRecords(response: ResponseContext): Promise<LLMObsDatasetRecordsMutationResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLLMObsExperiment
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateLLMObsExperiment(response: ResponseContext): Promise<LLMObsExperimentResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLLMObsProject
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateLLMObsProject(response: ResponseContext): Promise<LLMObsProjectResponse>;
}
export interface LLMObservabilityApiCreateLLMObsDatasetRequest {
    /**
     * The ID of the LLM Observability project.
     * @type string
     */
    projectId: string;
    /**
     * Create dataset payload.
     * @type LLMObsDatasetRequest
     */
    body: LLMObsDatasetRequest;
}
export interface LLMObservabilityApiCreateLLMObsDatasetRecordsRequest {
    /**
     * The ID of the LLM Observability project.
     * @type string
     */
    projectId: string;
    /**
     * The ID of the LLM Observability dataset.
     * @type string
     */
    datasetId: string;
    /**
     * Append records payload.
     * @type LLMObsDatasetRecordsRequest
     */
    body: LLMObsDatasetRecordsRequest;
}
export interface LLMObservabilityApiCreateLLMObsExperimentRequest {
    /**
     * Create experiment payload.
     * @type LLMObsExperimentRequest
     */
    body: LLMObsExperimentRequest;
}
export interface LLMObservabilityApiCreateLLMObsExperimentEventsRequest {
    /**
     * The ID of the LLM Observability experiment.
     * @type string
     */
    experimentId: string;
    /**
     * Experiment events payload.
     * @type LLMObsExperimentEventsRequest
     */
    body: LLMObsExperimentEventsRequest;
}
export interface LLMObservabilityApiCreateLLMObsProjectRequest {
    /**
     * Create project payload.
     * @type LLMObsProjectRequest
     */
    body: LLMObsProjectRequest;
}
export interface LLMObservabilityApiDeleteLLMObsDatasetRecordsRequest {
    /**
     * The ID of the LLM Observability project.
     * @type string
     */
    projectId: string;
    /**
     * The ID of the LLM Observability dataset.
     * @type string
     */
    datasetId: string;
    /**
     * Delete records payload.
     * @type LLMObsDeleteDatasetRecordsRequest
     */
    body: LLMObsDeleteDatasetRecordsRequest;
}
export interface LLMObservabilityApiDeleteLLMObsDatasetsRequest {
    /**
     * The ID of the LLM Observability project.
     * @type string
     */
    projectId: string;
    /**
     * Delete datasets payload.
     * @type LLMObsDeleteDatasetsRequest
     */
    body: LLMObsDeleteDatasetsRequest;
}
export interface LLMObservabilityApiDeleteLLMObsExperimentsRequest {
    /**
     * Delete experiments payload.
     * @type LLMObsDeleteExperimentsRequest
     */
    body: LLMObsDeleteExperimentsRequest;
}
export interface LLMObservabilityApiDeleteLLMObsProjectsRequest {
    /**
     * Delete projects payload.
     * @type LLMObsDeleteProjectsRequest
     */
    body: LLMObsDeleteProjectsRequest;
}
export interface LLMObservabilityApiListLLMObsDatasetRecordsRequest {
    /**
     * The ID of the LLM Observability project.
     * @type string
     */
    projectId: string;
    /**
     * The ID of the LLM Observability dataset.
     * @type string
     */
    datasetId: string;
    /**
     * Retrieve records from a specific dataset version. Defaults to the current version.
     * @type number
     */
    filterVersion?: number;
    /**
     * Use the Pagination cursor to retrieve the next page of results.
     * @type string
     */
    pageCursor?: string;
    /**
     * Maximum number of results to return per page.
     * @type number
     */
    pageLimit?: number;
}
export interface LLMObservabilityApiListLLMObsDatasetsRequest {
    /**
     * The ID of the LLM Observability project.
     * @type string
     */
    projectId: string;
    /**
     * Filter datasets by name.
     * @type string
     */
    filterName?: string;
    /**
     * Filter datasets by dataset ID.
     * @type string
     */
    filterId?: string;
    /**
     * Use the Pagination cursor to retrieve the next page of results.
     * @type string
     */
    pageCursor?: string;
    /**
     * Maximum number of results to return per page.
     * @type number
     */
    pageLimit?: number;
}
export interface LLMObservabilityApiListLLMObsExperimentsRequest {
    /**
     * Filter experiments by project ID. Required if `filter[dataset_id]` is not provided.
     * @type string
     */
    filterProjectId?: string;
    /**
     * Filter experiments by dataset ID.
     * @type string
     */
    filterDatasetId?: string;
    /**
     * Filter experiments by experiment ID. Can be specified multiple times.
     * @type string
     */
    filterId?: string;
    /**
     * Use the Pagination cursor to retrieve the next page of results.
     * @type string
     */
    pageCursor?: string;
    /**
     * Maximum number of results to return per page.
     * @type number
     */
    pageLimit?: number;
}
export interface LLMObservabilityApiListLLMObsProjectsRequest {
    /**
     * Filter projects by project ID.
     * @type string
     */
    filterId?: string;
    /**
     * Filter projects by name.
     * @type string
     */
    filterName?: string;
    /**
     * Use the Pagination cursor to retrieve the next page of results.
     * @type string
     */
    pageCursor?: string;
    /**
     * Maximum number of results to return per page.
     * @type number
     */
    pageLimit?: number;
}
export interface LLMObservabilityApiUpdateLLMObsDatasetRequest {
    /**
     * The ID of the LLM Observability project.
     * @type string
     */
    projectId: string;
    /**
     * The ID of the LLM Observability dataset.
     * @type string
     */
    datasetId: string;
    /**
     * Update dataset payload.
     * @type LLMObsDatasetUpdateRequest
     */
    body: LLMObsDatasetUpdateRequest;
}
export interface LLMObservabilityApiUpdateLLMObsDatasetRecordsRequest {
    /**
     * The ID of the LLM Observability project.
     * @type string
     */
    projectId: string;
    /**
     * The ID of the LLM Observability dataset.
     * @type string
     */
    datasetId: string;
    /**
     * Update records payload.
     * @type LLMObsDatasetRecordsUpdateRequest
     */
    body: LLMObsDatasetRecordsUpdateRequest;
}
export interface LLMObservabilityApiUpdateLLMObsExperimentRequest {
    /**
     * The ID of the LLM Observability experiment.
     * @type string
     */
    experimentId: string;
    /**
     * Update experiment payload.
     * @type LLMObsExperimentUpdateRequest
     */
    body: LLMObsExperimentUpdateRequest;
}
export interface LLMObservabilityApiUpdateLLMObsProjectRequest {
    /**
     * The ID of the LLM Observability project.
     * @type string
     */
    projectId: string;
    /**
     * Update project payload.
     * @type LLMObsProjectUpdateRequest
     */
    body: LLMObsProjectUpdateRequest;
}
export declare class LLMObservabilityApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: LLMObservabilityApiRequestFactory, responseProcessor?: LLMObservabilityApiResponseProcessor);
    /**
     * Create a new LLM Observability dataset within the specified project.
     * @param param The request object
     */
    createLLMObsDataset(param: LLMObservabilityApiCreateLLMObsDatasetRequest, options?: Configuration): Promise<LLMObsDatasetResponse>;
    /**
     * Append one or more records to an LLM Observability dataset.
     * @param param The request object
     */
    createLLMObsDatasetRecords(param: LLMObservabilityApiCreateLLMObsDatasetRecordsRequest, options?: Configuration): Promise<LLMObsDatasetRecordsMutationResponse>;
    /**
     * Create a new LLM Observability experiment.
     * @param param The request object
     */
    createLLMObsExperiment(param: LLMObservabilityApiCreateLLMObsExperimentRequest, options?: Configuration): Promise<LLMObsExperimentResponse>;
    /**
     * Push spans and metrics for an LLM Observability experiment.
     * @param param The request object
     */
    createLLMObsExperimentEvents(param: LLMObservabilityApiCreateLLMObsExperimentEventsRequest, options?: Configuration): Promise<void>;
    /**
     * Create a new LLM Observability project. Returns the existing project if a name conflict occurs.
     * @param param The request object
     */
    createLLMObsProject(param: LLMObservabilityApiCreateLLMObsProjectRequest, options?: Configuration): Promise<LLMObsProjectResponse>;
    /**
     * Delete one or more records from an LLM Observability dataset.
     * @param param The request object
     */
    deleteLLMObsDatasetRecords(param: LLMObservabilityApiDeleteLLMObsDatasetRecordsRequest, options?: Configuration): Promise<void>;
    /**
     * Delete one or more LLM Observability datasets within the specified project.
     * @param param The request object
     */
    deleteLLMObsDatasets(param: LLMObservabilityApiDeleteLLMObsDatasetsRequest, options?: Configuration): Promise<void>;
    /**
     * Delete one or more LLM Observability experiments.
     * @param param The request object
     */
    deleteLLMObsExperiments(param: LLMObservabilityApiDeleteLLMObsExperimentsRequest, options?: Configuration): Promise<void>;
    /**
     * Delete one or more LLM Observability projects.
     * @param param The request object
     */
    deleteLLMObsProjects(param: LLMObservabilityApiDeleteLLMObsProjectsRequest, options?: Configuration): Promise<void>;
    /**
     * List all records in an LLM Observability dataset, sorted by creation date, newest first.
     * @param param The request object
     */
    listLLMObsDatasetRecords(param: LLMObservabilityApiListLLMObsDatasetRecordsRequest, options?: Configuration): Promise<LLMObsDatasetRecordsListResponse>;
    /**
     * List all LLM Observability datasets for a project, sorted by creation date, newest first.
     * @param param The request object
     */
    listLLMObsDatasets(param: LLMObservabilityApiListLLMObsDatasetsRequest, options?: Configuration): Promise<LLMObsDatasetsResponse>;
    /**
     * List all LLM Observability experiments sorted by creation date, newest first.
     * @param param The request object
     */
    listLLMObsExperiments(param?: LLMObservabilityApiListLLMObsExperimentsRequest, options?: Configuration): Promise<LLMObsExperimentsResponse>;
    /**
     * List all LLM Observability projects sorted by creation date, newest first.
     * @param param The request object
     */
    listLLMObsProjects(param?: LLMObservabilityApiListLLMObsProjectsRequest, options?: Configuration): Promise<LLMObsProjectsResponse>;
    /**
     * Partially update an existing LLM Observability dataset within the specified project.
     * @param param The request object
     */
    updateLLMObsDataset(param: LLMObservabilityApiUpdateLLMObsDatasetRequest, options?: Configuration): Promise<LLMObsDatasetResponse>;
    /**
     * Update one or more existing records in an LLM Observability dataset.
     * @param param The request object
     */
    updateLLMObsDatasetRecords(param: LLMObservabilityApiUpdateLLMObsDatasetRecordsRequest, options?: Configuration): Promise<LLMObsDatasetRecordsMutationResponse>;
    /**
     * Partially update an existing LLM Observability experiment.
     * @param param The request object
     */
    updateLLMObsExperiment(param: LLMObservabilityApiUpdateLLMObsExperimentRequest, options?: Configuration): Promise<LLMObsExperimentResponse>;
    /**
     * Partially update an existing LLM Observability project.
     * @param param The request object
     */
    updateLLMObsProject(param: LLMObservabilityApiUpdateLLMObsProjectRequest, options?: Configuration): Promise<LLMObsProjectResponse>;
}
