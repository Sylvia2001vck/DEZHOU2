import { BaseAPIRequestFactory } from "../../datadog-api-client-common/baseapi";
import { Configuration } from "../../datadog-api-client-common/configuration";
import { RequestContext, ResponseContext } from "../../datadog-api-client-common/http/http";
import { CreateComponentRequest } from "../models/CreateComponentRequest";
import { CreateDegradationRequest } from "../models/CreateDegradationRequest";
import { CreateMaintenanceRequest } from "../models/CreateMaintenanceRequest";
import { CreateStatusPageRequest } from "../models/CreateStatusPageRequest";
import { Degradation } from "../models/Degradation";
import { DegradationArray } from "../models/DegradationArray";
import { Maintenance } from "../models/Maintenance";
import { MaintenanceArray } from "../models/MaintenanceArray";
import { PatchComponentRequest } from "../models/PatchComponentRequest";
import { PatchDegradationRequest } from "../models/PatchDegradationRequest";
import { PatchMaintenanceRequest } from "../models/PatchMaintenanceRequest";
import { PatchStatusPageRequest } from "../models/PatchStatusPageRequest";
import { StatusPage } from "../models/StatusPage";
import { StatusPageArray } from "../models/StatusPageArray";
import { StatusPagesComponent } from "../models/StatusPagesComponent";
import { StatusPagesComponentArray } from "../models/StatusPagesComponentArray";
export declare class StatusPagesApiRequestFactory extends BaseAPIRequestFactory {
    createComponent(pageId: string, body: CreateComponentRequest, include?: string, _options?: Configuration): Promise<RequestContext>;
    createDegradation(pageId: string, body: CreateDegradationRequest, notifySubscribers?: boolean, include?: string, _options?: Configuration): Promise<RequestContext>;
    createMaintenance(pageId: string, body: CreateMaintenanceRequest, notifySubscribers?: boolean, include?: string, _options?: Configuration): Promise<RequestContext>;
    createStatusPage(body: CreateStatusPageRequest, include?: string, _options?: Configuration): Promise<RequestContext>;
    deleteComponent(pageId: string, componentId: string, _options?: Configuration): Promise<RequestContext>;
    deleteDegradation(pageId: string, degradationId: string, _options?: Configuration): Promise<RequestContext>;
    deleteStatusPage(pageId: string, _options?: Configuration): Promise<RequestContext>;
    getComponent(pageId: string, componentId: string, include?: string, _options?: Configuration): Promise<RequestContext>;
    getDegradation(pageId: string, degradationId: string, include?: string, _options?: Configuration): Promise<RequestContext>;
    getMaintenance(pageId: string, maintenanceId: string, include?: string, _options?: Configuration): Promise<RequestContext>;
    getStatusPage(pageId: string, include?: string, _options?: Configuration): Promise<RequestContext>;
    listComponents(pageId: string, include?: string, _options?: Configuration): Promise<RequestContext>;
    listDegradations(filterPageId?: string, pageOffset?: number, pageLimit?: number, include?: string, filterStatus?: string, sort?: string, _options?: Configuration): Promise<RequestContext>;
    listMaintenances(filterPageId?: string, pageOffset?: number, pageLimit?: number, include?: string, filterStatus?: string, sort?: string, _options?: Configuration): Promise<RequestContext>;
    listStatusPages(pageOffset?: number, pageLimit?: number, include?: string, _options?: Configuration): Promise<RequestContext>;
    updateComponent(pageId: string, componentId: string, body: PatchComponentRequest, include?: string, _options?: Configuration): Promise<RequestContext>;
    updateDegradation(pageId: string, degradationId: string, body: PatchDegradationRequest, notifySubscribers?: boolean, include?: string, _options?: Configuration): Promise<RequestContext>;
    updateMaintenance(pageId: string, maintenanceId: string, body: PatchMaintenanceRequest, notifySubscribers?: boolean, include?: string, _options?: Configuration): Promise<RequestContext>;
    updateStatusPage(pageId: string, body: PatchStatusPageRequest, deleteSubscribers?: boolean, include?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class StatusPagesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createComponent
     * @throws ApiException if the response code was not in [200, 299]
     */
    createComponent(response: ResponseContext): Promise<StatusPagesComponent>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDegradation
     * @throws ApiException if the response code was not in [200, 299]
     */
    createDegradation(response: ResponseContext): Promise<Degradation>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createMaintenance
     * @throws ApiException if the response code was not in [200, 299]
     */
    createMaintenance(response: ResponseContext): Promise<Maintenance>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createStatusPage
     * @throws ApiException if the response code was not in [200, 299]
     */
    createStatusPage(response: ResponseContext): Promise<StatusPage>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteComponent
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteComponent(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDegradation
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteDegradation(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteStatusPage
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteStatusPage(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getComponent
     * @throws ApiException if the response code was not in [200, 299]
     */
    getComponent(response: ResponseContext): Promise<StatusPagesComponent>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDegradation
     * @throws ApiException if the response code was not in [200, 299]
     */
    getDegradation(response: ResponseContext): Promise<Degradation>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMaintenance
     * @throws ApiException if the response code was not in [200, 299]
     */
    getMaintenance(response: ResponseContext): Promise<Maintenance>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getStatusPage
     * @throws ApiException if the response code was not in [200, 299]
     */
    getStatusPage(response: ResponseContext): Promise<StatusPage>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listComponents
     * @throws ApiException if the response code was not in [200, 299]
     */
    listComponents(response: ResponseContext): Promise<StatusPagesComponentArray>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDegradations
     * @throws ApiException if the response code was not in [200, 299]
     */
    listDegradations(response: ResponseContext): Promise<DegradationArray>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMaintenances
     * @throws ApiException if the response code was not in [200, 299]
     */
    listMaintenances(response: ResponseContext): Promise<MaintenanceArray>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listStatusPages
     * @throws ApiException if the response code was not in [200, 299]
     */
    listStatusPages(response: ResponseContext): Promise<StatusPageArray>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateComponent
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateComponent(response: ResponseContext): Promise<StatusPagesComponent>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDegradation
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateDegradation(response: ResponseContext): Promise<Degradation>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateMaintenance
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateMaintenance(response: ResponseContext): Promise<Maintenance>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateStatusPage
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateStatusPage(response: ResponseContext): Promise<StatusPage>;
}
export interface StatusPagesApiCreateComponentRequest {
    /**
     * The ID of the status page.
     * @type string
     */
    pageId: string;
    /**
     * @type CreateComponentRequest
     */
    body: CreateComponentRequest;
    /**
     * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group.
     * @type string
     */
    include?: string;
}
export interface StatusPagesApiCreateDegradationRequest {
    /**
     * The ID of the status page.
     * @type string
     */
    pageId: string;
    /**
     * @type CreateDegradationRequest
     */
    body: CreateDegradationRequest;
    /**
     * Whether to notify page subscribers of the degradation.
     * @type boolean
     */
    notifySubscribers?: boolean;
    /**
     * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
     * @type string
     */
    include?: string;
}
export interface StatusPagesApiCreateMaintenanceRequest {
    /**
     * The ID of the status page.
     * @type string
     */
    pageId: string;
    /**
     * @type CreateMaintenanceRequest
     */
    body: CreateMaintenanceRequest;
    /**
     * Whether to notify page subscribers of the maintenance.
     * @type boolean
     */
    notifySubscribers?: boolean;
    /**
     * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
     * @type string
     */
    include?: string;
}
export interface StatusPagesApiCreateStatusPageRequest {
    /**
     * @type CreateStatusPageRequest
     */
    body: CreateStatusPageRequest;
    /**
     * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user.
     * @type string
     */
    include?: string;
}
export interface StatusPagesApiDeleteComponentRequest {
    /**
     * The ID of the status page.
     * @type string
     */
    pageId: string;
    /**
     * The ID of the component.
     * @type string
     */
    componentId: string;
}
export interface StatusPagesApiDeleteDegradationRequest {
    /**
     * The ID of the status page.
     * @type string
     */
    pageId: string;
    /**
     * The ID of the degradation.
     * @type string
     */
    degradationId: string;
}
export interface StatusPagesApiDeleteStatusPageRequest {
    /**
     * The ID of the status page.
     * @type string
     */
    pageId: string;
}
export interface StatusPagesApiGetComponentRequest {
    /**
     * The ID of the status page.
     * @type string
     */
    pageId: string;
    /**
     * The ID of the component.
     * @type string
     */
    componentId: string;
    /**
     * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group.
     * @type string
     */
    include?: string;
}
export interface StatusPagesApiGetDegradationRequest {
    /**
     * The ID of the status page.
     * @type string
     */
    pageId: string;
    /**
     * The ID of the degradation.
     * @type string
     */
    degradationId: string;
    /**
     * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
     * @type string
     */
    include?: string;
}
export interface StatusPagesApiGetMaintenanceRequest {
    /**
     * The ID of the status page.
     * @type string
     */
    pageId: string;
    /**
     * The ID of the maintenance.
     * @type string
     */
    maintenanceId: string;
    /**
     * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
     * @type string
     */
    include?: string;
}
export interface StatusPagesApiGetStatusPageRequest {
    /**
     * The ID of the status page.
     * @type string
     */
    pageId: string;
    /**
     * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user.
     * @type string
     */
    include?: string;
}
export interface StatusPagesApiListComponentsRequest {
    /**
     * The ID of the status page.
     * @type string
     */
    pageId: string;
    /**
     * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group.
     * @type string
     */
    include?: string;
}
export interface StatusPagesApiListDegradationsRequest {
    /**
     * Optional page id filter.
     * @type string
     */
    filterPageId?: string;
    /**
     * Offset to use as the start of the page.
     * @type number
     */
    pageOffset?: number;
    /**
     * The number of degradations to return per page.
     * @type number
     */
    pageLimit?: number;
    /**
     * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
     * @type string
     */
    include?: string;
    /**
     * Optional degradation status filter. Supported values: investigating, identified, monitoring, resolved.
     * @type string
     */
    filterStatus?: string;
    /**
     * Sort order. Prefix with '-' for descending. Supported values: created_at, -created_at, modified_at, -modified_at.
     * @type string
     */
    sort?: string;
}
export interface StatusPagesApiListMaintenancesRequest {
    /**
     * Optional page id filter.
     * @type string
     */
    filterPageId?: string;
    /**
     * Offset to use as the start of the page.
     * @type number
     */
    pageOffset?: number;
    /**
     * The number of maintenances to return per page.
     * @type number
     */
    pageLimit?: number;
    /**
     * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
     * @type string
     */
    include?: string;
    /**
     * Optional maintenance status filter. Supported values: scheduled, in_progress, completed.
     * @type string
     */
    filterStatus?: string;
    /**
     * Sort order. Prefix with '-' for descending. Supported values: created_at, -created_at, start_date, -start_date.
     * @type string
     */
    sort?: string;
}
export interface StatusPagesApiListStatusPagesRequest {
    /**
     * Offset to use as the start of the page.
     * @type number
     */
    pageOffset?: number;
    /**
     * The number of status pages to return per page.
     * @type number
     */
    pageLimit?: number;
    /**
     * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user.
     * @type string
     */
    include?: string;
}
export interface StatusPagesApiUpdateComponentRequest {
    /**
     * The ID of the status page.
     * @type string
     */
    pageId: string;
    /**
     * The ID of the component.
     * @type string
     */
    componentId: string;
    /**
     * @type PatchComponentRequest
     */
    body: PatchComponentRequest;
    /**
     * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page, group.
     * @type string
     */
    include?: string;
}
export interface StatusPagesApiUpdateDegradationRequest {
    /**
     * The ID of the status page.
     * @type string
     */
    pageId: string;
    /**
     * The ID of the degradation.
     * @type string
     */
    degradationId: string;
    /**
     * @type PatchDegradationRequest
     */
    body: PatchDegradationRequest;
    /**
     * Whether to notify page subscribers of the degradation.
     * @type boolean
     */
    notifySubscribers?: boolean;
    /**
     * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
     * @type string
     */
    include?: string;
}
export interface StatusPagesApiUpdateMaintenanceRequest {
    /**
     * The ID of the status page.
     * @type string
     */
    pageId: string;
    /**
     * The ID of the maintenance.
     * @type string
     */
    maintenanceId: string;
    /**
     * @type PatchMaintenanceRequest
     */
    body: PatchMaintenanceRequest;
    /**
     * Whether to notify page subscribers of the maintenance.
     * @type boolean
     */
    notifySubscribers?: boolean;
    /**
     * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user, status_page.
     * @type string
     */
    include?: string;
}
export interface StatusPagesApiUpdateStatusPageRequest {
    /**
     * The ID of the status page.
     * @type string
     */
    pageId: string;
    /**
     * @type PatchStatusPageRequest
     */
    body: PatchStatusPageRequest;
    /**
     * Whether to delete existing subscribers when updating a status page's type.
     * @type boolean
     */
    deleteSubscribers?: boolean;
    /**
     * Comma-separated list of resources to include. Supported values: created_by_user, last_modified_by_user.
     * @type string
     */
    include?: string;
}
export declare class StatusPagesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: StatusPagesApiRequestFactory, responseProcessor?: StatusPagesApiResponseProcessor);
    /**
     * Creates a new component.
     * @param param The request object
     */
    createComponent(param: StatusPagesApiCreateComponentRequest, options?: Configuration): Promise<StatusPagesComponent>;
    /**
     * Creates a new degradation.
     * @param param The request object
     */
    createDegradation(param: StatusPagesApiCreateDegradationRequest, options?: Configuration): Promise<Degradation>;
    /**
     * Schedules a new maintenance.
     * @param param The request object
     */
    createMaintenance(param: StatusPagesApiCreateMaintenanceRequest, options?: Configuration): Promise<Maintenance>;
    /**
     * Creates a new status page.
     * @param param The request object
     */
    createStatusPage(param: StatusPagesApiCreateStatusPageRequest, options?: Configuration): Promise<StatusPage>;
    /**
     * Deletes a component by its ID.
     * @param param The request object
     */
    deleteComponent(param: StatusPagesApiDeleteComponentRequest, options?: Configuration): Promise<void>;
    /**
     * Deletes a degradation by its ID.
     * @param param The request object
     */
    deleteDegradation(param: StatusPagesApiDeleteDegradationRequest, options?: Configuration): Promise<void>;
    /**
     * Deletes a status page by its ID.
     * @param param The request object
     */
    deleteStatusPage(param: StatusPagesApiDeleteStatusPageRequest, options?: Configuration): Promise<void>;
    /**
     * Retrieves a specific component by its ID.
     * @param param The request object
     */
    getComponent(param: StatusPagesApiGetComponentRequest, options?: Configuration): Promise<StatusPagesComponent>;
    /**
     * Retrieves a specific degradation by its ID.
     * @param param The request object
     */
    getDegradation(param: StatusPagesApiGetDegradationRequest, options?: Configuration): Promise<Degradation>;
    /**
     * Retrieves a specific maintenance by its ID.
     * @param param The request object
     */
    getMaintenance(param: StatusPagesApiGetMaintenanceRequest, options?: Configuration): Promise<Maintenance>;
    /**
     * Retrieves a specific status page by its ID.
     * @param param The request object
     */
    getStatusPage(param: StatusPagesApiGetStatusPageRequest, options?: Configuration): Promise<StatusPage>;
    /**
     * Lists all components for a status page.
     * @param param The request object
     */
    listComponents(param: StatusPagesApiListComponentsRequest, options?: Configuration): Promise<StatusPagesComponentArray>;
    /**
     * Lists all degradations for the organization. Optionally filter by status and page.
     * @param param The request object
     */
    listDegradations(param?: StatusPagesApiListDegradationsRequest, options?: Configuration): Promise<DegradationArray>;
    /**
     * Lists all maintenances for the organization. Optionally filter by status and page.
     * @param param The request object
     */
    listMaintenances(param?: StatusPagesApiListMaintenancesRequest, options?: Configuration): Promise<MaintenanceArray>;
    /**
     * Lists all status pages for the organization.
     * @param param The request object
     */
    listStatusPages(param?: StatusPagesApiListStatusPagesRequest, options?: Configuration): Promise<StatusPageArray>;
    /**
     * Updates an existing component's attributes.
     * @param param The request object
     */
    updateComponent(param: StatusPagesApiUpdateComponentRequest, options?: Configuration): Promise<StatusPagesComponent>;
    /**
     * Updates an existing degradation's attributes.
     * @param param The request object
     */
    updateDegradation(param: StatusPagesApiUpdateDegradationRequest, options?: Configuration): Promise<Degradation>;
    /**
     * Updates an existing maintenance's attributes.
     * @param param The request object
     */
    updateMaintenance(param: StatusPagesApiUpdateMaintenanceRequest, options?: Configuration): Promise<Maintenance>;
    /**
     * Updates an existing status page's attributes.
     * @param param The request object
     */
    updateStatusPage(param: StatusPagesApiUpdateStatusPageRequest, options?: Configuration): Promise<StatusPage>;
}
