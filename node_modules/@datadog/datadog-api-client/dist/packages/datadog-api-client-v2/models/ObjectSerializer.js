"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
const APIErrorResponse_1 = require("./APIErrorResponse");
const APIKeyCreateAttributes_1 = require("./APIKeyCreateAttributes");
const APIKeyCreateData_1 = require("./APIKeyCreateData");
const APIKeyCreateRequest_1 = require("./APIKeyCreateRequest");
const APIKeyRelationships_1 = require("./APIKeyRelationships");
const APIKeyResponse_1 = require("./APIKeyResponse");
const APIKeyUpdateAttributes_1 = require("./APIKeyUpdateAttributes");
const APIKeyUpdateData_1 = require("./APIKeyUpdateData");
const APIKeyUpdateRequest_1 = require("./APIKeyUpdateRequest");
const APIKeysResponse_1 = require("./APIKeysResponse");
const APIKeysResponseMeta_1 = require("./APIKeysResponseMeta");
const APIKeysResponseMetaPage_1 = require("./APIKeysResponseMetaPage");
const APITrigger_1 = require("./APITrigger");
const APITriggerWrapper_1 = require("./APITriggerWrapper");
const AWSAccountCreateRequest_1 = require("./AWSAccountCreateRequest");
const AWSAccountCreateRequestAttributes_1 = require("./AWSAccountCreateRequestAttributes");
const AWSAccountCreateRequestData_1 = require("./AWSAccountCreateRequestData");
const AWSAccountResponse_1 = require("./AWSAccountResponse");
const AWSAccountResponseAttributes_1 = require("./AWSAccountResponseAttributes");
const AWSAccountResponseData_1 = require("./AWSAccountResponseData");
const AWSAccountUpdateRequest_1 = require("./AWSAccountUpdateRequest");
const AWSAccountUpdateRequestAttributes_1 = require("./AWSAccountUpdateRequestAttributes");
const AWSAccountUpdateRequestData_1 = require("./AWSAccountUpdateRequestData");
const AWSAccountsResponse_1 = require("./AWSAccountsResponse");
const AWSAssumeRole_1 = require("./AWSAssumeRole");
const AWSAssumeRoleUpdate_1 = require("./AWSAssumeRoleUpdate");
const AWSAuthConfigKeys_1 = require("./AWSAuthConfigKeys");
const AWSAuthConfigRole_1 = require("./AWSAuthConfigRole");
const AWSCloudAuthPersonaMappingAttributesResponse_1 = require("./AWSCloudAuthPersonaMappingAttributesResponse");
const AWSCloudAuthPersonaMappingCreateAttributes_1 = require("./AWSCloudAuthPersonaMappingCreateAttributes");
const AWSCloudAuthPersonaMappingCreateData_1 = require("./AWSCloudAuthPersonaMappingCreateData");
const AWSCloudAuthPersonaMappingCreateRequest_1 = require("./AWSCloudAuthPersonaMappingCreateRequest");
const AWSCloudAuthPersonaMappingDataResponse_1 = require("./AWSCloudAuthPersonaMappingDataResponse");
const AWSCloudAuthPersonaMappingResponse_1 = require("./AWSCloudAuthPersonaMappingResponse");
const AWSCloudAuthPersonaMappingsResponse_1 = require("./AWSCloudAuthPersonaMappingsResponse");
const AWSEventBridgeAccountConfiguration_1 = require("./AWSEventBridgeAccountConfiguration");
const AWSEventBridgeCreateRequest_1 = require("./AWSEventBridgeCreateRequest");
const AWSEventBridgeCreateRequestAttributes_1 = require("./AWSEventBridgeCreateRequestAttributes");
const AWSEventBridgeCreateRequestData_1 = require("./AWSEventBridgeCreateRequestData");
const AWSEventBridgeCreateResponse_1 = require("./AWSEventBridgeCreateResponse");
const AWSEventBridgeCreateResponseAttributes_1 = require("./AWSEventBridgeCreateResponseAttributes");
const AWSEventBridgeCreateResponseData_1 = require("./AWSEventBridgeCreateResponseData");
const AWSEventBridgeDeleteRequest_1 = require("./AWSEventBridgeDeleteRequest");
const AWSEventBridgeDeleteRequestAttributes_1 = require("./AWSEventBridgeDeleteRequestAttributes");
const AWSEventBridgeDeleteRequestData_1 = require("./AWSEventBridgeDeleteRequestData");
const AWSEventBridgeDeleteResponse_1 = require("./AWSEventBridgeDeleteResponse");
const AWSEventBridgeDeleteResponseAttributes_1 = require("./AWSEventBridgeDeleteResponseAttributes");
const AWSEventBridgeDeleteResponseData_1 = require("./AWSEventBridgeDeleteResponseData");
const AWSEventBridgeListResponse_1 = require("./AWSEventBridgeListResponse");
const AWSEventBridgeListResponseAttributes_1 = require("./AWSEventBridgeListResponseAttributes");
const AWSEventBridgeListResponseData_1 = require("./AWSEventBridgeListResponseData");
const AWSEventBridgeSource_1 = require("./AWSEventBridgeSource");
const AWSIntegration_1 = require("./AWSIntegration");
const AWSIntegrationIamPermissionsResponse_1 = require("./AWSIntegrationIamPermissionsResponse");
const AWSIntegrationIamPermissionsResponseAttributes_1 = require("./AWSIntegrationIamPermissionsResponseAttributes");
const AWSIntegrationIamPermissionsResponseData_1 = require("./AWSIntegrationIamPermissionsResponseData");
const AWSIntegrationUpdate_1 = require("./AWSIntegrationUpdate");
const AWSLambdaForwarderConfig_1 = require("./AWSLambdaForwarderConfig");
const AWSLambdaForwarderConfigLogSourceConfig_1 = require("./AWSLambdaForwarderConfigLogSourceConfig");
const AWSLogSourceTagFilter_1 = require("./AWSLogSourceTagFilter");
const AWSLogsConfig_1 = require("./AWSLogsConfig");
const AWSLogsServicesResponse_1 = require("./AWSLogsServicesResponse");
const AWSLogsServicesResponseAttributes_1 = require("./AWSLogsServicesResponseAttributes");
const AWSLogsServicesResponseData_1 = require("./AWSLogsServicesResponseData");
const AWSMetricsConfig_1 = require("./AWSMetricsConfig");
const AWSNamespaceFiltersExcludeOnly_1 = require("./AWSNamespaceFiltersExcludeOnly");
const AWSNamespaceFiltersIncludeOnly_1 = require("./AWSNamespaceFiltersIncludeOnly");
const AWSNamespaceTagFilter_1 = require("./AWSNamespaceTagFilter");
const AWSNamespacesResponse_1 = require("./AWSNamespacesResponse");
const AWSNamespacesResponseAttributes_1 = require("./AWSNamespacesResponseAttributes");
const AWSNamespacesResponseData_1 = require("./AWSNamespacesResponseData");
const AWSNewExternalIDResponse_1 = require("./AWSNewExternalIDResponse");
const AWSNewExternalIDResponseAttributes_1 = require("./AWSNewExternalIDResponseAttributes");
const AWSNewExternalIDResponseData_1 = require("./AWSNewExternalIDResponseData");
const AWSRegionsIncludeAll_1 = require("./AWSRegionsIncludeAll");
const AWSRegionsIncludeOnly_1 = require("./AWSRegionsIncludeOnly");
const AWSResourcesConfig_1 = require("./AWSResourcesConfig");
const AWSTracesConfig_1 = require("./AWSTracesConfig");
const AccountFilteringConfig_1 = require("./AccountFilteringConfig");
const ActionConnectionAttributes_1 = require("./ActionConnectionAttributes");
const ActionConnectionAttributesUpdate_1 = require("./ActionConnectionAttributesUpdate");
const ActionConnectionData_1 = require("./ActionConnectionData");
const ActionConnectionDataUpdate_1 = require("./ActionConnectionDataUpdate");
const ActionQuery_1 = require("./ActionQuery");
const ActionQueryMockedOutputsObject_1 = require("./ActionQueryMockedOutputsObject");
const ActionQueryProperties_1 = require("./ActionQueryProperties");
const ActionQuerySpecConnectionGroup_1 = require("./ActionQuerySpecConnectionGroup");
const ActionQuerySpecObject_1 = require("./ActionQuerySpecObject");
const ActiveBillingDimensionsAttributes_1 = require("./ActiveBillingDimensionsAttributes");
const ActiveBillingDimensionsBody_1 = require("./ActiveBillingDimensionsBody");
const ActiveBillingDimensionsResponse_1 = require("./ActiveBillingDimensionsResponse");
const AddMemberTeamRequest_1 = require("./AddMemberTeamRequest");
const Advisory_1 = require("./Advisory");
const AlertEventAttributes_1 = require("./AlertEventAttributes");
const AlertEventAttributesLinksItem_1 = require("./AlertEventAttributesLinksItem");
const AlertEventCustomAttributes_1 = require("./AlertEventCustomAttributes");
const AlertEventCustomAttributesLinksItems_1 = require("./AlertEventCustomAttributesLinksItems");
const Annotation_1 = require("./Annotation");
const AnnotationDisplay_1 = require("./AnnotationDisplay");
const AnnotationDisplayBounds_1 = require("./AnnotationDisplayBounds");
const AnnotationMarkdownTextAnnotation_1 = require("./AnnotationMarkdownTextAnnotation");
const AnthropicAPIKey_1 = require("./AnthropicAPIKey");
const AnthropicAPIKeyUpdate_1 = require("./AnthropicAPIKeyUpdate");
const AnthropicIntegration_1 = require("./AnthropicIntegration");
const AnthropicIntegrationUpdate_1 = require("./AnthropicIntegrationUpdate");
const AppBuilderEvent_1 = require("./AppBuilderEvent");
const AppKeyRegistrationData_1 = require("./AppKeyRegistrationData");
const AppMeta_1 = require("./AppMeta");
const AppRelationship_1 = require("./AppRelationship");
const AppTriggerWrapper_1 = require("./AppTriggerWrapper");
const ApplicationKeyCreateAttributes_1 = require("./ApplicationKeyCreateAttributes");
const ApplicationKeyCreateData_1 = require("./ApplicationKeyCreateData");
const ApplicationKeyCreateRequest_1 = require("./ApplicationKeyCreateRequest");
const ApplicationKeyRelationships_1 = require("./ApplicationKeyRelationships");
const ApplicationKeyResponse_1 = require("./ApplicationKeyResponse");
const ApplicationKeyResponseMeta_1 = require("./ApplicationKeyResponseMeta");
const ApplicationKeyResponseMetaPage_1 = require("./ApplicationKeyResponseMetaPage");
const ApplicationKeyUpdateAttributes_1 = require("./ApplicationKeyUpdateAttributes");
const ApplicationKeyUpdateData_1 = require("./ApplicationKeyUpdateData");
const ApplicationKeyUpdateRequest_1 = require("./ApplicationKeyUpdateRequest");
const ApplicationSecurityWafCustomRuleAction_1 = require("./ApplicationSecurityWafCustomRuleAction");
const ApplicationSecurityWafCustomRuleActionParameters_1 = require("./ApplicationSecurityWafCustomRuleActionParameters");
const ApplicationSecurityWafCustomRuleAttributes_1 = require("./ApplicationSecurityWafCustomRuleAttributes");
const ApplicationSecurityWafCustomRuleCondition_1 = require("./ApplicationSecurityWafCustomRuleCondition");
const ApplicationSecurityWafCustomRuleConditionInput_1 = require("./ApplicationSecurityWafCustomRuleConditionInput");
const ApplicationSecurityWafCustomRuleConditionOptions_1 = require("./ApplicationSecurityWafCustomRuleConditionOptions");
const ApplicationSecurityWafCustomRuleConditionParameters_1 = require("./ApplicationSecurityWafCustomRuleConditionParameters");
const ApplicationSecurityWafCustomRuleCreateAttributes_1 = require("./ApplicationSecurityWafCustomRuleCreateAttributes");
const ApplicationSecurityWafCustomRuleCreateData_1 = require("./ApplicationSecurityWafCustomRuleCreateData");
const ApplicationSecurityWafCustomRuleCreateRequest_1 = require("./ApplicationSecurityWafCustomRuleCreateRequest");
const ApplicationSecurityWafCustomRuleData_1 = require("./ApplicationSecurityWafCustomRuleData");
const ApplicationSecurityWafCustomRuleListResponse_1 = require("./ApplicationSecurityWafCustomRuleListResponse");
const ApplicationSecurityWafCustomRuleMetadata_1 = require("./ApplicationSecurityWafCustomRuleMetadata");
const ApplicationSecurityWafCustomRuleResponse_1 = require("./ApplicationSecurityWafCustomRuleResponse");
const ApplicationSecurityWafCustomRuleScope_1 = require("./ApplicationSecurityWafCustomRuleScope");
const ApplicationSecurityWafCustomRuleTags_1 = require("./ApplicationSecurityWafCustomRuleTags");
const ApplicationSecurityWafCustomRuleUpdateAttributes_1 = require("./ApplicationSecurityWafCustomRuleUpdateAttributes");
const ApplicationSecurityWafCustomRuleUpdateData_1 = require("./ApplicationSecurityWafCustomRuleUpdateData");
const ApplicationSecurityWafCustomRuleUpdateRequest_1 = require("./ApplicationSecurityWafCustomRuleUpdateRequest");
const ApplicationSecurityWafExclusionFilterAttributes_1 = require("./ApplicationSecurityWafExclusionFilterAttributes");
const ApplicationSecurityWafExclusionFilterCreateAttributes_1 = require("./ApplicationSecurityWafExclusionFilterCreateAttributes");
const ApplicationSecurityWafExclusionFilterCreateData_1 = require("./ApplicationSecurityWafExclusionFilterCreateData");
const ApplicationSecurityWafExclusionFilterCreateRequest_1 = require("./ApplicationSecurityWafExclusionFilterCreateRequest");
const ApplicationSecurityWafExclusionFilterMetadata_1 = require("./ApplicationSecurityWafExclusionFilterMetadata");
const ApplicationSecurityWafExclusionFilterResource_1 = require("./ApplicationSecurityWafExclusionFilterResource");
const ApplicationSecurityWafExclusionFilterResponse_1 = require("./ApplicationSecurityWafExclusionFilterResponse");
const ApplicationSecurityWafExclusionFilterRulesTarget_1 = require("./ApplicationSecurityWafExclusionFilterRulesTarget");
const ApplicationSecurityWafExclusionFilterRulesTargetTags_1 = require("./ApplicationSecurityWafExclusionFilterRulesTargetTags");
const ApplicationSecurityWafExclusionFilterScope_1 = require("./ApplicationSecurityWafExclusionFilterScope");
const ApplicationSecurityWafExclusionFilterUpdateAttributes_1 = require("./ApplicationSecurityWafExclusionFilterUpdateAttributes");
const ApplicationSecurityWafExclusionFilterUpdateData_1 = require("./ApplicationSecurityWafExclusionFilterUpdateData");
const ApplicationSecurityWafExclusionFilterUpdateRequest_1 = require("./ApplicationSecurityWafExclusionFilterUpdateRequest");
const ApplicationSecurityWafExclusionFiltersResponse_1 = require("./ApplicationSecurityWafExclusionFiltersResponse");
const ArbitraryCostUpsertRequest_1 = require("./ArbitraryCostUpsertRequest");
const ArbitraryCostUpsertRequestData_1 = require("./ArbitraryCostUpsertRequestData");
const ArbitraryCostUpsertRequestDataAttributes_1 = require("./ArbitraryCostUpsertRequestDataAttributes");
const ArbitraryCostUpsertRequestDataAttributesCostsToAllocateItems_1 = require("./ArbitraryCostUpsertRequestDataAttributesCostsToAllocateItems");
const ArbitraryCostUpsertRequestDataAttributesStrategy_1 = require("./ArbitraryCostUpsertRequestDataAttributesStrategy");
const ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByFiltersItems_1 = require("./ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByFiltersItems");
const ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems_1 = require("./ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems");
const ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItemsAllocatedTagsItems_1 = require("./ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItemsAllocatedTagsItems");
const ArbitraryCostUpsertRequestDataAttributesStrategyBasedOnCostsItems_1 = require("./ArbitraryCostUpsertRequestDataAttributesStrategyBasedOnCostsItems");
const ArbitraryCostUpsertRequestDataAttributesStrategyEvaluateGroupedByFiltersItems_1 = require("./ArbitraryCostUpsertRequestDataAttributesStrategyEvaluateGroupedByFiltersItems");
const ArbitraryRuleResponse_1 = require("./ArbitraryRuleResponse");
const ArbitraryRuleResponseArray_1 = require("./ArbitraryRuleResponseArray");
const ArbitraryRuleResponseArrayMeta_1 = require("./ArbitraryRuleResponseArrayMeta");
const ArbitraryRuleResponseData_1 = require("./ArbitraryRuleResponseData");
const ArbitraryRuleResponseDataAttributes_1 = require("./ArbitraryRuleResponseDataAttributes");
const ArbitraryRuleResponseDataAttributesCostsToAllocateItems_1 = require("./ArbitraryRuleResponseDataAttributesCostsToAllocateItems");
const ArbitraryRuleResponseDataAttributesStrategy_1 = require("./ArbitraryRuleResponseDataAttributesStrategy");
const ArbitraryRuleResponseDataAttributesStrategyAllocatedByFiltersItems_1 = require("./ArbitraryRuleResponseDataAttributesStrategyAllocatedByFiltersItems");
const ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems_1 = require("./ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems");
const ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems_1 = require("./ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems");
const ArbitraryRuleResponseDataAttributesStrategyBasedOnCostsItems_1 = require("./ArbitraryRuleResponseDataAttributesStrategyBasedOnCostsItems");
const ArbitraryRuleResponseDataAttributesStrategyEvaluateGroupedByFiltersItems_1 = require("./ArbitraryRuleResponseDataAttributesStrategyEvaluateGroupedByFiltersItems");
const Argument_1 = require("./Argument");
const AsanaAccessToken_1 = require("./AsanaAccessToken");
const AsanaAccessTokenUpdate_1 = require("./AsanaAccessTokenUpdate");
const AsanaIntegration_1 = require("./AsanaIntegration");
const AsanaIntegrationUpdate_1 = require("./AsanaIntegrationUpdate");
const Asset_1 = require("./Asset");
const AssetAttributes_1 = require("./AssetAttributes");
const AssetOperatingSystem_1 = require("./AssetOperatingSystem");
const AssetRisks_1 = require("./AssetRisks");
const AssetVersion_1 = require("./AssetVersion");
const AssignSeatsUserRequest_1 = require("./AssignSeatsUserRequest");
const AssignSeatsUserRequestData_1 = require("./AssignSeatsUserRequestData");
const AssignSeatsUserRequestDataAttributes_1 = require("./AssignSeatsUserRequestDataAttributes");
const AssignSeatsUserResponse_1 = require("./AssignSeatsUserResponse");
const AssignSeatsUserResponseData_1 = require("./AssignSeatsUserResponseData");
const AssignSeatsUserResponseDataAttributes_1 = require("./AssignSeatsUserResponseDataAttributes");
const AttachCaseRequest_1 = require("./AttachCaseRequest");
const AttachCaseRequestData_1 = require("./AttachCaseRequestData");
const AttachCaseRequestDataRelationships_1 = require("./AttachCaseRequestDataRelationships");
const AttachJiraIssueRequest_1 = require("./AttachJiraIssueRequest");
const AttachJiraIssueRequestData_1 = require("./AttachJiraIssueRequestData");
const AttachJiraIssueRequestDataAttributes_1 = require("./AttachJiraIssueRequestDataAttributes");
const AttachJiraIssueRequestDataRelationships_1 = require("./AttachJiraIssueRequestDataRelationships");
const Attachment_1 = require("./Attachment");
const AttachmentArray_1 = require("./AttachmentArray");
const AttachmentData_1 = require("./AttachmentData");
const AttachmentDataAttributes_1 = require("./AttachmentDataAttributes");
const AttachmentDataAttributesAttachment_1 = require("./AttachmentDataAttributesAttachment");
const AttachmentDataRelationships_1 = require("./AttachmentDataRelationships");
const AuditLogsEvent_1 = require("./AuditLogsEvent");
const AuditLogsEventAttributes_1 = require("./AuditLogsEventAttributes");
const AuditLogsEventsResponse_1 = require("./AuditLogsEventsResponse");
const AuditLogsQueryFilter_1 = require("./AuditLogsQueryFilter");
const AuditLogsQueryOptions_1 = require("./AuditLogsQueryOptions");
const AuditLogsQueryPageOptions_1 = require("./AuditLogsQueryPageOptions");
const AuditLogsResponseLinks_1 = require("./AuditLogsResponseLinks");
const AuditLogsResponseMetadata_1 = require("./AuditLogsResponseMetadata");
const AuditLogsResponsePage_1 = require("./AuditLogsResponsePage");
const AuditLogsSearchEventsRequest_1 = require("./AuditLogsSearchEventsRequest");
const AuditLogsWarning_1 = require("./AuditLogsWarning");
const AuthNMapping_1 = require("./AuthNMapping");
const AuthNMappingAttributes_1 = require("./AuthNMappingAttributes");
const AuthNMappingCreateAttributes_1 = require("./AuthNMappingCreateAttributes");
const AuthNMappingCreateData_1 = require("./AuthNMappingCreateData");
const AuthNMappingCreateRequest_1 = require("./AuthNMappingCreateRequest");
const AuthNMappingRelationshipToRole_1 = require("./AuthNMappingRelationshipToRole");
const AuthNMappingRelationshipToTeam_1 = require("./AuthNMappingRelationshipToTeam");
const AuthNMappingRelationships_1 = require("./AuthNMappingRelationships");
const AuthNMappingResponse_1 = require("./AuthNMappingResponse");
const AuthNMappingTeam_1 = require("./AuthNMappingTeam");
const AuthNMappingTeamAttributes_1 = require("./AuthNMappingTeamAttributes");
const AuthNMappingUpdateAttributes_1 = require("./AuthNMappingUpdateAttributes");
const AuthNMappingUpdateData_1 = require("./AuthNMappingUpdateData");
const AuthNMappingUpdateRequest_1 = require("./AuthNMappingUpdateRequest");
const AuthNMappingsResponse_1 = require("./AuthNMappingsResponse");
const AutoCloseInactiveCases_1 = require("./AutoCloseInactiveCases");
const AutoTransitionAssignedCases_1 = require("./AutoTransitionAssignedCases");
const AwsCURConfig_1 = require("./AwsCURConfig");
const AwsCURConfigAttributes_1 = require("./AwsCURConfigAttributes");
const AwsCURConfigPatchData_1 = require("./AwsCURConfigPatchData");
const AwsCURConfigPatchRequest_1 = require("./AwsCURConfigPatchRequest");
const AwsCURConfigPatchRequestAttributes_1 = require("./AwsCURConfigPatchRequestAttributes");
const AwsCURConfigPostData_1 = require("./AwsCURConfigPostData");
const AwsCURConfigPostRequest_1 = require("./AwsCURConfigPostRequest");
const AwsCURConfigPostRequestAttributes_1 = require("./AwsCURConfigPostRequestAttributes");
const AwsCURConfigsResponse_1 = require("./AwsCURConfigsResponse");
const AwsCurConfigResponse_1 = require("./AwsCurConfigResponse");
const AwsCurConfigResponseData_1 = require("./AwsCurConfigResponseData");
const AwsCurConfigResponseDataAttributes_1 = require("./AwsCurConfigResponseDataAttributes");
const AwsCurConfigResponseDataAttributesAccountFilters_1 = require("./AwsCurConfigResponseDataAttributesAccountFilters");
const AwsOnDemandAttributes_1 = require("./AwsOnDemandAttributes");
const AwsOnDemandCreateAttributes_1 = require("./AwsOnDemandCreateAttributes");
const AwsOnDemandCreateData_1 = require("./AwsOnDemandCreateData");
const AwsOnDemandCreateRequest_1 = require("./AwsOnDemandCreateRequest");
const AwsOnDemandData_1 = require("./AwsOnDemandData");
const AwsOnDemandListResponse_1 = require("./AwsOnDemandListResponse");
const AwsOnDemandResponse_1 = require("./AwsOnDemandResponse");
const AwsScanOptionsAttributes_1 = require("./AwsScanOptionsAttributes");
const AwsScanOptionsCreateAttributes_1 = require("./AwsScanOptionsCreateAttributes");
const AwsScanOptionsCreateData_1 = require("./AwsScanOptionsCreateData");
const AwsScanOptionsCreateRequest_1 = require("./AwsScanOptionsCreateRequest");
const AwsScanOptionsData_1 = require("./AwsScanOptionsData");
const AwsScanOptionsListResponse_1 = require("./AwsScanOptionsListResponse");
const AwsScanOptionsResponse_1 = require("./AwsScanOptionsResponse");
const AwsScanOptionsUpdateAttributes_1 = require("./AwsScanOptionsUpdateAttributes");
const AwsScanOptionsUpdateData_1 = require("./AwsScanOptionsUpdateData");
const AwsScanOptionsUpdateRequest_1 = require("./AwsScanOptionsUpdateRequest");
const AzureIntegration_1 = require("./AzureIntegration");
const AzureIntegrationUpdate_1 = require("./AzureIntegrationUpdate");
const AzureScanOptions_1 = require("./AzureScanOptions");
const AzureScanOptionsArray_1 = require("./AzureScanOptionsArray");
const AzureScanOptionsData_1 = require("./AzureScanOptionsData");
const AzureScanOptionsDataAttributes_1 = require("./AzureScanOptionsDataAttributes");
const AzureScanOptionsInputUpdate_1 = require("./AzureScanOptionsInputUpdate");
const AzureScanOptionsInputUpdateData_1 = require("./AzureScanOptionsInputUpdateData");
const AzureScanOptionsInputUpdateDataAttributes_1 = require("./AzureScanOptionsInputUpdateDataAttributes");
const AzureStorageDestination_1 = require("./AzureStorageDestination");
const AzureTenant_1 = require("./AzureTenant");
const AzureTenantUpdate_1 = require("./AzureTenantUpdate");
const AzureUCConfig_1 = require("./AzureUCConfig");
const AzureUCConfigPair_1 = require("./AzureUCConfigPair");
const AzureUCConfigPairAttributes_1 = require("./AzureUCConfigPairAttributes");
const AzureUCConfigPairsResponse_1 = require("./AzureUCConfigPairsResponse");
const AzureUCConfigPatchData_1 = require("./AzureUCConfigPatchData");
const AzureUCConfigPatchRequest_1 = require("./AzureUCConfigPatchRequest");
const AzureUCConfigPatchRequestAttributes_1 = require("./AzureUCConfigPatchRequestAttributes");
const AzureUCConfigPostData_1 = require("./AzureUCConfigPostData");
const AzureUCConfigPostRequest_1 = require("./AzureUCConfigPostRequest");
const AzureUCConfigPostRequestAttributes_1 = require("./AzureUCConfigPostRequestAttributes");
const AzureUCConfigsResponse_1 = require("./AzureUCConfigsResponse");
const BatchDeleteRowsRequestArray_1 = require("./BatchDeleteRowsRequestArray");
const BatchDeleteRowsRequestData_1 = require("./BatchDeleteRowsRequestData");
const BatchUpsertRowsRequestArray_1 = require("./BatchUpsertRowsRequestArray");
const BatchUpsertRowsRequestData_1 = require("./BatchUpsertRowsRequestData");
const BatchUpsertRowsRequestDataAttributes_1 = require("./BatchUpsertRowsRequestDataAttributes");
const BillConfig_1 = require("./BillConfig");
const BillingDimensionsMappingBodyItem_1 = require("./BillingDimensionsMappingBodyItem");
const BillingDimensionsMappingBodyItemAttributes_1 = require("./BillingDimensionsMappingBodyItemAttributes");
const BillingDimensionsMappingBodyItemAttributesEndpointsItems_1 = require("./BillingDimensionsMappingBodyItemAttributesEndpointsItems");
const BillingDimensionsMappingResponse_1 = require("./BillingDimensionsMappingResponse");
const BranchCoverageSummaryRequest_1 = require("./BranchCoverageSummaryRequest");
const BranchCoverageSummaryRequestAttributes_1 = require("./BranchCoverageSummaryRequestAttributes");
const BranchCoverageSummaryRequestData_1 = require("./BranchCoverageSummaryRequestData");
const Budget_1 = require("./Budget");
const BudgetArray_1 = require("./BudgetArray");
const BudgetAttributes_1 = require("./BudgetAttributes");
const BudgetValidationRequest_1 = require("./BudgetValidationRequest");
const BudgetValidationRequestData_1 = require("./BudgetValidationRequestData");
const BudgetValidationResponse_1 = require("./BudgetValidationResponse");
const BudgetValidationResponseData_1 = require("./BudgetValidationResponseData");
const BudgetValidationResponseDataAttributes_1 = require("./BudgetValidationResponseDataAttributes");
const BudgetWithEntries_1 = require("./BudgetWithEntries");
const BudgetWithEntriesData_1 = require("./BudgetWithEntriesData");
const BudgetWithEntriesDataAttributes_1 = require("./BudgetWithEntriesDataAttributes");
const BudgetWithEntriesDataAttributesEntriesItems_1 = require("./BudgetWithEntriesDataAttributesEntriesItems");
const BudgetWithEntriesDataAttributesEntriesItemsTagFiltersItems_1 = require("./BudgetWithEntriesDataAttributesEntriesItemsTagFiltersItems");
const BulkDeleteAppsDatastoreItemsRequest_1 = require("./BulkDeleteAppsDatastoreItemsRequest");
const BulkDeleteAppsDatastoreItemsRequestData_1 = require("./BulkDeleteAppsDatastoreItemsRequestData");
const BulkDeleteAppsDatastoreItemsRequestDataAttributes_1 = require("./BulkDeleteAppsDatastoreItemsRequestDataAttributes");
const BulkMuteFindingsRequest_1 = require("./BulkMuteFindingsRequest");
const BulkMuteFindingsRequestAttributes_1 = require("./BulkMuteFindingsRequestAttributes");
const BulkMuteFindingsRequestData_1 = require("./BulkMuteFindingsRequestData");
const BulkMuteFindingsRequestMeta_1 = require("./BulkMuteFindingsRequestMeta");
const BulkMuteFindingsRequestMetaFindings_1 = require("./BulkMuteFindingsRequestMetaFindings");
const BulkMuteFindingsRequestProperties_1 = require("./BulkMuteFindingsRequestProperties");
const BulkMuteFindingsResponse_1 = require("./BulkMuteFindingsResponse");
const BulkMuteFindingsResponseData_1 = require("./BulkMuteFindingsResponseData");
const BulkPutAppsDatastoreItemsRequest_1 = require("./BulkPutAppsDatastoreItemsRequest");
const BulkPutAppsDatastoreItemsRequestData_1 = require("./BulkPutAppsDatastoreItemsRequestData");
const BulkPutAppsDatastoreItemsRequestDataAttributes_1 = require("./BulkPutAppsDatastoreItemsRequestDataAttributes");
const CIAppAggregateBucketValueTimeseriesPoint_1 = require("./CIAppAggregateBucketValueTimeseriesPoint");
const CIAppAggregateSort_1 = require("./CIAppAggregateSort");
const CIAppCIError_1 = require("./CIAppCIError");
const CIAppCompute_1 = require("./CIAppCompute");
const CIAppCreatePipelineEventRequest_1 = require("./CIAppCreatePipelineEventRequest");
const CIAppCreatePipelineEventRequestAttributes_1 = require("./CIAppCreatePipelineEventRequestAttributes");
const CIAppCreatePipelineEventRequestData_1 = require("./CIAppCreatePipelineEventRequestData");
const CIAppEventAttributes_1 = require("./CIAppEventAttributes");
const CIAppGitInfo_1 = require("./CIAppGitInfo");
const CIAppGroupByHistogram_1 = require("./CIAppGroupByHistogram");
const CIAppHostInfo_1 = require("./CIAppHostInfo");
const CIAppPipelineEvent_1 = require("./CIAppPipelineEvent");
const CIAppPipelineEventAttributes_1 = require("./CIAppPipelineEventAttributes");
const CIAppPipelineEventFinishedPipeline_1 = require("./CIAppPipelineEventFinishedPipeline");
const CIAppPipelineEventInProgressPipeline_1 = require("./CIAppPipelineEventInProgressPipeline");
const CIAppPipelineEventJob_1 = require("./CIAppPipelineEventJob");
const CIAppPipelineEventParentPipeline_1 = require("./CIAppPipelineEventParentPipeline");
const CIAppPipelineEventPreviousPipeline_1 = require("./CIAppPipelineEventPreviousPipeline");
const CIAppPipelineEventStage_1 = require("./CIAppPipelineEventStage");
const CIAppPipelineEventStep_1 = require("./CIAppPipelineEventStep");
const CIAppPipelineEventsRequest_1 = require("./CIAppPipelineEventsRequest");
const CIAppPipelineEventsResponse_1 = require("./CIAppPipelineEventsResponse");
const CIAppPipelinesAggregateRequest_1 = require("./CIAppPipelinesAggregateRequest");
const CIAppPipelinesAggregationBucketsResponse_1 = require("./CIAppPipelinesAggregationBucketsResponse");
const CIAppPipelinesAnalyticsAggregateResponse_1 = require("./CIAppPipelinesAnalyticsAggregateResponse");
const CIAppPipelinesBucketResponse_1 = require("./CIAppPipelinesBucketResponse");
const CIAppPipelinesGroupBy_1 = require("./CIAppPipelinesGroupBy");
const CIAppPipelinesQueryFilter_1 = require("./CIAppPipelinesQueryFilter");
const CIAppQueryOptions_1 = require("./CIAppQueryOptions");
const CIAppQueryPageOptions_1 = require("./CIAppQueryPageOptions");
const CIAppResponseLinks_1 = require("./CIAppResponseLinks");
const CIAppResponseMetadata_1 = require("./CIAppResponseMetadata");
const CIAppResponseMetadataWithPagination_1 = require("./CIAppResponseMetadataWithPagination");
const CIAppResponsePage_1 = require("./CIAppResponsePage");
const CIAppTestEvent_1 = require("./CIAppTestEvent");
const CIAppTestEventsRequest_1 = require("./CIAppTestEventsRequest");
const CIAppTestEventsResponse_1 = require("./CIAppTestEventsResponse");
const CIAppTestsAggregateRequest_1 = require("./CIAppTestsAggregateRequest");
const CIAppTestsAggregationBucketsResponse_1 = require("./CIAppTestsAggregationBucketsResponse");
const CIAppTestsAnalyticsAggregateResponse_1 = require("./CIAppTestsAnalyticsAggregateResponse");
const CIAppTestsBucketResponse_1 = require("./CIAppTestsBucketResponse");
const CIAppTestsGroupBy_1 = require("./CIAppTestsGroupBy");
const CIAppTestsQueryFilter_1 = require("./CIAppTestsQueryFilter");
const CIAppWarning_1 = require("./CIAppWarning");
const CSMAgentsMetadata_1 = require("./CSMAgentsMetadata");
const CVSS_1 = require("./CVSS");
const CalculatedField_1 = require("./CalculatedField");
const CancelDataDeletionResponseBody_1 = require("./CancelDataDeletionResponseBody");
const Case_1 = require("./Case");
const CaseAssign_1 = require("./CaseAssign");
const CaseAssignAttributes_1 = require("./CaseAssignAttributes");
const CaseAssignRequest_1 = require("./CaseAssignRequest");
const CaseAttributes_1 = require("./CaseAttributes");
const CaseComment_1 = require("./CaseComment");
const CaseCommentAttributes_1 = require("./CaseCommentAttributes");
const CaseCommentRequest_1 = require("./CaseCommentRequest");
const CaseCreate_1 = require("./CaseCreate");
const CaseCreateAttributes_1 = require("./CaseCreateAttributes");
const CaseCreateRelationships_1 = require("./CaseCreateRelationships");
const CaseCreateRequest_1 = require("./CaseCreateRequest");
const CaseEmpty_1 = require("./CaseEmpty");
const CaseEmptyRequest_1 = require("./CaseEmptyRequest");
const CaseInsightsItems_1 = require("./CaseInsightsItems");
const CaseManagementProject_1 = require("./CaseManagementProject");
const CaseManagementProjectData_1 = require("./CaseManagementProjectData");
const CaseNotificationRule_1 = require("./CaseNotificationRule");
const CaseNotificationRuleAttributes_1 = require("./CaseNotificationRuleAttributes");
const CaseNotificationRuleCreate_1 = require("./CaseNotificationRuleCreate");
const CaseNotificationRuleCreateAttributes_1 = require("./CaseNotificationRuleCreateAttributes");
const CaseNotificationRuleCreateRequest_1 = require("./CaseNotificationRuleCreateRequest");
const CaseNotificationRuleRecipient_1 = require("./CaseNotificationRuleRecipient");
const CaseNotificationRuleRecipientData_1 = require("./CaseNotificationRuleRecipientData");
const CaseNotificationRuleResponse_1 = require("./CaseNotificationRuleResponse");
const CaseNotificationRuleTrigger_1 = require("./CaseNotificationRuleTrigger");
const CaseNotificationRuleTriggerData_1 = require("./CaseNotificationRuleTriggerData");
const CaseNotificationRuleUpdate_1 = require("./CaseNotificationRuleUpdate");
const CaseNotificationRuleUpdateRequest_1 = require("./CaseNotificationRuleUpdateRequest");
const CaseNotificationRulesResponse_1 = require("./CaseNotificationRulesResponse");
const CaseRelationships_1 = require("./CaseRelationships");
const CaseResponse_1 = require("./CaseResponse");
const CaseTrigger_1 = require("./CaseTrigger");
const CaseTriggerWrapper_1 = require("./CaseTriggerWrapper");
const CaseTypeCreate_1 = require("./CaseTypeCreate");
const CaseTypeCreateRequest_1 = require("./CaseTypeCreateRequest");
const CaseTypeResource_1 = require("./CaseTypeResource");
const CaseTypeResourceAttributes_1 = require("./CaseTypeResourceAttributes");
const CaseTypeResponse_1 = require("./CaseTypeResponse");
const CaseTypesResponse_1 = require("./CaseTypesResponse");
const CaseUpdateAttributes_1 = require("./CaseUpdateAttributes");
const CaseUpdateAttributesAttributes_1 = require("./CaseUpdateAttributesAttributes");
const CaseUpdateAttributesRequest_1 = require("./CaseUpdateAttributesRequest");
const CaseUpdateCustomAttribute_1 = require("./CaseUpdateCustomAttribute");
const CaseUpdateCustomAttributeRequest_1 = require("./CaseUpdateCustomAttributeRequest");
const CaseUpdateDescription_1 = require("./CaseUpdateDescription");
const CaseUpdateDescriptionAttributes_1 = require("./CaseUpdateDescriptionAttributes");
const CaseUpdateDescriptionRequest_1 = require("./CaseUpdateDescriptionRequest");
const CaseUpdatePriority_1 = require("./CaseUpdatePriority");
const CaseUpdatePriorityAttributes_1 = require("./CaseUpdatePriorityAttributes");
const CaseUpdatePriorityRequest_1 = require("./CaseUpdatePriorityRequest");
const CaseUpdateStatus_1 = require("./CaseUpdateStatus");
const CaseUpdateStatusAttributes_1 = require("./CaseUpdateStatusAttributes");
const CaseUpdateStatusRequest_1 = require("./CaseUpdateStatusRequest");
const CaseUpdateTitle_1 = require("./CaseUpdateTitle");
const CaseUpdateTitleAttributes_1 = require("./CaseUpdateTitleAttributes");
const CaseUpdateTitleRequest_1 = require("./CaseUpdateTitleRequest");
const CasesResponse_1 = require("./CasesResponse");
const CasesResponseMeta_1 = require("./CasesResponseMeta");
const CasesResponseMetaPagination_1 = require("./CasesResponseMetaPagination");
const ChangeEventAttributes_1 = require("./ChangeEventAttributes");
const ChangeEventAttributesAuthor_1 = require("./ChangeEventAttributesAuthor");
const ChangeEventAttributesChangedResource_1 = require("./ChangeEventAttributesChangedResource");
const ChangeEventAttributesImpactedResourcesItem_1 = require("./ChangeEventAttributesImpactedResourcesItem");
const ChangeEventCustomAttributes_1 = require("./ChangeEventCustomAttributes");
const ChangeEventCustomAttributesAuthor_1 = require("./ChangeEventCustomAttributesAuthor");
const ChangeEventCustomAttributesChangedResource_1 = require("./ChangeEventCustomAttributesChangedResource");
const ChangeEventCustomAttributesImpactedResourcesItems_1 = require("./ChangeEventCustomAttributesImpactedResourcesItems");
const ChangeEventTriggerWrapper_1 = require("./ChangeEventTriggerWrapper");
const ChangeRequestBranchCreateAttributes_1 = require("./ChangeRequestBranchCreateAttributes");
const ChangeRequestBranchCreateData_1 = require("./ChangeRequestBranchCreateData");
const ChangeRequestBranchCreateRequest_1 = require("./ChangeRequestBranchCreateRequest");
const ChangeRequestCreateAttributes_1 = require("./ChangeRequestCreateAttributes");
const ChangeRequestCreateData_1 = require("./ChangeRequestCreateData");
const ChangeRequestCreateRequest_1 = require("./ChangeRequestCreateRequest");
const ChangeRequestDecisionCreateAttributes_1 = require("./ChangeRequestDecisionCreateAttributes");
const ChangeRequestDecisionCreateItem_1 = require("./ChangeRequestDecisionCreateItem");
const ChangeRequestDecisionCreateRelationships_1 = require("./ChangeRequestDecisionCreateRelationships");
const ChangeRequestDecisionRelationshipData_1 = require("./ChangeRequestDecisionRelationshipData");
const ChangeRequestDecisionRelationships_1 = require("./ChangeRequestDecisionRelationships");
const ChangeRequestDecisionResponseAttributes_1 = require("./ChangeRequestDecisionResponseAttributes");
const ChangeRequestDecisionUpdateData_1 = require("./ChangeRequestDecisionUpdateData");
const ChangeRequestDecisionUpdateDataAttributes_1 = require("./ChangeRequestDecisionUpdateDataAttributes");
const ChangeRequestDecisionUpdateDataRelationships_1 = require("./ChangeRequestDecisionUpdateDataRelationships");
const ChangeRequestDecisionUpdateRequest_1 = require("./ChangeRequestDecisionUpdateRequest");
const ChangeRequestDecisionsRelationship_1 = require("./ChangeRequestDecisionsRelationship");
const ChangeRequestIncludedDecision_1 = require("./ChangeRequestIncludedDecision");
const ChangeRequestIncludedUser_1 = require("./ChangeRequestIncludedUser");
const ChangeRequestIncludedUserAttributes_1 = require("./ChangeRequestIncludedUserAttributes");
const ChangeRequestRelationships_1 = require("./ChangeRequestRelationships");
const ChangeRequestResponse_1 = require("./ChangeRequestResponse");
const ChangeRequestResponseAttributes_1 = require("./ChangeRequestResponseAttributes");
const ChangeRequestResponseData_1 = require("./ChangeRequestResponseData");
const ChangeRequestUpdateAttributes_1 = require("./ChangeRequestUpdateAttributes");
const ChangeRequestUpdateData_1 = require("./ChangeRequestUpdateData");
const ChangeRequestUpdateRelationships_1 = require("./ChangeRequestUpdateRelationships");
const ChangeRequestUpdateRequest_1 = require("./ChangeRequestUpdateRequest");
const ChangeRequestUserRelationship_1 = require("./ChangeRequestUserRelationship");
const ChangeRequestUserRelationshipData_1 = require("./ChangeRequestUserRelationshipData");
const ChargebackBreakdown_1 = require("./ChargebackBreakdown");
const CircleCIAPIKey_1 = require("./CircleCIAPIKey");
const CircleCIAPIKeyUpdate_1 = require("./CircleCIAPIKeyUpdate");
const CircleCIIntegration_1 = require("./CircleCIIntegration");
const CircleCIIntegrationUpdate_1 = require("./CircleCIIntegrationUpdate");
const ClickupAPIKey_1 = require("./ClickupAPIKey");
const ClickupAPIKeyUpdate_1 = require("./ClickupAPIKeyUpdate");
const ClickupIntegration_1 = require("./ClickupIntegration");
const ClickupIntegrationUpdate_1 = require("./ClickupIntegrationUpdate");
const CloudConfigurationComplianceRuleOptions_1 = require("./CloudConfigurationComplianceRuleOptions");
const CloudConfigurationRegoRule_1 = require("./CloudConfigurationRegoRule");
const CloudConfigurationRuleCaseCreate_1 = require("./CloudConfigurationRuleCaseCreate");
const CloudConfigurationRuleComplianceSignalOptions_1 = require("./CloudConfigurationRuleComplianceSignalOptions");
const CloudConfigurationRuleCreatePayload_1 = require("./CloudConfigurationRuleCreatePayload");
const CloudConfigurationRuleOptions_1 = require("./CloudConfigurationRuleOptions");
const CloudConfigurationRulePayload_1 = require("./CloudConfigurationRulePayload");
const CloudWorkloadSecurityAgentPoliciesListResponse_1 = require("./CloudWorkloadSecurityAgentPoliciesListResponse");
const CloudWorkloadSecurityAgentPolicyAttributes_1 = require("./CloudWorkloadSecurityAgentPolicyAttributes");
const CloudWorkloadSecurityAgentPolicyCreateAttributes_1 = require("./CloudWorkloadSecurityAgentPolicyCreateAttributes");
const CloudWorkloadSecurityAgentPolicyCreateData_1 = require("./CloudWorkloadSecurityAgentPolicyCreateData");
const CloudWorkloadSecurityAgentPolicyCreateRequest_1 = require("./CloudWorkloadSecurityAgentPolicyCreateRequest");
const CloudWorkloadSecurityAgentPolicyData_1 = require("./CloudWorkloadSecurityAgentPolicyData");
const CloudWorkloadSecurityAgentPolicyResponse_1 = require("./CloudWorkloadSecurityAgentPolicyResponse");
const CloudWorkloadSecurityAgentPolicyUpdateAttributes_1 = require("./CloudWorkloadSecurityAgentPolicyUpdateAttributes");
const CloudWorkloadSecurityAgentPolicyUpdateData_1 = require("./CloudWorkloadSecurityAgentPolicyUpdateData");
const CloudWorkloadSecurityAgentPolicyUpdateRequest_1 = require("./CloudWorkloadSecurityAgentPolicyUpdateRequest");
const CloudWorkloadSecurityAgentPolicyUpdaterAttributes_1 = require("./CloudWorkloadSecurityAgentPolicyUpdaterAttributes");
const CloudWorkloadSecurityAgentPolicyVersion_1 = require("./CloudWorkloadSecurityAgentPolicyVersion");
const CloudWorkloadSecurityAgentRuleAction_1 = require("./CloudWorkloadSecurityAgentRuleAction");
const CloudWorkloadSecurityAgentRuleActionHash_1 = require("./CloudWorkloadSecurityAgentRuleActionHash");
const CloudWorkloadSecurityAgentRuleActionMetadata_1 = require("./CloudWorkloadSecurityAgentRuleActionMetadata");
const CloudWorkloadSecurityAgentRuleActionSet_1 = require("./CloudWorkloadSecurityAgentRuleActionSet");
const CloudWorkloadSecurityAgentRuleAttributes_1 = require("./CloudWorkloadSecurityAgentRuleAttributes");
const CloudWorkloadSecurityAgentRuleCreateAttributes_1 = require("./CloudWorkloadSecurityAgentRuleCreateAttributes");
const CloudWorkloadSecurityAgentRuleCreateData_1 = require("./CloudWorkloadSecurityAgentRuleCreateData");
const CloudWorkloadSecurityAgentRuleCreateRequest_1 = require("./CloudWorkloadSecurityAgentRuleCreateRequest");
const CloudWorkloadSecurityAgentRuleCreatorAttributes_1 = require("./CloudWorkloadSecurityAgentRuleCreatorAttributes");
const CloudWorkloadSecurityAgentRuleData_1 = require("./CloudWorkloadSecurityAgentRuleData");
const CloudWorkloadSecurityAgentRuleKill_1 = require("./CloudWorkloadSecurityAgentRuleKill");
const CloudWorkloadSecurityAgentRuleResponse_1 = require("./CloudWorkloadSecurityAgentRuleResponse");
const CloudWorkloadSecurityAgentRuleUpdateAttributes_1 = require("./CloudWorkloadSecurityAgentRuleUpdateAttributes");
const CloudWorkloadSecurityAgentRuleUpdateData_1 = require("./CloudWorkloadSecurityAgentRuleUpdateData");
const CloudWorkloadSecurityAgentRuleUpdateRequest_1 = require("./CloudWorkloadSecurityAgentRuleUpdateRequest");
const CloudWorkloadSecurityAgentRuleUpdaterAttributes_1 = require("./CloudWorkloadSecurityAgentRuleUpdaterAttributes");
const CloudWorkloadSecurityAgentRulesListResponse_1 = require("./CloudWorkloadSecurityAgentRulesListResponse");
const CloudflareAPIToken_1 = require("./CloudflareAPIToken");
const CloudflareAPITokenUpdate_1 = require("./CloudflareAPITokenUpdate");
const CloudflareAccountCreateRequest_1 = require("./CloudflareAccountCreateRequest");
const CloudflareAccountCreateRequestAttributes_1 = require("./CloudflareAccountCreateRequestAttributes");
const CloudflareAccountCreateRequestData_1 = require("./CloudflareAccountCreateRequestData");
const CloudflareAccountResponse_1 = require("./CloudflareAccountResponse");
const CloudflareAccountResponseAttributes_1 = require("./CloudflareAccountResponseAttributes");
const CloudflareAccountResponseData_1 = require("./CloudflareAccountResponseData");
const CloudflareAccountUpdateRequest_1 = require("./CloudflareAccountUpdateRequest");
const CloudflareAccountUpdateRequestAttributes_1 = require("./CloudflareAccountUpdateRequestAttributes");
const CloudflareAccountUpdateRequestData_1 = require("./CloudflareAccountUpdateRequestData");
const CloudflareAccountsResponse_1 = require("./CloudflareAccountsResponse");
const CloudflareGlobalAPIToken_1 = require("./CloudflareGlobalAPIToken");
const CloudflareGlobalAPITokenUpdate_1 = require("./CloudflareGlobalAPITokenUpdate");
const CloudflareIntegration_1 = require("./CloudflareIntegration");
const CloudflareIntegrationUpdate_1 = require("./CloudflareIntegrationUpdate");
const CodeLocation_1 = require("./CodeLocation");
const CommitCoverageSummaryRequest_1 = require("./CommitCoverageSummaryRequest");
const CommitCoverageSummaryRequestAttributes_1 = require("./CommitCoverageSummaryRequestAttributes");
const CommitCoverageSummaryRequestData_1 = require("./CommitCoverageSummaryRequestData");
const CompletionCondition_1 = require("./CompletionCondition");
const CompletionGate_1 = require("./CompletionGate");
const Component_1 = require("./Component");
const ComponentGrid_1 = require("./ComponentGrid");
const ComponentGridProperties_1 = require("./ComponentGridProperties");
const ComponentProperties_1 = require("./ComponentProperties");
const ComponentRecommendation_1 = require("./ComponentRecommendation");
const ConfigCatIntegration_1 = require("./ConfigCatIntegration");
const ConfigCatIntegrationUpdate_1 = require("./ConfigCatIntegrationUpdate");
const ConfigCatSDKKey_1 = require("./ConfigCatSDKKey");
const ConfigCatSDKKeyUpdate_1 = require("./ConfigCatSDKKeyUpdate");
const ConfiguredSchedule_1 = require("./ConfiguredSchedule");
const ConfiguredScheduleTarget_1 = require("./ConfiguredScheduleTarget");
const ConfiguredScheduleTargetAttributes_1 = require("./ConfiguredScheduleTargetAttributes");
const ConfiguredScheduleTargetRelationships_1 = require("./ConfiguredScheduleTargetRelationships");
const ConfiguredScheduleTargetRelationshipsSchedule_1 = require("./ConfiguredScheduleTargetRelationshipsSchedule");
const ConfluentAccountCreateRequest_1 = require("./ConfluentAccountCreateRequest");
const ConfluentAccountCreateRequestAttributes_1 = require("./ConfluentAccountCreateRequestAttributes");
const ConfluentAccountCreateRequestData_1 = require("./ConfluentAccountCreateRequestData");
const ConfluentAccountResourceAttributes_1 = require("./ConfluentAccountResourceAttributes");
const ConfluentAccountResponse_1 = require("./ConfluentAccountResponse");
const ConfluentAccountResponseAttributes_1 = require("./ConfluentAccountResponseAttributes");
const ConfluentAccountResponseData_1 = require("./ConfluentAccountResponseData");
const ConfluentAccountUpdateRequest_1 = require("./ConfluentAccountUpdateRequest");
const ConfluentAccountUpdateRequestAttributes_1 = require("./ConfluentAccountUpdateRequestAttributes");
const ConfluentAccountUpdateRequestData_1 = require("./ConfluentAccountUpdateRequestData");
const ConfluentAccountsResponse_1 = require("./ConfluentAccountsResponse");
const ConfluentResourceRequest_1 = require("./ConfluentResourceRequest");
const ConfluentResourceRequestAttributes_1 = require("./ConfluentResourceRequestAttributes");
const ConfluentResourceRequestData_1 = require("./ConfluentResourceRequestData");
const ConfluentResourceResponse_1 = require("./ConfluentResourceResponse");
const ConfluentResourceResponseAttributes_1 = require("./ConfluentResourceResponseAttributes");
const ConfluentResourceResponseData_1 = require("./ConfluentResourceResponseData");
const ConfluentResourcesResponse_1 = require("./ConfluentResourcesResponse");
const ConnectedTeamRef_1 = require("./ConnectedTeamRef");
const ConnectedTeamRefData_1 = require("./ConnectedTeamRefData");
const Connection_1 = require("./Connection");
const ConnectionEnv_1 = require("./ConnectionEnv");
const ConnectionGroup_1 = require("./ConnectionGroup");
const ConnectionsPagePagination_1 = require("./ConnectionsPagePagination");
const ConnectionsResponseMeta_1 = require("./ConnectionsResponseMeta");
const Container_1 = require("./Container");
const ContainerAttributes_1 = require("./ContainerAttributes");
const ContainerGroup_1 = require("./ContainerGroup");
const ContainerGroupAttributes_1 = require("./ContainerGroupAttributes");
const ContainerGroupRelationships_1 = require("./ContainerGroupRelationships");
const ContainerGroupRelationshipsLink_1 = require("./ContainerGroupRelationshipsLink");
const ContainerGroupRelationshipsLinks_1 = require("./ContainerGroupRelationshipsLinks");
const ContainerImage_1 = require("./ContainerImage");
const ContainerImageAttributes_1 = require("./ContainerImageAttributes");
const ContainerImageFlavor_1 = require("./ContainerImageFlavor");
const ContainerImageGroup_1 = require("./ContainerImageGroup");
const ContainerImageGroupAttributes_1 = require("./ContainerImageGroupAttributes");
const ContainerImageGroupImagesRelationshipsLink_1 = require("./ContainerImageGroupImagesRelationshipsLink");
const ContainerImageGroupRelationships_1 = require("./ContainerImageGroupRelationships");
const ContainerImageGroupRelationshipsLinks_1 = require("./ContainerImageGroupRelationshipsLinks");
const ContainerImageMeta_1 = require("./ContainerImageMeta");
const ContainerImageMetaPage_1 = require("./ContainerImageMetaPage");
const ContainerImageVulnerabilities_1 = require("./ContainerImageVulnerabilities");
const ContainerImagesResponse_1 = require("./ContainerImagesResponse");
const ContainerImagesResponseLinks_1 = require("./ContainerImagesResponseLinks");
const ContainerMeta_1 = require("./ContainerMeta");
const ContainerMetaPage_1 = require("./ContainerMetaPage");
const ContainersResponse_1 = require("./ContainersResponse");
const ContainersResponseLinks_1 = require("./ContainersResponseLinks");
const ConvertJobResultsToSignalsAttributes_1 = require("./ConvertJobResultsToSignalsAttributes");
const ConvertJobResultsToSignalsData_1 = require("./ConvertJobResultsToSignalsData");
const ConvertJobResultsToSignalsRequest_1 = require("./ConvertJobResultsToSignalsRequest");
const CostAttributionAggregatesBody_1 = require("./CostAttributionAggregatesBody");
const CostByOrg_1 = require("./CostByOrg");
const CostByOrgAttributes_1 = require("./CostByOrgAttributes");
const CostByOrgResponse_1 = require("./CostByOrgResponse");
const CoverageSummaryAttributes_1 = require("./CoverageSummaryAttributes");
const CoverageSummaryCodeownerStats_1 = require("./CoverageSummaryCodeownerStats");
const CoverageSummaryData_1 = require("./CoverageSummaryData");
const CoverageSummaryResponse_1 = require("./CoverageSummaryResponse");
const CoverageSummaryServiceStats_1 = require("./CoverageSummaryServiceStats");
const Cpu_1 = require("./Cpu");
const CreateActionConnectionRequest_1 = require("./CreateActionConnectionRequest");
const CreateActionConnectionResponse_1 = require("./CreateActionConnectionResponse");
const CreateAppRequest_1 = require("./CreateAppRequest");
const CreateAppRequestData_1 = require("./CreateAppRequestData");
const CreateAppRequestDataAttributes_1 = require("./CreateAppRequestDataAttributes");
const CreateAppResponse_1 = require("./CreateAppResponse");
const CreateAppResponseData_1 = require("./CreateAppResponseData");
const CreateAppsDatastoreRequest_1 = require("./CreateAppsDatastoreRequest");
const CreateAppsDatastoreRequestData_1 = require("./CreateAppsDatastoreRequestData");
const CreateAppsDatastoreRequestDataAttributes_1 = require("./CreateAppsDatastoreRequestDataAttributes");
const CreateAppsDatastoreResponse_1 = require("./CreateAppsDatastoreResponse");
const CreateAppsDatastoreResponseData_1 = require("./CreateAppsDatastoreResponseData");
const CreateAttachmentRequest_1 = require("./CreateAttachmentRequest");
const CreateAttachmentRequestData_1 = require("./CreateAttachmentRequestData");
const CreateAttachmentRequestDataAttributes_1 = require("./CreateAttachmentRequestDataAttributes");
const CreateAttachmentRequestDataAttributesAttachment_1 = require("./CreateAttachmentRequestDataAttributesAttachment");
const CreateCaseRequestArray_1 = require("./CreateCaseRequestArray");
const CreateCaseRequestData_1 = require("./CreateCaseRequestData");
const CreateCaseRequestDataAttributes_1 = require("./CreateCaseRequestDataAttributes");
const CreateCaseRequestDataRelationships_1 = require("./CreateCaseRequestDataRelationships");
const CreateComponentRequest_1 = require("./CreateComponentRequest");
const CreateComponentRequestData_1 = require("./CreateComponentRequestData");
const CreateComponentRequestDataAttributes_1 = require("./CreateComponentRequestDataAttributes");
const CreateComponentRequestDataAttributesComponentsItems_1 = require("./CreateComponentRequestDataAttributesComponentsItems");
const CreateComponentRequestDataRelationships_1 = require("./CreateComponentRequestDataRelationships");
const CreateComponentRequestDataRelationshipsGroup_1 = require("./CreateComponentRequestDataRelationshipsGroup");
const CreateComponentRequestDataRelationshipsGroupData_1 = require("./CreateComponentRequestDataRelationshipsGroupData");
const CreateConnectionRequest_1 = require("./CreateConnectionRequest");
const CreateConnectionRequestData_1 = require("./CreateConnectionRequestData");
const CreateConnectionRequestDataAttributes_1 = require("./CreateConnectionRequestDataAttributes");
const CreateConnectionRequestDataAttributesFieldsItems_1 = require("./CreateConnectionRequestDataAttributesFieldsItems");
const CreateCustomFrameworkRequest_1 = require("./CreateCustomFrameworkRequest");
const CreateCustomFrameworkResponse_1 = require("./CreateCustomFrameworkResponse");
const CreateDataDeletionRequestBody_1 = require("./CreateDataDeletionRequestBody");
const CreateDataDeletionRequestBodyAttributes_1 = require("./CreateDataDeletionRequestBodyAttributes");
const CreateDataDeletionRequestBodyData_1 = require("./CreateDataDeletionRequestBodyData");
const CreateDataDeletionResponseBody_1 = require("./CreateDataDeletionResponseBody");
const CreateDegradationRequest_1 = require("./CreateDegradationRequest");
const CreateDegradationRequestData_1 = require("./CreateDegradationRequestData");
const CreateDegradationRequestDataAttributes_1 = require("./CreateDegradationRequestDataAttributes");
const CreateDegradationRequestDataAttributesComponentsAffectedItems_1 = require("./CreateDegradationRequestDataAttributesComponentsAffectedItems");
const CreateDeploymentGateParams_1 = require("./CreateDeploymentGateParams");
const CreateDeploymentGateParamsData_1 = require("./CreateDeploymentGateParamsData");
const CreateDeploymentGateParamsDataAttributes_1 = require("./CreateDeploymentGateParamsDataAttributes");
const CreateDeploymentRuleParams_1 = require("./CreateDeploymentRuleParams");
const CreateDeploymentRuleParamsData_1 = require("./CreateDeploymentRuleParamsData");
const CreateDeploymentRuleParamsDataAttributes_1 = require("./CreateDeploymentRuleParamsDataAttributes");
const CreateEmailNotificationChannelConfig_1 = require("./CreateEmailNotificationChannelConfig");
const CreateIncidentNotificationRuleRequest_1 = require("./CreateIncidentNotificationRuleRequest");
const CreateIncidentNotificationTemplateRequest_1 = require("./CreateIncidentNotificationTemplateRequest");
const CreateJiraIssueRequestArray_1 = require("./CreateJiraIssueRequestArray");
const CreateJiraIssueRequestData_1 = require("./CreateJiraIssueRequestData");
const CreateJiraIssueRequestDataAttributes_1 = require("./CreateJiraIssueRequestDataAttributes");
const CreateJiraIssueRequestDataRelationships_1 = require("./CreateJiraIssueRequestDataRelationships");
const CreateMaintenanceRequest_1 = require("./CreateMaintenanceRequest");
const CreateMaintenanceRequestData_1 = require("./CreateMaintenanceRequestData");
const CreateMaintenanceRequestDataAttributes_1 = require("./CreateMaintenanceRequestDataAttributes");
const CreateMaintenanceRequestDataAttributesComponentsAffectedItems_1 = require("./CreateMaintenanceRequestDataAttributesComponentsAffectedItems");
const CreateNotificationChannelAttributes_1 = require("./CreateNotificationChannelAttributes");
const CreateNotificationChannelData_1 = require("./CreateNotificationChannelData");
const CreateNotificationRuleParameters_1 = require("./CreateNotificationRuleParameters");
const CreateNotificationRuleParametersData_1 = require("./CreateNotificationRuleParametersData");
const CreateNotificationRuleParametersDataAttributes_1 = require("./CreateNotificationRuleParametersDataAttributes");
const CreateOnCallNotificationRuleRequest_1 = require("./CreateOnCallNotificationRuleRequest");
const CreateOnCallNotificationRuleRequestData_1 = require("./CreateOnCallNotificationRuleRequestData");
const CreateOpenAPIResponse_1 = require("./CreateOpenAPIResponse");
const CreateOpenAPIResponseAttributes_1 = require("./CreateOpenAPIResponseAttributes");
const CreateOpenAPIResponseData_1 = require("./CreateOpenAPIResponseData");
const CreatePageRequest_1 = require("./CreatePageRequest");
const CreatePageRequestData_1 = require("./CreatePageRequestData");
const CreatePageRequestDataAttributes_1 = require("./CreatePageRequestDataAttributes");
const CreatePageRequestDataAttributesTarget_1 = require("./CreatePageRequestDataAttributesTarget");
const CreatePageResponse_1 = require("./CreatePageResponse");
const CreatePageResponseData_1 = require("./CreatePageResponseData");
const CreatePhoneNotificationChannelConfig_1 = require("./CreatePhoneNotificationChannelConfig");
const CreateRuleRequest_1 = require("./CreateRuleRequest");
const CreateRuleRequestData_1 = require("./CreateRuleRequestData");
const CreateRuleResponse_1 = require("./CreateRuleResponse");
const CreateRuleResponseData_1 = require("./CreateRuleResponseData");
const CreateRulesetRequest_1 = require("./CreateRulesetRequest");
const CreateRulesetRequestData_1 = require("./CreateRulesetRequestData");
const CreateRulesetRequestDataAttributes_1 = require("./CreateRulesetRequestDataAttributes");
const CreateRulesetRequestDataAttributesRulesItems_1 = require("./CreateRulesetRequestDataAttributesRulesItems");
const CreateRulesetRequestDataAttributesRulesItemsQuery_1 = require("./CreateRulesetRequestDataAttributesRulesItemsQuery");
const CreateRulesetRequestDataAttributesRulesItemsQueryAddition_1 = require("./CreateRulesetRequestDataAttributesRulesItemsQueryAddition");
const CreateRulesetRequestDataAttributesRulesItemsReferenceTable_1 = require("./CreateRulesetRequestDataAttributesRulesItemsReferenceTable");
const CreateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems_1 = require("./CreateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems");
const CreateStatusPageRequest_1 = require("./CreateStatusPageRequest");
const CreateStatusPageRequestData_1 = require("./CreateStatusPageRequestData");
const CreateStatusPageRequestDataAttributes_1 = require("./CreateStatusPageRequestDataAttributes");
const CreateStatusPageRequestDataAttributesComponentsItems_1 = require("./CreateStatusPageRequestDataAttributesComponentsItems");
const CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems_1 = require("./CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems");
const CreateTableRequest_1 = require("./CreateTableRequest");
const CreateTableRequestData_1 = require("./CreateTableRequestData");
const CreateTableRequestDataAttributes_1 = require("./CreateTableRequestDataAttributes");
const CreateTableRequestDataAttributesFileMetadataCloudStorage_1 = require("./CreateTableRequestDataAttributesFileMetadataCloudStorage");
const CreateTableRequestDataAttributesFileMetadataLocalFile_1 = require("./CreateTableRequestDataAttributesFileMetadataLocalFile");
const CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails_1 = require("./CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails");
const CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail_1 = require("./CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail");
const CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail_1 = require("./CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail");
const CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail_1 = require("./CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail");
const CreateTableRequestDataAttributesSchema_1 = require("./CreateTableRequestDataAttributesSchema");
const CreateTableRequestDataAttributesSchemaFieldsItems_1 = require("./CreateTableRequestDataAttributesSchemaFieldsItems");
const CreateTenancyConfigData_1 = require("./CreateTenancyConfigData");
const CreateTenancyConfigDataAttributes_1 = require("./CreateTenancyConfigDataAttributes");
const CreateTenancyConfigDataAttributesAuthCredentials_1 = require("./CreateTenancyConfigDataAttributesAuthCredentials");
const CreateTenancyConfigDataAttributesLogsConfig_1 = require("./CreateTenancyConfigDataAttributesLogsConfig");
const CreateTenancyConfigDataAttributesMetricsConfig_1 = require("./CreateTenancyConfigDataAttributesMetricsConfig");
const CreateTenancyConfigDataAttributesRegionsConfig_1 = require("./CreateTenancyConfigDataAttributesRegionsConfig");
const CreateTenancyConfigRequest_1 = require("./CreateTenancyConfigRequest");
const CreateUploadRequest_1 = require("./CreateUploadRequest");
const CreateUploadRequestData_1 = require("./CreateUploadRequestData");
const CreateUploadRequestDataAttributes_1 = require("./CreateUploadRequestDataAttributes");
const CreateUploadResponse_1 = require("./CreateUploadResponse");
const CreateUploadResponseData_1 = require("./CreateUploadResponseData");
const CreateUploadResponseDataAttributes_1 = require("./CreateUploadResponseDataAttributes");
const CreateUserNotificationChannelRequest_1 = require("./CreateUserNotificationChannelRequest");
const CreateWorkflowRequest_1 = require("./CreateWorkflowRequest");
const CreateWorkflowResponse_1 = require("./CreateWorkflowResponse");
const Creator_1 = require("./Creator");
const CsmAgentData_1 = require("./CsmAgentData");
const CsmAgentsAttributes_1 = require("./CsmAgentsAttributes");
const CsmAgentsResponse_1 = require("./CsmAgentsResponse");
const CsmCloudAccountsCoverageAnalysisAttributes_1 = require("./CsmCloudAccountsCoverageAnalysisAttributes");
const CsmCloudAccountsCoverageAnalysisData_1 = require("./CsmCloudAccountsCoverageAnalysisData");
const CsmCloudAccountsCoverageAnalysisResponse_1 = require("./CsmCloudAccountsCoverageAnalysisResponse");
const CsmCoverageAnalysis_1 = require("./CsmCoverageAnalysis");
const CsmHostsAndContainersCoverageAnalysisAttributes_1 = require("./CsmHostsAndContainersCoverageAnalysisAttributes");
const CsmHostsAndContainersCoverageAnalysisData_1 = require("./CsmHostsAndContainersCoverageAnalysisData");
const CsmHostsAndContainersCoverageAnalysisResponse_1 = require("./CsmHostsAndContainersCoverageAnalysisResponse");
const CsmServerlessCoverageAnalysisAttributes_1 = require("./CsmServerlessCoverageAnalysisAttributes");
const CsmServerlessCoverageAnalysisData_1 = require("./CsmServerlessCoverageAnalysisData");
const CsmServerlessCoverageAnalysisResponse_1 = require("./CsmServerlessCoverageAnalysisResponse");
const CustomAttributeConfig_1 = require("./CustomAttributeConfig");
const CustomAttributeConfigAttributesCreate_1 = require("./CustomAttributeConfigAttributesCreate");
const CustomAttributeConfigCreate_1 = require("./CustomAttributeConfigCreate");
const CustomAttributeConfigCreateRequest_1 = require("./CustomAttributeConfigCreateRequest");
const CustomAttributeConfigResourceAttributes_1 = require("./CustomAttributeConfigResourceAttributes");
const CustomAttributeConfigResponse_1 = require("./CustomAttributeConfigResponse");
const CustomAttributeConfigsResponse_1 = require("./CustomAttributeConfigsResponse");
const CustomAttributeValue_1 = require("./CustomAttributeValue");
const CustomConnection_1 = require("./CustomConnection");
const CustomConnectionAttributes_1 = require("./CustomConnectionAttributes");
const CustomConnectionAttributesOnPremRunner_1 = require("./CustomConnectionAttributesOnPremRunner");
const CustomCostGetResponseMeta_1 = require("./CustomCostGetResponseMeta");
const CustomCostListResponseMeta_1 = require("./CustomCostListResponseMeta");
const CustomCostUploadResponseMeta_1 = require("./CustomCostUploadResponseMeta");
const CustomCostsFileGetResponse_1 = require("./CustomCostsFileGetResponse");
const CustomCostsFileLineItem_1 = require("./CustomCostsFileLineItem");
const CustomCostsFileListResponse_1 = require("./CustomCostsFileListResponse");
const CustomCostsFileMetadata_1 = require("./CustomCostsFileMetadata");
const CustomCostsFileMetadataHighLevel_1 = require("./CustomCostsFileMetadataHighLevel");
const CustomCostsFileMetadataWithContent_1 = require("./CustomCostsFileMetadataWithContent");
const CustomCostsFileMetadataWithContentHighLevel_1 = require("./CustomCostsFileMetadataWithContentHighLevel");
const CustomCostsFileUploadResponse_1 = require("./CustomCostsFileUploadResponse");
const CustomCostsFileUsageChargePeriod_1 = require("./CustomCostsFileUsageChargePeriod");
const CustomCostsUser_1 = require("./CustomCostsUser");
const CustomDestinationCreateRequest_1 = require("./CustomDestinationCreateRequest");
const CustomDestinationCreateRequestAttributes_1 = require("./CustomDestinationCreateRequestAttributes");
const CustomDestinationCreateRequestDefinition_1 = require("./CustomDestinationCreateRequestDefinition");
const CustomDestinationElasticsearchDestinationAuth_1 = require("./CustomDestinationElasticsearchDestinationAuth");
const CustomDestinationForwardDestinationElasticsearch_1 = require("./CustomDestinationForwardDestinationElasticsearch");
const CustomDestinationForwardDestinationHttp_1 = require("./CustomDestinationForwardDestinationHttp");
const CustomDestinationForwardDestinationMicrosoftSentinel_1 = require("./CustomDestinationForwardDestinationMicrosoftSentinel");
const CustomDestinationForwardDestinationSplunk_1 = require("./CustomDestinationForwardDestinationSplunk");
const CustomDestinationHttpDestinationAuthBasic_1 = require("./CustomDestinationHttpDestinationAuthBasic");
const CustomDestinationHttpDestinationAuthCustomHeader_1 = require("./CustomDestinationHttpDestinationAuthCustomHeader");
const CustomDestinationResponse_1 = require("./CustomDestinationResponse");
const CustomDestinationResponseAttributes_1 = require("./CustomDestinationResponseAttributes");
const CustomDestinationResponseDefinition_1 = require("./CustomDestinationResponseDefinition");
const CustomDestinationResponseForwardDestinationElasticsearch_1 = require("./CustomDestinationResponseForwardDestinationElasticsearch");
const CustomDestinationResponseForwardDestinationHttp_1 = require("./CustomDestinationResponseForwardDestinationHttp");
const CustomDestinationResponseForwardDestinationMicrosoftSentinel_1 = require("./CustomDestinationResponseForwardDestinationMicrosoftSentinel");
const CustomDestinationResponseForwardDestinationSplunk_1 = require("./CustomDestinationResponseForwardDestinationSplunk");
const CustomDestinationResponseHttpDestinationAuthBasic_1 = require("./CustomDestinationResponseHttpDestinationAuthBasic");
const CustomDestinationResponseHttpDestinationAuthCustomHeader_1 = require("./CustomDestinationResponseHttpDestinationAuthCustomHeader");
const CustomDestinationUpdateRequest_1 = require("./CustomDestinationUpdateRequest");
const CustomDestinationUpdateRequestAttributes_1 = require("./CustomDestinationUpdateRequestAttributes");
const CustomDestinationUpdateRequestDefinition_1 = require("./CustomDestinationUpdateRequestDefinition");
const CustomDestinationsResponse_1 = require("./CustomDestinationsResponse");
const CustomFrameworkControl_1 = require("./CustomFrameworkControl");
const CustomFrameworkData_1 = require("./CustomFrameworkData");
const CustomFrameworkDataAttributes_1 = require("./CustomFrameworkDataAttributes");
const CustomFrameworkDataHandleAndVersion_1 = require("./CustomFrameworkDataHandleAndVersion");
const CustomFrameworkMetadata_1 = require("./CustomFrameworkMetadata");
const CustomFrameworkRequirement_1 = require("./CustomFrameworkRequirement");
const CustomFrameworkWithoutRequirements_1 = require("./CustomFrameworkWithoutRequirements");
const CustomRule_1 = require("./CustomRule");
const CustomRuleRequest_1 = require("./CustomRuleRequest");
const CustomRuleRequestData_1 = require("./CustomRuleRequestData");
const CustomRuleRequestDataAttributes_1 = require("./CustomRuleRequestDataAttributes");
const CustomRuleResponse_1 = require("./CustomRuleResponse");
const CustomRuleResponseData_1 = require("./CustomRuleResponseData");
const CustomRuleRevision_1 = require("./CustomRuleRevision");
const CustomRuleRevisionAttributes_1 = require("./CustomRuleRevisionAttributes");
const CustomRuleRevisionInputAttributes_1 = require("./CustomRuleRevisionInputAttributes");
const CustomRuleRevisionRequest_1 = require("./CustomRuleRevisionRequest");
const CustomRuleRevisionRequestData_1 = require("./CustomRuleRevisionRequestData");
const CustomRuleRevisionResponse_1 = require("./CustomRuleRevisionResponse");
const CustomRuleRevisionTest_1 = require("./CustomRuleRevisionTest");
const CustomRuleRevisionsResponse_1 = require("./CustomRuleRevisionsResponse");
const CustomRuleset_1 = require("./CustomRuleset");
const CustomRulesetAttributes_1 = require("./CustomRulesetAttributes");
const CustomRulesetRequest_1 = require("./CustomRulesetRequest");
const CustomRulesetRequestData_1 = require("./CustomRulesetRequestData");
const CustomRulesetRequestDataAttributes_1 = require("./CustomRulesetRequestDataAttributes");
const CustomRulesetResponse_1 = require("./CustomRulesetResponse");
const DORADeploymentFetchResponse_1 = require("./DORADeploymentFetchResponse");
const DORADeploymentObject_1 = require("./DORADeploymentObject");
const DORADeploymentObjectAttributes_1 = require("./DORADeploymentObjectAttributes");
const DORADeploymentPatchRemediation_1 = require("./DORADeploymentPatchRemediation");
const DORADeploymentPatchRequest_1 = require("./DORADeploymentPatchRequest");
const DORADeploymentPatchRequestAttributes_1 = require("./DORADeploymentPatchRequestAttributes");
const DORADeploymentPatchRequestData_1 = require("./DORADeploymentPatchRequestData");
const DORADeploymentRequest_1 = require("./DORADeploymentRequest");
const DORADeploymentRequestAttributes_1 = require("./DORADeploymentRequestAttributes");
const DORADeploymentRequestData_1 = require("./DORADeploymentRequestData");
const DORADeploymentResponse_1 = require("./DORADeploymentResponse");
const DORADeploymentResponseData_1 = require("./DORADeploymentResponseData");
const DORADeploymentsListResponse_1 = require("./DORADeploymentsListResponse");
const DORAFailureFetchResponse_1 = require("./DORAFailureFetchResponse");
const DORAFailureRequest_1 = require("./DORAFailureRequest");
const DORAFailureRequestAttributes_1 = require("./DORAFailureRequestAttributes");
const DORAFailureRequestData_1 = require("./DORAFailureRequestData");
const DORAFailureResponse_1 = require("./DORAFailureResponse");
const DORAFailureResponseData_1 = require("./DORAFailureResponseData");
const DORAFailuresListResponse_1 = require("./DORAFailuresListResponse");
const DORAGitInfo_1 = require("./DORAGitInfo");
const DORAIncidentObject_1 = require("./DORAIncidentObject");
const DORAIncidentObjectAttributes_1 = require("./DORAIncidentObjectAttributes");
const DORAListDeploymentsRequest_1 = require("./DORAListDeploymentsRequest");
const DORAListDeploymentsRequestAttributes_1 = require("./DORAListDeploymentsRequestAttributes");
const DORAListDeploymentsRequestData_1 = require("./DORAListDeploymentsRequestData");
const DORAListFailuresRequest_1 = require("./DORAListFailuresRequest");
const DORAListFailuresRequestAttributes_1 = require("./DORAListFailuresRequestAttributes");
const DORAListFailuresRequestData_1 = require("./DORAListFailuresRequestData");
const DashboardListAddItemsRequest_1 = require("./DashboardListAddItemsRequest");
const DashboardListAddItemsResponse_1 = require("./DashboardListAddItemsResponse");
const DashboardListDeleteItemsRequest_1 = require("./DashboardListDeleteItemsRequest");
const DashboardListDeleteItemsResponse_1 = require("./DashboardListDeleteItemsResponse");
const DashboardListItem_1 = require("./DashboardListItem");
const DashboardListItemRequest_1 = require("./DashboardListItemRequest");
const DashboardListItemResponse_1 = require("./DashboardListItemResponse");
const DashboardListItems_1 = require("./DashboardListItems");
const DashboardListUpdateItemsRequest_1 = require("./DashboardListUpdateItemsRequest");
const DashboardListUpdateItemsResponse_1 = require("./DashboardListUpdateItemsResponse");
const DashboardTriggerWrapper_1 = require("./DashboardTriggerWrapper");
const DataAttributesRulesItemsMapping_1 = require("./DataAttributesRulesItemsMapping");
const DataDeletionResponseItem_1 = require("./DataDeletionResponseItem");
const DataDeletionResponseItemAttributes_1 = require("./DataDeletionResponseItemAttributes");
const DataDeletionResponseMeta_1 = require("./DataDeletionResponseMeta");
const DataRelationshipsTeams_1 = require("./DataRelationshipsTeams");
const DataRelationshipsTeamsDataItems_1 = require("./DataRelationshipsTeamsDataItems");
const DataScalarColumn_1 = require("./DataScalarColumn");
const DataTransform_1 = require("./DataTransform");
const DataTransformProperties_1 = require("./DataTransformProperties");
const DatabaseMonitoringTriggerWrapper_1 = require("./DatabaseMonitoringTriggerWrapper");
const DatadogAPIKey_1 = require("./DatadogAPIKey");
const DatadogAPIKeyUpdate_1 = require("./DatadogAPIKeyUpdate");
const DatadogIntegration_1 = require("./DatadogIntegration");
const DatadogIntegrationUpdate_1 = require("./DatadogIntegrationUpdate");
const DatasetAttributesRequest_1 = require("./DatasetAttributesRequest");
const DatasetAttributesResponse_1 = require("./DatasetAttributesResponse");
const DatasetCreateRequest_1 = require("./DatasetCreateRequest");
const DatasetRequest_1 = require("./DatasetRequest");
const DatasetResponse_1 = require("./DatasetResponse");
const DatasetResponseMulti_1 = require("./DatasetResponseMulti");
const DatasetResponseSingle_1 = require("./DatasetResponseSingle");
const DatasetUpdateRequest_1 = require("./DatasetUpdateRequest");
const Datastore_1 = require("./Datastore");
const DatastoreArray_1 = require("./DatastoreArray");
const DatastoreData_1 = require("./DatastoreData");
const DatastoreDataAttributes_1 = require("./DatastoreDataAttributes");
const DatastoreTrigger_1 = require("./DatastoreTrigger");
const DatastoreTriggerWrapper_1 = require("./DatastoreTriggerWrapper");
const Degradation_1 = require("./Degradation");
const DegradationArray_1 = require("./DegradationArray");
const DegradationData_1 = require("./DegradationData");
const DegradationDataAttributes_1 = require("./DegradationDataAttributes");
const DegradationDataAttributesComponentsAffectedItems_1 = require("./DegradationDataAttributesComponentsAffectedItems");
const DegradationDataAttributesSource_1 = require("./DegradationDataAttributesSource");
const DegradationDataAttributesUpdatesItems_1 = require("./DegradationDataAttributesUpdatesItems");
const DegradationDataAttributesUpdatesItemsComponentsAffectedItems_1 = require("./DegradationDataAttributesUpdatesItemsComponentsAffectedItems");
const DegradationDataRelationships_1 = require("./DegradationDataRelationships");
const DegradationDataRelationshipsCreatedByUser_1 = require("./DegradationDataRelationshipsCreatedByUser");
const DegradationDataRelationshipsCreatedByUserData_1 = require("./DegradationDataRelationshipsCreatedByUserData");
const DegradationDataRelationshipsLastModifiedByUser_1 = require("./DegradationDataRelationshipsLastModifiedByUser");
const DegradationDataRelationshipsLastModifiedByUserData_1 = require("./DegradationDataRelationshipsLastModifiedByUserData");
const DegradationDataRelationshipsStatusPage_1 = require("./DegradationDataRelationshipsStatusPage");
const DegradationDataRelationshipsStatusPageData_1 = require("./DegradationDataRelationshipsStatusPageData");
const DeleteAppResponse_1 = require("./DeleteAppResponse");
const DeleteAppResponseData_1 = require("./DeleteAppResponseData");
const DeleteAppsDatastoreItemRequest_1 = require("./DeleteAppsDatastoreItemRequest");
const DeleteAppsDatastoreItemRequestData_1 = require("./DeleteAppsDatastoreItemRequestData");
const DeleteAppsDatastoreItemRequestDataAttributes_1 = require("./DeleteAppsDatastoreItemRequestDataAttributes");
const DeleteAppsDatastoreItemResponse_1 = require("./DeleteAppsDatastoreItemResponse");
const DeleteAppsDatastoreItemResponseArray_1 = require("./DeleteAppsDatastoreItemResponseArray");
const DeleteAppsDatastoreItemResponseData_1 = require("./DeleteAppsDatastoreItemResponseData");
const DeleteAppsRequest_1 = require("./DeleteAppsRequest");
const DeleteAppsRequestDataItems_1 = require("./DeleteAppsRequestDataItems");
const DeleteAppsResponse_1 = require("./DeleteAppsResponse");
const DeleteAppsResponseDataItems_1 = require("./DeleteAppsResponseDataItems");
const DeleteCustomFrameworkResponse_1 = require("./DeleteCustomFrameworkResponse");
const DeletedSuiteResponseData_1 = require("./DeletedSuiteResponseData");
const DeletedSuiteResponseDataAttributes_1 = require("./DeletedSuiteResponseDataAttributes");
const DeletedSuitesRequestDelete_1 = require("./DeletedSuitesRequestDelete");
const DeletedSuitesRequestDeleteAttributes_1 = require("./DeletedSuitesRequestDeleteAttributes");
const DeletedSuitesRequestDeleteRequest_1 = require("./DeletedSuitesRequestDeleteRequest");
const DeletedSuitesResponse_1 = require("./DeletedSuitesResponse");
const DeletedTestResponseData_1 = require("./DeletedTestResponseData");
const DeletedTestResponseDataAttributes_1 = require("./DeletedTestResponseDataAttributes");
const DeletedTestsRequestDelete_1 = require("./DeletedTestsRequestDelete");
const DeletedTestsRequestDeleteAttributes_1 = require("./DeletedTestsRequestDeleteAttributes");
const DeletedTestsRequestDeleteRequest_1 = require("./DeletedTestsRequestDeleteRequest");
const DeletedTestsResponse_1 = require("./DeletedTestsResponse");
const DependencyLocation_1 = require("./DependencyLocation");
const Deployment_1 = require("./Deployment");
const DeploymentAttributes_1 = require("./DeploymentAttributes");
const DeploymentGateResponse_1 = require("./DeploymentGateResponse");
const DeploymentGateResponseData_1 = require("./DeploymentGateResponseData");
const DeploymentGateResponseDataAttributes_1 = require("./DeploymentGateResponseDataAttributes");
const DeploymentGateResponseDataAttributesCreatedBy_1 = require("./DeploymentGateResponseDataAttributesCreatedBy");
const DeploymentGateResponseDataAttributesUpdatedBy_1 = require("./DeploymentGateResponseDataAttributesUpdatedBy");
const DeploymentGateRulesResponse_1 = require("./DeploymentGateRulesResponse");
const DeploymentMetadata_1 = require("./DeploymentMetadata");
const DeploymentRelationship_1 = require("./DeploymentRelationship");
const DeploymentRelationshipData_1 = require("./DeploymentRelationshipData");
const DeploymentRuleOptionsFaultyDeploymentDetection_1 = require("./DeploymentRuleOptionsFaultyDeploymentDetection");
const DeploymentRuleOptionsMonitor_1 = require("./DeploymentRuleOptionsMonitor");
const DeploymentRuleResponse_1 = require("./DeploymentRuleResponse");
const DeploymentRuleResponseData_1 = require("./DeploymentRuleResponseData");
const DeploymentRuleResponseDataAttributes_1 = require("./DeploymentRuleResponseDataAttributes");
const DeploymentRuleResponseDataAttributesCreatedBy_1 = require("./DeploymentRuleResponseDataAttributesCreatedBy");
const DeploymentRuleResponseDataAttributesUpdatedBy_1 = require("./DeploymentRuleResponseDataAttributesUpdatedBy");
const DetachCaseRequest_1 = require("./DetachCaseRequest");
const DetachCaseRequestData_1 = require("./DetachCaseRequestData");
const DetachCaseRequestDataRelationships_1 = require("./DetachCaseRequestDataRelationships");
const DetailedFinding_1 = require("./DetailedFinding");
const DetailedFindingAttributes_1 = require("./DetailedFindingAttributes");
const DeviceAttributes_1 = require("./DeviceAttributes");
const DeviceAttributesInterfaceStatuses_1 = require("./DeviceAttributesInterfaceStatuses");
const DevicesListData_1 = require("./DevicesListData");
const DomainAllowlist_1 = require("./DomainAllowlist");
const DomainAllowlistAttributes_1 = require("./DomainAllowlistAttributes");
const DomainAllowlistRequest_1 = require("./DomainAllowlistRequest");
const DomainAllowlistResponse_1 = require("./DomainAllowlistResponse");
const DomainAllowlistResponseData_1 = require("./DomainAllowlistResponseData");
const DomainAllowlistResponseDataAttributes_1 = require("./DomainAllowlistResponseDataAttributes");
const DowntimeCreateRequest_1 = require("./DowntimeCreateRequest");
const DowntimeCreateRequestAttributes_1 = require("./DowntimeCreateRequestAttributes");
const DowntimeCreateRequestData_1 = require("./DowntimeCreateRequestData");
const DowntimeMeta_1 = require("./DowntimeMeta");
const DowntimeMetaPage_1 = require("./DowntimeMetaPage");
const DowntimeMonitorIdentifierId_1 = require("./DowntimeMonitorIdentifierId");
const DowntimeMonitorIdentifierTags_1 = require("./DowntimeMonitorIdentifierTags");
const DowntimeMonitorIncludedAttributes_1 = require("./DowntimeMonitorIncludedAttributes");
const DowntimeMonitorIncludedItem_1 = require("./DowntimeMonitorIncludedItem");
const DowntimeRelationships_1 = require("./DowntimeRelationships");
const DowntimeRelationshipsCreatedBy_1 = require("./DowntimeRelationshipsCreatedBy");
const DowntimeRelationshipsCreatedByData_1 = require("./DowntimeRelationshipsCreatedByData");
const DowntimeRelationshipsMonitor_1 = require("./DowntimeRelationshipsMonitor");
const DowntimeRelationshipsMonitorData_1 = require("./DowntimeRelationshipsMonitorData");
const DowntimeResponse_1 = require("./DowntimeResponse");
const DowntimeResponseAttributes_1 = require("./DowntimeResponseAttributes");
const DowntimeResponseData_1 = require("./DowntimeResponseData");
const DowntimeScheduleCurrentDowntimeResponse_1 = require("./DowntimeScheduleCurrentDowntimeResponse");
const DowntimeScheduleOneTimeCreateUpdateRequest_1 = require("./DowntimeScheduleOneTimeCreateUpdateRequest");
const DowntimeScheduleOneTimeResponse_1 = require("./DowntimeScheduleOneTimeResponse");
const DowntimeScheduleRecurrenceCreateUpdateRequest_1 = require("./DowntimeScheduleRecurrenceCreateUpdateRequest");
const DowntimeScheduleRecurrenceResponse_1 = require("./DowntimeScheduleRecurrenceResponse");
const DowntimeScheduleRecurrencesCreateRequest_1 = require("./DowntimeScheduleRecurrencesCreateRequest");
const DowntimeScheduleRecurrencesResponse_1 = require("./DowntimeScheduleRecurrencesResponse");
const DowntimeScheduleRecurrencesUpdateRequest_1 = require("./DowntimeScheduleRecurrencesUpdateRequest");
const DowntimeUpdateRequest_1 = require("./DowntimeUpdateRequest");
const DowntimeUpdateRequestAttributes_1 = require("./DowntimeUpdateRequestAttributes");
const DowntimeUpdateRequestData_1 = require("./DowntimeUpdateRequestData");
const EPSS_1 = require("./EPSS");
const EntityAttributes_1 = require("./EntityAttributes");
const EntityData_1 = require("./EntityData");
const EntityMeta_1 = require("./EntityMeta");
const EntityRelationships_1 = require("./EntityRelationships");
const EntityResponseArray_1 = require("./EntityResponseArray");
const EntityResponseDataAttributes_1 = require("./EntityResponseDataAttributes");
const EntityResponseDataRelationships_1 = require("./EntityResponseDataRelationships");
const EntityResponseDataRelationshipsIncidents_1 = require("./EntityResponseDataRelationshipsIncidents");
const EntityResponseDataRelationshipsIncidentsDataItems_1 = require("./EntityResponseDataRelationshipsIncidentsDataItems");
const EntityResponseDataRelationshipsOncalls_1 = require("./EntityResponseDataRelationshipsOncalls");
const EntityResponseDataRelationshipsOncallsDataItems_1 = require("./EntityResponseDataRelationshipsOncallsDataItems");
const EntityResponseDataRelationshipsRawSchema_1 = require("./EntityResponseDataRelationshipsRawSchema");
const EntityResponseDataRelationshipsRawSchemaData_1 = require("./EntityResponseDataRelationshipsRawSchemaData");
const EntityResponseDataRelationshipsRelatedEntities_1 = require("./EntityResponseDataRelationshipsRelatedEntities");
const EntityResponseDataRelationshipsRelatedEntitiesDataItems_1 = require("./EntityResponseDataRelationshipsRelatedEntitiesDataItems");
const EntityResponseDataRelationshipsSchema_1 = require("./EntityResponseDataRelationshipsSchema");
const EntityResponseDataRelationshipsSchemaData_1 = require("./EntityResponseDataRelationshipsSchemaData");
const EntityResponseIncludedIncident_1 = require("./EntityResponseIncludedIncident");
const EntityResponseIncludedOncall_1 = require("./EntityResponseIncludedOncall");
const EntityResponseIncludedRawSchema_1 = require("./EntityResponseIncludedRawSchema");
const EntityResponseIncludedRawSchemaAttributes_1 = require("./EntityResponseIncludedRawSchemaAttributes");
const EntityResponseIncludedRelatedEntity_1 = require("./EntityResponseIncludedRelatedEntity");
const EntityResponseIncludedRelatedEntityAttributes_1 = require("./EntityResponseIncludedRelatedEntityAttributes");
const EntityResponseIncludedRelatedEntityMeta_1 = require("./EntityResponseIncludedRelatedEntityMeta");
const EntityResponseIncludedRelatedIncidentAttributes_1 = require("./EntityResponseIncludedRelatedIncidentAttributes");
const EntityResponseIncludedRelatedOncallAttributes_1 = require("./EntityResponseIncludedRelatedOncallAttributes");
const EntityResponseIncludedRelatedOncallEscalationItem_1 = require("./EntityResponseIncludedRelatedOncallEscalationItem");
const EntityResponseIncludedSchema_1 = require("./EntityResponseIncludedSchema");
const EntityResponseIncludedSchemaAttributes_1 = require("./EntityResponseIncludedSchemaAttributes");
const EntityResponseMeta_1 = require("./EntityResponseMeta");
const EntityToIncidents_1 = require("./EntityToIncidents");
const EntityToOncalls_1 = require("./EntityToOncalls");
const EntityToRawSchema_1 = require("./EntityToRawSchema");
const EntityToRelatedEntities_1 = require("./EntityToRelatedEntities");
const EntityToSchema_1 = require("./EntityToSchema");
const EntityV3API_1 = require("./EntityV3API");
const EntityV3APIDatadog_1 = require("./EntityV3APIDatadog");
const EntityV3APISpec_1 = require("./EntityV3APISpec");
const EntityV3APISpecInterfaceDefinition_1 = require("./EntityV3APISpecInterfaceDefinition");
const EntityV3APISpecInterfaceFileRef_1 = require("./EntityV3APISpecInterfaceFileRef");
const EntityV3DatadogCodeLocationItem_1 = require("./EntityV3DatadogCodeLocationItem");
const EntityV3DatadogEventItem_1 = require("./EntityV3DatadogEventItem");
const EntityV3DatadogIntegrationOpsgenie_1 = require("./EntityV3DatadogIntegrationOpsgenie");
const EntityV3DatadogIntegrationPagerduty_1 = require("./EntityV3DatadogIntegrationPagerduty");
const EntityV3DatadogLogItem_1 = require("./EntityV3DatadogLogItem");
const EntityV3DatadogPerformance_1 = require("./EntityV3DatadogPerformance");
const EntityV3DatadogPipelines_1 = require("./EntityV3DatadogPipelines");
const EntityV3Datastore_1 = require("./EntityV3Datastore");
const EntityV3DatastoreDatadog_1 = require("./EntityV3DatastoreDatadog");
const EntityV3DatastoreSpec_1 = require("./EntityV3DatastoreSpec");
const EntityV3Integrations_1 = require("./EntityV3Integrations");
const EntityV3Metadata_1 = require("./EntityV3Metadata");
const EntityV3MetadataAdditionalOwnersItems_1 = require("./EntityV3MetadataAdditionalOwnersItems");
const EntityV3MetadataContactsItems_1 = require("./EntityV3MetadataContactsItems");
const EntityV3MetadataLinksItems_1 = require("./EntityV3MetadataLinksItems");
const EntityV3Queue_1 = require("./EntityV3Queue");
const EntityV3QueueDatadog_1 = require("./EntityV3QueueDatadog");
const EntityV3QueueSpec_1 = require("./EntityV3QueueSpec");
const EntityV3Service_1 = require("./EntityV3Service");
const EntityV3ServiceDatadog_1 = require("./EntityV3ServiceDatadog");
const EntityV3ServiceSpec_1 = require("./EntityV3ServiceSpec");
const EntityV3System_1 = require("./EntityV3System");
const EntityV3SystemDatadog_1 = require("./EntityV3SystemDatadog");
const EntityV3SystemSpec_1 = require("./EntityV3SystemSpec");
const ErrorHandler_1 = require("./ErrorHandler");
const Escalation_1 = require("./Escalation");
const EscalationPolicy_1 = require("./EscalationPolicy");
const EscalationPolicyCreateRequest_1 = require("./EscalationPolicyCreateRequest");
const EscalationPolicyCreateRequestData_1 = require("./EscalationPolicyCreateRequestData");
const EscalationPolicyCreateRequestDataAttributes_1 = require("./EscalationPolicyCreateRequestDataAttributes");
const EscalationPolicyCreateRequestDataAttributesStepsItems_1 = require("./EscalationPolicyCreateRequestDataAttributesStepsItems");
const EscalationPolicyCreateRequestDataRelationships_1 = require("./EscalationPolicyCreateRequestDataRelationships");
const EscalationPolicyData_1 = require("./EscalationPolicyData");
const EscalationPolicyDataAttributes_1 = require("./EscalationPolicyDataAttributes");
const EscalationPolicyDataRelationships_1 = require("./EscalationPolicyDataRelationships");
const EscalationPolicyDataRelationshipsSteps_1 = require("./EscalationPolicyDataRelationshipsSteps");
const EscalationPolicyDataRelationshipsStepsDataItems_1 = require("./EscalationPolicyDataRelationshipsStepsDataItems");
const EscalationPolicyStep_1 = require("./EscalationPolicyStep");
const EscalationPolicyStepAttributes_1 = require("./EscalationPolicyStepAttributes");
const EscalationPolicyStepRelationships_1 = require("./EscalationPolicyStepRelationships");
const EscalationPolicyStepTarget_1 = require("./EscalationPolicyStepTarget");
const EscalationPolicyStepTargetConfig_1 = require("./EscalationPolicyStepTargetConfig");
const EscalationPolicyStepTargetConfigSchedule_1 = require("./EscalationPolicyStepTargetConfigSchedule");
const EscalationPolicyUpdateRequest_1 = require("./EscalationPolicyUpdateRequest");
const EscalationPolicyUpdateRequestData_1 = require("./EscalationPolicyUpdateRequestData");
const EscalationPolicyUpdateRequestDataAttributes_1 = require("./EscalationPolicyUpdateRequestDataAttributes");
const EscalationPolicyUpdateRequestDataAttributesStepsItems_1 = require("./EscalationPolicyUpdateRequestDataAttributesStepsItems");
const EscalationPolicyUpdateRequestDataRelationships_1 = require("./EscalationPolicyUpdateRequestDataRelationships");
const EscalationPolicyUser_1 = require("./EscalationPolicyUser");
const EscalationPolicyUserAttributes_1 = require("./EscalationPolicyUserAttributes");
const EscalationRelationships_1 = require("./EscalationRelationships");
const EscalationRelationshipsResponders_1 = require("./EscalationRelationshipsResponders");
const EscalationRelationshipsRespondersDataItems_1 = require("./EscalationRelationshipsRespondersDataItems");
const EscalationTargets_1 = require("./EscalationTargets");
const Estimation_1 = require("./Estimation");
const Event_1 = require("./Event");
const EventAttributes_1 = require("./EventAttributes");
const EventCreateRequest_1 = require("./EventCreateRequest");
const EventCreateRequestPayload_1 = require("./EventCreateRequestPayload");
const EventCreateResponse_1 = require("./EventCreateResponse");
const EventCreateResponseAttributes_1 = require("./EventCreateResponseAttributes");
const EventCreateResponseAttributesAttributes_1 = require("./EventCreateResponseAttributesAttributes");
const EventCreateResponseAttributesAttributesEvt_1 = require("./EventCreateResponseAttributesAttributesEvt");
const EventCreateResponsePayload_1 = require("./EventCreateResponsePayload");
const EventCreateResponsePayloadLinks_1 = require("./EventCreateResponsePayloadLinks");
const EventPayload_1 = require("./EventPayload");
const EventResponse_1 = require("./EventResponse");
const EventResponseAttributes_1 = require("./EventResponseAttributes");
const EventSystemAttributes_1 = require("./EventSystemAttributes");
const EventsCompute_1 = require("./EventsCompute");
const EventsGroupBy_1 = require("./EventsGroupBy");
const EventsGroupBySort_1 = require("./EventsGroupBySort");
const EventsListRequest_1 = require("./EventsListRequest");
const EventsListResponse_1 = require("./EventsListResponse");
const EventsListResponseLinks_1 = require("./EventsListResponseLinks");
const EventsQueryFilter_1 = require("./EventsQueryFilter");
const EventsQueryOptions_1 = require("./EventsQueryOptions");
const EventsRequestPage_1 = require("./EventsRequestPage");
const EventsResponseMetadata_1 = require("./EventsResponseMetadata");
const EventsResponseMetadataPage_1 = require("./EventsResponseMetadataPage");
const EventsScalarQuery_1 = require("./EventsScalarQuery");
const EventsSearch_1 = require("./EventsSearch");
const EventsTimeseriesQuery_1 = require("./EventsTimeseriesQuery");
const EventsWarning_1 = require("./EventsWarning");
const FacetInfoRequest_1 = require("./FacetInfoRequest");
const FacetInfoRequestData_1 = require("./FacetInfoRequestData");
const FacetInfoRequestDataAttributes_1 = require("./FacetInfoRequestDataAttributes");
const FacetInfoRequestDataAttributesSearch_1 = require("./FacetInfoRequestDataAttributesSearch");
const FacetInfoRequestDataAttributesTermSearch_1 = require("./FacetInfoRequestDataAttributesTermSearch");
const FacetInfoResponse_1 = require("./FacetInfoResponse");
const FacetInfoResponseData_1 = require("./FacetInfoResponseData");
const FacetInfoResponseDataAttributes_1 = require("./FacetInfoResponseDataAttributes");
const FacetInfoResponseDataAttributesResult_1 = require("./FacetInfoResponseDataAttributesResult");
const FacetInfoResponseDataAttributesResultRange_1 = require("./FacetInfoResponseDataAttributesResultRange");
const FacetInfoResponseDataAttributesResultValuesItems_1 = require("./FacetInfoResponseDataAttributesResultValuesItems");
const FastlyAPIKey_1 = require("./FastlyAPIKey");
const FastlyAPIKeyUpdate_1 = require("./FastlyAPIKeyUpdate");
const FastlyAccounResponseAttributes_1 = require("./FastlyAccounResponseAttributes");
const FastlyAccountCreateRequest_1 = require("./FastlyAccountCreateRequest");
const FastlyAccountCreateRequestAttributes_1 = require("./FastlyAccountCreateRequestAttributes");
const FastlyAccountCreateRequestData_1 = require("./FastlyAccountCreateRequestData");
const FastlyAccountResponse_1 = require("./FastlyAccountResponse");
const FastlyAccountResponseData_1 = require("./FastlyAccountResponseData");
const FastlyAccountUpdateRequest_1 = require("./FastlyAccountUpdateRequest");
const FastlyAccountUpdateRequestAttributes_1 = require("./FastlyAccountUpdateRequestAttributes");
const FastlyAccountUpdateRequestData_1 = require("./FastlyAccountUpdateRequestData");
const FastlyAccountsResponse_1 = require("./FastlyAccountsResponse");
const FastlyIntegration_1 = require("./FastlyIntegration");
const FastlyIntegrationUpdate_1 = require("./FastlyIntegrationUpdate");
const FastlyService_1 = require("./FastlyService");
const FastlyServiceAttributes_1 = require("./FastlyServiceAttributes");
const FastlyServiceData_1 = require("./FastlyServiceData");
const FastlyServiceRequest_1 = require("./FastlyServiceRequest");
const FastlyServiceResponse_1 = require("./FastlyServiceResponse");
const FastlyServicesResponse_1 = require("./FastlyServicesResponse");
const FiltersPerProduct_1 = require("./FiltersPerProduct");
const Finding_1 = require("./Finding");
const FindingAttributes_1 = require("./FindingAttributes");
const FindingCaseResponse_1 = require("./FindingCaseResponse");
const FindingCaseResponseArray_1 = require("./FindingCaseResponseArray");
const FindingCaseResponseData_1 = require("./FindingCaseResponseData");
const FindingCaseResponseDataAttributes_1 = require("./FindingCaseResponseDataAttributes");
const FindingCaseResponseDataRelationships_1 = require("./FindingCaseResponseDataRelationships");
const FindingData_1 = require("./FindingData");
const FindingJiraIssue_1 = require("./FindingJiraIssue");
const FindingJiraIssueResult_1 = require("./FindingJiraIssueResult");
const FindingMute_1 = require("./FindingMute");
const FindingRule_1 = require("./FindingRule");
const Findings_1 = require("./Findings");
const FlakyTest_1 = require("./FlakyTest");
const FlakyTestAttributes_1 = require("./FlakyTestAttributes");
const FlakyTestHistory_1 = require("./FlakyTestHistory");
const FlakyTestPipelineStats_1 = require("./FlakyTestPipelineStats");
const FlakyTestRunMetadata_1 = require("./FlakyTestRunMetadata");
const FlakyTestStats_1 = require("./FlakyTestStats");
const FlakyTestsPagination_1 = require("./FlakyTestsPagination");
const FlakyTestsSearchFilter_1 = require("./FlakyTestsSearchFilter");
const FlakyTestsSearchPageOptions_1 = require("./FlakyTestsSearchPageOptions");
const FlakyTestsSearchRequest_1 = require("./FlakyTestsSearchRequest");
const FlakyTestsSearchRequestAttributes_1 = require("./FlakyTestsSearchRequestAttributes");
const FlakyTestsSearchRequestData_1 = require("./FlakyTestsSearchRequestData");
const FlakyTestsSearchResponse_1 = require("./FlakyTestsSearchResponse");
const FlakyTestsSearchResponseMeta_1 = require("./FlakyTestsSearchResponseMeta");
const FleetAgentAttributes_1 = require("./FleetAgentAttributes");
const FleetAgentAttributesTagsItems_1 = require("./FleetAgentAttributesTagsItems");
const FleetAgentInfo_1 = require("./FleetAgentInfo");
const FleetAgentInfoAttributes_1 = require("./FleetAgentInfoAttributes");
const FleetAgentInfoDetails_1 = require("./FleetAgentInfoDetails");
const FleetAgentInfoResponse_1 = require("./FleetAgentInfoResponse");
const FleetAgentVersion_1 = require("./FleetAgentVersion");
const FleetAgentVersionAttributes_1 = require("./FleetAgentVersionAttributes");
const FleetAgentVersionsResponse_1 = require("./FleetAgentVersionsResponse");
const FleetAgentsResponse_1 = require("./FleetAgentsResponse");
const FleetAgentsResponseData_1 = require("./FleetAgentsResponseData");
const FleetAgentsResponseDataAttributes_1 = require("./FleetAgentsResponseDataAttributes");
const FleetAgentsResponseMeta_1 = require("./FleetAgentsResponseMeta");
const FleetConfigurationFile_1 = require("./FleetConfigurationFile");
const FleetConfigurationLayer_1 = require("./FleetConfigurationLayer");
const FleetDeployment_1 = require("./FleetDeployment");
const FleetDeploymentAttributes_1 = require("./FleetDeploymentAttributes");
const FleetDeploymentConfigureAttributes_1 = require("./FleetDeploymentConfigureAttributes");
const FleetDeploymentConfigureCreate_1 = require("./FleetDeploymentConfigureCreate");
const FleetDeploymentConfigureCreateRequest_1 = require("./FleetDeploymentConfigureCreateRequest");
const FleetDeploymentHost_1 = require("./FleetDeploymentHost");
const FleetDeploymentHostPackage_1 = require("./FleetDeploymentHostPackage");
const FleetDeploymentHostsPage_1 = require("./FleetDeploymentHostsPage");
const FleetDeploymentOperation_1 = require("./FleetDeploymentOperation");
const FleetDeploymentPackage_1 = require("./FleetDeploymentPackage");
const FleetDeploymentPackageUpgradeAttributes_1 = require("./FleetDeploymentPackageUpgradeAttributes");
const FleetDeploymentPackageUpgradeCreate_1 = require("./FleetDeploymentPackageUpgradeCreate");
const FleetDeploymentPackageUpgradeCreateRequest_1 = require("./FleetDeploymentPackageUpgradeCreateRequest");
const FleetDeploymentResponse_1 = require("./FleetDeploymentResponse");
const FleetDeploymentResponseMeta_1 = require("./FleetDeploymentResponseMeta");
const FleetDeploymentsPage_1 = require("./FleetDeploymentsPage");
const FleetDeploymentsResponse_1 = require("./FleetDeploymentsResponse");
const FleetDeploymentsResponseMeta_1 = require("./FleetDeploymentsResponseMeta");
const FleetDetectedIntegration_1 = require("./FleetDetectedIntegration");
const FleetIntegrationDetails_1 = require("./FleetIntegrationDetails");
const FleetIntegrationsByStatus_1 = require("./FleetIntegrationsByStatus");
const FleetSchedule_1 = require("./FleetSchedule");
const FleetScheduleAttributes_1 = require("./FleetScheduleAttributes");
const FleetScheduleCreate_1 = require("./FleetScheduleCreate");
const FleetScheduleCreateAttributes_1 = require("./FleetScheduleCreateAttributes");
const FleetScheduleCreateRequest_1 = require("./FleetScheduleCreateRequest");
const FleetSchedulePatch_1 = require("./FleetSchedulePatch");
const FleetSchedulePatchAttributes_1 = require("./FleetSchedulePatchAttributes");
const FleetSchedulePatchRequest_1 = require("./FleetSchedulePatchRequest");
const FleetScheduleRecurrenceRule_1 = require("./FleetScheduleRecurrenceRule");
const FleetScheduleResponse_1 = require("./FleetScheduleResponse");
const FleetSchedulesResponse_1 = require("./FleetSchedulesResponse");
const FormTrigger_1 = require("./FormTrigger");
const FormTriggerWrapper_1 = require("./FormTriggerWrapper");
const FormulaLimit_1 = require("./FormulaLimit");
const FrameworkHandleAndVersionResponseData_1 = require("./FrameworkHandleAndVersionResponseData");
const FreshserviceAPIKey_1 = require("./FreshserviceAPIKey");
const FreshserviceAPIKeyUpdate_1 = require("./FreshserviceAPIKeyUpdate");
const FreshserviceIntegration_1 = require("./FreshserviceIntegration");
const FreshserviceIntegrationUpdate_1 = require("./FreshserviceIntegrationUpdate");
const FullAPIKey_1 = require("./FullAPIKey");
const FullAPIKeyAttributes_1 = require("./FullAPIKeyAttributes");
const FullApplicationKey_1 = require("./FullApplicationKey");
const FullApplicationKeyAttributes_1 = require("./FullApplicationKeyAttributes");
const FullCustomFrameworkData_1 = require("./FullCustomFrameworkData");
const FullCustomFrameworkDataAttributes_1 = require("./FullCustomFrameworkDataAttributes");
const GCPIntegration_1 = require("./GCPIntegration");
const GCPIntegrationUpdate_1 = require("./GCPIntegrationUpdate");
const GCPMetricNamespaceConfig_1 = require("./GCPMetricNamespaceConfig");
const GCPMonitoredResourceConfig_1 = require("./GCPMonitoredResourceConfig");
const GCPSTSDelegateAccount_1 = require("./GCPSTSDelegateAccount");
const GCPSTSDelegateAccountAttributes_1 = require("./GCPSTSDelegateAccountAttributes");
const GCPSTSDelegateAccountResponse_1 = require("./GCPSTSDelegateAccountResponse");
const GCPSTSServiceAccount_1 = require("./GCPSTSServiceAccount");
const GCPSTSServiceAccountAttributes_1 = require("./GCPSTSServiceAccountAttributes");
const GCPSTSServiceAccountCreateRequest_1 = require("./GCPSTSServiceAccountCreateRequest");
const GCPSTSServiceAccountData_1 = require("./GCPSTSServiceAccountData");
const GCPSTSServiceAccountResponse_1 = require("./GCPSTSServiceAccountResponse");
const GCPSTSServiceAccountUpdateRequest_1 = require("./GCPSTSServiceAccountUpdateRequest");
const GCPSTSServiceAccountUpdateRequestData_1 = require("./GCPSTSServiceAccountUpdateRequestData");
const GCPSTSServiceAccountsResponse_1 = require("./GCPSTSServiceAccountsResponse");
const GCPServiceAccount_1 = require("./GCPServiceAccount");
const GCPServiceAccountMeta_1 = require("./GCPServiceAccountMeta");
const GCPServiceAccountUpdate_1 = require("./GCPServiceAccountUpdate");
const GCPUsageCostConfig_1 = require("./GCPUsageCostConfig");
const GCPUsageCostConfigAttributes_1 = require("./GCPUsageCostConfigAttributes");
const GCPUsageCostConfigPatchData_1 = require("./GCPUsageCostConfigPatchData");
const GCPUsageCostConfigPatchRequest_1 = require("./GCPUsageCostConfigPatchRequest");
const GCPUsageCostConfigPatchRequestAttributes_1 = require("./GCPUsageCostConfigPatchRequestAttributes");
const GCPUsageCostConfigPostData_1 = require("./GCPUsageCostConfigPostData");
const GCPUsageCostConfigPostRequest_1 = require("./GCPUsageCostConfigPostRequest");
const GCPUsageCostConfigPostRequestAttributes_1 = require("./GCPUsageCostConfigPostRequestAttributes");
const GCPUsageCostConfigResponse_1 = require("./GCPUsageCostConfigResponse");
const GCPUsageCostConfigsResponse_1 = require("./GCPUsageCostConfigsResponse");
const GcpScanOptions_1 = require("./GcpScanOptions");
const GcpScanOptionsArray_1 = require("./GcpScanOptionsArray");
const GcpScanOptionsData_1 = require("./GcpScanOptionsData");
const GcpScanOptionsDataAttributes_1 = require("./GcpScanOptionsDataAttributes");
const GcpScanOptionsInputUpdate_1 = require("./GcpScanOptionsInputUpdate");
const GcpScanOptionsInputUpdateData_1 = require("./GcpScanOptionsInputUpdateData");
const GcpScanOptionsInputUpdateDataAttributes_1 = require("./GcpScanOptionsInputUpdateDataAttributes");
const GcpUcConfigResponse_1 = require("./GcpUcConfigResponse");
const GcpUcConfigResponseData_1 = require("./GcpUcConfigResponseData");
const GcpUcConfigResponseDataAttributes_1 = require("./GcpUcConfigResponseDataAttributes");
const GeminiAPIKey_1 = require("./GeminiAPIKey");
const GeminiAPIKeyUpdate_1 = require("./GeminiAPIKeyUpdate");
const GeminiIntegration_1 = require("./GeminiIntegration");
const GeminiIntegrationUpdate_1 = require("./GeminiIntegrationUpdate");
const GetActionConnectionResponse_1 = require("./GetActionConnectionResponse");
const GetAppKeyRegistrationResponse_1 = require("./GetAppKeyRegistrationResponse");
const GetAppResponse_1 = require("./GetAppResponse");
const GetAppResponseData_1 = require("./GetAppResponseData");
const GetAppResponseDataAttributes_1 = require("./GetAppResponseDataAttributes");
const GetCustomFrameworkResponse_1 = require("./GetCustomFrameworkResponse");
const GetDataDeletionsResponseBody_1 = require("./GetDataDeletionsResponseBody");
const GetDeviceAttributes_1 = require("./GetDeviceAttributes");
const GetDeviceData_1 = require("./GetDeviceData");
const GetDeviceResponse_1 = require("./GetDeviceResponse");
const GetFindingResponse_1 = require("./GetFindingResponse");
const GetInterfacesData_1 = require("./GetInterfacesData");
const GetInterfacesResponse_1 = require("./GetInterfacesResponse");
const GetMappingResponse_1 = require("./GetMappingResponse");
const GetMappingResponseData_1 = require("./GetMappingResponseData");
const GetMappingResponseDataAttributes_1 = require("./GetMappingResponseDataAttributes");
const GetMappingResponseDataAttributesAttributesItems_1 = require("./GetMappingResponseDataAttributesAttributesItems");
const GetMultipleRulesetsRequest_1 = require("./GetMultipleRulesetsRequest");
const GetMultipleRulesetsRequestData_1 = require("./GetMultipleRulesetsRequestData");
const GetMultipleRulesetsRequestDataAttributes_1 = require("./GetMultipleRulesetsRequestDataAttributes");
const GetMultipleRulesetsResponse_1 = require("./GetMultipleRulesetsResponse");
const GetMultipleRulesetsResponseData_1 = require("./GetMultipleRulesetsResponseData");
const GetMultipleRulesetsResponseDataAttributes_1 = require("./GetMultipleRulesetsResponseDataAttributes");
const GetMultipleRulesetsResponseDataAttributesRulesetsItems_1 = require("./GetMultipleRulesetsResponseDataAttributesRulesetsItems");
const GetMultipleRulesetsResponseDataAttributesRulesetsItemsData_1 = require("./GetMultipleRulesetsResponseDataAttributesRulesetsItemsData");
const GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems_1 = require("./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems");
const GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems_1 = require("./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems");
const GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData_1 = require("./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData");
const GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems_1 = require("./GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems");
const GetResourceEvaluationFiltersResponse_1 = require("./GetResourceEvaluationFiltersResponse");
const GetResourceEvaluationFiltersResponseData_1 = require("./GetResourceEvaluationFiltersResponseData");
const GetRuleVersionHistoryData_1 = require("./GetRuleVersionHistoryData");
const GetRuleVersionHistoryResponse_1 = require("./GetRuleVersionHistoryResponse");
const GetSBOMResponse_1 = require("./GetSBOMResponse");
const GetSuppressionVersionHistoryData_1 = require("./GetSuppressionVersionHistoryData");
const GetSuppressionVersionHistoryResponse_1 = require("./GetSuppressionVersionHistoryResponse");
const GetWorkflowResponse_1 = require("./GetWorkflowResponse");
const GithubWebhookTrigger_1 = require("./GithubWebhookTrigger");
const GithubWebhookTriggerWrapper_1 = require("./GithubWebhookTriggerWrapper");
const GitlabAPIKey_1 = require("./GitlabAPIKey");
const GitlabAPIKeyUpdate_1 = require("./GitlabAPIKeyUpdate");
const GitlabIntegration_1 = require("./GitlabIntegration");
const GitlabIntegrationUpdate_1 = require("./GitlabIntegrationUpdate");
const GlobalIncidentSettingsAttributesRequest_1 = require("./GlobalIncidentSettingsAttributesRequest");
const GlobalIncidentSettingsAttributesResponse_1 = require("./GlobalIncidentSettingsAttributesResponse");
const GlobalIncidentSettingsDataRequest_1 = require("./GlobalIncidentSettingsDataRequest");
const GlobalIncidentSettingsDataResponse_1 = require("./GlobalIncidentSettingsDataResponse");
const GlobalIncidentSettingsRequest_1 = require("./GlobalIncidentSettingsRequest");
const GlobalIncidentSettingsResponse_1 = require("./GlobalIncidentSettingsResponse");
const GlobalVariableData_1 = require("./GlobalVariableData");
const GlobalVariableJsonPatchRequest_1 = require("./GlobalVariableJsonPatchRequest");
const GlobalVariableJsonPatchRequestData_1 = require("./GlobalVariableJsonPatchRequestData");
const GlobalVariableJsonPatchRequestDataAttributes_1 = require("./GlobalVariableJsonPatchRequestDataAttributes");
const GlobalVariableResponse_1 = require("./GlobalVariableResponse");
const GoogleChatAppNamedSpaceResponse_1 = require("./GoogleChatAppNamedSpaceResponse");
const GoogleChatAppNamedSpaceResponseAttributes_1 = require("./GoogleChatAppNamedSpaceResponseAttributes");
const GoogleChatAppNamedSpaceResponseData_1 = require("./GoogleChatAppNamedSpaceResponseData");
const GoogleChatCreateOrganizationHandleRequest_1 = require("./GoogleChatCreateOrganizationHandleRequest");
const GoogleChatCreateOrganizationHandleRequestAttributes_1 = require("./GoogleChatCreateOrganizationHandleRequestAttributes");
const GoogleChatCreateOrganizationHandleRequestData_1 = require("./GoogleChatCreateOrganizationHandleRequestData");
const GoogleChatOrganizationHandleResponse_1 = require("./GoogleChatOrganizationHandleResponse");
const GoogleChatOrganizationHandleResponseAttributes_1 = require("./GoogleChatOrganizationHandleResponseAttributes");
const GoogleChatOrganizationHandleResponseData_1 = require("./GoogleChatOrganizationHandleResponseData");
const GoogleChatOrganizationHandlesResponse_1 = require("./GoogleChatOrganizationHandlesResponse");
const GoogleChatUpdateOrganizationHandleRequest_1 = require("./GoogleChatUpdateOrganizationHandleRequest");
const GoogleChatUpdateOrganizationHandleRequestAttributes_1 = require("./GoogleChatUpdateOrganizationHandleRequestAttributes");
const GoogleChatUpdateOrganizationHandleRequestData_1 = require("./GoogleChatUpdateOrganizationHandleRequestData");
const GoogleMeetConfigurationReference_1 = require("./GoogleMeetConfigurationReference");
const GoogleMeetConfigurationReferenceData_1 = require("./GoogleMeetConfigurationReferenceData");
const GreyNoiseAPIKey_1 = require("./GreyNoiseAPIKey");
const GreyNoiseAPIKeyUpdate_1 = require("./GreyNoiseAPIKeyUpdate");
const GreyNoiseIntegration_1 = require("./GreyNoiseIntegration");
const GreyNoiseIntegrationUpdate_1 = require("./GreyNoiseIntegrationUpdate");
const GroupScalarColumn_1 = require("./GroupScalarColumn");
const HTTPBody_1 = require("./HTTPBody");
const HTTPCDGatesBadRequestResponse_1 = require("./HTTPCDGatesBadRequestResponse");
const HTTPCDGatesNotFoundResponse_1 = require("./HTTPCDGatesNotFoundResponse");
const HTTPCDRulesNotFoundResponse_1 = require("./HTTPCDRulesNotFoundResponse");
const HTTPCIAppError_1 = require("./HTTPCIAppError");
const HTTPCIAppErrors_1 = require("./HTTPCIAppErrors");
const HTTPHeader_1 = require("./HTTPHeader");
const HTTPHeaderUpdate_1 = require("./HTTPHeaderUpdate");
const HTTPIntegration_1 = require("./HTTPIntegration");
const HTTPIntegrationUpdate_1 = require("./HTTPIntegrationUpdate");
const HTTPLogError_1 = require("./HTTPLogError");
const HTTPLogErrors_1 = require("./HTTPLogErrors");
const HTTPLogItem_1 = require("./HTTPLogItem");
const HTTPToken_1 = require("./HTTPToken");
const HTTPTokenAuth_1 = require("./HTTPTokenAuth");
const HTTPTokenAuthUpdate_1 = require("./HTTPTokenAuthUpdate");
const HTTPTokenUpdate_1 = require("./HTTPTokenUpdate");
const HamrOrgConnectionAttributesRequest_1 = require("./HamrOrgConnectionAttributesRequest");
const HamrOrgConnectionAttributesResponse_1 = require("./HamrOrgConnectionAttributesResponse");
const HamrOrgConnectionDataRequest_1 = require("./HamrOrgConnectionDataRequest");
const HamrOrgConnectionDataResponse_1 = require("./HamrOrgConnectionDataResponse");
const HamrOrgConnectionRequest_1 = require("./HamrOrgConnectionRequest");
const HamrOrgConnectionResponse_1 = require("./HamrOrgConnectionResponse");
const HourlyUsage_1 = require("./HourlyUsage");
const HourlyUsageAttributes_1 = require("./HourlyUsageAttributes");
const HourlyUsageMeasurement_1 = require("./HourlyUsageMeasurement");
const HourlyUsageMetadata_1 = require("./HourlyUsageMetadata");
const HourlyUsagePagination_1 = require("./HourlyUsagePagination");
const HourlyUsageResponse_1 = require("./HourlyUsageResponse");
const IPAllowlistAttributes_1 = require("./IPAllowlistAttributes");
const IPAllowlistData_1 = require("./IPAllowlistData");
const IPAllowlistEntry_1 = require("./IPAllowlistEntry");
const IPAllowlistEntryAttributes_1 = require("./IPAllowlistEntryAttributes");
const IPAllowlistEntryData_1 = require("./IPAllowlistEntryData");
const IPAllowlistResponse_1 = require("./IPAllowlistResponse");
const IPAllowlistUpdateRequest_1 = require("./IPAllowlistUpdateRequest");
const IncidentCreateAttributes_1 = require("./IncidentCreateAttributes");
const IncidentCreateData_1 = require("./IncidentCreateData");
const IncidentCreateRelationships_1 = require("./IncidentCreateRelationships");
const IncidentCreateRequest_1 = require("./IncidentCreateRequest");
const IncidentFieldAttributesMultipleValue_1 = require("./IncidentFieldAttributesMultipleValue");
const IncidentFieldAttributesSingleValue_1 = require("./IncidentFieldAttributesSingleValue");
const IncidentHandleAttributesFields_1 = require("./IncidentHandleAttributesFields");
const IncidentHandleAttributesRequest_1 = require("./IncidentHandleAttributesRequest");
const IncidentHandleAttributesResponse_1 = require("./IncidentHandleAttributesResponse");
const IncidentHandleDataRequest_1 = require("./IncidentHandleDataRequest");
const IncidentHandleDataResponse_1 = require("./IncidentHandleDataResponse");
const IncidentHandleRelationship_1 = require("./IncidentHandleRelationship");
const IncidentHandleRelationshipData_1 = require("./IncidentHandleRelationshipData");
const IncidentHandleRelationships_1 = require("./IncidentHandleRelationships");
const IncidentHandleRelationshipsRequest_1 = require("./IncidentHandleRelationshipsRequest");
const IncidentHandleRequest_1 = require("./IncidentHandleRequest");
const IncidentHandleResponse_1 = require("./IncidentHandleResponse");
const IncidentHandlesResponse_1 = require("./IncidentHandlesResponse");
const IncidentImpactAttributes_1 = require("./IncidentImpactAttributes");
const IncidentImpactCreateAttributes_1 = require("./IncidentImpactCreateAttributes");
const IncidentImpactCreateData_1 = require("./IncidentImpactCreateData");
const IncidentImpactCreateRequest_1 = require("./IncidentImpactCreateRequest");
const IncidentImpactRelationships_1 = require("./IncidentImpactRelationships");
const IncidentImpactResponse_1 = require("./IncidentImpactResponse");
const IncidentImpactResponseData_1 = require("./IncidentImpactResponseData");
const IncidentImpactsResponse_1 = require("./IncidentImpactsResponse");
const IncidentImportFieldAttributesMultipleValue_1 = require("./IncidentImportFieldAttributesMultipleValue");
const IncidentImportFieldAttributesSingleValue_1 = require("./IncidentImportFieldAttributesSingleValue");
const IncidentImportRelationships_1 = require("./IncidentImportRelationships");
const IncidentImportRequest_1 = require("./IncidentImportRequest");
const IncidentImportRequestAttributes_1 = require("./IncidentImportRequestAttributes");
const IncidentImportRequestData_1 = require("./IncidentImportRequestData");
const IncidentImportResponse_1 = require("./IncidentImportResponse");
const IncidentImportResponseAttributes_1 = require("./IncidentImportResponseAttributes");
const IncidentImportResponseData_1 = require("./IncidentImportResponseData");
const IncidentImportResponseRelationships_1 = require("./IncidentImportResponseRelationships");
const IncidentIntegrationMetadataAttributes_1 = require("./IncidentIntegrationMetadataAttributes");
const IncidentIntegrationMetadataCreateData_1 = require("./IncidentIntegrationMetadataCreateData");
const IncidentIntegrationMetadataCreateRequest_1 = require("./IncidentIntegrationMetadataCreateRequest");
const IncidentIntegrationMetadataListResponse_1 = require("./IncidentIntegrationMetadataListResponse");
const IncidentIntegrationMetadataPatchData_1 = require("./IncidentIntegrationMetadataPatchData");
const IncidentIntegrationMetadataPatchRequest_1 = require("./IncidentIntegrationMetadataPatchRequest");
const IncidentIntegrationMetadataResponse_1 = require("./IncidentIntegrationMetadataResponse");
const IncidentIntegrationMetadataResponseData_1 = require("./IncidentIntegrationMetadataResponseData");
const IncidentIntegrationRelationships_1 = require("./IncidentIntegrationRelationships");
const IncidentNonDatadogCreator_1 = require("./IncidentNonDatadogCreator");
const IncidentNotificationHandle_1 = require("./IncidentNotificationHandle");
const IncidentNotificationRule_1 = require("./IncidentNotificationRule");
const IncidentNotificationRuleArray_1 = require("./IncidentNotificationRuleArray");
const IncidentNotificationRuleArrayMeta_1 = require("./IncidentNotificationRuleArrayMeta");
const IncidentNotificationRuleArrayMetaPage_1 = require("./IncidentNotificationRuleArrayMetaPage");
const IncidentNotificationRuleAttributes_1 = require("./IncidentNotificationRuleAttributes");
const IncidentNotificationRuleConditionsItems_1 = require("./IncidentNotificationRuleConditionsItems");
const IncidentNotificationRuleCreateAttributes_1 = require("./IncidentNotificationRuleCreateAttributes");
const IncidentNotificationRuleCreateData_1 = require("./IncidentNotificationRuleCreateData");
const IncidentNotificationRuleCreateDataRelationships_1 = require("./IncidentNotificationRuleCreateDataRelationships");
const IncidentNotificationRuleRelationships_1 = require("./IncidentNotificationRuleRelationships");
const IncidentNotificationRuleResponseData_1 = require("./IncidentNotificationRuleResponseData");
const IncidentNotificationRuleUpdateData_1 = require("./IncidentNotificationRuleUpdateData");
const IncidentNotificationTemplate_1 = require("./IncidentNotificationTemplate");
const IncidentNotificationTemplateArray_1 = require("./IncidentNotificationTemplateArray");
const IncidentNotificationTemplateArrayMeta_1 = require("./IncidentNotificationTemplateArrayMeta");
const IncidentNotificationTemplateArrayMetaPage_1 = require("./IncidentNotificationTemplateArrayMetaPage");
const IncidentNotificationTemplateAttributes_1 = require("./IncidentNotificationTemplateAttributes");
const IncidentNotificationTemplateCreateAttributes_1 = require("./IncidentNotificationTemplateCreateAttributes");
const IncidentNotificationTemplateCreateData_1 = require("./IncidentNotificationTemplateCreateData");
const IncidentNotificationTemplateCreateDataRelationships_1 = require("./IncidentNotificationTemplateCreateDataRelationships");
const IncidentNotificationTemplateObject_1 = require("./IncidentNotificationTemplateObject");
const IncidentNotificationTemplateRelationships_1 = require("./IncidentNotificationTemplateRelationships");
const IncidentNotificationTemplateResponseData_1 = require("./IncidentNotificationTemplateResponseData");
const IncidentNotificationTemplateUpdateAttributes_1 = require("./IncidentNotificationTemplateUpdateAttributes");
const IncidentNotificationTemplateUpdateData_1 = require("./IncidentNotificationTemplateUpdateData");
const IncidentRelationshipData_1 = require("./IncidentRelationshipData");
const IncidentResponse_1 = require("./IncidentResponse");
const IncidentResponseAttributes_1 = require("./IncidentResponseAttributes");
const IncidentResponseData_1 = require("./IncidentResponseData");
const IncidentResponseMeta_1 = require("./IncidentResponseMeta");
const IncidentResponseMetaPagination_1 = require("./IncidentResponseMetaPagination");
const IncidentResponseRelationships_1 = require("./IncidentResponseRelationships");
const IncidentSearchResponse_1 = require("./IncidentSearchResponse");
const IncidentSearchResponseAttributes_1 = require("./IncidentSearchResponseAttributes");
const IncidentSearchResponseData_1 = require("./IncidentSearchResponseData");
const IncidentSearchResponseFacetsData_1 = require("./IncidentSearchResponseFacetsData");
const IncidentSearchResponseFieldFacetData_1 = require("./IncidentSearchResponseFieldFacetData");
const IncidentSearchResponseIncidentsData_1 = require("./IncidentSearchResponseIncidentsData");
const IncidentSearchResponseMeta_1 = require("./IncidentSearchResponseMeta");
const IncidentSearchResponseNumericFacetData_1 = require("./IncidentSearchResponseNumericFacetData");
const IncidentSearchResponseNumericFacetDataAggregates_1 = require("./IncidentSearchResponseNumericFacetDataAggregates");
const IncidentSearchResponsePropertyFieldFacetData_1 = require("./IncidentSearchResponsePropertyFieldFacetData");
const IncidentSearchResponseUserFacetData_1 = require("./IncidentSearchResponseUserFacetData");
const IncidentServiceCreateAttributes_1 = require("./IncidentServiceCreateAttributes");
const IncidentServiceCreateData_1 = require("./IncidentServiceCreateData");
const IncidentServiceCreateRequest_1 = require("./IncidentServiceCreateRequest");
const IncidentServiceRelationships_1 = require("./IncidentServiceRelationships");
const IncidentServiceResponse_1 = require("./IncidentServiceResponse");
const IncidentServiceResponseAttributes_1 = require("./IncidentServiceResponseAttributes");
const IncidentServiceResponseData_1 = require("./IncidentServiceResponseData");
const IncidentServiceUpdateAttributes_1 = require("./IncidentServiceUpdateAttributes");
const IncidentServiceUpdateData_1 = require("./IncidentServiceUpdateData");
const IncidentServiceUpdateRequest_1 = require("./IncidentServiceUpdateRequest");
const IncidentServicesResponse_1 = require("./IncidentServicesResponse");
const IncidentTeamCreateAttributes_1 = require("./IncidentTeamCreateAttributes");
const IncidentTeamCreateData_1 = require("./IncidentTeamCreateData");
const IncidentTeamCreateRequest_1 = require("./IncidentTeamCreateRequest");
const IncidentTeamRelationships_1 = require("./IncidentTeamRelationships");
const IncidentTeamResponse_1 = require("./IncidentTeamResponse");
const IncidentTeamResponseAttributes_1 = require("./IncidentTeamResponseAttributes");
const IncidentTeamResponseData_1 = require("./IncidentTeamResponseData");
const IncidentTeamUpdateAttributes_1 = require("./IncidentTeamUpdateAttributes");
const IncidentTeamUpdateData_1 = require("./IncidentTeamUpdateData");
const IncidentTeamUpdateRequest_1 = require("./IncidentTeamUpdateRequest");
const IncidentTeamsResponse_1 = require("./IncidentTeamsResponse");
const IncidentTimelineCellMarkdownCreateAttributes_1 = require("./IncidentTimelineCellMarkdownCreateAttributes");
const IncidentTimelineCellMarkdownCreateAttributesContent_1 = require("./IncidentTimelineCellMarkdownCreateAttributesContent");
const IncidentTodoAnonymousAssignee_1 = require("./IncidentTodoAnonymousAssignee");
const IncidentTodoAttributes_1 = require("./IncidentTodoAttributes");
const IncidentTodoCreateData_1 = require("./IncidentTodoCreateData");
const IncidentTodoCreateRequest_1 = require("./IncidentTodoCreateRequest");
const IncidentTodoListResponse_1 = require("./IncidentTodoListResponse");
const IncidentTodoPatchData_1 = require("./IncidentTodoPatchData");
const IncidentTodoPatchRequest_1 = require("./IncidentTodoPatchRequest");
const IncidentTodoRelationships_1 = require("./IncidentTodoRelationships");
const IncidentTodoResponse_1 = require("./IncidentTodoResponse");
const IncidentTodoResponseData_1 = require("./IncidentTodoResponseData");
const IncidentTrigger_1 = require("./IncidentTrigger");
const IncidentTriggerWrapper_1 = require("./IncidentTriggerWrapper");
const IncidentTypeAttributes_1 = require("./IncidentTypeAttributes");
const IncidentTypeCreateData_1 = require("./IncidentTypeCreateData");
const IncidentTypeCreateRequest_1 = require("./IncidentTypeCreateRequest");
const IncidentTypeListResponse_1 = require("./IncidentTypeListResponse");
const IncidentTypeObject_1 = require("./IncidentTypeObject");
const IncidentTypePatchData_1 = require("./IncidentTypePatchData");
const IncidentTypePatchRequest_1 = require("./IncidentTypePatchRequest");
const IncidentTypeRelationships_1 = require("./IncidentTypeRelationships");
const IncidentTypeResponse_1 = require("./IncidentTypeResponse");
const IncidentTypeUpdateAttributes_1 = require("./IncidentTypeUpdateAttributes");
const IncidentUpdateAttributes_1 = require("./IncidentUpdateAttributes");
const IncidentUpdateData_1 = require("./IncidentUpdateData");
const IncidentUpdateRelationships_1 = require("./IncidentUpdateRelationships");
const IncidentUpdateRequest_1 = require("./IncidentUpdateRequest");
const IncidentUserAttributes_1 = require("./IncidentUserAttributes");
const IncidentUserData_1 = require("./IncidentUserData");
const IncidentsResponse_1 = require("./IncidentsResponse");
const InputSchema_1 = require("./InputSchema");
const InputSchemaParameters_1 = require("./InputSchemaParameters");
const IntakePayloadAccepted_1 = require("./IntakePayloadAccepted");
const Integration_1 = require("./Integration");
const IntegrationAttributes_1 = require("./IntegrationAttributes");
const IntegrationIncident_1 = require("./IntegrationIncident");
const IntegrationIncidentFieldMappingsItems_1 = require("./IntegrationIncidentFieldMappingsItems");
const IntegrationIncidentSeverityConfig_1 = require("./IntegrationIncidentSeverityConfig");
const IntegrationJira_1 = require("./IntegrationJira");
const IntegrationJiraAutoCreation_1 = require("./IntegrationJiraAutoCreation");
const IntegrationJiraMetadata_1 = require("./IntegrationJiraMetadata");
const IntegrationJiraSync_1 = require("./IntegrationJiraSync");
const IntegrationJiraSyncDueDate_1 = require("./IntegrationJiraSyncDueDate");
const IntegrationJiraSyncProperties_1 = require("./IntegrationJiraSyncProperties");
const IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties_1 = require("./IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties");
const IntegrationLinks_1 = require("./IntegrationLinks");
const IntegrationMonitor_1 = require("./IntegrationMonitor");
const IntegrationOnCall_1 = require("./IntegrationOnCall");
const IntegrationOnCallEscalationQueriesItems_1 = require("./IntegrationOnCallEscalationQueriesItems");
const IntegrationOnCallEscalationQueriesItemsTarget_1 = require("./IntegrationOnCallEscalationQueriesItemsTarget");
const IntegrationServiceNow_1 = require("./IntegrationServiceNow");
const IntegrationServiceNowAutoCreation_1 = require("./IntegrationServiceNowAutoCreation");
const IntegrationServiceNowSyncConfig_1 = require("./IntegrationServiceNowSyncConfig");
const IntegrationServiceNowSyncConfig139772721534496_1 = require("./IntegrationServiceNowSyncConfig139772721534496");
const IntegrationServiceNowSyncConfigPriority_1 = require("./IntegrationServiceNowSyncConfigPriority");
const InterfaceAttributes_1 = require("./InterfaceAttributes");
const Issue_1 = require("./Issue");
const IssueAssigneeRelationship_1 = require("./IssueAssigneeRelationship");
const IssueAttributes_1 = require("./IssueAttributes");
const IssueCase_1 = require("./IssueCase");
const IssueCaseAttributes_1 = require("./IssueCaseAttributes");
const IssueCaseInsight_1 = require("./IssueCaseInsight");
const IssueCaseJiraIssue_1 = require("./IssueCaseJiraIssue");
const IssueCaseJiraIssueResult_1 = require("./IssueCaseJiraIssueResult");
const IssueCaseReference_1 = require("./IssueCaseReference");
const IssueCaseRelationship_1 = require("./IssueCaseRelationship");
const IssueCaseRelationships_1 = require("./IssueCaseRelationships");
const IssueReference_1 = require("./IssueReference");
const IssueRelationships_1 = require("./IssueRelationships");
const IssueResponse_1 = require("./IssueResponse");
const IssueTeam_1 = require("./IssueTeam");
const IssueTeamAttributes_1 = require("./IssueTeamAttributes");
const IssueTeamOwnersRelationship_1 = require("./IssueTeamOwnersRelationship");
const IssueTeamReference_1 = require("./IssueTeamReference");
const IssueUpdateAssigneeRequest_1 = require("./IssueUpdateAssigneeRequest");
const IssueUpdateAssigneeRequestData_1 = require("./IssueUpdateAssigneeRequestData");
const IssueUpdateStateRequest_1 = require("./IssueUpdateStateRequest");
const IssueUpdateStateRequestData_1 = require("./IssueUpdateStateRequestData");
const IssueUpdateStateRequestDataAttributes_1 = require("./IssueUpdateStateRequestDataAttributes");
const IssueUser_1 = require("./IssueUser");
const IssueUserAttributes_1 = require("./IssueUserAttributes");
const IssueUserReference_1 = require("./IssueUserReference");
const IssuesSearchRequest_1 = require("./IssuesSearchRequest");
const IssuesSearchRequestData_1 = require("./IssuesSearchRequestData");
const IssuesSearchRequestDataAttributes_1 = require("./IssuesSearchRequestDataAttributes");
const IssuesSearchResponse_1 = require("./IssuesSearchResponse");
const IssuesSearchResult_1 = require("./IssuesSearchResult");
const IssuesSearchResultAttributes_1 = require("./IssuesSearchResultAttributes");
const IssuesSearchResultIssueRelationship_1 = require("./IssuesSearchResultIssueRelationship");
const IssuesSearchResultRelationships_1 = require("./IssuesSearchResultRelationships");
const ItemApiPayload_1 = require("./ItemApiPayload");
const ItemApiPayloadArray_1 = require("./ItemApiPayloadArray");
const ItemApiPayloadData_1 = require("./ItemApiPayloadData");
const ItemApiPayloadDataAttributes_1 = require("./ItemApiPayloadDataAttributes");
const ItemApiPayloadMeta_1 = require("./ItemApiPayloadMeta");
const ItemApiPayloadMetaPage_1 = require("./ItemApiPayloadMetaPage");
const ItemApiPayloadMetaSchema_1 = require("./ItemApiPayloadMetaSchema");
const ItemApiPayloadMetaSchemaField_1 = require("./ItemApiPayloadMetaSchemaField");
const JSONAPIErrorItem_1 = require("./JSONAPIErrorItem");
const JSONAPIErrorItemSource_1 = require("./JSONAPIErrorItemSource");
const JSONAPIErrorResponse_1 = require("./JSONAPIErrorResponse");
const JiraAccountAttributes_1 = require("./JiraAccountAttributes");
const JiraAccountData_1 = require("./JiraAccountData");
const JiraAccountRelationship_1 = require("./JiraAccountRelationship");
const JiraAccountsMeta_1 = require("./JiraAccountsMeta");
const JiraAccountsResponse_1 = require("./JiraAccountsResponse");
const JiraIntegrationMetadata_1 = require("./JiraIntegrationMetadata");
const JiraIntegrationMetadataIssuesItem_1 = require("./JiraIntegrationMetadataIssuesItem");
const JiraIssue_1 = require("./JiraIssue");
const JiraIssueCreateAttributes_1 = require("./JiraIssueCreateAttributes");
const JiraIssueCreateData_1 = require("./JiraIssueCreateData");
const JiraIssueCreateRequest_1 = require("./JiraIssueCreateRequest");
const JiraIssueLinkAttributes_1 = require("./JiraIssueLinkAttributes");
const JiraIssueLinkData_1 = require("./JiraIssueLinkData");
const JiraIssueLinkRequest_1 = require("./JiraIssueLinkRequest");
const JiraIssueResult_1 = require("./JiraIssueResult");
const JiraIssueTemplateCreateRequest_1 = require("./JiraIssueTemplateCreateRequest");
const JiraIssueTemplateCreateRequestAttributes_1 = require("./JiraIssueTemplateCreateRequestAttributes");
const JiraIssueTemplateCreateRequestAttributesJiraAccount_1 = require("./JiraIssueTemplateCreateRequestAttributesJiraAccount");
const JiraIssueTemplateCreateRequestData_1 = require("./JiraIssueTemplateCreateRequestData");
const JiraIssueTemplateData_1 = require("./JiraIssueTemplateData");
const JiraIssueTemplateDataAttributes_1 = require("./JiraIssueTemplateDataAttributes");
const JiraIssueTemplateDataRelationships_1 = require("./JiraIssueTemplateDataRelationships");
const JiraIssueTemplateResponse_1 = require("./JiraIssueTemplateResponse");
const JiraIssueTemplateUpdateRequest_1 = require("./JiraIssueTemplateUpdateRequest");
const JiraIssueTemplateUpdateRequestAttributes_1 = require("./JiraIssueTemplateUpdateRequestAttributes");
const JiraIssueTemplateUpdateRequestData_1 = require("./JiraIssueTemplateUpdateRequestData");
const JiraIssueTemplatesResponse_1 = require("./JiraIssueTemplatesResponse");
const JobCreateResponse_1 = require("./JobCreateResponse");
const JobCreateResponseData_1 = require("./JobCreateResponseData");
const JobDefinition_1 = require("./JobDefinition");
const JobDefinitionFromRule_1 = require("./JobDefinitionFromRule");
const JsonPatchOperation_1 = require("./JsonPatchOperation");
const KindAttributes_1 = require("./KindAttributes");
const KindData_1 = require("./KindData");
const KindMetadata_1 = require("./KindMetadata");
const KindObj_1 = require("./KindObj");
const KindResponseMeta_1 = require("./KindResponseMeta");
const LLMObsCursorMeta_1 = require("./LLMObsCursorMeta");
const LLMObsDatasetDataAttributesRequest_1 = require("./LLMObsDatasetDataAttributesRequest");
const LLMObsDatasetDataAttributesResponse_1 = require("./LLMObsDatasetDataAttributesResponse");
const LLMObsDatasetDataRequest_1 = require("./LLMObsDatasetDataRequest");
const LLMObsDatasetDataResponse_1 = require("./LLMObsDatasetDataResponse");
const LLMObsDatasetRecordDataResponse_1 = require("./LLMObsDatasetRecordDataResponse");
const LLMObsDatasetRecordItem_1 = require("./LLMObsDatasetRecordItem");
const LLMObsDatasetRecordUpdateItem_1 = require("./LLMObsDatasetRecordUpdateItem");
const LLMObsDatasetRecordsDataAttributesRequest_1 = require("./LLMObsDatasetRecordsDataAttributesRequest");
const LLMObsDatasetRecordsDataRequest_1 = require("./LLMObsDatasetRecordsDataRequest");
const LLMObsDatasetRecordsListResponse_1 = require("./LLMObsDatasetRecordsListResponse");
const LLMObsDatasetRecordsMutationData_1 = require("./LLMObsDatasetRecordsMutationData");
const LLMObsDatasetRecordsMutationResponse_1 = require("./LLMObsDatasetRecordsMutationResponse");
const LLMObsDatasetRecordsRequest_1 = require("./LLMObsDatasetRecordsRequest");
const LLMObsDatasetRecordsUpdateDataAttributesRequest_1 = require("./LLMObsDatasetRecordsUpdateDataAttributesRequest");
const LLMObsDatasetRecordsUpdateDataRequest_1 = require("./LLMObsDatasetRecordsUpdateDataRequest");
const LLMObsDatasetRecordsUpdateRequest_1 = require("./LLMObsDatasetRecordsUpdateRequest");
const LLMObsDatasetRequest_1 = require("./LLMObsDatasetRequest");
const LLMObsDatasetResponse_1 = require("./LLMObsDatasetResponse");
const LLMObsDatasetUpdateDataAttributesRequest_1 = require("./LLMObsDatasetUpdateDataAttributesRequest");
const LLMObsDatasetUpdateDataRequest_1 = require("./LLMObsDatasetUpdateDataRequest");
const LLMObsDatasetUpdateRequest_1 = require("./LLMObsDatasetUpdateRequest");
const LLMObsDatasetsResponse_1 = require("./LLMObsDatasetsResponse");
const LLMObsDeleteDatasetRecordsDataAttributesRequest_1 = require("./LLMObsDeleteDatasetRecordsDataAttributesRequest");
const LLMObsDeleteDatasetRecordsDataRequest_1 = require("./LLMObsDeleteDatasetRecordsDataRequest");
const LLMObsDeleteDatasetRecordsRequest_1 = require("./LLMObsDeleteDatasetRecordsRequest");
const LLMObsDeleteDatasetsDataAttributesRequest_1 = require("./LLMObsDeleteDatasetsDataAttributesRequest");
const LLMObsDeleteDatasetsDataRequest_1 = require("./LLMObsDeleteDatasetsDataRequest");
const LLMObsDeleteDatasetsRequest_1 = require("./LLMObsDeleteDatasetsRequest");
const LLMObsDeleteExperimentsDataAttributesRequest_1 = require("./LLMObsDeleteExperimentsDataAttributesRequest");
const LLMObsDeleteExperimentsDataRequest_1 = require("./LLMObsDeleteExperimentsDataRequest");
const LLMObsDeleteExperimentsRequest_1 = require("./LLMObsDeleteExperimentsRequest");
const LLMObsDeleteProjectsDataAttributesRequest_1 = require("./LLMObsDeleteProjectsDataAttributesRequest");
const LLMObsDeleteProjectsDataRequest_1 = require("./LLMObsDeleteProjectsDataRequest");
const LLMObsDeleteProjectsRequest_1 = require("./LLMObsDeleteProjectsRequest");
const LLMObsExperimentDataAttributesRequest_1 = require("./LLMObsExperimentDataAttributesRequest");
const LLMObsExperimentDataAttributesResponse_1 = require("./LLMObsExperimentDataAttributesResponse");
const LLMObsExperimentDataRequest_1 = require("./LLMObsExperimentDataRequest");
const LLMObsExperimentDataResponse_1 = require("./LLMObsExperimentDataResponse");
const LLMObsExperimentEventsDataAttributesRequest_1 = require("./LLMObsExperimentEventsDataAttributesRequest");
const LLMObsExperimentEventsDataRequest_1 = require("./LLMObsExperimentEventsDataRequest");
const LLMObsExperimentEventsRequest_1 = require("./LLMObsExperimentEventsRequest");
const LLMObsExperimentMetric_1 = require("./LLMObsExperimentMetric");
const LLMObsExperimentMetricError_1 = require("./LLMObsExperimentMetricError");
const LLMObsExperimentRequest_1 = require("./LLMObsExperimentRequest");
const LLMObsExperimentResponse_1 = require("./LLMObsExperimentResponse");
const LLMObsExperimentSpan_1 = require("./LLMObsExperimentSpan");
const LLMObsExperimentSpanError_1 = require("./LLMObsExperimentSpanError");
const LLMObsExperimentSpanMeta_1 = require("./LLMObsExperimentSpanMeta");
const LLMObsExperimentUpdateDataAttributesRequest_1 = require("./LLMObsExperimentUpdateDataAttributesRequest");
const LLMObsExperimentUpdateDataRequest_1 = require("./LLMObsExperimentUpdateDataRequest");
const LLMObsExperimentUpdateRequest_1 = require("./LLMObsExperimentUpdateRequest");
const LLMObsExperimentsResponse_1 = require("./LLMObsExperimentsResponse");
const LLMObsProjectDataAttributesRequest_1 = require("./LLMObsProjectDataAttributesRequest");
const LLMObsProjectDataAttributesResponse_1 = require("./LLMObsProjectDataAttributesResponse");
const LLMObsProjectDataRequest_1 = require("./LLMObsProjectDataRequest");
const LLMObsProjectDataResponse_1 = require("./LLMObsProjectDataResponse");
const LLMObsProjectRequest_1 = require("./LLMObsProjectRequest");
const LLMObsProjectResponse_1 = require("./LLMObsProjectResponse");
const LLMObsProjectUpdateDataAttributesRequest_1 = require("./LLMObsProjectUpdateDataAttributesRequest");
const LLMObsProjectUpdateDataRequest_1 = require("./LLMObsProjectUpdateDataRequest");
const LLMObsProjectUpdateRequest_1 = require("./LLMObsProjectUpdateRequest");
const LLMObsProjectsResponse_1 = require("./LLMObsProjectsResponse");
const LaunchDarklyAPIKey_1 = require("./LaunchDarklyAPIKey");
const LaunchDarklyAPIKeyUpdate_1 = require("./LaunchDarklyAPIKeyUpdate");
const LaunchDarklyIntegration_1 = require("./LaunchDarklyIntegration");
const LaunchDarklyIntegrationUpdate_1 = require("./LaunchDarklyIntegrationUpdate");
const Layer_1 = require("./Layer");
const LayerAttributes_1 = require("./LayerAttributes");
const LayerAttributesInterval_1 = require("./LayerAttributesInterval");
const LayerRelationships_1 = require("./LayerRelationships");
const LayerRelationshipsMembers_1 = require("./LayerRelationshipsMembers");
const LayerRelationshipsMembersDataItems_1 = require("./LayerRelationshipsMembersDataItems");
const LeakedKey_1 = require("./LeakedKey");
const LeakedKeyAttributes_1 = require("./LeakedKeyAttributes");
const Library_1 = require("./Library");
const Links_1 = require("./Links");
const ListAPIsResponse_1 = require("./ListAPIsResponse");
const ListAPIsResponseData_1 = require("./ListAPIsResponseData");
const ListAPIsResponseDataAttributes_1 = require("./ListAPIsResponseDataAttributes");
const ListAPIsResponseMeta_1 = require("./ListAPIsResponseMeta");
const ListAPIsResponseMetaPagination_1 = require("./ListAPIsResponseMetaPagination");
const ListAppKeyRegistrationsResponse_1 = require("./ListAppKeyRegistrationsResponse");
const ListAppKeyRegistrationsResponseMeta_1 = require("./ListAppKeyRegistrationsResponseMeta");
const ListApplicationKeysResponse_1 = require("./ListApplicationKeysResponse");
const ListAppsResponse_1 = require("./ListAppsResponse");
const ListAppsResponseDataItems_1 = require("./ListAppsResponseDataItems");
const ListAppsResponseDataItemsAttributes_1 = require("./ListAppsResponseDataItemsAttributes");
const ListAppsResponseDataItemsRelationships_1 = require("./ListAppsResponseDataItemsRelationships");
const ListAppsResponseMeta_1 = require("./ListAppsResponseMeta");
const ListAppsResponseMetaPage_1 = require("./ListAppsResponseMetaPage");
const ListAssetsSBOMsResponse_1 = require("./ListAssetsSBOMsResponse");
const ListConnectionsResponse_1 = require("./ListConnectionsResponse");
const ListConnectionsResponseData_1 = require("./ListConnectionsResponseData");
const ListConnectionsResponseDataAttributes_1 = require("./ListConnectionsResponseDataAttributes");
const ListConnectionsResponseDataAttributesConnectionsItems_1 = require("./ListConnectionsResponseDataAttributesConnectionsItems");
const ListConnectionsResponseDataAttributesConnectionsItemsJoin_1 = require("./ListConnectionsResponseDataAttributesConnectionsItemsJoin");
const ListDeploymentRuleResponseData_1 = require("./ListDeploymentRuleResponseData");
const ListDeploymentRulesResponseDataAttributes_1 = require("./ListDeploymentRulesResponseDataAttributes");
const ListDevicesResponse_1 = require("./ListDevicesResponse");
const ListDevicesResponseMetadata_1 = require("./ListDevicesResponseMetadata");
const ListDevicesResponseMetadataPage_1 = require("./ListDevicesResponseMetadataPage");
const ListDowntimesResponse_1 = require("./ListDowntimesResponse");
const ListEntityCatalogResponse_1 = require("./ListEntityCatalogResponse");
const ListEntityCatalogResponseLinks_1 = require("./ListEntityCatalogResponseLinks");
const ListFindingsMeta_1 = require("./ListFindingsMeta");
const ListFindingsPage_1 = require("./ListFindingsPage");
const ListFindingsResponse_1 = require("./ListFindingsResponse");
const ListIntegrationsResponse_1 = require("./ListIntegrationsResponse");
const ListInterfaceTagsResponse_1 = require("./ListInterfaceTagsResponse");
const ListInterfaceTagsResponseData_1 = require("./ListInterfaceTagsResponseData");
const ListKindCatalogResponse_1 = require("./ListKindCatalogResponse");
const ListNotificationChannelsResponse_1 = require("./ListNotificationChannelsResponse");
const ListOnCallNotificationRulesResponse_1 = require("./ListOnCallNotificationRulesResponse");
const ListPipelinesResponse_1 = require("./ListPipelinesResponse");
const ListPipelinesResponseMeta_1 = require("./ListPipelinesResponseMeta");
const ListPowerpacksResponse_1 = require("./ListPowerpacksResponse");
const ListRelationCatalogResponse_1 = require("./ListRelationCatalogResponse");
const ListRelationCatalogResponseLinks_1 = require("./ListRelationCatalogResponseLinks");
const ListRulesResponse_1 = require("./ListRulesResponse");
const ListRulesResponseDataItem_1 = require("./ListRulesResponseDataItem");
const ListRulesResponseLinks_1 = require("./ListRulesResponseLinks");
const ListSecurityFindingsResponse_1 = require("./ListSecurityFindingsResponse");
const ListTagsResponse_1 = require("./ListTagsResponse");
const ListTagsResponseData_1 = require("./ListTagsResponseData");
const ListTagsResponseDataAttributes_1 = require("./ListTagsResponseDataAttributes");
const ListThreatHuntingJobsResponse_1 = require("./ListThreatHuntingJobsResponse");
const ListVulnerabilitiesResponse_1 = require("./ListVulnerabilitiesResponse");
const ListVulnerableAssetsResponse_1 = require("./ListVulnerableAssetsResponse");
const Log_1 = require("./Log");
const LogAttributes_1 = require("./LogAttributes");
const LogsAggregateBucket_1 = require("./LogsAggregateBucket");
const LogsAggregateBucketValueTimeseriesPoint_1 = require("./LogsAggregateBucketValueTimeseriesPoint");
const LogsAggregateRequest_1 = require("./LogsAggregateRequest");
const LogsAggregateRequestPage_1 = require("./LogsAggregateRequestPage");
const LogsAggregateResponse_1 = require("./LogsAggregateResponse");
const LogsAggregateResponseData_1 = require("./LogsAggregateResponseData");
const LogsAggregateSort_1 = require("./LogsAggregateSort");
const LogsArchive_1 = require("./LogsArchive");
const LogsArchiveAttributes_1 = require("./LogsArchiveAttributes");
const LogsArchiveCreateRequest_1 = require("./LogsArchiveCreateRequest");
const LogsArchiveCreateRequestAttributes_1 = require("./LogsArchiveCreateRequestAttributes");
const LogsArchiveCreateRequestDefinition_1 = require("./LogsArchiveCreateRequestDefinition");
const LogsArchiveDefinition_1 = require("./LogsArchiveDefinition");
const LogsArchiveDestinationAzure_1 = require("./LogsArchiveDestinationAzure");
const LogsArchiveDestinationGCS_1 = require("./LogsArchiveDestinationGCS");
const LogsArchiveDestinationS3_1 = require("./LogsArchiveDestinationS3");
const LogsArchiveEncryptionS3_1 = require("./LogsArchiveEncryptionS3");
const LogsArchiveIntegrationAzure_1 = require("./LogsArchiveIntegrationAzure");
const LogsArchiveIntegrationGCS_1 = require("./LogsArchiveIntegrationGCS");
const LogsArchiveIntegrationS3_1 = require("./LogsArchiveIntegrationS3");
const LogsArchiveOrder_1 = require("./LogsArchiveOrder");
const LogsArchiveOrderAttributes_1 = require("./LogsArchiveOrderAttributes");
const LogsArchiveOrderDefinition_1 = require("./LogsArchiveOrderDefinition");
const LogsArchives_1 = require("./LogsArchives");
const LogsCompute_1 = require("./LogsCompute");
const LogsGroupBy_1 = require("./LogsGroupBy");
const LogsGroupByHistogram_1 = require("./LogsGroupByHistogram");
const LogsListRequest_1 = require("./LogsListRequest");
const LogsListRequestPage_1 = require("./LogsListRequestPage");
const LogsListResponse_1 = require("./LogsListResponse");
const LogsListResponseLinks_1 = require("./LogsListResponseLinks");
const LogsMetricCompute_1 = require("./LogsMetricCompute");
const LogsMetricCreateAttributes_1 = require("./LogsMetricCreateAttributes");
const LogsMetricCreateData_1 = require("./LogsMetricCreateData");
const LogsMetricCreateRequest_1 = require("./LogsMetricCreateRequest");
const LogsMetricFilter_1 = require("./LogsMetricFilter");
const LogsMetricGroupBy_1 = require("./LogsMetricGroupBy");
const LogsMetricResponse_1 = require("./LogsMetricResponse");
const LogsMetricResponseAttributes_1 = require("./LogsMetricResponseAttributes");
const LogsMetricResponseCompute_1 = require("./LogsMetricResponseCompute");
const LogsMetricResponseData_1 = require("./LogsMetricResponseData");
const LogsMetricResponseFilter_1 = require("./LogsMetricResponseFilter");
const LogsMetricResponseGroupBy_1 = require("./LogsMetricResponseGroupBy");
const LogsMetricUpdateAttributes_1 = require("./LogsMetricUpdateAttributes");
const LogsMetricUpdateCompute_1 = require("./LogsMetricUpdateCompute");
const LogsMetricUpdateData_1 = require("./LogsMetricUpdateData");
const LogsMetricUpdateRequest_1 = require("./LogsMetricUpdateRequest");
const LogsMetricsResponse_1 = require("./LogsMetricsResponse");
const LogsQueryFilter_1 = require("./LogsQueryFilter");
const LogsQueryOptions_1 = require("./LogsQueryOptions");
const LogsResponseMetadata_1 = require("./LogsResponseMetadata");
const LogsResponseMetadataPage_1 = require("./LogsResponseMetadataPage");
const LogsWarning_1 = require("./LogsWarning");
const MSTeamsIntegrationMetadata_1 = require("./MSTeamsIntegrationMetadata");
const MSTeamsIntegrationMetadataTeamsItem_1 = require("./MSTeamsIntegrationMetadataTeamsItem");
const Maintenance_1 = require("./Maintenance");
const MaintenanceArray_1 = require("./MaintenanceArray");
const MaintenanceData_1 = require("./MaintenanceData");
const MaintenanceDataAttributes_1 = require("./MaintenanceDataAttributes");
const MaintenanceDataAttributesComponentsAffectedItems_1 = require("./MaintenanceDataAttributesComponentsAffectedItems");
const MaintenanceDataAttributesUpdatesItems_1 = require("./MaintenanceDataAttributesUpdatesItems");
const MaintenanceDataAttributesUpdatesItemsComponentsAffectedItems_1 = require("./MaintenanceDataAttributesUpdatesItemsComponentsAffectedItems");
const MaintenanceDataRelationships_1 = require("./MaintenanceDataRelationships");
const MaintenanceDataRelationshipsCreatedByUser_1 = require("./MaintenanceDataRelationshipsCreatedByUser");
const MaintenanceDataRelationshipsCreatedByUserData_1 = require("./MaintenanceDataRelationshipsCreatedByUserData");
const MaintenanceDataRelationshipsLastModifiedByUser_1 = require("./MaintenanceDataRelationshipsLastModifiedByUser");
const MaintenanceDataRelationshipsLastModifiedByUserData_1 = require("./MaintenanceDataRelationshipsLastModifiedByUserData");
const MaintenanceDataRelationshipsStatusPage_1 = require("./MaintenanceDataRelationshipsStatusPage");
const MaintenanceDataRelationshipsStatusPageData_1 = require("./MaintenanceDataRelationshipsStatusPageData");
const MemberTeam_1 = require("./MemberTeam");
const Metadata_1 = require("./Metadata");
const Metric_1 = require("./Metric");
const MetricAllTags_1 = require("./MetricAllTags");
const MetricAllTagsAttributes_1 = require("./MetricAllTagsAttributes");
const MetricAllTagsResponse_1 = require("./MetricAllTagsResponse");
const MetricAssetAttributes_1 = require("./MetricAssetAttributes");
const MetricAssetDashboardRelationship_1 = require("./MetricAssetDashboardRelationship");
const MetricAssetDashboardRelationships_1 = require("./MetricAssetDashboardRelationships");
const MetricAssetMonitorRelationship_1 = require("./MetricAssetMonitorRelationship");
const MetricAssetMonitorRelationships_1 = require("./MetricAssetMonitorRelationships");
const MetricAssetNotebookRelationship_1 = require("./MetricAssetNotebookRelationship");
const MetricAssetNotebookRelationships_1 = require("./MetricAssetNotebookRelationships");
const MetricAssetResponseData_1 = require("./MetricAssetResponseData");
const MetricAssetResponseRelationships_1 = require("./MetricAssetResponseRelationships");
const MetricAssetSLORelationship_1 = require("./MetricAssetSLORelationship");
const MetricAssetSLORelationships_1 = require("./MetricAssetSLORelationships");
const MetricAssetsResponse_1 = require("./MetricAssetsResponse");
const MetricBulkTagConfigCreate_1 = require("./MetricBulkTagConfigCreate");
const MetricBulkTagConfigCreateAttributes_1 = require("./MetricBulkTagConfigCreateAttributes");
const MetricBulkTagConfigCreateRequest_1 = require("./MetricBulkTagConfigCreateRequest");
const MetricBulkTagConfigDelete_1 = require("./MetricBulkTagConfigDelete");
const MetricBulkTagConfigDeleteAttributes_1 = require("./MetricBulkTagConfigDeleteAttributes");
const MetricBulkTagConfigDeleteRequest_1 = require("./MetricBulkTagConfigDeleteRequest");
const MetricBulkTagConfigResponse_1 = require("./MetricBulkTagConfigResponse");
const MetricBulkTagConfigStatus_1 = require("./MetricBulkTagConfigStatus");
const MetricBulkTagConfigStatusAttributes_1 = require("./MetricBulkTagConfigStatusAttributes");
const MetricCustomAggregation_1 = require("./MetricCustomAggregation");
const MetricDashboardAsset_1 = require("./MetricDashboardAsset");
const MetricDashboardAttributes_1 = require("./MetricDashboardAttributes");
const MetricDistinctVolume_1 = require("./MetricDistinctVolume");
const MetricDistinctVolumeAttributes_1 = require("./MetricDistinctVolumeAttributes");
const MetricEstimate_1 = require("./MetricEstimate");
const MetricEstimateAttributes_1 = require("./MetricEstimateAttributes");
const MetricEstimateResponse_1 = require("./MetricEstimateResponse");
const MetricIngestedIndexedVolume_1 = require("./MetricIngestedIndexedVolume");
const MetricIngestedIndexedVolumeAttributes_1 = require("./MetricIngestedIndexedVolumeAttributes");
const MetricMetaPage_1 = require("./MetricMetaPage");
const MetricMetadata_1 = require("./MetricMetadata");
const MetricMonitorAsset_1 = require("./MetricMonitorAsset");
const MetricNotebookAsset_1 = require("./MetricNotebookAsset");
const MetricOrigin_1 = require("./MetricOrigin");
const MetricPaginationMeta_1 = require("./MetricPaginationMeta");
const MetricPayload_1 = require("./MetricPayload");
const MetricPoint_1 = require("./MetricPoint");
const MetricResource_1 = require("./MetricResource");
const MetricSLOAsset_1 = require("./MetricSLOAsset");
const MetricSeries_1 = require("./MetricSeries");
const MetricSuggestedTagsAndAggregations_1 = require("./MetricSuggestedTagsAndAggregations");
const MetricSuggestedTagsAndAggregationsResponse_1 = require("./MetricSuggestedTagsAndAggregationsResponse");
const MetricSuggestedTagsAttributes_1 = require("./MetricSuggestedTagsAttributes");
const MetricTagCardinalitiesMeta_1 = require("./MetricTagCardinalitiesMeta");
const MetricTagCardinalitiesResponse_1 = require("./MetricTagCardinalitiesResponse");
const MetricTagCardinality_1 = require("./MetricTagCardinality");
const MetricTagCardinalityAttributes_1 = require("./MetricTagCardinalityAttributes");
const MetricTagConfiguration_1 = require("./MetricTagConfiguration");
const MetricTagConfigurationAttributes_1 = require("./MetricTagConfigurationAttributes");
const MetricTagConfigurationCreateAttributes_1 = require("./MetricTagConfigurationCreateAttributes");
const MetricTagConfigurationCreateData_1 = require("./MetricTagConfigurationCreateData");
const MetricTagConfigurationCreateRequest_1 = require("./MetricTagConfigurationCreateRequest");
const MetricTagConfigurationResponse_1 = require("./MetricTagConfigurationResponse");
const MetricTagConfigurationUpdateAttributes_1 = require("./MetricTagConfigurationUpdateAttributes");
const MetricTagConfigurationUpdateData_1 = require("./MetricTagConfigurationUpdateData");
const MetricTagConfigurationUpdateRequest_1 = require("./MetricTagConfigurationUpdateRequest");
const MetricVolumesResponse_1 = require("./MetricVolumesResponse");
const MetricsAndMetricTagConfigurationsResponse_1 = require("./MetricsAndMetricTagConfigurationsResponse");
const MetricsListResponseLinks_1 = require("./MetricsListResponseLinks");
const MetricsScalarQuery_1 = require("./MetricsScalarQuery");
const MetricsTimeseriesQuery_1 = require("./MetricsTimeseriesQuery");
const MicrosoftSentinelDestination_1 = require("./MicrosoftSentinelDestination");
const MicrosoftTeamsChannelInfoResponseAttributes_1 = require("./MicrosoftTeamsChannelInfoResponseAttributes");
const MicrosoftTeamsChannelInfoResponseData_1 = require("./MicrosoftTeamsChannelInfoResponseData");
const MicrosoftTeamsConfigurationReference_1 = require("./MicrosoftTeamsConfigurationReference");
const MicrosoftTeamsConfigurationReferenceData_1 = require("./MicrosoftTeamsConfigurationReferenceData");
const MicrosoftTeamsCreateTenantBasedHandleRequest_1 = require("./MicrosoftTeamsCreateTenantBasedHandleRequest");
const MicrosoftTeamsCreateWorkflowsWebhookHandleRequest_1 = require("./MicrosoftTeamsCreateWorkflowsWebhookHandleRequest");
const MicrosoftTeamsGetChannelByNameResponse_1 = require("./MicrosoftTeamsGetChannelByNameResponse");
const MicrosoftTeamsTenantBasedHandleAttributes_1 = require("./MicrosoftTeamsTenantBasedHandleAttributes");
const MicrosoftTeamsTenantBasedHandleInfoResponseAttributes_1 = require("./MicrosoftTeamsTenantBasedHandleInfoResponseAttributes");
const MicrosoftTeamsTenantBasedHandleInfoResponseData_1 = require("./MicrosoftTeamsTenantBasedHandleInfoResponseData");
const MicrosoftTeamsTenantBasedHandleRequestAttributes_1 = require("./MicrosoftTeamsTenantBasedHandleRequestAttributes");
const MicrosoftTeamsTenantBasedHandleRequestData_1 = require("./MicrosoftTeamsTenantBasedHandleRequestData");
const MicrosoftTeamsTenantBasedHandleResponse_1 = require("./MicrosoftTeamsTenantBasedHandleResponse");
const MicrosoftTeamsTenantBasedHandleResponseData_1 = require("./MicrosoftTeamsTenantBasedHandleResponseData");
const MicrosoftTeamsTenantBasedHandlesResponse_1 = require("./MicrosoftTeamsTenantBasedHandlesResponse");
const MicrosoftTeamsUpdateTenantBasedHandleRequest_1 = require("./MicrosoftTeamsUpdateTenantBasedHandleRequest");
const MicrosoftTeamsUpdateTenantBasedHandleRequestData_1 = require("./MicrosoftTeamsUpdateTenantBasedHandleRequestData");
const MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest_1 = require("./MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest");
const MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData_1 = require("./MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData");
const MicrosoftTeamsWorkflowsWebhookHandleAttributes_1 = require("./MicrosoftTeamsWorkflowsWebhookHandleAttributes");
const MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes_1 = require("./MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes");
const MicrosoftTeamsWorkflowsWebhookHandleRequestData_1 = require("./MicrosoftTeamsWorkflowsWebhookHandleRequestData");
const MicrosoftTeamsWorkflowsWebhookHandleResponse_1 = require("./MicrosoftTeamsWorkflowsWebhookHandleResponse");
const MicrosoftTeamsWorkflowsWebhookHandleResponseData_1 = require("./MicrosoftTeamsWorkflowsWebhookHandleResponseData");
const MicrosoftTeamsWorkflowsWebhookHandlesResponse_1 = require("./MicrosoftTeamsWorkflowsWebhookHandlesResponse");
const MicrosoftTeamsWorkflowsWebhookResponseAttributes_1 = require("./MicrosoftTeamsWorkflowsWebhookResponseAttributes");
const MonitorConfigPolicyAttributeCreateRequest_1 = require("./MonitorConfigPolicyAttributeCreateRequest");
const MonitorConfigPolicyAttributeEditRequest_1 = require("./MonitorConfigPolicyAttributeEditRequest");
const MonitorConfigPolicyAttributeResponse_1 = require("./MonitorConfigPolicyAttributeResponse");
const MonitorConfigPolicyCreateData_1 = require("./MonitorConfigPolicyCreateData");
const MonitorConfigPolicyCreateRequest_1 = require("./MonitorConfigPolicyCreateRequest");
const MonitorConfigPolicyEditData_1 = require("./MonitorConfigPolicyEditData");
const MonitorConfigPolicyEditRequest_1 = require("./MonitorConfigPolicyEditRequest");
const MonitorConfigPolicyListResponse_1 = require("./MonitorConfigPolicyListResponse");
const MonitorConfigPolicyResponse_1 = require("./MonitorConfigPolicyResponse");
const MonitorConfigPolicyResponseData_1 = require("./MonitorConfigPolicyResponseData");
const MonitorConfigPolicyTagPolicy_1 = require("./MonitorConfigPolicyTagPolicy");
const MonitorConfigPolicyTagPolicyCreateRequest_1 = require("./MonitorConfigPolicyTagPolicyCreateRequest");
const MonitorDowntimeMatchResponse_1 = require("./MonitorDowntimeMatchResponse");
const MonitorDowntimeMatchResponseAttributes_1 = require("./MonitorDowntimeMatchResponseAttributes");
const MonitorDowntimeMatchResponseData_1 = require("./MonitorDowntimeMatchResponseData");
const MonitorNotificationRuleAttributes_1 = require("./MonitorNotificationRuleAttributes");
const MonitorNotificationRuleCondition_1 = require("./MonitorNotificationRuleCondition");
const MonitorNotificationRuleConditionalRecipients_1 = require("./MonitorNotificationRuleConditionalRecipients");
const MonitorNotificationRuleCreateRequest_1 = require("./MonitorNotificationRuleCreateRequest");
const MonitorNotificationRuleCreateRequestData_1 = require("./MonitorNotificationRuleCreateRequestData");
const MonitorNotificationRuleData_1 = require("./MonitorNotificationRuleData");
const MonitorNotificationRuleFilterScope_1 = require("./MonitorNotificationRuleFilterScope");
const MonitorNotificationRuleFilterTags_1 = require("./MonitorNotificationRuleFilterTags");
const MonitorNotificationRuleListResponse_1 = require("./MonitorNotificationRuleListResponse");
const MonitorNotificationRuleRelationships_1 = require("./MonitorNotificationRuleRelationships");
const MonitorNotificationRuleRelationshipsCreatedBy_1 = require("./MonitorNotificationRuleRelationshipsCreatedBy");
const MonitorNotificationRuleRelationshipsCreatedByData_1 = require("./MonitorNotificationRuleRelationshipsCreatedByData");
const MonitorNotificationRuleResponse_1 = require("./MonitorNotificationRuleResponse");
const MonitorNotificationRuleResponseAttributes_1 = require("./MonitorNotificationRuleResponseAttributes");
const MonitorNotificationRuleUpdateRequest_1 = require("./MonitorNotificationRuleUpdateRequest");
const MonitorNotificationRuleUpdateRequestData_1 = require("./MonitorNotificationRuleUpdateRequestData");
const MonitorTrigger_1 = require("./MonitorTrigger");
const MonitorTriggerWrapper_1 = require("./MonitorTriggerWrapper");
const MonitorType_1 = require("./MonitorType");
const MonitorUserTemplate_1 = require("./MonitorUserTemplate");
const MonitorUserTemplateCreateData_1 = require("./MonitorUserTemplateCreateData");
const MonitorUserTemplateCreateRequest_1 = require("./MonitorUserTemplateCreateRequest");
const MonitorUserTemplateCreateResponse_1 = require("./MonitorUserTemplateCreateResponse");
const MonitorUserTemplateListResponse_1 = require("./MonitorUserTemplateListResponse");
const MonitorUserTemplateRequestAttributes_1 = require("./MonitorUserTemplateRequestAttributes");
const MonitorUserTemplateResponse_1 = require("./MonitorUserTemplateResponse");
const MonitorUserTemplateResponseAttributes_1 = require("./MonitorUserTemplateResponseAttributes");
const MonitorUserTemplateResponseData_1 = require("./MonitorUserTemplateResponseData");
const MonitorUserTemplateResponseDataWithVersions_1 = require("./MonitorUserTemplateResponseDataWithVersions");
const MonitorUserTemplateTemplateVariablesItems_1 = require("./MonitorUserTemplateTemplateVariablesItems");
const MonitorUserTemplateUpdateData_1 = require("./MonitorUserTemplateUpdateData");
const MonitorUserTemplateUpdateRequest_1 = require("./MonitorUserTemplateUpdateRequest");
const MonthlyCostAttributionAttributes_1 = require("./MonthlyCostAttributionAttributes");
const MonthlyCostAttributionBody_1 = require("./MonthlyCostAttributionBody");
const MonthlyCostAttributionMeta_1 = require("./MonthlyCostAttributionMeta");
const MonthlyCostAttributionPagination_1 = require("./MonthlyCostAttributionPagination");
const MonthlyCostAttributionResponse_1 = require("./MonthlyCostAttributionResponse");
const NotebookCreateData_1 = require("./NotebookCreateData");
const NotebookCreateRequest_1 = require("./NotebookCreateRequest");
const NotebookTriggerWrapper_1 = require("./NotebookTriggerWrapper");
const NotificationChannel_1 = require("./NotificationChannel");
const NotificationChannelAttributes_1 = require("./NotificationChannelAttributes");
const NotificationChannelData_1 = require("./NotificationChannelData");
const NotificationChannelEmailConfig_1 = require("./NotificationChannelEmailConfig");
const NotificationChannelPhoneConfig_1 = require("./NotificationChannelPhoneConfig");
const NotificationChannelPushConfig_1 = require("./NotificationChannelPushConfig");
const NotificationRule_1 = require("./NotificationRule");
const NotificationRuleAttributes_1 = require("./NotificationRuleAttributes");
const NotificationRuleResponse_1 = require("./NotificationRuleResponse");
const NotificationRulesList_1 = require("./NotificationRulesList");
const NotionAPIKey_1 = require("./NotionAPIKey");
const NotionAPIKeyUpdate_1 = require("./NotionAPIKeyUpdate");
const NotionIntegration_1 = require("./NotionIntegration");
const NotionIntegrationUpdate_1 = require("./NotionIntegrationUpdate");
const NullableRelationshipToUser_1 = require("./NullableRelationshipToUser");
const NullableRelationshipToUserData_1 = require("./NullableRelationshipToUserData");
const NullableUserRelationship_1 = require("./NullableUserRelationship");
const NullableUserRelationshipData_1 = require("./NullableUserRelationshipData");
const ObservabilityPipeline_1 = require("./ObservabilityPipeline");
const ObservabilityPipelineAddEnvVarsProcessor_1 = require("./ObservabilityPipelineAddEnvVarsProcessor");
const ObservabilityPipelineAddEnvVarsProcessorVariable_1 = require("./ObservabilityPipelineAddEnvVarsProcessorVariable");
const ObservabilityPipelineAddFieldsProcessor_1 = require("./ObservabilityPipelineAddFieldsProcessor");
const ObservabilityPipelineAddHostnameProcessor_1 = require("./ObservabilityPipelineAddHostnameProcessor");
const ObservabilityPipelineAmazonDataFirehoseSource_1 = require("./ObservabilityPipelineAmazonDataFirehoseSource");
const ObservabilityPipelineAmazonOpenSearchDestination_1 = require("./ObservabilityPipelineAmazonOpenSearchDestination");
const ObservabilityPipelineAmazonOpenSearchDestinationAuth_1 = require("./ObservabilityPipelineAmazonOpenSearchDestinationAuth");
const ObservabilityPipelineAmazonS3Destination_1 = require("./ObservabilityPipelineAmazonS3Destination");
const ObservabilityPipelineAmazonS3Source_1 = require("./ObservabilityPipelineAmazonS3Source");
const ObservabilityPipelineAmazonSecurityLakeDestination_1 = require("./ObservabilityPipelineAmazonSecurityLakeDestination");
const ObservabilityPipelineAwsAuth_1 = require("./ObservabilityPipelineAwsAuth");
const ObservabilityPipelineCloudPremDestination_1 = require("./ObservabilityPipelineCloudPremDestination");
const ObservabilityPipelineConfig_1 = require("./ObservabilityPipelineConfig");
const ObservabilityPipelineConfigProcessorGroup_1 = require("./ObservabilityPipelineConfigProcessorGroup");
const ObservabilityPipelineCrowdStrikeNextGenSiemDestination_1 = require("./ObservabilityPipelineCrowdStrikeNextGenSiemDestination");
const ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompression_1 = require("./ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompression");
const ObservabilityPipelineCustomProcessor_1 = require("./ObservabilityPipelineCustomProcessor");
const ObservabilityPipelineCustomProcessorRemap_1 = require("./ObservabilityPipelineCustomProcessorRemap");
const ObservabilityPipelineData_1 = require("./ObservabilityPipelineData");
const ObservabilityPipelineDataAttributes_1 = require("./ObservabilityPipelineDataAttributes");
const ObservabilityPipelineDatadogAgentSource_1 = require("./ObservabilityPipelineDatadogAgentSource");
const ObservabilityPipelineDatadogLogsDestination_1 = require("./ObservabilityPipelineDatadogLogsDestination");
const ObservabilityPipelineDatadogLogsDestinationRoute_1 = require("./ObservabilityPipelineDatadogLogsDestinationRoute");
const ObservabilityPipelineDatadogMetricsDestination_1 = require("./ObservabilityPipelineDatadogMetricsDestination");
const ObservabilityPipelineDatadogTagsProcessor_1 = require("./ObservabilityPipelineDatadogTagsProcessor");
const ObservabilityPipelineDedupeProcessor_1 = require("./ObservabilityPipelineDedupeProcessor");
const ObservabilityPipelineDedupeProcessorCache_1 = require("./ObservabilityPipelineDedupeProcessorCache");
const ObservabilityPipelineDiskBufferOptions_1 = require("./ObservabilityPipelineDiskBufferOptions");
const ObservabilityPipelineElasticsearchDestination_1 = require("./ObservabilityPipelineElasticsearchDestination");
const ObservabilityPipelineElasticsearchDestinationAuth_1 = require("./ObservabilityPipelineElasticsearchDestinationAuth");
const ObservabilityPipelineElasticsearchDestinationDataStream_1 = require("./ObservabilityPipelineElasticsearchDestinationDataStream");
const ObservabilityPipelineEnrichmentTableFile_1 = require("./ObservabilityPipelineEnrichmentTableFile");
const ObservabilityPipelineEnrichmentTableFileEncoding_1 = require("./ObservabilityPipelineEnrichmentTableFileEncoding");
const ObservabilityPipelineEnrichmentTableFileKeyItems_1 = require("./ObservabilityPipelineEnrichmentTableFileKeyItems");
const ObservabilityPipelineEnrichmentTableFileSchemaItems_1 = require("./ObservabilityPipelineEnrichmentTableFileSchemaItems");
const ObservabilityPipelineEnrichmentTableGeoIp_1 = require("./ObservabilityPipelineEnrichmentTableGeoIp");
const ObservabilityPipelineEnrichmentTableProcessor_1 = require("./ObservabilityPipelineEnrichmentTableProcessor");
const ObservabilityPipelineEnrichmentTableReferenceTable_1 = require("./ObservabilityPipelineEnrichmentTableReferenceTable");
const ObservabilityPipelineFieldValue_1 = require("./ObservabilityPipelineFieldValue");
const ObservabilityPipelineFilterProcessor_1 = require("./ObservabilityPipelineFilterProcessor");
const ObservabilityPipelineFluentBitSource_1 = require("./ObservabilityPipelineFluentBitSource");
const ObservabilityPipelineFluentdSource_1 = require("./ObservabilityPipelineFluentdSource");
const ObservabilityPipelineGcpAuth_1 = require("./ObservabilityPipelineGcpAuth");
const ObservabilityPipelineGenerateMetricsProcessor_1 = require("./ObservabilityPipelineGenerateMetricsProcessor");
const ObservabilityPipelineGeneratedMetric_1 = require("./ObservabilityPipelineGeneratedMetric");
const ObservabilityPipelineGeneratedMetricIncrementByField_1 = require("./ObservabilityPipelineGeneratedMetricIncrementByField");
const ObservabilityPipelineGeneratedMetricIncrementByOne_1 = require("./ObservabilityPipelineGeneratedMetricIncrementByOne");
const ObservabilityPipelineGoogleChronicleDestination_1 = require("./ObservabilityPipelineGoogleChronicleDestination");
const ObservabilityPipelineGoogleCloudStorageDestination_1 = require("./ObservabilityPipelineGoogleCloudStorageDestination");
const ObservabilityPipelineGooglePubSubDestination_1 = require("./ObservabilityPipelineGooglePubSubDestination");
const ObservabilityPipelineGooglePubSubSource_1 = require("./ObservabilityPipelineGooglePubSubSource");
const ObservabilityPipelineHttpClientDestination_1 = require("./ObservabilityPipelineHttpClientDestination");
const ObservabilityPipelineHttpClientDestinationCompression_1 = require("./ObservabilityPipelineHttpClientDestinationCompression");
const ObservabilityPipelineHttpClientSource_1 = require("./ObservabilityPipelineHttpClientSource");
const ObservabilityPipelineHttpServerSource_1 = require("./ObservabilityPipelineHttpServerSource");
const ObservabilityPipelineKafkaDestination_1 = require("./ObservabilityPipelineKafkaDestination");
const ObservabilityPipelineKafkaLibrdkafkaOption_1 = require("./ObservabilityPipelineKafkaLibrdkafkaOption");
const ObservabilityPipelineKafkaSasl_1 = require("./ObservabilityPipelineKafkaSasl");
const ObservabilityPipelineKafkaSource_1 = require("./ObservabilityPipelineKafkaSource");
const ObservabilityPipelineLogstashSource_1 = require("./ObservabilityPipelineLogstashSource");
const ObservabilityPipelineMemoryBufferOptions_1 = require("./ObservabilityPipelineMemoryBufferOptions");
const ObservabilityPipelineMemoryBufferSizeOptions_1 = require("./ObservabilityPipelineMemoryBufferSizeOptions");
const ObservabilityPipelineMetadataEntry_1 = require("./ObservabilityPipelineMetadataEntry");
const ObservabilityPipelineMetricTagsProcessor_1 = require("./ObservabilityPipelineMetricTagsProcessor");
const ObservabilityPipelineMetricTagsProcessorRule_1 = require("./ObservabilityPipelineMetricTagsProcessorRule");
const ObservabilityPipelineNewRelicDestination_1 = require("./ObservabilityPipelineNewRelicDestination");
const ObservabilityPipelineOcsfMapperProcessor_1 = require("./ObservabilityPipelineOcsfMapperProcessor");
const ObservabilityPipelineOcsfMapperProcessorMapping_1 = require("./ObservabilityPipelineOcsfMapperProcessorMapping");
const ObservabilityPipelineOcsfMappingCustom_1 = require("./ObservabilityPipelineOcsfMappingCustom");
const ObservabilityPipelineOcsfMappingCustomFieldMapping_1 = require("./ObservabilityPipelineOcsfMappingCustomFieldMapping");
const ObservabilityPipelineOcsfMappingCustomLookup_1 = require("./ObservabilityPipelineOcsfMappingCustomLookup");
const ObservabilityPipelineOcsfMappingCustomLookupTableEntry_1 = require("./ObservabilityPipelineOcsfMappingCustomLookupTableEntry");
const ObservabilityPipelineOcsfMappingCustomMetadata_1 = require("./ObservabilityPipelineOcsfMappingCustomMetadata");
const ObservabilityPipelineOpenSearchDestination_1 = require("./ObservabilityPipelineOpenSearchDestination");
const ObservabilityPipelineOpenSearchDestinationDataStream_1 = require("./ObservabilityPipelineOpenSearchDestinationDataStream");
const ObservabilityPipelineOpentelemetrySource_1 = require("./ObservabilityPipelineOpentelemetrySource");
const ObservabilityPipelineParseGrokProcessor_1 = require("./ObservabilityPipelineParseGrokProcessor");
const ObservabilityPipelineParseGrokProcessorRule_1 = require("./ObservabilityPipelineParseGrokProcessorRule");
const ObservabilityPipelineParseGrokProcessorRuleMatchRule_1 = require("./ObservabilityPipelineParseGrokProcessorRuleMatchRule");
const ObservabilityPipelineParseGrokProcessorRuleSupportRule_1 = require("./ObservabilityPipelineParseGrokProcessorRuleSupportRule");
const ObservabilityPipelineParseJSONProcessor_1 = require("./ObservabilityPipelineParseJSONProcessor");
const ObservabilityPipelineParseXMLProcessor_1 = require("./ObservabilityPipelineParseXMLProcessor");
const ObservabilityPipelineQuotaProcessor_1 = require("./ObservabilityPipelineQuotaProcessor");
const ObservabilityPipelineQuotaProcessorLimit_1 = require("./ObservabilityPipelineQuotaProcessorLimit");
const ObservabilityPipelineQuotaProcessorOverride_1 = require("./ObservabilityPipelineQuotaProcessorOverride");
const ObservabilityPipelineReduceProcessor_1 = require("./ObservabilityPipelineReduceProcessor");
const ObservabilityPipelineReduceProcessorMergeStrategy_1 = require("./ObservabilityPipelineReduceProcessorMergeStrategy");
const ObservabilityPipelineRemoveFieldsProcessor_1 = require("./ObservabilityPipelineRemoveFieldsProcessor");
const ObservabilityPipelineRenameFieldsProcessor_1 = require("./ObservabilityPipelineRenameFieldsProcessor");
const ObservabilityPipelineRenameFieldsProcessorField_1 = require("./ObservabilityPipelineRenameFieldsProcessorField");
const ObservabilityPipelineRsyslogDestination_1 = require("./ObservabilityPipelineRsyslogDestination");
const ObservabilityPipelineRsyslogSource_1 = require("./ObservabilityPipelineRsyslogSource");
const ObservabilityPipelineSampleProcessor_1 = require("./ObservabilityPipelineSampleProcessor");
const ObservabilityPipelineSensitiveDataScannerProcessor_1 = require("./ObservabilityPipelineSensitiveDataScannerProcessor");
const ObservabilityPipelineSensitiveDataScannerProcessorActionHash_1 = require("./ObservabilityPipelineSensitiveDataScannerProcessorActionHash");
const ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact_1 = require("./ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact");
const ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptions_1 = require("./ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptions");
const ObservabilityPipelineSensitiveDataScannerProcessorActionRedact_1 = require("./ObservabilityPipelineSensitiveDataScannerProcessorActionRedact");
const ObservabilityPipelineSensitiveDataScannerProcessorActionRedactOptions_1 = require("./ObservabilityPipelineSensitiveDataScannerProcessorActionRedactOptions");
const ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern_1 = require("./ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern");
const ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions_1 = require("./ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions");
const ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions_1 = require("./ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions");
const ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern_1 = require("./ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern");
const ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions_1 = require("./ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions");
const ObservabilityPipelineSensitiveDataScannerProcessorRule_1 = require("./ObservabilityPipelineSensitiveDataScannerProcessorRule");
const ObservabilityPipelineSensitiveDataScannerProcessorScopeAll_1 = require("./ObservabilityPipelineSensitiveDataScannerProcessorScopeAll");
const ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude_1 = require("./ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude");
const ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude_1 = require("./ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude");
const ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions_1 = require("./ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions");
const ObservabilityPipelineSentinelOneDestination_1 = require("./ObservabilityPipelineSentinelOneDestination");
const ObservabilityPipelineSocketDestination_1 = require("./ObservabilityPipelineSocketDestination");
const ObservabilityPipelineSocketDestinationFramingBytes_1 = require("./ObservabilityPipelineSocketDestinationFramingBytes");
const ObservabilityPipelineSocketDestinationFramingCharacterDelimited_1 = require("./ObservabilityPipelineSocketDestinationFramingCharacterDelimited");
const ObservabilityPipelineSocketDestinationFramingNewlineDelimited_1 = require("./ObservabilityPipelineSocketDestinationFramingNewlineDelimited");
const ObservabilityPipelineSocketSource_1 = require("./ObservabilityPipelineSocketSource");
const ObservabilityPipelineSocketSourceFramingBytes_1 = require("./ObservabilityPipelineSocketSourceFramingBytes");
const ObservabilityPipelineSocketSourceFramingCharacterDelimited_1 = require("./ObservabilityPipelineSocketSourceFramingCharacterDelimited");
const ObservabilityPipelineSocketSourceFramingChunkedGelf_1 = require("./ObservabilityPipelineSocketSourceFramingChunkedGelf");
const ObservabilityPipelineSocketSourceFramingNewlineDelimited_1 = require("./ObservabilityPipelineSocketSourceFramingNewlineDelimited");
const ObservabilityPipelineSocketSourceFramingOctetCounting_1 = require("./ObservabilityPipelineSocketSourceFramingOctetCounting");
const ObservabilityPipelineSpec_1 = require("./ObservabilityPipelineSpec");
const ObservabilityPipelineSpecData_1 = require("./ObservabilityPipelineSpecData");
const ObservabilityPipelineSplitArrayProcessor_1 = require("./ObservabilityPipelineSplitArrayProcessor");
const ObservabilityPipelineSplitArrayProcessorArrayConfig_1 = require("./ObservabilityPipelineSplitArrayProcessorArrayConfig");
const ObservabilityPipelineSplunkHecDestination_1 = require("./ObservabilityPipelineSplunkHecDestination");
const ObservabilityPipelineSplunkHecSource_1 = require("./ObservabilityPipelineSplunkHecSource");
const ObservabilityPipelineSplunkTcpSource_1 = require("./ObservabilityPipelineSplunkTcpSource");
const ObservabilityPipelineSumoLogicDestination_1 = require("./ObservabilityPipelineSumoLogicDestination");
const ObservabilityPipelineSumoLogicDestinationHeaderCustomFieldsItem_1 = require("./ObservabilityPipelineSumoLogicDestinationHeaderCustomFieldsItem");
const ObservabilityPipelineSumoLogicSource_1 = require("./ObservabilityPipelineSumoLogicSource");
const ObservabilityPipelineSyslogNgDestination_1 = require("./ObservabilityPipelineSyslogNgDestination");
const ObservabilityPipelineSyslogNgSource_1 = require("./ObservabilityPipelineSyslogNgSource");
const ObservabilityPipelineThrottleProcessor_1 = require("./ObservabilityPipelineThrottleProcessor");
const ObservabilityPipelineTls_1 = require("./ObservabilityPipelineTls");
const OktaAPIToken_1 = require("./OktaAPIToken");
const OktaAPITokenUpdate_1 = require("./OktaAPITokenUpdate");
const OktaAccount_1 = require("./OktaAccount");
const OktaAccountAttributes_1 = require("./OktaAccountAttributes");
const OktaAccountRequest_1 = require("./OktaAccountRequest");
const OktaAccountResponse_1 = require("./OktaAccountResponse");
const OktaAccountResponseData_1 = require("./OktaAccountResponseData");
const OktaAccountUpdateRequest_1 = require("./OktaAccountUpdateRequest");
const OktaAccountUpdateRequestAttributes_1 = require("./OktaAccountUpdateRequestAttributes");
const OktaAccountUpdateRequestData_1 = require("./OktaAccountUpdateRequestData");
const OktaAccountsResponse_1 = require("./OktaAccountsResponse");
const OktaIntegration_1 = require("./OktaIntegration");
const OktaIntegrationUpdate_1 = require("./OktaIntegrationUpdate");
const OnCallNotificationRule_1 = require("./OnCallNotificationRule");
const OnCallNotificationRuleAttributes_1 = require("./OnCallNotificationRuleAttributes");
const OnCallNotificationRuleChannelRelationship_1 = require("./OnCallNotificationRuleChannelRelationship");
const OnCallNotificationRuleChannelRelationshipData_1 = require("./OnCallNotificationRuleChannelRelationshipData");
const OnCallNotificationRuleData_1 = require("./OnCallNotificationRuleData");
const OnCallNotificationRuleRelationships_1 = require("./OnCallNotificationRuleRelationships");
const OnCallNotificationRuleRequestAttributes_1 = require("./OnCallNotificationRuleRequestAttributes");
const OnCallPhoneNotificationRuleSettings_1 = require("./OnCallPhoneNotificationRuleSettings");
const OnCallTrigger_1 = require("./OnCallTrigger");
const OnCallTriggerWrapper_1 = require("./OnCallTriggerWrapper");
const OnDemandConcurrencyCap_1 = require("./OnDemandConcurrencyCap");
const OnDemandConcurrencyCapAttributes_1 = require("./OnDemandConcurrencyCapAttributes");
const OnDemandConcurrencyCapResponse_1 = require("./OnDemandConcurrencyCapResponse");
const OpenAIAPIKey_1 = require("./OpenAIAPIKey");
const OpenAIAPIKeyUpdate_1 = require("./OpenAIAPIKeyUpdate");
const OpenAIIntegration_1 = require("./OpenAIIntegration");
const OpenAIIntegrationUpdate_1 = require("./OpenAIIntegrationUpdate");
const OpenAPIEndpoint_1 = require("./OpenAPIEndpoint");
const OpsgenieServiceCreateAttributes_1 = require("./OpsgenieServiceCreateAttributes");
const OpsgenieServiceCreateData_1 = require("./OpsgenieServiceCreateData");
const OpsgenieServiceCreateRequest_1 = require("./OpsgenieServiceCreateRequest");
const OpsgenieServiceResponse_1 = require("./OpsgenieServiceResponse");
const OpsgenieServiceResponseAttributes_1 = require("./OpsgenieServiceResponseAttributes");
const OpsgenieServiceResponseData_1 = require("./OpsgenieServiceResponseData");
const OpsgenieServiceUpdateAttributes_1 = require("./OpsgenieServiceUpdateAttributes");
const OpsgenieServiceUpdateData_1 = require("./OpsgenieServiceUpdateData");
const OpsgenieServiceUpdateRequest_1 = require("./OpsgenieServiceUpdateRequest");
const OpsgenieServicesResponse_1 = require("./OpsgenieServicesResponse");
const OrgConfigGetResponse_1 = require("./OrgConfigGetResponse");
const OrgConfigListResponse_1 = require("./OrgConfigListResponse");
const OrgConfigRead_1 = require("./OrgConfigRead");
const OrgConfigReadAttributes_1 = require("./OrgConfigReadAttributes");
const OrgConfigWrite_1 = require("./OrgConfigWrite");
const OrgConfigWriteAttributes_1 = require("./OrgConfigWriteAttributes");
const OrgConfigWriteRequest_1 = require("./OrgConfigWriteRequest");
const OrgConnection_1 = require("./OrgConnection");
const OrgConnectionAttributes_1 = require("./OrgConnectionAttributes");
const OrgConnectionCreate_1 = require("./OrgConnectionCreate");
const OrgConnectionCreateAttributes_1 = require("./OrgConnectionCreateAttributes");
const OrgConnectionCreateRelationships_1 = require("./OrgConnectionCreateRelationships");
const OrgConnectionCreateRequest_1 = require("./OrgConnectionCreateRequest");
const OrgConnectionListResponse_1 = require("./OrgConnectionListResponse");
const OrgConnectionListResponseMeta_1 = require("./OrgConnectionListResponseMeta");
const OrgConnectionListResponseMetaPage_1 = require("./OrgConnectionListResponseMetaPage");
const OrgConnectionOrgRelationship_1 = require("./OrgConnectionOrgRelationship");
const OrgConnectionOrgRelationshipData_1 = require("./OrgConnectionOrgRelationshipData");
const OrgConnectionRelationships_1 = require("./OrgConnectionRelationships");
const OrgConnectionResponse_1 = require("./OrgConnectionResponse");
const OrgConnectionUpdate_1 = require("./OrgConnectionUpdate");
const OrgConnectionUpdateAttributes_1 = require("./OrgConnectionUpdateAttributes");
const OrgConnectionUpdateRequest_1 = require("./OrgConnectionUpdateRequest");
const OrgConnectionUserRelationship_1 = require("./OrgConnectionUserRelationship");
const OrgConnectionUserRelationshipData_1 = require("./OrgConnectionUserRelationshipData");
const Organization_1 = require("./Organization");
const OrganizationAttributes_1 = require("./OrganizationAttributes");
const OutboundEdge_1 = require("./OutboundEdge");
const OutcomesBatchAttributes_1 = require("./OutcomesBatchAttributes");
const OutcomesBatchRequest_1 = require("./OutcomesBatchRequest");
const OutcomesBatchRequestData_1 = require("./OutcomesBatchRequestData");
const OutcomesBatchRequestItem_1 = require("./OutcomesBatchRequestItem");
const OutcomesBatchResponse_1 = require("./OutcomesBatchResponse");
const OutcomesBatchResponseAttributes_1 = require("./OutcomesBatchResponseAttributes");
const OutcomesBatchResponseMeta_1 = require("./OutcomesBatchResponseMeta");
const OutcomesResponse_1 = require("./OutcomesResponse");
const OutcomesResponseDataItem_1 = require("./OutcomesResponseDataItem");
const OutcomesResponseIncludedItem_1 = require("./OutcomesResponseIncludedItem");
const OutcomesResponseIncludedRuleAttributes_1 = require("./OutcomesResponseIncludedRuleAttributes");
const OutcomesResponseLinks_1 = require("./OutcomesResponseLinks");
const OutputSchema_1 = require("./OutputSchema");
const OutputSchemaParameters_1 = require("./OutputSchemaParameters");
const Pagination_1 = require("./Pagination");
const PaginationMeta_1 = require("./PaginationMeta");
const PaginationMetaPage_1 = require("./PaginationMetaPage");
const Parameter_1 = require("./Parameter");
const PartialAPIKey_1 = require("./PartialAPIKey");
const PartialAPIKeyAttributes_1 = require("./PartialAPIKeyAttributes");
const PartialApplicationKey_1 = require("./PartialApplicationKey");
const PartialApplicationKeyAttributes_1 = require("./PartialApplicationKeyAttributes");
const PartialApplicationKeyResponse_1 = require("./PartialApplicationKeyResponse");
const PatchAttachmentRequest_1 = require("./PatchAttachmentRequest");
const PatchAttachmentRequestData_1 = require("./PatchAttachmentRequestData");
const PatchAttachmentRequestDataAttributes_1 = require("./PatchAttachmentRequestDataAttributes");
const PatchAttachmentRequestDataAttributesAttachment_1 = require("./PatchAttachmentRequestDataAttributesAttachment");
const PatchComponentRequest_1 = require("./PatchComponentRequest");
const PatchComponentRequestData_1 = require("./PatchComponentRequestData");
const PatchComponentRequestDataAttributes_1 = require("./PatchComponentRequestDataAttributes");
const PatchDegradationRequest_1 = require("./PatchDegradationRequest");
const PatchDegradationRequestData_1 = require("./PatchDegradationRequestData");
const PatchDegradationRequestDataAttributes_1 = require("./PatchDegradationRequestDataAttributes");
const PatchDegradationRequestDataAttributesComponentsAffectedItems_1 = require("./PatchDegradationRequestDataAttributesComponentsAffectedItems");
const PatchIncidentNotificationTemplateRequest_1 = require("./PatchIncidentNotificationTemplateRequest");
const PatchMaintenanceRequest_1 = require("./PatchMaintenanceRequest");
const PatchMaintenanceRequestData_1 = require("./PatchMaintenanceRequestData");
const PatchMaintenanceRequestDataAttributes_1 = require("./PatchMaintenanceRequestDataAttributes");
const PatchMaintenanceRequestDataAttributesComponentsAffectedItems_1 = require("./PatchMaintenanceRequestDataAttributesComponentsAffectedItems");
const PatchNotificationRuleParameters_1 = require("./PatchNotificationRuleParameters");
const PatchNotificationRuleParametersData_1 = require("./PatchNotificationRuleParametersData");
const PatchNotificationRuleParametersDataAttributes_1 = require("./PatchNotificationRuleParametersDataAttributes");
const PatchStatusPageRequest_1 = require("./PatchStatusPageRequest");
const PatchStatusPageRequestData_1 = require("./PatchStatusPageRequestData");
const PatchStatusPageRequestDataAttributes_1 = require("./PatchStatusPageRequestDataAttributes");
const PatchTableRequest_1 = require("./PatchTableRequest");
const PatchTableRequestData_1 = require("./PatchTableRequestData");
const PatchTableRequestDataAttributes_1 = require("./PatchTableRequestDataAttributes");
const PatchTableRequestDataAttributesFileMetadataCloudStorage_1 = require("./PatchTableRequestDataAttributesFileMetadataCloudStorage");
const PatchTableRequestDataAttributesFileMetadataLocalFile_1 = require("./PatchTableRequestDataAttributesFileMetadataLocalFile");
const PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails_1 = require("./PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails");
const PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail_1 = require("./PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail");
const PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail_1 = require("./PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail");
const PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail_1 = require("./PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail");
const PatchTableRequestDataAttributesSchema_1 = require("./PatchTableRequestDataAttributesSchema");
const PatchTableRequestDataAttributesSchemaFieldsItems_1 = require("./PatchTableRequestDataAttributesSchemaFieldsItems");
const Permission_1 = require("./Permission");
const PermissionAttributes_1 = require("./PermissionAttributes");
const PermissionsResponse_1 = require("./PermissionsResponse");
const Playlist_1 = require("./Playlist");
const PlaylistArray_1 = require("./PlaylistArray");
const PlaylistData_1 = require("./PlaylistData");
const PlaylistDataAttributes_1 = require("./PlaylistDataAttributes");
const PlaylistDataAttributesCreatedBy_1 = require("./PlaylistDataAttributesCreatedBy");
const PlaylistsSession_1 = require("./PlaylistsSession");
const PlaylistsSessionArray_1 = require("./PlaylistsSessionArray");
const PlaylistsSessionData_1 = require("./PlaylistsSessionData");
const PlaylistsSessionDataAttributes_1 = require("./PlaylistsSessionDataAttributes");
const PostmortemAttachmentRequest_1 = require("./PostmortemAttachmentRequest");
const PostmortemAttachmentRequestAttributes_1 = require("./PostmortemAttachmentRequestAttributes");
const PostmortemAttachmentRequestData_1 = require("./PostmortemAttachmentRequestData");
const PostmortemCell_1 = require("./PostmortemCell");
const PostmortemCellAttributes_1 = require("./PostmortemCellAttributes");
const PostmortemCellDefinition_1 = require("./PostmortemCellDefinition");
const PostmortemTemplateAttributesRequest_1 = require("./PostmortemTemplateAttributesRequest");
const PostmortemTemplateAttributesResponse_1 = require("./PostmortemTemplateAttributesResponse");
const PostmortemTemplateDataRequest_1 = require("./PostmortemTemplateDataRequest");
const PostmortemTemplateDataResponse_1 = require("./PostmortemTemplateDataResponse");
const PostmortemTemplateRequest_1 = require("./PostmortemTemplateRequest");
const PostmortemTemplateResponse_1 = require("./PostmortemTemplateResponse");
const PostmortemTemplatesResponse_1 = require("./PostmortemTemplatesResponse");
const Powerpack_1 = require("./Powerpack");
const PowerpackAttributes_1 = require("./PowerpackAttributes");
const PowerpackData_1 = require("./PowerpackData");
const PowerpackGroupWidget_1 = require("./PowerpackGroupWidget");
const PowerpackGroupWidgetDefinition_1 = require("./PowerpackGroupWidgetDefinition");
const PowerpackGroupWidgetLayout_1 = require("./PowerpackGroupWidgetLayout");
const PowerpackInnerWidgetLayout_1 = require("./PowerpackInnerWidgetLayout");
const PowerpackInnerWidgets_1 = require("./PowerpackInnerWidgets");
const PowerpackRelationships_1 = require("./PowerpackRelationships");
const PowerpackResponse_1 = require("./PowerpackResponse");
const PowerpackResponseLinks_1 = require("./PowerpackResponseLinks");
const PowerpackTemplateVariable_1 = require("./PowerpackTemplateVariable");
const PowerpacksResponseMeta_1 = require("./PowerpacksResponseMeta");
const PowerpacksResponseMetaPagination_1 = require("./PowerpacksResponseMetaPagination");
const PreviewEntityResponseData_1 = require("./PreviewEntityResponseData");
const ProcessSummariesMeta_1 = require("./ProcessSummariesMeta");
const ProcessSummariesMetaPage_1 = require("./ProcessSummariesMetaPage");
const ProcessSummariesResponse_1 = require("./ProcessSummariesResponse");
const ProcessSummary_1 = require("./ProcessSummary");
const ProcessSummaryAttributes_1 = require("./ProcessSummaryAttributes");
const ProductAnalyticsAnalyticsQuery_1 = require("./ProductAnalyticsAnalyticsQuery");
const ProductAnalyticsAnalyticsRequest_1 = require("./ProductAnalyticsAnalyticsRequest");
const ProductAnalyticsAnalyticsRequestAttributes_1 = require("./ProductAnalyticsAnalyticsRequestAttributes");
const ProductAnalyticsAnalyticsRequestData_1 = require("./ProductAnalyticsAnalyticsRequestData");
const ProductAnalyticsAudienceAccountSubquery_1 = require("./ProductAnalyticsAudienceAccountSubquery");
const ProductAnalyticsAudienceFilters_1 = require("./ProductAnalyticsAudienceFilters");
const ProductAnalyticsAudienceSegmentSubquery_1 = require("./ProductAnalyticsAudienceSegmentSubquery");
const ProductAnalyticsAudienceUserSubquery_1 = require("./ProductAnalyticsAudienceUserSubquery");
const ProductAnalyticsCompute_1 = require("./ProductAnalyticsCompute");
const ProductAnalyticsEventQuery_1 = require("./ProductAnalyticsEventQuery");
const ProductAnalyticsEventSearch_1 = require("./ProductAnalyticsEventSearch");
const ProductAnalyticsGroupBy_1 = require("./ProductAnalyticsGroupBy");
const ProductAnalyticsGroupBySort_1 = require("./ProductAnalyticsGroupBySort");
const ProductAnalyticsInterval_1 = require("./ProductAnalyticsInterval");
const ProductAnalyticsOccurrenceFilter_1 = require("./ProductAnalyticsOccurrenceFilter");
const ProductAnalyticsOccurrenceQuery_1 = require("./ProductAnalyticsOccurrenceQuery");
const ProductAnalyticsOccurrenceSearch_1 = require("./ProductAnalyticsOccurrenceSearch");
const ProductAnalyticsResponseMeta_1 = require("./ProductAnalyticsResponseMeta");
const ProductAnalyticsScalarColumn_1 = require("./ProductAnalyticsScalarColumn");
const ProductAnalyticsScalarColumnMeta_1 = require("./ProductAnalyticsScalarColumnMeta");
const ProductAnalyticsScalarResponse_1 = require("./ProductAnalyticsScalarResponse");
const ProductAnalyticsScalarResponseAttributes_1 = require("./ProductAnalyticsScalarResponseAttributes");
const ProductAnalyticsScalarResponseData_1 = require("./ProductAnalyticsScalarResponseData");
const ProductAnalyticsSerie_1 = require("./ProductAnalyticsSerie");
const ProductAnalyticsServerSideEventError_1 = require("./ProductAnalyticsServerSideEventError");
const ProductAnalyticsServerSideEventErrors_1 = require("./ProductAnalyticsServerSideEventErrors");
const ProductAnalyticsServerSideEventItem_1 = require("./ProductAnalyticsServerSideEventItem");
const ProductAnalyticsServerSideEventItemAccount_1 = require("./ProductAnalyticsServerSideEventItemAccount");
const ProductAnalyticsServerSideEventItemApplication_1 = require("./ProductAnalyticsServerSideEventItemApplication");
const ProductAnalyticsServerSideEventItemEvent_1 = require("./ProductAnalyticsServerSideEventItemEvent");
const ProductAnalyticsServerSideEventItemSession_1 = require("./ProductAnalyticsServerSideEventItemSession");
const ProductAnalyticsServerSideEventItemUsr_1 = require("./ProductAnalyticsServerSideEventItemUsr");
const ProductAnalyticsTimeseriesResponse_1 = require("./ProductAnalyticsTimeseriesResponse");
const ProductAnalyticsTimeseriesResponseAttributes_1 = require("./ProductAnalyticsTimeseriesResponseAttributes");
const ProductAnalyticsTimeseriesResponseData_1 = require("./ProductAnalyticsTimeseriesResponseData");
const ProductAnalyticsUnit_1 = require("./ProductAnalyticsUnit");
const Project_1 = require("./Project");
const ProjectAttributes_1 = require("./ProjectAttributes");
const ProjectColumnsConfig_1 = require("./ProjectColumnsConfig");
const ProjectColumnsConfigColumnsItems_1 = require("./ProjectColumnsConfigColumnsItems");
const ProjectColumnsConfigColumnsItemsSort_1 = require("./ProjectColumnsConfigColumnsItemsSort");
const ProjectCreate_1 = require("./ProjectCreate");
const ProjectCreateAttributes_1 = require("./ProjectCreateAttributes");
const ProjectCreateRequest_1 = require("./ProjectCreateRequest");
const ProjectNotificationSettings_1 = require("./ProjectNotificationSettings");
const ProjectRelationship_1 = require("./ProjectRelationship");
const ProjectRelationshipData_1 = require("./ProjectRelationshipData");
const ProjectRelationships_1 = require("./ProjectRelationships");
const ProjectResponse_1 = require("./ProjectResponse");
const ProjectSettings_1 = require("./ProjectSettings");
const ProjectUpdate_1 = require("./ProjectUpdate");
const ProjectUpdateAttributes_1 = require("./ProjectUpdateAttributes");
const ProjectUpdateRequest_1 = require("./ProjectUpdateRequest");
const ProjectedCost_1 = require("./ProjectedCost");
const ProjectedCostAttributes_1 = require("./ProjectedCostAttributes");
const ProjectedCostResponse_1 = require("./ProjectedCostResponse");
const ProjectsResponse_1 = require("./ProjectsResponse");
const PublishAppResponse_1 = require("./PublishAppResponse");
const PutAppsDatastoreItemResponseArray_1 = require("./PutAppsDatastoreItemResponseArray");
const PutAppsDatastoreItemResponseData_1 = require("./PutAppsDatastoreItemResponseData");
const PutIncidentNotificationRuleRequest_1 = require("./PutIncidentNotificationRuleRequest");
const QueryAccountRequest_1 = require("./QueryAccountRequest");
const QueryAccountRequestData_1 = require("./QueryAccountRequestData");
const QueryAccountRequestDataAttributes_1 = require("./QueryAccountRequestDataAttributes");
const QueryAccountRequestDataAttributesSort_1 = require("./QueryAccountRequestDataAttributesSort");
const QueryEventFilteredUsersRequest_1 = require("./QueryEventFilteredUsersRequest");
const QueryEventFilteredUsersRequestData_1 = require("./QueryEventFilteredUsersRequestData");
const QueryEventFilteredUsersRequestDataAttributes_1 = require("./QueryEventFilteredUsersRequestDataAttributes");
const QueryEventFilteredUsersRequestDataAttributesEventQuery_1 = require("./QueryEventFilteredUsersRequestDataAttributesEventQuery");
const QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame_1 = require("./QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame");
const QueryFormula_1 = require("./QueryFormula");
const QueryResponse_1 = require("./QueryResponse");
const QueryResponseData_1 = require("./QueryResponseData");
const QueryResponseDataAttributes_1 = require("./QueryResponseDataAttributes");
const QueryUsersRequest_1 = require("./QueryUsersRequest");
const QueryUsersRequestData_1 = require("./QueryUsersRequestData");
const QueryUsersRequestDataAttributes_1 = require("./QueryUsersRequestDataAttributes");
const QueryUsersRequestDataAttributesSort_1 = require("./QueryUsersRequestDataAttributesSort");
const RUMAggregateBucketValueTimeseriesPoint_1 = require("./RUMAggregateBucketValueTimeseriesPoint");
const RUMAggregateRequest_1 = require("./RUMAggregateRequest");
const RUMAggregateSort_1 = require("./RUMAggregateSort");
const RUMAggregationBucketsResponse_1 = require("./RUMAggregationBucketsResponse");
const RUMAnalyticsAggregateResponse_1 = require("./RUMAnalyticsAggregateResponse");
const RUMApplication_1 = require("./RUMApplication");
const RUMApplicationAttributes_1 = require("./RUMApplicationAttributes");
const RUMApplicationCreate_1 = require("./RUMApplicationCreate");
const RUMApplicationCreateAttributes_1 = require("./RUMApplicationCreateAttributes");
const RUMApplicationCreateRequest_1 = require("./RUMApplicationCreateRequest");
const RUMApplicationList_1 = require("./RUMApplicationList");
const RUMApplicationListAttributes_1 = require("./RUMApplicationListAttributes");
const RUMApplicationResponse_1 = require("./RUMApplicationResponse");
const RUMApplicationUpdate_1 = require("./RUMApplicationUpdate");
const RUMApplicationUpdateAttributes_1 = require("./RUMApplicationUpdateAttributes");
const RUMApplicationUpdateRequest_1 = require("./RUMApplicationUpdateRequest");
const RUMApplicationsResponse_1 = require("./RUMApplicationsResponse");
const RUMBucketResponse_1 = require("./RUMBucketResponse");
const RUMCompute_1 = require("./RUMCompute");
const RUMEvent_1 = require("./RUMEvent");
const RUMEventAttributes_1 = require("./RUMEventAttributes");
const RUMEventProcessingScale_1 = require("./RUMEventProcessingScale");
const RUMEventsResponse_1 = require("./RUMEventsResponse");
const RUMGroupBy_1 = require("./RUMGroupBy");
const RUMGroupByHistogram_1 = require("./RUMGroupByHistogram");
const RUMProductAnalyticsRetentionScale_1 = require("./RUMProductAnalyticsRetentionScale");
const RUMProductScales_1 = require("./RUMProductScales");
const RUMQueryFilter_1 = require("./RUMQueryFilter");
const RUMQueryOptions_1 = require("./RUMQueryOptions");
const RUMQueryPageOptions_1 = require("./RUMQueryPageOptions");
const RUMResponseLinks_1 = require("./RUMResponseLinks");
const RUMResponseMetadata_1 = require("./RUMResponseMetadata");
const RUMResponsePage_1 = require("./RUMResponsePage");
const RUMSearchEventsRequest_1 = require("./RUMSearchEventsRequest");
const RUMWarning_1 = require("./RUMWarning");
const RawErrorBudgetRemaining_1 = require("./RawErrorBudgetRemaining");
const ReadinessGate_1 = require("./ReadinessGate");
const RecommendationAttributes_1 = require("./RecommendationAttributes");
const RecommendationData_1 = require("./RecommendationData");
const RecommendationDocument_1 = require("./RecommendationDocument");
const RegisterAppKeyResponse_1 = require("./RegisterAppKeyResponse");
const RelationAttributes_1 = require("./RelationAttributes");
const RelationEntity_1 = require("./RelationEntity");
const RelationMeta_1 = require("./RelationMeta");
const RelationRelationships_1 = require("./RelationRelationships");
const RelationResponse_1 = require("./RelationResponse");
const RelationResponseMeta_1 = require("./RelationResponseMeta");
const RelationToEntity_1 = require("./RelationToEntity");
const RelationshipItem_1 = require("./RelationshipItem");
const RelationshipToIncident_1 = require("./RelationshipToIncident");
const RelationshipToIncidentAttachment_1 = require("./RelationshipToIncidentAttachment");
const RelationshipToIncidentAttachmentData_1 = require("./RelationshipToIncidentAttachmentData");
const RelationshipToIncidentData_1 = require("./RelationshipToIncidentData");
const RelationshipToIncidentImpactData_1 = require("./RelationshipToIncidentImpactData");
const RelationshipToIncidentImpacts_1 = require("./RelationshipToIncidentImpacts");
const RelationshipToIncidentIntegrationMetadataData_1 = require("./RelationshipToIncidentIntegrationMetadataData");
const RelationshipToIncidentIntegrationMetadatas_1 = require("./RelationshipToIncidentIntegrationMetadatas");
const RelationshipToIncidentNotificationTemplate_1 = require("./RelationshipToIncidentNotificationTemplate");
const RelationshipToIncidentNotificationTemplateData_1 = require("./RelationshipToIncidentNotificationTemplateData");
const RelationshipToIncidentPostmortem_1 = require("./RelationshipToIncidentPostmortem");
const RelationshipToIncidentPostmortemData_1 = require("./RelationshipToIncidentPostmortemData");
const RelationshipToIncidentRequest_1 = require("./RelationshipToIncidentRequest");
const RelationshipToIncidentResponderData_1 = require("./RelationshipToIncidentResponderData");
const RelationshipToIncidentResponders_1 = require("./RelationshipToIncidentResponders");
const RelationshipToIncidentType_1 = require("./RelationshipToIncidentType");
const RelationshipToIncidentTypeData_1 = require("./RelationshipToIncidentTypeData");
const RelationshipToIncidentUserDefinedFieldData_1 = require("./RelationshipToIncidentUserDefinedFieldData");
const RelationshipToIncidentUserDefinedFields_1 = require("./RelationshipToIncidentUserDefinedFields");
const RelationshipToOrganization_1 = require("./RelationshipToOrganization");
const RelationshipToOrganizationData_1 = require("./RelationshipToOrganizationData");
const RelationshipToOrganizations_1 = require("./RelationshipToOrganizations");
const RelationshipToOutcome_1 = require("./RelationshipToOutcome");
const RelationshipToOutcomeData_1 = require("./RelationshipToOutcomeData");
const RelationshipToPermission_1 = require("./RelationshipToPermission");
const RelationshipToPermissionData_1 = require("./RelationshipToPermissionData");
const RelationshipToPermissions_1 = require("./RelationshipToPermissions");
const RelationshipToRole_1 = require("./RelationshipToRole");
const RelationshipToRoleData_1 = require("./RelationshipToRoleData");
const RelationshipToRoles_1 = require("./RelationshipToRoles");
const RelationshipToRule_1 = require("./RelationshipToRule");
const RelationshipToRuleData_1 = require("./RelationshipToRuleData");
const RelationshipToRuleDataObject_1 = require("./RelationshipToRuleDataObject");
const RelationshipToSAMLAssertionAttribute_1 = require("./RelationshipToSAMLAssertionAttribute");
const RelationshipToSAMLAssertionAttributeData_1 = require("./RelationshipToSAMLAssertionAttributeData");
const RelationshipToTeam_1 = require("./RelationshipToTeam");
const RelationshipToTeamData_1 = require("./RelationshipToTeamData");
const RelationshipToTeamLinkData_1 = require("./RelationshipToTeamLinkData");
const RelationshipToTeamLinks_1 = require("./RelationshipToTeamLinks");
const RelationshipToUser_1 = require("./RelationshipToUser");
const RelationshipToUserData_1 = require("./RelationshipToUserData");
const RelationshipToUserTeamPermission_1 = require("./RelationshipToUserTeamPermission");
const RelationshipToUserTeamPermissionData_1 = require("./RelationshipToUserTeamPermissionData");
const RelationshipToUserTeamTeam_1 = require("./RelationshipToUserTeamTeam");
const RelationshipToUserTeamTeamData_1 = require("./RelationshipToUserTeamTeamData");
const RelationshipToUserTeamUser_1 = require("./RelationshipToUserTeamUser");
const RelationshipToUserTeamUserData_1 = require("./RelationshipToUserTeamUserData");
const RelationshipToUsers_1 = require("./RelationshipToUsers");
const Remediation_1 = require("./Remediation");
const ReorderRetentionFiltersRequest_1 = require("./ReorderRetentionFiltersRequest");
const ReorderRuleResourceArray_1 = require("./ReorderRuleResourceArray");
const ReorderRuleResourceData_1 = require("./ReorderRuleResourceData");
const ReorderRulesetResourceArray_1 = require("./ReorderRulesetResourceArray");
const ReorderRulesetResourceData_1 = require("./ReorderRulesetResourceData");
const ResolveVulnerableSymbolsRequest_1 = require("./ResolveVulnerableSymbolsRequest");
const ResolveVulnerableSymbolsRequestData_1 = require("./ResolveVulnerableSymbolsRequestData");
const ResolveVulnerableSymbolsRequestDataAttributes_1 = require("./ResolveVulnerableSymbolsRequestDataAttributes");
const ResolveVulnerableSymbolsResponse_1 = require("./ResolveVulnerableSymbolsResponse");
const ResolveVulnerableSymbolsResponseData_1 = require("./ResolveVulnerableSymbolsResponseData");
const ResolveVulnerableSymbolsResponseDataAttributes_1 = require("./ResolveVulnerableSymbolsResponseDataAttributes");
const ResolveVulnerableSymbolsResponseResults_1 = require("./ResolveVulnerableSymbolsResponseResults");
const ResolveVulnerableSymbolsResponseResultsVulnerableSymbols_1 = require("./ResolveVulnerableSymbolsResponseResultsVulnerableSymbols");
const ResolveVulnerableSymbolsResponseResultsVulnerableSymbolsSymbols_1 = require("./ResolveVulnerableSymbolsResponseResultsVulnerableSymbolsSymbols");
const ResourceFilterAttributes_1 = require("./ResourceFilterAttributes");
const ResponseMetaAttributes_1 = require("./ResponseMetaAttributes");
const RestrictionPolicy_1 = require("./RestrictionPolicy");
const RestrictionPolicyAttributes_1 = require("./RestrictionPolicyAttributes");
const RestrictionPolicyBinding_1 = require("./RestrictionPolicyBinding");
const RestrictionPolicyResponse_1 = require("./RestrictionPolicyResponse");
const RestrictionPolicyUpdateRequest_1 = require("./RestrictionPolicyUpdateRequest");
const RestrictionQueryAttributes_1 = require("./RestrictionQueryAttributes");
const RestrictionQueryCreateAttributes_1 = require("./RestrictionQueryCreateAttributes");
const RestrictionQueryCreateData_1 = require("./RestrictionQueryCreateData");
const RestrictionQueryCreatePayload_1 = require("./RestrictionQueryCreatePayload");
const RestrictionQueryListResponse_1 = require("./RestrictionQueryListResponse");
const RestrictionQueryRole_1 = require("./RestrictionQueryRole");
const RestrictionQueryRoleAttribute_1 = require("./RestrictionQueryRoleAttribute");
const RestrictionQueryRolesResponse_1 = require("./RestrictionQueryRolesResponse");
const RestrictionQueryUpdateAttributes_1 = require("./RestrictionQueryUpdateAttributes");
const RestrictionQueryUpdateData_1 = require("./RestrictionQueryUpdateData");
const RestrictionQueryUpdatePayload_1 = require("./RestrictionQueryUpdatePayload");
const RestrictionQueryWithRelationships_1 = require("./RestrictionQueryWithRelationships");
const RestrictionQueryWithRelationshipsResponse_1 = require("./RestrictionQueryWithRelationshipsResponse");
const RestrictionQueryWithoutRelationships_1 = require("./RestrictionQueryWithoutRelationships");
const RestrictionQueryWithoutRelationshipsResponse_1 = require("./RestrictionQueryWithoutRelationshipsResponse");
const RetentionFilter_1 = require("./RetentionFilter");
const RetentionFilterAll_1 = require("./RetentionFilterAll");
const RetentionFilterAllAttributes_1 = require("./RetentionFilterAllAttributes");
const RetentionFilterAttributes_1 = require("./RetentionFilterAttributes");
const RetentionFilterCreateAttributes_1 = require("./RetentionFilterCreateAttributes");
const RetentionFilterCreateData_1 = require("./RetentionFilterCreateData");
const RetentionFilterCreateRequest_1 = require("./RetentionFilterCreateRequest");
const RetentionFilterCreateResponse_1 = require("./RetentionFilterCreateResponse");
const RetentionFilterResponse_1 = require("./RetentionFilterResponse");
const RetentionFilterUpdateAttributes_1 = require("./RetentionFilterUpdateAttributes");
const RetentionFilterUpdateData_1 = require("./RetentionFilterUpdateData");
const RetentionFilterUpdateRequest_1 = require("./RetentionFilterUpdateRequest");
const RetentionFilterWithoutAttributes_1 = require("./RetentionFilterWithoutAttributes");
const RetentionFiltersResponse_1 = require("./RetentionFiltersResponse");
const RetryStrategy_1 = require("./RetryStrategy");
const RetryStrategyLinear_1 = require("./RetryStrategyLinear");
const RevertCustomRuleRevisionRequest_1 = require("./RevertCustomRuleRevisionRequest");
const RevertCustomRuleRevisionRequestData_1 = require("./RevertCustomRuleRevisionRequestData");
const RevertCustomRuleRevisionRequestDataAttributes_1 = require("./RevertCustomRuleRevisionRequestDataAttributes");
const Role_1 = require("./Role");
const RoleAttributes_1 = require("./RoleAttributes");
const RoleClone_1 = require("./RoleClone");
const RoleCloneAttributes_1 = require("./RoleCloneAttributes");
const RoleCloneRequest_1 = require("./RoleCloneRequest");
const RoleCreateAttributes_1 = require("./RoleCreateAttributes");
const RoleCreateData_1 = require("./RoleCreateData");
const RoleCreateRequest_1 = require("./RoleCreateRequest");
const RoleCreateResponse_1 = require("./RoleCreateResponse");
const RoleCreateResponseData_1 = require("./RoleCreateResponseData");
const RoleRelationships_1 = require("./RoleRelationships");
const RoleResponse_1 = require("./RoleResponse");
const RoleResponseRelationships_1 = require("./RoleResponseRelationships");
const RoleTemplateArray_1 = require("./RoleTemplateArray");
const RoleTemplateData_1 = require("./RoleTemplateData");
const RoleTemplateDataAttributes_1 = require("./RoleTemplateDataAttributes");
const RoleUpdateAttributes_1 = require("./RoleUpdateAttributes");
const RoleUpdateData_1 = require("./RoleUpdateData");
const RoleUpdateRequest_1 = require("./RoleUpdateRequest");
const RoleUpdateResponse_1 = require("./RoleUpdateResponse");
const RoleUpdateResponseData_1 = require("./RoleUpdateResponseData");
const RolesResponse_1 = require("./RolesResponse");
const RoutingRule_1 = require("./RoutingRule");
const RoutingRuleAttributes_1 = require("./RoutingRuleAttributes");
const RoutingRuleRelationships_1 = require("./RoutingRuleRelationships");
const RoutingRuleRelationshipsPolicy_1 = require("./RoutingRuleRelationshipsPolicy");
const RoutingRuleRelationshipsPolicyData_1 = require("./RoutingRuleRelationshipsPolicyData");
const RuleAttributes_1 = require("./RuleAttributes");
const RuleOutcomeRelationships_1 = require("./RuleOutcomeRelationships");
const RuleUser_1 = require("./RuleUser");
const RuleVersionHistory_1 = require("./RuleVersionHistory");
const RuleVersions_1 = require("./RuleVersions");
const RulesValidateQueryRequest_1 = require("./RulesValidateQueryRequest");
const RulesValidateQueryRequestData_1 = require("./RulesValidateQueryRequestData");
const RulesValidateQueryRequestDataAttributes_1 = require("./RulesValidateQueryRequestDataAttributes");
const RulesValidateQueryResponse_1 = require("./RulesValidateQueryResponse");
const RulesValidateQueryResponseData_1 = require("./RulesValidateQueryResponseData");
const RulesValidateQueryResponseDataAttributes_1 = require("./RulesValidateQueryResponseDataAttributes");
const RulesetResp_1 = require("./RulesetResp");
const RulesetRespArray_1 = require("./RulesetRespArray");
const RulesetRespData_1 = require("./RulesetRespData");
const RulesetRespDataAttributes_1 = require("./RulesetRespDataAttributes");
const RulesetRespDataAttributesCreated_1 = require("./RulesetRespDataAttributesCreated");
const RulesetRespDataAttributesModified_1 = require("./RulesetRespDataAttributesModified");
const RulesetRespDataAttributesRulesItems_1 = require("./RulesetRespDataAttributesRulesItems");
const RulesetRespDataAttributesRulesItemsQuery_1 = require("./RulesetRespDataAttributesRulesItemsQuery");
const RulesetRespDataAttributesRulesItemsQueryAddition_1 = require("./RulesetRespDataAttributesRulesItemsQueryAddition");
const RulesetRespDataAttributesRulesItemsReferenceTable_1 = require("./RulesetRespDataAttributesRulesItemsReferenceTable");
const RulesetRespDataAttributesRulesItemsReferenceTableFieldPairsItems_1 = require("./RulesetRespDataAttributesRulesItemsReferenceTableFieldPairsItems");
const RumMetricCompute_1 = require("./RumMetricCompute");
const RumMetricCreateAttributes_1 = require("./RumMetricCreateAttributes");
const RumMetricCreateData_1 = require("./RumMetricCreateData");
const RumMetricCreateRequest_1 = require("./RumMetricCreateRequest");
const RumMetricFilter_1 = require("./RumMetricFilter");
const RumMetricGroupBy_1 = require("./RumMetricGroupBy");
const RumMetricResponse_1 = require("./RumMetricResponse");
const RumMetricResponseAttributes_1 = require("./RumMetricResponseAttributes");
const RumMetricResponseCompute_1 = require("./RumMetricResponseCompute");
const RumMetricResponseData_1 = require("./RumMetricResponseData");
const RumMetricResponseFilter_1 = require("./RumMetricResponseFilter");
const RumMetricResponseGroupBy_1 = require("./RumMetricResponseGroupBy");
const RumMetricResponseUniqueness_1 = require("./RumMetricResponseUniqueness");
const RumMetricUniqueness_1 = require("./RumMetricUniqueness");
const RumMetricUpdateAttributes_1 = require("./RumMetricUpdateAttributes");
const RumMetricUpdateCompute_1 = require("./RumMetricUpdateCompute");
const RumMetricUpdateData_1 = require("./RumMetricUpdateData");
const RumMetricUpdateRequest_1 = require("./RumMetricUpdateRequest");
const RumMetricsResponse_1 = require("./RumMetricsResponse");
const RumRetentionFilterAttributes_1 = require("./RumRetentionFilterAttributes");
const RumRetentionFilterCreateAttributes_1 = require("./RumRetentionFilterCreateAttributes");
const RumRetentionFilterCreateData_1 = require("./RumRetentionFilterCreateData");
const RumRetentionFilterCreateRequest_1 = require("./RumRetentionFilterCreateRequest");
const RumRetentionFilterData_1 = require("./RumRetentionFilterData");
const RumRetentionFilterResponse_1 = require("./RumRetentionFilterResponse");
const RumRetentionFilterUpdateAttributes_1 = require("./RumRetentionFilterUpdateAttributes");
const RumRetentionFilterUpdateData_1 = require("./RumRetentionFilterUpdateData");
const RumRetentionFilterUpdateRequest_1 = require("./RumRetentionFilterUpdateRequest");
const RumRetentionFiltersOrderData_1 = require("./RumRetentionFiltersOrderData");
const RumRetentionFiltersOrderRequest_1 = require("./RumRetentionFiltersOrderRequest");
const RumRetentionFiltersOrderResponse_1 = require("./RumRetentionFiltersOrderResponse");
const RumRetentionFiltersResponse_1 = require("./RumRetentionFiltersResponse");
const RunThreatHuntingJobRequest_1 = require("./RunThreatHuntingJobRequest");
const RunThreatHuntingJobRequestAttributes_1 = require("./RunThreatHuntingJobRequestAttributes");
const RunThreatHuntingJobRequestData_1 = require("./RunThreatHuntingJobRequestData");
const SAMLAssertionAttribute_1 = require("./SAMLAssertionAttribute");
const SAMLAssertionAttributeAttributes_1 = require("./SAMLAssertionAttributeAttributes");
const SBOM_1 = require("./SBOM");
const SBOMAttributes_1 = require("./SBOMAttributes");
const SBOMComponent_1 = require("./SBOMComponent");
const SBOMComponentDependency_1 = require("./SBOMComponentDependency");
const SBOMComponentLicense_1 = require("./SBOMComponentLicense");
const SBOMComponentLicenseLicense_1 = require("./SBOMComponentLicenseLicense");
const SBOMComponentProperty_1 = require("./SBOMComponentProperty");
const SBOMComponentSupplier_1 = require("./SBOMComponentSupplier");
const SBOMMetadata_1 = require("./SBOMMetadata");
const SBOMMetadataAuthor_1 = require("./SBOMMetadataAuthor");
const SBOMMetadataComponent_1 = require("./SBOMMetadataComponent");
const SLOReportPostResponse_1 = require("./SLOReportPostResponse");
const SLOReportPostResponseData_1 = require("./SLOReportPostResponseData");
const SLOReportStatusGetResponse_1 = require("./SLOReportStatusGetResponse");
const SLOReportStatusGetResponseAttributes_1 = require("./SLOReportStatusGetResponseAttributes");
const SLOReportStatusGetResponseData_1 = require("./SLOReportStatusGetResponseData");
const ScaRequest_1 = require("./ScaRequest");
const ScaRequestData_1 = require("./ScaRequestData");
const ScaRequestDataAttributes_1 = require("./ScaRequestDataAttributes");
const ScaRequestDataAttributesCommit_1 = require("./ScaRequestDataAttributesCommit");
const ScaRequestDataAttributesDependenciesItems_1 = require("./ScaRequestDataAttributesDependenciesItems");
const ScaRequestDataAttributesDependenciesItemsLocationsItems_1 = require("./ScaRequestDataAttributesDependenciesItemsLocationsItems");
const ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition_1 = require("./ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition");
const ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition_1 = require("./ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition");
const ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems_1 = require("./ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems");
const ScaRequestDataAttributesFilesItems_1 = require("./ScaRequestDataAttributesFilesItems");
const ScaRequestDataAttributesRelationsItems_1 = require("./ScaRequestDataAttributesRelationsItems");
const ScaRequestDataAttributesRepository_1 = require("./ScaRequestDataAttributesRepository");
const ScaRequestDataAttributesVulnerabilitiesItems_1 = require("./ScaRequestDataAttributesVulnerabilitiesItems");
const ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems_1 = require("./ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems");
const ScalarFormulaQueryRequest_1 = require("./ScalarFormulaQueryRequest");
const ScalarFormulaQueryResponse_1 = require("./ScalarFormulaQueryResponse");
const ScalarFormulaRequest_1 = require("./ScalarFormulaRequest");
const ScalarFormulaRequestAttributes_1 = require("./ScalarFormulaRequestAttributes");
const ScalarFormulaResponseAtrributes_1 = require("./ScalarFormulaResponseAtrributes");
const ScalarMeta_1 = require("./ScalarMeta");
const ScalarResponse_1 = require("./ScalarResponse");
const ScannedAssetMetadata_1 = require("./ScannedAssetMetadata");
const ScannedAssetMetadataAsset_1 = require("./ScannedAssetMetadataAsset");
const ScannedAssetMetadataAttributes_1 = require("./ScannedAssetMetadataAttributes");
const ScannedAssetMetadataLastSuccess_1 = require("./ScannedAssetMetadataLastSuccess");
const ScannedAssetsMetadata_1 = require("./ScannedAssetsMetadata");
const Schedule_1 = require("./Schedule");
const ScheduleCreateRequest_1 = require("./ScheduleCreateRequest");
const ScheduleCreateRequestData_1 = require("./ScheduleCreateRequestData");
const ScheduleCreateRequestDataAttributes_1 = require("./ScheduleCreateRequestDataAttributes");
const ScheduleCreateRequestDataAttributesLayersItems_1 = require("./ScheduleCreateRequestDataAttributesLayersItems");
const ScheduleCreateRequestDataRelationships_1 = require("./ScheduleCreateRequestDataRelationships");
const ScheduleData_1 = require("./ScheduleData");
const ScheduleDataAttributes_1 = require("./ScheduleDataAttributes");
const ScheduleDataRelationships_1 = require("./ScheduleDataRelationships");
const ScheduleDataRelationshipsLayers_1 = require("./ScheduleDataRelationshipsLayers");
const ScheduleDataRelationshipsLayersDataItems_1 = require("./ScheduleDataRelationshipsLayersDataItems");
const ScheduleMember_1 = require("./ScheduleMember");
const ScheduleMemberRelationships_1 = require("./ScheduleMemberRelationships");
const ScheduleMemberRelationshipsUser_1 = require("./ScheduleMemberRelationshipsUser");
const ScheduleMemberRelationshipsUserData_1 = require("./ScheduleMemberRelationshipsUserData");
const ScheduleRequestDataAttributesLayersItemsMembersItems_1 = require("./ScheduleRequestDataAttributesLayersItemsMembersItems");
const ScheduleRequestDataAttributesLayersItemsMembersItemsUser_1 = require("./ScheduleRequestDataAttributesLayersItemsMembersItemsUser");
const ScheduleTarget_1 = require("./ScheduleTarget");
const ScheduleTrigger_1 = require("./ScheduleTrigger");
const ScheduleTriggerWrapper_1 = require("./ScheduleTriggerWrapper");
const ScheduleUpdateRequest_1 = require("./ScheduleUpdateRequest");
const ScheduleUpdateRequestData_1 = require("./ScheduleUpdateRequestData");
const ScheduleUpdateRequestDataAttributes_1 = require("./ScheduleUpdateRequestDataAttributes");
const ScheduleUpdateRequestDataAttributesLayersItems_1 = require("./ScheduleUpdateRequestDataAttributesLayersItems");
const ScheduleUpdateRequestDataRelationships_1 = require("./ScheduleUpdateRequestDataRelationships");
const ScheduleUser_1 = require("./ScheduleUser");
const ScheduleUserAttributes_1 = require("./ScheduleUserAttributes");
const SeatUserData_1 = require("./SeatUserData");
const SeatUserDataArray_1 = require("./SeatUserDataArray");
const SeatUserDataAttributes_1 = require("./SeatUserDataAttributes");
const SeatUserMeta_1 = require("./SeatUserMeta");
const SecretRuleArray_1 = require("./SecretRuleArray");
const SecretRuleData_1 = require("./SecretRuleData");
const SecretRuleDataAttributes_1 = require("./SecretRuleDataAttributes");
const SecretRuleDataAttributesMatchValidation_1 = require("./SecretRuleDataAttributesMatchValidation");
const SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems_1 = require("./SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems");
const SecretRuleDataAttributesMatchValidationValidHttpStatusCodeItems_1 = require("./SecretRuleDataAttributesMatchValidationValidHttpStatusCodeItems");
const SecurityEntityConfigRisks_1 = require("./SecurityEntityConfigRisks");
const SecurityEntityMetadata_1 = require("./SecurityEntityMetadata");
const SecurityEntityRiskScore_1 = require("./SecurityEntityRiskScore");
const SecurityEntityRiskScoreAttributes_1 = require("./SecurityEntityRiskScoreAttributes");
const SecurityEntityRiskScoresMeta_1 = require("./SecurityEntityRiskScoresMeta");
const SecurityEntityRiskScoresResponse_1 = require("./SecurityEntityRiskScoresResponse");
const SecurityFilter_1 = require("./SecurityFilter");
const SecurityFilterAttributes_1 = require("./SecurityFilterAttributes");
const SecurityFilterCreateAttributes_1 = require("./SecurityFilterCreateAttributes");
const SecurityFilterCreateData_1 = require("./SecurityFilterCreateData");
const SecurityFilterCreateRequest_1 = require("./SecurityFilterCreateRequest");
const SecurityFilterExclusionFilter_1 = require("./SecurityFilterExclusionFilter");
const SecurityFilterExclusionFilterResponse_1 = require("./SecurityFilterExclusionFilterResponse");
const SecurityFilterMeta_1 = require("./SecurityFilterMeta");
const SecurityFilterResponse_1 = require("./SecurityFilterResponse");
const SecurityFilterUpdateAttributes_1 = require("./SecurityFilterUpdateAttributes");
const SecurityFilterUpdateData_1 = require("./SecurityFilterUpdateData");
const SecurityFilterUpdateRequest_1 = require("./SecurityFilterUpdateRequest");
const SecurityFiltersResponse_1 = require("./SecurityFiltersResponse");
const SecurityFindingsAttributes_1 = require("./SecurityFindingsAttributes");
const SecurityFindingsData_1 = require("./SecurityFindingsData");
const SecurityFindingsLinks_1 = require("./SecurityFindingsLinks");
const SecurityFindingsMeta_1 = require("./SecurityFindingsMeta");
const SecurityFindingsPage_1 = require("./SecurityFindingsPage");
const SecurityFindingsSearchRequest_1 = require("./SecurityFindingsSearchRequest");
const SecurityFindingsSearchRequestData_1 = require("./SecurityFindingsSearchRequestData");
const SecurityFindingsSearchRequestDataAttributes_1 = require("./SecurityFindingsSearchRequestDataAttributes");
const SecurityFindingsSearchRequestPage_1 = require("./SecurityFindingsSearchRequestPage");
const SecurityMonitoringContentPackStateAttributes_1 = require("./SecurityMonitoringContentPackStateAttributes");
const SecurityMonitoringContentPackStateData_1 = require("./SecurityMonitoringContentPackStateData");
const SecurityMonitoringContentPackStateMeta_1 = require("./SecurityMonitoringContentPackStateMeta");
const SecurityMonitoringContentPackStatesResponse_1 = require("./SecurityMonitoringContentPackStatesResponse");
const SecurityMonitoringCriticalAsset_1 = require("./SecurityMonitoringCriticalAsset");
const SecurityMonitoringCriticalAssetAttributes_1 = require("./SecurityMonitoringCriticalAssetAttributes");
const SecurityMonitoringCriticalAssetCreateAttributes_1 = require("./SecurityMonitoringCriticalAssetCreateAttributes");
const SecurityMonitoringCriticalAssetCreateData_1 = require("./SecurityMonitoringCriticalAssetCreateData");
const SecurityMonitoringCriticalAssetCreateRequest_1 = require("./SecurityMonitoringCriticalAssetCreateRequest");
const SecurityMonitoringCriticalAssetResponse_1 = require("./SecurityMonitoringCriticalAssetResponse");
const SecurityMonitoringCriticalAssetUpdateAttributes_1 = require("./SecurityMonitoringCriticalAssetUpdateAttributes");
const SecurityMonitoringCriticalAssetUpdateData_1 = require("./SecurityMonitoringCriticalAssetUpdateData");
const SecurityMonitoringCriticalAssetUpdateRequest_1 = require("./SecurityMonitoringCriticalAssetUpdateRequest");
const SecurityMonitoringCriticalAssetsResponse_1 = require("./SecurityMonitoringCriticalAssetsResponse");
const SecurityMonitoringFilter_1 = require("./SecurityMonitoringFilter");
const SecurityMonitoringListRulesResponse_1 = require("./SecurityMonitoringListRulesResponse");
const SecurityMonitoringPaginatedSuppressionsResponse_1 = require("./SecurityMonitoringPaginatedSuppressionsResponse");
const SecurityMonitoringReferenceTable_1 = require("./SecurityMonitoringReferenceTable");
const SecurityMonitoringRuleAnomalyDetectionOptions_1 = require("./SecurityMonitoringRuleAnomalyDetectionOptions");
const SecurityMonitoringRuleBulkExportAttributes_1 = require("./SecurityMonitoringRuleBulkExportAttributes");
const SecurityMonitoringRuleBulkExportData_1 = require("./SecurityMonitoringRuleBulkExportData");
const SecurityMonitoringRuleBulkExportPayload_1 = require("./SecurityMonitoringRuleBulkExportPayload");
const SecurityMonitoringRuleCase_1 = require("./SecurityMonitoringRuleCase");
const SecurityMonitoringRuleCaseAction_1 = require("./SecurityMonitoringRuleCaseAction");
const SecurityMonitoringRuleCaseActionOptions_1 = require("./SecurityMonitoringRuleCaseActionOptions");
const SecurityMonitoringRuleCaseCreate_1 = require("./SecurityMonitoringRuleCaseCreate");
const SecurityMonitoringRuleConvertResponse_1 = require("./SecurityMonitoringRuleConvertResponse");
const SecurityMonitoringRuleImpossibleTravelOptions_1 = require("./SecurityMonitoringRuleImpossibleTravelOptions");
const SecurityMonitoringRuleNewValueOptions_1 = require("./SecurityMonitoringRuleNewValueOptions");
const SecurityMonitoringRuleOptions_1 = require("./SecurityMonitoringRuleOptions");
const SecurityMonitoringRuleQueryPayload_1 = require("./SecurityMonitoringRuleQueryPayload");
const SecurityMonitoringRuleQueryPayloadData_1 = require("./SecurityMonitoringRuleQueryPayloadData");
const SecurityMonitoringRuleSequenceDetectionOptions_1 = require("./SecurityMonitoringRuleSequenceDetectionOptions");
const SecurityMonitoringRuleSequenceDetectionStep_1 = require("./SecurityMonitoringRuleSequenceDetectionStep");
const SecurityMonitoringRuleSequenceDetectionStepTransition_1 = require("./SecurityMonitoringRuleSequenceDetectionStepTransition");
const SecurityMonitoringRuleTestRequest_1 = require("./SecurityMonitoringRuleTestRequest");
const SecurityMonitoringRuleTestResponse_1 = require("./SecurityMonitoringRuleTestResponse");
const SecurityMonitoringRuleThirdPartyOptions_1 = require("./SecurityMonitoringRuleThirdPartyOptions");
const SecurityMonitoringRuleUpdatePayload_1 = require("./SecurityMonitoringRuleUpdatePayload");
const SecurityMonitoringSchedulingOptions_1 = require("./SecurityMonitoringSchedulingOptions");
const SecurityMonitoringSignal_1 = require("./SecurityMonitoringSignal");
const SecurityMonitoringSignalAssigneeUpdateAttributes_1 = require("./SecurityMonitoringSignalAssigneeUpdateAttributes");
const SecurityMonitoringSignalAssigneeUpdateData_1 = require("./SecurityMonitoringSignalAssigneeUpdateData");
const SecurityMonitoringSignalAssigneeUpdateRequest_1 = require("./SecurityMonitoringSignalAssigneeUpdateRequest");
const SecurityMonitoringSignalAttributes_1 = require("./SecurityMonitoringSignalAttributes");
const SecurityMonitoringSignalIncidentsUpdateAttributes_1 = require("./SecurityMonitoringSignalIncidentsUpdateAttributes");
const SecurityMonitoringSignalIncidentsUpdateData_1 = require("./SecurityMonitoringSignalIncidentsUpdateData");
const SecurityMonitoringSignalIncidentsUpdateRequest_1 = require("./SecurityMonitoringSignalIncidentsUpdateRequest");
const SecurityMonitoringSignalListRequest_1 = require("./SecurityMonitoringSignalListRequest");
const SecurityMonitoringSignalListRequestFilter_1 = require("./SecurityMonitoringSignalListRequestFilter");
const SecurityMonitoringSignalListRequestPage_1 = require("./SecurityMonitoringSignalListRequestPage");
const SecurityMonitoringSignalResponse_1 = require("./SecurityMonitoringSignalResponse");
const SecurityMonitoringSignalRuleCreatePayload_1 = require("./SecurityMonitoringSignalRuleCreatePayload");
const SecurityMonitoringSignalRulePayload_1 = require("./SecurityMonitoringSignalRulePayload");
const SecurityMonitoringSignalRuleQuery_1 = require("./SecurityMonitoringSignalRuleQuery");
const SecurityMonitoringSignalRuleResponse_1 = require("./SecurityMonitoringSignalRuleResponse");
const SecurityMonitoringSignalRuleResponseQuery_1 = require("./SecurityMonitoringSignalRuleResponseQuery");
const SecurityMonitoringSignalStateUpdateAttributes_1 = require("./SecurityMonitoringSignalStateUpdateAttributes");
const SecurityMonitoringSignalStateUpdateData_1 = require("./SecurityMonitoringSignalStateUpdateData");
const SecurityMonitoringSignalStateUpdateRequest_1 = require("./SecurityMonitoringSignalStateUpdateRequest");
const SecurityMonitoringSignalTriageAttributes_1 = require("./SecurityMonitoringSignalTriageAttributes");
const SecurityMonitoringSignalTriageUpdateData_1 = require("./SecurityMonitoringSignalTriageUpdateData");
const SecurityMonitoringSignalTriageUpdateResponse_1 = require("./SecurityMonitoringSignalTriageUpdateResponse");
const SecurityMonitoringSignalsListResponse_1 = require("./SecurityMonitoringSignalsListResponse");
const SecurityMonitoringSignalsListResponseLinks_1 = require("./SecurityMonitoringSignalsListResponseLinks");
const SecurityMonitoringSignalsListResponseMeta_1 = require("./SecurityMonitoringSignalsListResponseMeta");
const SecurityMonitoringSignalsListResponseMetaPage_1 = require("./SecurityMonitoringSignalsListResponseMetaPage");
const SecurityMonitoringStandardRuleCreatePayload_1 = require("./SecurityMonitoringStandardRuleCreatePayload");
const SecurityMonitoringStandardRulePayload_1 = require("./SecurityMonitoringStandardRulePayload");
const SecurityMonitoringStandardRuleQuery_1 = require("./SecurityMonitoringStandardRuleQuery");
const SecurityMonitoringStandardRuleResponse_1 = require("./SecurityMonitoringStandardRuleResponse");
const SecurityMonitoringStandardRuleTestPayload_1 = require("./SecurityMonitoringStandardRuleTestPayload");
const SecurityMonitoringSuppression_1 = require("./SecurityMonitoringSuppression");
const SecurityMonitoringSuppressionAttributes_1 = require("./SecurityMonitoringSuppressionAttributes");
const SecurityMonitoringSuppressionCreateAttributes_1 = require("./SecurityMonitoringSuppressionCreateAttributes");
const SecurityMonitoringSuppressionCreateData_1 = require("./SecurityMonitoringSuppressionCreateData");
const SecurityMonitoringSuppressionCreateRequest_1 = require("./SecurityMonitoringSuppressionCreateRequest");
const SecurityMonitoringSuppressionResponse_1 = require("./SecurityMonitoringSuppressionResponse");
const SecurityMonitoringSuppressionUpdateAttributes_1 = require("./SecurityMonitoringSuppressionUpdateAttributes");
const SecurityMonitoringSuppressionUpdateData_1 = require("./SecurityMonitoringSuppressionUpdateData");
const SecurityMonitoringSuppressionUpdateRequest_1 = require("./SecurityMonitoringSuppressionUpdateRequest");
const SecurityMonitoringSuppressionsMeta_1 = require("./SecurityMonitoringSuppressionsMeta");
const SecurityMonitoringSuppressionsPageMeta_1 = require("./SecurityMonitoringSuppressionsPageMeta");
const SecurityMonitoringSuppressionsResponse_1 = require("./SecurityMonitoringSuppressionsResponse");
const SecurityMonitoringThirdPartyRootQuery_1 = require("./SecurityMonitoringThirdPartyRootQuery");
const SecurityMonitoringThirdPartyRuleCase_1 = require("./SecurityMonitoringThirdPartyRuleCase");
const SecurityMonitoringThirdPartyRuleCaseCreate_1 = require("./SecurityMonitoringThirdPartyRuleCaseCreate");
const SecurityMonitoringTriageUser_1 = require("./SecurityMonitoringTriageUser");
const SecurityMonitoringUser_1 = require("./SecurityMonitoringUser");
const SecurityTrigger_1 = require("./SecurityTrigger");
const SecurityTriggerWrapper_1 = require("./SecurityTriggerWrapper");
const Selectors_1 = require("./Selectors");
const SelfServiceTriggerWrapper_1 = require("./SelfServiceTriggerWrapper");
const SendSlackMessageAction_1 = require("./SendSlackMessageAction");
const SendTeamsMessageAction_1 = require("./SendTeamsMessageAction");
const SensitiveDataScannerConfigRequest_1 = require("./SensitiveDataScannerConfigRequest");
const SensitiveDataScannerConfiguration_1 = require("./SensitiveDataScannerConfiguration");
const SensitiveDataScannerConfigurationData_1 = require("./SensitiveDataScannerConfigurationData");
const SensitiveDataScannerConfigurationRelationships_1 = require("./SensitiveDataScannerConfigurationRelationships");
const SensitiveDataScannerCreateGroupResponse_1 = require("./SensitiveDataScannerCreateGroupResponse");
const SensitiveDataScannerCreateRuleResponse_1 = require("./SensitiveDataScannerCreateRuleResponse");
const SensitiveDataScannerFilter_1 = require("./SensitiveDataScannerFilter");
const SensitiveDataScannerGetConfigResponse_1 = require("./SensitiveDataScannerGetConfigResponse");
const SensitiveDataScannerGetConfigResponseData_1 = require("./SensitiveDataScannerGetConfigResponseData");
const SensitiveDataScannerGroup_1 = require("./SensitiveDataScannerGroup");
const SensitiveDataScannerGroupAttributes_1 = require("./SensitiveDataScannerGroupAttributes");
const SensitiveDataScannerGroupCreate_1 = require("./SensitiveDataScannerGroupCreate");
const SensitiveDataScannerGroupCreateRequest_1 = require("./SensitiveDataScannerGroupCreateRequest");
const SensitiveDataScannerGroupData_1 = require("./SensitiveDataScannerGroupData");
const SensitiveDataScannerGroupDeleteRequest_1 = require("./SensitiveDataScannerGroupDeleteRequest");
const SensitiveDataScannerGroupDeleteResponse_1 = require("./SensitiveDataScannerGroupDeleteResponse");
const SensitiveDataScannerGroupIncludedItem_1 = require("./SensitiveDataScannerGroupIncludedItem");
const SensitiveDataScannerGroupItem_1 = require("./SensitiveDataScannerGroupItem");
const SensitiveDataScannerGroupList_1 = require("./SensitiveDataScannerGroupList");
const SensitiveDataScannerGroupRelationships_1 = require("./SensitiveDataScannerGroupRelationships");
const SensitiveDataScannerGroupResponse_1 = require("./SensitiveDataScannerGroupResponse");
const SensitiveDataScannerGroupUpdate_1 = require("./SensitiveDataScannerGroupUpdate");
const SensitiveDataScannerGroupUpdateRequest_1 = require("./SensitiveDataScannerGroupUpdateRequest");
const SensitiveDataScannerGroupUpdateResponse_1 = require("./SensitiveDataScannerGroupUpdateResponse");
const SensitiveDataScannerIncludedKeywordConfiguration_1 = require("./SensitiveDataScannerIncludedKeywordConfiguration");
const SensitiveDataScannerMeta_1 = require("./SensitiveDataScannerMeta");
const SensitiveDataScannerMetaVersionOnly_1 = require("./SensitiveDataScannerMetaVersionOnly");
const SensitiveDataScannerReorderConfig_1 = require("./SensitiveDataScannerReorderConfig");
const SensitiveDataScannerReorderGroupsResponse_1 = require("./SensitiveDataScannerReorderGroupsResponse");
const SensitiveDataScannerRule_1 = require("./SensitiveDataScannerRule");
const SensitiveDataScannerRuleAttributes_1 = require("./SensitiveDataScannerRuleAttributes");
const SensitiveDataScannerRuleCreate_1 = require("./SensitiveDataScannerRuleCreate");
const SensitiveDataScannerRuleCreateRequest_1 = require("./SensitiveDataScannerRuleCreateRequest");
const SensitiveDataScannerRuleData_1 = require("./SensitiveDataScannerRuleData");
const SensitiveDataScannerRuleDeleteRequest_1 = require("./SensitiveDataScannerRuleDeleteRequest");
const SensitiveDataScannerRuleDeleteResponse_1 = require("./SensitiveDataScannerRuleDeleteResponse");
const SensitiveDataScannerRuleIncludedItem_1 = require("./SensitiveDataScannerRuleIncludedItem");
const SensitiveDataScannerRuleRelationships_1 = require("./SensitiveDataScannerRuleRelationships");
const SensitiveDataScannerRuleResponse_1 = require("./SensitiveDataScannerRuleResponse");
const SensitiveDataScannerRuleUpdate_1 = require("./SensitiveDataScannerRuleUpdate");
const SensitiveDataScannerRuleUpdateRequest_1 = require("./SensitiveDataScannerRuleUpdateRequest");
const SensitiveDataScannerRuleUpdateResponse_1 = require("./SensitiveDataScannerRuleUpdateResponse");
const SensitiveDataScannerSamplings_1 = require("./SensitiveDataScannerSamplings");
const SensitiveDataScannerStandardPattern_1 = require("./SensitiveDataScannerStandardPattern");
const SensitiveDataScannerStandardPatternAttributes_1 = require("./SensitiveDataScannerStandardPatternAttributes");
const SensitiveDataScannerStandardPatternData_1 = require("./SensitiveDataScannerStandardPatternData");
const SensitiveDataScannerStandardPatternsResponseData_1 = require("./SensitiveDataScannerStandardPatternsResponseData");
const SensitiveDataScannerStandardPatternsResponseItem_1 = require("./SensitiveDataScannerStandardPatternsResponseItem");
const SensitiveDataScannerSuppressions_1 = require("./SensitiveDataScannerSuppressions");
const SensitiveDataScannerTextReplacement_1 = require("./SensitiveDataScannerTextReplacement");
const ServiceAccountCreateAttributes_1 = require("./ServiceAccountCreateAttributes");
const ServiceAccountCreateData_1 = require("./ServiceAccountCreateData");
const ServiceAccountCreateRequest_1 = require("./ServiceAccountCreateRequest");
const ServiceDefinitionCreateResponse_1 = require("./ServiceDefinitionCreateResponse");
const ServiceDefinitionData_1 = require("./ServiceDefinitionData");
const ServiceDefinitionDataAttributes_1 = require("./ServiceDefinitionDataAttributes");
const ServiceDefinitionGetResponse_1 = require("./ServiceDefinitionGetResponse");
const ServiceDefinitionMeta_1 = require("./ServiceDefinitionMeta");
const ServiceDefinitionMetaWarnings_1 = require("./ServiceDefinitionMetaWarnings");
const ServiceDefinitionV1_1 = require("./ServiceDefinitionV1");
const ServiceDefinitionV1Contact_1 = require("./ServiceDefinitionV1Contact");
const ServiceDefinitionV1Info_1 = require("./ServiceDefinitionV1Info");
const ServiceDefinitionV1Integrations_1 = require("./ServiceDefinitionV1Integrations");
const ServiceDefinitionV1Org_1 = require("./ServiceDefinitionV1Org");
const ServiceDefinitionV1Resource_1 = require("./ServiceDefinitionV1Resource");
const ServiceDefinitionV2_1 = require("./ServiceDefinitionV2");
const ServiceDefinitionV2Doc_1 = require("./ServiceDefinitionV2Doc");
const ServiceDefinitionV2Dot1_1 = require("./ServiceDefinitionV2Dot1");
const ServiceDefinitionV2Dot1Email_1 = require("./ServiceDefinitionV2Dot1Email");
const ServiceDefinitionV2Dot1Integrations_1 = require("./ServiceDefinitionV2Dot1Integrations");
const ServiceDefinitionV2Dot1Link_1 = require("./ServiceDefinitionV2Dot1Link");
const ServiceDefinitionV2Dot1MSTeams_1 = require("./ServiceDefinitionV2Dot1MSTeams");
const ServiceDefinitionV2Dot1Opsgenie_1 = require("./ServiceDefinitionV2Dot1Opsgenie");
const ServiceDefinitionV2Dot1Pagerduty_1 = require("./ServiceDefinitionV2Dot1Pagerduty");
const ServiceDefinitionV2Dot1Slack_1 = require("./ServiceDefinitionV2Dot1Slack");
const ServiceDefinitionV2Dot2_1 = require("./ServiceDefinitionV2Dot2");
const ServiceDefinitionV2Dot2Contact_1 = require("./ServiceDefinitionV2Dot2Contact");
const ServiceDefinitionV2Dot2Integrations_1 = require("./ServiceDefinitionV2Dot2Integrations");
const ServiceDefinitionV2Dot2Link_1 = require("./ServiceDefinitionV2Dot2Link");
const ServiceDefinitionV2Dot2Opsgenie_1 = require("./ServiceDefinitionV2Dot2Opsgenie");
const ServiceDefinitionV2Dot2Pagerduty_1 = require("./ServiceDefinitionV2Dot2Pagerduty");
const ServiceDefinitionV2Email_1 = require("./ServiceDefinitionV2Email");
const ServiceDefinitionV2Integrations_1 = require("./ServiceDefinitionV2Integrations");
const ServiceDefinitionV2Link_1 = require("./ServiceDefinitionV2Link");
const ServiceDefinitionV2MSTeams_1 = require("./ServiceDefinitionV2MSTeams");
const ServiceDefinitionV2Opsgenie_1 = require("./ServiceDefinitionV2Opsgenie");
const ServiceDefinitionV2Repo_1 = require("./ServiceDefinitionV2Repo");
const ServiceDefinitionV2Slack_1 = require("./ServiceDefinitionV2Slack");
const ServiceDefinitionsListResponse_1 = require("./ServiceDefinitionsListResponse");
const ServiceList_1 = require("./ServiceList");
const ServiceListData_1 = require("./ServiceListData");
const ServiceListDataAttributes_1 = require("./ServiceListDataAttributes");
const ServiceListDataAttributesMetadataItems_1 = require("./ServiceListDataAttributesMetadataItems");
const ServiceNowAssignmentGroupAttributes_1 = require("./ServiceNowAssignmentGroupAttributes");
const ServiceNowAssignmentGroupData_1 = require("./ServiceNowAssignmentGroupData");
const ServiceNowAssignmentGroupsResponse_1 = require("./ServiceNowAssignmentGroupsResponse");
const ServiceNowBasicAuth_1 = require("./ServiceNowBasicAuth");
const ServiceNowBasicAuthUpdate_1 = require("./ServiceNowBasicAuthUpdate");
const ServiceNowBusinessServiceAttributes_1 = require("./ServiceNowBusinessServiceAttributes");
const ServiceNowBusinessServiceData_1 = require("./ServiceNowBusinessServiceData");
const ServiceNowBusinessServicesResponse_1 = require("./ServiceNowBusinessServicesResponse");
const ServiceNowInstanceAttributes_1 = require("./ServiceNowInstanceAttributes");
const ServiceNowInstanceData_1 = require("./ServiceNowInstanceData");
const ServiceNowInstancesResponse_1 = require("./ServiceNowInstancesResponse");
const ServiceNowIntegration_1 = require("./ServiceNowIntegration");
const ServiceNowIntegrationUpdate_1 = require("./ServiceNowIntegrationUpdate");
const ServiceNowTemplateAttributes_1 = require("./ServiceNowTemplateAttributes");
const ServiceNowTemplateCreateRequest_1 = require("./ServiceNowTemplateCreateRequest");
const ServiceNowTemplateCreateRequestAttributes_1 = require("./ServiceNowTemplateCreateRequestAttributes");
const ServiceNowTemplateCreateRequestData_1 = require("./ServiceNowTemplateCreateRequestData");
const ServiceNowTemplateData_1 = require("./ServiceNowTemplateData");
const ServiceNowTemplateResponse_1 = require("./ServiceNowTemplateResponse");
const ServiceNowTemplateUpdateRequest_1 = require("./ServiceNowTemplateUpdateRequest");
const ServiceNowTemplateUpdateRequestAttributes_1 = require("./ServiceNowTemplateUpdateRequestAttributes");
const ServiceNowTemplateUpdateRequestData_1 = require("./ServiceNowTemplateUpdateRequestData");
const ServiceNowTemplatesResponse_1 = require("./ServiceNowTemplatesResponse");
const ServiceNowTicket_1 = require("./ServiceNowTicket");
const ServiceNowTicketCreateAttributes_1 = require("./ServiceNowTicketCreateAttributes");
const ServiceNowTicketCreateData_1 = require("./ServiceNowTicketCreateData");
const ServiceNowTicketCreateRequest_1 = require("./ServiceNowTicketCreateRequest");
const ServiceNowTicketResult_1 = require("./ServiceNowTicketResult");
const ServiceNowUserAttributes_1 = require("./ServiceNowUserAttributes");
const ServiceNowUserData_1 = require("./ServiceNowUserData");
const ServiceNowUsersResponse_1 = require("./ServiceNowUsersResponse");
const SessionIdArray_1 = require("./SessionIdArray");
const SessionIdData_1 = require("./SessionIdData");
const Shift_1 = require("./Shift");
const ShiftData_1 = require("./ShiftData");
const ShiftDataAttributes_1 = require("./ShiftDataAttributes");
const ShiftDataRelationships_1 = require("./ShiftDataRelationships");
const ShiftDataRelationshipsUser_1 = require("./ShiftDataRelationshipsUser");
const ShiftDataRelationshipsUserData_1 = require("./ShiftDataRelationshipsUserData");
const SimpleMonitorUserTemplate_1 = require("./SimpleMonitorUserTemplate");
const SingleAggregatedConnectionResponseArray_1 = require("./SingleAggregatedConnectionResponseArray");
const SingleAggregatedConnectionResponseData_1 = require("./SingleAggregatedConnectionResponseData");
const SingleAggregatedConnectionResponseDataAttributes_1 = require("./SingleAggregatedConnectionResponseDataAttributes");
const SingleAggregatedDnsResponseArray_1 = require("./SingleAggregatedDnsResponseArray");
const SingleAggregatedDnsResponseData_1 = require("./SingleAggregatedDnsResponseData");
const SingleAggregatedDnsResponseDataAttributes_1 = require("./SingleAggregatedDnsResponseDataAttributes");
const SingleAggregatedDnsResponseDataAttributesGroupByItems_1 = require("./SingleAggregatedDnsResponseDataAttributesGroupByItems");
const SingleAggregatedDnsResponseDataAttributesMetricsItems_1 = require("./SingleAggregatedDnsResponseDataAttributesMetricsItems");
const SlackIntegrationMetadata_1 = require("./SlackIntegrationMetadata");
const SlackIntegrationMetadataChannelItem_1 = require("./SlackIntegrationMetadataChannelItem");
const SlackTriggerWrapper_1 = require("./SlackTriggerWrapper");
const SloReportCreateRequest_1 = require("./SloReportCreateRequest");
const SloReportCreateRequestAttributes_1 = require("./SloReportCreateRequestAttributes");
const SloReportCreateRequestData_1 = require("./SloReportCreateRequestData");
const SloStatusData_1 = require("./SloStatusData");
const SloStatusDataAttributes_1 = require("./SloStatusDataAttributes");
const SloStatusResponse_1 = require("./SloStatusResponse");
const Snapshot_1 = require("./Snapshot");
const SnapshotArray_1 = require("./SnapshotArray");
const SnapshotCreateRequest_1 = require("./SnapshotCreateRequest");
const SnapshotCreateRequestData_1 = require("./SnapshotCreateRequestData");
const SnapshotCreateRequestDataAttributes_1 = require("./SnapshotCreateRequestDataAttributes");
const SnapshotData_1 = require("./SnapshotData");
const SnapshotDataAttributes_1 = require("./SnapshotDataAttributes");
const SnapshotUpdateRequest_1 = require("./SnapshotUpdateRequest");
const SnapshotUpdateRequestData_1 = require("./SnapshotUpdateRequestData");
const SnapshotUpdateRequestDataAttributes_1 = require("./SnapshotUpdateRequestDataAttributes");
const SoftwareCatalogTriggerWrapper_1 = require("./SoftwareCatalogTriggerWrapper");
const Span_1 = require("./Span");
const SpansAggregateBucket_1 = require("./SpansAggregateBucket");
const SpansAggregateBucketAttributes_1 = require("./SpansAggregateBucketAttributes");
const SpansAggregateBucketValueTimeseriesPoint_1 = require("./SpansAggregateBucketValueTimeseriesPoint");
const SpansAggregateData_1 = require("./SpansAggregateData");
const SpansAggregateRequest_1 = require("./SpansAggregateRequest");
const SpansAggregateRequestAttributes_1 = require("./SpansAggregateRequestAttributes");
const SpansAggregateResponse_1 = require("./SpansAggregateResponse");
const SpansAggregateResponseMetadata_1 = require("./SpansAggregateResponseMetadata");
const SpansAggregateSort_1 = require("./SpansAggregateSort");
const SpansAttributes_1 = require("./SpansAttributes");
const SpansCompute_1 = require("./SpansCompute");
const SpansFilter_1 = require("./SpansFilter");
const SpansFilterCreate_1 = require("./SpansFilterCreate");
const SpansGroupBy_1 = require("./SpansGroupBy");
const SpansGroupByHistogram_1 = require("./SpansGroupByHistogram");
const SpansListRequest_1 = require("./SpansListRequest");
const SpansListRequestAttributes_1 = require("./SpansListRequestAttributes");
const SpansListRequestData_1 = require("./SpansListRequestData");
const SpansListRequestPage_1 = require("./SpansListRequestPage");
const SpansListResponse_1 = require("./SpansListResponse");
const SpansListResponseLinks_1 = require("./SpansListResponseLinks");
const SpansListResponseMetadata_1 = require("./SpansListResponseMetadata");
const SpansMetricCompute_1 = require("./SpansMetricCompute");
const SpansMetricCreateAttributes_1 = require("./SpansMetricCreateAttributes");
const SpansMetricCreateData_1 = require("./SpansMetricCreateData");
const SpansMetricCreateRequest_1 = require("./SpansMetricCreateRequest");
const SpansMetricFilter_1 = require("./SpansMetricFilter");
const SpansMetricGroupBy_1 = require("./SpansMetricGroupBy");
const SpansMetricResponse_1 = require("./SpansMetricResponse");
const SpansMetricResponseAttributes_1 = require("./SpansMetricResponseAttributes");
const SpansMetricResponseCompute_1 = require("./SpansMetricResponseCompute");
const SpansMetricResponseData_1 = require("./SpansMetricResponseData");
const SpansMetricResponseFilter_1 = require("./SpansMetricResponseFilter");
const SpansMetricResponseGroupBy_1 = require("./SpansMetricResponseGroupBy");
const SpansMetricUpdateAttributes_1 = require("./SpansMetricUpdateAttributes");
const SpansMetricUpdateCompute_1 = require("./SpansMetricUpdateCompute");
const SpansMetricUpdateData_1 = require("./SpansMetricUpdateData");
const SpansMetricUpdateRequest_1 = require("./SpansMetricUpdateRequest");
const SpansMetricsResponse_1 = require("./SpansMetricsResponse");
const SpansQueryFilter_1 = require("./SpansQueryFilter");
const SpansQueryOptions_1 = require("./SpansQueryOptions");
const SpansResponseMetadataPage_1 = require("./SpansResponseMetadataPage");
const SpansWarning_1 = require("./SpansWarning");
const Spec_1 = require("./Spec");
const SplitAPIKey_1 = require("./SplitAPIKey");
const SplitAPIKeyUpdate_1 = require("./SplitAPIKeyUpdate");
const SplitIntegration_1 = require("./SplitIntegration");
const SplitIntegrationUpdate_1 = require("./SplitIntegrationUpdate");
const StateVariable_1 = require("./StateVariable");
const StateVariableProperties_1 = require("./StateVariableProperties");
const StatsigAPIKey_1 = require("./StatsigAPIKey");
const StatsigAPIKeyUpdate_1 = require("./StatsigAPIKeyUpdate");
const StatsigIntegration_1 = require("./StatsigIntegration");
const StatsigIntegrationUpdate_1 = require("./StatsigIntegrationUpdate");
const StatusPage_1 = require("./StatusPage");
const StatusPageArray_1 = require("./StatusPageArray");
const StatusPageAsIncluded_1 = require("./StatusPageAsIncluded");
const StatusPageAsIncludedAttributes_1 = require("./StatusPageAsIncludedAttributes");
const StatusPageAsIncludedAttributesComponentsItems_1 = require("./StatusPageAsIncludedAttributesComponentsItems");
const StatusPageAsIncludedAttributesComponentsItemsComponentsItems_1 = require("./StatusPageAsIncludedAttributesComponentsItemsComponentsItems");
const StatusPageAsIncludedRelationships_1 = require("./StatusPageAsIncludedRelationships");
const StatusPageAsIncludedRelationshipsCreatedByUser_1 = require("./StatusPageAsIncludedRelationshipsCreatedByUser");
const StatusPageAsIncludedRelationshipsCreatedByUserData_1 = require("./StatusPageAsIncludedRelationshipsCreatedByUserData");
const StatusPageAsIncludedRelationshipsLastModifiedByUser_1 = require("./StatusPageAsIncludedRelationshipsLastModifiedByUser");
const StatusPageAsIncludedRelationshipsLastModifiedByUserData_1 = require("./StatusPageAsIncludedRelationshipsLastModifiedByUserData");
const StatusPageData_1 = require("./StatusPageData");
const StatusPageDataAttributes_1 = require("./StatusPageDataAttributes");
const StatusPageDataAttributesComponentsItems_1 = require("./StatusPageDataAttributesComponentsItems");
const StatusPageDataAttributesComponentsItemsComponentsItems_1 = require("./StatusPageDataAttributesComponentsItemsComponentsItems");
const StatusPageDataRelationships_1 = require("./StatusPageDataRelationships");
const StatusPageDataRelationshipsCreatedByUser_1 = require("./StatusPageDataRelationshipsCreatedByUser");
const StatusPageDataRelationshipsCreatedByUserData_1 = require("./StatusPageDataRelationshipsCreatedByUserData");
const StatusPageDataRelationshipsLastModifiedByUser_1 = require("./StatusPageDataRelationshipsLastModifiedByUser");
const StatusPageDataRelationshipsLastModifiedByUserData_1 = require("./StatusPageDataRelationshipsLastModifiedByUserData");
const StatusPagesComponent_1 = require("./StatusPagesComponent");
const StatusPagesComponentArray_1 = require("./StatusPagesComponentArray");
const StatusPagesComponentData_1 = require("./StatusPagesComponentData");
const StatusPagesComponentDataAttributes_1 = require("./StatusPagesComponentDataAttributes");
const StatusPagesComponentDataAttributesComponentsItems_1 = require("./StatusPagesComponentDataAttributesComponentsItems");
const StatusPagesComponentDataRelationships_1 = require("./StatusPagesComponentDataRelationships");
const StatusPagesComponentDataRelationshipsCreatedByUser_1 = require("./StatusPagesComponentDataRelationshipsCreatedByUser");
const StatusPagesComponentDataRelationshipsCreatedByUserData_1 = require("./StatusPagesComponentDataRelationshipsCreatedByUserData");
const StatusPagesComponentDataRelationshipsGroup_1 = require("./StatusPagesComponentDataRelationshipsGroup");
const StatusPagesComponentDataRelationshipsGroupData_1 = require("./StatusPagesComponentDataRelationshipsGroupData");
const StatusPagesComponentDataRelationshipsLastModifiedByUser_1 = require("./StatusPagesComponentDataRelationshipsLastModifiedByUser");
const StatusPagesComponentDataRelationshipsLastModifiedByUserData_1 = require("./StatusPagesComponentDataRelationshipsLastModifiedByUserData");
const StatusPagesComponentDataRelationshipsStatusPage_1 = require("./StatusPagesComponentDataRelationshipsStatusPage");
const StatusPagesComponentDataRelationshipsStatusPageData_1 = require("./StatusPagesComponentDataRelationshipsStatusPageData");
const StatusPagesComponentGroup_1 = require("./StatusPagesComponentGroup");
const StatusPagesComponentGroupAttributes_1 = require("./StatusPagesComponentGroupAttributes");
const StatusPagesComponentGroupAttributesComponentsItems_1 = require("./StatusPagesComponentGroupAttributesComponentsItems");
const StatusPagesComponentGroupRelationships_1 = require("./StatusPagesComponentGroupRelationships");
const StatusPagesComponentGroupRelationshipsCreatedByUser_1 = require("./StatusPagesComponentGroupRelationshipsCreatedByUser");
const StatusPagesComponentGroupRelationshipsCreatedByUserData_1 = require("./StatusPagesComponentGroupRelationshipsCreatedByUserData");
const StatusPagesComponentGroupRelationshipsGroup_1 = require("./StatusPagesComponentGroupRelationshipsGroup");
const StatusPagesComponentGroupRelationshipsGroupData_1 = require("./StatusPagesComponentGroupRelationshipsGroupData");
const StatusPagesComponentGroupRelationshipsLastModifiedByUser_1 = require("./StatusPagesComponentGroupRelationshipsLastModifiedByUser");
const StatusPagesComponentGroupRelationshipsLastModifiedByUserData_1 = require("./StatusPagesComponentGroupRelationshipsLastModifiedByUserData");
const StatusPagesComponentGroupRelationshipsStatusPage_1 = require("./StatusPagesComponentGroupRelationshipsStatusPage");
const StatusPagesComponentGroupRelationshipsStatusPageData_1 = require("./StatusPagesComponentGroupRelationshipsStatusPageData");
const StatusPagesUser_1 = require("./StatusPagesUser");
const StatusPagesUserAttributes_1 = require("./StatusPagesUserAttributes");
const Step_1 = require("./Step");
const StepDisplay_1 = require("./StepDisplay");
const StepDisplayBounds_1 = require("./StepDisplayBounds");
const SuiteCreateEdit_1 = require("./SuiteCreateEdit");
const SuiteCreateEditRequest_1 = require("./SuiteCreateEditRequest");
const SuppressionVersionHistory_1 = require("./SuppressionVersionHistory");
const SuppressionVersions_1 = require("./SuppressionVersions");
const SyncProperty_1 = require("./SyncProperty");
const SyncPropertyWithMapping_1 = require("./SyncPropertyWithMapping");
const SyntheticsGlobalVariable_1 = require("./SyntheticsGlobalVariable");
const SyntheticsGlobalVariableAttributes_1 = require("./SyntheticsGlobalVariableAttributes");
const SyntheticsGlobalVariableOptions_1 = require("./SyntheticsGlobalVariableOptions");
const SyntheticsGlobalVariableParseTestOptions_1 = require("./SyntheticsGlobalVariableParseTestOptions");
const SyntheticsGlobalVariableTOTPParameters_1 = require("./SyntheticsGlobalVariableTOTPParameters");
const SyntheticsGlobalVariableValue_1 = require("./SyntheticsGlobalVariableValue");
const SyntheticsNetworkAssertionJitter_1 = require("./SyntheticsNetworkAssertionJitter");
const SyntheticsNetworkAssertionLatency_1 = require("./SyntheticsNetworkAssertionLatency");
const SyntheticsNetworkAssertionMultiNetworkHop_1 = require("./SyntheticsNetworkAssertionMultiNetworkHop");
const SyntheticsNetworkAssertionPacketLossPercentage_1 = require("./SyntheticsNetworkAssertionPacketLossPercentage");
const SyntheticsNetworkTest_1 = require("./SyntheticsNetworkTest");
const SyntheticsNetworkTestConfig_1 = require("./SyntheticsNetworkTestConfig");
const SyntheticsNetworkTestEdit_1 = require("./SyntheticsNetworkTestEdit");
const SyntheticsNetworkTestEditRequest_1 = require("./SyntheticsNetworkTestEditRequest");
const SyntheticsNetworkTestRequest_1 = require("./SyntheticsNetworkTestRequest");
const SyntheticsNetworkTestResponse_1 = require("./SyntheticsNetworkTestResponse");
const SyntheticsNetworkTestResponseData_1 = require("./SyntheticsNetworkTestResponseData");
const SyntheticsSuite_1 = require("./SyntheticsSuite");
const SyntheticsSuiteOptions_1 = require("./SyntheticsSuiteOptions");
const SyntheticsSuiteResponse_1 = require("./SyntheticsSuiteResponse");
const SyntheticsSuiteResponseData_1 = require("./SyntheticsSuiteResponseData");
const SyntheticsSuiteSearchResponse_1 = require("./SyntheticsSuiteSearchResponse");
const SyntheticsSuiteSearchResponseData_1 = require("./SyntheticsSuiteSearchResponseData");
const SyntheticsSuiteSearchResponseDataAttributes_1 = require("./SyntheticsSuiteSearchResponseDataAttributes");
const SyntheticsSuiteTest_1 = require("./SyntheticsSuiteTest");
const SyntheticsTestOptions_1 = require("./SyntheticsTestOptions");
const SyntheticsTestOptionsMonitorOptions_1 = require("./SyntheticsTestOptionsMonitorOptions");
const SyntheticsTestOptionsRetry_1 = require("./SyntheticsTestOptionsRetry");
const SyntheticsTestOptionsScheduling_1 = require("./SyntheticsTestOptionsScheduling");
const SyntheticsTestOptionsSchedulingTimeframe_1 = require("./SyntheticsTestOptionsSchedulingTimeframe");
const SyntheticsVariableParser_1 = require("./SyntheticsVariableParser");
const TableResultV2_1 = require("./TableResultV2");
const TableResultV2Array_1 = require("./TableResultV2Array");
const TableResultV2Data_1 = require("./TableResultV2Data");
const TableResultV2DataAttributes_1 = require("./TableResultV2DataAttributes");
const TableResultV2DataAttributesFileMetadata_1 = require("./TableResultV2DataAttributesFileMetadata");
const TableResultV2DataAttributesFileMetadataOneOfAccessDetails_1 = require("./TableResultV2DataAttributesFileMetadataOneOfAccessDetails");
const TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail_1 = require("./TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail");
const TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAzureDetail_1 = require("./TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAzureDetail");
const TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail_1 = require("./TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail");
const TableResultV2DataAttributesSchema_1 = require("./TableResultV2DataAttributesSchema");
const TableResultV2DataAttributesSchemaFieldsItems_1 = require("./TableResultV2DataAttributesSchemaFieldsItems");
const TableRowResourceArray_1 = require("./TableRowResourceArray");
const TableRowResourceData_1 = require("./TableRowResourceData");
const TableRowResourceDataAttributes_1 = require("./TableRowResourceDataAttributes");
const Team_1 = require("./Team");
const TeamAttributes_1 = require("./TeamAttributes");
const TeamConnection_1 = require("./TeamConnection");
const TeamConnectionAttributes_1 = require("./TeamConnectionAttributes");
const TeamConnectionCreateData_1 = require("./TeamConnectionCreateData");
const TeamConnectionCreateRequest_1 = require("./TeamConnectionCreateRequest");
const TeamConnectionDeleteRequest_1 = require("./TeamConnectionDeleteRequest");
const TeamConnectionDeleteRequestDataItem_1 = require("./TeamConnectionDeleteRequestDataItem");
const TeamConnectionRelationships_1 = require("./TeamConnectionRelationships");
const TeamConnectionsResponse_1 = require("./TeamConnectionsResponse");
const TeamCreate_1 = require("./TeamCreate");
const TeamCreateAttributes_1 = require("./TeamCreateAttributes");
const TeamCreateRelationships_1 = require("./TeamCreateRelationships");
const TeamCreateRequest_1 = require("./TeamCreateRequest");
const TeamHierarchyLink_1 = require("./TeamHierarchyLink");
const TeamHierarchyLinkAttributes_1 = require("./TeamHierarchyLinkAttributes");
const TeamHierarchyLinkCreate_1 = require("./TeamHierarchyLinkCreate");
const TeamHierarchyLinkCreateRelationships_1 = require("./TeamHierarchyLinkCreateRelationships");
const TeamHierarchyLinkCreateRequest_1 = require("./TeamHierarchyLinkCreateRequest");
const TeamHierarchyLinkCreateTeam_1 = require("./TeamHierarchyLinkCreateTeam");
const TeamHierarchyLinkCreateTeamRelationship_1 = require("./TeamHierarchyLinkCreateTeamRelationship");
const TeamHierarchyLinkRelationships_1 = require("./TeamHierarchyLinkRelationships");
const TeamHierarchyLinkResponse_1 = require("./TeamHierarchyLinkResponse");
const TeamHierarchyLinkTeam_1 = require("./TeamHierarchyLinkTeam");
const TeamHierarchyLinkTeamAttributes_1 = require("./TeamHierarchyLinkTeamAttributes");
const TeamHierarchyLinkTeamRelationship_1 = require("./TeamHierarchyLinkTeamRelationship");
const TeamHierarchyLinksResponse_1 = require("./TeamHierarchyLinksResponse");
const TeamLink_1 = require("./TeamLink");
const TeamLinkAttributes_1 = require("./TeamLinkAttributes");
const TeamLinkCreate_1 = require("./TeamLinkCreate");
const TeamLinkCreateRequest_1 = require("./TeamLinkCreateRequest");
const TeamLinkResponse_1 = require("./TeamLinkResponse");
const TeamLinksResponse_1 = require("./TeamLinksResponse");
const TeamNotificationRule_1 = require("./TeamNotificationRule");
const TeamNotificationRuleAttributes_1 = require("./TeamNotificationRuleAttributes");
const TeamNotificationRuleAttributesEmail_1 = require("./TeamNotificationRuleAttributesEmail");
const TeamNotificationRuleAttributesMsTeams_1 = require("./TeamNotificationRuleAttributesMsTeams");
const TeamNotificationRuleAttributesPagerduty_1 = require("./TeamNotificationRuleAttributesPagerduty");
const TeamNotificationRuleAttributesSlack_1 = require("./TeamNotificationRuleAttributesSlack");
const TeamNotificationRuleRequest_1 = require("./TeamNotificationRuleRequest");
const TeamNotificationRuleResponse_1 = require("./TeamNotificationRuleResponse");
const TeamNotificationRulesResponse_1 = require("./TeamNotificationRulesResponse");
const TeamNotificationRulesResponseMeta_1 = require("./TeamNotificationRulesResponseMeta");
const TeamNotificationRulesResponseMetaPage_1 = require("./TeamNotificationRulesResponseMetaPage");
const TeamOnCallResponders_1 = require("./TeamOnCallResponders");
const TeamOnCallRespondersData_1 = require("./TeamOnCallRespondersData");
const TeamOnCallRespondersDataRelationships_1 = require("./TeamOnCallRespondersDataRelationships");
const TeamOnCallRespondersDataRelationshipsEscalations_1 = require("./TeamOnCallRespondersDataRelationshipsEscalations");
const TeamOnCallRespondersDataRelationshipsEscalationsDataItems_1 = require("./TeamOnCallRespondersDataRelationshipsEscalationsDataItems");
const TeamOnCallRespondersDataRelationshipsResponders_1 = require("./TeamOnCallRespondersDataRelationshipsResponders");
const TeamOnCallRespondersDataRelationshipsRespondersDataItems_1 = require("./TeamOnCallRespondersDataRelationshipsRespondersDataItems");
const TeamPermissionSetting_1 = require("./TeamPermissionSetting");
const TeamPermissionSettingAttributes_1 = require("./TeamPermissionSettingAttributes");
const TeamPermissionSettingResponse_1 = require("./TeamPermissionSettingResponse");
const TeamPermissionSettingUpdate_1 = require("./TeamPermissionSettingUpdate");
const TeamPermissionSettingUpdateAttributes_1 = require("./TeamPermissionSettingUpdateAttributes");
const TeamPermissionSettingUpdateRequest_1 = require("./TeamPermissionSettingUpdateRequest");
const TeamPermissionSettingsResponse_1 = require("./TeamPermissionSettingsResponse");
const TeamRef_1 = require("./TeamRef");
const TeamRefData_1 = require("./TeamRefData");
const TeamReference_1 = require("./TeamReference");
const TeamReferenceAttributes_1 = require("./TeamReferenceAttributes");
const TeamRelationships_1 = require("./TeamRelationships");
const TeamRelationshipsLinks_1 = require("./TeamRelationshipsLinks");
const TeamResponse_1 = require("./TeamResponse");
const TeamRoutingRules_1 = require("./TeamRoutingRules");
const TeamRoutingRulesData_1 = require("./TeamRoutingRulesData");
const TeamRoutingRulesDataRelationships_1 = require("./TeamRoutingRulesDataRelationships");
const TeamRoutingRulesDataRelationshipsRules_1 = require("./TeamRoutingRulesDataRelationshipsRules");
const TeamRoutingRulesDataRelationshipsRulesDataItems_1 = require("./TeamRoutingRulesDataRelationshipsRulesDataItems");
const TeamRoutingRulesRequest_1 = require("./TeamRoutingRulesRequest");
const TeamRoutingRulesRequestData_1 = require("./TeamRoutingRulesRequestData");
const TeamRoutingRulesRequestDataAttributes_1 = require("./TeamRoutingRulesRequestDataAttributes");
const TeamRoutingRulesRequestRule_1 = require("./TeamRoutingRulesRequestRule");
const TeamSyncAttributes_1 = require("./TeamSyncAttributes");
const TeamSyncData_1 = require("./TeamSyncData");
const TeamSyncRequest_1 = require("./TeamSyncRequest");
const TeamSyncResponse_1 = require("./TeamSyncResponse");
const TeamTarget_1 = require("./TeamTarget");
const TeamUpdate_1 = require("./TeamUpdate");
const TeamUpdateAttributes_1 = require("./TeamUpdateAttributes");
const TeamUpdateRelationships_1 = require("./TeamUpdateRelationships");
const TeamUpdateRequest_1 = require("./TeamUpdateRequest");
const TeamsHierarchyLinksResponseLinks_1 = require("./TeamsHierarchyLinksResponseLinks");
const TeamsHierarchyLinksResponseMeta_1 = require("./TeamsHierarchyLinksResponseMeta");
const TeamsHierarchyLinksResponseMetaPage_1 = require("./TeamsHierarchyLinksResponseMetaPage");
const TeamsResponse_1 = require("./TeamsResponse");
const TeamsResponseLinks_1 = require("./TeamsResponseLinks");
const TeamsResponseMeta_1 = require("./TeamsResponseMeta");
const TeamsResponseMetaPagination_1 = require("./TeamsResponseMetaPagination");
const TenancyConfig_1 = require("./TenancyConfig");
const TenancyConfigData_1 = require("./TenancyConfigData");
const TenancyConfigDataAttributes_1 = require("./TenancyConfigDataAttributes");
const TenancyConfigDataAttributesLogsConfig_1 = require("./TenancyConfigDataAttributesLogsConfig");
const TenancyConfigDataAttributesMetricsConfig_1 = require("./TenancyConfigDataAttributesMetricsConfig");
const TenancyConfigDataAttributesRegionsConfig_1 = require("./TenancyConfigDataAttributesRegionsConfig");
const TenancyConfigList_1 = require("./TenancyConfigList");
const TenancyProductsData_1 = require("./TenancyProductsData");
const TenancyProductsDataAttributes_1 = require("./TenancyProductsDataAttributes");
const TenancyProductsDataAttributesProductsItems_1 = require("./TenancyProductsDataAttributesProductsItems");
const TenancyProductsList_1 = require("./TenancyProductsList");
const ThreatHuntingJobListMeta_1 = require("./ThreatHuntingJobListMeta");
const ThreatHuntingJobOptions_1 = require("./ThreatHuntingJobOptions");
const ThreatHuntingJobQuery_1 = require("./ThreatHuntingJobQuery");
const ThreatHuntingJobResponse_1 = require("./ThreatHuntingJobResponse");
const ThreatHuntingJobResponseAttributes_1 = require("./ThreatHuntingJobResponseAttributes");
const ThreatHuntingJobResponseData_1 = require("./ThreatHuntingJobResponseData");
const TimeRestriction_1 = require("./TimeRestriction");
const TimeRestrictions_1 = require("./TimeRestrictions");
const TimelineCell_1 = require("./TimelineCell");
const TimelineCellAuthorUser_1 = require("./TimelineCellAuthorUser");
const TimelineCellAuthorUserContent_1 = require("./TimelineCellAuthorUserContent");
const TimelineCellContentComment_1 = require("./TimelineCellContentComment");
const TimelineCellResource_1 = require("./TimelineCellResource");
const TimelineResponse_1 = require("./TimelineResponse");
const TimeseriesFormulaQueryRequest_1 = require("./TimeseriesFormulaQueryRequest");
const TimeseriesFormulaQueryResponse_1 = require("./TimeseriesFormulaQueryResponse");
const TimeseriesFormulaRequest_1 = require("./TimeseriesFormulaRequest");
const TimeseriesFormulaRequestAttributes_1 = require("./TimeseriesFormulaRequestAttributes");
const TimeseriesResponse_1 = require("./TimeseriesResponse");
const TimeseriesResponseAttributes_1 = require("./TimeseriesResponseAttributes");
const TimeseriesResponseSeries_1 = require("./TimeseriesResponseSeries");
const TriggerRateLimit_1 = require("./TriggerRateLimit");
const UCConfigPair_1 = require("./UCConfigPair");
const UCConfigPairData_1 = require("./UCConfigPairData");
const UCConfigPairDataAttributes_1 = require("./UCConfigPairDataAttributes");
const UCConfigPairDataAttributesConfigsItems_1 = require("./UCConfigPairDataAttributesConfigsItems");
const UnassignSeatsUserRequest_1 = require("./UnassignSeatsUserRequest");
const UnassignSeatsUserRequestData_1 = require("./UnassignSeatsUserRequestData");
const UnassignSeatsUserRequestDataAttributes_1 = require("./UnassignSeatsUserRequestDataAttributes");
const Unit_1 = require("./Unit");
const UnpublishAppResponse_1 = require("./UnpublishAppResponse");
const UpdateActionConnectionRequest_1 = require("./UpdateActionConnectionRequest");
const UpdateActionConnectionResponse_1 = require("./UpdateActionConnectionResponse");
const UpdateAppRequest_1 = require("./UpdateAppRequest");
const UpdateAppRequestData_1 = require("./UpdateAppRequestData");
const UpdateAppRequestDataAttributes_1 = require("./UpdateAppRequestDataAttributes");
const UpdateAppResponse_1 = require("./UpdateAppResponse");
const UpdateAppResponseData_1 = require("./UpdateAppResponseData");
const UpdateAppResponseDataAttributes_1 = require("./UpdateAppResponseDataAttributes");
const UpdateAppsDatastoreItemRequest_1 = require("./UpdateAppsDatastoreItemRequest");
const UpdateAppsDatastoreItemRequestData_1 = require("./UpdateAppsDatastoreItemRequestData");
const UpdateAppsDatastoreItemRequestDataAttributes_1 = require("./UpdateAppsDatastoreItemRequestDataAttributes");
const UpdateAppsDatastoreItemRequestDataAttributesItemChanges_1 = require("./UpdateAppsDatastoreItemRequestDataAttributesItemChanges");
const UpdateAppsDatastoreRequest_1 = require("./UpdateAppsDatastoreRequest");
const UpdateAppsDatastoreRequestData_1 = require("./UpdateAppsDatastoreRequestData");
const UpdateAppsDatastoreRequestDataAttributes_1 = require("./UpdateAppsDatastoreRequestDataAttributes");
const UpdateConnectionRequest_1 = require("./UpdateConnectionRequest");
const UpdateConnectionRequestData_1 = require("./UpdateConnectionRequestData");
const UpdateConnectionRequestDataAttributes_1 = require("./UpdateConnectionRequestDataAttributes");
const UpdateConnectionRequestDataAttributesFieldsToUpdateItems_1 = require("./UpdateConnectionRequestDataAttributesFieldsToUpdateItems");
const UpdateCustomFrameworkRequest_1 = require("./UpdateCustomFrameworkRequest");
const UpdateCustomFrameworkResponse_1 = require("./UpdateCustomFrameworkResponse");
const UpdateDeploymentGateParams_1 = require("./UpdateDeploymentGateParams");
const UpdateDeploymentGateParamsData_1 = require("./UpdateDeploymentGateParamsData");
const UpdateDeploymentGateParamsDataAttributes_1 = require("./UpdateDeploymentGateParamsDataAttributes");
const UpdateDeploymentRuleParams_1 = require("./UpdateDeploymentRuleParams");
const UpdateDeploymentRuleParamsData_1 = require("./UpdateDeploymentRuleParamsData");
const UpdateDeploymentRuleParamsDataAttributes_1 = require("./UpdateDeploymentRuleParamsDataAttributes");
const UpdateFlakyTestsRequest_1 = require("./UpdateFlakyTestsRequest");
const UpdateFlakyTestsRequestAttributes_1 = require("./UpdateFlakyTestsRequestAttributes");
const UpdateFlakyTestsRequestData_1 = require("./UpdateFlakyTestsRequestData");
const UpdateFlakyTestsRequestTest_1 = require("./UpdateFlakyTestsRequestTest");
const UpdateFlakyTestsResponse_1 = require("./UpdateFlakyTestsResponse");
const UpdateFlakyTestsResponseAttributes_1 = require("./UpdateFlakyTestsResponseAttributes");
const UpdateFlakyTestsResponseData_1 = require("./UpdateFlakyTestsResponseData");
const UpdateFlakyTestsResponseResult_1 = require("./UpdateFlakyTestsResponseResult");
const UpdateOnCallNotificationRuleRequest_1 = require("./UpdateOnCallNotificationRuleRequest");
const UpdateOnCallNotificationRuleRequestAttributes_1 = require("./UpdateOnCallNotificationRuleRequestAttributes");
const UpdateOnCallNotificationRuleRequestData_1 = require("./UpdateOnCallNotificationRuleRequestData");
const UpdateOpenAPIResponse_1 = require("./UpdateOpenAPIResponse");
const UpdateOpenAPIResponseAttributes_1 = require("./UpdateOpenAPIResponseAttributes");
const UpdateOpenAPIResponseData_1 = require("./UpdateOpenAPIResponseData");
const UpdateOutcomesAsyncAttributes_1 = require("./UpdateOutcomesAsyncAttributes");
const UpdateOutcomesAsyncRequest_1 = require("./UpdateOutcomesAsyncRequest");
const UpdateOutcomesAsyncRequestData_1 = require("./UpdateOutcomesAsyncRequestData");
const UpdateOutcomesAsyncRequestItem_1 = require("./UpdateOutcomesAsyncRequestItem");
const UpdateResourceEvaluationFiltersRequest_1 = require("./UpdateResourceEvaluationFiltersRequest");
const UpdateResourceEvaluationFiltersRequestData_1 = require("./UpdateResourceEvaluationFiltersRequestData");
const UpdateResourceEvaluationFiltersResponse_1 = require("./UpdateResourceEvaluationFiltersResponse");
const UpdateResourceEvaluationFiltersResponseData_1 = require("./UpdateResourceEvaluationFiltersResponseData");
const UpdateRuleRequest_1 = require("./UpdateRuleRequest");
const UpdateRuleRequestData_1 = require("./UpdateRuleRequestData");
const UpdateRuleResponse_1 = require("./UpdateRuleResponse");
const UpdateRuleResponseData_1 = require("./UpdateRuleResponseData");
const UpdateRulesetRequest_1 = require("./UpdateRulesetRequest");
const UpdateRulesetRequestData_1 = require("./UpdateRulesetRequestData");
const UpdateRulesetRequestDataAttributes_1 = require("./UpdateRulesetRequestDataAttributes");
const UpdateRulesetRequestDataAttributesRulesItems_1 = require("./UpdateRulesetRequestDataAttributesRulesItems");
const UpdateRulesetRequestDataAttributesRulesItemsQuery_1 = require("./UpdateRulesetRequestDataAttributesRulesItemsQuery");
const UpdateRulesetRequestDataAttributesRulesItemsQueryAddition_1 = require("./UpdateRulesetRequestDataAttributesRulesItemsQueryAddition");
const UpdateRulesetRequestDataAttributesRulesItemsReferenceTable_1 = require("./UpdateRulesetRequestDataAttributesRulesItemsReferenceTable");
const UpdateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems_1 = require("./UpdateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems");
const UpdateTenancyConfigData_1 = require("./UpdateTenancyConfigData");
const UpdateTenancyConfigDataAttributes_1 = require("./UpdateTenancyConfigDataAttributes");
const UpdateTenancyConfigDataAttributesAuthCredentials_1 = require("./UpdateTenancyConfigDataAttributesAuthCredentials");
const UpdateTenancyConfigDataAttributesLogsConfig_1 = require("./UpdateTenancyConfigDataAttributesLogsConfig");
const UpdateTenancyConfigDataAttributesMetricsConfig_1 = require("./UpdateTenancyConfigDataAttributesMetricsConfig");
const UpdateTenancyConfigDataAttributesRegionsConfig_1 = require("./UpdateTenancyConfigDataAttributesRegionsConfig");
const UpdateTenancyConfigRequest_1 = require("./UpdateTenancyConfigRequest");
const UpdateWorkflowRequest_1 = require("./UpdateWorkflowRequest");
const UpdateWorkflowResponse_1 = require("./UpdateWorkflowResponse");
const UpsertCatalogEntityResponse_1 = require("./UpsertCatalogEntityResponse");
const UpsertCatalogKindResponse_1 = require("./UpsertCatalogKindResponse");
const UrlParam_1 = require("./UrlParam");
const UrlParamUpdate_1 = require("./UrlParamUpdate");
const UsageApplicationSecurityMonitoringResponse_1 = require("./UsageApplicationSecurityMonitoringResponse");
const UsageAttributesObject_1 = require("./UsageAttributesObject");
const UsageAttributionTypesAttributes_1 = require("./UsageAttributionTypesAttributes");
const UsageAttributionTypesBody_1 = require("./UsageAttributionTypesBody");
const UsageAttributionTypesResponse_1 = require("./UsageAttributionTypesResponse");
const UsageDataObject_1 = require("./UsageDataObject");
const UsageLambdaTracedInvocationsResponse_1 = require("./UsageLambdaTracedInvocationsResponse");
const UsageObservabilityPipelinesResponse_1 = require("./UsageObservabilityPipelinesResponse");
const UsageTimeSeriesObject_1 = require("./UsageTimeSeriesObject");
const User_1 = require("./User");
const UserAttributes_1 = require("./UserAttributes");
const UserCreateAttributes_1 = require("./UserCreateAttributes");
const UserCreateData_1 = require("./UserCreateData");
const UserCreateRequest_1 = require("./UserCreateRequest");
const UserInvitationData_1 = require("./UserInvitationData");
const UserInvitationDataAttributes_1 = require("./UserInvitationDataAttributes");
const UserInvitationRelationships_1 = require("./UserInvitationRelationships");
const UserInvitationResponse_1 = require("./UserInvitationResponse");
const UserInvitationResponseData_1 = require("./UserInvitationResponseData");
const UserInvitationsRequest_1 = require("./UserInvitationsRequest");
const UserInvitationsResponse_1 = require("./UserInvitationsResponse");
const UserRelationshipData_1 = require("./UserRelationshipData");
const UserRelationships_1 = require("./UserRelationships");
const UserResponse_1 = require("./UserResponse");
const UserResponseRelationships_1 = require("./UserResponseRelationships");
const UserTarget_1 = require("./UserTarget");
const UserTeam_1 = require("./UserTeam");
const UserTeamAttributes_1 = require("./UserTeamAttributes");
const UserTeamCreate_1 = require("./UserTeamCreate");
const UserTeamPermission_1 = require("./UserTeamPermission");
const UserTeamPermissionAttributes_1 = require("./UserTeamPermissionAttributes");
const UserTeamRelationships_1 = require("./UserTeamRelationships");
const UserTeamRequest_1 = require("./UserTeamRequest");
const UserTeamResponse_1 = require("./UserTeamResponse");
const UserTeamUpdate_1 = require("./UserTeamUpdate");
const UserTeamUpdateRequest_1 = require("./UserTeamUpdateRequest");
const UserTeamsResponse_1 = require("./UserTeamsResponse");
const UserUpdateAttributes_1 = require("./UserUpdateAttributes");
const UserUpdateData_1 = require("./UserUpdateData");
const UserUpdateRequest_1 = require("./UserUpdateRequest");
const UsersRelationship_1 = require("./UsersRelationship");
const UsersResponse_1 = require("./UsersResponse");
const V2Event_1 = require("./V2Event");
const V2EventAttributes_1 = require("./V2EventAttributes");
const V2EventResponse_1 = require("./V2EventResponse");
const ValidationError_1 = require("./ValidationError");
const ValidationErrorMeta_1 = require("./ValidationErrorMeta");
const ValidationResponse_1 = require("./ValidationResponse");
const VersionHistoryUpdate_1 = require("./VersionHistoryUpdate");
const ViewershipHistorySessionArray_1 = require("./ViewershipHistorySessionArray");
const ViewershipHistorySessionData_1 = require("./ViewershipHistorySessionData");
const ViewershipHistorySessionDataAttributes_1 = require("./ViewershipHistorySessionDataAttributes");
const VirusTotalAPIKey_1 = require("./VirusTotalAPIKey");
const VirusTotalAPIKeyUpdate_1 = require("./VirusTotalAPIKeyUpdate");
const VirusTotalIntegration_1 = require("./VirusTotalIntegration");
const VirusTotalIntegrationUpdate_1 = require("./VirusTotalIntegrationUpdate");
const Vulnerability_1 = require("./Vulnerability");
const VulnerabilityAdvisory_1 = require("./VulnerabilityAdvisory");
const VulnerabilityAttributes_1 = require("./VulnerabilityAttributes");
const VulnerabilityCvss_1 = require("./VulnerabilityCvss");
const VulnerabilityDependencyLocations_1 = require("./VulnerabilityDependencyLocations");
const VulnerabilityRelationships_1 = require("./VulnerabilityRelationships");
const VulnerabilityRelationshipsAffects_1 = require("./VulnerabilityRelationshipsAffects");
const VulnerabilityRelationshipsAffectsData_1 = require("./VulnerabilityRelationshipsAffectsData");
const VulnerabilityRisks_1 = require("./VulnerabilityRisks");
const Watch_1 = require("./Watch");
const WatchData_1 = require("./WatchData");
const WatchDataAttributes_1 = require("./WatchDataAttributes");
const WatcherArray_1 = require("./WatcherArray");
const WatcherData_1 = require("./WatcherData");
const WatcherDataAttributes_1 = require("./WatcherDataAttributes");
const WorkflowData_1 = require("./WorkflowData");
const WorkflowDataAttributes_1 = require("./WorkflowDataAttributes");
const WorkflowDataRelationships_1 = require("./WorkflowDataRelationships");
const WorkflowDataUpdate_1 = require("./WorkflowDataUpdate");
const WorkflowDataUpdateAttributes_1 = require("./WorkflowDataUpdateAttributes");
const WorkflowInstanceCreateMeta_1 = require("./WorkflowInstanceCreateMeta");
const WorkflowInstanceCreateRequest_1 = require("./WorkflowInstanceCreateRequest");
const WorkflowInstanceCreateResponse_1 = require("./WorkflowInstanceCreateResponse");
const WorkflowInstanceCreateResponseData_1 = require("./WorkflowInstanceCreateResponseData");
const WorkflowInstanceListItem_1 = require("./WorkflowInstanceListItem");
const WorkflowListInstancesResponse_1 = require("./WorkflowListInstancesResponse");
const WorkflowListInstancesResponseMeta_1 = require("./WorkflowListInstancesResponseMeta");
const WorkflowListInstancesResponseMetaPage_1 = require("./WorkflowListInstancesResponseMetaPage");
const WorkflowTriggerWrapper_1 = require("./WorkflowTriggerWrapper");
const WorkflowUserRelationship_1 = require("./WorkflowUserRelationship");
const WorkflowUserRelationshipData_1 = require("./WorkflowUserRelationshipData");
const WorklflowCancelInstanceResponse_1 = require("./WorklflowCancelInstanceResponse");
const WorklflowCancelInstanceResponseData_1 = require("./WorklflowCancelInstanceResponseData");
const WorklflowGetInstanceResponse_1 = require("./WorklflowGetInstanceResponse");
const WorklflowGetInstanceResponseData_1 = require("./WorklflowGetInstanceResponseData");
const WorklflowGetInstanceResponseDataAttributes_1 = require("./WorklflowGetInstanceResponseDataAttributes");
const XRayServicesIncludeAll_1 = require("./XRayServicesIncludeAll");
const XRayServicesIncludeOnly_1 = require("./XRayServicesIncludeOnly");
const ZoomConfigurationReference_1 = require("./ZoomConfigurationReference");
const ZoomConfigurationReferenceData_1 = require("./ZoomConfigurationReferenceData");
const util_1 = require("../../datadog-api-client-common/util");
const logger_1 = require("../../../logger");
const primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
];
const ARRAY_PREFIX = "Array<";
const MAP_PREFIX = "{ [key: string]: ";
const TUPLE_PREFIX = "[";
const supportedMediaTypes = {
    "application/json": Infinity,
    "text/json": 100,
    "application/octet-stream": 0,
};
const enumsMap = {
    APIKeysSort: [
        "created_at",
        "-created_at",
        "last4",
        "-last4",
        "modified_at",
        "-modified_at",
        "name",
        "-name",
    ],
    APIKeysType: ["api_keys"],
    AWSAccountPartition: ["aws", "aws-cn", "aws-us-gov"],
    AWSAccountType: ["account"],
    AWSAssumeRoleType: ["AWSAssumeRole"],
    AWSCloudAuthPersonaMappingType: ["aws_cloud_auth_config"],
    AWSEventBridgeCreateStatus: ["created"],
    AWSEventBridgeDeleteStatus: ["empty"],
    AWSEventBridgeType: ["event_bridge"],
    AWSIntegrationIamPermissionsResponseDataType: ["permissions"],
    AWSIntegrationType: ["AWS"],
    AWSLogsServicesResponseDataType: ["logs_services"],
    AWSNamespacesResponseDataType: ["namespaces"],
    AWSNewExternalIDResponseDataType: ["external_id"],
    ActionConnectionDataType: ["action_connection"],
    ActionQueryType: ["action"],
    ActiveBillingDimensionsType: ["billing_dimensions"],
    AlertEventAttributesLinksItemCategory: [
        "runbook",
        "documentation",
        "dashboard",
    ],
    AlertEventAttributesPriority: ["1", "2", "3", "4", "5"],
    AlertEventAttributesStatus: ["warn", "error", "ok"],
    AlertEventCustomAttributesLinksItemsCategory: [
        "runbook",
        "documentation",
        "dashboard",
        "resource",
    ],
    AlertEventCustomAttributesPriority: ["1", "2", "3", "4", "5"],
    AlertEventCustomAttributesStatus: ["warn", "error", "ok"],
    AnthropicAPIKeyType: ["AnthropicAPIKey"],
    AnthropicIntegrationType: ["Anthropic"],
    ApmRetentionFilterType: ["apm_retention_filter"],
    AppBuilderEventName: [
        "pageChange",
        "tableRowClick",
        "_tableRowButtonClick",
        "change",
        "submit",
        "click",
        "toggleOpen",
        "close",
        "open",
        "executionFinished",
    ],
    AppBuilderEventType: [
        "custom",
        "setComponentState",
        "triggerQuery",
        "openModal",
        "closeModal",
        "openUrl",
        "downloadFile",
        "setStateVariableValue",
    ],
    AppDefinitionType: ["appDefinitions"],
    AppDeploymentType: ["deployment"],
    AppKeyRegistrationDataType: ["app_key_registration"],
    ApplicationKeysSort: [
        "created_at",
        "-created_at",
        "last4",
        "-last4",
        "name",
        "-name",
    ],
    ApplicationKeysType: ["application_keys"],
    ApplicationSecurityWafCustomRuleActionAction: [
        "redirect_request",
        "block_request",
    ],
    ApplicationSecurityWafCustomRuleConditionInputAddress: [
        "server.db.statement",
        "server.io.fs.file",
        "server.io.net.url",
        "server.sys.shell.cmd",
        "server.request.method",
        "server.request.uri.raw",
        "server.request.path_params",
        "server.request.query",
        "server.request.headers.no_cookies",
        "server.request.cookies",
        "server.request.trailers",
        "server.request.body",
        "server.response.status",
        "server.response.headers.no_cookies",
        "server.response.trailers",
        "grpc.server.request.metadata",
        "grpc.server.request.message",
        "grpc.server.method",
        "graphql.server.all_resolvers",
        "usr.id",
        "http.client_ip",
    ],
    ApplicationSecurityWafCustomRuleConditionOperator: [
        "match_regex",
        "!match_regex",
        "phrase_match",
        "!phrase_match",
        "is_xss",
        "is_sqli",
        "exact_match",
        "!exact_match",
        "ip_match",
        "!ip_match",
        "capture_data",
    ],
    ApplicationSecurityWafCustomRuleTagsCategory: [
        "attack_attempt",
        "business_logic",
        "security_response",
    ],
    ApplicationSecurityWafCustomRuleType: ["custom_rule"],
    ApplicationSecurityWafExclusionFilterOnMatch: ["monitor"],
    ApplicationSecurityWafExclusionFilterType: ["exclusion_filter"],
    AppsSortField: [
        "name",
        "created_at",
        "updated_at",
        "user_name",
        "-name",
        "-created_at",
        "-updated_at",
        "-user_name",
    ],
    ArbitraryCostUpsertRequestDataType: ["upsert_arbitrary_rule"],
    ArbitraryRuleResponseDataType: ["arbitrary_rule"],
    AsanaAccessTokenType: ["AsanaAccessToken"],
    AsanaIntegrationType: ["Asana"],
    AssetEntityType: ["assets"],
    AssetType: ["Repository", "Service", "Host", "HostImage", "Image"],
    AttachmentDataAttributesAttachmentType: ["postmortem", "link"],
    AuditLogsEventType: ["audit"],
    AuditLogsResponseStatus: ["done", "timeout"],
    AuditLogsSort: ["timestamp", "-timestamp"],
    AuthNMappingResourceType: ["role", "team"],
    AuthNMappingsSort: [
        "created_at",
        "-created_at",
        "role_id",
        "-role_id",
        "saml_assertion_attribute_id",
        "-saml_assertion_attribute_id",
        "role.name",
        "-role.name",
        "saml_assertion_attribute.attribute_key",
        "-saml_assertion_attribute.attribute_key",
        "saml_assertion_attribute.attribute_value",
        "-saml_assertion_attribute.attribute_value",
    ],
    AuthNMappingsType: ["authn_mappings"],
    AwsCURConfigPatchRequestType: ["aws_cur_config_patch_request"],
    AwsCURConfigPostRequestType: ["aws_cur_config_post_request"],
    AwsCURConfigType: ["aws_cur_config"],
    AwsCurConfigResponseDataType: ["aws_cur_config"],
    AwsOnDemandType: ["aws_resource"],
    AwsScanOptionsType: ["aws_scan_options"],
    AzureIntegrationType: ["Azure"],
    AzureScanOptionsDataType: ["azure_scan_options"],
    AzureScanOptionsInputUpdateDataType: ["azure_scan_options"],
    AzureStorageDestinationType: ["azure_storage"],
    AzureTenantType: ["AzureTenant"],
    AzureUCConfigPairType: ["azure_uc_configs"],
    AzureUCConfigPatchRequestType: ["azure_uc_config_patch_request"],
    AzureUCConfigPostRequestType: ["azure_uc_config_post_request"],
    BillingDimensionsMappingBodyItemAttributesEndpointsItemsStatus: [
        "OK",
        "NOT_FOUND",
    ],
    BranchCoverageSummaryRequestType: ["ci_app_coverage_branch_summary_request"],
    BudgetValidationResponseDataType: ["budget_validation"],
    BudgetWithEntriesDataType: ["budget"],
    BulkDeleteAppsDatastoreItemsRequestDataType: ["items"],
    CIAppAggregateSortType: ["alphabetical", "measure"],
    CIAppAggregationFunction: [
        "count",
        "cardinality",
        "pc75",
        "pc90",
        "pc95",
        "pc98",
        "pc99",
        "sum",
        "min",
        "max",
        "avg",
        "median",
        "latest",
        "earliest",
        "most_frequent",
        "delta",
    ],
    CIAppCIErrorDomain: ["provider", "user", "unknown"],
    CIAppComputeType: ["timeseries", "total"],
    CIAppCreatePipelineEventRequestDataType: ["cipipeline_resource_request"],
    CIAppPipelineEventJobLevel: ["job"],
    CIAppPipelineEventJobStatus: ["success", "error", "canceled", "skipped"],
    CIAppPipelineEventPipelineInProgressStatus: ["running"],
    CIAppPipelineEventPipelineLevel: ["pipeline"],
    CIAppPipelineEventPipelineStatus: [
        "success",
        "error",
        "canceled",
        "skipped",
        "blocked",
    ],
    CIAppPipelineEventStageLevel: ["stage"],
    CIAppPipelineEventStageStatus: ["success", "error", "canceled", "skipped"],
    CIAppPipelineEventStepLevel: ["step"],
    CIAppPipelineEventStepStatus: ["success", "error"],
    CIAppPipelineEventTypeName: ["cipipeline"],
    CIAppPipelineLevel: ["pipeline", "stage", "job", "step", "custom"],
    CIAppResponseStatus: ["done", "timeout"],
    CIAppSort: ["timestamp", "-timestamp"],
    CIAppSortOrder: ["asc", "desc"],
    CIAppTestEventTypeName: ["citest"],
    CIAppTestLevel: ["session", "module", "suite", "test"],
    CSMAgentsType: ["datadog_agent"],
    Case3rdPartyTicketStatus: ["IN_PROGRESS", "COMPLETED", "FAILED"],
    CaseDataType: ["cases"],
    CaseManagementProjectDataType: ["projects"],
    CaseNotificationRuleResourceType: ["notification_rule"],
    CasePriority: ["NOT_DEFINED", "P1", "P2", "P3", "P4", "P5"],
    CaseResourceType: ["case"],
    CaseSortableField: ["created_at", "priority", "status"],
    CaseStatus: ["OPEN", "IN_PROGRESS", "CLOSED"],
    CaseStatusGroup: ["SG_OPEN", "SG_IN_PROGRESS", "SG_CLOSED"],
    CaseType: ["STANDARD"],
    CaseTypeResourceType: ["case_type"],
    ChangeEventAttributesAuthorType: ["user", "system", "api", "automation"],
    ChangeEventAttributesChangedResourceType: ["feature_flag", "configuration"],
    ChangeEventAttributesImpactedResourcesItemType: ["service"],
    ChangeEventCustomAttributesAuthorType: [
        "user",
        "system",
        "api",
        "automation",
    ],
    ChangeEventCustomAttributesChangedResourceType: [
        "feature_flag",
        "configuration",
    ],
    ChangeEventCustomAttributesImpactedResourcesItemsType: ["service"],
    ChangeRequestBranchResourceType: ["change_request_branch"],
    ChangeRequestChangeType: ["NORMAL", "STANDARD", "EMERGENCY"],
    ChangeRequestDecisionResourceType: ["change_request_decision"],
    ChangeRequestDecisionStatusType: ["REQUESTED", "APPROVED", "DECLINED"],
    ChangeRequestResourceType: ["change_request"],
    ChangeRequestRiskLevel: ["UNDEFINED", "LOW", "MEDIUM", "HIGH"],
    CircleCIAPIKeyType: ["CircleCIAPIKey"],
    CircleCIIntegrationType: ["CircleCI"],
    ClickupAPIKeyType: ["ClickupAPIKey"],
    ClickupIntegrationType: ["Clickup"],
    CloudAssetType: ["Host", "HostImage", "Image"],
    CloudConfigurationRuleType: ["cloud_configuration"],
    CloudWorkloadSecurityAgentPolicyType: ["policy"],
    CloudWorkloadSecurityAgentRuleType: ["agent_rule"],
    CloudflareAPITokenType: ["CloudflareAPIToken"],
    CloudflareAccountType: ["cloudflare-accounts"],
    CloudflareGlobalAPITokenType: ["CloudflareGlobalAPIToken"],
    CloudflareIntegrationType: ["Cloudflare"],
    CommitCoverageSummaryRequestType: ["ci_app_coverage_commit_summary_request"],
    CompletionConditionOperator: [
        "OPERATOR_EQUAL",
        "OPERATOR_NOT_EQUAL",
        "OPERATOR_GREATER_THAN",
        "OPERATOR_LESS_THAN",
        "OPERATOR_GREATER_THAN_OR_EQUAL_TO",
        "OPERATOR_LESS_THAN_OR_EQUAL_TO",
        "OPERATOR_CONTAINS",
        "OPERATOR_DOES_NOT_CONTAIN",
        "OPERATOR_IS_NULL",
        "OPERATOR_IS_NOT_NULL",
        "OPERATOR_IS_EMPTY",
        "OPERATOR_IS_NOT_EMPTY",
    ],
    ComponentGridType: ["grid"],
    ComponentType: [
        "table",
        "textInput",
        "textArea",
        "button",
        "text",
        "select",
        "modal",
        "schemaForm",
        "checkbox",
        "tabs",
        "vegaChart",
        "radioButtons",
        "numberInput",
        "fileInput",
        "jsonInput",
        "gridCell",
        "dateRangePicker",
        "search",
        "container",
        "calloutValue",
    ],
    ConfigCatIntegrationType: ["ConfigCat"],
    ConfigCatSDKKeyType: ["ConfigCatSDKKey"],
    ConfiguredScheduleTargetType: ["schedule_target"],
    ConfluentAccountType: ["confluent-cloud-accounts"],
    ConfluentResourceType: ["confluent-cloud-resources"],
    ConnectedTeamRefDataType: ["github_team"],
    ConnectionEnvEnv: ["default"],
    ContainerGroupType: ["container_group"],
    ContainerImageGroupType: ["container_image_group"],
    ContainerImageMetaPageType: ["cursor_limit"],
    ContainerImageType: ["container_image"],
    ContainerMetaPageType: ["cursor_limit"],
    ContainerType: ["container"],
    ContentEncoding: ["identity", "gzip", "deflate"],
    ConvertJobResultsToSignalsDataType: [
        "historicalDetectionsJobResultSignalConversion",
    ],
    CostAttributionType: ["cost_by_tag"],
    CostByOrgType: ["cost_by_org"],
    CoverageSummaryType: ["ci_app_coverage_summary"],
    CreateAppsDatastoreRequestDataAttributesOrgAccess: [
        "contributor",
        "viewer",
        "manager",
    ],
    CreateComponentRequestDataAttributesType: ["component", "group"],
    CreateDataDeletionRequestBodyDataType: ["create_deletion_req"],
    CreateDegradationRequestDataAttributesStatus: [
        "investigating",
        "identified",
        "monitoring",
        "resolved",
    ],
    CreatePageRequestDataType: ["pages"],
    CreatePageResponseDataType: ["pages"],
    CreateRulesetRequestDataType: ["create_ruleset"],
    CreateStatusPageRequestDataAttributesType: ["public", "internal"],
    CreateStatusPageRequestDataAttributesVisualizationType: [
        "bars_and_uptime_percentage",
        "bars_only",
        "component_name_only",
    ],
    CreateTableRequestDataType: ["reference_table"],
    CreateUploadRequestDataType: ["upload"],
    CreateUploadResponseDataType: ["upload"],
    CustomAttributeConfigResourceType: ["custom_attribute"],
    CustomAttributeType: ["URL", "TEXT", "NUMBER", "SELECT"],
    CustomConnectionType: ["custom_connections"],
    CustomDestinationAttributeTagsRestrictionListType: [
        "ALLOW_LIST",
        "BLOCK_LIST",
    ],
    CustomDestinationForwardDestinationElasticsearchType: ["elasticsearch"],
    CustomDestinationForwardDestinationHttpType: ["http"],
    CustomDestinationForwardDestinationMicrosoftSentinelType: [
        "microsoft_sentinel",
    ],
    CustomDestinationForwardDestinationSplunkType: ["splunk_hec"],
    CustomDestinationHttpDestinationAuthBasicType: ["basic"],
    CustomDestinationHttpDestinationAuthCustomHeaderType: ["custom_header"],
    CustomDestinationResponseForwardDestinationElasticsearchType: [
        "elasticsearch",
    ],
    CustomDestinationResponseForwardDestinationHttpType: ["http"],
    CustomDestinationResponseForwardDestinationMicrosoftSentinelType: [
        "microsoft_sentinel",
    ],
    CustomDestinationResponseForwardDestinationSplunkType: ["splunk_hec"],
    CustomDestinationResponseHttpDestinationAuthBasicType: ["basic"],
    CustomDestinationResponseHttpDestinationAuthCustomHeaderType: [
        "custom_header",
    ],
    CustomDestinationType: ["custom_destination"],
    CustomFrameworkType: ["custom_framework"],
    CustomRuleDataType: ["custom_rule"],
    CustomRuleRevisionAttributesCategory: [
        "SECURITY",
        "BEST_PRACTICES",
        "CODE_STYLE",
        "ERROR_PRONE",
        "PERFORMANCE",
    ],
    CustomRuleRevisionAttributesSeverity: ["ERROR", "WARNING", "NOTICE"],
    CustomRuleRevisionDataType: ["custom_rule_revision"],
    CustomRulesetDataType: ["custom_ruleset"],
    DORADeploymentPatchRemediationType: ["rollback", "rollforward"],
    DORADeploymentPatchRequestDataType: ["dora_deployment_patch_request"],
    DORADeploymentType: ["dora_deployment"],
    DORAFailureType: ["dora_failure"],
    DORAListDeploymentsRequestDataType: ["dora_deployments_list_request"],
    DORAListFailuresRequestDataType: ["dora_failures_list_request"],
    DashboardType: [
        "custom_timeboard",
        "custom_screenboard",
        "integration_screenboard",
        "integration_timeboard",
        "host_timeboard",
    ],
    DataAttributesRulesItemsIfTagExists: ["append", "do_not_apply", "replace"],
    DataRelationshipsTeamsDataItemsType: ["teams"],
    DataTransformType: ["dataTransform"],
    DatadogAPIKeyType: ["DatadogAPIKey"],
    DatadogIntegrationType: ["Datadog"],
    DatasetType: ["dataset"],
    DatastoreDataType: ["datastores"],
    DatastoreItemConflictMode: ["fail_on_conflict", "overwrite_on_conflict"],
    DatastoreItemsDataType: ["items"],
    DatastorePrimaryKeyGenerationStrategy: ["none", "uuid"],
    DegradationDataAttributesSourceType: ["incident"],
    DeletedSuitesRequestType: ["delete_suites_request"],
    DeletedTestsRequestType: ["delete_tests_request"],
    DeletedTestsResponseType: ["delete_tests"],
    DeploymentGateDataType: ["deployment_gate"],
    DeploymentRuleDataType: ["deployment_rule"],
    DeploymentRuleResponseDataAttributesType: [
        "faulty_deployment_detection",
        "monitor",
    ],
    DetailedFindingType: ["detailed_finding"],
    DnsMetricKey: [
        "dns_total_requests",
        "dns_failures",
        "dns_successful_responses",
        "dns_failed_responses",
        "dns_timeouts",
        "dns_responses.nxdomain",
        "dns_responses.servfail",
        "dns_responses.other",
        "dns_success_latency_percentile",
        "dns_failure_latency_percentile",
    ],
    DomainAllowlistType: ["domain_allowlist"],
    DowntimeIncludedMonitorType: ["monitors"],
    DowntimeNotifyEndStateActions: ["canceled", "expired"],
    DowntimeNotifyEndStateTypes: ["alert", "no data", "warn"],
    DowntimeResourceType: ["downtime"],
    DowntimeStatus: ["active", "canceled", "ended", "scheduled"],
    EntityResponseDataRelationshipsIncidentsDataItemsType: ["incident"],
    EntityResponseDataRelationshipsOncallsDataItemsType: ["oncall"],
    EntityResponseDataRelationshipsRawSchemaDataType: ["rawSchema"],
    EntityResponseDataRelationshipsRelatedEntitiesDataItemsType: [
        "relatedEntity",
    ],
    EntityResponseDataRelationshipsSchemaDataType: ["schema"],
    EntityResponseDataType: ["entity"],
    EntityResponseIncludedIncidentType: ["incident"],
    EntityResponseIncludedOncallType: ["oncall"],
    EntityResponseIncludedRawSchemaType: ["rawSchema"],
    EntityResponseIncludedRelatedEntityType: ["relatedEntity"],
    EntityResponseIncludedSchemaType: ["schema"],
    EntityV3APIKind: ["api"],
    EntityV3APIVersion: ["v3", "v2.2", "v2.1", "v2"],
    EntityV3DatastoreKind: ["datastore"],
    EntityV3QueueKind: ["queue"],
    EntityV3ServiceKind: ["service"],
    EntityV3SystemKind: ["system"],
    EscalationPolicyCreateRequestDataType: ["policies"],
    EscalationPolicyDataRelationshipsStepsDataItemsType: ["steps"],
    EscalationPolicyDataType: ["policies"],
    EscalationPolicyStepAttributesAssignment: ["default", "round-robin"],
    EscalationPolicyStepTargetType: ["users", "schedules", "teams"],
    EscalationPolicyStepType: ["steps"],
    EscalationPolicyUpdateRequestDataType: ["policies"],
    EscalationPolicyUserType: ["users"],
    EscalationRelationshipsRespondersDataItemsType: ["users"],
    EscalationType: ["escalation_policy_steps"],
    EventCategory: ["change", "alert"],
    EventCreateRequestType: ["event"],
    EventPayloadIntegrationId: ["custom-events"],
    EventPriority: ["normal", "low"],
    EventStatusType: [
        "failure",
        "error",
        "warning",
        "info",
        "success",
        "user_update",
        "recommendation",
        "snapshot",
    ],
    EventSystemAttributesCategory: ["change", "alert"],
    EventSystemAttributesIntegrationId: ["custom-events"],
    EventType: ["event"],
    EventsAggregation: [
        "count",
        "cardinality",
        "pc75",
        "pc90",
        "pc95",
        "pc98",
        "pc99",
        "sum",
        "min",
        "max",
        "avg",
    ],
    EventsDataSource: ["logs", "rum", "dora"],
    EventsSort: ["timestamp", "-timestamp"],
    EventsSortType: ["alphabetical", "measure"],
    FacetInfoRequestDataType: ["users_facet_info_request"],
    FacetInfoResponseDataType: ["users_facet_info"],
    FastlyAPIKeyType: ["FastlyAPIKey"],
    FastlyAccountType: ["fastly-accounts"],
    FastlyIntegrationType: ["Fastly"],
    FastlyServiceType: ["fastly-services"],
    FindingDataType: ["findings"],
    FindingEvaluation: ["pass", "fail"],
    FindingMuteReason: [
        "PENDING_FIX",
        "FALSE_POSITIVE",
        "ACCEPTED_RISK",
        "NO_PENDING_FIX",
        "HUMAN_ERROR",
        "NO_LONGER_ACCEPTED_RISK",
        "OTHER",
    ],
    FindingStatus: ["critical", "high", "medium", "low", "info"],
    FindingType: ["finding"],
    FindingVulnerabilityType: [
        "misconfiguration",
        "attack_path",
        "identity_risk",
        "api_security",
    ],
    FlakyTestAttributesFlakyState: ["active", "fixed", "quarantined", "disabled"],
    FlakyTestType: ["flaky_test"],
    FlakyTestsSearchRequestDataType: ["search_flaky_tests_request"],
    FlakyTestsSearchSort: [
        "fqn",
        "-fqn",
        "first_flaked",
        "-first_flaked",
        "last_flaked",
        "-last_flaked",
        "failure_rate",
        "-failure_rate",
        "pipelines_failed",
        "-pipelines_failed",
        "pipelines_duration_lost",
        "-pipelines_duration_lost",
    ],
    FleetAgentInfoResourceType: ["datadog_agent_key"],
    FleetAgentVersionResourceType: ["agent_version"],
    FleetDeploymentFileOp: ["merge-patch", "delete"],
    FleetDeploymentResourceType: ["deployment"],
    FleetScheduleResourceType: ["schedule"],
    FleetScheduleStatus: ["active", "inactive"],
    FreshserviceAPIKeyType: ["FreshserviceAPIKey"],
    FreshserviceIntegrationType: ["Freshservice"],
    GCPIntegrationType: ["GCP"],
    GCPMonitoredResourceConfigType: [
        "cloud_function",
        "cloud_run_revision",
        "gce_instance",
    ],
    GCPSTSDelegateAccountType: ["gcp_sts_delegate"],
    GCPServiceAccountCredentialType: ["GCPServiceAccount"],
    GCPServiceAccountType: ["gcp_service_account"],
    GCPUsageCostConfigPatchRequestType: ["gcp_uc_config_patch_request"],
    GCPUsageCostConfigPostRequestType: ["gcp_uc_config_post_request"],
    GCPUsageCostConfigType: ["gcp_uc_config"],
    GcpScanOptionsDataType: ["gcp_scan_options"],
    GcpScanOptionsInputUpdateDataType: ["gcp_scan_options"],
    GcpUcConfigResponseDataType: ["gcp_uc_config"],
    GeminiAPIKeyType: ["GeminiAPIKey"],
    GeminiIntegrationType: ["Gemini"],
    GetIssueIncludeQueryParameterItem: ["assignee", "case", "team_owners"],
    GetMappingResponseDataType: ["get_mappings_response"],
    GetMultipleRulesetsRequestDataType: ["get_multiple_rulesets_request"],
    GetMultipleRulesetsResponseDataAttributesRulesetsItemsDataType: ["rulesets"],
    GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsDataType: [
        "rules",
    ],
    GetMultipleRulesetsResponseDataType: ["get_multiple_rulesets_response"],
    GetRuleVersionHistoryDataType: ["GetRuleVersionHistoryResponse"],
    GetSuppressionVersionHistoryDataType: ["suppression_version_history"],
    GetTeamMembershipsSort: [
        "manager_name",
        "-manager_name",
        "name",
        "-name",
        "handle",
        "-handle",
        "email",
        "-email",
    ],
    GitlabAPIKeyType: ["GitlabAPIKey"],
    GitlabIntegrationType: ["Gitlab"],
    GlobalIncidentSettingsType: ["incidents_global_settings"],
    GlobalVariableJsonPatchType: ["global_variables_json_patch"],
    GlobalVariableType: ["global_variables"],
    GoogleChatAppNamedSpaceType: ["google-chat-app-named-space"],
    GoogleChatOrganizationHandleType: ["google-chat-organization-handle"],
    GreyNoiseAPIKeyType: ["GreyNoiseAPIKey"],
    GreyNoiseIntegrationType: ["GreyNoise"],
    HTTPIntegrationType: ["HTTP"],
    HTTPTokenAuthType: ["HTTPTokenAuth"],
    HamrOrgConnectionStatus: [0, 1, 2, 3, 4, 5],
    HamrOrgConnectionType: ["hamr_org_connections"],
    HourlyUsageType: [
        "app_sec_host_count",
        "observability_pipelines_bytes_processed",
        "lambda_traced_invocations_count",
    ],
    IPAllowlistEntryType: ["ip_allowlist_entry"],
    IPAllowlistType: ["ip_allowlist"],
    IncidentAttachmentType: ["incident_attachments"],
    IncidentFieldAttributesSingleValueType: ["dropdown", "textbox"],
    IncidentFieldAttributesValueType: [
        "multiselect",
        "textarray",
        "metrictag",
        "autocomplete",
    ],
    IncidentHandleType: ["incidents_handles"],
    IncidentImpactRelatedObject: [
        "incident",
        "created_by_user",
        "last_modified_by_user",
    ],
    IncidentImpactType: ["incident_impacts"],
    IncidentImpactsType: ["incident_impacts"],
    IncidentImportRelatedObject: [
        "last_modified_by_user",
        "created_by_user",
        "commander_user",
        "declared_by_user",
        "incident_type",
    ],
    IncidentImportVisibility: ["organization", "private"],
    IncidentIntegrationMetadataType: ["incident_integrations"],
    IncidentNotificationRuleAttributesVisibility: [
        "all",
        "organization",
        "private",
    ],
    IncidentNotificationRuleCreateAttributesVisibility: [
        "all",
        "organization",
        "private",
    ],
    IncidentNotificationRuleType: ["incident_notification_rules"],
    IncidentNotificationTemplateType: ["notification_templates"],
    IncidentPostmortemType: ["incident_postmortems"],
    IncidentRelatedObject: ["users", "attachments"],
    IncidentResourceType: ["incidents"],
    IncidentRespondersType: ["incident_responders"],
    IncidentSearchResultsType: ["incidents_search_results"],
    IncidentSearchSortOrder: ["created", "-created"],
    IncidentServiceType: ["services"],
    IncidentSeverity: [
        "UNKNOWN",
        "SEV-0",
        "SEV-1",
        "SEV-2",
        "SEV-3",
        "SEV-4",
        "SEV-5",
    ],
    IncidentTeamType: ["teams"],
    IncidentTimelineCellMarkdownContentType: ["markdown"],
    IncidentTodoAnonymousAssigneeSource: ["slack", "microsoft_teams"],
    IncidentTodoType: ["incident_todos"],
    IncidentType: ["incidents"],
    IncidentTypeType: ["incident_types"],
    IncidentUserDefinedFieldType: ["user_defined_field"],
    IncludeType: ["schema", "raw_schema", "oncall", "incident", "relation"],
    InputSchemaParametersType: [
        "STRING",
        "NUMBER",
        "BOOLEAN",
        "OBJECT",
        "ARRAY_STRING",
        "ARRAY_NUMBER",
        "ARRAY_BOOLEAN",
        "ARRAY_OBJECT",
    ],
    IntegrationType: ["integration"],
    InterfaceAttributesStatus: ["up", "down", "warning", "off"],
    IssueCaseResourceType: ["case"],
    IssueLanguage: [
        "BRIGHTSCRIPT",
        "C",
        "C_PLUS_PLUS",
        "C_SHARP",
        "CLOJURE",
        "DOT_NET",
        "ELIXIR",
        "ERLANG",
        "GO",
        "GROOVY",
        "HASKELL",
        "HCL",
        "JAVA",
        "JAVASCRIPT",
        "JVM",
        "KOTLIN",
        "OBJECTIVE_C",
        "PERL",
        "PHP",
        "PYTHON",
        "RUBY",
        "RUST",
        "SCALA",
        "SWIFT",
        "TERRAFORM",
        "TYPESCRIPT",
        "UNKNOWN",
    ],
    IssuePlatform: [
        "ANDROID",
        "BACKEND",
        "BROWSER",
        "FLUTTER",
        "IOS",
        "REACT_NATIVE",
        "ROKU",
        "UNKNOWN",
    ],
    IssueState: ["OPEN", "ACKNOWLEDGED", "RESOLVED", "IGNORED", "EXCLUDED"],
    IssueTeamType: ["team"],
    IssueType: ["issue"],
    IssueUpdateAssigneeRequestDataType: ["assignee"],
    IssueUpdateStateRequestDataType: ["error_tracking_issue"],
    IssueUserType: ["user"],
    IssuesSearchRequestDataAttributesOrderBy: [
        "TOTAL_COUNT",
        "FIRST_SEEN",
        "IMPACTED_SESSIONS",
        "PRIORITY",
    ],
    IssuesSearchRequestDataAttributesPersona: [
        "ALL",
        "BROWSER",
        "MOBILE",
        "BACKEND",
    ],
    IssuesSearchRequestDataAttributesTrack: ["trace", "logs", "rum"],
    IssuesSearchRequestDataType: ["search_request"],
    IssuesSearchResultType: ["error_tracking_search_result"],
    JiraAccountType: ["jira-account"],
    JiraIssueResourceType: ["issues"],
    JiraIssueTemplateType: ["jira-issue-template"],
    JiraIssuesDataType: ["jira_issues"],
    JsonPatchOperationOp: ["add", "remove", "replace", "move", "copy", "test"],
    LLMObsDatasetType: ["datasets"],
    LLMObsEventType: ["events"],
    LLMObsExperimentSpanStatus: ["ok", "error"],
    LLMObsExperimentType: ["experiments"],
    LLMObsMetricAssessment: ["pass", "fail"],
    LLMObsMetricScoreType: ["score", "categorical", "boolean", "json"],
    LLMObsProjectType: ["projects"],
    LLMObsRecordType: ["records"],
    Language: [
        "PYTHON",
        "JAVASCRIPT",
        "TYPESCRIPT",
        "JAVA",
        "GO",
        "YAML",
        "RUBY",
        "CSHARP",
        "PHP",
        "KOTLIN",
        "SWIFT",
    ],
    LaunchDarklyAPIKeyType: ["LaunchDarklyAPIKey"],
    LaunchDarklyIntegrationType: ["LaunchDarkly"],
    LayerRelationshipsMembersDataItemsType: ["members"],
    LayerType: ["layers"],
    LeakedKeyType: ["leaked_keys"],
    ListConnectionsResponseDataType: ["list_connections_response"],
    ListDeploymentRulesDataType: ["list_deployment_rules"],
    ListTeamsInclude: ["team_links", "user_team_permissions"],
    ListTeamsSort: ["name", "-name", "user_count", "-user_count"],
    LogType: ["log"],
    LogsAggregateResponseStatus: ["done", "timeout"],
    LogsAggregateSortType: ["alphabetical", "measure"],
    LogsAggregationFunction: [
        "count",
        "cardinality",
        "pc75",
        "pc90",
        "pc95",
        "pc98",
        "pc99",
        "sum",
        "min",
        "max",
        "avg",
        "median",
    ],
    LogsArchiveDestinationAzureType: ["azure"],
    LogsArchiveDestinationGCSType: ["gcs"],
    LogsArchiveDestinationS3Type: ["s3"],
    LogsArchiveEncryptionS3Type: ["NO_OVERRIDE", "SSE_S3", "SSE_KMS"],
    LogsArchiveOrderDefinitionType: ["archive_order"],
    LogsArchiveState: ["UNKNOWN", "WORKING", "FAILING", "WORKING_AUTH_LEGACY"],
    LogsArchiveStorageClassS3Type: [
        "STANDARD",
        "STANDARD_IA",
        "ONEZONE_IA",
        "INTELLIGENT_TIERING",
        "GLACIER_IR",
    ],
    LogsComputeType: ["timeseries", "total"],
    LogsMetricComputeAggregationType: ["count", "distribution"],
    LogsMetricResponseComputeAggregationType: ["count", "distribution"],
    LogsMetricType: ["logs_metrics"],
    LogsRestrictionQueriesType: ["logs_restriction_queries"],
    LogsSort: ["timestamp", "-timestamp"],
    LogsSortOrder: ["asc", "desc"],
    LogsStorageTier: ["indexes", "online-archives", "flex"],
    MaintenanceDataAttributesStatus: ["scheduled", "in_progress", "completed"],
    MemberTeamType: ["member_teams"],
    MetricActiveConfigurationType: ["actively_queried_configurations"],
    MetricBulkConfigureTagsType: ["metric_bulk_configure_tags"],
    MetricContentEncoding: ["deflate", "zstd1", "gzip"],
    MetricCustomSpaceAggregation: ["avg", "max", "min", "sum"],
    MetricCustomTimeAggregation: ["avg", "count", "max", "min", "sum"],
    MetricDashboardType: ["dashboards"],
    MetricDistinctVolumeType: ["distinct_metric_volumes"],
    MetricEstimateResourceType: ["metric_cardinality_estimate"],
    MetricEstimateType: ["count_or_gauge", "distribution", "percentile"],
    MetricIngestedIndexedVolumeType: ["metric_volumes"],
    MetricIntakeType: [0, 1, 2, 3],
    MetricMetaPageType: ["cursor_limit"],
    MetricMonitorType: ["monitors"],
    MetricNotebookType: ["notebooks"],
    MetricSLOType: ["slos"],
    MetricTagConfigurationMetricTypeCategory: [
        "non_distribution",
        "distribution",
    ],
    MetricTagConfigurationMetricTypes: ["gauge", "count", "rate", "distribution"],
    MetricTagConfigurationType: ["manage_tags"],
    MetricType: ["metrics"],
    MetricsAggregator: [
        "avg",
        "min",
        "max",
        "sum",
        "last",
        "percentile",
        "mean",
        "l2norm",
        "area",
    ],
    MetricsDataSource: ["metrics", "cloud_cost"],
    MicrosoftSentinelDestinationType: ["microsoft_sentinel"],
    MicrosoftTeamsChannelInfoType: ["ms-teams-channel-info"],
    MicrosoftTeamsTenantBasedHandleInfoType: [
        "ms-teams-tenant-based-handle-info",
    ],
    MicrosoftTeamsTenantBasedHandleType: ["tenant-based-handle"],
    MicrosoftTeamsWorkflowsWebhookHandleType: ["workflows-webhook-handle"],
    MonitorConfigPolicyResourceType: ["monitor-config-policy"],
    MonitorConfigPolicyType: ["tag"],
    MonitorDowntimeMatchResourceType: ["downtime_match"],
    MonitorNotificationRuleResourceType: ["monitor-notification-rule"],
    MonitorUserTemplateResourceType: ["monitor-user-template"],
    NotebookResourceType: ["notebook"],
    NotificationChannelEmailConfigType: ["email"],
    NotificationChannelEmailFormatType: ["html", "text"],
    NotificationChannelPhoneConfigType: ["phone"],
    NotificationChannelPushConfigType: ["push"],
    NotificationChannelType: ["notification_channels"],
    NotificationRulesType: ["notification_rules"],
    NotionAPIKeyType: ["NotionAPIKey"],
    NotionIntegrationType: ["Notion"],
    ObservabilityPipelineAddEnvVarsProcessorType: ["add_env_vars"],
    ObservabilityPipelineAddFieldsProcessorType: ["add_fields"],
    ObservabilityPipelineAddHostnameProcessorType: ["add_hostname"],
    ObservabilityPipelineAmazonDataFirehoseSourceType: ["amazon_data_firehose"],
    ObservabilityPipelineAmazonOpenSearchDestinationAuthStrategy: [
        "basic",
        "aws",
    ],
    ObservabilityPipelineAmazonOpenSearchDestinationType: ["amazon_opensearch"],
    ObservabilityPipelineAmazonS3DestinationStorageClass: [
        "STANDARD",
        "REDUCED_REDUNDANCY",
        "INTELLIGENT_TIERING",
        "STANDARD_IA",
        "EXPRESS_ONEZONE",
        "ONEZONE_IA",
        "GLACIER",
        "GLACIER_IR",
        "DEEP_ARCHIVE",
    ],
    ObservabilityPipelineAmazonS3DestinationType: ["amazon_s3"],
    ObservabilityPipelineAmazonS3SourceType: ["amazon_s3"],
    ObservabilityPipelineAmazonSecurityLakeDestinationType: [
        "amazon_security_lake",
    ],
    ObservabilityPipelineBufferOptionsDiskType: ["disk"],
    ObservabilityPipelineBufferOptionsMemoryType: ["memory"],
    ObservabilityPipelineBufferOptionsWhenFull: ["block", "drop_newest"],
    ObservabilityPipelineCloudPremDestinationType: ["cloud_prem"],
    ObservabilityPipelineConfigPipelineType: ["logs", "metrics"],
    ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompressionAlgorithm: [
        "gzip",
        "zlib",
    ],
    ObservabilityPipelineCrowdStrikeNextGenSiemDestinationEncoding: [
        "json",
        "raw_message",
    ],
    ObservabilityPipelineCrowdStrikeNextGenSiemDestinationType: [
        "crowdstrike_next_gen_siem",
    ],
    ObservabilityPipelineCustomProcessorType: ["custom_processor"],
    ObservabilityPipelineDatadogAgentSourceType: ["datadog_agent"],
    ObservabilityPipelineDatadogLogsDestinationType: ["datadog_logs"],
    ObservabilityPipelineDatadogMetricsDestinationType: ["datadog_metrics"],
    ObservabilityPipelineDatadogTagsProcessorAction: ["include", "exclude"],
    ObservabilityPipelineDatadogTagsProcessorMode: ["filter"],
    ObservabilityPipelineDatadogTagsProcessorType: ["datadog_tags"],
    ObservabilityPipelineDecoding: ["bytes", "gelf", "json", "syslog"],
    ObservabilityPipelineDedupeProcessorMode: ["match", "ignore"],
    ObservabilityPipelineDedupeProcessorType: ["dedupe"],
    ObservabilityPipelineElasticsearchDestinationApiVersion: [
        "auto",
        "v6",
        "v7",
        "v8",
    ],
    ObservabilityPipelineElasticsearchDestinationType: ["elasticsearch"],
    ObservabilityPipelineEnrichmentTableFileEncodingType: ["csv"],
    ObservabilityPipelineEnrichmentTableFileKeyItemsComparison: ["equals"],
    ObservabilityPipelineEnrichmentTableFileSchemaItemsType: [
        "string",
        "boolean",
        "integer",
        "float",
        "date",
        "timestamp",
    ],
    ObservabilityPipelineEnrichmentTableProcessorType: ["enrichment_table"],
    ObservabilityPipelineFilterProcessorType: ["filter"],
    ObservabilityPipelineFluentBitSourceType: ["fluent_bit"],
    ObservabilityPipelineFluentdSourceType: ["fluentd"],
    ObservabilityPipelineGenerateMetricsProcessorType: [
        "generate_datadog_metrics",
    ],
    ObservabilityPipelineGeneratedMetricIncrementByFieldStrategy: [
        "increment_by_field",
    ],
    ObservabilityPipelineGeneratedMetricIncrementByOneStrategy: [
        "increment_by_one",
    ],
    ObservabilityPipelineGeneratedMetricMetricType: [
        "count",
        "gauge",
        "distribution",
    ],
    ObservabilityPipelineGoogleChronicleDestinationEncoding: [
        "json",
        "raw_message",
    ],
    ObservabilityPipelineGoogleChronicleDestinationType: ["google_chronicle"],
    ObservabilityPipelineGoogleCloudStorageDestinationAcl: [
        "private",
        "project-private",
        "public-read",
        "authenticated-read",
        "bucket-owner-read",
        "bucket-owner-full-control",
    ],
    ObservabilityPipelineGoogleCloudStorageDestinationStorageClass: [
        "STANDARD",
        "NEARLINE",
        "COLDLINE",
        "ARCHIVE",
    ],
    ObservabilityPipelineGoogleCloudStorageDestinationType: [
        "google_cloud_storage",
    ],
    ObservabilityPipelineGooglePubSubDestinationEncoding: ["json", "raw_message"],
    ObservabilityPipelineGooglePubSubDestinationType: ["google_pubsub"],
    ObservabilityPipelineGooglePubSubSourceType: ["google_pubsub"],
    ObservabilityPipelineHttpClientDestinationAuthStrategy: [
        "none",
        "basic",
        "bearer",
    ],
    ObservabilityPipelineHttpClientDestinationCompressionAlgorithm: ["gzip"],
    ObservabilityPipelineHttpClientDestinationEncoding: ["json"],
    ObservabilityPipelineHttpClientDestinationType: ["http_client"],
    ObservabilityPipelineHttpClientSourceAuthStrategy: [
        "none",
        "basic",
        "bearer",
        "custom",
    ],
    ObservabilityPipelineHttpClientSourceType: ["http_client"],
    ObservabilityPipelineHttpServerSourceAuthStrategy: ["none", "plain"],
    ObservabilityPipelineHttpServerSourceType: ["http_server"],
    ObservabilityPipelineKafkaDestinationCompression: [
        "none",
        "gzip",
        "snappy",
        "lz4",
        "zstd",
    ],
    ObservabilityPipelineKafkaDestinationEncoding: ["json", "raw_message"],
    ObservabilityPipelineKafkaDestinationType: ["kafka"],
    ObservabilityPipelineKafkaSaslMechanism: [
        "PLAIN",
        "SCRAM-SHA-256",
        "SCRAM-SHA-512",
    ],
    ObservabilityPipelineKafkaSourceType: ["kafka"],
    ObservabilityPipelineLogstashSourceType: ["logstash"],
    ObservabilityPipelineMetricTagsProcessorRuleAction: ["include", "exclude"],
    ObservabilityPipelineMetricTagsProcessorRuleMode: ["filter"],
    ObservabilityPipelineMetricTagsProcessorType: ["metric_tags"],
    ObservabilityPipelineNewRelicDestinationRegion: ["us", "eu"],
    ObservabilityPipelineNewRelicDestinationType: ["new_relic"],
    ObservabilityPipelineOcsfMapperProcessorType: ["ocsf_mapper"],
    ObservabilityPipelineOcsfMappingLibrary: [
        "CloudTrail Account Change",
        "GCP Cloud Audit CreateBucket",
        "GCP Cloud Audit CreateSink",
        "GCP Cloud Audit SetIamPolicy",
        "GCP Cloud Audit UpdateSink",
        "Github Audit Log API Activity",
        "Google Workspace Admin Audit addPrivilege",
        "Microsoft 365 Defender Incident",
        "Microsoft 365 Defender UserLoggedIn",
        "Okta System Log Authentication",
        "Palo Alto Networks Firewall Traffic",
    ],
    ObservabilityPipelineOpenSearchDestinationType: ["opensearch"],
    ObservabilityPipelineOpentelemetrySourceType: ["opentelemetry"],
    ObservabilityPipelineParseGrokProcessorType: ["parse_grok"],
    ObservabilityPipelineParseJSONProcessorType: ["parse_json"],
    ObservabilityPipelineParseXMLProcessorType: ["parse_xml"],
    ObservabilityPipelineQuotaProcessorLimitEnforceType: ["bytes", "events"],
    ObservabilityPipelineQuotaProcessorOverflowAction: [
        "drop",
        "no_action",
        "overflow_routing",
    ],
    ObservabilityPipelineQuotaProcessorType: ["quota"],
    ObservabilityPipelineReduceProcessorMergeStrategyStrategy: [
        "discard",
        "retain",
        "sum",
        "max",
        "min",
        "array",
        "concat",
        "concat_newline",
        "concat_raw",
        "shortest_array",
        "longest_array",
        "flat_unique",
    ],
    ObservabilityPipelineReduceProcessorType: ["reduce"],
    ObservabilityPipelineRemoveFieldsProcessorType: ["remove_fields"],
    ObservabilityPipelineRenameFieldsProcessorType: ["rename_fields"],
    ObservabilityPipelineRsyslogDestinationType: ["rsyslog"],
    ObservabilityPipelineRsyslogSourceType: ["rsyslog"],
    ObservabilityPipelineSampleProcessorType: ["sample"],
    ObservabilityPipelineSensitiveDataScannerProcessorActionHashAction: ["hash"],
    ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactAction: [
        "partial_redact",
    ],
    ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptionsDirection: ["first", "last"],
    ObservabilityPipelineSensitiveDataScannerProcessorActionRedactAction: [
        "redact",
    ],
    ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternType: [
        "custom",
    ],
    ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternType: [
        "library",
    ],
    ObservabilityPipelineSensitiveDataScannerProcessorScopeAllTarget: ["all"],
    ObservabilityPipelineSensitiveDataScannerProcessorScopeExcludeTarget: [
        "exclude",
    ],
    ObservabilityPipelineSensitiveDataScannerProcessorScopeIncludeTarget: [
        "include",
    ],
    ObservabilityPipelineSensitiveDataScannerProcessorType: [
        "sensitive_data_scanner",
    ],
    ObservabilityPipelineSentinelOneDestinationRegion: [
        "us",
        "eu",
        "ca",
        "data_set_us",
    ],
    ObservabilityPipelineSentinelOneDestinationType: ["sentinel_one"],
    ObservabilityPipelineSocketDestinationEncoding: ["json", "raw_message"],
    ObservabilityPipelineSocketDestinationFramingBytesMethod: ["bytes"],
    ObservabilityPipelineSocketDestinationFramingCharacterDelimitedMethod: [
        "character_delimited",
    ],
    ObservabilityPipelineSocketDestinationFramingNewlineDelimitedMethod: [
        "newline_delimited",
    ],
    ObservabilityPipelineSocketDestinationMode: ["tcp", "udp"],
    ObservabilityPipelineSocketDestinationType: ["socket"],
    ObservabilityPipelineSocketSourceFramingBytesMethod: ["bytes"],
    ObservabilityPipelineSocketSourceFramingCharacterDelimitedMethod: [
        "character_delimited",
    ],
    ObservabilityPipelineSocketSourceFramingChunkedGelfMethod: ["chunked_gelf"],
    ObservabilityPipelineSocketSourceFramingNewlineDelimitedMethod: [
        "newline_delimited",
    ],
    ObservabilityPipelineSocketSourceFramingOctetCountingMethod: [
        "octet_counting",
    ],
    ObservabilityPipelineSocketSourceMode: ["tcp", "udp"],
    ObservabilityPipelineSocketSourceType: ["socket"],
    ObservabilityPipelineSplitArrayProcessorType: ["split_array"],
    ObservabilityPipelineSplunkHecDestinationEncoding: ["json", "raw_message"],
    ObservabilityPipelineSplunkHecDestinationType: ["splunk_hec"],
    ObservabilityPipelineSplunkHecSourceType: ["splunk_hec"],
    ObservabilityPipelineSplunkTcpSourceType: ["splunk_tcp"],
    ObservabilityPipelineSumoLogicDestinationEncoding: [
        "json",
        "raw_message",
        "logfmt",
    ],
    ObservabilityPipelineSumoLogicDestinationType: ["sumo_logic"],
    ObservabilityPipelineSumoLogicSourceType: ["sumo_logic"],
    ObservabilityPipelineSyslogNgDestinationType: ["syslog_ng"],
    ObservabilityPipelineSyslogNgSourceType: ["syslog_ng"],
    ObservabilityPipelineSyslogSourceMode: ["tcp", "udp"],
    ObservabilityPipelineThrottleProcessorType: ["throttle"],
    OktaAPITokenType: ["OktaAPIToken"],
    OktaAccountType: ["okta-accounts"],
    OktaIntegrationType: ["Okta"],
    OnCallNotificationRuleCategory: ["high_urgency", "low_urgency"],
    OnCallNotificationRuleType: ["notification_rules"],
    OnCallPageTargetType: ["team_id", "team_handle", "user_id"],
    OnCallPhoneNotificationRuleMethod: ["sms", "voice"],
    OnDemandConcurrencyCapType: ["on_demand_concurrency_cap"],
    OpenAIAPIKeyType: ["OpenAIAPIKey"],
    OpenAIIntegrationType: ["OpenAI"],
    OpsgenieServiceRegionType: ["us", "eu", "custom"],
    OpsgenieServiceType: ["opsgenie-service"],
    OrderDirection: ["asc", "desc"],
    OrgConfigType: ["org_configs"],
    OrgConnectionOrgRelationshipDataType: ["orgs"],
    OrgConnectionType: ["org_connection"],
    OrgConnectionTypeEnum: ["logs", "metrics"],
    OrgConnectionUserRelationshipDataType: ["users"],
    OrganizationsType: ["orgs"],
    OutcomeType: ["outcome"],
    OutcomesBatchType: ["batched-outcome"],
    OutputSchemaParametersType: [
        "STRING",
        "NUMBER",
        "BOOLEAN",
        "OBJECT",
        "ARRAY_STRING",
        "ARRAY_NUMBER",
        "ARRAY_BOOLEAN",
        "ARRAY_OBJECT",
    ],
    PageUrgency: ["low", "high"],
    PaginationMetaPageType: ["offset_limit"],
    PatchDegradationRequestDataAttributesStatus: [
        "investigating",
        "identified",
        "monitoring",
        "resolved",
    ],
    PatchDegradationRequestDataType: ["degradations"],
    PatchMaintenanceRequestDataAttributesComponentsAffectedItemsStatus: [
        "operational",
        "maintenance",
    ],
    PatchMaintenanceRequestDataType: ["maintenances"],
    PatchTableRequestDataType: ["reference_table"],
    PermissionsType: ["permissions"],
    PlaylistDataType: ["rum_replay_playlist"],
    PostmortemCellType: ["markdown"],
    PostmortemTemplateType: ["postmortem_template"],
    ProcessSummaryType: ["process"],
    ProductAnalyticsAnalyticsRequestType: ["formula_analytics_extended_request"],
    ProductAnalyticsEventQueryDataSource: ["product_analytics"],
    ProductAnalyticsExecutionType: [
        "simple",
        "background",
        "trino-multistep",
        "materialized-view",
    ],
    ProductAnalyticsOccurrenceQueryDataSource: ["product_analytics_occurrence"],
    ProductAnalyticsResponseMetaStatus: ["done", "running", "timeout"],
    ProductAnalyticsScalarColumnType: ["number", "group"],
    ProductAnalyticsScalarResponseType: ["scalar_response"],
    ProductAnalyticsServerSideEventItemType: ["server"],
    ProductAnalyticsTimeseriesResponseType: ["timeseries_response"],
    ProjectResourceType: ["project"],
    ProjectedCostType: ["projected_cost"],
    QueryAccountRequestDataType: ["query_account_request"],
    QueryEventFilteredUsersRequestDataType: [
        "query_event_filtered_users_request",
    ],
    QueryResponseDataType: ["query_response"],
    QuerySortOrder: ["asc", "desc"],
    QueryUsersRequestDataType: ["query_users_request"],
    RUMAggregateSortType: ["alphabetical", "measure"],
    RUMAggregationFunction: [
        "count",
        "cardinality",
        "pc75",
        "pc90",
        "pc95",
        "pc98",
        "pc99",
        "sum",
        "min",
        "max",
        "avg",
        "median",
    ],
    RUMApplicationCreateType: ["rum_application_create"],
    RUMApplicationListType: ["rum_application"],
    RUMApplicationType: ["rum_application"],
    RUMApplicationUpdateType: ["rum_application_update"],
    RUMComputeType: ["timeseries", "total"],
    RUMEventProcessingState: ["ALL", "ERROR_FOCUSED_MODE", "NONE"],
    RUMEventType: ["rum"],
    RUMProductAnalyticsRetentionState: ["MAX", "NONE"],
    RUMResponseStatus: ["done", "timeout"],
    RUMSort: ["timestamp", "-timestamp"],
    RUMSortOrder: ["asc", "desc"],
    ReadinessGateThresholdType: ["ANY", "ALL"],
    RecommendationType: ["recommendation"],
    ReferenceTableCreateSourceType: ["LOCAL_FILE", "S3", "GCS", "AZURE"],
    ReferenceTableSchemaFieldType: ["STRING", "INT32"],
    ReferenceTableSortType: [
        "updated_at",
        "table_name",
        "status",
        "-updated_at",
        "-table_name",
        "-status",
    ],
    ReferenceTableSourceType: [
        "LOCAL_FILE",
        "S3",
        "GCS",
        "AZURE",
        "SERVICENOW",
        "SALESFORCE",
        "DATABRICKS",
        "SNOWFLAKE",
    ],
    RelationIncludeType: ["entity", "schema"],
    RelationResponseType: ["relation"],
    RelationType: [
        "RelationTypeOwns",
        "RelationTypeOwnedBy",
        "RelationTypeDependsOn",
        "RelationTypeDependencyOf",
        "RelationTypePartsOf",
        "RelationTypeHasPart",
        "RelationTypeOtherOwns",
        "RelationTypeOtherOwnedBy",
        "RelationTypeImplementedBy",
        "RelationTypeImplements",
    ],
    ReorderRuleResourceDataType: ["arbitrary_rule"],
    ReorderRulesetResourceDataType: ["ruleset"],
    ResolveVulnerableSymbolsRequestDataType: [
        "resolve-vulnerable-symbols-request",
    ],
    ResolveVulnerableSymbolsResponseDataType: [
        "resolve-vulnerable-symbols-response",
    ],
    ResourceFilterRequestType: ["csm_resource_filter"],
    RestrictionPolicyType: ["restriction_policy"],
    RetentionFilterAllType: [
        "spans-sampling-processor",
        "spans-errors-sampling-processor",
        "spans-appsec-sampling-processor",
    ],
    RetentionFilterType: ["spans-sampling-processor"],
    RetryStrategyKind: ["RETRY_STRATEGY_LINEAR"],
    RevertCustomRuleRevisionDataType: ["revert_custom_rule_revision_request"],
    RoleTemplateDataType: ["roles"],
    RolesSort: [
        "name",
        "-name",
        "modified_at",
        "-modified_at",
        "user_count",
        "-user_count",
    ],
    RolesType: ["roles"],
    RoutingRuleRelationshipsPolicyDataType: ["policies"],
    RoutingRuleType: ["team_routing_rules"],
    RuleSeverity: ["critical", "high", "medium", "low", "unknown", "info"],
    RuleType: ["rule"],
    RuleTypesItems: [
        "application_security",
        "log_detection",
        "workload_security",
        "signal_correlation",
        "cloud_configuration",
        "infrastructure_configuration",
        "application_code_vulnerability",
        "application_library_vulnerability",
        "attack_path",
        "container_image_vulnerability",
        "identity_risk",
        "misconfiguration",
        "api_security",
        "host_vulnerability",
        "iac_misconfiguration",
    ],
    RulesValidateQueryRequestDataType: ["validate_query"],
    RulesValidateQueryResponseDataType: ["validate_response"],
    RulesetRespDataType: ["ruleset"],
    RumMetricComputeAggregationType: ["count", "distribution"],
    RumMetricEventType: [
        "session",
        "view",
        "action",
        "error",
        "resource",
        "long_task",
        "vital",
    ],
    RumMetricType: ["rum_metrics"],
    RumMetricUniquenessWhen: ["match", "end"],
    RumRetentionFilterEventType: [
        "session",
        "view",
        "action",
        "error",
        "resource",
        "long_task",
        "vital",
    ],
    RumRetentionFilterType: ["retention_filters"],
    RunThreatHuntingJobRequestDataType: ["historicalDetectionsJobCreate"],
    SAMLAssertionAttributesType: ["saml_assertion_attributes"],
    SBOMComponentLicenseType: [
        "network_strong_copyleft",
        "non_standard_copyleft",
        "other_non_free",
        "other_non_standard",
        "permissive",
        "public_domain",
        "strong_copyleft",
        "weak_copyleft",
    ],
    SBOMComponentType: [
        "application",
        "container",
        "data",
        "device",
        "device-driver",
        "file",
        "firmware",
        "framework",
        "library",
        "machine-learning-model",
        "operating-system",
        "platform",
    ],
    SBOMFormat: ["CycloneDX", "SPDX"],
    SBOMType: ["sboms"],
    SLOReportInterval: ["daily", "weekly", "monthly"],
    SLOReportStatus: [
        "in_progress",
        "completed",
        "completed_with_errors",
        "failed",
    ],
    ScaRequestDataType: ["scarequests"],
    ScalarColumnTypeGroup: ["group"],
    ScalarColumnTypeNumber: ["number"],
    ScalarFormulaRequestType: ["scalar_request"],
    ScalarFormulaResponseType: ["scalar_response"],
    ScheduleCreateRequestDataType: ["schedules"],
    ScheduleDataRelationshipsLayersDataItemsType: ["layers"],
    ScheduleDataType: ["schedules"],
    ScheduleMemberRelationshipsUserDataType: ["users"],
    ScheduleMemberType: ["members"],
    ScheduleTargetPosition: ["previous", "current", "next"],
    ScheduleTargetType: ["schedules"],
    ScheduleUpdateRequestDataType: ["schedules"],
    ScheduleUserType: ["users"],
    ScorecardType: ["scorecard"],
    SearchIssuesIncludeQueryParameterItem: [
        "issue",
        "issue.assignee",
        "issue.case",
        "issue.team_owners",
    ],
    SeatAssignmentsDataType: ["seat-assignments"],
    SeatUserDataType: ["seat-users"],
    SecretRuleDataType: ["secret_rule"],
    SecurityEntityRiskScoreAttributesSeverity: [
        "critical",
        "high",
        "medium",
        "low",
        "info",
    ],
    SecurityEntityRiskScoreType: ["security_entity_risk_score"],
    SecurityFilterFilteredDataType: ["logs"],
    SecurityFilterType: ["security_filters"],
    SecurityFindingsDataType: ["finding"],
    SecurityFindingsSort: ["@detection_changed_at", "-@detection_changed_at"],
    SecurityFindingsStatus: ["done", "timeout"],
    SecurityMonitoringContentPackActivation: [
        "never_activated",
        "activated",
        "deactivated",
    ],
    SecurityMonitoringContentPackIntegrationStatus: [
        "installed",
        "available",
        "partially_installed",
        "detected",
        "error",
    ],
    SecurityMonitoringContentPackStateType: ["content_pack_state"],
    SecurityMonitoringContentPackStatus: [
        "install",
        "activate",
        "initializing",
        "active",
        "warning",
        "broken",
    ],
    SecurityMonitoringContentPackTimestampBucket: [
        "not_seen",
        "within_24_hours",
        "within_24_to_72_hours",
        "over_72h_to_30d",
        "over_30d",
    ],
    SecurityMonitoringCriticalAssetSeverity: [
        "info",
        "low",
        "medium",
        "high",
        "critical",
        "increase",
        "decrease",
    ],
    SecurityMonitoringCriticalAssetType: ["critical_assets"],
    SecurityMonitoringFilterAction: ["require", "suppress"],
    SecurityMonitoringRuleAnomalyDetectionOptionsBucketDuration: [
        300, 600, 900, 1800, 3600, 10800,
    ],
    SecurityMonitoringRuleAnomalyDetectionOptionsDetectionTolerance: [
        1, 2, 3, 4, 5,
    ],
    SecurityMonitoringRuleAnomalyDetectionOptionsLearningDuration: [
        1, 6, 12, 24, 48, 168, 336,
    ],
    SecurityMonitoringRuleBulkExportDataType: [
        "security_monitoring_rules_bulk_export",
    ],
    SecurityMonitoringRuleCaseActionOptionsFlaggedIPType: [
        "SUSPICIOUS",
        "FLAGGED",
    ],
    SecurityMonitoringRuleCaseActionType: [
        "block_ip",
        "block_user",
        "user_behavior",
        "flag_ip",
    ],
    SecurityMonitoringRuleDetectionMethod: [
        "threshold",
        "new_value",
        "anomaly_detection",
        "impossible_travel",
        "hardcoded",
        "third_party",
        "anomaly_threshold",
        "sequence_detection",
    ],
    SecurityMonitoringRuleEvaluationWindow: [
        0, 60, 300, 600, 900, 1800, 3600, 7200, 10800, 21600, 43200, 86400,
    ],
    SecurityMonitoringRuleHardcodedEvaluatorType: ["log4shell"],
    SecurityMonitoringRuleKeepAlive: [
        0, 60, 300, 600, 900, 1800, 3600, 7200, 10800, 21600, 43200, 86400,
    ],
    SecurityMonitoringRuleMaxSignalDuration: [
        0, 60, 300, 600, 900, 1800, 3600, 7200, 10800, 21600, 43200, 86400,
    ],
    SecurityMonitoringRuleNewValueOptionsForgetAfter: [1, 2, 7, 14, 21, 28],
    SecurityMonitoringRuleNewValueOptionsLearningDuration: [0, 1, 7],
    SecurityMonitoringRuleNewValueOptionsLearningMethod: [
        "duration",
        "threshold",
    ],
    SecurityMonitoringRuleNewValueOptionsLearningThreshold: [0, 1],
    SecurityMonitoringRuleQueryAggregation: [
        "count",
        "cardinality",
        "sum",
        "max",
        "new_value",
        "geo_data",
        "event_count",
        "none",
    ],
    SecurityMonitoringRuleSeverity: ["info", "low", "medium", "high", "critical"],
    SecurityMonitoringRuleSort: [
        "name",
        "creation_date",
        "update_date",
        "enabled",
        "type",
        "highest_severity",
        "source",
        "-name",
        "-creation_date",
        "-update_date",
        "-enabled",
        "-type",
        "-highest_severity",
        "-source",
    ],
    SecurityMonitoringRuleTypeCreate: [
        "api_security",
        "application_security",
        "log_detection",
        "workload_activity",
        "workload_security",
    ],
    SecurityMonitoringRuleTypeRead: [
        "log_detection",
        "infrastructure_configuration",
        "workload_security",
        "cloud_configuration",
        "application_security",
        "api_security",
        "workload_activity",
    ],
    SecurityMonitoringRuleTypeTest: ["log_detection"],
    SecurityMonitoringSKU: [
        "per_gb_analyzed",
        "per_event_in_siem_index_2023",
        "add_on_2024",
    ],
    SecurityMonitoringSignalArchiveReason: [
        "none",
        "false_positive",
        "testing_or_maintenance",
        "investigated_case_opened",
        "true_positive_benign",
        "true_positive_malicious",
        "other",
    ],
    SecurityMonitoringSignalMetadataType: ["signal_metadata"],
    SecurityMonitoringSignalRuleType: ["signal_correlation"],
    SecurityMonitoringSignalState: ["open", "archived", "under_review"],
    SecurityMonitoringSignalType: ["signal"],
    SecurityMonitoringSignalsSort: ["timestamp", "-timestamp"],
    SecurityMonitoringStandardDataSource: [
        "logs",
        "audit",
        "app_sec_spans",
        "spans",
        "security_runtime",
        "network",
        "events",
    ],
    SecurityMonitoringSuppressionSort: [
        "name",
        "start_date",
        "expiration_date",
        "update_date",
        "enabled",
        "-name",
        "-start_date",
        "-expiration_date",
        "-update_date",
        "-creation_date",
        "-enabled",
    ],
    SecurityMonitoringSuppressionType: ["suppressions"],
    SendSlackMessageActionType: ["send_slack_message"],
    SendTeamsMessageActionType: ["send_teams_message"],
    SensitiveDataScannerConfigurationType: [
        "sensitive_data_scanner_configuration",
    ],
    SensitiveDataScannerGroupType: ["sensitive_data_scanner_group"],
    SensitiveDataScannerProduct: ["logs", "rum", "events", "apm"],
    SensitiveDataScannerRuleType: ["sensitive_data_scanner_rule"],
    SensitiveDataScannerStandardPatternType: [
        "sensitive_data_scanner_standard_pattern",
    ],
    SensitiveDataScannerTextReplacementType: [
        "none",
        "hash",
        "replacement_string",
        "partial_replacement_from_beginning",
        "partial_replacement_from_end",
    ],
    ServiceDefinitionSchemaVersions: ["v1", "v2", "v2.1", "v2.2"],
    ServiceDefinitionV1ResourceType: [
        "doc",
        "wiki",
        "runbook",
        "url",
        "repo",
        "dashboard",
        "oncall",
        "code",
        "link",
    ],
    ServiceDefinitionV1Version: ["v1"],
    ServiceDefinitionV2Dot1EmailType: ["email"],
    ServiceDefinitionV2Dot1LinkType: [
        "doc",
        "repo",
        "runbook",
        "dashboard",
        "other",
    ],
    ServiceDefinitionV2Dot1MSTeamsType: ["microsoft-teams"],
    ServiceDefinitionV2Dot1OpsgenieRegion: ["US", "EU"],
    ServiceDefinitionV2Dot1SlackType: ["slack"],
    ServiceDefinitionV2Dot1Version: ["v2.1"],
    ServiceDefinitionV2Dot2OpsgenieRegion: ["US", "EU"],
    ServiceDefinitionV2Dot2Version: ["v2.2"],
    ServiceDefinitionV2EmailType: ["email"],
    ServiceDefinitionV2LinkType: [
        "doc",
        "wiki",
        "runbook",
        "url",
        "repo",
        "dashboard",
        "oncall",
        "code",
        "link",
    ],
    ServiceDefinitionV2MSTeamsType: ["microsoft-teams"],
    ServiceDefinitionV2OpsgenieRegion: ["US", "EU"],
    ServiceDefinitionV2SlackType: ["slack"],
    ServiceDefinitionV2Version: ["v2"],
    ServiceListDataType: ["services_list"],
    ServiceNowAssignmentGroupType: ["assignment_groups"],
    ServiceNowBasicAuthType: ["ServiceNowBasicAuth"],
    ServiceNowBusinessServiceType: ["business_services"],
    ServiceNowInstanceType: ["instance"],
    ServiceNowIntegrationType: ["ServiceNow"],
    ServiceNowTemplateType: ["servicenow_templates"],
    ServiceNowTicketResourceType: ["tickets"],
    ServiceNowUserType: ["users"],
    ShiftDataRelationshipsUserDataType: ["users"],
    ShiftDataType: ["shifts"],
    SingleAggregatedConnectionResponseDataType: ["aggregated_connection"],
    SingleAggregatedDnsResponseDataType: ["aggregated_dns"],
    SloStatusType: ["slo_status"],
    SnapshotUpdateRequestDataType: ["snapshots"],
    SortDirection: ["desc", "asc"],
    SpansAggregateBucketType: ["bucket"],
    SpansAggregateRequestType: ["aggregate_request"],
    SpansAggregateResponseStatus: ["done", "timeout"],
    SpansAggregateSortType: ["alphabetical", "measure"],
    SpansAggregationFunction: [
        "count",
        "cardinality",
        "pc75",
        "pc90",
        "pc95",
        "pc98",
        "pc99",
        "sum",
        "min",
        "max",
        "avg",
        "median",
    ],
    SpansComputeType: ["timeseries", "total"],
    SpansListRequestType: ["search_request"],
    SpansMetricComputeAggregationType: ["count", "distribution"],
    SpansMetricType: ["spans_metrics"],
    SpansSort: ["timestamp", "-timestamp"],
    SpansSortOrder: ["asc", "desc"],
    SpansType: ["spans"],
    SpecVersion: ["1.0", "1.1", "1.2", "1.3", "1.4", "1.5"],
    SplitAPIKeyType: ["SplitAPIKey"],
    SplitIntegrationType: ["Split"],
    State: ["pass", "fail", "skip"],
    StateVariableType: ["stateVariable"],
    StatsigAPIKeyType: ["StatsigAPIKey"],
    StatsigIntegrationType: ["Statsig"],
    StatusPageDataType: ["status_pages"],
    StatusPagesComponentDataAttributesStatus: [
        "operational",
        "degraded",
        "partial_outage",
        "major_outage",
        "maintenance",
    ],
    StatusPagesComponentGroupAttributesComponentsItemsStatus: [
        "operational",
        "degraded",
        "partial_outage",
        "major_outage",
        "maintenance",
    ],
    StatusPagesComponentGroupAttributesComponentsItemsType: ["component"],
    StatusPagesComponentGroupType: ["components"],
    StatusPagesUserType: ["users"],
    SuiteSearchResponseType: ["suites_search"],
    SyntheticsGlobalVariableParseTestOptionsType: [
        "http_body",
        "http_header",
        "http_status_code",
        "local_variable",
    ],
    SyntheticsGlobalVariableParserType: ["raw", "json_path", "regex", "x_path"],
    SyntheticsNetworkAssertionJitterType: ["jitter"],
    SyntheticsNetworkAssertionLatencyType: ["latency"],
    SyntheticsNetworkAssertionMultiNetworkHopType: ["multiNetworkHop"],
    SyntheticsNetworkAssertionOperator: [
        "is",
        "isNot",
        "lessThan",
        "lessThanOrEqual",
        "moreThan",
        "moreThanOrEqual",
    ],
    SyntheticsNetworkAssertionPacketLossPercentageType: ["packetLossPercentage"],
    SyntheticsNetworkAssertionProperty: ["avg", "max", "min"],
    SyntheticsNetworkTestRequestTCPMethod: ["prefer_sack", "syn", "sack"],
    SyntheticsNetworkTestResponseType: ["network_test"],
    SyntheticsNetworkTestSubType: ["tcp", "udp", "icmp"],
    SyntheticsNetworkTestType: ["network"],
    SyntheticsSuiteTestAlertingCriticality: ["ignore", "critical"],
    SyntheticsSuiteType: ["suite"],
    SyntheticsSuiteTypes: ["suites"],
    SyntheticsTestOptionsMonitorOptionsNotificationPresetName: [
        "show_all",
        "hide_all",
        "hide_query",
        "hide_handles",
        "hide_query_and_handles",
        "show_only_snapshot",
        "hide_handles_and_footer",
    ],
    SyntheticsTestPauseStatus: ["live", "paused"],
    TableResultV2DataAttributesFileMetadataCloudStorageErrorType: [
        "TABLE_SCHEMA_ERROR",
        "FILE_FORMAT_ERROR",
        "CONFIGURATION_ERROR",
        "QUOTA_EXCEEDED",
        "CONFLICT_ERROR",
        "VALIDATION_ERROR",
        "STATE_ERROR",
        "OPERATION_ERROR",
        "SYSTEM_ERROR",
    ],
    TableResultV2DataType: ["reference_table"],
    TableRowResourceDataType: ["row"],
    TeamConnectionType: ["team_connection"],
    TeamHierarchyLinkType: ["team_hierarchy_links"],
    TeamLinkType: ["team_links"],
    TeamNotificationRuleType: ["team_notification_rules"],
    TeamOnCallRespondersDataRelationshipsEscalationsDataItemsType: [
        "escalation_policy_steps",
    ],
    TeamOnCallRespondersDataRelationshipsRespondersDataItemsType: ["users"],
    TeamOnCallRespondersDataType: ["team_oncall_responders"],
    TeamPermissionSettingSerializerAction: ["manage_membership", "edit"],
    TeamPermissionSettingType: ["team_permission_settings"],
    TeamPermissionSettingValue: [
        "admins",
        "members",
        "organization",
        "user_access_manage",
        "teams_manage",
    ],
    TeamRefDataType: ["team"],
    TeamReferenceType: ["teams"],
    TeamRoutingRulesDataRelationshipsRulesDataItemsType: ["team_routing_rules"],
    TeamRoutingRulesDataType: ["team_routing_rules"],
    TeamRoutingRulesRequestDataType: ["team_routing_rules"],
    TeamSyncAttributesFrequency: ["once", "continuously", "paused"],
    TeamSyncAttributesSource: ["github"],
    TeamSyncAttributesType: ["link", "provision"],
    TeamSyncBulkType: ["team_sync_bulk"],
    TeamTargetType: ["teams"],
    TeamType: ["team"],
    TeamsField: [
        "id",
        "name",
        "handle",
        "summary",
        "description",
        "avatar",
        "banner",
        "visible_modules",
        "hidden_modules",
        "created_at",
        "modified_at",
        "user_count",
        "link_count",
        "team_links",
        "user_team_permissions",
    ],
    TenancyProductsDataType: ["oci_tenancy_product"],
    ThreatHuntingJobDataType: ["historicalDetectionsJob"],
    TimelineCellAuthorUserType: ["USER"],
    TimelineCellResourceType: ["timeline_cell"],
    TimelineCellType: ["COMMENT"],
    TimeseriesFormulaRequestType: ["timeseries_request"],
    TimeseriesFormulaResponseType: ["timeseries_response"],
    TokenType: ["SECRET"],
    TriggerSource: ["security_findings", "security_signals"],
    UCConfigPairDataType: ["azure_uc_configs"],
    UpdateAppsDatastoreItemRequestDataType: ["items"],
    UpdateConnectionRequestDataType: ["connection_id"],
    UpdateFlakyTestsRequestDataType: ["update_flaky_test_state_request"],
    UpdateFlakyTestsRequestTestNewState: [
        "active",
        "quarantined",
        "disabled",
        "fixed",
    ],
    UpdateFlakyTestsResponseDataType: ["update_flaky_test_state_response"],
    UpdateOutcomesAsyncType: ["batched-outcome"],
    UpdateRulesetRequestDataType: ["update_ruleset"],
    UpdateTenancyConfigDataType: ["oci_tenancy"],
    Urgency: ["low", "high", "dynamic"],
    UsageAttributionTypesType: ["usage_attribution_types"],
    UsageTimeSeriesType: ["usage_timeseries"],
    UserAttributesStatus: ["active", "deactivated", "pending"],
    UserInvitationsType: ["user_invitations"],
    UserResourceType: ["user"],
    UserTargetType: ["users"],
    UserTeamPermissionType: ["user_team_permissions"],
    UserTeamRole: ["admin"],
    UserTeamTeamType: ["team"],
    UserTeamType: ["team_memberships"],
    UserTeamUserType: ["users"],
    UsersType: ["users"],
    VersionHistoryUpdateType: ["create", "update", "delete"],
    ViewershipHistorySessionDataType: ["rum_replay_session"],
    VirusTotalAPIKeyType: ["VirusTotalAPIKey"],
    VirusTotalIntegrationType: ["VirusTotal"],
    VulnerabilitiesType: ["vulnerabilities"],
    VulnerabilityEcosystem: [
        "PyPI",
        "Maven",
        "NuGet",
        "Npm",
        "RubyGems",
        "Go",
        "Packagist",
        "Deb",
        "Rpm",
        "Apk",
        "Windows",
        "Generic",
        "MacOs",
        "Oci",
        "BottleRocket",
        "None",
    ],
    VulnerabilitySeverity: [
        "Unknown",
        "None",
        "Low",
        "Medium",
        "High",
        "Critical",
    ],
    VulnerabilityStatus: [
        "Open",
        "Muted",
        "Remediated",
        "InProgress",
        "AutoClosed",
    ],
    VulnerabilityTool: ["IAST", "SCA", "Infra", "SAST"],
    VulnerabilityType: [
        "AdminConsoleActive",
        "CodeInjection",
        "CommandInjection",
        "ComponentWithKnownVulnerability",
        "DangerousWorkflows",
        "DefaultAppDeployed",
        "DefaultHtmlEscapeInvalid",
        "DirectoryListingLeak",
        "EmailHtmlInjection",
        "EndOfLife",
        "HardcodedPassword",
        "HardcodedSecret",
        "HeaderInjection",
        "HstsHeaderMissing",
        "InsecureAuthProtocol",
        "InsecureCookie",
        "InsecureJspLayout",
        "LdapInjection",
        "MaliciousPackage",
        "MandatoryRemediation",
        "NoHttpOnlyCookie",
        "NoSameSiteCookie",
        "NoSqlMongoDbInjection",
        "PathTraversal",
        "ReflectionInjection",
        "RiskyLicense",
        "SessionRewriting",
        "SessionTimeout",
        "SqlInjection",
        "Ssrf",
        "StackTraceLeak",
        "TrustBoundaryViolation",
        "Unmaintained",
        "UntrustedDeserialization",
        "UnvalidatedRedirect",
        "VerbTampering",
        "WeakCipher",
        "WeakHash",
        "WeakRandomness",
        "XContentTypeHeaderMissing",
        "XPathInjection",
        "Xss",
    ],
    WatchDataType: ["rum_replay_watch"],
    WatcherDataType: ["rum_replay_watcher"],
    Weekday: [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
    ],
    WidgetLiveSpan: [
        "1m",
        "5m",
        "10m",
        "15m",
        "30m",
        "1h",
        "4h",
        "1d",
        "2d",
        "1w",
        "1mo",
        "3mo",
        "6mo",
        "1y",
        "alert",
    ],
    WorkflowDataType: ["workflows"],
    WorkflowUserRelationshipType: ["users"],
};
const typeMap = {
    APIErrorResponse: APIErrorResponse_1.APIErrorResponse,
    APIKeyCreateAttributes: APIKeyCreateAttributes_1.APIKeyCreateAttributes,
    APIKeyCreateData: APIKeyCreateData_1.APIKeyCreateData,
    APIKeyCreateRequest: APIKeyCreateRequest_1.APIKeyCreateRequest,
    APIKeyRelationships: APIKeyRelationships_1.APIKeyRelationships,
    APIKeyResponse: APIKeyResponse_1.APIKeyResponse,
    APIKeyUpdateAttributes: APIKeyUpdateAttributes_1.APIKeyUpdateAttributes,
    APIKeyUpdateData: APIKeyUpdateData_1.APIKeyUpdateData,
    APIKeyUpdateRequest: APIKeyUpdateRequest_1.APIKeyUpdateRequest,
    APIKeysResponse: APIKeysResponse_1.APIKeysResponse,
    APIKeysResponseMeta: APIKeysResponseMeta_1.APIKeysResponseMeta,
    APIKeysResponseMetaPage: APIKeysResponseMetaPage_1.APIKeysResponseMetaPage,
    APITrigger: APITrigger_1.APITrigger,
    APITriggerWrapper: APITriggerWrapper_1.APITriggerWrapper,
    AWSAccountCreateRequest: AWSAccountCreateRequest_1.AWSAccountCreateRequest,
    AWSAccountCreateRequestAttributes: AWSAccountCreateRequestAttributes_1.AWSAccountCreateRequestAttributes,
    AWSAccountCreateRequestData: AWSAccountCreateRequestData_1.AWSAccountCreateRequestData,
    AWSAccountResponse: AWSAccountResponse_1.AWSAccountResponse,
    AWSAccountResponseAttributes: AWSAccountResponseAttributes_1.AWSAccountResponseAttributes,
    AWSAccountResponseData: AWSAccountResponseData_1.AWSAccountResponseData,
    AWSAccountUpdateRequest: AWSAccountUpdateRequest_1.AWSAccountUpdateRequest,
    AWSAccountUpdateRequestAttributes: AWSAccountUpdateRequestAttributes_1.AWSAccountUpdateRequestAttributes,
    AWSAccountUpdateRequestData: AWSAccountUpdateRequestData_1.AWSAccountUpdateRequestData,
    AWSAccountsResponse: AWSAccountsResponse_1.AWSAccountsResponse,
    AWSAssumeRole: AWSAssumeRole_1.AWSAssumeRole,
    AWSAssumeRoleUpdate: AWSAssumeRoleUpdate_1.AWSAssumeRoleUpdate,
    AWSAuthConfigKeys: AWSAuthConfigKeys_1.AWSAuthConfigKeys,
    AWSAuthConfigRole: AWSAuthConfigRole_1.AWSAuthConfigRole,
    AWSCloudAuthPersonaMappingAttributesResponse: AWSCloudAuthPersonaMappingAttributesResponse_1.AWSCloudAuthPersonaMappingAttributesResponse,
    AWSCloudAuthPersonaMappingCreateAttributes: AWSCloudAuthPersonaMappingCreateAttributes_1.AWSCloudAuthPersonaMappingCreateAttributes,
    AWSCloudAuthPersonaMappingCreateData: AWSCloudAuthPersonaMappingCreateData_1.AWSCloudAuthPersonaMappingCreateData,
    AWSCloudAuthPersonaMappingCreateRequest: AWSCloudAuthPersonaMappingCreateRequest_1.AWSCloudAuthPersonaMappingCreateRequest,
    AWSCloudAuthPersonaMappingDataResponse: AWSCloudAuthPersonaMappingDataResponse_1.AWSCloudAuthPersonaMappingDataResponse,
    AWSCloudAuthPersonaMappingResponse: AWSCloudAuthPersonaMappingResponse_1.AWSCloudAuthPersonaMappingResponse,
    AWSCloudAuthPersonaMappingsResponse: AWSCloudAuthPersonaMappingsResponse_1.AWSCloudAuthPersonaMappingsResponse,
    AWSEventBridgeAccountConfiguration: AWSEventBridgeAccountConfiguration_1.AWSEventBridgeAccountConfiguration,
    AWSEventBridgeCreateRequest: AWSEventBridgeCreateRequest_1.AWSEventBridgeCreateRequest,
    AWSEventBridgeCreateRequestAttributes: AWSEventBridgeCreateRequestAttributes_1.AWSEventBridgeCreateRequestAttributes,
    AWSEventBridgeCreateRequestData: AWSEventBridgeCreateRequestData_1.AWSEventBridgeCreateRequestData,
    AWSEventBridgeCreateResponse: AWSEventBridgeCreateResponse_1.AWSEventBridgeCreateResponse,
    AWSEventBridgeCreateResponseAttributes: AWSEventBridgeCreateResponseAttributes_1.AWSEventBridgeCreateResponseAttributes,
    AWSEventBridgeCreateResponseData: AWSEventBridgeCreateResponseData_1.AWSEventBridgeCreateResponseData,
    AWSEventBridgeDeleteRequest: AWSEventBridgeDeleteRequest_1.AWSEventBridgeDeleteRequest,
    AWSEventBridgeDeleteRequestAttributes: AWSEventBridgeDeleteRequestAttributes_1.AWSEventBridgeDeleteRequestAttributes,
    AWSEventBridgeDeleteRequestData: AWSEventBridgeDeleteRequestData_1.AWSEventBridgeDeleteRequestData,
    AWSEventBridgeDeleteResponse: AWSEventBridgeDeleteResponse_1.AWSEventBridgeDeleteResponse,
    AWSEventBridgeDeleteResponseAttributes: AWSEventBridgeDeleteResponseAttributes_1.AWSEventBridgeDeleteResponseAttributes,
    AWSEventBridgeDeleteResponseData: AWSEventBridgeDeleteResponseData_1.AWSEventBridgeDeleteResponseData,
    AWSEventBridgeListResponse: AWSEventBridgeListResponse_1.AWSEventBridgeListResponse,
    AWSEventBridgeListResponseAttributes: AWSEventBridgeListResponseAttributes_1.AWSEventBridgeListResponseAttributes,
    AWSEventBridgeListResponseData: AWSEventBridgeListResponseData_1.AWSEventBridgeListResponseData,
    AWSEventBridgeSource: AWSEventBridgeSource_1.AWSEventBridgeSource,
    AWSIntegration: AWSIntegration_1.AWSIntegration,
    AWSIntegrationIamPermissionsResponse: AWSIntegrationIamPermissionsResponse_1.AWSIntegrationIamPermissionsResponse,
    AWSIntegrationIamPermissionsResponseAttributes: AWSIntegrationIamPermissionsResponseAttributes_1.AWSIntegrationIamPermissionsResponseAttributes,
    AWSIntegrationIamPermissionsResponseData: AWSIntegrationIamPermissionsResponseData_1.AWSIntegrationIamPermissionsResponseData,
    AWSIntegrationUpdate: AWSIntegrationUpdate_1.AWSIntegrationUpdate,
    AWSLambdaForwarderConfig: AWSLambdaForwarderConfig_1.AWSLambdaForwarderConfig,
    AWSLambdaForwarderConfigLogSourceConfig: AWSLambdaForwarderConfigLogSourceConfig_1.AWSLambdaForwarderConfigLogSourceConfig,
    AWSLogSourceTagFilter: AWSLogSourceTagFilter_1.AWSLogSourceTagFilter,
    AWSLogsConfig: AWSLogsConfig_1.AWSLogsConfig,
    AWSLogsServicesResponse: AWSLogsServicesResponse_1.AWSLogsServicesResponse,
    AWSLogsServicesResponseAttributes: AWSLogsServicesResponseAttributes_1.AWSLogsServicesResponseAttributes,
    AWSLogsServicesResponseData: AWSLogsServicesResponseData_1.AWSLogsServicesResponseData,
    AWSMetricsConfig: AWSMetricsConfig_1.AWSMetricsConfig,
    AWSNamespaceFiltersExcludeOnly: AWSNamespaceFiltersExcludeOnly_1.AWSNamespaceFiltersExcludeOnly,
    AWSNamespaceFiltersIncludeOnly: AWSNamespaceFiltersIncludeOnly_1.AWSNamespaceFiltersIncludeOnly,
    AWSNamespaceTagFilter: AWSNamespaceTagFilter_1.AWSNamespaceTagFilter,
    AWSNamespacesResponse: AWSNamespacesResponse_1.AWSNamespacesResponse,
    AWSNamespacesResponseAttributes: AWSNamespacesResponseAttributes_1.AWSNamespacesResponseAttributes,
    AWSNamespacesResponseData: AWSNamespacesResponseData_1.AWSNamespacesResponseData,
    AWSNewExternalIDResponse: AWSNewExternalIDResponse_1.AWSNewExternalIDResponse,
    AWSNewExternalIDResponseAttributes: AWSNewExternalIDResponseAttributes_1.AWSNewExternalIDResponseAttributes,
    AWSNewExternalIDResponseData: AWSNewExternalIDResponseData_1.AWSNewExternalIDResponseData,
    AWSRegionsIncludeAll: AWSRegionsIncludeAll_1.AWSRegionsIncludeAll,
    AWSRegionsIncludeOnly: AWSRegionsIncludeOnly_1.AWSRegionsIncludeOnly,
    AWSResourcesConfig: AWSResourcesConfig_1.AWSResourcesConfig,
    AWSTracesConfig: AWSTracesConfig_1.AWSTracesConfig,
    AccountFilteringConfig: AccountFilteringConfig_1.AccountFilteringConfig,
    ActionConnectionAttributes: ActionConnectionAttributes_1.ActionConnectionAttributes,
    ActionConnectionAttributesUpdate: ActionConnectionAttributesUpdate_1.ActionConnectionAttributesUpdate,
    ActionConnectionData: ActionConnectionData_1.ActionConnectionData,
    ActionConnectionDataUpdate: ActionConnectionDataUpdate_1.ActionConnectionDataUpdate,
    ActionQuery: ActionQuery_1.ActionQuery,
    ActionQueryMockedOutputsObject: ActionQueryMockedOutputsObject_1.ActionQueryMockedOutputsObject,
    ActionQueryProperties: ActionQueryProperties_1.ActionQueryProperties,
    ActionQuerySpecConnectionGroup: ActionQuerySpecConnectionGroup_1.ActionQuerySpecConnectionGroup,
    ActionQuerySpecObject: ActionQuerySpecObject_1.ActionQuerySpecObject,
    ActiveBillingDimensionsAttributes: ActiveBillingDimensionsAttributes_1.ActiveBillingDimensionsAttributes,
    ActiveBillingDimensionsBody: ActiveBillingDimensionsBody_1.ActiveBillingDimensionsBody,
    ActiveBillingDimensionsResponse: ActiveBillingDimensionsResponse_1.ActiveBillingDimensionsResponse,
    AddMemberTeamRequest: AddMemberTeamRequest_1.AddMemberTeamRequest,
    Advisory: Advisory_1.Advisory,
    AlertEventAttributes: AlertEventAttributes_1.AlertEventAttributes,
    AlertEventAttributesLinksItem: AlertEventAttributesLinksItem_1.AlertEventAttributesLinksItem,
    AlertEventCustomAttributes: AlertEventCustomAttributes_1.AlertEventCustomAttributes,
    AlertEventCustomAttributesLinksItems: AlertEventCustomAttributesLinksItems_1.AlertEventCustomAttributesLinksItems,
    Annotation: Annotation_1.Annotation,
    AnnotationDisplay: AnnotationDisplay_1.AnnotationDisplay,
    AnnotationDisplayBounds: AnnotationDisplayBounds_1.AnnotationDisplayBounds,
    AnnotationMarkdownTextAnnotation: AnnotationMarkdownTextAnnotation_1.AnnotationMarkdownTextAnnotation,
    AnthropicAPIKey: AnthropicAPIKey_1.AnthropicAPIKey,
    AnthropicAPIKeyUpdate: AnthropicAPIKeyUpdate_1.AnthropicAPIKeyUpdate,
    AnthropicIntegration: AnthropicIntegration_1.AnthropicIntegration,
    AnthropicIntegrationUpdate: AnthropicIntegrationUpdate_1.AnthropicIntegrationUpdate,
    AppBuilderEvent: AppBuilderEvent_1.AppBuilderEvent,
    AppKeyRegistrationData: AppKeyRegistrationData_1.AppKeyRegistrationData,
    AppMeta: AppMeta_1.AppMeta,
    AppRelationship: AppRelationship_1.AppRelationship,
    AppTriggerWrapper: AppTriggerWrapper_1.AppTriggerWrapper,
    ApplicationKeyCreateAttributes: ApplicationKeyCreateAttributes_1.ApplicationKeyCreateAttributes,
    ApplicationKeyCreateData: ApplicationKeyCreateData_1.ApplicationKeyCreateData,
    ApplicationKeyCreateRequest: ApplicationKeyCreateRequest_1.ApplicationKeyCreateRequest,
    ApplicationKeyRelationships: ApplicationKeyRelationships_1.ApplicationKeyRelationships,
    ApplicationKeyResponse: ApplicationKeyResponse_1.ApplicationKeyResponse,
    ApplicationKeyResponseMeta: ApplicationKeyResponseMeta_1.ApplicationKeyResponseMeta,
    ApplicationKeyResponseMetaPage: ApplicationKeyResponseMetaPage_1.ApplicationKeyResponseMetaPage,
    ApplicationKeyUpdateAttributes: ApplicationKeyUpdateAttributes_1.ApplicationKeyUpdateAttributes,
    ApplicationKeyUpdateData: ApplicationKeyUpdateData_1.ApplicationKeyUpdateData,
    ApplicationKeyUpdateRequest: ApplicationKeyUpdateRequest_1.ApplicationKeyUpdateRequest,
    ApplicationSecurityWafCustomRuleAction: ApplicationSecurityWafCustomRuleAction_1.ApplicationSecurityWafCustomRuleAction,
    ApplicationSecurityWafCustomRuleActionParameters: ApplicationSecurityWafCustomRuleActionParameters_1.ApplicationSecurityWafCustomRuleActionParameters,
    ApplicationSecurityWafCustomRuleAttributes: ApplicationSecurityWafCustomRuleAttributes_1.ApplicationSecurityWafCustomRuleAttributes,
    ApplicationSecurityWafCustomRuleCondition: ApplicationSecurityWafCustomRuleCondition_1.ApplicationSecurityWafCustomRuleCondition,
    ApplicationSecurityWafCustomRuleConditionInput: ApplicationSecurityWafCustomRuleConditionInput_1.ApplicationSecurityWafCustomRuleConditionInput,
    ApplicationSecurityWafCustomRuleConditionOptions: ApplicationSecurityWafCustomRuleConditionOptions_1.ApplicationSecurityWafCustomRuleConditionOptions,
    ApplicationSecurityWafCustomRuleConditionParameters: ApplicationSecurityWafCustomRuleConditionParameters_1.ApplicationSecurityWafCustomRuleConditionParameters,
    ApplicationSecurityWafCustomRuleCreateAttributes: ApplicationSecurityWafCustomRuleCreateAttributes_1.ApplicationSecurityWafCustomRuleCreateAttributes,
    ApplicationSecurityWafCustomRuleCreateData: ApplicationSecurityWafCustomRuleCreateData_1.ApplicationSecurityWafCustomRuleCreateData,
    ApplicationSecurityWafCustomRuleCreateRequest: ApplicationSecurityWafCustomRuleCreateRequest_1.ApplicationSecurityWafCustomRuleCreateRequest,
    ApplicationSecurityWafCustomRuleData: ApplicationSecurityWafCustomRuleData_1.ApplicationSecurityWafCustomRuleData,
    ApplicationSecurityWafCustomRuleListResponse: ApplicationSecurityWafCustomRuleListResponse_1.ApplicationSecurityWafCustomRuleListResponse,
    ApplicationSecurityWafCustomRuleMetadata: ApplicationSecurityWafCustomRuleMetadata_1.ApplicationSecurityWafCustomRuleMetadata,
    ApplicationSecurityWafCustomRuleResponse: ApplicationSecurityWafCustomRuleResponse_1.ApplicationSecurityWafCustomRuleResponse,
    ApplicationSecurityWafCustomRuleScope: ApplicationSecurityWafCustomRuleScope_1.ApplicationSecurityWafCustomRuleScope,
    ApplicationSecurityWafCustomRuleTags: ApplicationSecurityWafCustomRuleTags_1.ApplicationSecurityWafCustomRuleTags,
    ApplicationSecurityWafCustomRuleUpdateAttributes: ApplicationSecurityWafCustomRuleUpdateAttributes_1.ApplicationSecurityWafCustomRuleUpdateAttributes,
    ApplicationSecurityWafCustomRuleUpdateData: ApplicationSecurityWafCustomRuleUpdateData_1.ApplicationSecurityWafCustomRuleUpdateData,
    ApplicationSecurityWafCustomRuleUpdateRequest: ApplicationSecurityWafCustomRuleUpdateRequest_1.ApplicationSecurityWafCustomRuleUpdateRequest,
    ApplicationSecurityWafExclusionFilterAttributes: ApplicationSecurityWafExclusionFilterAttributes_1.ApplicationSecurityWafExclusionFilterAttributes,
    ApplicationSecurityWafExclusionFilterCreateAttributes: ApplicationSecurityWafExclusionFilterCreateAttributes_1.ApplicationSecurityWafExclusionFilterCreateAttributes,
    ApplicationSecurityWafExclusionFilterCreateData: ApplicationSecurityWafExclusionFilterCreateData_1.ApplicationSecurityWafExclusionFilterCreateData,
    ApplicationSecurityWafExclusionFilterCreateRequest: ApplicationSecurityWafExclusionFilterCreateRequest_1.ApplicationSecurityWafExclusionFilterCreateRequest,
    ApplicationSecurityWafExclusionFilterMetadata: ApplicationSecurityWafExclusionFilterMetadata_1.ApplicationSecurityWafExclusionFilterMetadata,
    ApplicationSecurityWafExclusionFilterResource: ApplicationSecurityWafExclusionFilterResource_1.ApplicationSecurityWafExclusionFilterResource,
    ApplicationSecurityWafExclusionFilterResponse: ApplicationSecurityWafExclusionFilterResponse_1.ApplicationSecurityWafExclusionFilterResponse,
    ApplicationSecurityWafExclusionFilterRulesTarget: ApplicationSecurityWafExclusionFilterRulesTarget_1.ApplicationSecurityWafExclusionFilterRulesTarget,
    ApplicationSecurityWafExclusionFilterRulesTargetTags: ApplicationSecurityWafExclusionFilterRulesTargetTags_1.ApplicationSecurityWafExclusionFilterRulesTargetTags,
    ApplicationSecurityWafExclusionFilterScope: ApplicationSecurityWafExclusionFilterScope_1.ApplicationSecurityWafExclusionFilterScope,
    ApplicationSecurityWafExclusionFilterUpdateAttributes: ApplicationSecurityWafExclusionFilterUpdateAttributes_1.ApplicationSecurityWafExclusionFilterUpdateAttributes,
    ApplicationSecurityWafExclusionFilterUpdateData: ApplicationSecurityWafExclusionFilterUpdateData_1.ApplicationSecurityWafExclusionFilterUpdateData,
    ApplicationSecurityWafExclusionFilterUpdateRequest: ApplicationSecurityWafExclusionFilterUpdateRequest_1.ApplicationSecurityWafExclusionFilterUpdateRequest,
    ApplicationSecurityWafExclusionFiltersResponse: ApplicationSecurityWafExclusionFiltersResponse_1.ApplicationSecurityWafExclusionFiltersResponse,
    ArbitraryCostUpsertRequest: ArbitraryCostUpsertRequest_1.ArbitraryCostUpsertRequest,
    ArbitraryCostUpsertRequestData: ArbitraryCostUpsertRequestData_1.ArbitraryCostUpsertRequestData,
    ArbitraryCostUpsertRequestDataAttributes: ArbitraryCostUpsertRequestDataAttributes_1.ArbitraryCostUpsertRequestDataAttributes,
    ArbitraryCostUpsertRequestDataAttributesCostsToAllocateItems: ArbitraryCostUpsertRequestDataAttributesCostsToAllocateItems_1.ArbitraryCostUpsertRequestDataAttributesCostsToAllocateItems,
    ArbitraryCostUpsertRequestDataAttributesStrategy: ArbitraryCostUpsertRequestDataAttributesStrategy_1.ArbitraryCostUpsertRequestDataAttributesStrategy,
    ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByFiltersItems: ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByFiltersItems_1.ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByFiltersItems,
    ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems: ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems_1.ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems,
    ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItemsAllocatedTagsItems: ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItemsAllocatedTagsItems_1.ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItemsAllocatedTagsItems,
    ArbitraryCostUpsertRequestDataAttributesStrategyBasedOnCostsItems: ArbitraryCostUpsertRequestDataAttributesStrategyBasedOnCostsItems_1.ArbitraryCostUpsertRequestDataAttributesStrategyBasedOnCostsItems,
    ArbitraryCostUpsertRequestDataAttributesStrategyEvaluateGroupedByFiltersItems: ArbitraryCostUpsertRequestDataAttributesStrategyEvaluateGroupedByFiltersItems_1.ArbitraryCostUpsertRequestDataAttributesStrategyEvaluateGroupedByFiltersItems,
    ArbitraryRuleResponse: ArbitraryRuleResponse_1.ArbitraryRuleResponse,
    ArbitraryRuleResponseArray: ArbitraryRuleResponseArray_1.ArbitraryRuleResponseArray,
    ArbitraryRuleResponseArrayMeta: ArbitraryRuleResponseArrayMeta_1.ArbitraryRuleResponseArrayMeta,
    ArbitraryRuleResponseData: ArbitraryRuleResponseData_1.ArbitraryRuleResponseData,
    ArbitraryRuleResponseDataAttributes: ArbitraryRuleResponseDataAttributes_1.ArbitraryRuleResponseDataAttributes,
    ArbitraryRuleResponseDataAttributesCostsToAllocateItems: ArbitraryRuleResponseDataAttributesCostsToAllocateItems_1.ArbitraryRuleResponseDataAttributesCostsToAllocateItems,
    ArbitraryRuleResponseDataAttributesStrategy: ArbitraryRuleResponseDataAttributesStrategy_1.ArbitraryRuleResponseDataAttributesStrategy,
    ArbitraryRuleResponseDataAttributesStrategyAllocatedByFiltersItems: ArbitraryRuleResponseDataAttributesStrategyAllocatedByFiltersItems_1.ArbitraryRuleResponseDataAttributesStrategyAllocatedByFiltersItems,
    ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems: ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems_1.ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems,
    ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems: ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems_1.ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems,
    ArbitraryRuleResponseDataAttributesStrategyBasedOnCostsItems: ArbitraryRuleResponseDataAttributesStrategyBasedOnCostsItems_1.ArbitraryRuleResponseDataAttributesStrategyBasedOnCostsItems,
    ArbitraryRuleResponseDataAttributesStrategyEvaluateGroupedByFiltersItems: ArbitraryRuleResponseDataAttributesStrategyEvaluateGroupedByFiltersItems_1.ArbitraryRuleResponseDataAttributesStrategyEvaluateGroupedByFiltersItems,
    Argument: Argument_1.Argument,
    AsanaAccessToken: AsanaAccessToken_1.AsanaAccessToken,
    AsanaAccessTokenUpdate: AsanaAccessTokenUpdate_1.AsanaAccessTokenUpdate,
    AsanaIntegration: AsanaIntegration_1.AsanaIntegration,
    AsanaIntegrationUpdate: AsanaIntegrationUpdate_1.AsanaIntegrationUpdate,
    Asset: Asset_1.Asset,
    AssetAttributes: AssetAttributes_1.AssetAttributes,
    AssetOperatingSystem: AssetOperatingSystem_1.AssetOperatingSystem,
    AssetRisks: AssetRisks_1.AssetRisks,
    AssetVersion: AssetVersion_1.AssetVersion,
    AssignSeatsUserRequest: AssignSeatsUserRequest_1.AssignSeatsUserRequest,
    AssignSeatsUserRequestData: AssignSeatsUserRequestData_1.AssignSeatsUserRequestData,
    AssignSeatsUserRequestDataAttributes: AssignSeatsUserRequestDataAttributes_1.AssignSeatsUserRequestDataAttributes,
    AssignSeatsUserResponse: AssignSeatsUserResponse_1.AssignSeatsUserResponse,
    AssignSeatsUserResponseData: AssignSeatsUserResponseData_1.AssignSeatsUserResponseData,
    AssignSeatsUserResponseDataAttributes: AssignSeatsUserResponseDataAttributes_1.AssignSeatsUserResponseDataAttributes,
    AttachCaseRequest: AttachCaseRequest_1.AttachCaseRequest,
    AttachCaseRequestData: AttachCaseRequestData_1.AttachCaseRequestData,
    AttachCaseRequestDataRelationships: AttachCaseRequestDataRelationships_1.AttachCaseRequestDataRelationships,
    AttachJiraIssueRequest: AttachJiraIssueRequest_1.AttachJiraIssueRequest,
    AttachJiraIssueRequestData: AttachJiraIssueRequestData_1.AttachJiraIssueRequestData,
    AttachJiraIssueRequestDataAttributes: AttachJiraIssueRequestDataAttributes_1.AttachJiraIssueRequestDataAttributes,
    AttachJiraIssueRequestDataRelationships: AttachJiraIssueRequestDataRelationships_1.AttachJiraIssueRequestDataRelationships,
    Attachment: Attachment_1.Attachment,
    AttachmentArray: AttachmentArray_1.AttachmentArray,
    AttachmentData: AttachmentData_1.AttachmentData,
    AttachmentDataAttributes: AttachmentDataAttributes_1.AttachmentDataAttributes,
    AttachmentDataAttributesAttachment: AttachmentDataAttributesAttachment_1.AttachmentDataAttributesAttachment,
    AttachmentDataRelationships: AttachmentDataRelationships_1.AttachmentDataRelationships,
    AuditLogsEvent: AuditLogsEvent_1.AuditLogsEvent,
    AuditLogsEventAttributes: AuditLogsEventAttributes_1.AuditLogsEventAttributes,
    AuditLogsEventsResponse: AuditLogsEventsResponse_1.AuditLogsEventsResponse,
    AuditLogsQueryFilter: AuditLogsQueryFilter_1.AuditLogsQueryFilter,
    AuditLogsQueryOptions: AuditLogsQueryOptions_1.AuditLogsQueryOptions,
    AuditLogsQueryPageOptions: AuditLogsQueryPageOptions_1.AuditLogsQueryPageOptions,
    AuditLogsResponseLinks: AuditLogsResponseLinks_1.AuditLogsResponseLinks,
    AuditLogsResponseMetadata: AuditLogsResponseMetadata_1.AuditLogsResponseMetadata,
    AuditLogsResponsePage: AuditLogsResponsePage_1.AuditLogsResponsePage,
    AuditLogsSearchEventsRequest: AuditLogsSearchEventsRequest_1.AuditLogsSearchEventsRequest,
    AuditLogsWarning: AuditLogsWarning_1.AuditLogsWarning,
    AuthNMapping: AuthNMapping_1.AuthNMapping,
    AuthNMappingAttributes: AuthNMappingAttributes_1.AuthNMappingAttributes,
    AuthNMappingCreateAttributes: AuthNMappingCreateAttributes_1.AuthNMappingCreateAttributes,
    AuthNMappingCreateData: AuthNMappingCreateData_1.AuthNMappingCreateData,
    AuthNMappingCreateRequest: AuthNMappingCreateRequest_1.AuthNMappingCreateRequest,
    AuthNMappingRelationshipToRole: AuthNMappingRelationshipToRole_1.AuthNMappingRelationshipToRole,
    AuthNMappingRelationshipToTeam: AuthNMappingRelationshipToTeam_1.AuthNMappingRelationshipToTeam,
    AuthNMappingRelationships: AuthNMappingRelationships_1.AuthNMappingRelationships,
    AuthNMappingResponse: AuthNMappingResponse_1.AuthNMappingResponse,
    AuthNMappingTeam: AuthNMappingTeam_1.AuthNMappingTeam,
    AuthNMappingTeamAttributes: AuthNMappingTeamAttributes_1.AuthNMappingTeamAttributes,
    AuthNMappingUpdateAttributes: AuthNMappingUpdateAttributes_1.AuthNMappingUpdateAttributes,
    AuthNMappingUpdateData: AuthNMappingUpdateData_1.AuthNMappingUpdateData,
    AuthNMappingUpdateRequest: AuthNMappingUpdateRequest_1.AuthNMappingUpdateRequest,
    AuthNMappingsResponse: AuthNMappingsResponse_1.AuthNMappingsResponse,
    AutoCloseInactiveCases: AutoCloseInactiveCases_1.AutoCloseInactiveCases,
    AutoTransitionAssignedCases: AutoTransitionAssignedCases_1.AutoTransitionAssignedCases,
    AwsCURConfig: AwsCURConfig_1.AwsCURConfig,
    AwsCURConfigAttributes: AwsCURConfigAttributes_1.AwsCURConfigAttributes,
    AwsCURConfigPatchData: AwsCURConfigPatchData_1.AwsCURConfigPatchData,
    AwsCURConfigPatchRequest: AwsCURConfigPatchRequest_1.AwsCURConfigPatchRequest,
    AwsCURConfigPatchRequestAttributes: AwsCURConfigPatchRequestAttributes_1.AwsCURConfigPatchRequestAttributes,
    AwsCURConfigPostData: AwsCURConfigPostData_1.AwsCURConfigPostData,
    AwsCURConfigPostRequest: AwsCURConfigPostRequest_1.AwsCURConfigPostRequest,
    AwsCURConfigPostRequestAttributes: AwsCURConfigPostRequestAttributes_1.AwsCURConfigPostRequestAttributes,
    AwsCURConfigsResponse: AwsCURConfigsResponse_1.AwsCURConfigsResponse,
    AwsCurConfigResponse: AwsCurConfigResponse_1.AwsCurConfigResponse,
    AwsCurConfigResponseData: AwsCurConfigResponseData_1.AwsCurConfigResponseData,
    AwsCurConfigResponseDataAttributes: AwsCurConfigResponseDataAttributes_1.AwsCurConfigResponseDataAttributes,
    AwsCurConfigResponseDataAttributesAccountFilters: AwsCurConfigResponseDataAttributesAccountFilters_1.AwsCurConfigResponseDataAttributesAccountFilters,
    AwsOnDemandAttributes: AwsOnDemandAttributes_1.AwsOnDemandAttributes,
    AwsOnDemandCreateAttributes: AwsOnDemandCreateAttributes_1.AwsOnDemandCreateAttributes,
    AwsOnDemandCreateData: AwsOnDemandCreateData_1.AwsOnDemandCreateData,
    AwsOnDemandCreateRequest: AwsOnDemandCreateRequest_1.AwsOnDemandCreateRequest,
    AwsOnDemandData: AwsOnDemandData_1.AwsOnDemandData,
    AwsOnDemandListResponse: AwsOnDemandListResponse_1.AwsOnDemandListResponse,
    AwsOnDemandResponse: AwsOnDemandResponse_1.AwsOnDemandResponse,
    AwsScanOptionsAttributes: AwsScanOptionsAttributes_1.AwsScanOptionsAttributes,
    AwsScanOptionsCreateAttributes: AwsScanOptionsCreateAttributes_1.AwsScanOptionsCreateAttributes,
    AwsScanOptionsCreateData: AwsScanOptionsCreateData_1.AwsScanOptionsCreateData,
    AwsScanOptionsCreateRequest: AwsScanOptionsCreateRequest_1.AwsScanOptionsCreateRequest,
    AwsScanOptionsData: AwsScanOptionsData_1.AwsScanOptionsData,
    AwsScanOptionsListResponse: AwsScanOptionsListResponse_1.AwsScanOptionsListResponse,
    AwsScanOptionsResponse: AwsScanOptionsResponse_1.AwsScanOptionsResponse,
    AwsScanOptionsUpdateAttributes: AwsScanOptionsUpdateAttributes_1.AwsScanOptionsUpdateAttributes,
    AwsScanOptionsUpdateData: AwsScanOptionsUpdateData_1.AwsScanOptionsUpdateData,
    AwsScanOptionsUpdateRequest: AwsScanOptionsUpdateRequest_1.AwsScanOptionsUpdateRequest,
    AzureIntegration: AzureIntegration_1.AzureIntegration,
    AzureIntegrationUpdate: AzureIntegrationUpdate_1.AzureIntegrationUpdate,
    AzureScanOptions: AzureScanOptions_1.AzureScanOptions,
    AzureScanOptionsArray: AzureScanOptionsArray_1.AzureScanOptionsArray,
    AzureScanOptionsData: AzureScanOptionsData_1.AzureScanOptionsData,
    AzureScanOptionsDataAttributes: AzureScanOptionsDataAttributes_1.AzureScanOptionsDataAttributes,
    AzureScanOptionsInputUpdate: AzureScanOptionsInputUpdate_1.AzureScanOptionsInputUpdate,
    AzureScanOptionsInputUpdateData: AzureScanOptionsInputUpdateData_1.AzureScanOptionsInputUpdateData,
    AzureScanOptionsInputUpdateDataAttributes: AzureScanOptionsInputUpdateDataAttributes_1.AzureScanOptionsInputUpdateDataAttributes,
    AzureStorageDestination: AzureStorageDestination_1.AzureStorageDestination,
    AzureTenant: AzureTenant_1.AzureTenant,
    AzureTenantUpdate: AzureTenantUpdate_1.AzureTenantUpdate,
    AzureUCConfig: AzureUCConfig_1.AzureUCConfig,
    AzureUCConfigPair: AzureUCConfigPair_1.AzureUCConfigPair,
    AzureUCConfigPairAttributes: AzureUCConfigPairAttributes_1.AzureUCConfigPairAttributes,
    AzureUCConfigPairsResponse: AzureUCConfigPairsResponse_1.AzureUCConfigPairsResponse,
    AzureUCConfigPatchData: AzureUCConfigPatchData_1.AzureUCConfigPatchData,
    AzureUCConfigPatchRequest: AzureUCConfigPatchRequest_1.AzureUCConfigPatchRequest,
    AzureUCConfigPatchRequestAttributes: AzureUCConfigPatchRequestAttributes_1.AzureUCConfigPatchRequestAttributes,
    AzureUCConfigPostData: AzureUCConfigPostData_1.AzureUCConfigPostData,
    AzureUCConfigPostRequest: AzureUCConfigPostRequest_1.AzureUCConfigPostRequest,
    AzureUCConfigPostRequestAttributes: AzureUCConfigPostRequestAttributes_1.AzureUCConfigPostRequestAttributes,
    AzureUCConfigsResponse: AzureUCConfigsResponse_1.AzureUCConfigsResponse,
    BatchDeleteRowsRequestArray: BatchDeleteRowsRequestArray_1.BatchDeleteRowsRequestArray,
    BatchDeleteRowsRequestData: BatchDeleteRowsRequestData_1.BatchDeleteRowsRequestData,
    BatchUpsertRowsRequestArray: BatchUpsertRowsRequestArray_1.BatchUpsertRowsRequestArray,
    BatchUpsertRowsRequestData: BatchUpsertRowsRequestData_1.BatchUpsertRowsRequestData,
    BatchUpsertRowsRequestDataAttributes: BatchUpsertRowsRequestDataAttributes_1.BatchUpsertRowsRequestDataAttributes,
    BillConfig: BillConfig_1.BillConfig,
    BillingDimensionsMappingBodyItem: BillingDimensionsMappingBodyItem_1.BillingDimensionsMappingBodyItem,
    BillingDimensionsMappingBodyItemAttributes: BillingDimensionsMappingBodyItemAttributes_1.BillingDimensionsMappingBodyItemAttributes,
    BillingDimensionsMappingBodyItemAttributesEndpointsItems: BillingDimensionsMappingBodyItemAttributesEndpointsItems_1.BillingDimensionsMappingBodyItemAttributesEndpointsItems,
    BillingDimensionsMappingResponse: BillingDimensionsMappingResponse_1.BillingDimensionsMappingResponse,
    BranchCoverageSummaryRequest: BranchCoverageSummaryRequest_1.BranchCoverageSummaryRequest,
    BranchCoverageSummaryRequestAttributes: BranchCoverageSummaryRequestAttributes_1.BranchCoverageSummaryRequestAttributes,
    BranchCoverageSummaryRequestData: BranchCoverageSummaryRequestData_1.BranchCoverageSummaryRequestData,
    Budget: Budget_1.Budget,
    BudgetArray: BudgetArray_1.BudgetArray,
    BudgetAttributes: BudgetAttributes_1.BudgetAttributes,
    BudgetValidationRequest: BudgetValidationRequest_1.BudgetValidationRequest,
    BudgetValidationRequestData: BudgetValidationRequestData_1.BudgetValidationRequestData,
    BudgetValidationResponse: BudgetValidationResponse_1.BudgetValidationResponse,
    BudgetValidationResponseData: BudgetValidationResponseData_1.BudgetValidationResponseData,
    BudgetValidationResponseDataAttributes: BudgetValidationResponseDataAttributes_1.BudgetValidationResponseDataAttributes,
    BudgetWithEntries: BudgetWithEntries_1.BudgetWithEntries,
    BudgetWithEntriesData: BudgetWithEntriesData_1.BudgetWithEntriesData,
    BudgetWithEntriesDataAttributes: BudgetWithEntriesDataAttributes_1.BudgetWithEntriesDataAttributes,
    BudgetWithEntriesDataAttributesEntriesItems: BudgetWithEntriesDataAttributesEntriesItems_1.BudgetWithEntriesDataAttributesEntriesItems,
    BudgetWithEntriesDataAttributesEntriesItemsTagFiltersItems: BudgetWithEntriesDataAttributesEntriesItemsTagFiltersItems_1.BudgetWithEntriesDataAttributesEntriesItemsTagFiltersItems,
    BulkDeleteAppsDatastoreItemsRequest: BulkDeleteAppsDatastoreItemsRequest_1.BulkDeleteAppsDatastoreItemsRequest,
    BulkDeleteAppsDatastoreItemsRequestData: BulkDeleteAppsDatastoreItemsRequestData_1.BulkDeleteAppsDatastoreItemsRequestData,
    BulkDeleteAppsDatastoreItemsRequestDataAttributes: BulkDeleteAppsDatastoreItemsRequestDataAttributes_1.BulkDeleteAppsDatastoreItemsRequestDataAttributes,
    BulkMuteFindingsRequest: BulkMuteFindingsRequest_1.BulkMuteFindingsRequest,
    BulkMuteFindingsRequestAttributes: BulkMuteFindingsRequestAttributes_1.BulkMuteFindingsRequestAttributes,
    BulkMuteFindingsRequestData: BulkMuteFindingsRequestData_1.BulkMuteFindingsRequestData,
    BulkMuteFindingsRequestMeta: BulkMuteFindingsRequestMeta_1.BulkMuteFindingsRequestMeta,
    BulkMuteFindingsRequestMetaFindings: BulkMuteFindingsRequestMetaFindings_1.BulkMuteFindingsRequestMetaFindings,
    BulkMuteFindingsRequestProperties: BulkMuteFindingsRequestProperties_1.BulkMuteFindingsRequestProperties,
    BulkMuteFindingsResponse: BulkMuteFindingsResponse_1.BulkMuteFindingsResponse,
    BulkMuteFindingsResponseData: BulkMuteFindingsResponseData_1.BulkMuteFindingsResponseData,
    BulkPutAppsDatastoreItemsRequest: BulkPutAppsDatastoreItemsRequest_1.BulkPutAppsDatastoreItemsRequest,
    BulkPutAppsDatastoreItemsRequestData: BulkPutAppsDatastoreItemsRequestData_1.BulkPutAppsDatastoreItemsRequestData,
    BulkPutAppsDatastoreItemsRequestDataAttributes: BulkPutAppsDatastoreItemsRequestDataAttributes_1.BulkPutAppsDatastoreItemsRequestDataAttributes,
    CIAppAggregateBucketValueTimeseriesPoint: CIAppAggregateBucketValueTimeseriesPoint_1.CIAppAggregateBucketValueTimeseriesPoint,
    CIAppAggregateSort: CIAppAggregateSort_1.CIAppAggregateSort,
    CIAppCIError: CIAppCIError_1.CIAppCIError,
    CIAppCompute: CIAppCompute_1.CIAppCompute,
    CIAppCreatePipelineEventRequest: CIAppCreatePipelineEventRequest_1.CIAppCreatePipelineEventRequest,
    CIAppCreatePipelineEventRequestAttributes: CIAppCreatePipelineEventRequestAttributes_1.CIAppCreatePipelineEventRequestAttributes,
    CIAppCreatePipelineEventRequestData: CIAppCreatePipelineEventRequestData_1.CIAppCreatePipelineEventRequestData,
    CIAppEventAttributes: CIAppEventAttributes_1.CIAppEventAttributes,
    CIAppGitInfo: CIAppGitInfo_1.CIAppGitInfo,
    CIAppGroupByHistogram: CIAppGroupByHistogram_1.CIAppGroupByHistogram,
    CIAppHostInfo: CIAppHostInfo_1.CIAppHostInfo,
    CIAppPipelineEvent: CIAppPipelineEvent_1.CIAppPipelineEvent,
    CIAppPipelineEventAttributes: CIAppPipelineEventAttributes_1.CIAppPipelineEventAttributes,
    CIAppPipelineEventFinishedPipeline: CIAppPipelineEventFinishedPipeline_1.CIAppPipelineEventFinishedPipeline,
    CIAppPipelineEventInProgressPipeline: CIAppPipelineEventInProgressPipeline_1.CIAppPipelineEventInProgressPipeline,
    CIAppPipelineEventJob: CIAppPipelineEventJob_1.CIAppPipelineEventJob,
    CIAppPipelineEventParentPipeline: CIAppPipelineEventParentPipeline_1.CIAppPipelineEventParentPipeline,
    CIAppPipelineEventPreviousPipeline: CIAppPipelineEventPreviousPipeline_1.CIAppPipelineEventPreviousPipeline,
    CIAppPipelineEventStage: CIAppPipelineEventStage_1.CIAppPipelineEventStage,
    CIAppPipelineEventStep: CIAppPipelineEventStep_1.CIAppPipelineEventStep,
    CIAppPipelineEventsRequest: CIAppPipelineEventsRequest_1.CIAppPipelineEventsRequest,
    CIAppPipelineEventsResponse: CIAppPipelineEventsResponse_1.CIAppPipelineEventsResponse,
    CIAppPipelinesAggregateRequest: CIAppPipelinesAggregateRequest_1.CIAppPipelinesAggregateRequest,
    CIAppPipelinesAggregationBucketsResponse: CIAppPipelinesAggregationBucketsResponse_1.CIAppPipelinesAggregationBucketsResponse,
    CIAppPipelinesAnalyticsAggregateResponse: CIAppPipelinesAnalyticsAggregateResponse_1.CIAppPipelinesAnalyticsAggregateResponse,
    CIAppPipelinesBucketResponse: CIAppPipelinesBucketResponse_1.CIAppPipelinesBucketResponse,
    CIAppPipelinesGroupBy: CIAppPipelinesGroupBy_1.CIAppPipelinesGroupBy,
    CIAppPipelinesQueryFilter: CIAppPipelinesQueryFilter_1.CIAppPipelinesQueryFilter,
    CIAppQueryOptions: CIAppQueryOptions_1.CIAppQueryOptions,
    CIAppQueryPageOptions: CIAppQueryPageOptions_1.CIAppQueryPageOptions,
    CIAppResponseLinks: CIAppResponseLinks_1.CIAppResponseLinks,
    CIAppResponseMetadata: CIAppResponseMetadata_1.CIAppResponseMetadata,
    CIAppResponseMetadataWithPagination: CIAppResponseMetadataWithPagination_1.CIAppResponseMetadataWithPagination,
    CIAppResponsePage: CIAppResponsePage_1.CIAppResponsePage,
    CIAppTestEvent: CIAppTestEvent_1.CIAppTestEvent,
    CIAppTestEventsRequest: CIAppTestEventsRequest_1.CIAppTestEventsRequest,
    CIAppTestEventsResponse: CIAppTestEventsResponse_1.CIAppTestEventsResponse,
    CIAppTestsAggregateRequest: CIAppTestsAggregateRequest_1.CIAppTestsAggregateRequest,
    CIAppTestsAggregationBucketsResponse: CIAppTestsAggregationBucketsResponse_1.CIAppTestsAggregationBucketsResponse,
    CIAppTestsAnalyticsAggregateResponse: CIAppTestsAnalyticsAggregateResponse_1.CIAppTestsAnalyticsAggregateResponse,
    CIAppTestsBucketResponse: CIAppTestsBucketResponse_1.CIAppTestsBucketResponse,
    CIAppTestsGroupBy: CIAppTestsGroupBy_1.CIAppTestsGroupBy,
    CIAppTestsQueryFilter: CIAppTestsQueryFilter_1.CIAppTestsQueryFilter,
    CIAppWarning: CIAppWarning_1.CIAppWarning,
    CSMAgentsMetadata: CSMAgentsMetadata_1.CSMAgentsMetadata,
    CVSS: CVSS_1.CVSS,
    CalculatedField: CalculatedField_1.CalculatedField,
    CancelDataDeletionResponseBody: CancelDataDeletionResponseBody_1.CancelDataDeletionResponseBody,
    Case: Case_1.Case,
    CaseAssign: CaseAssign_1.CaseAssign,
    CaseAssignAttributes: CaseAssignAttributes_1.CaseAssignAttributes,
    CaseAssignRequest: CaseAssignRequest_1.CaseAssignRequest,
    CaseAttributes: CaseAttributes_1.CaseAttributes,
    CaseComment: CaseComment_1.CaseComment,
    CaseCommentAttributes: CaseCommentAttributes_1.CaseCommentAttributes,
    CaseCommentRequest: CaseCommentRequest_1.CaseCommentRequest,
    CaseCreate: CaseCreate_1.CaseCreate,
    CaseCreateAttributes: CaseCreateAttributes_1.CaseCreateAttributes,
    CaseCreateRelationships: CaseCreateRelationships_1.CaseCreateRelationships,
    CaseCreateRequest: CaseCreateRequest_1.CaseCreateRequest,
    CaseEmpty: CaseEmpty_1.CaseEmpty,
    CaseEmptyRequest: CaseEmptyRequest_1.CaseEmptyRequest,
    CaseInsightsItems: CaseInsightsItems_1.CaseInsightsItems,
    CaseManagementProject: CaseManagementProject_1.CaseManagementProject,
    CaseManagementProjectData: CaseManagementProjectData_1.CaseManagementProjectData,
    CaseNotificationRule: CaseNotificationRule_1.CaseNotificationRule,
    CaseNotificationRuleAttributes: CaseNotificationRuleAttributes_1.CaseNotificationRuleAttributes,
    CaseNotificationRuleCreate: CaseNotificationRuleCreate_1.CaseNotificationRuleCreate,
    CaseNotificationRuleCreateAttributes: CaseNotificationRuleCreateAttributes_1.CaseNotificationRuleCreateAttributes,
    CaseNotificationRuleCreateRequest: CaseNotificationRuleCreateRequest_1.CaseNotificationRuleCreateRequest,
    CaseNotificationRuleRecipient: CaseNotificationRuleRecipient_1.CaseNotificationRuleRecipient,
    CaseNotificationRuleRecipientData: CaseNotificationRuleRecipientData_1.CaseNotificationRuleRecipientData,
    CaseNotificationRuleResponse: CaseNotificationRuleResponse_1.CaseNotificationRuleResponse,
    CaseNotificationRuleTrigger: CaseNotificationRuleTrigger_1.CaseNotificationRuleTrigger,
    CaseNotificationRuleTriggerData: CaseNotificationRuleTriggerData_1.CaseNotificationRuleTriggerData,
    CaseNotificationRuleUpdate: CaseNotificationRuleUpdate_1.CaseNotificationRuleUpdate,
    CaseNotificationRuleUpdateRequest: CaseNotificationRuleUpdateRequest_1.CaseNotificationRuleUpdateRequest,
    CaseNotificationRulesResponse: CaseNotificationRulesResponse_1.CaseNotificationRulesResponse,
    CaseRelationships: CaseRelationships_1.CaseRelationships,
    CaseResponse: CaseResponse_1.CaseResponse,
    CaseTrigger: CaseTrigger_1.CaseTrigger,
    CaseTriggerWrapper: CaseTriggerWrapper_1.CaseTriggerWrapper,
    CaseTypeCreate: CaseTypeCreate_1.CaseTypeCreate,
    CaseTypeCreateRequest: CaseTypeCreateRequest_1.CaseTypeCreateRequest,
    CaseTypeResource: CaseTypeResource_1.CaseTypeResource,
    CaseTypeResourceAttributes: CaseTypeResourceAttributes_1.CaseTypeResourceAttributes,
    CaseTypeResponse: CaseTypeResponse_1.CaseTypeResponse,
    CaseTypesResponse: CaseTypesResponse_1.CaseTypesResponse,
    CaseUpdateAttributes: CaseUpdateAttributes_1.CaseUpdateAttributes,
    CaseUpdateAttributesAttributes: CaseUpdateAttributesAttributes_1.CaseUpdateAttributesAttributes,
    CaseUpdateAttributesRequest: CaseUpdateAttributesRequest_1.CaseUpdateAttributesRequest,
    CaseUpdateCustomAttribute: CaseUpdateCustomAttribute_1.CaseUpdateCustomAttribute,
    CaseUpdateCustomAttributeRequest: CaseUpdateCustomAttributeRequest_1.CaseUpdateCustomAttributeRequest,
    CaseUpdateDescription: CaseUpdateDescription_1.CaseUpdateDescription,
    CaseUpdateDescriptionAttributes: CaseUpdateDescriptionAttributes_1.CaseUpdateDescriptionAttributes,
    CaseUpdateDescriptionRequest: CaseUpdateDescriptionRequest_1.CaseUpdateDescriptionRequest,
    CaseUpdatePriority: CaseUpdatePriority_1.CaseUpdatePriority,
    CaseUpdatePriorityAttributes: CaseUpdatePriorityAttributes_1.CaseUpdatePriorityAttributes,
    CaseUpdatePriorityRequest: CaseUpdatePriorityRequest_1.CaseUpdatePriorityRequest,
    CaseUpdateStatus: CaseUpdateStatus_1.CaseUpdateStatus,
    CaseUpdateStatusAttributes: CaseUpdateStatusAttributes_1.CaseUpdateStatusAttributes,
    CaseUpdateStatusRequest: CaseUpdateStatusRequest_1.CaseUpdateStatusRequest,
    CaseUpdateTitle: CaseUpdateTitle_1.CaseUpdateTitle,
    CaseUpdateTitleAttributes: CaseUpdateTitleAttributes_1.CaseUpdateTitleAttributes,
    CaseUpdateTitleRequest: CaseUpdateTitleRequest_1.CaseUpdateTitleRequest,
    CasesResponse: CasesResponse_1.CasesResponse,
    CasesResponseMeta: CasesResponseMeta_1.CasesResponseMeta,
    CasesResponseMetaPagination: CasesResponseMetaPagination_1.CasesResponseMetaPagination,
    ChangeEventAttributes: ChangeEventAttributes_1.ChangeEventAttributes,
    ChangeEventAttributesAuthor: ChangeEventAttributesAuthor_1.ChangeEventAttributesAuthor,
    ChangeEventAttributesChangedResource: ChangeEventAttributesChangedResource_1.ChangeEventAttributesChangedResource,
    ChangeEventAttributesImpactedResourcesItem: ChangeEventAttributesImpactedResourcesItem_1.ChangeEventAttributesImpactedResourcesItem,
    ChangeEventCustomAttributes: ChangeEventCustomAttributes_1.ChangeEventCustomAttributes,
    ChangeEventCustomAttributesAuthor: ChangeEventCustomAttributesAuthor_1.ChangeEventCustomAttributesAuthor,
    ChangeEventCustomAttributesChangedResource: ChangeEventCustomAttributesChangedResource_1.ChangeEventCustomAttributesChangedResource,
    ChangeEventCustomAttributesImpactedResourcesItems: ChangeEventCustomAttributesImpactedResourcesItems_1.ChangeEventCustomAttributesImpactedResourcesItems,
    ChangeEventTriggerWrapper: ChangeEventTriggerWrapper_1.ChangeEventTriggerWrapper,
    ChangeRequestBranchCreateAttributes: ChangeRequestBranchCreateAttributes_1.ChangeRequestBranchCreateAttributes,
    ChangeRequestBranchCreateData: ChangeRequestBranchCreateData_1.ChangeRequestBranchCreateData,
    ChangeRequestBranchCreateRequest: ChangeRequestBranchCreateRequest_1.ChangeRequestBranchCreateRequest,
    ChangeRequestCreateAttributes: ChangeRequestCreateAttributes_1.ChangeRequestCreateAttributes,
    ChangeRequestCreateData: ChangeRequestCreateData_1.ChangeRequestCreateData,
    ChangeRequestCreateRequest: ChangeRequestCreateRequest_1.ChangeRequestCreateRequest,
    ChangeRequestDecisionCreateAttributes: ChangeRequestDecisionCreateAttributes_1.ChangeRequestDecisionCreateAttributes,
    ChangeRequestDecisionCreateItem: ChangeRequestDecisionCreateItem_1.ChangeRequestDecisionCreateItem,
    ChangeRequestDecisionCreateRelationships: ChangeRequestDecisionCreateRelationships_1.ChangeRequestDecisionCreateRelationships,
    ChangeRequestDecisionRelationshipData: ChangeRequestDecisionRelationshipData_1.ChangeRequestDecisionRelationshipData,
    ChangeRequestDecisionRelationships: ChangeRequestDecisionRelationships_1.ChangeRequestDecisionRelationships,
    ChangeRequestDecisionResponseAttributes: ChangeRequestDecisionResponseAttributes_1.ChangeRequestDecisionResponseAttributes,
    ChangeRequestDecisionUpdateData: ChangeRequestDecisionUpdateData_1.ChangeRequestDecisionUpdateData,
    ChangeRequestDecisionUpdateDataAttributes: ChangeRequestDecisionUpdateDataAttributes_1.ChangeRequestDecisionUpdateDataAttributes,
    ChangeRequestDecisionUpdateDataRelationships: ChangeRequestDecisionUpdateDataRelationships_1.ChangeRequestDecisionUpdateDataRelationships,
    ChangeRequestDecisionUpdateRequest: ChangeRequestDecisionUpdateRequest_1.ChangeRequestDecisionUpdateRequest,
    ChangeRequestDecisionsRelationship: ChangeRequestDecisionsRelationship_1.ChangeRequestDecisionsRelationship,
    ChangeRequestIncludedDecision: ChangeRequestIncludedDecision_1.ChangeRequestIncludedDecision,
    ChangeRequestIncludedUser: ChangeRequestIncludedUser_1.ChangeRequestIncludedUser,
    ChangeRequestIncludedUserAttributes: ChangeRequestIncludedUserAttributes_1.ChangeRequestIncludedUserAttributes,
    ChangeRequestRelationships: ChangeRequestRelationships_1.ChangeRequestRelationships,
    ChangeRequestResponse: ChangeRequestResponse_1.ChangeRequestResponse,
    ChangeRequestResponseAttributes: ChangeRequestResponseAttributes_1.ChangeRequestResponseAttributes,
    ChangeRequestResponseData: ChangeRequestResponseData_1.ChangeRequestResponseData,
    ChangeRequestUpdateAttributes: ChangeRequestUpdateAttributes_1.ChangeRequestUpdateAttributes,
    ChangeRequestUpdateData: ChangeRequestUpdateData_1.ChangeRequestUpdateData,
    ChangeRequestUpdateRelationships: ChangeRequestUpdateRelationships_1.ChangeRequestUpdateRelationships,
    ChangeRequestUpdateRequest: ChangeRequestUpdateRequest_1.ChangeRequestUpdateRequest,
    ChangeRequestUserRelationship: ChangeRequestUserRelationship_1.ChangeRequestUserRelationship,
    ChangeRequestUserRelationshipData: ChangeRequestUserRelationshipData_1.ChangeRequestUserRelationshipData,
    ChargebackBreakdown: ChargebackBreakdown_1.ChargebackBreakdown,
    CircleCIAPIKey: CircleCIAPIKey_1.CircleCIAPIKey,
    CircleCIAPIKeyUpdate: CircleCIAPIKeyUpdate_1.CircleCIAPIKeyUpdate,
    CircleCIIntegration: CircleCIIntegration_1.CircleCIIntegration,
    CircleCIIntegrationUpdate: CircleCIIntegrationUpdate_1.CircleCIIntegrationUpdate,
    ClickupAPIKey: ClickupAPIKey_1.ClickupAPIKey,
    ClickupAPIKeyUpdate: ClickupAPIKeyUpdate_1.ClickupAPIKeyUpdate,
    ClickupIntegration: ClickupIntegration_1.ClickupIntegration,
    ClickupIntegrationUpdate: ClickupIntegrationUpdate_1.ClickupIntegrationUpdate,
    CloudConfigurationComplianceRuleOptions: CloudConfigurationComplianceRuleOptions_1.CloudConfigurationComplianceRuleOptions,
    CloudConfigurationRegoRule: CloudConfigurationRegoRule_1.CloudConfigurationRegoRule,
    CloudConfigurationRuleCaseCreate: CloudConfigurationRuleCaseCreate_1.CloudConfigurationRuleCaseCreate,
    CloudConfigurationRuleComplianceSignalOptions: CloudConfigurationRuleComplianceSignalOptions_1.CloudConfigurationRuleComplianceSignalOptions,
    CloudConfigurationRuleCreatePayload: CloudConfigurationRuleCreatePayload_1.CloudConfigurationRuleCreatePayload,
    CloudConfigurationRuleOptions: CloudConfigurationRuleOptions_1.CloudConfigurationRuleOptions,
    CloudConfigurationRulePayload: CloudConfigurationRulePayload_1.CloudConfigurationRulePayload,
    CloudWorkloadSecurityAgentPoliciesListResponse: CloudWorkloadSecurityAgentPoliciesListResponse_1.CloudWorkloadSecurityAgentPoliciesListResponse,
    CloudWorkloadSecurityAgentPolicyAttributes: CloudWorkloadSecurityAgentPolicyAttributes_1.CloudWorkloadSecurityAgentPolicyAttributes,
    CloudWorkloadSecurityAgentPolicyCreateAttributes: CloudWorkloadSecurityAgentPolicyCreateAttributes_1.CloudWorkloadSecurityAgentPolicyCreateAttributes,
    CloudWorkloadSecurityAgentPolicyCreateData: CloudWorkloadSecurityAgentPolicyCreateData_1.CloudWorkloadSecurityAgentPolicyCreateData,
    CloudWorkloadSecurityAgentPolicyCreateRequest: CloudWorkloadSecurityAgentPolicyCreateRequest_1.CloudWorkloadSecurityAgentPolicyCreateRequest,
    CloudWorkloadSecurityAgentPolicyData: CloudWorkloadSecurityAgentPolicyData_1.CloudWorkloadSecurityAgentPolicyData,
    CloudWorkloadSecurityAgentPolicyResponse: CloudWorkloadSecurityAgentPolicyResponse_1.CloudWorkloadSecurityAgentPolicyResponse,
    CloudWorkloadSecurityAgentPolicyUpdateAttributes: CloudWorkloadSecurityAgentPolicyUpdateAttributes_1.CloudWorkloadSecurityAgentPolicyUpdateAttributes,
    CloudWorkloadSecurityAgentPolicyUpdateData: CloudWorkloadSecurityAgentPolicyUpdateData_1.CloudWorkloadSecurityAgentPolicyUpdateData,
    CloudWorkloadSecurityAgentPolicyUpdateRequest: CloudWorkloadSecurityAgentPolicyUpdateRequest_1.CloudWorkloadSecurityAgentPolicyUpdateRequest,
    CloudWorkloadSecurityAgentPolicyUpdaterAttributes: CloudWorkloadSecurityAgentPolicyUpdaterAttributes_1.CloudWorkloadSecurityAgentPolicyUpdaterAttributes,
    CloudWorkloadSecurityAgentPolicyVersion: CloudWorkloadSecurityAgentPolicyVersion_1.CloudWorkloadSecurityAgentPolicyVersion,
    CloudWorkloadSecurityAgentRuleAction: CloudWorkloadSecurityAgentRuleAction_1.CloudWorkloadSecurityAgentRuleAction,
    CloudWorkloadSecurityAgentRuleActionHash: CloudWorkloadSecurityAgentRuleActionHash_1.CloudWorkloadSecurityAgentRuleActionHash,
    CloudWorkloadSecurityAgentRuleActionMetadata: CloudWorkloadSecurityAgentRuleActionMetadata_1.CloudWorkloadSecurityAgentRuleActionMetadata,
    CloudWorkloadSecurityAgentRuleActionSet: CloudWorkloadSecurityAgentRuleActionSet_1.CloudWorkloadSecurityAgentRuleActionSet,
    CloudWorkloadSecurityAgentRuleAttributes: CloudWorkloadSecurityAgentRuleAttributes_1.CloudWorkloadSecurityAgentRuleAttributes,
    CloudWorkloadSecurityAgentRuleCreateAttributes: CloudWorkloadSecurityAgentRuleCreateAttributes_1.CloudWorkloadSecurityAgentRuleCreateAttributes,
    CloudWorkloadSecurityAgentRuleCreateData: CloudWorkloadSecurityAgentRuleCreateData_1.CloudWorkloadSecurityAgentRuleCreateData,
    CloudWorkloadSecurityAgentRuleCreateRequest: CloudWorkloadSecurityAgentRuleCreateRequest_1.CloudWorkloadSecurityAgentRuleCreateRequest,
    CloudWorkloadSecurityAgentRuleCreatorAttributes: CloudWorkloadSecurityAgentRuleCreatorAttributes_1.CloudWorkloadSecurityAgentRuleCreatorAttributes,
    CloudWorkloadSecurityAgentRuleData: CloudWorkloadSecurityAgentRuleData_1.CloudWorkloadSecurityAgentRuleData,
    CloudWorkloadSecurityAgentRuleKill: CloudWorkloadSecurityAgentRuleKill_1.CloudWorkloadSecurityAgentRuleKill,
    CloudWorkloadSecurityAgentRuleResponse: CloudWorkloadSecurityAgentRuleResponse_1.CloudWorkloadSecurityAgentRuleResponse,
    CloudWorkloadSecurityAgentRuleUpdateAttributes: CloudWorkloadSecurityAgentRuleUpdateAttributes_1.CloudWorkloadSecurityAgentRuleUpdateAttributes,
    CloudWorkloadSecurityAgentRuleUpdateData: CloudWorkloadSecurityAgentRuleUpdateData_1.CloudWorkloadSecurityAgentRuleUpdateData,
    CloudWorkloadSecurityAgentRuleUpdateRequest: CloudWorkloadSecurityAgentRuleUpdateRequest_1.CloudWorkloadSecurityAgentRuleUpdateRequest,
    CloudWorkloadSecurityAgentRuleUpdaterAttributes: CloudWorkloadSecurityAgentRuleUpdaterAttributes_1.CloudWorkloadSecurityAgentRuleUpdaterAttributes,
    CloudWorkloadSecurityAgentRulesListResponse: CloudWorkloadSecurityAgentRulesListResponse_1.CloudWorkloadSecurityAgentRulesListResponse,
    CloudflareAPIToken: CloudflareAPIToken_1.CloudflareAPIToken,
    CloudflareAPITokenUpdate: CloudflareAPITokenUpdate_1.CloudflareAPITokenUpdate,
    CloudflareAccountCreateRequest: CloudflareAccountCreateRequest_1.CloudflareAccountCreateRequest,
    CloudflareAccountCreateRequestAttributes: CloudflareAccountCreateRequestAttributes_1.CloudflareAccountCreateRequestAttributes,
    CloudflareAccountCreateRequestData: CloudflareAccountCreateRequestData_1.CloudflareAccountCreateRequestData,
    CloudflareAccountResponse: CloudflareAccountResponse_1.CloudflareAccountResponse,
    CloudflareAccountResponseAttributes: CloudflareAccountResponseAttributes_1.CloudflareAccountResponseAttributes,
    CloudflareAccountResponseData: CloudflareAccountResponseData_1.CloudflareAccountResponseData,
    CloudflareAccountUpdateRequest: CloudflareAccountUpdateRequest_1.CloudflareAccountUpdateRequest,
    CloudflareAccountUpdateRequestAttributes: CloudflareAccountUpdateRequestAttributes_1.CloudflareAccountUpdateRequestAttributes,
    CloudflareAccountUpdateRequestData: CloudflareAccountUpdateRequestData_1.CloudflareAccountUpdateRequestData,
    CloudflareAccountsResponse: CloudflareAccountsResponse_1.CloudflareAccountsResponse,
    CloudflareGlobalAPIToken: CloudflareGlobalAPIToken_1.CloudflareGlobalAPIToken,
    CloudflareGlobalAPITokenUpdate: CloudflareGlobalAPITokenUpdate_1.CloudflareGlobalAPITokenUpdate,
    CloudflareIntegration: CloudflareIntegration_1.CloudflareIntegration,
    CloudflareIntegrationUpdate: CloudflareIntegrationUpdate_1.CloudflareIntegrationUpdate,
    CodeLocation: CodeLocation_1.CodeLocation,
    CommitCoverageSummaryRequest: CommitCoverageSummaryRequest_1.CommitCoverageSummaryRequest,
    CommitCoverageSummaryRequestAttributes: CommitCoverageSummaryRequestAttributes_1.CommitCoverageSummaryRequestAttributes,
    CommitCoverageSummaryRequestData: CommitCoverageSummaryRequestData_1.CommitCoverageSummaryRequestData,
    CompletionCondition: CompletionCondition_1.CompletionCondition,
    CompletionGate: CompletionGate_1.CompletionGate,
    Component: Component_1.Component,
    ComponentGrid: ComponentGrid_1.ComponentGrid,
    ComponentGridProperties: ComponentGridProperties_1.ComponentGridProperties,
    ComponentProperties: ComponentProperties_1.ComponentProperties,
    ComponentRecommendation: ComponentRecommendation_1.ComponentRecommendation,
    ConfigCatIntegration: ConfigCatIntegration_1.ConfigCatIntegration,
    ConfigCatIntegrationUpdate: ConfigCatIntegrationUpdate_1.ConfigCatIntegrationUpdate,
    ConfigCatSDKKey: ConfigCatSDKKey_1.ConfigCatSDKKey,
    ConfigCatSDKKeyUpdate: ConfigCatSDKKeyUpdate_1.ConfigCatSDKKeyUpdate,
    ConfiguredSchedule: ConfiguredSchedule_1.ConfiguredSchedule,
    ConfiguredScheduleTarget: ConfiguredScheduleTarget_1.ConfiguredScheduleTarget,
    ConfiguredScheduleTargetAttributes: ConfiguredScheduleTargetAttributes_1.ConfiguredScheduleTargetAttributes,
    ConfiguredScheduleTargetRelationships: ConfiguredScheduleTargetRelationships_1.ConfiguredScheduleTargetRelationships,
    ConfiguredScheduleTargetRelationshipsSchedule: ConfiguredScheduleTargetRelationshipsSchedule_1.ConfiguredScheduleTargetRelationshipsSchedule,
    ConfluentAccountCreateRequest: ConfluentAccountCreateRequest_1.ConfluentAccountCreateRequest,
    ConfluentAccountCreateRequestAttributes: ConfluentAccountCreateRequestAttributes_1.ConfluentAccountCreateRequestAttributes,
    ConfluentAccountCreateRequestData: ConfluentAccountCreateRequestData_1.ConfluentAccountCreateRequestData,
    ConfluentAccountResourceAttributes: ConfluentAccountResourceAttributes_1.ConfluentAccountResourceAttributes,
    ConfluentAccountResponse: ConfluentAccountResponse_1.ConfluentAccountResponse,
    ConfluentAccountResponseAttributes: ConfluentAccountResponseAttributes_1.ConfluentAccountResponseAttributes,
    ConfluentAccountResponseData: ConfluentAccountResponseData_1.ConfluentAccountResponseData,
    ConfluentAccountUpdateRequest: ConfluentAccountUpdateRequest_1.ConfluentAccountUpdateRequest,
    ConfluentAccountUpdateRequestAttributes: ConfluentAccountUpdateRequestAttributes_1.ConfluentAccountUpdateRequestAttributes,
    ConfluentAccountUpdateRequestData: ConfluentAccountUpdateRequestData_1.ConfluentAccountUpdateRequestData,
    ConfluentAccountsResponse: ConfluentAccountsResponse_1.ConfluentAccountsResponse,
    ConfluentResourceRequest: ConfluentResourceRequest_1.ConfluentResourceRequest,
    ConfluentResourceRequestAttributes: ConfluentResourceRequestAttributes_1.ConfluentResourceRequestAttributes,
    ConfluentResourceRequestData: ConfluentResourceRequestData_1.ConfluentResourceRequestData,
    ConfluentResourceResponse: ConfluentResourceResponse_1.ConfluentResourceResponse,
    ConfluentResourceResponseAttributes: ConfluentResourceResponseAttributes_1.ConfluentResourceResponseAttributes,
    ConfluentResourceResponseData: ConfluentResourceResponseData_1.ConfluentResourceResponseData,
    ConfluentResourcesResponse: ConfluentResourcesResponse_1.ConfluentResourcesResponse,
    ConnectedTeamRef: ConnectedTeamRef_1.ConnectedTeamRef,
    ConnectedTeamRefData: ConnectedTeamRefData_1.ConnectedTeamRefData,
    Connection: Connection_1.Connection,
    ConnectionEnv: ConnectionEnv_1.ConnectionEnv,
    ConnectionGroup: ConnectionGroup_1.ConnectionGroup,
    ConnectionsPagePagination: ConnectionsPagePagination_1.ConnectionsPagePagination,
    ConnectionsResponseMeta: ConnectionsResponseMeta_1.ConnectionsResponseMeta,
    Container: Container_1.Container,
    ContainerAttributes: ContainerAttributes_1.ContainerAttributes,
    ContainerGroup: ContainerGroup_1.ContainerGroup,
    ContainerGroupAttributes: ContainerGroupAttributes_1.ContainerGroupAttributes,
    ContainerGroupRelationships: ContainerGroupRelationships_1.ContainerGroupRelationships,
    ContainerGroupRelationshipsLink: ContainerGroupRelationshipsLink_1.ContainerGroupRelationshipsLink,
    ContainerGroupRelationshipsLinks: ContainerGroupRelationshipsLinks_1.ContainerGroupRelationshipsLinks,
    ContainerImage: ContainerImage_1.ContainerImage,
    ContainerImageAttributes: ContainerImageAttributes_1.ContainerImageAttributes,
    ContainerImageFlavor: ContainerImageFlavor_1.ContainerImageFlavor,
    ContainerImageGroup: ContainerImageGroup_1.ContainerImageGroup,
    ContainerImageGroupAttributes: ContainerImageGroupAttributes_1.ContainerImageGroupAttributes,
    ContainerImageGroupImagesRelationshipsLink: ContainerImageGroupImagesRelationshipsLink_1.ContainerImageGroupImagesRelationshipsLink,
    ContainerImageGroupRelationships: ContainerImageGroupRelationships_1.ContainerImageGroupRelationships,
    ContainerImageGroupRelationshipsLinks: ContainerImageGroupRelationshipsLinks_1.ContainerImageGroupRelationshipsLinks,
    ContainerImageMeta: ContainerImageMeta_1.ContainerImageMeta,
    ContainerImageMetaPage: ContainerImageMetaPage_1.ContainerImageMetaPage,
    ContainerImageVulnerabilities: ContainerImageVulnerabilities_1.ContainerImageVulnerabilities,
    ContainerImagesResponse: ContainerImagesResponse_1.ContainerImagesResponse,
    ContainerImagesResponseLinks: ContainerImagesResponseLinks_1.ContainerImagesResponseLinks,
    ContainerMeta: ContainerMeta_1.ContainerMeta,
    ContainerMetaPage: ContainerMetaPage_1.ContainerMetaPage,
    ContainersResponse: ContainersResponse_1.ContainersResponse,
    ContainersResponseLinks: ContainersResponseLinks_1.ContainersResponseLinks,
    ConvertJobResultsToSignalsAttributes: ConvertJobResultsToSignalsAttributes_1.ConvertJobResultsToSignalsAttributes,
    ConvertJobResultsToSignalsData: ConvertJobResultsToSignalsData_1.ConvertJobResultsToSignalsData,
    ConvertJobResultsToSignalsRequest: ConvertJobResultsToSignalsRequest_1.ConvertJobResultsToSignalsRequest,
    CostAttributionAggregatesBody: CostAttributionAggregatesBody_1.CostAttributionAggregatesBody,
    CostByOrg: CostByOrg_1.CostByOrg,
    CostByOrgAttributes: CostByOrgAttributes_1.CostByOrgAttributes,
    CostByOrgResponse: CostByOrgResponse_1.CostByOrgResponse,
    CoverageSummaryAttributes: CoverageSummaryAttributes_1.CoverageSummaryAttributes,
    CoverageSummaryCodeownerStats: CoverageSummaryCodeownerStats_1.CoverageSummaryCodeownerStats,
    CoverageSummaryData: CoverageSummaryData_1.CoverageSummaryData,
    CoverageSummaryResponse: CoverageSummaryResponse_1.CoverageSummaryResponse,
    CoverageSummaryServiceStats: CoverageSummaryServiceStats_1.CoverageSummaryServiceStats,
    Cpu: Cpu_1.Cpu,
    CreateActionConnectionRequest: CreateActionConnectionRequest_1.CreateActionConnectionRequest,
    CreateActionConnectionResponse: CreateActionConnectionResponse_1.CreateActionConnectionResponse,
    CreateAppRequest: CreateAppRequest_1.CreateAppRequest,
    CreateAppRequestData: CreateAppRequestData_1.CreateAppRequestData,
    CreateAppRequestDataAttributes: CreateAppRequestDataAttributes_1.CreateAppRequestDataAttributes,
    CreateAppResponse: CreateAppResponse_1.CreateAppResponse,
    CreateAppResponseData: CreateAppResponseData_1.CreateAppResponseData,
    CreateAppsDatastoreRequest: CreateAppsDatastoreRequest_1.CreateAppsDatastoreRequest,
    CreateAppsDatastoreRequestData: CreateAppsDatastoreRequestData_1.CreateAppsDatastoreRequestData,
    CreateAppsDatastoreRequestDataAttributes: CreateAppsDatastoreRequestDataAttributes_1.CreateAppsDatastoreRequestDataAttributes,
    CreateAppsDatastoreResponse: CreateAppsDatastoreResponse_1.CreateAppsDatastoreResponse,
    CreateAppsDatastoreResponseData: CreateAppsDatastoreResponseData_1.CreateAppsDatastoreResponseData,
    CreateAttachmentRequest: CreateAttachmentRequest_1.CreateAttachmentRequest,
    CreateAttachmentRequestData: CreateAttachmentRequestData_1.CreateAttachmentRequestData,
    CreateAttachmentRequestDataAttributes: CreateAttachmentRequestDataAttributes_1.CreateAttachmentRequestDataAttributes,
    CreateAttachmentRequestDataAttributesAttachment: CreateAttachmentRequestDataAttributesAttachment_1.CreateAttachmentRequestDataAttributesAttachment,
    CreateCaseRequestArray: CreateCaseRequestArray_1.CreateCaseRequestArray,
    CreateCaseRequestData: CreateCaseRequestData_1.CreateCaseRequestData,
    CreateCaseRequestDataAttributes: CreateCaseRequestDataAttributes_1.CreateCaseRequestDataAttributes,
    CreateCaseRequestDataRelationships: CreateCaseRequestDataRelationships_1.CreateCaseRequestDataRelationships,
    CreateComponentRequest: CreateComponentRequest_1.CreateComponentRequest,
    CreateComponentRequestData: CreateComponentRequestData_1.CreateComponentRequestData,
    CreateComponentRequestDataAttributes: CreateComponentRequestDataAttributes_1.CreateComponentRequestDataAttributes,
    CreateComponentRequestDataAttributesComponentsItems: CreateComponentRequestDataAttributesComponentsItems_1.CreateComponentRequestDataAttributesComponentsItems,
    CreateComponentRequestDataRelationships: CreateComponentRequestDataRelationships_1.CreateComponentRequestDataRelationships,
    CreateComponentRequestDataRelationshipsGroup: CreateComponentRequestDataRelationshipsGroup_1.CreateComponentRequestDataRelationshipsGroup,
    CreateComponentRequestDataRelationshipsGroupData: CreateComponentRequestDataRelationshipsGroupData_1.CreateComponentRequestDataRelationshipsGroupData,
    CreateConnectionRequest: CreateConnectionRequest_1.CreateConnectionRequest,
    CreateConnectionRequestData: CreateConnectionRequestData_1.CreateConnectionRequestData,
    CreateConnectionRequestDataAttributes: CreateConnectionRequestDataAttributes_1.CreateConnectionRequestDataAttributes,
    CreateConnectionRequestDataAttributesFieldsItems: CreateConnectionRequestDataAttributesFieldsItems_1.CreateConnectionRequestDataAttributesFieldsItems,
    CreateCustomFrameworkRequest: CreateCustomFrameworkRequest_1.CreateCustomFrameworkRequest,
    CreateCustomFrameworkResponse: CreateCustomFrameworkResponse_1.CreateCustomFrameworkResponse,
    CreateDataDeletionRequestBody: CreateDataDeletionRequestBody_1.CreateDataDeletionRequestBody,
    CreateDataDeletionRequestBodyAttributes: CreateDataDeletionRequestBodyAttributes_1.CreateDataDeletionRequestBodyAttributes,
    CreateDataDeletionRequestBodyData: CreateDataDeletionRequestBodyData_1.CreateDataDeletionRequestBodyData,
    CreateDataDeletionResponseBody: CreateDataDeletionResponseBody_1.CreateDataDeletionResponseBody,
    CreateDegradationRequest: CreateDegradationRequest_1.CreateDegradationRequest,
    CreateDegradationRequestData: CreateDegradationRequestData_1.CreateDegradationRequestData,
    CreateDegradationRequestDataAttributes: CreateDegradationRequestDataAttributes_1.CreateDegradationRequestDataAttributes,
    CreateDegradationRequestDataAttributesComponentsAffectedItems: CreateDegradationRequestDataAttributesComponentsAffectedItems_1.CreateDegradationRequestDataAttributesComponentsAffectedItems,
    CreateDeploymentGateParams: CreateDeploymentGateParams_1.CreateDeploymentGateParams,
    CreateDeploymentGateParamsData: CreateDeploymentGateParamsData_1.CreateDeploymentGateParamsData,
    CreateDeploymentGateParamsDataAttributes: CreateDeploymentGateParamsDataAttributes_1.CreateDeploymentGateParamsDataAttributes,
    CreateDeploymentRuleParams: CreateDeploymentRuleParams_1.CreateDeploymentRuleParams,
    CreateDeploymentRuleParamsData: CreateDeploymentRuleParamsData_1.CreateDeploymentRuleParamsData,
    CreateDeploymentRuleParamsDataAttributes: CreateDeploymentRuleParamsDataAttributes_1.CreateDeploymentRuleParamsDataAttributes,
    CreateEmailNotificationChannelConfig: CreateEmailNotificationChannelConfig_1.CreateEmailNotificationChannelConfig,
    CreateIncidentNotificationRuleRequest: CreateIncidentNotificationRuleRequest_1.CreateIncidentNotificationRuleRequest,
    CreateIncidentNotificationTemplateRequest: CreateIncidentNotificationTemplateRequest_1.CreateIncidentNotificationTemplateRequest,
    CreateJiraIssueRequestArray: CreateJiraIssueRequestArray_1.CreateJiraIssueRequestArray,
    CreateJiraIssueRequestData: CreateJiraIssueRequestData_1.CreateJiraIssueRequestData,
    CreateJiraIssueRequestDataAttributes: CreateJiraIssueRequestDataAttributes_1.CreateJiraIssueRequestDataAttributes,
    CreateJiraIssueRequestDataRelationships: CreateJiraIssueRequestDataRelationships_1.CreateJiraIssueRequestDataRelationships,
    CreateMaintenanceRequest: CreateMaintenanceRequest_1.CreateMaintenanceRequest,
    CreateMaintenanceRequestData: CreateMaintenanceRequestData_1.CreateMaintenanceRequestData,
    CreateMaintenanceRequestDataAttributes: CreateMaintenanceRequestDataAttributes_1.CreateMaintenanceRequestDataAttributes,
    CreateMaintenanceRequestDataAttributesComponentsAffectedItems: CreateMaintenanceRequestDataAttributesComponentsAffectedItems_1.CreateMaintenanceRequestDataAttributesComponentsAffectedItems,
    CreateNotificationChannelAttributes: CreateNotificationChannelAttributes_1.CreateNotificationChannelAttributes,
    CreateNotificationChannelData: CreateNotificationChannelData_1.CreateNotificationChannelData,
    CreateNotificationRuleParameters: CreateNotificationRuleParameters_1.CreateNotificationRuleParameters,
    CreateNotificationRuleParametersData: CreateNotificationRuleParametersData_1.CreateNotificationRuleParametersData,
    CreateNotificationRuleParametersDataAttributes: CreateNotificationRuleParametersDataAttributes_1.CreateNotificationRuleParametersDataAttributes,
    CreateOnCallNotificationRuleRequest: CreateOnCallNotificationRuleRequest_1.CreateOnCallNotificationRuleRequest,
    CreateOnCallNotificationRuleRequestData: CreateOnCallNotificationRuleRequestData_1.CreateOnCallNotificationRuleRequestData,
    CreateOpenAPIResponse: CreateOpenAPIResponse_1.CreateOpenAPIResponse,
    CreateOpenAPIResponseAttributes: CreateOpenAPIResponseAttributes_1.CreateOpenAPIResponseAttributes,
    CreateOpenAPIResponseData: CreateOpenAPIResponseData_1.CreateOpenAPIResponseData,
    CreatePageRequest: CreatePageRequest_1.CreatePageRequest,
    CreatePageRequestData: CreatePageRequestData_1.CreatePageRequestData,
    CreatePageRequestDataAttributes: CreatePageRequestDataAttributes_1.CreatePageRequestDataAttributes,
    CreatePageRequestDataAttributesTarget: CreatePageRequestDataAttributesTarget_1.CreatePageRequestDataAttributesTarget,
    CreatePageResponse: CreatePageResponse_1.CreatePageResponse,
    CreatePageResponseData: CreatePageResponseData_1.CreatePageResponseData,
    CreatePhoneNotificationChannelConfig: CreatePhoneNotificationChannelConfig_1.CreatePhoneNotificationChannelConfig,
    CreateRuleRequest: CreateRuleRequest_1.CreateRuleRequest,
    CreateRuleRequestData: CreateRuleRequestData_1.CreateRuleRequestData,
    CreateRuleResponse: CreateRuleResponse_1.CreateRuleResponse,
    CreateRuleResponseData: CreateRuleResponseData_1.CreateRuleResponseData,
    CreateRulesetRequest: CreateRulesetRequest_1.CreateRulesetRequest,
    CreateRulesetRequestData: CreateRulesetRequestData_1.CreateRulesetRequestData,
    CreateRulesetRequestDataAttributes: CreateRulesetRequestDataAttributes_1.CreateRulesetRequestDataAttributes,
    CreateRulesetRequestDataAttributesRulesItems: CreateRulesetRequestDataAttributesRulesItems_1.CreateRulesetRequestDataAttributesRulesItems,
    CreateRulesetRequestDataAttributesRulesItemsQuery: CreateRulesetRequestDataAttributesRulesItemsQuery_1.CreateRulesetRequestDataAttributesRulesItemsQuery,
    CreateRulesetRequestDataAttributesRulesItemsQueryAddition: CreateRulesetRequestDataAttributesRulesItemsQueryAddition_1.CreateRulesetRequestDataAttributesRulesItemsQueryAddition,
    CreateRulesetRequestDataAttributesRulesItemsReferenceTable: CreateRulesetRequestDataAttributesRulesItemsReferenceTable_1.CreateRulesetRequestDataAttributesRulesItemsReferenceTable,
    CreateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems: CreateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems_1.CreateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems,
    CreateStatusPageRequest: CreateStatusPageRequest_1.CreateStatusPageRequest,
    CreateStatusPageRequestData: CreateStatusPageRequestData_1.CreateStatusPageRequestData,
    CreateStatusPageRequestDataAttributes: CreateStatusPageRequestDataAttributes_1.CreateStatusPageRequestDataAttributes,
    CreateStatusPageRequestDataAttributesComponentsItems: CreateStatusPageRequestDataAttributesComponentsItems_1.CreateStatusPageRequestDataAttributesComponentsItems,
    CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems: CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems_1.CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems,
    CreateTableRequest: CreateTableRequest_1.CreateTableRequest,
    CreateTableRequestData: CreateTableRequestData_1.CreateTableRequestData,
    CreateTableRequestDataAttributes: CreateTableRequestDataAttributes_1.CreateTableRequestDataAttributes,
    CreateTableRequestDataAttributesFileMetadataCloudStorage: CreateTableRequestDataAttributesFileMetadataCloudStorage_1.CreateTableRequestDataAttributesFileMetadataCloudStorage,
    CreateTableRequestDataAttributesFileMetadataLocalFile: CreateTableRequestDataAttributesFileMetadataLocalFile_1.CreateTableRequestDataAttributesFileMetadataLocalFile,
    CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails: CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails_1.CreateTableRequestDataAttributesFileMetadataOneOfAccessDetails,
    CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail: CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail_1.CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail,
    CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail: CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail_1.CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail,
    CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail: CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail_1.CreateTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail,
    CreateTableRequestDataAttributesSchema: CreateTableRequestDataAttributesSchema_1.CreateTableRequestDataAttributesSchema,
    CreateTableRequestDataAttributesSchemaFieldsItems: CreateTableRequestDataAttributesSchemaFieldsItems_1.CreateTableRequestDataAttributesSchemaFieldsItems,
    CreateTenancyConfigData: CreateTenancyConfigData_1.CreateTenancyConfigData,
    CreateTenancyConfigDataAttributes: CreateTenancyConfigDataAttributes_1.CreateTenancyConfigDataAttributes,
    CreateTenancyConfigDataAttributesAuthCredentials: CreateTenancyConfigDataAttributesAuthCredentials_1.CreateTenancyConfigDataAttributesAuthCredentials,
    CreateTenancyConfigDataAttributesLogsConfig: CreateTenancyConfigDataAttributesLogsConfig_1.CreateTenancyConfigDataAttributesLogsConfig,
    CreateTenancyConfigDataAttributesMetricsConfig: CreateTenancyConfigDataAttributesMetricsConfig_1.CreateTenancyConfigDataAttributesMetricsConfig,
    CreateTenancyConfigDataAttributesRegionsConfig: CreateTenancyConfigDataAttributesRegionsConfig_1.CreateTenancyConfigDataAttributesRegionsConfig,
    CreateTenancyConfigRequest: CreateTenancyConfigRequest_1.CreateTenancyConfigRequest,
    CreateUploadRequest: CreateUploadRequest_1.CreateUploadRequest,
    CreateUploadRequestData: CreateUploadRequestData_1.CreateUploadRequestData,
    CreateUploadRequestDataAttributes: CreateUploadRequestDataAttributes_1.CreateUploadRequestDataAttributes,
    CreateUploadResponse: CreateUploadResponse_1.CreateUploadResponse,
    CreateUploadResponseData: CreateUploadResponseData_1.CreateUploadResponseData,
    CreateUploadResponseDataAttributes: CreateUploadResponseDataAttributes_1.CreateUploadResponseDataAttributes,
    CreateUserNotificationChannelRequest: CreateUserNotificationChannelRequest_1.CreateUserNotificationChannelRequest,
    CreateWorkflowRequest: CreateWorkflowRequest_1.CreateWorkflowRequest,
    CreateWorkflowResponse: CreateWorkflowResponse_1.CreateWorkflowResponse,
    Creator: Creator_1.Creator,
    CsmAgentData: CsmAgentData_1.CsmAgentData,
    CsmAgentsAttributes: CsmAgentsAttributes_1.CsmAgentsAttributes,
    CsmAgentsResponse: CsmAgentsResponse_1.CsmAgentsResponse,
    CsmCloudAccountsCoverageAnalysisAttributes: CsmCloudAccountsCoverageAnalysisAttributes_1.CsmCloudAccountsCoverageAnalysisAttributes,
    CsmCloudAccountsCoverageAnalysisData: CsmCloudAccountsCoverageAnalysisData_1.CsmCloudAccountsCoverageAnalysisData,
    CsmCloudAccountsCoverageAnalysisResponse: CsmCloudAccountsCoverageAnalysisResponse_1.CsmCloudAccountsCoverageAnalysisResponse,
    CsmCoverageAnalysis: CsmCoverageAnalysis_1.CsmCoverageAnalysis,
    CsmHostsAndContainersCoverageAnalysisAttributes: CsmHostsAndContainersCoverageAnalysisAttributes_1.CsmHostsAndContainersCoverageAnalysisAttributes,
    CsmHostsAndContainersCoverageAnalysisData: CsmHostsAndContainersCoverageAnalysisData_1.CsmHostsAndContainersCoverageAnalysisData,
    CsmHostsAndContainersCoverageAnalysisResponse: CsmHostsAndContainersCoverageAnalysisResponse_1.CsmHostsAndContainersCoverageAnalysisResponse,
    CsmServerlessCoverageAnalysisAttributes: CsmServerlessCoverageAnalysisAttributes_1.CsmServerlessCoverageAnalysisAttributes,
    CsmServerlessCoverageAnalysisData: CsmServerlessCoverageAnalysisData_1.CsmServerlessCoverageAnalysisData,
    CsmServerlessCoverageAnalysisResponse: CsmServerlessCoverageAnalysisResponse_1.CsmServerlessCoverageAnalysisResponse,
    CustomAttributeConfig: CustomAttributeConfig_1.CustomAttributeConfig,
    CustomAttributeConfigAttributesCreate: CustomAttributeConfigAttributesCreate_1.CustomAttributeConfigAttributesCreate,
    CustomAttributeConfigCreate: CustomAttributeConfigCreate_1.CustomAttributeConfigCreate,
    CustomAttributeConfigCreateRequest: CustomAttributeConfigCreateRequest_1.CustomAttributeConfigCreateRequest,
    CustomAttributeConfigResourceAttributes: CustomAttributeConfigResourceAttributes_1.CustomAttributeConfigResourceAttributes,
    CustomAttributeConfigResponse: CustomAttributeConfigResponse_1.CustomAttributeConfigResponse,
    CustomAttributeConfigsResponse: CustomAttributeConfigsResponse_1.CustomAttributeConfigsResponse,
    CustomAttributeValue: CustomAttributeValue_1.CustomAttributeValue,
    CustomConnection: CustomConnection_1.CustomConnection,
    CustomConnectionAttributes: CustomConnectionAttributes_1.CustomConnectionAttributes,
    CustomConnectionAttributesOnPremRunner: CustomConnectionAttributesOnPremRunner_1.CustomConnectionAttributesOnPremRunner,
    CustomCostGetResponseMeta: CustomCostGetResponseMeta_1.CustomCostGetResponseMeta,
    CustomCostListResponseMeta: CustomCostListResponseMeta_1.CustomCostListResponseMeta,
    CustomCostUploadResponseMeta: CustomCostUploadResponseMeta_1.CustomCostUploadResponseMeta,
    CustomCostsFileGetResponse: CustomCostsFileGetResponse_1.CustomCostsFileGetResponse,
    CustomCostsFileLineItem: CustomCostsFileLineItem_1.CustomCostsFileLineItem,
    CustomCostsFileListResponse: CustomCostsFileListResponse_1.CustomCostsFileListResponse,
    CustomCostsFileMetadata: CustomCostsFileMetadata_1.CustomCostsFileMetadata,
    CustomCostsFileMetadataHighLevel: CustomCostsFileMetadataHighLevel_1.CustomCostsFileMetadataHighLevel,
    CustomCostsFileMetadataWithContent: CustomCostsFileMetadataWithContent_1.CustomCostsFileMetadataWithContent,
    CustomCostsFileMetadataWithContentHighLevel: CustomCostsFileMetadataWithContentHighLevel_1.CustomCostsFileMetadataWithContentHighLevel,
    CustomCostsFileUploadResponse: CustomCostsFileUploadResponse_1.CustomCostsFileUploadResponse,
    CustomCostsFileUsageChargePeriod: CustomCostsFileUsageChargePeriod_1.CustomCostsFileUsageChargePeriod,
    CustomCostsUser: CustomCostsUser_1.CustomCostsUser,
    CustomDestinationCreateRequest: CustomDestinationCreateRequest_1.CustomDestinationCreateRequest,
    CustomDestinationCreateRequestAttributes: CustomDestinationCreateRequestAttributes_1.CustomDestinationCreateRequestAttributes,
    CustomDestinationCreateRequestDefinition: CustomDestinationCreateRequestDefinition_1.CustomDestinationCreateRequestDefinition,
    CustomDestinationElasticsearchDestinationAuth: CustomDestinationElasticsearchDestinationAuth_1.CustomDestinationElasticsearchDestinationAuth,
    CustomDestinationForwardDestinationElasticsearch: CustomDestinationForwardDestinationElasticsearch_1.CustomDestinationForwardDestinationElasticsearch,
    CustomDestinationForwardDestinationHttp: CustomDestinationForwardDestinationHttp_1.CustomDestinationForwardDestinationHttp,
    CustomDestinationForwardDestinationMicrosoftSentinel: CustomDestinationForwardDestinationMicrosoftSentinel_1.CustomDestinationForwardDestinationMicrosoftSentinel,
    CustomDestinationForwardDestinationSplunk: CustomDestinationForwardDestinationSplunk_1.CustomDestinationForwardDestinationSplunk,
    CustomDestinationHttpDestinationAuthBasic: CustomDestinationHttpDestinationAuthBasic_1.CustomDestinationHttpDestinationAuthBasic,
    CustomDestinationHttpDestinationAuthCustomHeader: CustomDestinationHttpDestinationAuthCustomHeader_1.CustomDestinationHttpDestinationAuthCustomHeader,
    CustomDestinationResponse: CustomDestinationResponse_1.CustomDestinationResponse,
    CustomDestinationResponseAttributes: CustomDestinationResponseAttributes_1.CustomDestinationResponseAttributes,
    CustomDestinationResponseDefinition: CustomDestinationResponseDefinition_1.CustomDestinationResponseDefinition,
    CustomDestinationResponseForwardDestinationElasticsearch: CustomDestinationResponseForwardDestinationElasticsearch_1.CustomDestinationResponseForwardDestinationElasticsearch,
    CustomDestinationResponseForwardDestinationHttp: CustomDestinationResponseForwardDestinationHttp_1.CustomDestinationResponseForwardDestinationHttp,
    CustomDestinationResponseForwardDestinationMicrosoftSentinel: CustomDestinationResponseForwardDestinationMicrosoftSentinel_1.CustomDestinationResponseForwardDestinationMicrosoftSentinel,
    CustomDestinationResponseForwardDestinationSplunk: CustomDestinationResponseForwardDestinationSplunk_1.CustomDestinationResponseForwardDestinationSplunk,
    CustomDestinationResponseHttpDestinationAuthBasic: CustomDestinationResponseHttpDestinationAuthBasic_1.CustomDestinationResponseHttpDestinationAuthBasic,
    CustomDestinationResponseHttpDestinationAuthCustomHeader: CustomDestinationResponseHttpDestinationAuthCustomHeader_1.CustomDestinationResponseHttpDestinationAuthCustomHeader,
    CustomDestinationUpdateRequest: CustomDestinationUpdateRequest_1.CustomDestinationUpdateRequest,
    CustomDestinationUpdateRequestAttributes: CustomDestinationUpdateRequestAttributes_1.CustomDestinationUpdateRequestAttributes,
    CustomDestinationUpdateRequestDefinition: CustomDestinationUpdateRequestDefinition_1.CustomDestinationUpdateRequestDefinition,
    CustomDestinationsResponse: CustomDestinationsResponse_1.CustomDestinationsResponse,
    CustomFrameworkControl: CustomFrameworkControl_1.CustomFrameworkControl,
    CustomFrameworkData: CustomFrameworkData_1.CustomFrameworkData,
    CustomFrameworkDataAttributes: CustomFrameworkDataAttributes_1.CustomFrameworkDataAttributes,
    CustomFrameworkDataHandleAndVersion: CustomFrameworkDataHandleAndVersion_1.CustomFrameworkDataHandleAndVersion,
    CustomFrameworkMetadata: CustomFrameworkMetadata_1.CustomFrameworkMetadata,
    CustomFrameworkRequirement: CustomFrameworkRequirement_1.CustomFrameworkRequirement,
    CustomFrameworkWithoutRequirements: CustomFrameworkWithoutRequirements_1.CustomFrameworkWithoutRequirements,
    CustomRule: CustomRule_1.CustomRule,
    CustomRuleRequest: CustomRuleRequest_1.CustomRuleRequest,
    CustomRuleRequestData: CustomRuleRequestData_1.CustomRuleRequestData,
    CustomRuleRequestDataAttributes: CustomRuleRequestDataAttributes_1.CustomRuleRequestDataAttributes,
    CustomRuleResponse: CustomRuleResponse_1.CustomRuleResponse,
    CustomRuleResponseData: CustomRuleResponseData_1.CustomRuleResponseData,
    CustomRuleRevision: CustomRuleRevision_1.CustomRuleRevision,
    CustomRuleRevisionAttributes: CustomRuleRevisionAttributes_1.CustomRuleRevisionAttributes,
    CustomRuleRevisionInputAttributes: CustomRuleRevisionInputAttributes_1.CustomRuleRevisionInputAttributes,
    CustomRuleRevisionRequest: CustomRuleRevisionRequest_1.CustomRuleRevisionRequest,
    CustomRuleRevisionRequestData: CustomRuleRevisionRequestData_1.CustomRuleRevisionRequestData,
    CustomRuleRevisionResponse: CustomRuleRevisionResponse_1.CustomRuleRevisionResponse,
    CustomRuleRevisionTest: CustomRuleRevisionTest_1.CustomRuleRevisionTest,
    CustomRuleRevisionsResponse: CustomRuleRevisionsResponse_1.CustomRuleRevisionsResponse,
    CustomRuleset: CustomRuleset_1.CustomRuleset,
    CustomRulesetAttributes: CustomRulesetAttributes_1.CustomRulesetAttributes,
    CustomRulesetRequest: CustomRulesetRequest_1.CustomRulesetRequest,
    CustomRulesetRequestData: CustomRulesetRequestData_1.CustomRulesetRequestData,
    CustomRulesetRequestDataAttributes: CustomRulesetRequestDataAttributes_1.CustomRulesetRequestDataAttributes,
    CustomRulesetResponse: CustomRulesetResponse_1.CustomRulesetResponse,
    DORADeploymentFetchResponse: DORADeploymentFetchResponse_1.DORADeploymentFetchResponse,
    DORADeploymentObject: DORADeploymentObject_1.DORADeploymentObject,
    DORADeploymentObjectAttributes: DORADeploymentObjectAttributes_1.DORADeploymentObjectAttributes,
    DORADeploymentPatchRemediation: DORADeploymentPatchRemediation_1.DORADeploymentPatchRemediation,
    DORADeploymentPatchRequest: DORADeploymentPatchRequest_1.DORADeploymentPatchRequest,
    DORADeploymentPatchRequestAttributes: DORADeploymentPatchRequestAttributes_1.DORADeploymentPatchRequestAttributes,
    DORADeploymentPatchRequestData: DORADeploymentPatchRequestData_1.DORADeploymentPatchRequestData,
    DORADeploymentRequest: DORADeploymentRequest_1.DORADeploymentRequest,
    DORADeploymentRequestAttributes: DORADeploymentRequestAttributes_1.DORADeploymentRequestAttributes,
    DORADeploymentRequestData: DORADeploymentRequestData_1.DORADeploymentRequestData,
    DORADeploymentResponse: DORADeploymentResponse_1.DORADeploymentResponse,
    DORADeploymentResponseData: DORADeploymentResponseData_1.DORADeploymentResponseData,
    DORADeploymentsListResponse: DORADeploymentsListResponse_1.DORADeploymentsListResponse,
    DORAFailureFetchResponse: DORAFailureFetchResponse_1.DORAFailureFetchResponse,
    DORAFailureRequest: DORAFailureRequest_1.DORAFailureRequest,
    DORAFailureRequestAttributes: DORAFailureRequestAttributes_1.DORAFailureRequestAttributes,
    DORAFailureRequestData: DORAFailureRequestData_1.DORAFailureRequestData,
    DORAFailureResponse: DORAFailureResponse_1.DORAFailureResponse,
    DORAFailureResponseData: DORAFailureResponseData_1.DORAFailureResponseData,
    DORAFailuresListResponse: DORAFailuresListResponse_1.DORAFailuresListResponse,
    DORAGitInfo: DORAGitInfo_1.DORAGitInfo,
    DORAIncidentObject: DORAIncidentObject_1.DORAIncidentObject,
    DORAIncidentObjectAttributes: DORAIncidentObjectAttributes_1.DORAIncidentObjectAttributes,
    DORAListDeploymentsRequest: DORAListDeploymentsRequest_1.DORAListDeploymentsRequest,
    DORAListDeploymentsRequestAttributes: DORAListDeploymentsRequestAttributes_1.DORAListDeploymentsRequestAttributes,
    DORAListDeploymentsRequestData: DORAListDeploymentsRequestData_1.DORAListDeploymentsRequestData,
    DORAListFailuresRequest: DORAListFailuresRequest_1.DORAListFailuresRequest,
    DORAListFailuresRequestAttributes: DORAListFailuresRequestAttributes_1.DORAListFailuresRequestAttributes,
    DORAListFailuresRequestData: DORAListFailuresRequestData_1.DORAListFailuresRequestData,
    DashboardListAddItemsRequest: DashboardListAddItemsRequest_1.DashboardListAddItemsRequest,
    DashboardListAddItemsResponse: DashboardListAddItemsResponse_1.DashboardListAddItemsResponse,
    DashboardListDeleteItemsRequest: DashboardListDeleteItemsRequest_1.DashboardListDeleteItemsRequest,
    DashboardListDeleteItemsResponse: DashboardListDeleteItemsResponse_1.DashboardListDeleteItemsResponse,
    DashboardListItem: DashboardListItem_1.DashboardListItem,
    DashboardListItemRequest: DashboardListItemRequest_1.DashboardListItemRequest,
    DashboardListItemResponse: DashboardListItemResponse_1.DashboardListItemResponse,
    DashboardListItems: DashboardListItems_1.DashboardListItems,
    DashboardListUpdateItemsRequest: DashboardListUpdateItemsRequest_1.DashboardListUpdateItemsRequest,
    DashboardListUpdateItemsResponse: DashboardListUpdateItemsResponse_1.DashboardListUpdateItemsResponse,
    DashboardTriggerWrapper: DashboardTriggerWrapper_1.DashboardTriggerWrapper,
    DataAttributesRulesItemsMapping: DataAttributesRulesItemsMapping_1.DataAttributesRulesItemsMapping,
    DataDeletionResponseItem: DataDeletionResponseItem_1.DataDeletionResponseItem,
    DataDeletionResponseItemAttributes: DataDeletionResponseItemAttributes_1.DataDeletionResponseItemAttributes,
    DataDeletionResponseMeta: DataDeletionResponseMeta_1.DataDeletionResponseMeta,
    DataRelationshipsTeams: DataRelationshipsTeams_1.DataRelationshipsTeams,
    DataRelationshipsTeamsDataItems: DataRelationshipsTeamsDataItems_1.DataRelationshipsTeamsDataItems,
    DataScalarColumn: DataScalarColumn_1.DataScalarColumn,
    DataTransform: DataTransform_1.DataTransform,
    DataTransformProperties: DataTransformProperties_1.DataTransformProperties,
    DatabaseMonitoringTriggerWrapper: DatabaseMonitoringTriggerWrapper_1.DatabaseMonitoringTriggerWrapper,
    DatadogAPIKey: DatadogAPIKey_1.DatadogAPIKey,
    DatadogAPIKeyUpdate: DatadogAPIKeyUpdate_1.DatadogAPIKeyUpdate,
    DatadogIntegration: DatadogIntegration_1.DatadogIntegration,
    DatadogIntegrationUpdate: DatadogIntegrationUpdate_1.DatadogIntegrationUpdate,
    DatasetAttributesRequest: DatasetAttributesRequest_1.DatasetAttributesRequest,
    DatasetAttributesResponse: DatasetAttributesResponse_1.DatasetAttributesResponse,
    DatasetCreateRequest: DatasetCreateRequest_1.DatasetCreateRequest,
    DatasetRequest: DatasetRequest_1.DatasetRequest,
    DatasetResponse: DatasetResponse_1.DatasetResponse,
    DatasetResponseMulti: DatasetResponseMulti_1.DatasetResponseMulti,
    DatasetResponseSingle: DatasetResponseSingle_1.DatasetResponseSingle,
    DatasetUpdateRequest: DatasetUpdateRequest_1.DatasetUpdateRequest,
    Datastore: Datastore_1.Datastore,
    DatastoreArray: DatastoreArray_1.DatastoreArray,
    DatastoreData: DatastoreData_1.DatastoreData,
    DatastoreDataAttributes: DatastoreDataAttributes_1.DatastoreDataAttributes,
    DatastoreTrigger: DatastoreTrigger_1.DatastoreTrigger,
    DatastoreTriggerWrapper: DatastoreTriggerWrapper_1.DatastoreTriggerWrapper,
    Degradation: Degradation_1.Degradation,
    DegradationArray: DegradationArray_1.DegradationArray,
    DegradationData: DegradationData_1.DegradationData,
    DegradationDataAttributes: DegradationDataAttributes_1.DegradationDataAttributes,
    DegradationDataAttributesComponentsAffectedItems: DegradationDataAttributesComponentsAffectedItems_1.DegradationDataAttributesComponentsAffectedItems,
    DegradationDataAttributesSource: DegradationDataAttributesSource_1.DegradationDataAttributesSource,
    DegradationDataAttributesUpdatesItems: DegradationDataAttributesUpdatesItems_1.DegradationDataAttributesUpdatesItems,
    DegradationDataAttributesUpdatesItemsComponentsAffectedItems: DegradationDataAttributesUpdatesItemsComponentsAffectedItems_1.DegradationDataAttributesUpdatesItemsComponentsAffectedItems,
    DegradationDataRelationships: DegradationDataRelationships_1.DegradationDataRelationships,
    DegradationDataRelationshipsCreatedByUser: DegradationDataRelationshipsCreatedByUser_1.DegradationDataRelationshipsCreatedByUser,
    DegradationDataRelationshipsCreatedByUserData: DegradationDataRelationshipsCreatedByUserData_1.DegradationDataRelationshipsCreatedByUserData,
    DegradationDataRelationshipsLastModifiedByUser: DegradationDataRelationshipsLastModifiedByUser_1.DegradationDataRelationshipsLastModifiedByUser,
    DegradationDataRelationshipsLastModifiedByUserData: DegradationDataRelationshipsLastModifiedByUserData_1.DegradationDataRelationshipsLastModifiedByUserData,
    DegradationDataRelationshipsStatusPage: DegradationDataRelationshipsStatusPage_1.DegradationDataRelationshipsStatusPage,
    DegradationDataRelationshipsStatusPageData: DegradationDataRelationshipsStatusPageData_1.DegradationDataRelationshipsStatusPageData,
    DeleteAppResponse: DeleteAppResponse_1.DeleteAppResponse,
    DeleteAppResponseData: DeleteAppResponseData_1.DeleteAppResponseData,
    DeleteAppsDatastoreItemRequest: DeleteAppsDatastoreItemRequest_1.DeleteAppsDatastoreItemRequest,
    DeleteAppsDatastoreItemRequestData: DeleteAppsDatastoreItemRequestData_1.DeleteAppsDatastoreItemRequestData,
    DeleteAppsDatastoreItemRequestDataAttributes: DeleteAppsDatastoreItemRequestDataAttributes_1.DeleteAppsDatastoreItemRequestDataAttributes,
    DeleteAppsDatastoreItemResponse: DeleteAppsDatastoreItemResponse_1.DeleteAppsDatastoreItemResponse,
    DeleteAppsDatastoreItemResponseArray: DeleteAppsDatastoreItemResponseArray_1.DeleteAppsDatastoreItemResponseArray,
    DeleteAppsDatastoreItemResponseData: DeleteAppsDatastoreItemResponseData_1.DeleteAppsDatastoreItemResponseData,
    DeleteAppsRequest: DeleteAppsRequest_1.DeleteAppsRequest,
    DeleteAppsRequestDataItems: DeleteAppsRequestDataItems_1.DeleteAppsRequestDataItems,
    DeleteAppsResponse: DeleteAppsResponse_1.DeleteAppsResponse,
    DeleteAppsResponseDataItems: DeleteAppsResponseDataItems_1.DeleteAppsResponseDataItems,
    DeleteCustomFrameworkResponse: DeleteCustomFrameworkResponse_1.DeleteCustomFrameworkResponse,
    DeletedSuiteResponseData: DeletedSuiteResponseData_1.DeletedSuiteResponseData,
    DeletedSuiteResponseDataAttributes: DeletedSuiteResponseDataAttributes_1.DeletedSuiteResponseDataAttributes,
    DeletedSuitesRequestDelete: DeletedSuitesRequestDelete_1.DeletedSuitesRequestDelete,
    DeletedSuitesRequestDeleteAttributes: DeletedSuitesRequestDeleteAttributes_1.DeletedSuitesRequestDeleteAttributes,
    DeletedSuitesRequestDeleteRequest: DeletedSuitesRequestDeleteRequest_1.DeletedSuitesRequestDeleteRequest,
    DeletedSuitesResponse: DeletedSuitesResponse_1.DeletedSuitesResponse,
    DeletedTestResponseData: DeletedTestResponseData_1.DeletedTestResponseData,
    DeletedTestResponseDataAttributes: DeletedTestResponseDataAttributes_1.DeletedTestResponseDataAttributes,
    DeletedTestsRequestDelete: DeletedTestsRequestDelete_1.DeletedTestsRequestDelete,
    DeletedTestsRequestDeleteAttributes: DeletedTestsRequestDeleteAttributes_1.DeletedTestsRequestDeleteAttributes,
    DeletedTestsRequestDeleteRequest: DeletedTestsRequestDeleteRequest_1.DeletedTestsRequestDeleteRequest,
    DeletedTestsResponse: DeletedTestsResponse_1.DeletedTestsResponse,
    DependencyLocation: DependencyLocation_1.DependencyLocation,
    Deployment: Deployment_1.Deployment,
    DeploymentAttributes: DeploymentAttributes_1.DeploymentAttributes,
    DeploymentGateResponse: DeploymentGateResponse_1.DeploymentGateResponse,
    DeploymentGateResponseData: DeploymentGateResponseData_1.DeploymentGateResponseData,
    DeploymentGateResponseDataAttributes: DeploymentGateResponseDataAttributes_1.DeploymentGateResponseDataAttributes,
    DeploymentGateResponseDataAttributesCreatedBy: DeploymentGateResponseDataAttributesCreatedBy_1.DeploymentGateResponseDataAttributesCreatedBy,
    DeploymentGateResponseDataAttributesUpdatedBy: DeploymentGateResponseDataAttributesUpdatedBy_1.DeploymentGateResponseDataAttributesUpdatedBy,
    DeploymentGateRulesResponse: DeploymentGateRulesResponse_1.DeploymentGateRulesResponse,
    DeploymentMetadata: DeploymentMetadata_1.DeploymentMetadata,
    DeploymentRelationship: DeploymentRelationship_1.DeploymentRelationship,
    DeploymentRelationshipData: DeploymentRelationshipData_1.DeploymentRelationshipData,
    DeploymentRuleOptionsFaultyDeploymentDetection: DeploymentRuleOptionsFaultyDeploymentDetection_1.DeploymentRuleOptionsFaultyDeploymentDetection,
    DeploymentRuleOptionsMonitor: DeploymentRuleOptionsMonitor_1.DeploymentRuleOptionsMonitor,
    DeploymentRuleResponse: DeploymentRuleResponse_1.DeploymentRuleResponse,
    DeploymentRuleResponseData: DeploymentRuleResponseData_1.DeploymentRuleResponseData,
    DeploymentRuleResponseDataAttributes: DeploymentRuleResponseDataAttributes_1.DeploymentRuleResponseDataAttributes,
    DeploymentRuleResponseDataAttributesCreatedBy: DeploymentRuleResponseDataAttributesCreatedBy_1.DeploymentRuleResponseDataAttributesCreatedBy,
    DeploymentRuleResponseDataAttributesUpdatedBy: DeploymentRuleResponseDataAttributesUpdatedBy_1.DeploymentRuleResponseDataAttributesUpdatedBy,
    DetachCaseRequest: DetachCaseRequest_1.DetachCaseRequest,
    DetachCaseRequestData: DetachCaseRequestData_1.DetachCaseRequestData,
    DetachCaseRequestDataRelationships: DetachCaseRequestDataRelationships_1.DetachCaseRequestDataRelationships,
    DetailedFinding: DetailedFinding_1.DetailedFinding,
    DetailedFindingAttributes: DetailedFindingAttributes_1.DetailedFindingAttributes,
    DeviceAttributes: DeviceAttributes_1.DeviceAttributes,
    DeviceAttributesInterfaceStatuses: DeviceAttributesInterfaceStatuses_1.DeviceAttributesInterfaceStatuses,
    DevicesListData: DevicesListData_1.DevicesListData,
    DomainAllowlist: DomainAllowlist_1.DomainAllowlist,
    DomainAllowlistAttributes: DomainAllowlistAttributes_1.DomainAllowlistAttributes,
    DomainAllowlistRequest: DomainAllowlistRequest_1.DomainAllowlistRequest,
    DomainAllowlistResponse: DomainAllowlistResponse_1.DomainAllowlistResponse,
    DomainAllowlistResponseData: DomainAllowlistResponseData_1.DomainAllowlistResponseData,
    DomainAllowlistResponseDataAttributes: DomainAllowlistResponseDataAttributes_1.DomainAllowlistResponseDataAttributes,
    DowntimeCreateRequest: DowntimeCreateRequest_1.DowntimeCreateRequest,
    DowntimeCreateRequestAttributes: DowntimeCreateRequestAttributes_1.DowntimeCreateRequestAttributes,
    DowntimeCreateRequestData: DowntimeCreateRequestData_1.DowntimeCreateRequestData,
    DowntimeMeta: DowntimeMeta_1.DowntimeMeta,
    DowntimeMetaPage: DowntimeMetaPage_1.DowntimeMetaPage,
    DowntimeMonitorIdentifierId: DowntimeMonitorIdentifierId_1.DowntimeMonitorIdentifierId,
    DowntimeMonitorIdentifierTags: DowntimeMonitorIdentifierTags_1.DowntimeMonitorIdentifierTags,
    DowntimeMonitorIncludedAttributes: DowntimeMonitorIncludedAttributes_1.DowntimeMonitorIncludedAttributes,
    DowntimeMonitorIncludedItem: DowntimeMonitorIncludedItem_1.DowntimeMonitorIncludedItem,
    DowntimeRelationships: DowntimeRelationships_1.DowntimeRelationships,
    DowntimeRelationshipsCreatedBy: DowntimeRelationshipsCreatedBy_1.DowntimeRelationshipsCreatedBy,
    DowntimeRelationshipsCreatedByData: DowntimeRelationshipsCreatedByData_1.DowntimeRelationshipsCreatedByData,
    DowntimeRelationshipsMonitor: DowntimeRelationshipsMonitor_1.DowntimeRelationshipsMonitor,
    DowntimeRelationshipsMonitorData: DowntimeRelationshipsMonitorData_1.DowntimeRelationshipsMonitorData,
    DowntimeResponse: DowntimeResponse_1.DowntimeResponse,
    DowntimeResponseAttributes: DowntimeResponseAttributes_1.DowntimeResponseAttributes,
    DowntimeResponseData: DowntimeResponseData_1.DowntimeResponseData,
    DowntimeScheduleCurrentDowntimeResponse: DowntimeScheduleCurrentDowntimeResponse_1.DowntimeScheduleCurrentDowntimeResponse,
    DowntimeScheduleOneTimeCreateUpdateRequest: DowntimeScheduleOneTimeCreateUpdateRequest_1.DowntimeScheduleOneTimeCreateUpdateRequest,
    DowntimeScheduleOneTimeResponse: DowntimeScheduleOneTimeResponse_1.DowntimeScheduleOneTimeResponse,
    DowntimeScheduleRecurrenceCreateUpdateRequest: DowntimeScheduleRecurrenceCreateUpdateRequest_1.DowntimeScheduleRecurrenceCreateUpdateRequest,
    DowntimeScheduleRecurrenceResponse: DowntimeScheduleRecurrenceResponse_1.DowntimeScheduleRecurrenceResponse,
    DowntimeScheduleRecurrencesCreateRequest: DowntimeScheduleRecurrencesCreateRequest_1.DowntimeScheduleRecurrencesCreateRequest,
    DowntimeScheduleRecurrencesResponse: DowntimeScheduleRecurrencesResponse_1.DowntimeScheduleRecurrencesResponse,
    DowntimeScheduleRecurrencesUpdateRequest: DowntimeScheduleRecurrencesUpdateRequest_1.DowntimeScheduleRecurrencesUpdateRequest,
    DowntimeUpdateRequest: DowntimeUpdateRequest_1.DowntimeUpdateRequest,
    DowntimeUpdateRequestAttributes: DowntimeUpdateRequestAttributes_1.DowntimeUpdateRequestAttributes,
    DowntimeUpdateRequestData: DowntimeUpdateRequestData_1.DowntimeUpdateRequestData,
    EPSS: EPSS_1.EPSS,
    EntityAttributes: EntityAttributes_1.EntityAttributes,
    EntityData: EntityData_1.EntityData,
    EntityMeta: EntityMeta_1.EntityMeta,
    EntityRelationships: EntityRelationships_1.EntityRelationships,
    EntityResponseArray: EntityResponseArray_1.EntityResponseArray,
    EntityResponseDataAttributes: EntityResponseDataAttributes_1.EntityResponseDataAttributes,
    EntityResponseDataRelationships: EntityResponseDataRelationships_1.EntityResponseDataRelationships,
    EntityResponseDataRelationshipsIncidents: EntityResponseDataRelationshipsIncidents_1.EntityResponseDataRelationshipsIncidents,
    EntityResponseDataRelationshipsIncidentsDataItems: EntityResponseDataRelationshipsIncidentsDataItems_1.EntityResponseDataRelationshipsIncidentsDataItems,
    EntityResponseDataRelationshipsOncalls: EntityResponseDataRelationshipsOncalls_1.EntityResponseDataRelationshipsOncalls,
    EntityResponseDataRelationshipsOncallsDataItems: EntityResponseDataRelationshipsOncallsDataItems_1.EntityResponseDataRelationshipsOncallsDataItems,
    EntityResponseDataRelationshipsRawSchema: EntityResponseDataRelationshipsRawSchema_1.EntityResponseDataRelationshipsRawSchema,
    EntityResponseDataRelationshipsRawSchemaData: EntityResponseDataRelationshipsRawSchemaData_1.EntityResponseDataRelationshipsRawSchemaData,
    EntityResponseDataRelationshipsRelatedEntities: EntityResponseDataRelationshipsRelatedEntities_1.EntityResponseDataRelationshipsRelatedEntities,
    EntityResponseDataRelationshipsRelatedEntitiesDataItems: EntityResponseDataRelationshipsRelatedEntitiesDataItems_1.EntityResponseDataRelationshipsRelatedEntitiesDataItems,
    EntityResponseDataRelationshipsSchema: EntityResponseDataRelationshipsSchema_1.EntityResponseDataRelationshipsSchema,
    EntityResponseDataRelationshipsSchemaData: EntityResponseDataRelationshipsSchemaData_1.EntityResponseDataRelationshipsSchemaData,
    EntityResponseIncludedIncident: EntityResponseIncludedIncident_1.EntityResponseIncludedIncident,
    EntityResponseIncludedOncall: EntityResponseIncludedOncall_1.EntityResponseIncludedOncall,
    EntityResponseIncludedRawSchema: EntityResponseIncludedRawSchema_1.EntityResponseIncludedRawSchema,
    EntityResponseIncludedRawSchemaAttributes: EntityResponseIncludedRawSchemaAttributes_1.EntityResponseIncludedRawSchemaAttributes,
    EntityResponseIncludedRelatedEntity: EntityResponseIncludedRelatedEntity_1.EntityResponseIncludedRelatedEntity,
    EntityResponseIncludedRelatedEntityAttributes: EntityResponseIncludedRelatedEntityAttributes_1.EntityResponseIncludedRelatedEntityAttributes,
    EntityResponseIncludedRelatedEntityMeta: EntityResponseIncludedRelatedEntityMeta_1.EntityResponseIncludedRelatedEntityMeta,
    EntityResponseIncludedRelatedIncidentAttributes: EntityResponseIncludedRelatedIncidentAttributes_1.EntityResponseIncludedRelatedIncidentAttributes,
    EntityResponseIncludedRelatedOncallAttributes: EntityResponseIncludedRelatedOncallAttributes_1.EntityResponseIncludedRelatedOncallAttributes,
    EntityResponseIncludedRelatedOncallEscalationItem: EntityResponseIncludedRelatedOncallEscalationItem_1.EntityResponseIncludedRelatedOncallEscalationItem,
    EntityResponseIncludedSchema: EntityResponseIncludedSchema_1.EntityResponseIncludedSchema,
    EntityResponseIncludedSchemaAttributes: EntityResponseIncludedSchemaAttributes_1.EntityResponseIncludedSchemaAttributes,
    EntityResponseMeta: EntityResponseMeta_1.EntityResponseMeta,
    EntityToIncidents: EntityToIncidents_1.EntityToIncidents,
    EntityToOncalls: EntityToOncalls_1.EntityToOncalls,
    EntityToRawSchema: EntityToRawSchema_1.EntityToRawSchema,
    EntityToRelatedEntities: EntityToRelatedEntities_1.EntityToRelatedEntities,
    EntityToSchema: EntityToSchema_1.EntityToSchema,
    EntityV3API: EntityV3API_1.EntityV3API,
    EntityV3APIDatadog: EntityV3APIDatadog_1.EntityV3APIDatadog,
    EntityV3APISpec: EntityV3APISpec_1.EntityV3APISpec,
    EntityV3APISpecInterfaceDefinition: EntityV3APISpecInterfaceDefinition_1.EntityV3APISpecInterfaceDefinition,
    EntityV3APISpecInterfaceFileRef: EntityV3APISpecInterfaceFileRef_1.EntityV3APISpecInterfaceFileRef,
    EntityV3DatadogCodeLocationItem: EntityV3DatadogCodeLocationItem_1.EntityV3DatadogCodeLocationItem,
    EntityV3DatadogEventItem: EntityV3DatadogEventItem_1.EntityV3DatadogEventItem,
    EntityV3DatadogIntegrationOpsgenie: EntityV3DatadogIntegrationOpsgenie_1.EntityV3DatadogIntegrationOpsgenie,
    EntityV3DatadogIntegrationPagerduty: EntityV3DatadogIntegrationPagerduty_1.EntityV3DatadogIntegrationPagerduty,
    EntityV3DatadogLogItem: EntityV3DatadogLogItem_1.EntityV3DatadogLogItem,
    EntityV3DatadogPerformance: EntityV3DatadogPerformance_1.EntityV3DatadogPerformance,
    EntityV3DatadogPipelines: EntityV3DatadogPipelines_1.EntityV3DatadogPipelines,
    EntityV3Datastore: EntityV3Datastore_1.EntityV3Datastore,
    EntityV3DatastoreDatadog: EntityV3DatastoreDatadog_1.EntityV3DatastoreDatadog,
    EntityV3DatastoreSpec: EntityV3DatastoreSpec_1.EntityV3DatastoreSpec,
    EntityV3Integrations: EntityV3Integrations_1.EntityV3Integrations,
    EntityV3Metadata: EntityV3Metadata_1.EntityV3Metadata,
    EntityV3MetadataAdditionalOwnersItems: EntityV3MetadataAdditionalOwnersItems_1.EntityV3MetadataAdditionalOwnersItems,
    EntityV3MetadataContactsItems: EntityV3MetadataContactsItems_1.EntityV3MetadataContactsItems,
    EntityV3MetadataLinksItems: EntityV3MetadataLinksItems_1.EntityV3MetadataLinksItems,
    EntityV3Queue: EntityV3Queue_1.EntityV3Queue,
    EntityV3QueueDatadog: EntityV3QueueDatadog_1.EntityV3QueueDatadog,
    EntityV3QueueSpec: EntityV3QueueSpec_1.EntityV3QueueSpec,
    EntityV3Service: EntityV3Service_1.EntityV3Service,
    EntityV3ServiceDatadog: EntityV3ServiceDatadog_1.EntityV3ServiceDatadog,
    EntityV3ServiceSpec: EntityV3ServiceSpec_1.EntityV3ServiceSpec,
    EntityV3System: EntityV3System_1.EntityV3System,
    EntityV3SystemDatadog: EntityV3SystemDatadog_1.EntityV3SystemDatadog,
    EntityV3SystemSpec: EntityV3SystemSpec_1.EntityV3SystemSpec,
    ErrorHandler: ErrorHandler_1.ErrorHandler,
    Escalation: Escalation_1.Escalation,
    EscalationPolicy: EscalationPolicy_1.EscalationPolicy,
    EscalationPolicyCreateRequest: EscalationPolicyCreateRequest_1.EscalationPolicyCreateRequest,
    EscalationPolicyCreateRequestData: EscalationPolicyCreateRequestData_1.EscalationPolicyCreateRequestData,
    EscalationPolicyCreateRequestDataAttributes: EscalationPolicyCreateRequestDataAttributes_1.EscalationPolicyCreateRequestDataAttributes,
    EscalationPolicyCreateRequestDataAttributesStepsItems: EscalationPolicyCreateRequestDataAttributesStepsItems_1.EscalationPolicyCreateRequestDataAttributesStepsItems,
    EscalationPolicyCreateRequestDataRelationships: EscalationPolicyCreateRequestDataRelationships_1.EscalationPolicyCreateRequestDataRelationships,
    EscalationPolicyData: EscalationPolicyData_1.EscalationPolicyData,
    EscalationPolicyDataAttributes: EscalationPolicyDataAttributes_1.EscalationPolicyDataAttributes,
    EscalationPolicyDataRelationships: EscalationPolicyDataRelationships_1.EscalationPolicyDataRelationships,
    EscalationPolicyDataRelationshipsSteps: EscalationPolicyDataRelationshipsSteps_1.EscalationPolicyDataRelationshipsSteps,
    EscalationPolicyDataRelationshipsStepsDataItems: EscalationPolicyDataRelationshipsStepsDataItems_1.EscalationPolicyDataRelationshipsStepsDataItems,
    EscalationPolicyStep: EscalationPolicyStep_1.EscalationPolicyStep,
    EscalationPolicyStepAttributes: EscalationPolicyStepAttributes_1.EscalationPolicyStepAttributes,
    EscalationPolicyStepRelationships: EscalationPolicyStepRelationships_1.EscalationPolicyStepRelationships,
    EscalationPolicyStepTarget: EscalationPolicyStepTarget_1.EscalationPolicyStepTarget,
    EscalationPolicyStepTargetConfig: EscalationPolicyStepTargetConfig_1.EscalationPolicyStepTargetConfig,
    EscalationPolicyStepTargetConfigSchedule: EscalationPolicyStepTargetConfigSchedule_1.EscalationPolicyStepTargetConfigSchedule,
    EscalationPolicyUpdateRequest: EscalationPolicyUpdateRequest_1.EscalationPolicyUpdateRequest,
    EscalationPolicyUpdateRequestData: EscalationPolicyUpdateRequestData_1.EscalationPolicyUpdateRequestData,
    EscalationPolicyUpdateRequestDataAttributes: EscalationPolicyUpdateRequestDataAttributes_1.EscalationPolicyUpdateRequestDataAttributes,
    EscalationPolicyUpdateRequestDataAttributesStepsItems: EscalationPolicyUpdateRequestDataAttributesStepsItems_1.EscalationPolicyUpdateRequestDataAttributesStepsItems,
    EscalationPolicyUpdateRequestDataRelationships: EscalationPolicyUpdateRequestDataRelationships_1.EscalationPolicyUpdateRequestDataRelationships,
    EscalationPolicyUser: EscalationPolicyUser_1.EscalationPolicyUser,
    EscalationPolicyUserAttributes: EscalationPolicyUserAttributes_1.EscalationPolicyUserAttributes,
    EscalationRelationships: EscalationRelationships_1.EscalationRelationships,
    EscalationRelationshipsResponders: EscalationRelationshipsResponders_1.EscalationRelationshipsResponders,
    EscalationRelationshipsRespondersDataItems: EscalationRelationshipsRespondersDataItems_1.EscalationRelationshipsRespondersDataItems,
    EscalationTargets: EscalationTargets_1.EscalationTargets,
    Estimation: Estimation_1.Estimation,
    Event: Event_1.Event,
    EventAttributes: EventAttributes_1.EventAttributes,
    EventCreateRequest: EventCreateRequest_1.EventCreateRequest,
    EventCreateRequestPayload: EventCreateRequestPayload_1.EventCreateRequestPayload,
    EventCreateResponse: EventCreateResponse_1.EventCreateResponse,
    EventCreateResponseAttributes: EventCreateResponseAttributes_1.EventCreateResponseAttributes,
    EventCreateResponseAttributesAttributes: EventCreateResponseAttributesAttributes_1.EventCreateResponseAttributesAttributes,
    EventCreateResponseAttributesAttributesEvt: EventCreateResponseAttributesAttributesEvt_1.EventCreateResponseAttributesAttributesEvt,
    EventCreateResponsePayload: EventCreateResponsePayload_1.EventCreateResponsePayload,
    EventCreateResponsePayloadLinks: EventCreateResponsePayloadLinks_1.EventCreateResponsePayloadLinks,
    EventPayload: EventPayload_1.EventPayload,
    EventResponse: EventResponse_1.EventResponse,
    EventResponseAttributes: EventResponseAttributes_1.EventResponseAttributes,
    EventSystemAttributes: EventSystemAttributes_1.EventSystemAttributes,
    EventsCompute: EventsCompute_1.EventsCompute,
    EventsGroupBy: EventsGroupBy_1.EventsGroupBy,
    EventsGroupBySort: EventsGroupBySort_1.EventsGroupBySort,
    EventsListRequest: EventsListRequest_1.EventsListRequest,
    EventsListResponse: EventsListResponse_1.EventsListResponse,
    EventsListResponseLinks: EventsListResponseLinks_1.EventsListResponseLinks,
    EventsQueryFilter: EventsQueryFilter_1.EventsQueryFilter,
    EventsQueryOptions: EventsQueryOptions_1.EventsQueryOptions,
    EventsRequestPage: EventsRequestPage_1.EventsRequestPage,
    EventsResponseMetadata: EventsResponseMetadata_1.EventsResponseMetadata,
    EventsResponseMetadataPage: EventsResponseMetadataPage_1.EventsResponseMetadataPage,
    EventsScalarQuery: EventsScalarQuery_1.EventsScalarQuery,
    EventsSearch: EventsSearch_1.EventsSearch,
    EventsTimeseriesQuery: EventsTimeseriesQuery_1.EventsTimeseriesQuery,
    EventsWarning: EventsWarning_1.EventsWarning,
    FacetInfoRequest: FacetInfoRequest_1.FacetInfoRequest,
    FacetInfoRequestData: FacetInfoRequestData_1.FacetInfoRequestData,
    FacetInfoRequestDataAttributes: FacetInfoRequestDataAttributes_1.FacetInfoRequestDataAttributes,
    FacetInfoRequestDataAttributesSearch: FacetInfoRequestDataAttributesSearch_1.FacetInfoRequestDataAttributesSearch,
    FacetInfoRequestDataAttributesTermSearch: FacetInfoRequestDataAttributesTermSearch_1.FacetInfoRequestDataAttributesTermSearch,
    FacetInfoResponse: FacetInfoResponse_1.FacetInfoResponse,
    FacetInfoResponseData: FacetInfoResponseData_1.FacetInfoResponseData,
    FacetInfoResponseDataAttributes: FacetInfoResponseDataAttributes_1.FacetInfoResponseDataAttributes,
    FacetInfoResponseDataAttributesResult: FacetInfoResponseDataAttributesResult_1.FacetInfoResponseDataAttributesResult,
    FacetInfoResponseDataAttributesResultRange: FacetInfoResponseDataAttributesResultRange_1.FacetInfoResponseDataAttributesResultRange,
    FacetInfoResponseDataAttributesResultValuesItems: FacetInfoResponseDataAttributesResultValuesItems_1.FacetInfoResponseDataAttributesResultValuesItems,
    FastlyAPIKey: FastlyAPIKey_1.FastlyAPIKey,
    FastlyAPIKeyUpdate: FastlyAPIKeyUpdate_1.FastlyAPIKeyUpdate,
    FastlyAccounResponseAttributes: FastlyAccounResponseAttributes_1.FastlyAccounResponseAttributes,
    FastlyAccountCreateRequest: FastlyAccountCreateRequest_1.FastlyAccountCreateRequest,
    FastlyAccountCreateRequestAttributes: FastlyAccountCreateRequestAttributes_1.FastlyAccountCreateRequestAttributes,
    FastlyAccountCreateRequestData: FastlyAccountCreateRequestData_1.FastlyAccountCreateRequestData,
    FastlyAccountResponse: FastlyAccountResponse_1.FastlyAccountResponse,
    FastlyAccountResponseData: FastlyAccountResponseData_1.FastlyAccountResponseData,
    FastlyAccountUpdateRequest: FastlyAccountUpdateRequest_1.FastlyAccountUpdateRequest,
    FastlyAccountUpdateRequestAttributes: FastlyAccountUpdateRequestAttributes_1.FastlyAccountUpdateRequestAttributes,
    FastlyAccountUpdateRequestData: FastlyAccountUpdateRequestData_1.FastlyAccountUpdateRequestData,
    FastlyAccountsResponse: FastlyAccountsResponse_1.FastlyAccountsResponse,
    FastlyIntegration: FastlyIntegration_1.FastlyIntegration,
    FastlyIntegrationUpdate: FastlyIntegrationUpdate_1.FastlyIntegrationUpdate,
    FastlyService: FastlyService_1.FastlyService,
    FastlyServiceAttributes: FastlyServiceAttributes_1.FastlyServiceAttributes,
    FastlyServiceData: FastlyServiceData_1.FastlyServiceData,
    FastlyServiceRequest: FastlyServiceRequest_1.FastlyServiceRequest,
    FastlyServiceResponse: FastlyServiceResponse_1.FastlyServiceResponse,
    FastlyServicesResponse: FastlyServicesResponse_1.FastlyServicesResponse,
    FiltersPerProduct: FiltersPerProduct_1.FiltersPerProduct,
    Finding: Finding_1.Finding,
    FindingAttributes: FindingAttributes_1.FindingAttributes,
    FindingCaseResponse: FindingCaseResponse_1.FindingCaseResponse,
    FindingCaseResponseArray: FindingCaseResponseArray_1.FindingCaseResponseArray,
    FindingCaseResponseData: FindingCaseResponseData_1.FindingCaseResponseData,
    FindingCaseResponseDataAttributes: FindingCaseResponseDataAttributes_1.FindingCaseResponseDataAttributes,
    FindingCaseResponseDataRelationships: FindingCaseResponseDataRelationships_1.FindingCaseResponseDataRelationships,
    FindingData: FindingData_1.FindingData,
    FindingJiraIssue: FindingJiraIssue_1.FindingJiraIssue,
    FindingJiraIssueResult: FindingJiraIssueResult_1.FindingJiraIssueResult,
    FindingMute: FindingMute_1.FindingMute,
    FindingRule: FindingRule_1.FindingRule,
    Findings: Findings_1.Findings,
    FlakyTest: FlakyTest_1.FlakyTest,
    FlakyTestAttributes: FlakyTestAttributes_1.FlakyTestAttributes,
    FlakyTestHistory: FlakyTestHistory_1.FlakyTestHistory,
    FlakyTestPipelineStats: FlakyTestPipelineStats_1.FlakyTestPipelineStats,
    FlakyTestRunMetadata: FlakyTestRunMetadata_1.FlakyTestRunMetadata,
    FlakyTestStats: FlakyTestStats_1.FlakyTestStats,
    FlakyTestsPagination: FlakyTestsPagination_1.FlakyTestsPagination,
    FlakyTestsSearchFilter: FlakyTestsSearchFilter_1.FlakyTestsSearchFilter,
    FlakyTestsSearchPageOptions: FlakyTestsSearchPageOptions_1.FlakyTestsSearchPageOptions,
    FlakyTestsSearchRequest: FlakyTestsSearchRequest_1.FlakyTestsSearchRequest,
    FlakyTestsSearchRequestAttributes: FlakyTestsSearchRequestAttributes_1.FlakyTestsSearchRequestAttributes,
    FlakyTestsSearchRequestData: FlakyTestsSearchRequestData_1.FlakyTestsSearchRequestData,
    FlakyTestsSearchResponse: FlakyTestsSearchResponse_1.FlakyTestsSearchResponse,
    FlakyTestsSearchResponseMeta: FlakyTestsSearchResponseMeta_1.FlakyTestsSearchResponseMeta,
    FleetAgentAttributes: FleetAgentAttributes_1.FleetAgentAttributes,
    FleetAgentAttributesTagsItems: FleetAgentAttributesTagsItems_1.FleetAgentAttributesTagsItems,
    FleetAgentInfo: FleetAgentInfo_1.FleetAgentInfo,
    FleetAgentInfoAttributes: FleetAgentInfoAttributes_1.FleetAgentInfoAttributes,
    FleetAgentInfoDetails: FleetAgentInfoDetails_1.FleetAgentInfoDetails,
    FleetAgentInfoResponse: FleetAgentInfoResponse_1.FleetAgentInfoResponse,
    FleetAgentVersion: FleetAgentVersion_1.FleetAgentVersion,
    FleetAgentVersionAttributes: FleetAgentVersionAttributes_1.FleetAgentVersionAttributes,
    FleetAgentVersionsResponse: FleetAgentVersionsResponse_1.FleetAgentVersionsResponse,
    FleetAgentsResponse: FleetAgentsResponse_1.FleetAgentsResponse,
    FleetAgentsResponseData: FleetAgentsResponseData_1.FleetAgentsResponseData,
    FleetAgentsResponseDataAttributes: FleetAgentsResponseDataAttributes_1.FleetAgentsResponseDataAttributes,
    FleetAgentsResponseMeta: FleetAgentsResponseMeta_1.FleetAgentsResponseMeta,
    FleetConfigurationFile: FleetConfigurationFile_1.FleetConfigurationFile,
    FleetConfigurationLayer: FleetConfigurationLayer_1.FleetConfigurationLayer,
    FleetDeployment: FleetDeployment_1.FleetDeployment,
    FleetDeploymentAttributes: FleetDeploymentAttributes_1.FleetDeploymentAttributes,
    FleetDeploymentConfigureAttributes: FleetDeploymentConfigureAttributes_1.FleetDeploymentConfigureAttributes,
    FleetDeploymentConfigureCreate: FleetDeploymentConfigureCreate_1.FleetDeploymentConfigureCreate,
    FleetDeploymentConfigureCreateRequest: FleetDeploymentConfigureCreateRequest_1.FleetDeploymentConfigureCreateRequest,
    FleetDeploymentHost: FleetDeploymentHost_1.FleetDeploymentHost,
    FleetDeploymentHostPackage: FleetDeploymentHostPackage_1.FleetDeploymentHostPackage,
    FleetDeploymentHostsPage: FleetDeploymentHostsPage_1.FleetDeploymentHostsPage,
    FleetDeploymentOperation: FleetDeploymentOperation_1.FleetDeploymentOperation,
    FleetDeploymentPackage: FleetDeploymentPackage_1.FleetDeploymentPackage,
    FleetDeploymentPackageUpgradeAttributes: FleetDeploymentPackageUpgradeAttributes_1.FleetDeploymentPackageUpgradeAttributes,
    FleetDeploymentPackageUpgradeCreate: FleetDeploymentPackageUpgradeCreate_1.FleetDeploymentPackageUpgradeCreate,
    FleetDeploymentPackageUpgradeCreateRequest: FleetDeploymentPackageUpgradeCreateRequest_1.FleetDeploymentPackageUpgradeCreateRequest,
    FleetDeploymentResponse: FleetDeploymentResponse_1.FleetDeploymentResponse,
    FleetDeploymentResponseMeta: FleetDeploymentResponseMeta_1.FleetDeploymentResponseMeta,
    FleetDeploymentsPage: FleetDeploymentsPage_1.FleetDeploymentsPage,
    FleetDeploymentsResponse: FleetDeploymentsResponse_1.FleetDeploymentsResponse,
    FleetDeploymentsResponseMeta: FleetDeploymentsResponseMeta_1.FleetDeploymentsResponseMeta,
    FleetDetectedIntegration: FleetDetectedIntegration_1.FleetDetectedIntegration,
    FleetIntegrationDetails: FleetIntegrationDetails_1.FleetIntegrationDetails,
    FleetIntegrationsByStatus: FleetIntegrationsByStatus_1.FleetIntegrationsByStatus,
    FleetSchedule: FleetSchedule_1.FleetSchedule,
    FleetScheduleAttributes: FleetScheduleAttributes_1.FleetScheduleAttributes,
    FleetScheduleCreate: FleetScheduleCreate_1.FleetScheduleCreate,
    FleetScheduleCreateAttributes: FleetScheduleCreateAttributes_1.FleetScheduleCreateAttributes,
    FleetScheduleCreateRequest: FleetScheduleCreateRequest_1.FleetScheduleCreateRequest,
    FleetSchedulePatch: FleetSchedulePatch_1.FleetSchedulePatch,
    FleetSchedulePatchAttributes: FleetSchedulePatchAttributes_1.FleetSchedulePatchAttributes,
    FleetSchedulePatchRequest: FleetSchedulePatchRequest_1.FleetSchedulePatchRequest,
    FleetScheduleRecurrenceRule: FleetScheduleRecurrenceRule_1.FleetScheduleRecurrenceRule,
    FleetScheduleResponse: FleetScheduleResponse_1.FleetScheduleResponse,
    FleetSchedulesResponse: FleetSchedulesResponse_1.FleetSchedulesResponse,
    FormTrigger: FormTrigger_1.FormTrigger,
    FormTriggerWrapper: FormTriggerWrapper_1.FormTriggerWrapper,
    FormulaLimit: FormulaLimit_1.FormulaLimit,
    FrameworkHandleAndVersionResponseData: FrameworkHandleAndVersionResponseData_1.FrameworkHandleAndVersionResponseData,
    FreshserviceAPIKey: FreshserviceAPIKey_1.FreshserviceAPIKey,
    FreshserviceAPIKeyUpdate: FreshserviceAPIKeyUpdate_1.FreshserviceAPIKeyUpdate,
    FreshserviceIntegration: FreshserviceIntegration_1.FreshserviceIntegration,
    FreshserviceIntegrationUpdate: FreshserviceIntegrationUpdate_1.FreshserviceIntegrationUpdate,
    FullAPIKey: FullAPIKey_1.FullAPIKey,
    FullAPIKeyAttributes: FullAPIKeyAttributes_1.FullAPIKeyAttributes,
    FullApplicationKey: FullApplicationKey_1.FullApplicationKey,
    FullApplicationKeyAttributes: FullApplicationKeyAttributes_1.FullApplicationKeyAttributes,
    FullCustomFrameworkData: FullCustomFrameworkData_1.FullCustomFrameworkData,
    FullCustomFrameworkDataAttributes: FullCustomFrameworkDataAttributes_1.FullCustomFrameworkDataAttributes,
    GCPIntegration: GCPIntegration_1.GCPIntegration,
    GCPIntegrationUpdate: GCPIntegrationUpdate_1.GCPIntegrationUpdate,
    GCPMetricNamespaceConfig: GCPMetricNamespaceConfig_1.GCPMetricNamespaceConfig,
    GCPMonitoredResourceConfig: GCPMonitoredResourceConfig_1.GCPMonitoredResourceConfig,
    GCPSTSDelegateAccount: GCPSTSDelegateAccount_1.GCPSTSDelegateAccount,
    GCPSTSDelegateAccountAttributes: GCPSTSDelegateAccountAttributes_1.GCPSTSDelegateAccountAttributes,
    GCPSTSDelegateAccountResponse: GCPSTSDelegateAccountResponse_1.GCPSTSDelegateAccountResponse,
    GCPSTSServiceAccount: GCPSTSServiceAccount_1.GCPSTSServiceAccount,
    GCPSTSServiceAccountAttributes: GCPSTSServiceAccountAttributes_1.GCPSTSServiceAccountAttributes,
    GCPSTSServiceAccountCreateRequest: GCPSTSServiceAccountCreateRequest_1.GCPSTSServiceAccountCreateRequest,
    GCPSTSServiceAccountData: GCPSTSServiceAccountData_1.GCPSTSServiceAccountData,
    GCPSTSServiceAccountResponse: GCPSTSServiceAccountResponse_1.GCPSTSServiceAccountResponse,
    GCPSTSServiceAccountUpdateRequest: GCPSTSServiceAccountUpdateRequest_1.GCPSTSServiceAccountUpdateRequest,
    GCPSTSServiceAccountUpdateRequestData: GCPSTSServiceAccountUpdateRequestData_1.GCPSTSServiceAccountUpdateRequestData,
    GCPSTSServiceAccountsResponse: GCPSTSServiceAccountsResponse_1.GCPSTSServiceAccountsResponse,
    GCPServiceAccount: GCPServiceAccount_1.GCPServiceAccount,
    GCPServiceAccountMeta: GCPServiceAccountMeta_1.GCPServiceAccountMeta,
    GCPServiceAccountUpdate: GCPServiceAccountUpdate_1.GCPServiceAccountUpdate,
    GCPUsageCostConfig: GCPUsageCostConfig_1.GCPUsageCostConfig,
    GCPUsageCostConfigAttributes: GCPUsageCostConfigAttributes_1.GCPUsageCostConfigAttributes,
    GCPUsageCostConfigPatchData: GCPUsageCostConfigPatchData_1.GCPUsageCostConfigPatchData,
    GCPUsageCostConfigPatchRequest: GCPUsageCostConfigPatchRequest_1.GCPUsageCostConfigPatchRequest,
    GCPUsageCostConfigPatchRequestAttributes: GCPUsageCostConfigPatchRequestAttributes_1.GCPUsageCostConfigPatchRequestAttributes,
    GCPUsageCostConfigPostData: GCPUsageCostConfigPostData_1.GCPUsageCostConfigPostData,
    GCPUsageCostConfigPostRequest: GCPUsageCostConfigPostRequest_1.GCPUsageCostConfigPostRequest,
    GCPUsageCostConfigPostRequestAttributes: GCPUsageCostConfigPostRequestAttributes_1.GCPUsageCostConfigPostRequestAttributes,
    GCPUsageCostConfigResponse: GCPUsageCostConfigResponse_1.GCPUsageCostConfigResponse,
    GCPUsageCostConfigsResponse: GCPUsageCostConfigsResponse_1.GCPUsageCostConfigsResponse,
    GcpScanOptions: GcpScanOptions_1.GcpScanOptions,
    GcpScanOptionsArray: GcpScanOptionsArray_1.GcpScanOptionsArray,
    GcpScanOptionsData: GcpScanOptionsData_1.GcpScanOptionsData,
    GcpScanOptionsDataAttributes: GcpScanOptionsDataAttributes_1.GcpScanOptionsDataAttributes,
    GcpScanOptionsInputUpdate: GcpScanOptionsInputUpdate_1.GcpScanOptionsInputUpdate,
    GcpScanOptionsInputUpdateData: GcpScanOptionsInputUpdateData_1.GcpScanOptionsInputUpdateData,
    GcpScanOptionsInputUpdateDataAttributes: GcpScanOptionsInputUpdateDataAttributes_1.GcpScanOptionsInputUpdateDataAttributes,
    GcpUcConfigResponse: GcpUcConfigResponse_1.GcpUcConfigResponse,
    GcpUcConfigResponseData: GcpUcConfigResponseData_1.GcpUcConfigResponseData,
    GcpUcConfigResponseDataAttributes: GcpUcConfigResponseDataAttributes_1.GcpUcConfigResponseDataAttributes,
    GeminiAPIKey: GeminiAPIKey_1.GeminiAPIKey,
    GeminiAPIKeyUpdate: GeminiAPIKeyUpdate_1.GeminiAPIKeyUpdate,
    GeminiIntegration: GeminiIntegration_1.GeminiIntegration,
    GeminiIntegrationUpdate: GeminiIntegrationUpdate_1.GeminiIntegrationUpdate,
    GetActionConnectionResponse: GetActionConnectionResponse_1.GetActionConnectionResponse,
    GetAppKeyRegistrationResponse: GetAppKeyRegistrationResponse_1.GetAppKeyRegistrationResponse,
    GetAppResponse: GetAppResponse_1.GetAppResponse,
    GetAppResponseData: GetAppResponseData_1.GetAppResponseData,
    GetAppResponseDataAttributes: GetAppResponseDataAttributes_1.GetAppResponseDataAttributes,
    GetCustomFrameworkResponse: GetCustomFrameworkResponse_1.GetCustomFrameworkResponse,
    GetDataDeletionsResponseBody: GetDataDeletionsResponseBody_1.GetDataDeletionsResponseBody,
    GetDeviceAttributes: GetDeviceAttributes_1.GetDeviceAttributes,
    GetDeviceData: GetDeviceData_1.GetDeviceData,
    GetDeviceResponse: GetDeviceResponse_1.GetDeviceResponse,
    GetFindingResponse: GetFindingResponse_1.GetFindingResponse,
    GetInterfacesData: GetInterfacesData_1.GetInterfacesData,
    GetInterfacesResponse: GetInterfacesResponse_1.GetInterfacesResponse,
    GetMappingResponse: GetMappingResponse_1.GetMappingResponse,
    GetMappingResponseData: GetMappingResponseData_1.GetMappingResponseData,
    GetMappingResponseDataAttributes: GetMappingResponseDataAttributes_1.GetMappingResponseDataAttributes,
    GetMappingResponseDataAttributesAttributesItems: GetMappingResponseDataAttributesAttributesItems_1.GetMappingResponseDataAttributesAttributesItems,
    GetMultipleRulesetsRequest: GetMultipleRulesetsRequest_1.GetMultipleRulesetsRequest,
    GetMultipleRulesetsRequestData: GetMultipleRulesetsRequestData_1.GetMultipleRulesetsRequestData,
    GetMultipleRulesetsRequestDataAttributes: GetMultipleRulesetsRequestDataAttributes_1.GetMultipleRulesetsRequestDataAttributes,
    GetMultipleRulesetsResponse: GetMultipleRulesetsResponse_1.GetMultipleRulesetsResponse,
    GetMultipleRulesetsResponseData: GetMultipleRulesetsResponseData_1.GetMultipleRulesetsResponseData,
    GetMultipleRulesetsResponseDataAttributes: GetMultipleRulesetsResponseDataAttributes_1.GetMultipleRulesetsResponseDataAttributes,
    GetMultipleRulesetsResponseDataAttributesRulesetsItems: GetMultipleRulesetsResponseDataAttributesRulesetsItems_1.GetMultipleRulesetsResponseDataAttributesRulesetsItems,
    GetMultipleRulesetsResponseDataAttributesRulesetsItemsData: GetMultipleRulesetsResponseDataAttributesRulesetsItemsData_1.GetMultipleRulesetsResponseDataAttributesRulesetsItemsData,
    GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems: GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems_1.GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems,
    GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems: GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems_1.GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsArgumentsItems,
    GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData: GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData_1.GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsData,
    GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems: GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems_1.GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItemsTestsItems,
    GetResourceEvaluationFiltersResponse: GetResourceEvaluationFiltersResponse_1.GetResourceEvaluationFiltersResponse,
    GetResourceEvaluationFiltersResponseData: GetResourceEvaluationFiltersResponseData_1.GetResourceEvaluationFiltersResponseData,
    GetRuleVersionHistoryData: GetRuleVersionHistoryData_1.GetRuleVersionHistoryData,
    GetRuleVersionHistoryResponse: GetRuleVersionHistoryResponse_1.GetRuleVersionHistoryResponse,
    GetSBOMResponse: GetSBOMResponse_1.GetSBOMResponse,
    GetSuppressionVersionHistoryData: GetSuppressionVersionHistoryData_1.GetSuppressionVersionHistoryData,
    GetSuppressionVersionHistoryResponse: GetSuppressionVersionHistoryResponse_1.GetSuppressionVersionHistoryResponse,
    GetWorkflowResponse: GetWorkflowResponse_1.GetWorkflowResponse,
    GithubWebhookTrigger: GithubWebhookTrigger_1.GithubWebhookTrigger,
    GithubWebhookTriggerWrapper: GithubWebhookTriggerWrapper_1.GithubWebhookTriggerWrapper,
    GitlabAPIKey: GitlabAPIKey_1.GitlabAPIKey,
    GitlabAPIKeyUpdate: GitlabAPIKeyUpdate_1.GitlabAPIKeyUpdate,
    GitlabIntegration: GitlabIntegration_1.GitlabIntegration,
    GitlabIntegrationUpdate: GitlabIntegrationUpdate_1.GitlabIntegrationUpdate,
    GlobalIncidentSettingsAttributesRequest: GlobalIncidentSettingsAttributesRequest_1.GlobalIncidentSettingsAttributesRequest,
    GlobalIncidentSettingsAttributesResponse: GlobalIncidentSettingsAttributesResponse_1.GlobalIncidentSettingsAttributesResponse,
    GlobalIncidentSettingsDataRequest: GlobalIncidentSettingsDataRequest_1.GlobalIncidentSettingsDataRequest,
    GlobalIncidentSettingsDataResponse: GlobalIncidentSettingsDataResponse_1.GlobalIncidentSettingsDataResponse,
    GlobalIncidentSettingsRequest: GlobalIncidentSettingsRequest_1.GlobalIncidentSettingsRequest,
    GlobalIncidentSettingsResponse: GlobalIncidentSettingsResponse_1.GlobalIncidentSettingsResponse,
    GlobalVariableData: GlobalVariableData_1.GlobalVariableData,
    GlobalVariableJsonPatchRequest: GlobalVariableJsonPatchRequest_1.GlobalVariableJsonPatchRequest,
    GlobalVariableJsonPatchRequestData: GlobalVariableJsonPatchRequestData_1.GlobalVariableJsonPatchRequestData,
    GlobalVariableJsonPatchRequestDataAttributes: GlobalVariableJsonPatchRequestDataAttributes_1.GlobalVariableJsonPatchRequestDataAttributes,
    GlobalVariableResponse: GlobalVariableResponse_1.GlobalVariableResponse,
    GoogleChatAppNamedSpaceResponse: GoogleChatAppNamedSpaceResponse_1.GoogleChatAppNamedSpaceResponse,
    GoogleChatAppNamedSpaceResponseAttributes: GoogleChatAppNamedSpaceResponseAttributes_1.GoogleChatAppNamedSpaceResponseAttributes,
    GoogleChatAppNamedSpaceResponseData: GoogleChatAppNamedSpaceResponseData_1.GoogleChatAppNamedSpaceResponseData,
    GoogleChatCreateOrganizationHandleRequest: GoogleChatCreateOrganizationHandleRequest_1.GoogleChatCreateOrganizationHandleRequest,
    GoogleChatCreateOrganizationHandleRequestAttributes: GoogleChatCreateOrganizationHandleRequestAttributes_1.GoogleChatCreateOrganizationHandleRequestAttributes,
    GoogleChatCreateOrganizationHandleRequestData: GoogleChatCreateOrganizationHandleRequestData_1.GoogleChatCreateOrganizationHandleRequestData,
    GoogleChatOrganizationHandleResponse: GoogleChatOrganizationHandleResponse_1.GoogleChatOrganizationHandleResponse,
    GoogleChatOrganizationHandleResponseAttributes: GoogleChatOrganizationHandleResponseAttributes_1.GoogleChatOrganizationHandleResponseAttributes,
    GoogleChatOrganizationHandleResponseData: GoogleChatOrganizationHandleResponseData_1.GoogleChatOrganizationHandleResponseData,
    GoogleChatOrganizationHandlesResponse: GoogleChatOrganizationHandlesResponse_1.GoogleChatOrganizationHandlesResponse,
    GoogleChatUpdateOrganizationHandleRequest: GoogleChatUpdateOrganizationHandleRequest_1.GoogleChatUpdateOrganizationHandleRequest,
    GoogleChatUpdateOrganizationHandleRequestAttributes: GoogleChatUpdateOrganizationHandleRequestAttributes_1.GoogleChatUpdateOrganizationHandleRequestAttributes,
    GoogleChatUpdateOrganizationHandleRequestData: GoogleChatUpdateOrganizationHandleRequestData_1.GoogleChatUpdateOrganizationHandleRequestData,
    GoogleMeetConfigurationReference: GoogleMeetConfigurationReference_1.GoogleMeetConfigurationReference,
    GoogleMeetConfigurationReferenceData: GoogleMeetConfigurationReferenceData_1.GoogleMeetConfigurationReferenceData,
    GreyNoiseAPIKey: GreyNoiseAPIKey_1.GreyNoiseAPIKey,
    GreyNoiseAPIKeyUpdate: GreyNoiseAPIKeyUpdate_1.GreyNoiseAPIKeyUpdate,
    GreyNoiseIntegration: GreyNoiseIntegration_1.GreyNoiseIntegration,
    GreyNoiseIntegrationUpdate: GreyNoiseIntegrationUpdate_1.GreyNoiseIntegrationUpdate,
    GroupScalarColumn: GroupScalarColumn_1.GroupScalarColumn,
    HTTPBody: HTTPBody_1.HTTPBody,
    HTTPCDGatesBadRequestResponse: HTTPCDGatesBadRequestResponse_1.HTTPCDGatesBadRequestResponse,
    HTTPCDGatesNotFoundResponse: HTTPCDGatesNotFoundResponse_1.HTTPCDGatesNotFoundResponse,
    HTTPCDRulesNotFoundResponse: HTTPCDRulesNotFoundResponse_1.HTTPCDRulesNotFoundResponse,
    HTTPCIAppError: HTTPCIAppError_1.HTTPCIAppError,
    HTTPCIAppErrors: HTTPCIAppErrors_1.HTTPCIAppErrors,
    HTTPHeader: HTTPHeader_1.HTTPHeader,
    HTTPHeaderUpdate: HTTPHeaderUpdate_1.HTTPHeaderUpdate,
    HTTPIntegration: HTTPIntegration_1.HTTPIntegration,
    HTTPIntegrationUpdate: HTTPIntegrationUpdate_1.HTTPIntegrationUpdate,
    HTTPLogError: HTTPLogError_1.HTTPLogError,
    HTTPLogErrors: HTTPLogErrors_1.HTTPLogErrors,
    HTTPLogItem: HTTPLogItem_1.HTTPLogItem,
    HTTPToken: HTTPToken_1.HTTPToken,
    HTTPTokenAuth: HTTPTokenAuth_1.HTTPTokenAuth,
    HTTPTokenAuthUpdate: HTTPTokenAuthUpdate_1.HTTPTokenAuthUpdate,
    HTTPTokenUpdate: HTTPTokenUpdate_1.HTTPTokenUpdate,
    HamrOrgConnectionAttributesRequest: HamrOrgConnectionAttributesRequest_1.HamrOrgConnectionAttributesRequest,
    HamrOrgConnectionAttributesResponse: HamrOrgConnectionAttributesResponse_1.HamrOrgConnectionAttributesResponse,
    HamrOrgConnectionDataRequest: HamrOrgConnectionDataRequest_1.HamrOrgConnectionDataRequest,
    HamrOrgConnectionDataResponse: HamrOrgConnectionDataResponse_1.HamrOrgConnectionDataResponse,
    HamrOrgConnectionRequest: HamrOrgConnectionRequest_1.HamrOrgConnectionRequest,
    HamrOrgConnectionResponse: HamrOrgConnectionResponse_1.HamrOrgConnectionResponse,
    HourlyUsage: HourlyUsage_1.HourlyUsage,
    HourlyUsageAttributes: HourlyUsageAttributes_1.HourlyUsageAttributes,
    HourlyUsageMeasurement: HourlyUsageMeasurement_1.HourlyUsageMeasurement,
    HourlyUsageMetadata: HourlyUsageMetadata_1.HourlyUsageMetadata,
    HourlyUsagePagination: HourlyUsagePagination_1.HourlyUsagePagination,
    HourlyUsageResponse: HourlyUsageResponse_1.HourlyUsageResponse,
    IPAllowlistAttributes: IPAllowlistAttributes_1.IPAllowlistAttributes,
    IPAllowlistData: IPAllowlistData_1.IPAllowlistData,
    IPAllowlistEntry: IPAllowlistEntry_1.IPAllowlistEntry,
    IPAllowlistEntryAttributes: IPAllowlistEntryAttributes_1.IPAllowlistEntryAttributes,
    IPAllowlistEntryData: IPAllowlistEntryData_1.IPAllowlistEntryData,
    IPAllowlistResponse: IPAllowlistResponse_1.IPAllowlistResponse,
    IPAllowlistUpdateRequest: IPAllowlistUpdateRequest_1.IPAllowlistUpdateRequest,
    IncidentCreateAttributes: IncidentCreateAttributes_1.IncidentCreateAttributes,
    IncidentCreateData: IncidentCreateData_1.IncidentCreateData,
    IncidentCreateRelationships: IncidentCreateRelationships_1.IncidentCreateRelationships,
    IncidentCreateRequest: IncidentCreateRequest_1.IncidentCreateRequest,
    IncidentFieldAttributesMultipleValue: IncidentFieldAttributesMultipleValue_1.IncidentFieldAttributesMultipleValue,
    IncidentFieldAttributesSingleValue: IncidentFieldAttributesSingleValue_1.IncidentFieldAttributesSingleValue,
    IncidentHandleAttributesFields: IncidentHandleAttributesFields_1.IncidentHandleAttributesFields,
    IncidentHandleAttributesRequest: IncidentHandleAttributesRequest_1.IncidentHandleAttributesRequest,
    IncidentHandleAttributesResponse: IncidentHandleAttributesResponse_1.IncidentHandleAttributesResponse,
    IncidentHandleDataRequest: IncidentHandleDataRequest_1.IncidentHandleDataRequest,
    IncidentHandleDataResponse: IncidentHandleDataResponse_1.IncidentHandleDataResponse,
    IncidentHandleRelationship: IncidentHandleRelationship_1.IncidentHandleRelationship,
    IncidentHandleRelationshipData: IncidentHandleRelationshipData_1.IncidentHandleRelationshipData,
    IncidentHandleRelationships: IncidentHandleRelationships_1.IncidentHandleRelationships,
    IncidentHandleRelationshipsRequest: IncidentHandleRelationshipsRequest_1.IncidentHandleRelationshipsRequest,
    IncidentHandleRequest: IncidentHandleRequest_1.IncidentHandleRequest,
    IncidentHandleResponse: IncidentHandleResponse_1.IncidentHandleResponse,
    IncidentHandlesResponse: IncidentHandlesResponse_1.IncidentHandlesResponse,
    IncidentImpactAttributes: IncidentImpactAttributes_1.IncidentImpactAttributes,
    IncidentImpactCreateAttributes: IncidentImpactCreateAttributes_1.IncidentImpactCreateAttributes,
    IncidentImpactCreateData: IncidentImpactCreateData_1.IncidentImpactCreateData,
    IncidentImpactCreateRequest: IncidentImpactCreateRequest_1.IncidentImpactCreateRequest,
    IncidentImpactRelationships: IncidentImpactRelationships_1.IncidentImpactRelationships,
    IncidentImpactResponse: IncidentImpactResponse_1.IncidentImpactResponse,
    IncidentImpactResponseData: IncidentImpactResponseData_1.IncidentImpactResponseData,
    IncidentImpactsResponse: IncidentImpactsResponse_1.IncidentImpactsResponse,
    IncidentImportFieldAttributesMultipleValue: IncidentImportFieldAttributesMultipleValue_1.IncidentImportFieldAttributesMultipleValue,
    IncidentImportFieldAttributesSingleValue: IncidentImportFieldAttributesSingleValue_1.IncidentImportFieldAttributesSingleValue,
    IncidentImportRelationships: IncidentImportRelationships_1.IncidentImportRelationships,
    IncidentImportRequest: IncidentImportRequest_1.IncidentImportRequest,
    IncidentImportRequestAttributes: IncidentImportRequestAttributes_1.IncidentImportRequestAttributes,
    IncidentImportRequestData: IncidentImportRequestData_1.IncidentImportRequestData,
    IncidentImportResponse: IncidentImportResponse_1.IncidentImportResponse,
    IncidentImportResponseAttributes: IncidentImportResponseAttributes_1.IncidentImportResponseAttributes,
    IncidentImportResponseData: IncidentImportResponseData_1.IncidentImportResponseData,
    IncidentImportResponseRelationships: IncidentImportResponseRelationships_1.IncidentImportResponseRelationships,
    IncidentIntegrationMetadataAttributes: IncidentIntegrationMetadataAttributes_1.IncidentIntegrationMetadataAttributes,
    IncidentIntegrationMetadataCreateData: IncidentIntegrationMetadataCreateData_1.IncidentIntegrationMetadataCreateData,
    IncidentIntegrationMetadataCreateRequest: IncidentIntegrationMetadataCreateRequest_1.IncidentIntegrationMetadataCreateRequest,
    IncidentIntegrationMetadataListResponse: IncidentIntegrationMetadataListResponse_1.IncidentIntegrationMetadataListResponse,
    IncidentIntegrationMetadataPatchData: IncidentIntegrationMetadataPatchData_1.IncidentIntegrationMetadataPatchData,
    IncidentIntegrationMetadataPatchRequest: IncidentIntegrationMetadataPatchRequest_1.IncidentIntegrationMetadataPatchRequest,
    IncidentIntegrationMetadataResponse: IncidentIntegrationMetadataResponse_1.IncidentIntegrationMetadataResponse,
    IncidentIntegrationMetadataResponseData: IncidentIntegrationMetadataResponseData_1.IncidentIntegrationMetadataResponseData,
    IncidentIntegrationRelationships: IncidentIntegrationRelationships_1.IncidentIntegrationRelationships,
    IncidentNonDatadogCreator: IncidentNonDatadogCreator_1.IncidentNonDatadogCreator,
    IncidentNotificationHandle: IncidentNotificationHandle_1.IncidentNotificationHandle,
    IncidentNotificationRule: IncidentNotificationRule_1.IncidentNotificationRule,
    IncidentNotificationRuleArray: IncidentNotificationRuleArray_1.IncidentNotificationRuleArray,
    IncidentNotificationRuleArrayMeta: IncidentNotificationRuleArrayMeta_1.IncidentNotificationRuleArrayMeta,
    IncidentNotificationRuleArrayMetaPage: IncidentNotificationRuleArrayMetaPage_1.IncidentNotificationRuleArrayMetaPage,
    IncidentNotificationRuleAttributes: IncidentNotificationRuleAttributes_1.IncidentNotificationRuleAttributes,
    IncidentNotificationRuleConditionsItems: IncidentNotificationRuleConditionsItems_1.IncidentNotificationRuleConditionsItems,
    IncidentNotificationRuleCreateAttributes: IncidentNotificationRuleCreateAttributes_1.IncidentNotificationRuleCreateAttributes,
    IncidentNotificationRuleCreateData: IncidentNotificationRuleCreateData_1.IncidentNotificationRuleCreateData,
    IncidentNotificationRuleCreateDataRelationships: IncidentNotificationRuleCreateDataRelationships_1.IncidentNotificationRuleCreateDataRelationships,
    IncidentNotificationRuleRelationships: IncidentNotificationRuleRelationships_1.IncidentNotificationRuleRelationships,
    IncidentNotificationRuleResponseData: IncidentNotificationRuleResponseData_1.IncidentNotificationRuleResponseData,
    IncidentNotificationRuleUpdateData: IncidentNotificationRuleUpdateData_1.IncidentNotificationRuleUpdateData,
    IncidentNotificationTemplate: IncidentNotificationTemplate_1.IncidentNotificationTemplate,
    IncidentNotificationTemplateArray: IncidentNotificationTemplateArray_1.IncidentNotificationTemplateArray,
    IncidentNotificationTemplateArrayMeta: IncidentNotificationTemplateArrayMeta_1.IncidentNotificationTemplateArrayMeta,
    IncidentNotificationTemplateArrayMetaPage: IncidentNotificationTemplateArrayMetaPage_1.IncidentNotificationTemplateArrayMetaPage,
    IncidentNotificationTemplateAttributes: IncidentNotificationTemplateAttributes_1.IncidentNotificationTemplateAttributes,
    IncidentNotificationTemplateCreateAttributes: IncidentNotificationTemplateCreateAttributes_1.IncidentNotificationTemplateCreateAttributes,
    IncidentNotificationTemplateCreateData: IncidentNotificationTemplateCreateData_1.IncidentNotificationTemplateCreateData,
    IncidentNotificationTemplateCreateDataRelationships: IncidentNotificationTemplateCreateDataRelationships_1.IncidentNotificationTemplateCreateDataRelationships,
    IncidentNotificationTemplateObject: IncidentNotificationTemplateObject_1.IncidentNotificationTemplateObject,
    IncidentNotificationTemplateRelationships: IncidentNotificationTemplateRelationships_1.IncidentNotificationTemplateRelationships,
    IncidentNotificationTemplateResponseData: IncidentNotificationTemplateResponseData_1.IncidentNotificationTemplateResponseData,
    IncidentNotificationTemplateUpdateAttributes: IncidentNotificationTemplateUpdateAttributes_1.IncidentNotificationTemplateUpdateAttributes,
    IncidentNotificationTemplateUpdateData: IncidentNotificationTemplateUpdateData_1.IncidentNotificationTemplateUpdateData,
    IncidentRelationshipData: IncidentRelationshipData_1.IncidentRelationshipData,
    IncidentResponse: IncidentResponse_1.IncidentResponse,
    IncidentResponseAttributes: IncidentResponseAttributes_1.IncidentResponseAttributes,
    IncidentResponseData: IncidentResponseData_1.IncidentResponseData,
    IncidentResponseMeta: IncidentResponseMeta_1.IncidentResponseMeta,
    IncidentResponseMetaPagination: IncidentResponseMetaPagination_1.IncidentResponseMetaPagination,
    IncidentResponseRelationships: IncidentResponseRelationships_1.IncidentResponseRelationships,
    IncidentSearchResponse: IncidentSearchResponse_1.IncidentSearchResponse,
    IncidentSearchResponseAttributes: IncidentSearchResponseAttributes_1.IncidentSearchResponseAttributes,
    IncidentSearchResponseData: IncidentSearchResponseData_1.IncidentSearchResponseData,
    IncidentSearchResponseFacetsData: IncidentSearchResponseFacetsData_1.IncidentSearchResponseFacetsData,
    IncidentSearchResponseFieldFacetData: IncidentSearchResponseFieldFacetData_1.IncidentSearchResponseFieldFacetData,
    IncidentSearchResponseIncidentsData: IncidentSearchResponseIncidentsData_1.IncidentSearchResponseIncidentsData,
    IncidentSearchResponseMeta: IncidentSearchResponseMeta_1.IncidentSearchResponseMeta,
    IncidentSearchResponseNumericFacetData: IncidentSearchResponseNumericFacetData_1.IncidentSearchResponseNumericFacetData,
    IncidentSearchResponseNumericFacetDataAggregates: IncidentSearchResponseNumericFacetDataAggregates_1.IncidentSearchResponseNumericFacetDataAggregates,
    IncidentSearchResponsePropertyFieldFacetData: IncidentSearchResponsePropertyFieldFacetData_1.IncidentSearchResponsePropertyFieldFacetData,
    IncidentSearchResponseUserFacetData: IncidentSearchResponseUserFacetData_1.IncidentSearchResponseUserFacetData,
    IncidentServiceCreateAttributes: IncidentServiceCreateAttributes_1.IncidentServiceCreateAttributes,
    IncidentServiceCreateData: IncidentServiceCreateData_1.IncidentServiceCreateData,
    IncidentServiceCreateRequest: IncidentServiceCreateRequest_1.IncidentServiceCreateRequest,
    IncidentServiceRelationships: IncidentServiceRelationships_1.IncidentServiceRelationships,
    IncidentServiceResponse: IncidentServiceResponse_1.IncidentServiceResponse,
    IncidentServiceResponseAttributes: IncidentServiceResponseAttributes_1.IncidentServiceResponseAttributes,
    IncidentServiceResponseData: IncidentServiceResponseData_1.IncidentServiceResponseData,
    IncidentServiceUpdateAttributes: IncidentServiceUpdateAttributes_1.IncidentServiceUpdateAttributes,
    IncidentServiceUpdateData: IncidentServiceUpdateData_1.IncidentServiceUpdateData,
    IncidentServiceUpdateRequest: IncidentServiceUpdateRequest_1.IncidentServiceUpdateRequest,
    IncidentServicesResponse: IncidentServicesResponse_1.IncidentServicesResponse,
    IncidentTeamCreateAttributes: IncidentTeamCreateAttributes_1.IncidentTeamCreateAttributes,
    IncidentTeamCreateData: IncidentTeamCreateData_1.IncidentTeamCreateData,
    IncidentTeamCreateRequest: IncidentTeamCreateRequest_1.IncidentTeamCreateRequest,
    IncidentTeamRelationships: IncidentTeamRelationships_1.IncidentTeamRelationships,
    IncidentTeamResponse: IncidentTeamResponse_1.IncidentTeamResponse,
    IncidentTeamResponseAttributes: IncidentTeamResponseAttributes_1.IncidentTeamResponseAttributes,
    IncidentTeamResponseData: IncidentTeamResponseData_1.IncidentTeamResponseData,
    IncidentTeamUpdateAttributes: IncidentTeamUpdateAttributes_1.IncidentTeamUpdateAttributes,
    IncidentTeamUpdateData: IncidentTeamUpdateData_1.IncidentTeamUpdateData,
    IncidentTeamUpdateRequest: IncidentTeamUpdateRequest_1.IncidentTeamUpdateRequest,
    IncidentTeamsResponse: IncidentTeamsResponse_1.IncidentTeamsResponse,
    IncidentTimelineCellMarkdownCreateAttributes: IncidentTimelineCellMarkdownCreateAttributes_1.IncidentTimelineCellMarkdownCreateAttributes,
    IncidentTimelineCellMarkdownCreateAttributesContent: IncidentTimelineCellMarkdownCreateAttributesContent_1.IncidentTimelineCellMarkdownCreateAttributesContent,
    IncidentTodoAnonymousAssignee: IncidentTodoAnonymousAssignee_1.IncidentTodoAnonymousAssignee,
    IncidentTodoAttributes: IncidentTodoAttributes_1.IncidentTodoAttributes,
    IncidentTodoCreateData: IncidentTodoCreateData_1.IncidentTodoCreateData,
    IncidentTodoCreateRequest: IncidentTodoCreateRequest_1.IncidentTodoCreateRequest,
    IncidentTodoListResponse: IncidentTodoListResponse_1.IncidentTodoListResponse,
    IncidentTodoPatchData: IncidentTodoPatchData_1.IncidentTodoPatchData,
    IncidentTodoPatchRequest: IncidentTodoPatchRequest_1.IncidentTodoPatchRequest,
    IncidentTodoRelationships: IncidentTodoRelationships_1.IncidentTodoRelationships,
    IncidentTodoResponse: IncidentTodoResponse_1.IncidentTodoResponse,
    IncidentTodoResponseData: IncidentTodoResponseData_1.IncidentTodoResponseData,
    IncidentTrigger: IncidentTrigger_1.IncidentTrigger,
    IncidentTriggerWrapper: IncidentTriggerWrapper_1.IncidentTriggerWrapper,
    IncidentTypeAttributes: IncidentTypeAttributes_1.IncidentTypeAttributes,
    IncidentTypeCreateData: IncidentTypeCreateData_1.IncidentTypeCreateData,
    IncidentTypeCreateRequest: IncidentTypeCreateRequest_1.IncidentTypeCreateRequest,
    IncidentTypeListResponse: IncidentTypeListResponse_1.IncidentTypeListResponse,
    IncidentTypeObject: IncidentTypeObject_1.IncidentTypeObject,
    IncidentTypePatchData: IncidentTypePatchData_1.IncidentTypePatchData,
    IncidentTypePatchRequest: IncidentTypePatchRequest_1.IncidentTypePatchRequest,
    IncidentTypeRelationships: IncidentTypeRelationships_1.IncidentTypeRelationships,
    IncidentTypeResponse: IncidentTypeResponse_1.IncidentTypeResponse,
    IncidentTypeUpdateAttributes: IncidentTypeUpdateAttributes_1.IncidentTypeUpdateAttributes,
    IncidentUpdateAttributes: IncidentUpdateAttributes_1.IncidentUpdateAttributes,
    IncidentUpdateData: IncidentUpdateData_1.IncidentUpdateData,
    IncidentUpdateRelationships: IncidentUpdateRelationships_1.IncidentUpdateRelationships,
    IncidentUpdateRequest: IncidentUpdateRequest_1.IncidentUpdateRequest,
    IncidentUserAttributes: IncidentUserAttributes_1.IncidentUserAttributes,
    IncidentUserData: IncidentUserData_1.IncidentUserData,
    IncidentsResponse: IncidentsResponse_1.IncidentsResponse,
    InputSchema: InputSchema_1.InputSchema,
    InputSchemaParameters: InputSchemaParameters_1.InputSchemaParameters,
    IntakePayloadAccepted: IntakePayloadAccepted_1.IntakePayloadAccepted,
    Integration: Integration_1.Integration,
    IntegrationAttributes: IntegrationAttributes_1.IntegrationAttributes,
    IntegrationIncident: IntegrationIncident_1.IntegrationIncident,
    IntegrationIncidentFieldMappingsItems: IntegrationIncidentFieldMappingsItems_1.IntegrationIncidentFieldMappingsItems,
    IntegrationIncidentSeverityConfig: IntegrationIncidentSeverityConfig_1.IntegrationIncidentSeverityConfig,
    IntegrationJira: IntegrationJira_1.IntegrationJira,
    IntegrationJiraAutoCreation: IntegrationJiraAutoCreation_1.IntegrationJiraAutoCreation,
    IntegrationJiraMetadata: IntegrationJiraMetadata_1.IntegrationJiraMetadata,
    IntegrationJiraSync: IntegrationJiraSync_1.IntegrationJiraSync,
    IntegrationJiraSyncDueDate: IntegrationJiraSyncDueDate_1.IntegrationJiraSyncDueDate,
    IntegrationJiraSyncProperties: IntegrationJiraSyncProperties_1.IntegrationJiraSyncProperties,
    IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties: IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties_1.IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties,
    IntegrationLinks: IntegrationLinks_1.IntegrationLinks,
    IntegrationMonitor: IntegrationMonitor_1.IntegrationMonitor,
    IntegrationOnCall: IntegrationOnCall_1.IntegrationOnCall,
    IntegrationOnCallEscalationQueriesItems: IntegrationOnCallEscalationQueriesItems_1.IntegrationOnCallEscalationQueriesItems,
    IntegrationOnCallEscalationQueriesItemsTarget: IntegrationOnCallEscalationQueriesItemsTarget_1.IntegrationOnCallEscalationQueriesItemsTarget,
    IntegrationServiceNow: IntegrationServiceNow_1.IntegrationServiceNow,
    IntegrationServiceNowAutoCreation: IntegrationServiceNowAutoCreation_1.IntegrationServiceNowAutoCreation,
    IntegrationServiceNowSyncConfig: IntegrationServiceNowSyncConfig_1.IntegrationServiceNowSyncConfig,
    IntegrationServiceNowSyncConfig139772721534496: IntegrationServiceNowSyncConfig139772721534496_1.IntegrationServiceNowSyncConfig139772721534496,
    IntegrationServiceNowSyncConfigPriority: IntegrationServiceNowSyncConfigPriority_1.IntegrationServiceNowSyncConfigPriority,
    InterfaceAttributes: InterfaceAttributes_1.InterfaceAttributes,
    Issue: Issue_1.Issue,
    IssueAssigneeRelationship: IssueAssigneeRelationship_1.IssueAssigneeRelationship,
    IssueAttributes: IssueAttributes_1.IssueAttributes,
    IssueCase: IssueCase_1.IssueCase,
    IssueCaseAttributes: IssueCaseAttributes_1.IssueCaseAttributes,
    IssueCaseInsight: IssueCaseInsight_1.IssueCaseInsight,
    IssueCaseJiraIssue: IssueCaseJiraIssue_1.IssueCaseJiraIssue,
    IssueCaseJiraIssueResult: IssueCaseJiraIssueResult_1.IssueCaseJiraIssueResult,
    IssueCaseReference: IssueCaseReference_1.IssueCaseReference,
    IssueCaseRelationship: IssueCaseRelationship_1.IssueCaseRelationship,
    IssueCaseRelationships: IssueCaseRelationships_1.IssueCaseRelationships,
    IssueReference: IssueReference_1.IssueReference,
    IssueRelationships: IssueRelationships_1.IssueRelationships,
    IssueResponse: IssueResponse_1.IssueResponse,
    IssueTeam: IssueTeam_1.IssueTeam,
    IssueTeamAttributes: IssueTeamAttributes_1.IssueTeamAttributes,
    IssueTeamOwnersRelationship: IssueTeamOwnersRelationship_1.IssueTeamOwnersRelationship,
    IssueTeamReference: IssueTeamReference_1.IssueTeamReference,
    IssueUpdateAssigneeRequest: IssueUpdateAssigneeRequest_1.IssueUpdateAssigneeRequest,
    IssueUpdateAssigneeRequestData: IssueUpdateAssigneeRequestData_1.IssueUpdateAssigneeRequestData,
    IssueUpdateStateRequest: IssueUpdateStateRequest_1.IssueUpdateStateRequest,
    IssueUpdateStateRequestData: IssueUpdateStateRequestData_1.IssueUpdateStateRequestData,
    IssueUpdateStateRequestDataAttributes: IssueUpdateStateRequestDataAttributes_1.IssueUpdateStateRequestDataAttributes,
    IssueUser: IssueUser_1.IssueUser,
    IssueUserAttributes: IssueUserAttributes_1.IssueUserAttributes,
    IssueUserReference: IssueUserReference_1.IssueUserReference,
    IssuesSearchRequest: IssuesSearchRequest_1.IssuesSearchRequest,
    IssuesSearchRequestData: IssuesSearchRequestData_1.IssuesSearchRequestData,
    IssuesSearchRequestDataAttributes: IssuesSearchRequestDataAttributes_1.IssuesSearchRequestDataAttributes,
    IssuesSearchResponse: IssuesSearchResponse_1.IssuesSearchResponse,
    IssuesSearchResult: IssuesSearchResult_1.IssuesSearchResult,
    IssuesSearchResultAttributes: IssuesSearchResultAttributes_1.IssuesSearchResultAttributes,
    IssuesSearchResultIssueRelationship: IssuesSearchResultIssueRelationship_1.IssuesSearchResultIssueRelationship,
    IssuesSearchResultRelationships: IssuesSearchResultRelationships_1.IssuesSearchResultRelationships,
    ItemApiPayload: ItemApiPayload_1.ItemApiPayload,
    ItemApiPayloadArray: ItemApiPayloadArray_1.ItemApiPayloadArray,
    ItemApiPayloadData: ItemApiPayloadData_1.ItemApiPayloadData,
    ItemApiPayloadDataAttributes: ItemApiPayloadDataAttributes_1.ItemApiPayloadDataAttributes,
    ItemApiPayloadMeta: ItemApiPayloadMeta_1.ItemApiPayloadMeta,
    ItemApiPayloadMetaPage: ItemApiPayloadMetaPage_1.ItemApiPayloadMetaPage,
    ItemApiPayloadMetaSchema: ItemApiPayloadMetaSchema_1.ItemApiPayloadMetaSchema,
    ItemApiPayloadMetaSchemaField: ItemApiPayloadMetaSchemaField_1.ItemApiPayloadMetaSchemaField,
    JSONAPIErrorItem: JSONAPIErrorItem_1.JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource_1.JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse_1.JSONAPIErrorResponse,
    JiraAccountAttributes: JiraAccountAttributes_1.JiraAccountAttributes,
    JiraAccountData: JiraAccountData_1.JiraAccountData,
    JiraAccountRelationship: JiraAccountRelationship_1.JiraAccountRelationship,
    JiraAccountsMeta: JiraAccountsMeta_1.JiraAccountsMeta,
    JiraAccountsResponse: JiraAccountsResponse_1.JiraAccountsResponse,
    JiraIntegrationMetadata: JiraIntegrationMetadata_1.JiraIntegrationMetadata,
    JiraIntegrationMetadataIssuesItem: JiraIntegrationMetadataIssuesItem_1.JiraIntegrationMetadataIssuesItem,
    JiraIssue: JiraIssue_1.JiraIssue,
    JiraIssueCreateAttributes: JiraIssueCreateAttributes_1.JiraIssueCreateAttributes,
    JiraIssueCreateData: JiraIssueCreateData_1.JiraIssueCreateData,
    JiraIssueCreateRequest: JiraIssueCreateRequest_1.JiraIssueCreateRequest,
    JiraIssueLinkAttributes: JiraIssueLinkAttributes_1.JiraIssueLinkAttributes,
    JiraIssueLinkData: JiraIssueLinkData_1.JiraIssueLinkData,
    JiraIssueLinkRequest: JiraIssueLinkRequest_1.JiraIssueLinkRequest,
    JiraIssueResult: JiraIssueResult_1.JiraIssueResult,
    JiraIssueTemplateCreateRequest: JiraIssueTemplateCreateRequest_1.JiraIssueTemplateCreateRequest,
    JiraIssueTemplateCreateRequestAttributes: JiraIssueTemplateCreateRequestAttributes_1.JiraIssueTemplateCreateRequestAttributes,
    JiraIssueTemplateCreateRequestAttributesJiraAccount: JiraIssueTemplateCreateRequestAttributesJiraAccount_1.JiraIssueTemplateCreateRequestAttributesJiraAccount,
    JiraIssueTemplateCreateRequestData: JiraIssueTemplateCreateRequestData_1.JiraIssueTemplateCreateRequestData,
    JiraIssueTemplateData: JiraIssueTemplateData_1.JiraIssueTemplateData,
    JiraIssueTemplateDataAttributes: JiraIssueTemplateDataAttributes_1.JiraIssueTemplateDataAttributes,
    JiraIssueTemplateDataRelationships: JiraIssueTemplateDataRelationships_1.JiraIssueTemplateDataRelationships,
    JiraIssueTemplateResponse: JiraIssueTemplateResponse_1.JiraIssueTemplateResponse,
    JiraIssueTemplateUpdateRequest: JiraIssueTemplateUpdateRequest_1.JiraIssueTemplateUpdateRequest,
    JiraIssueTemplateUpdateRequestAttributes: JiraIssueTemplateUpdateRequestAttributes_1.JiraIssueTemplateUpdateRequestAttributes,
    JiraIssueTemplateUpdateRequestData: JiraIssueTemplateUpdateRequestData_1.JiraIssueTemplateUpdateRequestData,
    JiraIssueTemplatesResponse: JiraIssueTemplatesResponse_1.JiraIssueTemplatesResponse,
    JobCreateResponse: JobCreateResponse_1.JobCreateResponse,
    JobCreateResponseData: JobCreateResponseData_1.JobCreateResponseData,
    JobDefinition: JobDefinition_1.JobDefinition,
    JobDefinitionFromRule: JobDefinitionFromRule_1.JobDefinitionFromRule,
    JsonPatchOperation: JsonPatchOperation_1.JsonPatchOperation,
    KindAttributes: KindAttributes_1.KindAttributes,
    KindData: KindData_1.KindData,
    KindMetadata: KindMetadata_1.KindMetadata,
    KindObj: KindObj_1.KindObj,
    KindResponseMeta: KindResponseMeta_1.KindResponseMeta,
    LLMObsCursorMeta: LLMObsCursorMeta_1.LLMObsCursorMeta,
    LLMObsDatasetDataAttributesRequest: LLMObsDatasetDataAttributesRequest_1.LLMObsDatasetDataAttributesRequest,
    LLMObsDatasetDataAttributesResponse: LLMObsDatasetDataAttributesResponse_1.LLMObsDatasetDataAttributesResponse,
    LLMObsDatasetDataRequest: LLMObsDatasetDataRequest_1.LLMObsDatasetDataRequest,
    LLMObsDatasetDataResponse: LLMObsDatasetDataResponse_1.LLMObsDatasetDataResponse,
    LLMObsDatasetRecordDataResponse: LLMObsDatasetRecordDataResponse_1.LLMObsDatasetRecordDataResponse,
    LLMObsDatasetRecordItem: LLMObsDatasetRecordItem_1.LLMObsDatasetRecordItem,
    LLMObsDatasetRecordUpdateItem: LLMObsDatasetRecordUpdateItem_1.LLMObsDatasetRecordUpdateItem,
    LLMObsDatasetRecordsDataAttributesRequest: LLMObsDatasetRecordsDataAttributesRequest_1.LLMObsDatasetRecordsDataAttributesRequest,
    LLMObsDatasetRecordsDataRequest: LLMObsDatasetRecordsDataRequest_1.LLMObsDatasetRecordsDataRequest,
    LLMObsDatasetRecordsListResponse: LLMObsDatasetRecordsListResponse_1.LLMObsDatasetRecordsListResponse,
    LLMObsDatasetRecordsMutationData: LLMObsDatasetRecordsMutationData_1.LLMObsDatasetRecordsMutationData,
    LLMObsDatasetRecordsMutationResponse: LLMObsDatasetRecordsMutationResponse_1.LLMObsDatasetRecordsMutationResponse,
    LLMObsDatasetRecordsRequest: LLMObsDatasetRecordsRequest_1.LLMObsDatasetRecordsRequest,
    LLMObsDatasetRecordsUpdateDataAttributesRequest: LLMObsDatasetRecordsUpdateDataAttributesRequest_1.LLMObsDatasetRecordsUpdateDataAttributesRequest,
    LLMObsDatasetRecordsUpdateDataRequest: LLMObsDatasetRecordsUpdateDataRequest_1.LLMObsDatasetRecordsUpdateDataRequest,
    LLMObsDatasetRecordsUpdateRequest: LLMObsDatasetRecordsUpdateRequest_1.LLMObsDatasetRecordsUpdateRequest,
    LLMObsDatasetRequest: LLMObsDatasetRequest_1.LLMObsDatasetRequest,
    LLMObsDatasetResponse: LLMObsDatasetResponse_1.LLMObsDatasetResponse,
    LLMObsDatasetUpdateDataAttributesRequest: LLMObsDatasetUpdateDataAttributesRequest_1.LLMObsDatasetUpdateDataAttributesRequest,
    LLMObsDatasetUpdateDataRequest: LLMObsDatasetUpdateDataRequest_1.LLMObsDatasetUpdateDataRequest,
    LLMObsDatasetUpdateRequest: LLMObsDatasetUpdateRequest_1.LLMObsDatasetUpdateRequest,
    LLMObsDatasetsResponse: LLMObsDatasetsResponse_1.LLMObsDatasetsResponse,
    LLMObsDeleteDatasetRecordsDataAttributesRequest: LLMObsDeleteDatasetRecordsDataAttributesRequest_1.LLMObsDeleteDatasetRecordsDataAttributesRequest,
    LLMObsDeleteDatasetRecordsDataRequest: LLMObsDeleteDatasetRecordsDataRequest_1.LLMObsDeleteDatasetRecordsDataRequest,
    LLMObsDeleteDatasetRecordsRequest: LLMObsDeleteDatasetRecordsRequest_1.LLMObsDeleteDatasetRecordsRequest,
    LLMObsDeleteDatasetsDataAttributesRequest: LLMObsDeleteDatasetsDataAttributesRequest_1.LLMObsDeleteDatasetsDataAttributesRequest,
    LLMObsDeleteDatasetsDataRequest: LLMObsDeleteDatasetsDataRequest_1.LLMObsDeleteDatasetsDataRequest,
    LLMObsDeleteDatasetsRequest: LLMObsDeleteDatasetsRequest_1.LLMObsDeleteDatasetsRequest,
    LLMObsDeleteExperimentsDataAttributesRequest: LLMObsDeleteExperimentsDataAttributesRequest_1.LLMObsDeleteExperimentsDataAttributesRequest,
    LLMObsDeleteExperimentsDataRequest: LLMObsDeleteExperimentsDataRequest_1.LLMObsDeleteExperimentsDataRequest,
    LLMObsDeleteExperimentsRequest: LLMObsDeleteExperimentsRequest_1.LLMObsDeleteExperimentsRequest,
    LLMObsDeleteProjectsDataAttributesRequest: LLMObsDeleteProjectsDataAttributesRequest_1.LLMObsDeleteProjectsDataAttributesRequest,
    LLMObsDeleteProjectsDataRequest: LLMObsDeleteProjectsDataRequest_1.LLMObsDeleteProjectsDataRequest,
    LLMObsDeleteProjectsRequest: LLMObsDeleteProjectsRequest_1.LLMObsDeleteProjectsRequest,
    LLMObsExperimentDataAttributesRequest: LLMObsExperimentDataAttributesRequest_1.LLMObsExperimentDataAttributesRequest,
    LLMObsExperimentDataAttributesResponse: LLMObsExperimentDataAttributesResponse_1.LLMObsExperimentDataAttributesResponse,
    LLMObsExperimentDataRequest: LLMObsExperimentDataRequest_1.LLMObsExperimentDataRequest,
    LLMObsExperimentDataResponse: LLMObsExperimentDataResponse_1.LLMObsExperimentDataResponse,
    LLMObsExperimentEventsDataAttributesRequest: LLMObsExperimentEventsDataAttributesRequest_1.LLMObsExperimentEventsDataAttributesRequest,
    LLMObsExperimentEventsDataRequest: LLMObsExperimentEventsDataRequest_1.LLMObsExperimentEventsDataRequest,
    LLMObsExperimentEventsRequest: LLMObsExperimentEventsRequest_1.LLMObsExperimentEventsRequest,
    LLMObsExperimentMetric: LLMObsExperimentMetric_1.LLMObsExperimentMetric,
    LLMObsExperimentMetricError: LLMObsExperimentMetricError_1.LLMObsExperimentMetricError,
    LLMObsExperimentRequest: LLMObsExperimentRequest_1.LLMObsExperimentRequest,
    LLMObsExperimentResponse: LLMObsExperimentResponse_1.LLMObsExperimentResponse,
    LLMObsExperimentSpan: LLMObsExperimentSpan_1.LLMObsExperimentSpan,
    LLMObsExperimentSpanError: LLMObsExperimentSpanError_1.LLMObsExperimentSpanError,
    LLMObsExperimentSpanMeta: LLMObsExperimentSpanMeta_1.LLMObsExperimentSpanMeta,
    LLMObsExperimentUpdateDataAttributesRequest: LLMObsExperimentUpdateDataAttributesRequest_1.LLMObsExperimentUpdateDataAttributesRequest,
    LLMObsExperimentUpdateDataRequest: LLMObsExperimentUpdateDataRequest_1.LLMObsExperimentUpdateDataRequest,
    LLMObsExperimentUpdateRequest: LLMObsExperimentUpdateRequest_1.LLMObsExperimentUpdateRequest,
    LLMObsExperimentsResponse: LLMObsExperimentsResponse_1.LLMObsExperimentsResponse,
    LLMObsProjectDataAttributesRequest: LLMObsProjectDataAttributesRequest_1.LLMObsProjectDataAttributesRequest,
    LLMObsProjectDataAttributesResponse: LLMObsProjectDataAttributesResponse_1.LLMObsProjectDataAttributesResponse,
    LLMObsProjectDataRequest: LLMObsProjectDataRequest_1.LLMObsProjectDataRequest,
    LLMObsProjectDataResponse: LLMObsProjectDataResponse_1.LLMObsProjectDataResponse,
    LLMObsProjectRequest: LLMObsProjectRequest_1.LLMObsProjectRequest,
    LLMObsProjectResponse: LLMObsProjectResponse_1.LLMObsProjectResponse,
    LLMObsProjectUpdateDataAttributesRequest: LLMObsProjectUpdateDataAttributesRequest_1.LLMObsProjectUpdateDataAttributesRequest,
    LLMObsProjectUpdateDataRequest: LLMObsProjectUpdateDataRequest_1.LLMObsProjectUpdateDataRequest,
    LLMObsProjectUpdateRequest: LLMObsProjectUpdateRequest_1.LLMObsProjectUpdateRequest,
    LLMObsProjectsResponse: LLMObsProjectsResponse_1.LLMObsProjectsResponse,
    LaunchDarklyAPIKey: LaunchDarklyAPIKey_1.LaunchDarklyAPIKey,
    LaunchDarklyAPIKeyUpdate: LaunchDarklyAPIKeyUpdate_1.LaunchDarklyAPIKeyUpdate,
    LaunchDarklyIntegration: LaunchDarklyIntegration_1.LaunchDarklyIntegration,
    LaunchDarklyIntegrationUpdate: LaunchDarklyIntegrationUpdate_1.LaunchDarklyIntegrationUpdate,
    Layer: Layer_1.Layer,
    LayerAttributes: LayerAttributes_1.LayerAttributes,
    LayerAttributesInterval: LayerAttributesInterval_1.LayerAttributesInterval,
    LayerRelationships: LayerRelationships_1.LayerRelationships,
    LayerRelationshipsMembers: LayerRelationshipsMembers_1.LayerRelationshipsMembers,
    LayerRelationshipsMembersDataItems: LayerRelationshipsMembersDataItems_1.LayerRelationshipsMembersDataItems,
    LeakedKey: LeakedKey_1.LeakedKey,
    LeakedKeyAttributes: LeakedKeyAttributes_1.LeakedKeyAttributes,
    Library: Library_1.Library,
    Links: Links_1.Links,
    ListAPIsResponse: ListAPIsResponse_1.ListAPIsResponse,
    ListAPIsResponseData: ListAPIsResponseData_1.ListAPIsResponseData,
    ListAPIsResponseDataAttributes: ListAPIsResponseDataAttributes_1.ListAPIsResponseDataAttributes,
    ListAPIsResponseMeta: ListAPIsResponseMeta_1.ListAPIsResponseMeta,
    ListAPIsResponseMetaPagination: ListAPIsResponseMetaPagination_1.ListAPIsResponseMetaPagination,
    ListAppKeyRegistrationsResponse: ListAppKeyRegistrationsResponse_1.ListAppKeyRegistrationsResponse,
    ListAppKeyRegistrationsResponseMeta: ListAppKeyRegistrationsResponseMeta_1.ListAppKeyRegistrationsResponseMeta,
    ListApplicationKeysResponse: ListApplicationKeysResponse_1.ListApplicationKeysResponse,
    ListAppsResponse: ListAppsResponse_1.ListAppsResponse,
    ListAppsResponseDataItems: ListAppsResponseDataItems_1.ListAppsResponseDataItems,
    ListAppsResponseDataItemsAttributes: ListAppsResponseDataItemsAttributes_1.ListAppsResponseDataItemsAttributes,
    ListAppsResponseDataItemsRelationships: ListAppsResponseDataItemsRelationships_1.ListAppsResponseDataItemsRelationships,
    ListAppsResponseMeta: ListAppsResponseMeta_1.ListAppsResponseMeta,
    ListAppsResponseMetaPage: ListAppsResponseMetaPage_1.ListAppsResponseMetaPage,
    ListAssetsSBOMsResponse: ListAssetsSBOMsResponse_1.ListAssetsSBOMsResponse,
    ListConnectionsResponse: ListConnectionsResponse_1.ListConnectionsResponse,
    ListConnectionsResponseData: ListConnectionsResponseData_1.ListConnectionsResponseData,
    ListConnectionsResponseDataAttributes: ListConnectionsResponseDataAttributes_1.ListConnectionsResponseDataAttributes,
    ListConnectionsResponseDataAttributesConnectionsItems: ListConnectionsResponseDataAttributesConnectionsItems_1.ListConnectionsResponseDataAttributesConnectionsItems,
    ListConnectionsResponseDataAttributesConnectionsItemsJoin: ListConnectionsResponseDataAttributesConnectionsItemsJoin_1.ListConnectionsResponseDataAttributesConnectionsItemsJoin,
    ListDeploymentRuleResponseData: ListDeploymentRuleResponseData_1.ListDeploymentRuleResponseData,
    ListDeploymentRulesResponseDataAttributes: ListDeploymentRulesResponseDataAttributes_1.ListDeploymentRulesResponseDataAttributes,
    ListDevicesResponse: ListDevicesResponse_1.ListDevicesResponse,
    ListDevicesResponseMetadata: ListDevicesResponseMetadata_1.ListDevicesResponseMetadata,
    ListDevicesResponseMetadataPage: ListDevicesResponseMetadataPage_1.ListDevicesResponseMetadataPage,
    ListDowntimesResponse: ListDowntimesResponse_1.ListDowntimesResponse,
    ListEntityCatalogResponse: ListEntityCatalogResponse_1.ListEntityCatalogResponse,
    ListEntityCatalogResponseLinks: ListEntityCatalogResponseLinks_1.ListEntityCatalogResponseLinks,
    ListFindingsMeta: ListFindingsMeta_1.ListFindingsMeta,
    ListFindingsPage: ListFindingsPage_1.ListFindingsPage,
    ListFindingsResponse: ListFindingsResponse_1.ListFindingsResponse,
    ListIntegrationsResponse: ListIntegrationsResponse_1.ListIntegrationsResponse,
    ListInterfaceTagsResponse: ListInterfaceTagsResponse_1.ListInterfaceTagsResponse,
    ListInterfaceTagsResponseData: ListInterfaceTagsResponseData_1.ListInterfaceTagsResponseData,
    ListKindCatalogResponse: ListKindCatalogResponse_1.ListKindCatalogResponse,
    ListNotificationChannelsResponse: ListNotificationChannelsResponse_1.ListNotificationChannelsResponse,
    ListOnCallNotificationRulesResponse: ListOnCallNotificationRulesResponse_1.ListOnCallNotificationRulesResponse,
    ListPipelinesResponse: ListPipelinesResponse_1.ListPipelinesResponse,
    ListPipelinesResponseMeta: ListPipelinesResponseMeta_1.ListPipelinesResponseMeta,
    ListPowerpacksResponse: ListPowerpacksResponse_1.ListPowerpacksResponse,
    ListRelationCatalogResponse: ListRelationCatalogResponse_1.ListRelationCatalogResponse,
    ListRelationCatalogResponseLinks: ListRelationCatalogResponseLinks_1.ListRelationCatalogResponseLinks,
    ListRulesResponse: ListRulesResponse_1.ListRulesResponse,
    ListRulesResponseDataItem: ListRulesResponseDataItem_1.ListRulesResponseDataItem,
    ListRulesResponseLinks: ListRulesResponseLinks_1.ListRulesResponseLinks,
    ListSecurityFindingsResponse: ListSecurityFindingsResponse_1.ListSecurityFindingsResponse,
    ListTagsResponse: ListTagsResponse_1.ListTagsResponse,
    ListTagsResponseData: ListTagsResponseData_1.ListTagsResponseData,
    ListTagsResponseDataAttributes: ListTagsResponseDataAttributes_1.ListTagsResponseDataAttributes,
    ListThreatHuntingJobsResponse: ListThreatHuntingJobsResponse_1.ListThreatHuntingJobsResponse,
    ListVulnerabilitiesResponse: ListVulnerabilitiesResponse_1.ListVulnerabilitiesResponse,
    ListVulnerableAssetsResponse: ListVulnerableAssetsResponse_1.ListVulnerableAssetsResponse,
    Log: Log_1.Log,
    LogAttributes: LogAttributes_1.LogAttributes,
    LogsAggregateBucket: LogsAggregateBucket_1.LogsAggregateBucket,
    LogsAggregateBucketValueTimeseriesPoint: LogsAggregateBucketValueTimeseriesPoint_1.LogsAggregateBucketValueTimeseriesPoint,
    LogsAggregateRequest: LogsAggregateRequest_1.LogsAggregateRequest,
    LogsAggregateRequestPage: LogsAggregateRequestPage_1.LogsAggregateRequestPage,
    LogsAggregateResponse: LogsAggregateResponse_1.LogsAggregateResponse,
    LogsAggregateResponseData: LogsAggregateResponseData_1.LogsAggregateResponseData,
    LogsAggregateSort: LogsAggregateSort_1.LogsAggregateSort,
    LogsArchive: LogsArchive_1.LogsArchive,
    LogsArchiveAttributes: LogsArchiveAttributes_1.LogsArchiveAttributes,
    LogsArchiveCreateRequest: LogsArchiveCreateRequest_1.LogsArchiveCreateRequest,
    LogsArchiveCreateRequestAttributes: LogsArchiveCreateRequestAttributes_1.LogsArchiveCreateRequestAttributes,
    LogsArchiveCreateRequestDefinition: LogsArchiveCreateRequestDefinition_1.LogsArchiveCreateRequestDefinition,
    LogsArchiveDefinition: LogsArchiveDefinition_1.LogsArchiveDefinition,
    LogsArchiveDestinationAzure: LogsArchiveDestinationAzure_1.LogsArchiveDestinationAzure,
    LogsArchiveDestinationGCS: LogsArchiveDestinationGCS_1.LogsArchiveDestinationGCS,
    LogsArchiveDestinationS3: LogsArchiveDestinationS3_1.LogsArchiveDestinationS3,
    LogsArchiveEncryptionS3: LogsArchiveEncryptionS3_1.LogsArchiveEncryptionS3,
    LogsArchiveIntegrationAzure: LogsArchiveIntegrationAzure_1.LogsArchiveIntegrationAzure,
    LogsArchiveIntegrationGCS: LogsArchiveIntegrationGCS_1.LogsArchiveIntegrationGCS,
    LogsArchiveIntegrationS3: LogsArchiveIntegrationS3_1.LogsArchiveIntegrationS3,
    LogsArchiveOrder: LogsArchiveOrder_1.LogsArchiveOrder,
    LogsArchiveOrderAttributes: LogsArchiveOrderAttributes_1.LogsArchiveOrderAttributes,
    LogsArchiveOrderDefinition: LogsArchiveOrderDefinition_1.LogsArchiveOrderDefinition,
    LogsArchives: LogsArchives_1.LogsArchives,
    LogsCompute: LogsCompute_1.LogsCompute,
    LogsGroupBy: LogsGroupBy_1.LogsGroupBy,
    LogsGroupByHistogram: LogsGroupByHistogram_1.LogsGroupByHistogram,
    LogsListRequest: LogsListRequest_1.LogsListRequest,
    LogsListRequestPage: LogsListRequestPage_1.LogsListRequestPage,
    LogsListResponse: LogsListResponse_1.LogsListResponse,
    LogsListResponseLinks: LogsListResponseLinks_1.LogsListResponseLinks,
    LogsMetricCompute: LogsMetricCompute_1.LogsMetricCompute,
    LogsMetricCreateAttributes: LogsMetricCreateAttributes_1.LogsMetricCreateAttributes,
    LogsMetricCreateData: LogsMetricCreateData_1.LogsMetricCreateData,
    LogsMetricCreateRequest: LogsMetricCreateRequest_1.LogsMetricCreateRequest,
    LogsMetricFilter: LogsMetricFilter_1.LogsMetricFilter,
    LogsMetricGroupBy: LogsMetricGroupBy_1.LogsMetricGroupBy,
    LogsMetricResponse: LogsMetricResponse_1.LogsMetricResponse,
    LogsMetricResponseAttributes: LogsMetricResponseAttributes_1.LogsMetricResponseAttributes,
    LogsMetricResponseCompute: LogsMetricResponseCompute_1.LogsMetricResponseCompute,
    LogsMetricResponseData: LogsMetricResponseData_1.LogsMetricResponseData,
    LogsMetricResponseFilter: LogsMetricResponseFilter_1.LogsMetricResponseFilter,
    LogsMetricResponseGroupBy: LogsMetricResponseGroupBy_1.LogsMetricResponseGroupBy,
    LogsMetricUpdateAttributes: LogsMetricUpdateAttributes_1.LogsMetricUpdateAttributes,
    LogsMetricUpdateCompute: LogsMetricUpdateCompute_1.LogsMetricUpdateCompute,
    LogsMetricUpdateData: LogsMetricUpdateData_1.LogsMetricUpdateData,
    LogsMetricUpdateRequest: LogsMetricUpdateRequest_1.LogsMetricUpdateRequest,
    LogsMetricsResponse: LogsMetricsResponse_1.LogsMetricsResponse,
    LogsQueryFilter: LogsQueryFilter_1.LogsQueryFilter,
    LogsQueryOptions: LogsQueryOptions_1.LogsQueryOptions,
    LogsResponseMetadata: LogsResponseMetadata_1.LogsResponseMetadata,
    LogsResponseMetadataPage: LogsResponseMetadataPage_1.LogsResponseMetadataPage,
    LogsWarning: LogsWarning_1.LogsWarning,
    MSTeamsIntegrationMetadata: MSTeamsIntegrationMetadata_1.MSTeamsIntegrationMetadata,
    MSTeamsIntegrationMetadataTeamsItem: MSTeamsIntegrationMetadataTeamsItem_1.MSTeamsIntegrationMetadataTeamsItem,
    Maintenance: Maintenance_1.Maintenance,
    MaintenanceArray: MaintenanceArray_1.MaintenanceArray,
    MaintenanceData: MaintenanceData_1.MaintenanceData,
    MaintenanceDataAttributes: MaintenanceDataAttributes_1.MaintenanceDataAttributes,
    MaintenanceDataAttributesComponentsAffectedItems: MaintenanceDataAttributesComponentsAffectedItems_1.MaintenanceDataAttributesComponentsAffectedItems,
    MaintenanceDataAttributesUpdatesItems: MaintenanceDataAttributesUpdatesItems_1.MaintenanceDataAttributesUpdatesItems,
    MaintenanceDataAttributesUpdatesItemsComponentsAffectedItems: MaintenanceDataAttributesUpdatesItemsComponentsAffectedItems_1.MaintenanceDataAttributesUpdatesItemsComponentsAffectedItems,
    MaintenanceDataRelationships: MaintenanceDataRelationships_1.MaintenanceDataRelationships,
    MaintenanceDataRelationshipsCreatedByUser: MaintenanceDataRelationshipsCreatedByUser_1.MaintenanceDataRelationshipsCreatedByUser,
    MaintenanceDataRelationshipsCreatedByUserData: MaintenanceDataRelationshipsCreatedByUserData_1.MaintenanceDataRelationshipsCreatedByUserData,
    MaintenanceDataRelationshipsLastModifiedByUser: MaintenanceDataRelationshipsLastModifiedByUser_1.MaintenanceDataRelationshipsLastModifiedByUser,
    MaintenanceDataRelationshipsLastModifiedByUserData: MaintenanceDataRelationshipsLastModifiedByUserData_1.MaintenanceDataRelationshipsLastModifiedByUserData,
    MaintenanceDataRelationshipsStatusPage: MaintenanceDataRelationshipsStatusPage_1.MaintenanceDataRelationshipsStatusPage,
    MaintenanceDataRelationshipsStatusPageData: MaintenanceDataRelationshipsStatusPageData_1.MaintenanceDataRelationshipsStatusPageData,
    MemberTeam: MemberTeam_1.MemberTeam,
    Metadata: Metadata_1.Metadata,
    Metric: Metric_1.Metric,
    MetricAllTags: MetricAllTags_1.MetricAllTags,
    MetricAllTagsAttributes: MetricAllTagsAttributes_1.MetricAllTagsAttributes,
    MetricAllTagsResponse: MetricAllTagsResponse_1.MetricAllTagsResponse,
    MetricAssetAttributes: MetricAssetAttributes_1.MetricAssetAttributes,
    MetricAssetDashboardRelationship: MetricAssetDashboardRelationship_1.MetricAssetDashboardRelationship,
    MetricAssetDashboardRelationships: MetricAssetDashboardRelationships_1.MetricAssetDashboardRelationships,
    MetricAssetMonitorRelationship: MetricAssetMonitorRelationship_1.MetricAssetMonitorRelationship,
    MetricAssetMonitorRelationships: MetricAssetMonitorRelationships_1.MetricAssetMonitorRelationships,
    MetricAssetNotebookRelationship: MetricAssetNotebookRelationship_1.MetricAssetNotebookRelationship,
    MetricAssetNotebookRelationships: MetricAssetNotebookRelationships_1.MetricAssetNotebookRelationships,
    MetricAssetResponseData: MetricAssetResponseData_1.MetricAssetResponseData,
    MetricAssetResponseRelationships: MetricAssetResponseRelationships_1.MetricAssetResponseRelationships,
    MetricAssetSLORelationship: MetricAssetSLORelationship_1.MetricAssetSLORelationship,
    MetricAssetSLORelationships: MetricAssetSLORelationships_1.MetricAssetSLORelationships,
    MetricAssetsResponse: MetricAssetsResponse_1.MetricAssetsResponse,
    MetricBulkTagConfigCreate: MetricBulkTagConfigCreate_1.MetricBulkTagConfigCreate,
    MetricBulkTagConfigCreateAttributes: MetricBulkTagConfigCreateAttributes_1.MetricBulkTagConfigCreateAttributes,
    MetricBulkTagConfigCreateRequest: MetricBulkTagConfigCreateRequest_1.MetricBulkTagConfigCreateRequest,
    MetricBulkTagConfigDelete: MetricBulkTagConfigDelete_1.MetricBulkTagConfigDelete,
    MetricBulkTagConfigDeleteAttributes: MetricBulkTagConfigDeleteAttributes_1.MetricBulkTagConfigDeleteAttributes,
    MetricBulkTagConfigDeleteRequest: MetricBulkTagConfigDeleteRequest_1.MetricBulkTagConfigDeleteRequest,
    MetricBulkTagConfigResponse: MetricBulkTagConfigResponse_1.MetricBulkTagConfigResponse,
    MetricBulkTagConfigStatus: MetricBulkTagConfigStatus_1.MetricBulkTagConfigStatus,
    MetricBulkTagConfigStatusAttributes: MetricBulkTagConfigStatusAttributes_1.MetricBulkTagConfigStatusAttributes,
    MetricCustomAggregation: MetricCustomAggregation_1.MetricCustomAggregation,
    MetricDashboardAsset: MetricDashboardAsset_1.MetricDashboardAsset,
    MetricDashboardAttributes: MetricDashboardAttributes_1.MetricDashboardAttributes,
    MetricDistinctVolume: MetricDistinctVolume_1.MetricDistinctVolume,
    MetricDistinctVolumeAttributes: MetricDistinctVolumeAttributes_1.MetricDistinctVolumeAttributes,
    MetricEstimate: MetricEstimate_1.MetricEstimate,
    MetricEstimateAttributes: MetricEstimateAttributes_1.MetricEstimateAttributes,
    MetricEstimateResponse: MetricEstimateResponse_1.MetricEstimateResponse,
    MetricIngestedIndexedVolume: MetricIngestedIndexedVolume_1.MetricIngestedIndexedVolume,
    MetricIngestedIndexedVolumeAttributes: MetricIngestedIndexedVolumeAttributes_1.MetricIngestedIndexedVolumeAttributes,
    MetricMetaPage: MetricMetaPage_1.MetricMetaPage,
    MetricMetadata: MetricMetadata_1.MetricMetadata,
    MetricMonitorAsset: MetricMonitorAsset_1.MetricMonitorAsset,
    MetricNotebookAsset: MetricNotebookAsset_1.MetricNotebookAsset,
    MetricOrigin: MetricOrigin_1.MetricOrigin,
    MetricPaginationMeta: MetricPaginationMeta_1.MetricPaginationMeta,
    MetricPayload: MetricPayload_1.MetricPayload,
    MetricPoint: MetricPoint_1.MetricPoint,
    MetricResource: MetricResource_1.MetricResource,
    MetricSLOAsset: MetricSLOAsset_1.MetricSLOAsset,
    MetricSeries: MetricSeries_1.MetricSeries,
    MetricSuggestedTagsAndAggregations: MetricSuggestedTagsAndAggregations_1.MetricSuggestedTagsAndAggregations,
    MetricSuggestedTagsAndAggregationsResponse: MetricSuggestedTagsAndAggregationsResponse_1.MetricSuggestedTagsAndAggregationsResponse,
    MetricSuggestedTagsAttributes: MetricSuggestedTagsAttributes_1.MetricSuggestedTagsAttributes,
    MetricTagCardinalitiesMeta: MetricTagCardinalitiesMeta_1.MetricTagCardinalitiesMeta,
    MetricTagCardinalitiesResponse: MetricTagCardinalitiesResponse_1.MetricTagCardinalitiesResponse,
    MetricTagCardinality: MetricTagCardinality_1.MetricTagCardinality,
    MetricTagCardinalityAttributes: MetricTagCardinalityAttributes_1.MetricTagCardinalityAttributes,
    MetricTagConfiguration: MetricTagConfiguration_1.MetricTagConfiguration,
    MetricTagConfigurationAttributes: MetricTagConfigurationAttributes_1.MetricTagConfigurationAttributes,
    MetricTagConfigurationCreateAttributes: MetricTagConfigurationCreateAttributes_1.MetricTagConfigurationCreateAttributes,
    MetricTagConfigurationCreateData: MetricTagConfigurationCreateData_1.MetricTagConfigurationCreateData,
    MetricTagConfigurationCreateRequest: MetricTagConfigurationCreateRequest_1.MetricTagConfigurationCreateRequest,
    MetricTagConfigurationResponse: MetricTagConfigurationResponse_1.MetricTagConfigurationResponse,
    MetricTagConfigurationUpdateAttributes: MetricTagConfigurationUpdateAttributes_1.MetricTagConfigurationUpdateAttributes,
    MetricTagConfigurationUpdateData: MetricTagConfigurationUpdateData_1.MetricTagConfigurationUpdateData,
    MetricTagConfigurationUpdateRequest: MetricTagConfigurationUpdateRequest_1.MetricTagConfigurationUpdateRequest,
    MetricVolumesResponse: MetricVolumesResponse_1.MetricVolumesResponse,
    MetricsAndMetricTagConfigurationsResponse: MetricsAndMetricTagConfigurationsResponse_1.MetricsAndMetricTagConfigurationsResponse,
    MetricsListResponseLinks: MetricsListResponseLinks_1.MetricsListResponseLinks,
    MetricsScalarQuery: MetricsScalarQuery_1.MetricsScalarQuery,
    MetricsTimeseriesQuery: MetricsTimeseriesQuery_1.MetricsTimeseriesQuery,
    MicrosoftSentinelDestination: MicrosoftSentinelDestination_1.MicrosoftSentinelDestination,
    MicrosoftTeamsChannelInfoResponseAttributes: MicrosoftTeamsChannelInfoResponseAttributes_1.MicrosoftTeamsChannelInfoResponseAttributes,
    MicrosoftTeamsChannelInfoResponseData: MicrosoftTeamsChannelInfoResponseData_1.MicrosoftTeamsChannelInfoResponseData,
    MicrosoftTeamsConfigurationReference: MicrosoftTeamsConfigurationReference_1.MicrosoftTeamsConfigurationReference,
    MicrosoftTeamsConfigurationReferenceData: MicrosoftTeamsConfigurationReferenceData_1.MicrosoftTeamsConfigurationReferenceData,
    MicrosoftTeamsCreateTenantBasedHandleRequest: MicrosoftTeamsCreateTenantBasedHandleRequest_1.MicrosoftTeamsCreateTenantBasedHandleRequest,
    MicrosoftTeamsCreateWorkflowsWebhookHandleRequest: MicrosoftTeamsCreateWorkflowsWebhookHandleRequest_1.MicrosoftTeamsCreateWorkflowsWebhookHandleRequest,
    MicrosoftTeamsGetChannelByNameResponse: MicrosoftTeamsGetChannelByNameResponse_1.MicrosoftTeamsGetChannelByNameResponse,
    MicrosoftTeamsTenantBasedHandleAttributes: MicrosoftTeamsTenantBasedHandleAttributes_1.MicrosoftTeamsTenantBasedHandleAttributes,
    MicrosoftTeamsTenantBasedHandleInfoResponseAttributes: MicrosoftTeamsTenantBasedHandleInfoResponseAttributes_1.MicrosoftTeamsTenantBasedHandleInfoResponseAttributes,
    MicrosoftTeamsTenantBasedHandleInfoResponseData: MicrosoftTeamsTenantBasedHandleInfoResponseData_1.MicrosoftTeamsTenantBasedHandleInfoResponseData,
    MicrosoftTeamsTenantBasedHandleRequestAttributes: MicrosoftTeamsTenantBasedHandleRequestAttributes_1.MicrosoftTeamsTenantBasedHandleRequestAttributes,
    MicrosoftTeamsTenantBasedHandleRequestData: MicrosoftTeamsTenantBasedHandleRequestData_1.MicrosoftTeamsTenantBasedHandleRequestData,
    MicrosoftTeamsTenantBasedHandleResponse: MicrosoftTeamsTenantBasedHandleResponse_1.MicrosoftTeamsTenantBasedHandleResponse,
    MicrosoftTeamsTenantBasedHandleResponseData: MicrosoftTeamsTenantBasedHandleResponseData_1.MicrosoftTeamsTenantBasedHandleResponseData,
    MicrosoftTeamsTenantBasedHandlesResponse: MicrosoftTeamsTenantBasedHandlesResponse_1.MicrosoftTeamsTenantBasedHandlesResponse,
    MicrosoftTeamsUpdateTenantBasedHandleRequest: MicrosoftTeamsUpdateTenantBasedHandleRequest_1.MicrosoftTeamsUpdateTenantBasedHandleRequest,
    MicrosoftTeamsUpdateTenantBasedHandleRequestData: MicrosoftTeamsUpdateTenantBasedHandleRequestData_1.MicrosoftTeamsUpdateTenantBasedHandleRequestData,
    MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest: MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest_1.MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest,
    MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData: MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData_1.MicrosoftTeamsUpdateWorkflowsWebhookHandleRequestData,
    MicrosoftTeamsWorkflowsWebhookHandleAttributes: MicrosoftTeamsWorkflowsWebhookHandleAttributes_1.MicrosoftTeamsWorkflowsWebhookHandleAttributes,
    MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes: MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes_1.MicrosoftTeamsWorkflowsWebhookHandleRequestAttributes,
    MicrosoftTeamsWorkflowsWebhookHandleRequestData: MicrosoftTeamsWorkflowsWebhookHandleRequestData_1.MicrosoftTeamsWorkflowsWebhookHandleRequestData,
    MicrosoftTeamsWorkflowsWebhookHandleResponse: MicrosoftTeamsWorkflowsWebhookHandleResponse_1.MicrosoftTeamsWorkflowsWebhookHandleResponse,
    MicrosoftTeamsWorkflowsWebhookHandleResponseData: MicrosoftTeamsWorkflowsWebhookHandleResponseData_1.MicrosoftTeamsWorkflowsWebhookHandleResponseData,
    MicrosoftTeamsWorkflowsWebhookHandlesResponse: MicrosoftTeamsWorkflowsWebhookHandlesResponse_1.MicrosoftTeamsWorkflowsWebhookHandlesResponse,
    MicrosoftTeamsWorkflowsWebhookResponseAttributes: MicrosoftTeamsWorkflowsWebhookResponseAttributes_1.MicrosoftTeamsWorkflowsWebhookResponseAttributes,
    MonitorConfigPolicyAttributeCreateRequest: MonitorConfigPolicyAttributeCreateRequest_1.MonitorConfigPolicyAttributeCreateRequest,
    MonitorConfigPolicyAttributeEditRequest: MonitorConfigPolicyAttributeEditRequest_1.MonitorConfigPolicyAttributeEditRequest,
    MonitorConfigPolicyAttributeResponse: MonitorConfigPolicyAttributeResponse_1.MonitorConfigPolicyAttributeResponse,
    MonitorConfigPolicyCreateData: MonitorConfigPolicyCreateData_1.MonitorConfigPolicyCreateData,
    MonitorConfigPolicyCreateRequest: MonitorConfigPolicyCreateRequest_1.MonitorConfigPolicyCreateRequest,
    MonitorConfigPolicyEditData: MonitorConfigPolicyEditData_1.MonitorConfigPolicyEditData,
    MonitorConfigPolicyEditRequest: MonitorConfigPolicyEditRequest_1.MonitorConfigPolicyEditRequest,
    MonitorConfigPolicyListResponse: MonitorConfigPolicyListResponse_1.MonitorConfigPolicyListResponse,
    MonitorConfigPolicyResponse: MonitorConfigPolicyResponse_1.MonitorConfigPolicyResponse,
    MonitorConfigPolicyResponseData: MonitorConfigPolicyResponseData_1.MonitorConfigPolicyResponseData,
    MonitorConfigPolicyTagPolicy: MonitorConfigPolicyTagPolicy_1.MonitorConfigPolicyTagPolicy,
    MonitorConfigPolicyTagPolicyCreateRequest: MonitorConfigPolicyTagPolicyCreateRequest_1.MonitorConfigPolicyTagPolicyCreateRequest,
    MonitorDowntimeMatchResponse: MonitorDowntimeMatchResponse_1.MonitorDowntimeMatchResponse,
    MonitorDowntimeMatchResponseAttributes: MonitorDowntimeMatchResponseAttributes_1.MonitorDowntimeMatchResponseAttributes,
    MonitorDowntimeMatchResponseData: MonitorDowntimeMatchResponseData_1.MonitorDowntimeMatchResponseData,
    MonitorNotificationRuleAttributes: MonitorNotificationRuleAttributes_1.MonitorNotificationRuleAttributes,
    MonitorNotificationRuleCondition: MonitorNotificationRuleCondition_1.MonitorNotificationRuleCondition,
    MonitorNotificationRuleConditionalRecipients: MonitorNotificationRuleConditionalRecipients_1.MonitorNotificationRuleConditionalRecipients,
    MonitorNotificationRuleCreateRequest: MonitorNotificationRuleCreateRequest_1.MonitorNotificationRuleCreateRequest,
    MonitorNotificationRuleCreateRequestData: MonitorNotificationRuleCreateRequestData_1.MonitorNotificationRuleCreateRequestData,
    MonitorNotificationRuleData: MonitorNotificationRuleData_1.MonitorNotificationRuleData,
    MonitorNotificationRuleFilterScope: MonitorNotificationRuleFilterScope_1.MonitorNotificationRuleFilterScope,
    MonitorNotificationRuleFilterTags: MonitorNotificationRuleFilterTags_1.MonitorNotificationRuleFilterTags,
    MonitorNotificationRuleListResponse: MonitorNotificationRuleListResponse_1.MonitorNotificationRuleListResponse,
    MonitorNotificationRuleRelationships: MonitorNotificationRuleRelationships_1.MonitorNotificationRuleRelationships,
    MonitorNotificationRuleRelationshipsCreatedBy: MonitorNotificationRuleRelationshipsCreatedBy_1.MonitorNotificationRuleRelationshipsCreatedBy,
    MonitorNotificationRuleRelationshipsCreatedByData: MonitorNotificationRuleRelationshipsCreatedByData_1.MonitorNotificationRuleRelationshipsCreatedByData,
    MonitorNotificationRuleResponse: MonitorNotificationRuleResponse_1.MonitorNotificationRuleResponse,
    MonitorNotificationRuleResponseAttributes: MonitorNotificationRuleResponseAttributes_1.MonitorNotificationRuleResponseAttributes,
    MonitorNotificationRuleUpdateRequest: MonitorNotificationRuleUpdateRequest_1.MonitorNotificationRuleUpdateRequest,
    MonitorNotificationRuleUpdateRequestData: MonitorNotificationRuleUpdateRequestData_1.MonitorNotificationRuleUpdateRequestData,
    MonitorTrigger: MonitorTrigger_1.MonitorTrigger,
    MonitorTriggerWrapper: MonitorTriggerWrapper_1.MonitorTriggerWrapper,
    MonitorType: MonitorType_1.MonitorType,
    MonitorUserTemplate: MonitorUserTemplate_1.MonitorUserTemplate,
    MonitorUserTemplateCreateData: MonitorUserTemplateCreateData_1.MonitorUserTemplateCreateData,
    MonitorUserTemplateCreateRequest: MonitorUserTemplateCreateRequest_1.MonitorUserTemplateCreateRequest,
    MonitorUserTemplateCreateResponse: MonitorUserTemplateCreateResponse_1.MonitorUserTemplateCreateResponse,
    MonitorUserTemplateListResponse: MonitorUserTemplateListResponse_1.MonitorUserTemplateListResponse,
    MonitorUserTemplateRequestAttributes: MonitorUserTemplateRequestAttributes_1.MonitorUserTemplateRequestAttributes,
    MonitorUserTemplateResponse: MonitorUserTemplateResponse_1.MonitorUserTemplateResponse,
    MonitorUserTemplateResponseAttributes: MonitorUserTemplateResponseAttributes_1.MonitorUserTemplateResponseAttributes,
    MonitorUserTemplateResponseData: MonitorUserTemplateResponseData_1.MonitorUserTemplateResponseData,
    MonitorUserTemplateResponseDataWithVersions: MonitorUserTemplateResponseDataWithVersions_1.MonitorUserTemplateResponseDataWithVersions,
    MonitorUserTemplateTemplateVariablesItems: MonitorUserTemplateTemplateVariablesItems_1.MonitorUserTemplateTemplateVariablesItems,
    MonitorUserTemplateUpdateData: MonitorUserTemplateUpdateData_1.MonitorUserTemplateUpdateData,
    MonitorUserTemplateUpdateRequest: MonitorUserTemplateUpdateRequest_1.MonitorUserTemplateUpdateRequest,
    MonthlyCostAttributionAttributes: MonthlyCostAttributionAttributes_1.MonthlyCostAttributionAttributes,
    MonthlyCostAttributionBody: MonthlyCostAttributionBody_1.MonthlyCostAttributionBody,
    MonthlyCostAttributionMeta: MonthlyCostAttributionMeta_1.MonthlyCostAttributionMeta,
    MonthlyCostAttributionPagination: MonthlyCostAttributionPagination_1.MonthlyCostAttributionPagination,
    MonthlyCostAttributionResponse: MonthlyCostAttributionResponse_1.MonthlyCostAttributionResponse,
    NotebookCreateData: NotebookCreateData_1.NotebookCreateData,
    NotebookCreateRequest: NotebookCreateRequest_1.NotebookCreateRequest,
    NotebookTriggerWrapper: NotebookTriggerWrapper_1.NotebookTriggerWrapper,
    NotificationChannel: NotificationChannel_1.NotificationChannel,
    NotificationChannelAttributes: NotificationChannelAttributes_1.NotificationChannelAttributes,
    NotificationChannelData: NotificationChannelData_1.NotificationChannelData,
    NotificationChannelEmailConfig: NotificationChannelEmailConfig_1.NotificationChannelEmailConfig,
    NotificationChannelPhoneConfig: NotificationChannelPhoneConfig_1.NotificationChannelPhoneConfig,
    NotificationChannelPushConfig: NotificationChannelPushConfig_1.NotificationChannelPushConfig,
    NotificationRule: NotificationRule_1.NotificationRule,
    NotificationRuleAttributes: NotificationRuleAttributes_1.NotificationRuleAttributes,
    NotificationRuleResponse: NotificationRuleResponse_1.NotificationRuleResponse,
    NotificationRulesList: NotificationRulesList_1.NotificationRulesList,
    NotionAPIKey: NotionAPIKey_1.NotionAPIKey,
    NotionAPIKeyUpdate: NotionAPIKeyUpdate_1.NotionAPIKeyUpdate,
    NotionIntegration: NotionIntegration_1.NotionIntegration,
    NotionIntegrationUpdate: NotionIntegrationUpdate_1.NotionIntegrationUpdate,
    NullableRelationshipToUser: NullableRelationshipToUser_1.NullableRelationshipToUser,
    NullableRelationshipToUserData: NullableRelationshipToUserData_1.NullableRelationshipToUserData,
    NullableUserRelationship: NullableUserRelationship_1.NullableUserRelationship,
    NullableUserRelationshipData: NullableUserRelationshipData_1.NullableUserRelationshipData,
    ObservabilityPipeline: ObservabilityPipeline_1.ObservabilityPipeline,
    ObservabilityPipelineAddEnvVarsProcessor: ObservabilityPipelineAddEnvVarsProcessor_1.ObservabilityPipelineAddEnvVarsProcessor,
    ObservabilityPipelineAddEnvVarsProcessorVariable: ObservabilityPipelineAddEnvVarsProcessorVariable_1.ObservabilityPipelineAddEnvVarsProcessorVariable,
    ObservabilityPipelineAddFieldsProcessor: ObservabilityPipelineAddFieldsProcessor_1.ObservabilityPipelineAddFieldsProcessor,
    ObservabilityPipelineAddHostnameProcessor: ObservabilityPipelineAddHostnameProcessor_1.ObservabilityPipelineAddHostnameProcessor,
    ObservabilityPipelineAmazonDataFirehoseSource: ObservabilityPipelineAmazonDataFirehoseSource_1.ObservabilityPipelineAmazonDataFirehoseSource,
    ObservabilityPipelineAmazonOpenSearchDestination: ObservabilityPipelineAmazonOpenSearchDestination_1.ObservabilityPipelineAmazonOpenSearchDestination,
    ObservabilityPipelineAmazonOpenSearchDestinationAuth: ObservabilityPipelineAmazonOpenSearchDestinationAuth_1.ObservabilityPipelineAmazonOpenSearchDestinationAuth,
    ObservabilityPipelineAmazonS3Destination: ObservabilityPipelineAmazonS3Destination_1.ObservabilityPipelineAmazonS3Destination,
    ObservabilityPipelineAmazonS3Source: ObservabilityPipelineAmazonS3Source_1.ObservabilityPipelineAmazonS3Source,
    ObservabilityPipelineAmazonSecurityLakeDestination: ObservabilityPipelineAmazonSecurityLakeDestination_1.ObservabilityPipelineAmazonSecurityLakeDestination,
    ObservabilityPipelineAwsAuth: ObservabilityPipelineAwsAuth_1.ObservabilityPipelineAwsAuth,
    ObservabilityPipelineCloudPremDestination: ObservabilityPipelineCloudPremDestination_1.ObservabilityPipelineCloudPremDestination,
    ObservabilityPipelineConfig: ObservabilityPipelineConfig_1.ObservabilityPipelineConfig,
    ObservabilityPipelineConfigProcessorGroup: ObservabilityPipelineConfigProcessorGroup_1.ObservabilityPipelineConfigProcessorGroup,
    ObservabilityPipelineCrowdStrikeNextGenSiemDestination: ObservabilityPipelineCrowdStrikeNextGenSiemDestination_1.ObservabilityPipelineCrowdStrikeNextGenSiemDestination,
    ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompression: ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompression_1.ObservabilityPipelineCrowdStrikeNextGenSiemDestinationCompression,
    ObservabilityPipelineCustomProcessor: ObservabilityPipelineCustomProcessor_1.ObservabilityPipelineCustomProcessor,
    ObservabilityPipelineCustomProcessorRemap: ObservabilityPipelineCustomProcessorRemap_1.ObservabilityPipelineCustomProcessorRemap,
    ObservabilityPipelineData: ObservabilityPipelineData_1.ObservabilityPipelineData,
    ObservabilityPipelineDataAttributes: ObservabilityPipelineDataAttributes_1.ObservabilityPipelineDataAttributes,
    ObservabilityPipelineDatadogAgentSource: ObservabilityPipelineDatadogAgentSource_1.ObservabilityPipelineDatadogAgentSource,
    ObservabilityPipelineDatadogLogsDestination: ObservabilityPipelineDatadogLogsDestination_1.ObservabilityPipelineDatadogLogsDestination,
    ObservabilityPipelineDatadogLogsDestinationRoute: ObservabilityPipelineDatadogLogsDestinationRoute_1.ObservabilityPipelineDatadogLogsDestinationRoute,
    ObservabilityPipelineDatadogMetricsDestination: ObservabilityPipelineDatadogMetricsDestination_1.ObservabilityPipelineDatadogMetricsDestination,
    ObservabilityPipelineDatadogTagsProcessor: ObservabilityPipelineDatadogTagsProcessor_1.ObservabilityPipelineDatadogTagsProcessor,
    ObservabilityPipelineDedupeProcessor: ObservabilityPipelineDedupeProcessor_1.ObservabilityPipelineDedupeProcessor,
    ObservabilityPipelineDedupeProcessorCache: ObservabilityPipelineDedupeProcessorCache_1.ObservabilityPipelineDedupeProcessorCache,
    ObservabilityPipelineDiskBufferOptions: ObservabilityPipelineDiskBufferOptions_1.ObservabilityPipelineDiskBufferOptions,
    ObservabilityPipelineElasticsearchDestination: ObservabilityPipelineElasticsearchDestination_1.ObservabilityPipelineElasticsearchDestination,
    ObservabilityPipelineElasticsearchDestinationAuth: ObservabilityPipelineElasticsearchDestinationAuth_1.ObservabilityPipelineElasticsearchDestinationAuth,
    ObservabilityPipelineElasticsearchDestinationDataStream: ObservabilityPipelineElasticsearchDestinationDataStream_1.ObservabilityPipelineElasticsearchDestinationDataStream,
    ObservabilityPipelineEnrichmentTableFile: ObservabilityPipelineEnrichmentTableFile_1.ObservabilityPipelineEnrichmentTableFile,
    ObservabilityPipelineEnrichmentTableFileEncoding: ObservabilityPipelineEnrichmentTableFileEncoding_1.ObservabilityPipelineEnrichmentTableFileEncoding,
    ObservabilityPipelineEnrichmentTableFileKeyItems: ObservabilityPipelineEnrichmentTableFileKeyItems_1.ObservabilityPipelineEnrichmentTableFileKeyItems,
    ObservabilityPipelineEnrichmentTableFileSchemaItems: ObservabilityPipelineEnrichmentTableFileSchemaItems_1.ObservabilityPipelineEnrichmentTableFileSchemaItems,
    ObservabilityPipelineEnrichmentTableGeoIp: ObservabilityPipelineEnrichmentTableGeoIp_1.ObservabilityPipelineEnrichmentTableGeoIp,
    ObservabilityPipelineEnrichmentTableProcessor: ObservabilityPipelineEnrichmentTableProcessor_1.ObservabilityPipelineEnrichmentTableProcessor,
    ObservabilityPipelineEnrichmentTableReferenceTable: ObservabilityPipelineEnrichmentTableReferenceTable_1.ObservabilityPipelineEnrichmentTableReferenceTable,
    ObservabilityPipelineFieldValue: ObservabilityPipelineFieldValue_1.ObservabilityPipelineFieldValue,
    ObservabilityPipelineFilterProcessor: ObservabilityPipelineFilterProcessor_1.ObservabilityPipelineFilterProcessor,
    ObservabilityPipelineFluentBitSource: ObservabilityPipelineFluentBitSource_1.ObservabilityPipelineFluentBitSource,
    ObservabilityPipelineFluentdSource: ObservabilityPipelineFluentdSource_1.ObservabilityPipelineFluentdSource,
    ObservabilityPipelineGcpAuth: ObservabilityPipelineGcpAuth_1.ObservabilityPipelineGcpAuth,
    ObservabilityPipelineGenerateMetricsProcessor: ObservabilityPipelineGenerateMetricsProcessor_1.ObservabilityPipelineGenerateMetricsProcessor,
    ObservabilityPipelineGeneratedMetric: ObservabilityPipelineGeneratedMetric_1.ObservabilityPipelineGeneratedMetric,
    ObservabilityPipelineGeneratedMetricIncrementByField: ObservabilityPipelineGeneratedMetricIncrementByField_1.ObservabilityPipelineGeneratedMetricIncrementByField,
    ObservabilityPipelineGeneratedMetricIncrementByOne: ObservabilityPipelineGeneratedMetricIncrementByOne_1.ObservabilityPipelineGeneratedMetricIncrementByOne,
    ObservabilityPipelineGoogleChronicleDestination: ObservabilityPipelineGoogleChronicleDestination_1.ObservabilityPipelineGoogleChronicleDestination,
    ObservabilityPipelineGoogleCloudStorageDestination: ObservabilityPipelineGoogleCloudStorageDestination_1.ObservabilityPipelineGoogleCloudStorageDestination,
    ObservabilityPipelineGooglePubSubDestination: ObservabilityPipelineGooglePubSubDestination_1.ObservabilityPipelineGooglePubSubDestination,
    ObservabilityPipelineGooglePubSubSource: ObservabilityPipelineGooglePubSubSource_1.ObservabilityPipelineGooglePubSubSource,
    ObservabilityPipelineHttpClientDestination: ObservabilityPipelineHttpClientDestination_1.ObservabilityPipelineHttpClientDestination,
    ObservabilityPipelineHttpClientDestinationCompression: ObservabilityPipelineHttpClientDestinationCompression_1.ObservabilityPipelineHttpClientDestinationCompression,
    ObservabilityPipelineHttpClientSource: ObservabilityPipelineHttpClientSource_1.ObservabilityPipelineHttpClientSource,
    ObservabilityPipelineHttpServerSource: ObservabilityPipelineHttpServerSource_1.ObservabilityPipelineHttpServerSource,
    ObservabilityPipelineKafkaDestination: ObservabilityPipelineKafkaDestination_1.ObservabilityPipelineKafkaDestination,
    ObservabilityPipelineKafkaLibrdkafkaOption: ObservabilityPipelineKafkaLibrdkafkaOption_1.ObservabilityPipelineKafkaLibrdkafkaOption,
    ObservabilityPipelineKafkaSasl: ObservabilityPipelineKafkaSasl_1.ObservabilityPipelineKafkaSasl,
    ObservabilityPipelineKafkaSource: ObservabilityPipelineKafkaSource_1.ObservabilityPipelineKafkaSource,
    ObservabilityPipelineLogstashSource: ObservabilityPipelineLogstashSource_1.ObservabilityPipelineLogstashSource,
    ObservabilityPipelineMemoryBufferOptions: ObservabilityPipelineMemoryBufferOptions_1.ObservabilityPipelineMemoryBufferOptions,
    ObservabilityPipelineMemoryBufferSizeOptions: ObservabilityPipelineMemoryBufferSizeOptions_1.ObservabilityPipelineMemoryBufferSizeOptions,
    ObservabilityPipelineMetadataEntry: ObservabilityPipelineMetadataEntry_1.ObservabilityPipelineMetadataEntry,
    ObservabilityPipelineMetricTagsProcessor: ObservabilityPipelineMetricTagsProcessor_1.ObservabilityPipelineMetricTagsProcessor,
    ObservabilityPipelineMetricTagsProcessorRule: ObservabilityPipelineMetricTagsProcessorRule_1.ObservabilityPipelineMetricTagsProcessorRule,
    ObservabilityPipelineNewRelicDestination: ObservabilityPipelineNewRelicDestination_1.ObservabilityPipelineNewRelicDestination,
    ObservabilityPipelineOcsfMapperProcessor: ObservabilityPipelineOcsfMapperProcessor_1.ObservabilityPipelineOcsfMapperProcessor,
    ObservabilityPipelineOcsfMapperProcessorMapping: ObservabilityPipelineOcsfMapperProcessorMapping_1.ObservabilityPipelineOcsfMapperProcessorMapping,
    ObservabilityPipelineOcsfMappingCustom: ObservabilityPipelineOcsfMappingCustom_1.ObservabilityPipelineOcsfMappingCustom,
    ObservabilityPipelineOcsfMappingCustomFieldMapping: ObservabilityPipelineOcsfMappingCustomFieldMapping_1.ObservabilityPipelineOcsfMappingCustomFieldMapping,
    ObservabilityPipelineOcsfMappingCustomLookup: ObservabilityPipelineOcsfMappingCustomLookup_1.ObservabilityPipelineOcsfMappingCustomLookup,
    ObservabilityPipelineOcsfMappingCustomLookupTableEntry: ObservabilityPipelineOcsfMappingCustomLookupTableEntry_1.ObservabilityPipelineOcsfMappingCustomLookupTableEntry,
    ObservabilityPipelineOcsfMappingCustomMetadata: ObservabilityPipelineOcsfMappingCustomMetadata_1.ObservabilityPipelineOcsfMappingCustomMetadata,
    ObservabilityPipelineOpenSearchDestination: ObservabilityPipelineOpenSearchDestination_1.ObservabilityPipelineOpenSearchDestination,
    ObservabilityPipelineOpenSearchDestinationDataStream: ObservabilityPipelineOpenSearchDestinationDataStream_1.ObservabilityPipelineOpenSearchDestinationDataStream,
    ObservabilityPipelineOpentelemetrySource: ObservabilityPipelineOpentelemetrySource_1.ObservabilityPipelineOpentelemetrySource,
    ObservabilityPipelineParseGrokProcessor: ObservabilityPipelineParseGrokProcessor_1.ObservabilityPipelineParseGrokProcessor,
    ObservabilityPipelineParseGrokProcessorRule: ObservabilityPipelineParseGrokProcessorRule_1.ObservabilityPipelineParseGrokProcessorRule,
    ObservabilityPipelineParseGrokProcessorRuleMatchRule: ObservabilityPipelineParseGrokProcessorRuleMatchRule_1.ObservabilityPipelineParseGrokProcessorRuleMatchRule,
    ObservabilityPipelineParseGrokProcessorRuleSupportRule: ObservabilityPipelineParseGrokProcessorRuleSupportRule_1.ObservabilityPipelineParseGrokProcessorRuleSupportRule,
    ObservabilityPipelineParseJSONProcessor: ObservabilityPipelineParseJSONProcessor_1.ObservabilityPipelineParseJSONProcessor,
    ObservabilityPipelineParseXMLProcessor: ObservabilityPipelineParseXMLProcessor_1.ObservabilityPipelineParseXMLProcessor,
    ObservabilityPipelineQuotaProcessor: ObservabilityPipelineQuotaProcessor_1.ObservabilityPipelineQuotaProcessor,
    ObservabilityPipelineQuotaProcessorLimit: ObservabilityPipelineQuotaProcessorLimit_1.ObservabilityPipelineQuotaProcessorLimit,
    ObservabilityPipelineQuotaProcessorOverride: ObservabilityPipelineQuotaProcessorOverride_1.ObservabilityPipelineQuotaProcessorOverride,
    ObservabilityPipelineReduceProcessor: ObservabilityPipelineReduceProcessor_1.ObservabilityPipelineReduceProcessor,
    ObservabilityPipelineReduceProcessorMergeStrategy: ObservabilityPipelineReduceProcessorMergeStrategy_1.ObservabilityPipelineReduceProcessorMergeStrategy,
    ObservabilityPipelineRemoveFieldsProcessor: ObservabilityPipelineRemoveFieldsProcessor_1.ObservabilityPipelineRemoveFieldsProcessor,
    ObservabilityPipelineRenameFieldsProcessor: ObservabilityPipelineRenameFieldsProcessor_1.ObservabilityPipelineRenameFieldsProcessor,
    ObservabilityPipelineRenameFieldsProcessorField: ObservabilityPipelineRenameFieldsProcessorField_1.ObservabilityPipelineRenameFieldsProcessorField,
    ObservabilityPipelineRsyslogDestination: ObservabilityPipelineRsyslogDestination_1.ObservabilityPipelineRsyslogDestination,
    ObservabilityPipelineRsyslogSource: ObservabilityPipelineRsyslogSource_1.ObservabilityPipelineRsyslogSource,
    ObservabilityPipelineSampleProcessor: ObservabilityPipelineSampleProcessor_1.ObservabilityPipelineSampleProcessor,
    ObservabilityPipelineSensitiveDataScannerProcessor: ObservabilityPipelineSensitiveDataScannerProcessor_1.ObservabilityPipelineSensitiveDataScannerProcessor,
    ObservabilityPipelineSensitiveDataScannerProcessorActionHash: ObservabilityPipelineSensitiveDataScannerProcessorActionHash_1.ObservabilityPipelineSensitiveDataScannerProcessorActionHash,
    ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact: ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact_1.ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact,
    ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptions: ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptions_1.ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptions,
    ObservabilityPipelineSensitiveDataScannerProcessorActionRedact: ObservabilityPipelineSensitiveDataScannerProcessorActionRedact_1.ObservabilityPipelineSensitiveDataScannerProcessorActionRedact,
    ObservabilityPipelineSensitiveDataScannerProcessorActionRedactOptions: ObservabilityPipelineSensitiveDataScannerProcessorActionRedactOptions_1.ObservabilityPipelineSensitiveDataScannerProcessorActionRedactOptions,
    ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern: ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern_1.ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern,
    ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions: ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions_1.ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions,
    ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions: ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions_1.ObservabilityPipelineSensitiveDataScannerProcessorKeywordOptions,
    ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern: ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern_1.ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern,
    ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions: ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions_1.ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternOptions,
    ObservabilityPipelineSensitiveDataScannerProcessorRule: ObservabilityPipelineSensitiveDataScannerProcessorRule_1.ObservabilityPipelineSensitiveDataScannerProcessorRule,
    ObservabilityPipelineSensitiveDataScannerProcessorScopeAll: ObservabilityPipelineSensitiveDataScannerProcessorScopeAll_1.ObservabilityPipelineSensitiveDataScannerProcessorScopeAll,
    ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude: ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude_1.ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude,
    ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude: ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude_1.ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude,
    ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions: ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions_1.ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions,
    ObservabilityPipelineSentinelOneDestination: ObservabilityPipelineSentinelOneDestination_1.ObservabilityPipelineSentinelOneDestination,
    ObservabilityPipelineSocketDestination: ObservabilityPipelineSocketDestination_1.ObservabilityPipelineSocketDestination,
    ObservabilityPipelineSocketDestinationFramingBytes: ObservabilityPipelineSocketDestinationFramingBytes_1.ObservabilityPipelineSocketDestinationFramingBytes,
    ObservabilityPipelineSocketDestinationFramingCharacterDelimited: ObservabilityPipelineSocketDestinationFramingCharacterDelimited_1.ObservabilityPipelineSocketDestinationFramingCharacterDelimited,
    ObservabilityPipelineSocketDestinationFramingNewlineDelimited: ObservabilityPipelineSocketDestinationFramingNewlineDelimited_1.ObservabilityPipelineSocketDestinationFramingNewlineDelimited,
    ObservabilityPipelineSocketSource: ObservabilityPipelineSocketSource_1.ObservabilityPipelineSocketSource,
    ObservabilityPipelineSocketSourceFramingBytes: ObservabilityPipelineSocketSourceFramingBytes_1.ObservabilityPipelineSocketSourceFramingBytes,
    ObservabilityPipelineSocketSourceFramingCharacterDelimited: ObservabilityPipelineSocketSourceFramingCharacterDelimited_1.ObservabilityPipelineSocketSourceFramingCharacterDelimited,
    ObservabilityPipelineSocketSourceFramingChunkedGelf: ObservabilityPipelineSocketSourceFramingChunkedGelf_1.ObservabilityPipelineSocketSourceFramingChunkedGelf,
    ObservabilityPipelineSocketSourceFramingNewlineDelimited: ObservabilityPipelineSocketSourceFramingNewlineDelimited_1.ObservabilityPipelineSocketSourceFramingNewlineDelimited,
    ObservabilityPipelineSocketSourceFramingOctetCounting: ObservabilityPipelineSocketSourceFramingOctetCounting_1.ObservabilityPipelineSocketSourceFramingOctetCounting,
    ObservabilityPipelineSpec: ObservabilityPipelineSpec_1.ObservabilityPipelineSpec,
    ObservabilityPipelineSpecData: ObservabilityPipelineSpecData_1.ObservabilityPipelineSpecData,
    ObservabilityPipelineSplitArrayProcessor: ObservabilityPipelineSplitArrayProcessor_1.ObservabilityPipelineSplitArrayProcessor,
    ObservabilityPipelineSplitArrayProcessorArrayConfig: ObservabilityPipelineSplitArrayProcessorArrayConfig_1.ObservabilityPipelineSplitArrayProcessorArrayConfig,
    ObservabilityPipelineSplunkHecDestination: ObservabilityPipelineSplunkHecDestination_1.ObservabilityPipelineSplunkHecDestination,
    ObservabilityPipelineSplunkHecSource: ObservabilityPipelineSplunkHecSource_1.ObservabilityPipelineSplunkHecSource,
    ObservabilityPipelineSplunkTcpSource: ObservabilityPipelineSplunkTcpSource_1.ObservabilityPipelineSplunkTcpSource,
    ObservabilityPipelineSumoLogicDestination: ObservabilityPipelineSumoLogicDestination_1.ObservabilityPipelineSumoLogicDestination,
    ObservabilityPipelineSumoLogicDestinationHeaderCustomFieldsItem: ObservabilityPipelineSumoLogicDestinationHeaderCustomFieldsItem_1.ObservabilityPipelineSumoLogicDestinationHeaderCustomFieldsItem,
    ObservabilityPipelineSumoLogicSource: ObservabilityPipelineSumoLogicSource_1.ObservabilityPipelineSumoLogicSource,
    ObservabilityPipelineSyslogNgDestination: ObservabilityPipelineSyslogNgDestination_1.ObservabilityPipelineSyslogNgDestination,
    ObservabilityPipelineSyslogNgSource: ObservabilityPipelineSyslogNgSource_1.ObservabilityPipelineSyslogNgSource,
    ObservabilityPipelineThrottleProcessor: ObservabilityPipelineThrottleProcessor_1.ObservabilityPipelineThrottleProcessor,
    ObservabilityPipelineTls: ObservabilityPipelineTls_1.ObservabilityPipelineTls,
    OktaAPIToken: OktaAPIToken_1.OktaAPIToken,
    OktaAPITokenUpdate: OktaAPITokenUpdate_1.OktaAPITokenUpdate,
    OktaAccount: OktaAccount_1.OktaAccount,
    OktaAccountAttributes: OktaAccountAttributes_1.OktaAccountAttributes,
    OktaAccountRequest: OktaAccountRequest_1.OktaAccountRequest,
    OktaAccountResponse: OktaAccountResponse_1.OktaAccountResponse,
    OktaAccountResponseData: OktaAccountResponseData_1.OktaAccountResponseData,
    OktaAccountUpdateRequest: OktaAccountUpdateRequest_1.OktaAccountUpdateRequest,
    OktaAccountUpdateRequestAttributes: OktaAccountUpdateRequestAttributes_1.OktaAccountUpdateRequestAttributes,
    OktaAccountUpdateRequestData: OktaAccountUpdateRequestData_1.OktaAccountUpdateRequestData,
    OktaAccountsResponse: OktaAccountsResponse_1.OktaAccountsResponse,
    OktaIntegration: OktaIntegration_1.OktaIntegration,
    OktaIntegrationUpdate: OktaIntegrationUpdate_1.OktaIntegrationUpdate,
    OnCallNotificationRule: OnCallNotificationRule_1.OnCallNotificationRule,
    OnCallNotificationRuleAttributes: OnCallNotificationRuleAttributes_1.OnCallNotificationRuleAttributes,
    OnCallNotificationRuleChannelRelationship: OnCallNotificationRuleChannelRelationship_1.OnCallNotificationRuleChannelRelationship,
    OnCallNotificationRuleChannelRelationshipData: OnCallNotificationRuleChannelRelationshipData_1.OnCallNotificationRuleChannelRelationshipData,
    OnCallNotificationRuleData: OnCallNotificationRuleData_1.OnCallNotificationRuleData,
    OnCallNotificationRuleRelationships: OnCallNotificationRuleRelationships_1.OnCallNotificationRuleRelationships,
    OnCallNotificationRuleRequestAttributes: OnCallNotificationRuleRequestAttributes_1.OnCallNotificationRuleRequestAttributes,
    OnCallPhoneNotificationRuleSettings: OnCallPhoneNotificationRuleSettings_1.OnCallPhoneNotificationRuleSettings,
    OnCallTrigger: OnCallTrigger_1.OnCallTrigger,
    OnCallTriggerWrapper: OnCallTriggerWrapper_1.OnCallTriggerWrapper,
    OnDemandConcurrencyCap: OnDemandConcurrencyCap_1.OnDemandConcurrencyCap,
    OnDemandConcurrencyCapAttributes: OnDemandConcurrencyCapAttributes_1.OnDemandConcurrencyCapAttributes,
    OnDemandConcurrencyCapResponse: OnDemandConcurrencyCapResponse_1.OnDemandConcurrencyCapResponse,
    OpenAIAPIKey: OpenAIAPIKey_1.OpenAIAPIKey,
    OpenAIAPIKeyUpdate: OpenAIAPIKeyUpdate_1.OpenAIAPIKeyUpdate,
    OpenAIIntegration: OpenAIIntegration_1.OpenAIIntegration,
    OpenAIIntegrationUpdate: OpenAIIntegrationUpdate_1.OpenAIIntegrationUpdate,
    OpenAPIEndpoint: OpenAPIEndpoint_1.OpenAPIEndpoint,
    OpsgenieServiceCreateAttributes: OpsgenieServiceCreateAttributes_1.OpsgenieServiceCreateAttributes,
    OpsgenieServiceCreateData: OpsgenieServiceCreateData_1.OpsgenieServiceCreateData,
    OpsgenieServiceCreateRequest: OpsgenieServiceCreateRequest_1.OpsgenieServiceCreateRequest,
    OpsgenieServiceResponse: OpsgenieServiceResponse_1.OpsgenieServiceResponse,
    OpsgenieServiceResponseAttributes: OpsgenieServiceResponseAttributes_1.OpsgenieServiceResponseAttributes,
    OpsgenieServiceResponseData: OpsgenieServiceResponseData_1.OpsgenieServiceResponseData,
    OpsgenieServiceUpdateAttributes: OpsgenieServiceUpdateAttributes_1.OpsgenieServiceUpdateAttributes,
    OpsgenieServiceUpdateData: OpsgenieServiceUpdateData_1.OpsgenieServiceUpdateData,
    OpsgenieServiceUpdateRequest: OpsgenieServiceUpdateRequest_1.OpsgenieServiceUpdateRequest,
    OpsgenieServicesResponse: OpsgenieServicesResponse_1.OpsgenieServicesResponse,
    OrgConfigGetResponse: OrgConfigGetResponse_1.OrgConfigGetResponse,
    OrgConfigListResponse: OrgConfigListResponse_1.OrgConfigListResponse,
    OrgConfigRead: OrgConfigRead_1.OrgConfigRead,
    OrgConfigReadAttributes: OrgConfigReadAttributes_1.OrgConfigReadAttributes,
    OrgConfigWrite: OrgConfigWrite_1.OrgConfigWrite,
    OrgConfigWriteAttributes: OrgConfigWriteAttributes_1.OrgConfigWriteAttributes,
    OrgConfigWriteRequest: OrgConfigWriteRequest_1.OrgConfigWriteRequest,
    OrgConnection: OrgConnection_1.OrgConnection,
    OrgConnectionAttributes: OrgConnectionAttributes_1.OrgConnectionAttributes,
    OrgConnectionCreate: OrgConnectionCreate_1.OrgConnectionCreate,
    OrgConnectionCreateAttributes: OrgConnectionCreateAttributes_1.OrgConnectionCreateAttributes,
    OrgConnectionCreateRelationships: OrgConnectionCreateRelationships_1.OrgConnectionCreateRelationships,
    OrgConnectionCreateRequest: OrgConnectionCreateRequest_1.OrgConnectionCreateRequest,
    OrgConnectionListResponse: OrgConnectionListResponse_1.OrgConnectionListResponse,
    OrgConnectionListResponseMeta: OrgConnectionListResponseMeta_1.OrgConnectionListResponseMeta,
    OrgConnectionListResponseMetaPage: OrgConnectionListResponseMetaPage_1.OrgConnectionListResponseMetaPage,
    OrgConnectionOrgRelationship: OrgConnectionOrgRelationship_1.OrgConnectionOrgRelationship,
    OrgConnectionOrgRelationshipData: OrgConnectionOrgRelationshipData_1.OrgConnectionOrgRelationshipData,
    OrgConnectionRelationships: OrgConnectionRelationships_1.OrgConnectionRelationships,
    OrgConnectionResponse: OrgConnectionResponse_1.OrgConnectionResponse,
    OrgConnectionUpdate: OrgConnectionUpdate_1.OrgConnectionUpdate,
    OrgConnectionUpdateAttributes: OrgConnectionUpdateAttributes_1.OrgConnectionUpdateAttributes,
    OrgConnectionUpdateRequest: OrgConnectionUpdateRequest_1.OrgConnectionUpdateRequest,
    OrgConnectionUserRelationship: OrgConnectionUserRelationship_1.OrgConnectionUserRelationship,
    OrgConnectionUserRelationshipData: OrgConnectionUserRelationshipData_1.OrgConnectionUserRelationshipData,
    Organization: Organization_1.Organization,
    OrganizationAttributes: OrganizationAttributes_1.OrganizationAttributes,
    OutboundEdge: OutboundEdge_1.OutboundEdge,
    OutcomesBatchAttributes: OutcomesBatchAttributes_1.OutcomesBatchAttributes,
    OutcomesBatchRequest: OutcomesBatchRequest_1.OutcomesBatchRequest,
    OutcomesBatchRequestData: OutcomesBatchRequestData_1.OutcomesBatchRequestData,
    OutcomesBatchRequestItem: OutcomesBatchRequestItem_1.OutcomesBatchRequestItem,
    OutcomesBatchResponse: OutcomesBatchResponse_1.OutcomesBatchResponse,
    OutcomesBatchResponseAttributes: OutcomesBatchResponseAttributes_1.OutcomesBatchResponseAttributes,
    OutcomesBatchResponseMeta: OutcomesBatchResponseMeta_1.OutcomesBatchResponseMeta,
    OutcomesResponse: OutcomesResponse_1.OutcomesResponse,
    OutcomesResponseDataItem: OutcomesResponseDataItem_1.OutcomesResponseDataItem,
    OutcomesResponseIncludedItem: OutcomesResponseIncludedItem_1.OutcomesResponseIncludedItem,
    OutcomesResponseIncludedRuleAttributes: OutcomesResponseIncludedRuleAttributes_1.OutcomesResponseIncludedRuleAttributes,
    OutcomesResponseLinks: OutcomesResponseLinks_1.OutcomesResponseLinks,
    OutputSchema: OutputSchema_1.OutputSchema,
    OutputSchemaParameters: OutputSchemaParameters_1.OutputSchemaParameters,
    Pagination: Pagination_1.Pagination,
    PaginationMeta: PaginationMeta_1.PaginationMeta,
    PaginationMetaPage: PaginationMetaPage_1.PaginationMetaPage,
    Parameter: Parameter_1.Parameter,
    PartialAPIKey: PartialAPIKey_1.PartialAPIKey,
    PartialAPIKeyAttributes: PartialAPIKeyAttributes_1.PartialAPIKeyAttributes,
    PartialApplicationKey: PartialApplicationKey_1.PartialApplicationKey,
    PartialApplicationKeyAttributes: PartialApplicationKeyAttributes_1.PartialApplicationKeyAttributes,
    PartialApplicationKeyResponse: PartialApplicationKeyResponse_1.PartialApplicationKeyResponse,
    PatchAttachmentRequest: PatchAttachmentRequest_1.PatchAttachmentRequest,
    PatchAttachmentRequestData: PatchAttachmentRequestData_1.PatchAttachmentRequestData,
    PatchAttachmentRequestDataAttributes: PatchAttachmentRequestDataAttributes_1.PatchAttachmentRequestDataAttributes,
    PatchAttachmentRequestDataAttributesAttachment: PatchAttachmentRequestDataAttributesAttachment_1.PatchAttachmentRequestDataAttributesAttachment,
    PatchComponentRequest: PatchComponentRequest_1.PatchComponentRequest,
    PatchComponentRequestData: PatchComponentRequestData_1.PatchComponentRequestData,
    PatchComponentRequestDataAttributes: PatchComponentRequestDataAttributes_1.PatchComponentRequestDataAttributes,
    PatchDegradationRequest: PatchDegradationRequest_1.PatchDegradationRequest,
    PatchDegradationRequestData: PatchDegradationRequestData_1.PatchDegradationRequestData,
    PatchDegradationRequestDataAttributes: PatchDegradationRequestDataAttributes_1.PatchDegradationRequestDataAttributes,
    PatchDegradationRequestDataAttributesComponentsAffectedItems: PatchDegradationRequestDataAttributesComponentsAffectedItems_1.PatchDegradationRequestDataAttributesComponentsAffectedItems,
    PatchIncidentNotificationTemplateRequest: PatchIncidentNotificationTemplateRequest_1.PatchIncidentNotificationTemplateRequest,
    PatchMaintenanceRequest: PatchMaintenanceRequest_1.PatchMaintenanceRequest,
    PatchMaintenanceRequestData: PatchMaintenanceRequestData_1.PatchMaintenanceRequestData,
    PatchMaintenanceRequestDataAttributes: PatchMaintenanceRequestDataAttributes_1.PatchMaintenanceRequestDataAttributes,
    PatchMaintenanceRequestDataAttributesComponentsAffectedItems: PatchMaintenanceRequestDataAttributesComponentsAffectedItems_1.PatchMaintenanceRequestDataAttributesComponentsAffectedItems,
    PatchNotificationRuleParameters: PatchNotificationRuleParameters_1.PatchNotificationRuleParameters,
    PatchNotificationRuleParametersData: PatchNotificationRuleParametersData_1.PatchNotificationRuleParametersData,
    PatchNotificationRuleParametersDataAttributes: PatchNotificationRuleParametersDataAttributes_1.PatchNotificationRuleParametersDataAttributes,
    PatchStatusPageRequest: PatchStatusPageRequest_1.PatchStatusPageRequest,
    PatchStatusPageRequestData: PatchStatusPageRequestData_1.PatchStatusPageRequestData,
    PatchStatusPageRequestDataAttributes: PatchStatusPageRequestDataAttributes_1.PatchStatusPageRequestDataAttributes,
    PatchTableRequest: PatchTableRequest_1.PatchTableRequest,
    PatchTableRequestData: PatchTableRequestData_1.PatchTableRequestData,
    PatchTableRequestDataAttributes: PatchTableRequestDataAttributes_1.PatchTableRequestDataAttributes,
    PatchTableRequestDataAttributesFileMetadataCloudStorage: PatchTableRequestDataAttributesFileMetadataCloudStorage_1.PatchTableRequestDataAttributesFileMetadataCloudStorage,
    PatchTableRequestDataAttributesFileMetadataLocalFile: PatchTableRequestDataAttributesFileMetadataLocalFile_1.PatchTableRequestDataAttributesFileMetadataLocalFile,
    PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails: PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails_1.PatchTableRequestDataAttributesFileMetadataOneOfAccessDetails,
    PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail: PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail_1.PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAwsDetail,
    PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail: PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail_1.PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail,
    PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail: PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail_1.PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsGcpDetail,
    PatchTableRequestDataAttributesSchema: PatchTableRequestDataAttributesSchema_1.PatchTableRequestDataAttributesSchema,
    PatchTableRequestDataAttributesSchemaFieldsItems: PatchTableRequestDataAttributesSchemaFieldsItems_1.PatchTableRequestDataAttributesSchemaFieldsItems,
    Permission: Permission_1.Permission,
    PermissionAttributes: PermissionAttributes_1.PermissionAttributes,
    PermissionsResponse: PermissionsResponse_1.PermissionsResponse,
    Playlist: Playlist_1.Playlist,
    PlaylistArray: PlaylistArray_1.PlaylistArray,
    PlaylistData: PlaylistData_1.PlaylistData,
    PlaylistDataAttributes: PlaylistDataAttributes_1.PlaylistDataAttributes,
    PlaylistDataAttributesCreatedBy: PlaylistDataAttributesCreatedBy_1.PlaylistDataAttributesCreatedBy,
    PlaylistsSession: PlaylistsSession_1.PlaylistsSession,
    PlaylistsSessionArray: PlaylistsSessionArray_1.PlaylistsSessionArray,
    PlaylistsSessionData: PlaylistsSessionData_1.PlaylistsSessionData,
    PlaylistsSessionDataAttributes: PlaylistsSessionDataAttributes_1.PlaylistsSessionDataAttributes,
    PostmortemAttachmentRequest: PostmortemAttachmentRequest_1.PostmortemAttachmentRequest,
    PostmortemAttachmentRequestAttributes: PostmortemAttachmentRequestAttributes_1.PostmortemAttachmentRequestAttributes,
    PostmortemAttachmentRequestData: PostmortemAttachmentRequestData_1.PostmortemAttachmentRequestData,
    PostmortemCell: PostmortemCell_1.PostmortemCell,
    PostmortemCellAttributes: PostmortemCellAttributes_1.PostmortemCellAttributes,
    PostmortemCellDefinition: PostmortemCellDefinition_1.PostmortemCellDefinition,
    PostmortemTemplateAttributesRequest: PostmortemTemplateAttributesRequest_1.PostmortemTemplateAttributesRequest,
    PostmortemTemplateAttributesResponse: PostmortemTemplateAttributesResponse_1.PostmortemTemplateAttributesResponse,
    PostmortemTemplateDataRequest: PostmortemTemplateDataRequest_1.PostmortemTemplateDataRequest,
    PostmortemTemplateDataResponse: PostmortemTemplateDataResponse_1.PostmortemTemplateDataResponse,
    PostmortemTemplateRequest: PostmortemTemplateRequest_1.PostmortemTemplateRequest,
    PostmortemTemplateResponse: PostmortemTemplateResponse_1.PostmortemTemplateResponse,
    PostmortemTemplatesResponse: PostmortemTemplatesResponse_1.PostmortemTemplatesResponse,
    Powerpack: Powerpack_1.Powerpack,
    PowerpackAttributes: PowerpackAttributes_1.PowerpackAttributes,
    PowerpackData: PowerpackData_1.PowerpackData,
    PowerpackGroupWidget: PowerpackGroupWidget_1.PowerpackGroupWidget,
    PowerpackGroupWidgetDefinition: PowerpackGroupWidgetDefinition_1.PowerpackGroupWidgetDefinition,
    PowerpackGroupWidgetLayout: PowerpackGroupWidgetLayout_1.PowerpackGroupWidgetLayout,
    PowerpackInnerWidgetLayout: PowerpackInnerWidgetLayout_1.PowerpackInnerWidgetLayout,
    PowerpackInnerWidgets: PowerpackInnerWidgets_1.PowerpackInnerWidgets,
    PowerpackRelationships: PowerpackRelationships_1.PowerpackRelationships,
    PowerpackResponse: PowerpackResponse_1.PowerpackResponse,
    PowerpackResponseLinks: PowerpackResponseLinks_1.PowerpackResponseLinks,
    PowerpackTemplateVariable: PowerpackTemplateVariable_1.PowerpackTemplateVariable,
    PowerpacksResponseMeta: PowerpacksResponseMeta_1.PowerpacksResponseMeta,
    PowerpacksResponseMetaPagination: PowerpacksResponseMetaPagination_1.PowerpacksResponseMetaPagination,
    PreviewEntityResponseData: PreviewEntityResponseData_1.PreviewEntityResponseData,
    ProcessSummariesMeta: ProcessSummariesMeta_1.ProcessSummariesMeta,
    ProcessSummariesMetaPage: ProcessSummariesMetaPage_1.ProcessSummariesMetaPage,
    ProcessSummariesResponse: ProcessSummariesResponse_1.ProcessSummariesResponse,
    ProcessSummary: ProcessSummary_1.ProcessSummary,
    ProcessSummaryAttributes: ProcessSummaryAttributes_1.ProcessSummaryAttributes,
    ProductAnalyticsAnalyticsQuery: ProductAnalyticsAnalyticsQuery_1.ProductAnalyticsAnalyticsQuery,
    ProductAnalyticsAnalyticsRequest: ProductAnalyticsAnalyticsRequest_1.ProductAnalyticsAnalyticsRequest,
    ProductAnalyticsAnalyticsRequestAttributes: ProductAnalyticsAnalyticsRequestAttributes_1.ProductAnalyticsAnalyticsRequestAttributes,
    ProductAnalyticsAnalyticsRequestData: ProductAnalyticsAnalyticsRequestData_1.ProductAnalyticsAnalyticsRequestData,
    ProductAnalyticsAudienceAccountSubquery: ProductAnalyticsAudienceAccountSubquery_1.ProductAnalyticsAudienceAccountSubquery,
    ProductAnalyticsAudienceFilters: ProductAnalyticsAudienceFilters_1.ProductAnalyticsAudienceFilters,
    ProductAnalyticsAudienceSegmentSubquery: ProductAnalyticsAudienceSegmentSubquery_1.ProductAnalyticsAudienceSegmentSubquery,
    ProductAnalyticsAudienceUserSubquery: ProductAnalyticsAudienceUserSubquery_1.ProductAnalyticsAudienceUserSubquery,
    ProductAnalyticsCompute: ProductAnalyticsCompute_1.ProductAnalyticsCompute,
    ProductAnalyticsEventQuery: ProductAnalyticsEventQuery_1.ProductAnalyticsEventQuery,
    ProductAnalyticsEventSearch: ProductAnalyticsEventSearch_1.ProductAnalyticsEventSearch,
    ProductAnalyticsGroupBy: ProductAnalyticsGroupBy_1.ProductAnalyticsGroupBy,
    ProductAnalyticsGroupBySort: ProductAnalyticsGroupBySort_1.ProductAnalyticsGroupBySort,
    ProductAnalyticsInterval: ProductAnalyticsInterval_1.ProductAnalyticsInterval,
    ProductAnalyticsOccurrenceFilter: ProductAnalyticsOccurrenceFilter_1.ProductAnalyticsOccurrenceFilter,
    ProductAnalyticsOccurrenceQuery: ProductAnalyticsOccurrenceQuery_1.ProductAnalyticsOccurrenceQuery,
    ProductAnalyticsOccurrenceSearch: ProductAnalyticsOccurrenceSearch_1.ProductAnalyticsOccurrenceSearch,
    ProductAnalyticsResponseMeta: ProductAnalyticsResponseMeta_1.ProductAnalyticsResponseMeta,
    ProductAnalyticsScalarColumn: ProductAnalyticsScalarColumn_1.ProductAnalyticsScalarColumn,
    ProductAnalyticsScalarColumnMeta: ProductAnalyticsScalarColumnMeta_1.ProductAnalyticsScalarColumnMeta,
    ProductAnalyticsScalarResponse: ProductAnalyticsScalarResponse_1.ProductAnalyticsScalarResponse,
    ProductAnalyticsScalarResponseAttributes: ProductAnalyticsScalarResponseAttributes_1.ProductAnalyticsScalarResponseAttributes,
    ProductAnalyticsScalarResponseData: ProductAnalyticsScalarResponseData_1.ProductAnalyticsScalarResponseData,
    ProductAnalyticsSerie: ProductAnalyticsSerie_1.ProductAnalyticsSerie,
    ProductAnalyticsServerSideEventError: ProductAnalyticsServerSideEventError_1.ProductAnalyticsServerSideEventError,
    ProductAnalyticsServerSideEventErrors: ProductAnalyticsServerSideEventErrors_1.ProductAnalyticsServerSideEventErrors,
    ProductAnalyticsServerSideEventItem: ProductAnalyticsServerSideEventItem_1.ProductAnalyticsServerSideEventItem,
    ProductAnalyticsServerSideEventItemAccount: ProductAnalyticsServerSideEventItemAccount_1.ProductAnalyticsServerSideEventItemAccount,
    ProductAnalyticsServerSideEventItemApplication: ProductAnalyticsServerSideEventItemApplication_1.ProductAnalyticsServerSideEventItemApplication,
    ProductAnalyticsServerSideEventItemEvent: ProductAnalyticsServerSideEventItemEvent_1.ProductAnalyticsServerSideEventItemEvent,
    ProductAnalyticsServerSideEventItemSession: ProductAnalyticsServerSideEventItemSession_1.ProductAnalyticsServerSideEventItemSession,
    ProductAnalyticsServerSideEventItemUsr: ProductAnalyticsServerSideEventItemUsr_1.ProductAnalyticsServerSideEventItemUsr,
    ProductAnalyticsTimeseriesResponse: ProductAnalyticsTimeseriesResponse_1.ProductAnalyticsTimeseriesResponse,
    ProductAnalyticsTimeseriesResponseAttributes: ProductAnalyticsTimeseriesResponseAttributes_1.ProductAnalyticsTimeseriesResponseAttributes,
    ProductAnalyticsTimeseriesResponseData: ProductAnalyticsTimeseriesResponseData_1.ProductAnalyticsTimeseriesResponseData,
    ProductAnalyticsUnit: ProductAnalyticsUnit_1.ProductAnalyticsUnit,
    Project: Project_1.Project,
    ProjectAttributes: ProjectAttributes_1.ProjectAttributes,
    ProjectColumnsConfig: ProjectColumnsConfig_1.ProjectColumnsConfig,
    ProjectColumnsConfigColumnsItems: ProjectColumnsConfigColumnsItems_1.ProjectColumnsConfigColumnsItems,
    ProjectColumnsConfigColumnsItemsSort: ProjectColumnsConfigColumnsItemsSort_1.ProjectColumnsConfigColumnsItemsSort,
    ProjectCreate: ProjectCreate_1.ProjectCreate,
    ProjectCreateAttributes: ProjectCreateAttributes_1.ProjectCreateAttributes,
    ProjectCreateRequest: ProjectCreateRequest_1.ProjectCreateRequest,
    ProjectNotificationSettings: ProjectNotificationSettings_1.ProjectNotificationSettings,
    ProjectRelationship: ProjectRelationship_1.ProjectRelationship,
    ProjectRelationshipData: ProjectRelationshipData_1.ProjectRelationshipData,
    ProjectRelationships: ProjectRelationships_1.ProjectRelationships,
    ProjectResponse: ProjectResponse_1.ProjectResponse,
    ProjectSettings: ProjectSettings_1.ProjectSettings,
    ProjectUpdate: ProjectUpdate_1.ProjectUpdate,
    ProjectUpdateAttributes: ProjectUpdateAttributes_1.ProjectUpdateAttributes,
    ProjectUpdateRequest: ProjectUpdateRequest_1.ProjectUpdateRequest,
    ProjectedCost: ProjectedCost_1.ProjectedCost,
    ProjectedCostAttributes: ProjectedCostAttributes_1.ProjectedCostAttributes,
    ProjectedCostResponse: ProjectedCostResponse_1.ProjectedCostResponse,
    ProjectsResponse: ProjectsResponse_1.ProjectsResponse,
    PublishAppResponse: PublishAppResponse_1.PublishAppResponse,
    PutAppsDatastoreItemResponseArray: PutAppsDatastoreItemResponseArray_1.PutAppsDatastoreItemResponseArray,
    PutAppsDatastoreItemResponseData: PutAppsDatastoreItemResponseData_1.PutAppsDatastoreItemResponseData,
    PutIncidentNotificationRuleRequest: PutIncidentNotificationRuleRequest_1.PutIncidentNotificationRuleRequest,
    QueryAccountRequest: QueryAccountRequest_1.QueryAccountRequest,
    QueryAccountRequestData: QueryAccountRequestData_1.QueryAccountRequestData,
    QueryAccountRequestDataAttributes: QueryAccountRequestDataAttributes_1.QueryAccountRequestDataAttributes,
    QueryAccountRequestDataAttributesSort: QueryAccountRequestDataAttributesSort_1.QueryAccountRequestDataAttributesSort,
    QueryEventFilteredUsersRequest: QueryEventFilteredUsersRequest_1.QueryEventFilteredUsersRequest,
    QueryEventFilteredUsersRequestData: QueryEventFilteredUsersRequestData_1.QueryEventFilteredUsersRequestData,
    QueryEventFilteredUsersRequestDataAttributes: QueryEventFilteredUsersRequestDataAttributes_1.QueryEventFilteredUsersRequestDataAttributes,
    QueryEventFilteredUsersRequestDataAttributesEventQuery: QueryEventFilteredUsersRequestDataAttributesEventQuery_1.QueryEventFilteredUsersRequestDataAttributesEventQuery,
    QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame: QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame_1.QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame,
    QueryFormula: QueryFormula_1.QueryFormula,
    QueryResponse: QueryResponse_1.QueryResponse,
    QueryResponseData: QueryResponseData_1.QueryResponseData,
    QueryResponseDataAttributes: QueryResponseDataAttributes_1.QueryResponseDataAttributes,
    QueryUsersRequest: QueryUsersRequest_1.QueryUsersRequest,
    QueryUsersRequestData: QueryUsersRequestData_1.QueryUsersRequestData,
    QueryUsersRequestDataAttributes: QueryUsersRequestDataAttributes_1.QueryUsersRequestDataAttributes,
    QueryUsersRequestDataAttributesSort: QueryUsersRequestDataAttributesSort_1.QueryUsersRequestDataAttributesSort,
    RUMAggregateBucketValueTimeseriesPoint: RUMAggregateBucketValueTimeseriesPoint_1.RUMAggregateBucketValueTimeseriesPoint,
    RUMAggregateRequest: RUMAggregateRequest_1.RUMAggregateRequest,
    RUMAggregateSort: RUMAggregateSort_1.RUMAggregateSort,
    RUMAggregationBucketsResponse: RUMAggregationBucketsResponse_1.RUMAggregationBucketsResponse,
    RUMAnalyticsAggregateResponse: RUMAnalyticsAggregateResponse_1.RUMAnalyticsAggregateResponse,
    RUMApplication: RUMApplication_1.RUMApplication,
    RUMApplicationAttributes: RUMApplicationAttributes_1.RUMApplicationAttributes,
    RUMApplicationCreate: RUMApplicationCreate_1.RUMApplicationCreate,
    RUMApplicationCreateAttributes: RUMApplicationCreateAttributes_1.RUMApplicationCreateAttributes,
    RUMApplicationCreateRequest: RUMApplicationCreateRequest_1.RUMApplicationCreateRequest,
    RUMApplicationList: RUMApplicationList_1.RUMApplicationList,
    RUMApplicationListAttributes: RUMApplicationListAttributes_1.RUMApplicationListAttributes,
    RUMApplicationResponse: RUMApplicationResponse_1.RUMApplicationResponse,
    RUMApplicationUpdate: RUMApplicationUpdate_1.RUMApplicationUpdate,
    RUMApplicationUpdateAttributes: RUMApplicationUpdateAttributes_1.RUMApplicationUpdateAttributes,
    RUMApplicationUpdateRequest: RUMApplicationUpdateRequest_1.RUMApplicationUpdateRequest,
    RUMApplicationsResponse: RUMApplicationsResponse_1.RUMApplicationsResponse,
    RUMBucketResponse: RUMBucketResponse_1.RUMBucketResponse,
    RUMCompute: RUMCompute_1.RUMCompute,
    RUMEvent: RUMEvent_1.RUMEvent,
    RUMEventAttributes: RUMEventAttributes_1.RUMEventAttributes,
    RUMEventProcessingScale: RUMEventProcessingScale_1.RUMEventProcessingScale,
    RUMEventsResponse: RUMEventsResponse_1.RUMEventsResponse,
    RUMGroupBy: RUMGroupBy_1.RUMGroupBy,
    RUMGroupByHistogram: RUMGroupByHistogram_1.RUMGroupByHistogram,
    RUMProductAnalyticsRetentionScale: RUMProductAnalyticsRetentionScale_1.RUMProductAnalyticsRetentionScale,
    RUMProductScales: RUMProductScales_1.RUMProductScales,
    RUMQueryFilter: RUMQueryFilter_1.RUMQueryFilter,
    RUMQueryOptions: RUMQueryOptions_1.RUMQueryOptions,
    RUMQueryPageOptions: RUMQueryPageOptions_1.RUMQueryPageOptions,
    RUMResponseLinks: RUMResponseLinks_1.RUMResponseLinks,
    RUMResponseMetadata: RUMResponseMetadata_1.RUMResponseMetadata,
    RUMResponsePage: RUMResponsePage_1.RUMResponsePage,
    RUMSearchEventsRequest: RUMSearchEventsRequest_1.RUMSearchEventsRequest,
    RUMWarning: RUMWarning_1.RUMWarning,
    RawErrorBudgetRemaining: RawErrorBudgetRemaining_1.RawErrorBudgetRemaining,
    ReadinessGate: ReadinessGate_1.ReadinessGate,
    RecommendationAttributes: RecommendationAttributes_1.RecommendationAttributes,
    RecommendationData: RecommendationData_1.RecommendationData,
    RecommendationDocument: RecommendationDocument_1.RecommendationDocument,
    RegisterAppKeyResponse: RegisterAppKeyResponse_1.RegisterAppKeyResponse,
    RelationAttributes: RelationAttributes_1.RelationAttributes,
    RelationEntity: RelationEntity_1.RelationEntity,
    RelationMeta: RelationMeta_1.RelationMeta,
    RelationRelationships: RelationRelationships_1.RelationRelationships,
    RelationResponse: RelationResponse_1.RelationResponse,
    RelationResponseMeta: RelationResponseMeta_1.RelationResponseMeta,
    RelationToEntity: RelationToEntity_1.RelationToEntity,
    RelationshipItem: RelationshipItem_1.RelationshipItem,
    RelationshipToIncident: RelationshipToIncident_1.RelationshipToIncident,
    RelationshipToIncidentAttachment: RelationshipToIncidentAttachment_1.RelationshipToIncidentAttachment,
    RelationshipToIncidentAttachmentData: RelationshipToIncidentAttachmentData_1.RelationshipToIncidentAttachmentData,
    RelationshipToIncidentData: RelationshipToIncidentData_1.RelationshipToIncidentData,
    RelationshipToIncidentImpactData: RelationshipToIncidentImpactData_1.RelationshipToIncidentImpactData,
    RelationshipToIncidentImpacts: RelationshipToIncidentImpacts_1.RelationshipToIncidentImpacts,
    RelationshipToIncidentIntegrationMetadataData: RelationshipToIncidentIntegrationMetadataData_1.RelationshipToIncidentIntegrationMetadataData,
    RelationshipToIncidentIntegrationMetadatas: RelationshipToIncidentIntegrationMetadatas_1.RelationshipToIncidentIntegrationMetadatas,
    RelationshipToIncidentNotificationTemplate: RelationshipToIncidentNotificationTemplate_1.RelationshipToIncidentNotificationTemplate,
    RelationshipToIncidentNotificationTemplateData: RelationshipToIncidentNotificationTemplateData_1.RelationshipToIncidentNotificationTemplateData,
    RelationshipToIncidentPostmortem: RelationshipToIncidentPostmortem_1.RelationshipToIncidentPostmortem,
    RelationshipToIncidentPostmortemData: RelationshipToIncidentPostmortemData_1.RelationshipToIncidentPostmortemData,
    RelationshipToIncidentRequest: RelationshipToIncidentRequest_1.RelationshipToIncidentRequest,
    RelationshipToIncidentResponderData: RelationshipToIncidentResponderData_1.RelationshipToIncidentResponderData,
    RelationshipToIncidentResponders: RelationshipToIncidentResponders_1.RelationshipToIncidentResponders,
    RelationshipToIncidentType: RelationshipToIncidentType_1.RelationshipToIncidentType,
    RelationshipToIncidentTypeData: RelationshipToIncidentTypeData_1.RelationshipToIncidentTypeData,
    RelationshipToIncidentUserDefinedFieldData: RelationshipToIncidentUserDefinedFieldData_1.RelationshipToIncidentUserDefinedFieldData,
    RelationshipToIncidentUserDefinedFields: RelationshipToIncidentUserDefinedFields_1.RelationshipToIncidentUserDefinedFields,
    RelationshipToOrganization: RelationshipToOrganization_1.RelationshipToOrganization,
    RelationshipToOrganizationData: RelationshipToOrganizationData_1.RelationshipToOrganizationData,
    RelationshipToOrganizations: RelationshipToOrganizations_1.RelationshipToOrganizations,
    RelationshipToOutcome: RelationshipToOutcome_1.RelationshipToOutcome,
    RelationshipToOutcomeData: RelationshipToOutcomeData_1.RelationshipToOutcomeData,
    RelationshipToPermission: RelationshipToPermission_1.RelationshipToPermission,
    RelationshipToPermissionData: RelationshipToPermissionData_1.RelationshipToPermissionData,
    RelationshipToPermissions: RelationshipToPermissions_1.RelationshipToPermissions,
    RelationshipToRole: RelationshipToRole_1.RelationshipToRole,
    RelationshipToRoleData: RelationshipToRoleData_1.RelationshipToRoleData,
    RelationshipToRoles: RelationshipToRoles_1.RelationshipToRoles,
    RelationshipToRule: RelationshipToRule_1.RelationshipToRule,
    RelationshipToRuleData: RelationshipToRuleData_1.RelationshipToRuleData,
    RelationshipToRuleDataObject: RelationshipToRuleDataObject_1.RelationshipToRuleDataObject,
    RelationshipToSAMLAssertionAttribute: RelationshipToSAMLAssertionAttribute_1.RelationshipToSAMLAssertionAttribute,
    RelationshipToSAMLAssertionAttributeData: RelationshipToSAMLAssertionAttributeData_1.RelationshipToSAMLAssertionAttributeData,
    RelationshipToTeam: RelationshipToTeam_1.RelationshipToTeam,
    RelationshipToTeamData: RelationshipToTeamData_1.RelationshipToTeamData,
    RelationshipToTeamLinkData: RelationshipToTeamLinkData_1.RelationshipToTeamLinkData,
    RelationshipToTeamLinks: RelationshipToTeamLinks_1.RelationshipToTeamLinks,
    RelationshipToUser: RelationshipToUser_1.RelationshipToUser,
    RelationshipToUserData: RelationshipToUserData_1.RelationshipToUserData,
    RelationshipToUserTeamPermission: RelationshipToUserTeamPermission_1.RelationshipToUserTeamPermission,
    RelationshipToUserTeamPermissionData: RelationshipToUserTeamPermissionData_1.RelationshipToUserTeamPermissionData,
    RelationshipToUserTeamTeam: RelationshipToUserTeamTeam_1.RelationshipToUserTeamTeam,
    RelationshipToUserTeamTeamData: RelationshipToUserTeamTeamData_1.RelationshipToUserTeamTeamData,
    RelationshipToUserTeamUser: RelationshipToUserTeamUser_1.RelationshipToUserTeamUser,
    RelationshipToUserTeamUserData: RelationshipToUserTeamUserData_1.RelationshipToUserTeamUserData,
    RelationshipToUsers: RelationshipToUsers_1.RelationshipToUsers,
    Remediation: Remediation_1.Remediation,
    ReorderRetentionFiltersRequest: ReorderRetentionFiltersRequest_1.ReorderRetentionFiltersRequest,
    ReorderRuleResourceArray: ReorderRuleResourceArray_1.ReorderRuleResourceArray,
    ReorderRuleResourceData: ReorderRuleResourceData_1.ReorderRuleResourceData,
    ReorderRulesetResourceArray: ReorderRulesetResourceArray_1.ReorderRulesetResourceArray,
    ReorderRulesetResourceData: ReorderRulesetResourceData_1.ReorderRulesetResourceData,
    ResolveVulnerableSymbolsRequest: ResolveVulnerableSymbolsRequest_1.ResolveVulnerableSymbolsRequest,
    ResolveVulnerableSymbolsRequestData: ResolveVulnerableSymbolsRequestData_1.ResolveVulnerableSymbolsRequestData,
    ResolveVulnerableSymbolsRequestDataAttributes: ResolveVulnerableSymbolsRequestDataAttributes_1.ResolveVulnerableSymbolsRequestDataAttributes,
    ResolveVulnerableSymbolsResponse: ResolveVulnerableSymbolsResponse_1.ResolveVulnerableSymbolsResponse,
    ResolveVulnerableSymbolsResponseData: ResolveVulnerableSymbolsResponseData_1.ResolveVulnerableSymbolsResponseData,
    ResolveVulnerableSymbolsResponseDataAttributes: ResolveVulnerableSymbolsResponseDataAttributes_1.ResolveVulnerableSymbolsResponseDataAttributes,
    ResolveVulnerableSymbolsResponseResults: ResolveVulnerableSymbolsResponseResults_1.ResolveVulnerableSymbolsResponseResults,
    ResolveVulnerableSymbolsResponseResultsVulnerableSymbols: ResolveVulnerableSymbolsResponseResultsVulnerableSymbols_1.ResolveVulnerableSymbolsResponseResultsVulnerableSymbols,
    ResolveVulnerableSymbolsResponseResultsVulnerableSymbolsSymbols: ResolveVulnerableSymbolsResponseResultsVulnerableSymbolsSymbols_1.ResolveVulnerableSymbolsResponseResultsVulnerableSymbolsSymbols,
    ResourceFilterAttributes: ResourceFilterAttributes_1.ResourceFilterAttributes,
    ResponseMetaAttributes: ResponseMetaAttributes_1.ResponseMetaAttributes,
    RestrictionPolicy: RestrictionPolicy_1.RestrictionPolicy,
    RestrictionPolicyAttributes: RestrictionPolicyAttributes_1.RestrictionPolicyAttributes,
    RestrictionPolicyBinding: RestrictionPolicyBinding_1.RestrictionPolicyBinding,
    RestrictionPolicyResponse: RestrictionPolicyResponse_1.RestrictionPolicyResponse,
    RestrictionPolicyUpdateRequest: RestrictionPolicyUpdateRequest_1.RestrictionPolicyUpdateRequest,
    RestrictionQueryAttributes: RestrictionQueryAttributes_1.RestrictionQueryAttributes,
    RestrictionQueryCreateAttributes: RestrictionQueryCreateAttributes_1.RestrictionQueryCreateAttributes,
    RestrictionQueryCreateData: RestrictionQueryCreateData_1.RestrictionQueryCreateData,
    RestrictionQueryCreatePayload: RestrictionQueryCreatePayload_1.RestrictionQueryCreatePayload,
    RestrictionQueryListResponse: RestrictionQueryListResponse_1.RestrictionQueryListResponse,
    RestrictionQueryRole: RestrictionQueryRole_1.RestrictionQueryRole,
    RestrictionQueryRoleAttribute: RestrictionQueryRoleAttribute_1.RestrictionQueryRoleAttribute,
    RestrictionQueryRolesResponse: RestrictionQueryRolesResponse_1.RestrictionQueryRolesResponse,
    RestrictionQueryUpdateAttributes: RestrictionQueryUpdateAttributes_1.RestrictionQueryUpdateAttributes,
    RestrictionQueryUpdateData: RestrictionQueryUpdateData_1.RestrictionQueryUpdateData,
    RestrictionQueryUpdatePayload: RestrictionQueryUpdatePayload_1.RestrictionQueryUpdatePayload,
    RestrictionQueryWithRelationships: RestrictionQueryWithRelationships_1.RestrictionQueryWithRelationships,
    RestrictionQueryWithRelationshipsResponse: RestrictionQueryWithRelationshipsResponse_1.RestrictionQueryWithRelationshipsResponse,
    RestrictionQueryWithoutRelationships: RestrictionQueryWithoutRelationships_1.RestrictionQueryWithoutRelationships,
    RestrictionQueryWithoutRelationshipsResponse: RestrictionQueryWithoutRelationshipsResponse_1.RestrictionQueryWithoutRelationshipsResponse,
    RetentionFilter: RetentionFilter_1.RetentionFilter,
    RetentionFilterAll: RetentionFilterAll_1.RetentionFilterAll,
    RetentionFilterAllAttributes: RetentionFilterAllAttributes_1.RetentionFilterAllAttributes,
    RetentionFilterAttributes: RetentionFilterAttributes_1.RetentionFilterAttributes,
    RetentionFilterCreateAttributes: RetentionFilterCreateAttributes_1.RetentionFilterCreateAttributes,
    RetentionFilterCreateData: RetentionFilterCreateData_1.RetentionFilterCreateData,
    RetentionFilterCreateRequest: RetentionFilterCreateRequest_1.RetentionFilterCreateRequest,
    RetentionFilterCreateResponse: RetentionFilterCreateResponse_1.RetentionFilterCreateResponse,
    RetentionFilterResponse: RetentionFilterResponse_1.RetentionFilterResponse,
    RetentionFilterUpdateAttributes: RetentionFilterUpdateAttributes_1.RetentionFilterUpdateAttributes,
    RetentionFilterUpdateData: RetentionFilterUpdateData_1.RetentionFilterUpdateData,
    RetentionFilterUpdateRequest: RetentionFilterUpdateRequest_1.RetentionFilterUpdateRequest,
    RetentionFilterWithoutAttributes: RetentionFilterWithoutAttributes_1.RetentionFilterWithoutAttributes,
    RetentionFiltersResponse: RetentionFiltersResponse_1.RetentionFiltersResponse,
    RetryStrategy: RetryStrategy_1.RetryStrategy,
    RetryStrategyLinear: RetryStrategyLinear_1.RetryStrategyLinear,
    RevertCustomRuleRevisionRequest: RevertCustomRuleRevisionRequest_1.RevertCustomRuleRevisionRequest,
    RevertCustomRuleRevisionRequestData: RevertCustomRuleRevisionRequestData_1.RevertCustomRuleRevisionRequestData,
    RevertCustomRuleRevisionRequestDataAttributes: RevertCustomRuleRevisionRequestDataAttributes_1.RevertCustomRuleRevisionRequestDataAttributes,
    Role: Role_1.Role,
    RoleAttributes: RoleAttributes_1.RoleAttributes,
    RoleClone: RoleClone_1.RoleClone,
    RoleCloneAttributes: RoleCloneAttributes_1.RoleCloneAttributes,
    RoleCloneRequest: RoleCloneRequest_1.RoleCloneRequest,
    RoleCreateAttributes: RoleCreateAttributes_1.RoleCreateAttributes,
    RoleCreateData: RoleCreateData_1.RoleCreateData,
    RoleCreateRequest: RoleCreateRequest_1.RoleCreateRequest,
    RoleCreateResponse: RoleCreateResponse_1.RoleCreateResponse,
    RoleCreateResponseData: RoleCreateResponseData_1.RoleCreateResponseData,
    RoleRelationships: RoleRelationships_1.RoleRelationships,
    RoleResponse: RoleResponse_1.RoleResponse,
    RoleResponseRelationships: RoleResponseRelationships_1.RoleResponseRelationships,
    RoleTemplateArray: RoleTemplateArray_1.RoleTemplateArray,
    RoleTemplateData: RoleTemplateData_1.RoleTemplateData,
    RoleTemplateDataAttributes: RoleTemplateDataAttributes_1.RoleTemplateDataAttributes,
    RoleUpdateAttributes: RoleUpdateAttributes_1.RoleUpdateAttributes,
    RoleUpdateData: RoleUpdateData_1.RoleUpdateData,
    RoleUpdateRequest: RoleUpdateRequest_1.RoleUpdateRequest,
    RoleUpdateResponse: RoleUpdateResponse_1.RoleUpdateResponse,
    RoleUpdateResponseData: RoleUpdateResponseData_1.RoleUpdateResponseData,
    RolesResponse: RolesResponse_1.RolesResponse,
    RoutingRule: RoutingRule_1.RoutingRule,
    RoutingRuleAttributes: RoutingRuleAttributes_1.RoutingRuleAttributes,
    RoutingRuleRelationships: RoutingRuleRelationships_1.RoutingRuleRelationships,
    RoutingRuleRelationshipsPolicy: RoutingRuleRelationshipsPolicy_1.RoutingRuleRelationshipsPolicy,
    RoutingRuleRelationshipsPolicyData: RoutingRuleRelationshipsPolicyData_1.RoutingRuleRelationshipsPolicyData,
    RuleAttributes: RuleAttributes_1.RuleAttributes,
    RuleOutcomeRelationships: RuleOutcomeRelationships_1.RuleOutcomeRelationships,
    RuleUser: RuleUser_1.RuleUser,
    RuleVersionHistory: RuleVersionHistory_1.RuleVersionHistory,
    RuleVersions: RuleVersions_1.RuleVersions,
    RulesValidateQueryRequest: RulesValidateQueryRequest_1.RulesValidateQueryRequest,
    RulesValidateQueryRequestData: RulesValidateQueryRequestData_1.RulesValidateQueryRequestData,
    RulesValidateQueryRequestDataAttributes: RulesValidateQueryRequestDataAttributes_1.RulesValidateQueryRequestDataAttributes,
    RulesValidateQueryResponse: RulesValidateQueryResponse_1.RulesValidateQueryResponse,
    RulesValidateQueryResponseData: RulesValidateQueryResponseData_1.RulesValidateQueryResponseData,
    RulesValidateQueryResponseDataAttributes: RulesValidateQueryResponseDataAttributes_1.RulesValidateQueryResponseDataAttributes,
    RulesetResp: RulesetResp_1.RulesetResp,
    RulesetRespArray: RulesetRespArray_1.RulesetRespArray,
    RulesetRespData: RulesetRespData_1.RulesetRespData,
    RulesetRespDataAttributes: RulesetRespDataAttributes_1.RulesetRespDataAttributes,
    RulesetRespDataAttributesCreated: RulesetRespDataAttributesCreated_1.RulesetRespDataAttributesCreated,
    RulesetRespDataAttributesModified: RulesetRespDataAttributesModified_1.RulesetRespDataAttributesModified,
    RulesetRespDataAttributesRulesItems: RulesetRespDataAttributesRulesItems_1.RulesetRespDataAttributesRulesItems,
    RulesetRespDataAttributesRulesItemsQuery: RulesetRespDataAttributesRulesItemsQuery_1.RulesetRespDataAttributesRulesItemsQuery,
    RulesetRespDataAttributesRulesItemsQueryAddition: RulesetRespDataAttributesRulesItemsQueryAddition_1.RulesetRespDataAttributesRulesItemsQueryAddition,
    RulesetRespDataAttributesRulesItemsReferenceTable: RulesetRespDataAttributesRulesItemsReferenceTable_1.RulesetRespDataAttributesRulesItemsReferenceTable,
    RulesetRespDataAttributesRulesItemsReferenceTableFieldPairsItems: RulesetRespDataAttributesRulesItemsReferenceTableFieldPairsItems_1.RulesetRespDataAttributesRulesItemsReferenceTableFieldPairsItems,
    RumMetricCompute: RumMetricCompute_1.RumMetricCompute,
    RumMetricCreateAttributes: RumMetricCreateAttributes_1.RumMetricCreateAttributes,
    RumMetricCreateData: RumMetricCreateData_1.RumMetricCreateData,
    RumMetricCreateRequest: RumMetricCreateRequest_1.RumMetricCreateRequest,
    RumMetricFilter: RumMetricFilter_1.RumMetricFilter,
    RumMetricGroupBy: RumMetricGroupBy_1.RumMetricGroupBy,
    RumMetricResponse: RumMetricResponse_1.RumMetricResponse,
    RumMetricResponseAttributes: RumMetricResponseAttributes_1.RumMetricResponseAttributes,
    RumMetricResponseCompute: RumMetricResponseCompute_1.RumMetricResponseCompute,
    RumMetricResponseData: RumMetricResponseData_1.RumMetricResponseData,
    RumMetricResponseFilter: RumMetricResponseFilter_1.RumMetricResponseFilter,
    RumMetricResponseGroupBy: RumMetricResponseGroupBy_1.RumMetricResponseGroupBy,
    RumMetricResponseUniqueness: RumMetricResponseUniqueness_1.RumMetricResponseUniqueness,
    RumMetricUniqueness: RumMetricUniqueness_1.RumMetricUniqueness,
    RumMetricUpdateAttributes: RumMetricUpdateAttributes_1.RumMetricUpdateAttributes,
    RumMetricUpdateCompute: RumMetricUpdateCompute_1.RumMetricUpdateCompute,
    RumMetricUpdateData: RumMetricUpdateData_1.RumMetricUpdateData,
    RumMetricUpdateRequest: RumMetricUpdateRequest_1.RumMetricUpdateRequest,
    RumMetricsResponse: RumMetricsResponse_1.RumMetricsResponse,
    RumRetentionFilterAttributes: RumRetentionFilterAttributes_1.RumRetentionFilterAttributes,
    RumRetentionFilterCreateAttributes: RumRetentionFilterCreateAttributes_1.RumRetentionFilterCreateAttributes,
    RumRetentionFilterCreateData: RumRetentionFilterCreateData_1.RumRetentionFilterCreateData,
    RumRetentionFilterCreateRequest: RumRetentionFilterCreateRequest_1.RumRetentionFilterCreateRequest,
    RumRetentionFilterData: RumRetentionFilterData_1.RumRetentionFilterData,
    RumRetentionFilterResponse: RumRetentionFilterResponse_1.RumRetentionFilterResponse,
    RumRetentionFilterUpdateAttributes: RumRetentionFilterUpdateAttributes_1.RumRetentionFilterUpdateAttributes,
    RumRetentionFilterUpdateData: RumRetentionFilterUpdateData_1.RumRetentionFilterUpdateData,
    RumRetentionFilterUpdateRequest: RumRetentionFilterUpdateRequest_1.RumRetentionFilterUpdateRequest,
    RumRetentionFiltersOrderData: RumRetentionFiltersOrderData_1.RumRetentionFiltersOrderData,
    RumRetentionFiltersOrderRequest: RumRetentionFiltersOrderRequest_1.RumRetentionFiltersOrderRequest,
    RumRetentionFiltersOrderResponse: RumRetentionFiltersOrderResponse_1.RumRetentionFiltersOrderResponse,
    RumRetentionFiltersResponse: RumRetentionFiltersResponse_1.RumRetentionFiltersResponse,
    RunThreatHuntingJobRequest: RunThreatHuntingJobRequest_1.RunThreatHuntingJobRequest,
    RunThreatHuntingJobRequestAttributes: RunThreatHuntingJobRequestAttributes_1.RunThreatHuntingJobRequestAttributes,
    RunThreatHuntingJobRequestData: RunThreatHuntingJobRequestData_1.RunThreatHuntingJobRequestData,
    SAMLAssertionAttribute: SAMLAssertionAttribute_1.SAMLAssertionAttribute,
    SAMLAssertionAttributeAttributes: SAMLAssertionAttributeAttributes_1.SAMLAssertionAttributeAttributes,
    SBOM: SBOM_1.SBOM,
    SBOMAttributes: SBOMAttributes_1.SBOMAttributes,
    SBOMComponent: SBOMComponent_1.SBOMComponent,
    SBOMComponentDependency: SBOMComponentDependency_1.SBOMComponentDependency,
    SBOMComponentLicense: SBOMComponentLicense_1.SBOMComponentLicense,
    SBOMComponentLicenseLicense: SBOMComponentLicenseLicense_1.SBOMComponentLicenseLicense,
    SBOMComponentProperty: SBOMComponentProperty_1.SBOMComponentProperty,
    SBOMComponentSupplier: SBOMComponentSupplier_1.SBOMComponentSupplier,
    SBOMMetadata: SBOMMetadata_1.SBOMMetadata,
    SBOMMetadataAuthor: SBOMMetadataAuthor_1.SBOMMetadataAuthor,
    SBOMMetadataComponent: SBOMMetadataComponent_1.SBOMMetadataComponent,
    SLOReportPostResponse: SLOReportPostResponse_1.SLOReportPostResponse,
    SLOReportPostResponseData: SLOReportPostResponseData_1.SLOReportPostResponseData,
    SLOReportStatusGetResponse: SLOReportStatusGetResponse_1.SLOReportStatusGetResponse,
    SLOReportStatusGetResponseAttributes: SLOReportStatusGetResponseAttributes_1.SLOReportStatusGetResponseAttributes,
    SLOReportStatusGetResponseData: SLOReportStatusGetResponseData_1.SLOReportStatusGetResponseData,
    ScaRequest: ScaRequest_1.ScaRequest,
    ScaRequestData: ScaRequestData_1.ScaRequestData,
    ScaRequestDataAttributes: ScaRequestDataAttributes_1.ScaRequestDataAttributes,
    ScaRequestDataAttributesCommit: ScaRequestDataAttributesCommit_1.ScaRequestDataAttributesCommit,
    ScaRequestDataAttributesDependenciesItems: ScaRequestDataAttributesDependenciesItems_1.ScaRequestDataAttributesDependenciesItems,
    ScaRequestDataAttributesDependenciesItemsLocationsItems: ScaRequestDataAttributesDependenciesItemsLocationsItems_1.ScaRequestDataAttributesDependenciesItemsLocationsItems,
    ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition: ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition_1.ScaRequestDataAttributesDependenciesItemsLocationsItemsFilePosition,
    ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition: ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition_1.ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition,
    ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems: ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems_1.ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems,
    ScaRequestDataAttributesFilesItems: ScaRequestDataAttributesFilesItems_1.ScaRequestDataAttributesFilesItems,
    ScaRequestDataAttributesRelationsItems: ScaRequestDataAttributesRelationsItems_1.ScaRequestDataAttributesRelationsItems,
    ScaRequestDataAttributesRepository: ScaRequestDataAttributesRepository_1.ScaRequestDataAttributesRepository,
    ScaRequestDataAttributesVulnerabilitiesItems: ScaRequestDataAttributesVulnerabilitiesItems_1.ScaRequestDataAttributesVulnerabilitiesItems,
    ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems: ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems_1.ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems,
    ScalarFormulaQueryRequest: ScalarFormulaQueryRequest_1.ScalarFormulaQueryRequest,
    ScalarFormulaQueryResponse: ScalarFormulaQueryResponse_1.ScalarFormulaQueryResponse,
    ScalarFormulaRequest: ScalarFormulaRequest_1.ScalarFormulaRequest,
    ScalarFormulaRequestAttributes: ScalarFormulaRequestAttributes_1.ScalarFormulaRequestAttributes,
    ScalarFormulaResponseAtrributes: ScalarFormulaResponseAtrributes_1.ScalarFormulaResponseAtrributes,
    ScalarMeta: ScalarMeta_1.ScalarMeta,
    ScalarResponse: ScalarResponse_1.ScalarResponse,
    ScannedAssetMetadata: ScannedAssetMetadata_1.ScannedAssetMetadata,
    ScannedAssetMetadataAsset: ScannedAssetMetadataAsset_1.ScannedAssetMetadataAsset,
    ScannedAssetMetadataAttributes: ScannedAssetMetadataAttributes_1.ScannedAssetMetadataAttributes,
    ScannedAssetMetadataLastSuccess: ScannedAssetMetadataLastSuccess_1.ScannedAssetMetadataLastSuccess,
    ScannedAssetsMetadata: ScannedAssetsMetadata_1.ScannedAssetsMetadata,
    Schedule: Schedule_1.Schedule,
    ScheduleCreateRequest: ScheduleCreateRequest_1.ScheduleCreateRequest,
    ScheduleCreateRequestData: ScheduleCreateRequestData_1.ScheduleCreateRequestData,
    ScheduleCreateRequestDataAttributes: ScheduleCreateRequestDataAttributes_1.ScheduleCreateRequestDataAttributes,
    ScheduleCreateRequestDataAttributesLayersItems: ScheduleCreateRequestDataAttributesLayersItems_1.ScheduleCreateRequestDataAttributesLayersItems,
    ScheduleCreateRequestDataRelationships: ScheduleCreateRequestDataRelationships_1.ScheduleCreateRequestDataRelationships,
    ScheduleData: ScheduleData_1.ScheduleData,
    ScheduleDataAttributes: ScheduleDataAttributes_1.ScheduleDataAttributes,
    ScheduleDataRelationships: ScheduleDataRelationships_1.ScheduleDataRelationships,
    ScheduleDataRelationshipsLayers: ScheduleDataRelationshipsLayers_1.ScheduleDataRelationshipsLayers,
    ScheduleDataRelationshipsLayersDataItems: ScheduleDataRelationshipsLayersDataItems_1.ScheduleDataRelationshipsLayersDataItems,
    ScheduleMember: ScheduleMember_1.ScheduleMember,
    ScheduleMemberRelationships: ScheduleMemberRelationships_1.ScheduleMemberRelationships,
    ScheduleMemberRelationshipsUser: ScheduleMemberRelationshipsUser_1.ScheduleMemberRelationshipsUser,
    ScheduleMemberRelationshipsUserData: ScheduleMemberRelationshipsUserData_1.ScheduleMemberRelationshipsUserData,
    ScheduleRequestDataAttributesLayersItemsMembersItems: ScheduleRequestDataAttributesLayersItemsMembersItems_1.ScheduleRequestDataAttributesLayersItemsMembersItems,
    ScheduleRequestDataAttributesLayersItemsMembersItemsUser: ScheduleRequestDataAttributesLayersItemsMembersItemsUser_1.ScheduleRequestDataAttributesLayersItemsMembersItemsUser,
    ScheduleTarget: ScheduleTarget_1.ScheduleTarget,
    ScheduleTrigger: ScheduleTrigger_1.ScheduleTrigger,
    ScheduleTriggerWrapper: ScheduleTriggerWrapper_1.ScheduleTriggerWrapper,
    ScheduleUpdateRequest: ScheduleUpdateRequest_1.ScheduleUpdateRequest,
    ScheduleUpdateRequestData: ScheduleUpdateRequestData_1.ScheduleUpdateRequestData,
    ScheduleUpdateRequestDataAttributes: ScheduleUpdateRequestDataAttributes_1.ScheduleUpdateRequestDataAttributes,
    ScheduleUpdateRequestDataAttributesLayersItems: ScheduleUpdateRequestDataAttributesLayersItems_1.ScheduleUpdateRequestDataAttributesLayersItems,
    ScheduleUpdateRequestDataRelationships: ScheduleUpdateRequestDataRelationships_1.ScheduleUpdateRequestDataRelationships,
    ScheduleUser: ScheduleUser_1.ScheduleUser,
    ScheduleUserAttributes: ScheduleUserAttributes_1.ScheduleUserAttributes,
    SeatUserData: SeatUserData_1.SeatUserData,
    SeatUserDataArray: SeatUserDataArray_1.SeatUserDataArray,
    SeatUserDataAttributes: SeatUserDataAttributes_1.SeatUserDataAttributes,
    SeatUserMeta: SeatUserMeta_1.SeatUserMeta,
    SecretRuleArray: SecretRuleArray_1.SecretRuleArray,
    SecretRuleData: SecretRuleData_1.SecretRuleData,
    SecretRuleDataAttributes: SecretRuleDataAttributes_1.SecretRuleDataAttributes,
    SecretRuleDataAttributesMatchValidation: SecretRuleDataAttributesMatchValidation_1.SecretRuleDataAttributesMatchValidation,
    SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems: SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems_1.SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems,
    SecretRuleDataAttributesMatchValidationValidHttpStatusCodeItems: SecretRuleDataAttributesMatchValidationValidHttpStatusCodeItems_1.SecretRuleDataAttributesMatchValidationValidHttpStatusCodeItems,
    SecurityEntityConfigRisks: SecurityEntityConfigRisks_1.SecurityEntityConfigRisks,
    SecurityEntityMetadata: SecurityEntityMetadata_1.SecurityEntityMetadata,
    SecurityEntityRiskScore: SecurityEntityRiskScore_1.SecurityEntityRiskScore,
    SecurityEntityRiskScoreAttributes: SecurityEntityRiskScoreAttributes_1.SecurityEntityRiskScoreAttributes,
    SecurityEntityRiskScoresMeta: SecurityEntityRiskScoresMeta_1.SecurityEntityRiskScoresMeta,
    SecurityEntityRiskScoresResponse: SecurityEntityRiskScoresResponse_1.SecurityEntityRiskScoresResponse,
    SecurityFilter: SecurityFilter_1.SecurityFilter,
    SecurityFilterAttributes: SecurityFilterAttributes_1.SecurityFilterAttributes,
    SecurityFilterCreateAttributes: SecurityFilterCreateAttributes_1.SecurityFilterCreateAttributes,
    SecurityFilterCreateData: SecurityFilterCreateData_1.SecurityFilterCreateData,
    SecurityFilterCreateRequest: SecurityFilterCreateRequest_1.SecurityFilterCreateRequest,
    SecurityFilterExclusionFilter: SecurityFilterExclusionFilter_1.SecurityFilterExclusionFilter,
    SecurityFilterExclusionFilterResponse: SecurityFilterExclusionFilterResponse_1.SecurityFilterExclusionFilterResponse,
    SecurityFilterMeta: SecurityFilterMeta_1.SecurityFilterMeta,
    SecurityFilterResponse: SecurityFilterResponse_1.SecurityFilterResponse,
    SecurityFilterUpdateAttributes: SecurityFilterUpdateAttributes_1.SecurityFilterUpdateAttributes,
    SecurityFilterUpdateData: SecurityFilterUpdateData_1.SecurityFilterUpdateData,
    SecurityFilterUpdateRequest: SecurityFilterUpdateRequest_1.SecurityFilterUpdateRequest,
    SecurityFiltersResponse: SecurityFiltersResponse_1.SecurityFiltersResponse,
    SecurityFindingsAttributes: SecurityFindingsAttributes_1.SecurityFindingsAttributes,
    SecurityFindingsData: SecurityFindingsData_1.SecurityFindingsData,
    SecurityFindingsLinks: SecurityFindingsLinks_1.SecurityFindingsLinks,
    SecurityFindingsMeta: SecurityFindingsMeta_1.SecurityFindingsMeta,
    SecurityFindingsPage: SecurityFindingsPage_1.SecurityFindingsPage,
    SecurityFindingsSearchRequest: SecurityFindingsSearchRequest_1.SecurityFindingsSearchRequest,
    SecurityFindingsSearchRequestData: SecurityFindingsSearchRequestData_1.SecurityFindingsSearchRequestData,
    SecurityFindingsSearchRequestDataAttributes: SecurityFindingsSearchRequestDataAttributes_1.SecurityFindingsSearchRequestDataAttributes,
    SecurityFindingsSearchRequestPage: SecurityFindingsSearchRequestPage_1.SecurityFindingsSearchRequestPage,
    SecurityMonitoringContentPackStateAttributes: SecurityMonitoringContentPackStateAttributes_1.SecurityMonitoringContentPackStateAttributes,
    SecurityMonitoringContentPackStateData: SecurityMonitoringContentPackStateData_1.SecurityMonitoringContentPackStateData,
    SecurityMonitoringContentPackStateMeta: SecurityMonitoringContentPackStateMeta_1.SecurityMonitoringContentPackStateMeta,
    SecurityMonitoringContentPackStatesResponse: SecurityMonitoringContentPackStatesResponse_1.SecurityMonitoringContentPackStatesResponse,
    SecurityMonitoringCriticalAsset: SecurityMonitoringCriticalAsset_1.SecurityMonitoringCriticalAsset,
    SecurityMonitoringCriticalAssetAttributes: SecurityMonitoringCriticalAssetAttributes_1.SecurityMonitoringCriticalAssetAttributes,
    SecurityMonitoringCriticalAssetCreateAttributes: SecurityMonitoringCriticalAssetCreateAttributes_1.SecurityMonitoringCriticalAssetCreateAttributes,
    SecurityMonitoringCriticalAssetCreateData: SecurityMonitoringCriticalAssetCreateData_1.SecurityMonitoringCriticalAssetCreateData,
    SecurityMonitoringCriticalAssetCreateRequest: SecurityMonitoringCriticalAssetCreateRequest_1.SecurityMonitoringCriticalAssetCreateRequest,
    SecurityMonitoringCriticalAssetResponse: SecurityMonitoringCriticalAssetResponse_1.SecurityMonitoringCriticalAssetResponse,
    SecurityMonitoringCriticalAssetUpdateAttributes: SecurityMonitoringCriticalAssetUpdateAttributes_1.SecurityMonitoringCriticalAssetUpdateAttributes,
    SecurityMonitoringCriticalAssetUpdateData: SecurityMonitoringCriticalAssetUpdateData_1.SecurityMonitoringCriticalAssetUpdateData,
    SecurityMonitoringCriticalAssetUpdateRequest: SecurityMonitoringCriticalAssetUpdateRequest_1.SecurityMonitoringCriticalAssetUpdateRequest,
    SecurityMonitoringCriticalAssetsResponse: SecurityMonitoringCriticalAssetsResponse_1.SecurityMonitoringCriticalAssetsResponse,
    SecurityMonitoringFilter: SecurityMonitoringFilter_1.SecurityMonitoringFilter,
    SecurityMonitoringListRulesResponse: SecurityMonitoringListRulesResponse_1.SecurityMonitoringListRulesResponse,
    SecurityMonitoringPaginatedSuppressionsResponse: SecurityMonitoringPaginatedSuppressionsResponse_1.SecurityMonitoringPaginatedSuppressionsResponse,
    SecurityMonitoringReferenceTable: SecurityMonitoringReferenceTable_1.SecurityMonitoringReferenceTable,
    SecurityMonitoringRuleAnomalyDetectionOptions: SecurityMonitoringRuleAnomalyDetectionOptions_1.SecurityMonitoringRuleAnomalyDetectionOptions,
    SecurityMonitoringRuleBulkExportAttributes: SecurityMonitoringRuleBulkExportAttributes_1.SecurityMonitoringRuleBulkExportAttributes,
    SecurityMonitoringRuleBulkExportData: SecurityMonitoringRuleBulkExportData_1.SecurityMonitoringRuleBulkExportData,
    SecurityMonitoringRuleBulkExportPayload: SecurityMonitoringRuleBulkExportPayload_1.SecurityMonitoringRuleBulkExportPayload,
    SecurityMonitoringRuleCase: SecurityMonitoringRuleCase_1.SecurityMonitoringRuleCase,
    SecurityMonitoringRuleCaseAction: SecurityMonitoringRuleCaseAction_1.SecurityMonitoringRuleCaseAction,
    SecurityMonitoringRuleCaseActionOptions: SecurityMonitoringRuleCaseActionOptions_1.SecurityMonitoringRuleCaseActionOptions,
    SecurityMonitoringRuleCaseCreate: SecurityMonitoringRuleCaseCreate_1.SecurityMonitoringRuleCaseCreate,
    SecurityMonitoringRuleConvertResponse: SecurityMonitoringRuleConvertResponse_1.SecurityMonitoringRuleConvertResponse,
    SecurityMonitoringRuleImpossibleTravelOptions: SecurityMonitoringRuleImpossibleTravelOptions_1.SecurityMonitoringRuleImpossibleTravelOptions,
    SecurityMonitoringRuleNewValueOptions: SecurityMonitoringRuleNewValueOptions_1.SecurityMonitoringRuleNewValueOptions,
    SecurityMonitoringRuleOptions: SecurityMonitoringRuleOptions_1.SecurityMonitoringRuleOptions,
    SecurityMonitoringRuleQueryPayload: SecurityMonitoringRuleQueryPayload_1.SecurityMonitoringRuleQueryPayload,
    SecurityMonitoringRuleQueryPayloadData: SecurityMonitoringRuleQueryPayloadData_1.SecurityMonitoringRuleQueryPayloadData,
    SecurityMonitoringRuleSequenceDetectionOptions: SecurityMonitoringRuleSequenceDetectionOptions_1.SecurityMonitoringRuleSequenceDetectionOptions,
    SecurityMonitoringRuleSequenceDetectionStep: SecurityMonitoringRuleSequenceDetectionStep_1.SecurityMonitoringRuleSequenceDetectionStep,
    SecurityMonitoringRuleSequenceDetectionStepTransition: SecurityMonitoringRuleSequenceDetectionStepTransition_1.SecurityMonitoringRuleSequenceDetectionStepTransition,
    SecurityMonitoringRuleTestRequest: SecurityMonitoringRuleTestRequest_1.SecurityMonitoringRuleTestRequest,
    SecurityMonitoringRuleTestResponse: SecurityMonitoringRuleTestResponse_1.SecurityMonitoringRuleTestResponse,
    SecurityMonitoringRuleThirdPartyOptions: SecurityMonitoringRuleThirdPartyOptions_1.SecurityMonitoringRuleThirdPartyOptions,
    SecurityMonitoringRuleUpdatePayload: SecurityMonitoringRuleUpdatePayload_1.SecurityMonitoringRuleUpdatePayload,
    SecurityMonitoringSchedulingOptions: SecurityMonitoringSchedulingOptions_1.SecurityMonitoringSchedulingOptions,
    SecurityMonitoringSignal: SecurityMonitoringSignal_1.SecurityMonitoringSignal,
    SecurityMonitoringSignalAssigneeUpdateAttributes: SecurityMonitoringSignalAssigneeUpdateAttributes_1.SecurityMonitoringSignalAssigneeUpdateAttributes,
    SecurityMonitoringSignalAssigneeUpdateData: SecurityMonitoringSignalAssigneeUpdateData_1.SecurityMonitoringSignalAssigneeUpdateData,
    SecurityMonitoringSignalAssigneeUpdateRequest: SecurityMonitoringSignalAssigneeUpdateRequest_1.SecurityMonitoringSignalAssigneeUpdateRequest,
    SecurityMonitoringSignalAttributes: SecurityMonitoringSignalAttributes_1.SecurityMonitoringSignalAttributes,
    SecurityMonitoringSignalIncidentsUpdateAttributes: SecurityMonitoringSignalIncidentsUpdateAttributes_1.SecurityMonitoringSignalIncidentsUpdateAttributes,
    SecurityMonitoringSignalIncidentsUpdateData: SecurityMonitoringSignalIncidentsUpdateData_1.SecurityMonitoringSignalIncidentsUpdateData,
    SecurityMonitoringSignalIncidentsUpdateRequest: SecurityMonitoringSignalIncidentsUpdateRequest_1.SecurityMonitoringSignalIncidentsUpdateRequest,
    SecurityMonitoringSignalListRequest: SecurityMonitoringSignalListRequest_1.SecurityMonitoringSignalListRequest,
    SecurityMonitoringSignalListRequestFilter: SecurityMonitoringSignalListRequestFilter_1.SecurityMonitoringSignalListRequestFilter,
    SecurityMonitoringSignalListRequestPage: SecurityMonitoringSignalListRequestPage_1.SecurityMonitoringSignalListRequestPage,
    SecurityMonitoringSignalResponse: SecurityMonitoringSignalResponse_1.SecurityMonitoringSignalResponse,
    SecurityMonitoringSignalRuleCreatePayload: SecurityMonitoringSignalRuleCreatePayload_1.SecurityMonitoringSignalRuleCreatePayload,
    SecurityMonitoringSignalRulePayload: SecurityMonitoringSignalRulePayload_1.SecurityMonitoringSignalRulePayload,
    SecurityMonitoringSignalRuleQuery: SecurityMonitoringSignalRuleQuery_1.SecurityMonitoringSignalRuleQuery,
    SecurityMonitoringSignalRuleResponse: SecurityMonitoringSignalRuleResponse_1.SecurityMonitoringSignalRuleResponse,
    SecurityMonitoringSignalRuleResponseQuery: SecurityMonitoringSignalRuleResponseQuery_1.SecurityMonitoringSignalRuleResponseQuery,
    SecurityMonitoringSignalStateUpdateAttributes: SecurityMonitoringSignalStateUpdateAttributes_1.SecurityMonitoringSignalStateUpdateAttributes,
    SecurityMonitoringSignalStateUpdateData: SecurityMonitoringSignalStateUpdateData_1.SecurityMonitoringSignalStateUpdateData,
    SecurityMonitoringSignalStateUpdateRequest: SecurityMonitoringSignalStateUpdateRequest_1.SecurityMonitoringSignalStateUpdateRequest,
    SecurityMonitoringSignalTriageAttributes: SecurityMonitoringSignalTriageAttributes_1.SecurityMonitoringSignalTriageAttributes,
    SecurityMonitoringSignalTriageUpdateData: SecurityMonitoringSignalTriageUpdateData_1.SecurityMonitoringSignalTriageUpdateData,
    SecurityMonitoringSignalTriageUpdateResponse: SecurityMonitoringSignalTriageUpdateResponse_1.SecurityMonitoringSignalTriageUpdateResponse,
    SecurityMonitoringSignalsListResponse: SecurityMonitoringSignalsListResponse_1.SecurityMonitoringSignalsListResponse,
    SecurityMonitoringSignalsListResponseLinks: SecurityMonitoringSignalsListResponseLinks_1.SecurityMonitoringSignalsListResponseLinks,
    SecurityMonitoringSignalsListResponseMeta: SecurityMonitoringSignalsListResponseMeta_1.SecurityMonitoringSignalsListResponseMeta,
    SecurityMonitoringSignalsListResponseMetaPage: SecurityMonitoringSignalsListResponseMetaPage_1.SecurityMonitoringSignalsListResponseMetaPage,
    SecurityMonitoringStandardRuleCreatePayload: SecurityMonitoringStandardRuleCreatePayload_1.SecurityMonitoringStandardRuleCreatePayload,
    SecurityMonitoringStandardRulePayload: SecurityMonitoringStandardRulePayload_1.SecurityMonitoringStandardRulePayload,
    SecurityMonitoringStandardRuleQuery: SecurityMonitoringStandardRuleQuery_1.SecurityMonitoringStandardRuleQuery,
    SecurityMonitoringStandardRuleResponse: SecurityMonitoringStandardRuleResponse_1.SecurityMonitoringStandardRuleResponse,
    SecurityMonitoringStandardRuleTestPayload: SecurityMonitoringStandardRuleTestPayload_1.SecurityMonitoringStandardRuleTestPayload,
    SecurityMonitoringSuppression: SecurityMonitoringSuppression_1.SecurityMonitoringSuppression,
    SecurityMonitoringSuppressionAttributes: SecurityMonitoringSuppressionAttributes_1.SecurityMonitoringSuppressionAttributes,
    SecurityMonitoringSuppressionCreateAttributes: SecurityMonitoringSuppressionCreateAttributes_1.SecurityMonitoringSuppressionCreateAttributes,
    SecurityMonitoringSuppressionCreateData: SecurityMonitoringSuppressionCreateData_1.SecurityMonitoringSuppressionCreateData,
    SecurityMonitoringSuppressionCreateRequest: SecurityMonitoringSuppressionCreateRequest_1.SecurityMonitoringSuppressionCreateRequest,
    SecurityMonitoringSuppressionResponse: SecurityMonitoringSuppressionResponse_1.SecurityMonitoringSuppressionResponse,
    SecurityMonitoringSuppressionUpdateAttributes: SecurityMonitoringSuppressionUpdateAttributes_1.SecurityMonitoringSuppressionUpdateAttributes,
    SecurityMonitoringSuppressionUpdateData: SecurityMonitoringSuppressionUpdateData_1.SecurityMonitoringSuppressionUpdateData,
    SecurityMonitoringSuppressionUpdateRequest: SecurityMonitoringSuppressionUpdateRequest_1.SecurityMonitoringSuppressionUpdateRequest,
    SecurityMonitoringSuppressionsMeta: SecurityMonitoringSuppressionsMeta_1.SecurityMonitoringSuppressionsMeta,
    SecurityMonitoringSuppressionsPageMeta: SecurityMonitoringSuppressionsPageMeta_1.SecurityMonitoringSuppressionsPageMeta,
    SecurityMonitoringSuppressionsResponse: SecurityMonitoringSuppressionsResponse_1.SecurityMonitoringSuppressionsResponse,
    SecurityMonitoringThirdPartyRootQuery: SecurityMonitoringThirdPartyRootQuery_1.SecurityMonitoringThirdPartyRootQuery,
    SecurityMonitoringThirdPartyRuleCase: SecurityMonitoringThirdPartyRuleCase_1.SecurityMonitoringThirdPartyRuleCase,
    SecurityMonitoringThirdPartyRuleCaseCreate: SecurityMonitoringThirdPartyRuleCaseCreate_1.SecurityMonitoringThirdPartyRuleCaseCreate,
    SecurityMonitoringTriageUser: SecurityMonitoringTriageUser_1.SecurityMonitoringTriageUser,
    SecurityMonitoringUser: SecurityMonitoringUser_1.SecurityMonitoringUser,
    SecurityTrigger: SecurityTrigger_1.SecurityTrigger,
    SecurityTriggerWrapper: SecurityTriggerWrapper_1.SecurityTriggerWrapper,
    Selectors: Selectors_1.Selectors,
    SelfServiceTriggerWrapper: SelfServiceTriggerWrapper_1.SelfServiceTriggerWrapper,
    SendSlackMessageAction: SendSlackMessageAction_1.SendSlackMessageAction,
    SendTeamsMessageAction: SendTeamsMessageAction_1.SendTeamsMessageAction,
    SensitiveDataScannerConfigRequest: SensitiveDataScannerConfigRequest_1.SensitiveDataScannerConfigRequest,
    SensitiveDataScannerConfiguration: SensitiveDataScannerConfiguration_1.SensitiveDataScannerConfiguration,
    SensitiveDataScannerConfigurationData: SensitiveDataScannerConfigurationData_1.SensitiveDataScannerConfigurationData,
    SensitiveDataScannerConfigurationRelationships: SensitiveDataScannerConfigurationRelationships_1.SensitiveDataScannerConfigurationRelationships,
    SensitiveDataScannerCreateGroupResponse: SensitiveDataScannerCreateGroupResponse_1.SensitiveDataScannerCreateGroupResponse,
    SensitiveDataScannerCreateRuleResponse: SensitiveDataScannerCreateRuleResponse_1.SensitiveDataScannerCreateRuleResponse,
    SensitiveDataScannerFilter: SensitiveDataScannerFilter_1.SensitiveDataScannerFilter,
    SensitiveDataScannerGetConfigResponse: SensitiveDataScannerGetConfigResponse_1.SensitiveDataScannerGetConfigResponse,
    SensitiveDataScannerGetConfigResponseData: SensitiveDataScannerGetConfigResponseData_1.SensitiveDataScannerGetConfigResponseData,
    SensitiveDataScannerGroup: SensitiveDataScannerGroup_1.SensitiveDataScannerGroup,
    SensitiveDataScannerGroupAttributes: SensitiveDataScannerGroupAttributes_1.SensitiveDataScannerGroupAttributes,
    SensitiveDataScannerGroupCreate: SensitiveDataScannerGroupCreate_1.SensitiveDataScannerGroupCreate,
    SensitiveDataScannerGroupCreateRequest: SensitiveDataScannerGroupCreateRequest_1.SensitiveDataScannerGroupCreateRequest,
    SensitiveDataScannerGroupData: SensitiveDataScannerGroupData_1.SensitiveDataScannerGroupData,
    SensitiveDataScannerGroupDeleteRequest: SensitiveDataScannerGroupDeleteRequest_1.SensitiveDataScannerGroupDeleteRequest,
    SensitiveDataScannerGroupDeleteResponse: SensitiveDataScannerGroupDeleteResponse_1.SensitiveDataScannerGroupDeleteResponse,
    SensitiveDataScannerGroupIncludedItem: SensitiveDataScannerGroupIncludedItem_1.SensitiveDataScannerGroupIncludedItem,
    SensitiveDataScannerGroupItem: SensitiveDataScannerGroupItem_1.SensitiveDataScannerGroupItem,
    SensitiveDataScannerGroupList: SensitiveDataScannerGroupList_1.SensitiveDataScannerGroupList,
    SensitiveDataScannerGroupRelationships: SensitiveDataScannerGroupRelationships_1.SensitiveDataScannerGroupRelationships,
    SensitiveDataScannerGroupResponse: SensitiveDataScannerGroupResponse_1.SensitiveDataScannerGroupResponse,
    SensitiveDataScannerGroupUpdate: SensitiveDataScannerGroupUpdate_1.SensitiveDataScannerGroupUpdate,
    SensitiveDataScannerGroupUpdateRequest: SensitiveDataScannerGroupUpdateRequest_1.SensitiveDataScannerGroupUpdateRequest,
    SensitiveDataScannerGroupUpdateResponse: SensitiveDataScannerGroupUpdateResponse_1.SensitiveDataScannerGroupUpdateResponse,
    SensitiveDataScannerIncludedKeywordConfiguration: SensitiveDataScannerIncludedKeywordConfiguration_1.SensitiveDataScannerIncludedKeywordConfiguration,
    SensitiveDataScannerMeta: SensitiveDataScannerMeta_1.SensitiveDataScannerMeta,
    SensitiveDataScannerMetaVersionOnly: SensitiveDataScannerMetaVersionOnly_1.SensitiveDataScannerMetaVersionOnly,
    SensitiveDataScannerReorderConfig: SensitiveDataScannerReorderConfig_1.SensitiveDataScannerReorderConfig,
    SensitiveDataScannerReorderGroupsResponse: SensitiveDataScannerReorderGroupsResponse_1.SensitiveDataScannerReorderGroupsResponse,
    SensitiveDataScannerRule: SensitiveDataScannerRule_1.SensitiveDataScannerRule,
    SensitiveDataScannerRuleAttributes: SensitiveDataScannerRuleAttributes_1.SensitiveDataScannerRuleAttributes,
    SensitiveDataScannerRuleCreate: SensitiveDataScannerRuleCreate_1.SensitiveDataScannerRuleCreate,
    SensitiveDataScannerRuleCreateRequest: SensitiveDataScannerRuleCreateRequest_1.SensitiveDataScannerRuleCreateRequest,
    SensitiveDataScannerRuleData: SensitiveDataScannerRuleData_1.SensitiveDataScannerRuleData,
    SensitiveDataScannerRuleDeleteRequest: SensitiveDataScannerRuleDeleteRequest_1.SensitiveDataScannerRuleDeleteRequest,
    SensitiveDataScannerRuleDeleteResponse: SensitiveDataScannerRuleDeleteResponse_1.SensitiveDataScannerRuleDeleteResponse,
    SensitiveDataScannerRuleIncludedItem: SensitiveDataScannerRuleIncludedItem_1.SensitiveDataScannerRuleIncludedItem,
    SensitiveDataScannerRuleRelationships: SensitiveDataScannerRuleRelationships_1.SensitiveDataScannerRuleRelationships,
    SensitiveDataScannerRuleResponse: SensitiveDataScannerRuleResponse_1.SensitiveDataScannerRuleResponse,
    SensitiveDataScannerRuleUpdate: SensitiveDataScannerRuleUpdate_1.SensitiveDataScannerRuleUpdate,
    SensitiveDataScannerRuleUpdateRequest: SensitiveDataScannerRuleUpdateRequest_1.SensitiveDataScannerRuleUpdateRequest,
    SensitiveDataScannerRuleUpdateResponse: SensitiveDataScannerRuleUpdateResponse_1.SensitiveDataScannerRuleUpdateResponse,
    SensitiveDataScannerSamplings: SensitiveDataScannerSamplings_1.SensitiveDataScannerSamplings,
    SensitiveDataScannerStandardPattern: SensitiveDataScannerStandardPattern_1.SensitiveDataScannerStandardPattern,
    SensitiveDataScannerStandardPatternAttributes: SensitiveDataScannerStandardPatternAttributes_1.SensitiveDataScannerStandardPatternAttributes,
    SensitiveDataScannerStandardPatternData: SensitiveDataScannerStandardPatternData_1.SensitiveDataScannerStandardPatternData,
    SensitiveDataScannerStandardPatternsResponseData: SensitiveDataScannerStandardPatternsResponseData_1.SensitiveDataScannerStandardPatternsResponseData,
    SensitiveDataScannerStandardPatternsResponseItem: SensitiveDataScannerStandardPatternsResponseItem_1.SensitiveDataScannerStandardPatternsResponseItem,
    SensitiveDataScannerSuppressions: SensitiveDataScannerSuppressions_1.SensitiveDataScannerSuppressions,
    SensitiveDataScannerTextReplacement: SensitiveDataScannerTextReplacement_1.SensitiveDataScannerTextReplacement,
    ServiceAccountCreateAttributes: ServiceAccountCreateAttributes_1.ServiceAccountCreateAttributes,
    ServiceAccountCreateData: ServiceAccountCreateData_1.ServiceAccountCreateData,
    ServiceAccountCreateRequest: ServiceAccountCreateRequest_1.ServiceAccountCreateRequest,
    ServiceDefinitionCreateResponse: ServiceDefinitionCreateResponse_1.ServiceDefinitionCreateResponse,
    ServiceDefinitionData: ServiceDefinitionData_1.ServiceDefinitionData,
    ServiceDefinitionDataAttributes: ServiceDefinitionDataAttributes_1.ServiceDefinitionDataAttributes,
    ServiceDefinitionGetResponse: ServiceDefinitionGetResponse_1.ServiceDefinitionGetResponse,
    ServiceDefinitionMeta: ServiceDefinitionMeta_1.ServiceDefinitionMeta,
    ServiceDefinitionMetaWarnings: ServiceDefinitionMetaWarnings_1.ServiceDefinitionMetaWarnings,
    ServiceDefinitionV1: ServiceDefinitionV1_1.ServiceDefinitionV1,
    ServiceDefinitionV1Contact: ServiceDefinitionV1Contact_1.ServiceDefinitionV1Contact,
    ServiceDefinitionV1Info: ServiceDefinitionV1Info_1.ServiceDefinitionV1Info,
    ServiceDefinitionV1Integrations: ServiceDefinitionV1Integrations_1.ServiceDefinitionV1Integrations,
    ServiceDefinitionV1Org: ServiceDefinitionV1Org_1.ServiceDefinitionV1Org,
    ServiceDefinitionV1Resource: ServiceDefinitionV1Resource_1.ServiceDefinitionV1Resource,
    ServiceDefinitionV2: ServiceDefinitionV2_1.ServiceDefinitionV2,
    ServiceDefinitionV2Doc: ServiceDefinitionV2Doc_1.ServiceDefinitionV2Doc,
    ServiceDefinitionV2Dot1: ServiceDefinitionV2Dot1_1.ServiceDefinitionV2Dot1,
    ServiceDefinitionV2Dot1Email: ServiceDefinitionV2Dot1Email_1.ServiceDefinitionV2Dot1Email,
    ServiceDefinitionV2Dot1Integrations: ServiceDefinitionV2Dot1Integrations_1.ServiceDefinitionV2Dot1Integrations,
    ServiceDefinitionV2Dot1Link: ServiceDefinitionV2Dot1Link_1.ServiceDefinitionV2Dot1Link,
    ServiceDefinitionV2Dot1MSTeams: ServiceDefinitionV2Dot1MSTeams_1.ServiceDefinitionV2Dot1MSTeams,
    ServiceDefinitionV2Dot1Opsgenie: ServiceDefinitionV2Dot1Opsgenie_1.ServiceDefinitionV2Dot1Opsgenie,
    ServiceDefinitionV2Dot1Pagerduty: ServiceDefinitionV2Dot1Pagerduty_1.ServiceDefinitionV2Dot1Pagerduty,
    ServiceDefinitionV2Dot1Slack: ServiceDefinitionV2Dot1Slack_1.ServiceDefinitionV2Dot1Slack,
    ServiceDefinitionV2Dot2: ServiceDefinitionV2Dot2_1.ServiceDefinitionV2Dot2,
    ServiceDefinitionV2Dot2Contact: ServiceDefinitionV2Dot2Contact_1.ServiceDefinitionV2Dot2Contact,
    ServiceDefinitionV2Dot2Integrations: ServiceDefinitionV2Dot2Integrations_1.ServiceDefinitionV2Dot2Integrations,
    ServiceDefinitionV2Dot2Link: ServiceDefinitionV2Dot2Link_1.ServiceDefinitionV2Dot2Link,
    ServiceDefinitionV2Dot2Opsgenie: ServiceDefinitionV2Dot2Opsgenie_1.ServiceDefinitionV2Dot2Opsgenie,
    ServiceDefinitionV2Dot2Pagerduty: ServiceDefinitionV2Dot2Pagerduty_1.ServiceDefinitionV2Dot2Pagerduty,
    ServiceDefinitionV2Email: ServiceDefinitionV2Email_1.ServiceDefinitionV2Email,
    ServiceDefinitionV2Integrations: ServiceDefinitionV2Integrations_1.ServiceDefinitionV2Integrations,
    ServiceDefinitionV2Link: ServiceDefinitionV2Link_1.ServiceDefinitionV2Link,
    ServiceDefinitionV2MSTeams: ServiceDefinitionV2MSTeams_1.ServiceDefinitionV2MSTeams,
    ServiceDefinitionV2Opsgenie: ServiceDefinitionV2Opsgenie_1.ServiceDefinitionV2Opsgenie,
    ServiceDefinitionV2Repo: ServiceDefinitionV2Repo_1.ServiceDefinitionV2Repo,
    ServiceDefinitionV2Slack: ServiceDefinitionV2Slack_1.ServiceDefinitionV2Slack,
    ServiceDefinitionsListResponse: ServiceDefinitionsListResponse_1.ServiceDefinitionsListResponse,
    ServiceList: ServiceList_1.ServiceList,
    ServiceListData: ServiceListData_1.ServiceListData,
    ServiceListDataAttributes: ServiceListDataAttributes_1.ServiceListDataAttributes,
    ServiceListDataAttributesMetadataItems: ServiceListDataAttributesMetadataItems_1.ServiceListDataAttributesMetadataItems,
    ServiceNowAssignmentGroupAttributes: ServiceNowAssignmentGroupAttributes_1.ServiceNowAssignmentGroupAttributes,
    ServiceNowAssignmentGroupData: ServiceNowAssignmentGroupData_1.ServiceNowAssignmentGroupData,
    ServiceNowAssignmentGroupsResponse: ServiceNowAssignmentGroupsResponse_1.ServiceNowAssignmentGroupsResponse,
    ServiceNowBasicAuth: ServiceNowBasicAuth_1.ServiceNowBasicAuth,
    ServiceNowBasicAuthUpdate: ServiceNowBasicAuthUpdate_1.ServiceNowBasicAuthUpdate,
    ServiceNowBusinessServiceAttributes: ServiceNowBusinessServiceAttributes_1.ServiceNowBusinessServiceAttributes,
    ServiceNowBusinessServiceData: ServiceNowBusinessServiceData_1.ServiceNowBusinessServiceData,
    ServiceNowBusinessServicesResponse: ServiceNowBusinessServicesResponse_1.ServiceNowBusinessServicesResponse,
    ServiceNowInstanceAttributes: ServiceNowInstanceAttributes_1.ServiceNowInstanceAttributes,
    ServiceNowInstanceData: ServiceNowInstanceData_1.ServiceNowInstanceData,
    ServiceNowInstancesResponse: ServiceNowInstancesResponse_1.ServiceNowInstancesResponse,
    ServiceNowIntegration: ServiceNowIntegration_1.ServiceNowIntegration,
    ServiceNowIntegrationUpdate: ServiceNowIntegrationUpdate_1.ServiceNowIntegrationUpdate,
    ServiceNowTemplateAttributes: ServiceNowTemplateAttributes_1.ServiceNowTemplateAttributes,
    ServiceNowTemplateCreateRequest: ServiceNowTemplateCreateRequest_1.ServiceNowTemplateCreateRequest,
    ServiceNowTemplateCreateRequestAttributes: ServiceNowTemplateCreateRequestAttributes_1.ServiceNowTemplateCreateRequestAttributes,
    ServiceNowTemplateCreateRequestData: ServiceNowTemplateCreateRequestData_1.ServiceNowTemplateCreateRequestData,
    ServiceNowTemplateData: ServiceNowTemplateData_1.ServiceNowTemplateData,
    ServiceNowTemplateResponse: ServiceNowTemplateResponse_1.ServiceNowTemplateResponse,
    ServiceNowTemplateUpdateRequest: ServiceNowTemplateUpdateRequest_1.ServiceNowTemplateUpdateRequest,
    ServiceNowTemplateUpdateRequestAttributes: ServiceNowTemplateUpdateRequestAttributes_1.ServiceNowTemplateUpdateRequestAttributes,
    ServiceNowTemplateUpdateRequestData: ServiceNowTemplateUpdateRequestData_1.ServiceNowTemplateUpdateRequestData,
    ServiceNowTemplatesResponse: ServiceNowTemplatesResponse_1.ServiceNowTemplatesResponse,
    ServiceNowTicket: ServiceNowTicket_1.ServiceNowTicket,
    ServiceNowTicketCreateAttributes: ServiceNowTicketCreateAttributes_1.ServiceNowTicketCreateAttributes,
    ServiceNowTicketCreateData: ServiceNowTicketCreateData_1.ServiceNowTicketCreateData,
    ServiceNowTicketCreateRequest: ServiceNowTicketCreateRequest_1.ServiceNowTicketCreateRequest,
    ServiceNowTicketResult: ServiceNowTicketResult_1.ServiceNowTicketResult,
    ServiceNowUserAttributes: ServiceNowUserAttributes_1.ServiceNowUserAttributes,
    ServiceNowUserData: ServiceNowUserData_1.ServiceNowUserData,
    ServiceNowUsersResponse: ServiceNowUsersResponse_1.ServiceNowUsersResponse,
    SessionIdArray: SessionIdArray_1.SessionIdArray,
    SessionIdData: SessionIdData_1.SessionIdData,
    Shift: Shift_1.Shift,
    ShiftData: ShiftData_1.ShiftData,
    ShiftDataAttributes: ShiftDataAttributes_1.ShiftDataAttributes,
    ShiftDataRelationships: ShiftDataRelationships_1.ShiftDataRelationships,
    ShiftDataRelationshipsUser: ShiftDataRelationshipsUser_1.ShiftDataRelationshipsUser,
    ShiftDataRelationshipsUserData: ShiftDataRelationshipsUserData_1.ShiftDataRelationshipsUserData,
    SimpleMonitorUserTemplate: SimpleMonitorUserTemplate_1.SimpleMonitorUserTemplate,
    SingleAggregatedConnectionResponseArray: SingleAggregatedConnectionResponseArray_1.SingleAggregatedConnectionResponseArray,
    SingleAggregatedConnectionResponseData: SingleAggregatedConnectionResponseData_1.SingleAggregatedConnectionResponseData,
    SingleAggregatedConnectionResponseDataAttributes: SingleAggregatedConnectionResponseDataAttributes_1.SingleAggregatedConnectionResponseDataAttributes,
    SingleAggregatedDnsResponseArray: SingleAggregatedDnsResponseArray_1.SingleAggregatedDnsResponseArray,
    SingleAggregatedDnsResponseData: SingleAggregatedDnsResponseData_1.SingleAggregatedDnsResponseData,
    SingleAggregatedDnsResponseDataAttributes: SingleAggregatedDnsResponseDataAttributes_1.SingleAggregatedDnsResponseDataAttributes,
    SingleAggregatedDnsResponseDataAttributesGroupByItems: SingleAggregatedDnsResponseDataAttributesGroupByItems_1.SingleAggregatedDnsResponseDataAttributesGroupByItems,
    SingleAggregatedDnsResponseDataAttributesMetricsItems: SingleAggregatedDnsResponseDataAttributesMetricsItems_1.SingleAggregatedDnsResponseDataAttributesMetricsItems,
    SlackIntegrationMetadata: SlackIntegrationMetadata_1.SlackIntegrationMetadata,
    SlackIntegrationMetadataChannelItem: SlackIntegrationMetadataChannelItem_1.SlackIntegrationMetadataChannelItem,
    SlackTriggerWrapper: SlackTriggerWrapper_1.SlackTriggerWrapper,
    SloReportCreateRequest: SloReportCreateRequest_1.SloReportCreateRequest,
    SloReportCreateRequestAttributes: SloReportCreateRequestAttributes_1.SloReportCreateRequestAttributes,
    SloReportCreateRequestData: SloReportCreateRequestData_1.SloReportCreateRequestData,
    SloStatusData: SloStatusData_1.SloStatusData,
    SloStatusDataAttributes: SloStatusDataAttributes_1.SloStatusDataAttributes,
    SloStatusResponse: SloStatusResponse_1.SloStatusResponse,
    Snapshot: Snapshot_1.Snapshot,
    SnapshotArray: SnapshotArray_1.SnapshotArray,
    SnapshotCreateRequest: SnapshotCreateRequest_1.SnapshotCreateRequest,
    SnapshotCreateRequestData: SnapshotCreateRequestData_1.SnapshotCreateRequestData,
    SnapshotCreateRequestDataAttributes: SnapshotCreateRequestDataAttributes_1.SnapshotCreateRequestDataAttributes,
    SnapshotData: SnapshotData_1.SnapshotData,
    SnapshotDataAttributes: SnapshotDataAttributes_1.SnapshotDataAttributes,
    SnapshotUpdateRequest: SnapshotUpdateRequest_1.SnapshotUpdateRequest,
    SnapshotUpdateRequestData: SnapshotUpdateRequestData_1.SnapshotUpdateRequestData,
    SnapshotUpdateRequestDataAttributes: SnapshotUpdateRequestDataAttributes_1.SnapshotUpdateRequestDataAttributes,
    SoftwareCatalogTriggerWrapper: SoftwareCatalogTriggerWrapper_1.SoftwareCatalogTriggerWrapper,
    Span: Span_1.Span,
    SpansAggregateBucket: SpansAggregateBucket_1.SpansAggregateBucket,
    SpansAggregateBucketAttributes: SpansAggregateBucketAttributes_1.SpansAggregateBucketAttributes,
    SpansAggregateBucketValueTimeseriesPoint: SpansAggregateBucketValueTimeseriesPoint_1.SpansAggregateBucketValueTimeseriesPoint,
    SpansAggregateData: SpansAggregateData_1.SpansAggregateData,
    SpansAggregateRequest: SpansAggregateRequest_1.SpansAggregateRequest,
    SpansAggregateRequestAttributes: SpansAggregateRequestAttributes_1.SpansAggregateRequestAttributes,
    SpansAggregateResponse: SpansAggregateResponse_1.SpansAggregateResponse,
    SpansAggregateResponseMetadata: SpansAggregateResponseMetadata_1.SpansAggregateResponseMetadata,
    SpansAggregateSort: SpansAggregateSort_1.SpansAggregateSort,
    SpansAttributes: SpansAttributes_1.SpansAttributes,
    SpansCompute: SpansCompute_1.SpansCompute,
    SpansFilter: SpansFilter_1.SpansFilter,
    SpansFilterCreate: SpansFilterCreate_1.SpansFilterCreate,
    SpansGroupBy: SpansGroupBy_1.SpansGroupBy,
    SpansGroupByHistogram: SpansGroupByHistogram_1.SpansGroupByHistogram,
    SpansListRequest: SpansListRequest_1.SpansListRequest,
    SpansListRequestAttributes: SpansListRequestAttributes_1.SpansListRequestAttributes,
    SpansListRequestData: SpansListRequestData_1.SpansListRequestData,
    SpansListRequestPage: SpansListRequestPage_1.SpansListRequestPage,
    SpansListResponse: SpansListResponse_1.SpansListResponse,
    SpansListResponseLinks: SpansListResponseLinks_1.SpansListResponseLinks,
    SpansListResponseMetadata: SpansListResponseMetadata_1.SpansListResponseMetadata,
    SpansMetricCompute: SpansMetricCompute_1.SpansMetricCompute,
    SpansMetricCreateAttributes: SpansMetricCreateAttributes_1.SpansMetricCreateAttributes,
    SpansMetricCreateData: SpansMetricCreateData_1.SpansMetricCreateData,
    SpansMetricCreateRequest: SpansMetricCreateRequest_1.SpansMetricCreateRequest,
    SpansMetricFilter: SpansMetricFilter_1.SpansMetricFilter,
    SpansMetricGroupBy: SpansMetricGroupBy_1.SpansMetricGroupBy,
    SpansMetricResponse: SpansMetricResponse_1.SpansMetricResponse,
    SpansMetricResponseAttributes: SpansMetricResponseAttributes_1.SpansMetricResponseAttributes,
    SpansMetricResponseCompute: SpansMetricResponseCompute_1.SpansMetricResponseCompute,
    SpansMetricResponseData: SpansMetricResponseData_1.SpansMetricResponseData,
    SpansMetricResponseFilter: SpansMetricResponseFilter_1.SpansMetricResponseFilter,
    SpansMetricResponseGroupBy: SpansMetricResponseGroupBy_1.SpansMetricResponseGroupBy,
    SpansMetricUpdateAttributes: SpansMetricUpdateAttributes_1.SpansMetricUpdateAttributes,
    SpansMetricUpdateCompute: SpansMetricUpdateCompute_1.SpansMetricUpdateCompute,
    SpansMetricUpdateData: SpansMetricUpdateData_1.SpansMetricUpdateData,
    SpansMetricUpdateRequest: SpansMetricUpdateRequest_1.SpansMetricUpdateRequest,
    SpansMetricsResponse: SpansMetricsResponse_1.SpansMetricsResponse,
    SpansQueryFilter: SpansQueryFilter_1.SpansQueryFilter,
    SpansQueryOptions: SpansQueryOptions_1.SpansQueryOptions,
    SpansResponseMetadataPage: SpansResponseMetadataPage_1.SpansResponseMetadataPage,
    SpansWarning: SpansWarning_1.SpansWarning,
    Spec: Spec_1.Spec,
    SplitAPIKey: SplitAPIKey_1.SplitAPIKey,
    SplitAPIKeyUpdate: SplitAPIKeyUpdate_1.SplitAPIKeyUpdate,
    SplitIntegration: SplitIntegration_1.SplitIntegration,
    SplitIntegrationUpdate: SplitIntegrationUpdate_1.SplitIntegrationUpdate,
    StateVariable: StateVariable_1.StateVariable,
    StateVariableProperties: StateVariableProperties_1.StateVariableProperties,
    StatsigAPIKey: StatsigAPIKey_1.StatsigAPIKey,
    StatsigAPIKeyUpdate: StatsigAPIKeyUpdate_1.StatsigAPIKeyUpdate,
    StatsigIntegration: StatsigIntegration_1.StatsigIntegration,
    StatsigIntegrationUpdate: StatsigIntegrationUpdate_1.StatsigIntegrationUpdate,
    StatusPage: StatusPage_1.StatusPage,
    StatusPageArray: StatusPageArray_1.StatusPageArray,
    StatusPageAsIncluded: StatusPageAsIncluded_1.StatusPageAsIncluded,
    StatusPageAsIncludedAttributes: StatusPageAsIncludedAttributes_1.StatusPageAsIncludedAttributes,
    StatusPageAsIncludedAttributesComponentsItems: StatusPageAsIncludedAttributesComponentsItems_1.StatusPageAsIncludedAttributesComponentsItems,
    StatusPageAsIncludedAttributesComponentsItemsComponentsItems: StatusPageAsIncludedAttributesComponentsItemsComponentsItems_1.StatusPageAsIncludedAttributesComponentsItemsComponentsItems,
    StatusPageAsIncludedRelationships: StatusPageAsIncludedRelationships_1.StatusPageAsIncludedRelationships,
    StatusPageAsIncludedRelationshipsCreatedByUser: StatusPageAsIncludedRelationshipsCreatedByUser_1.StatusPageAsIncludedRelationshipsCreatedByUser,
    StatusPageAsIncludedRelationshipsCreatedByUserData: StatusPageAsIncludedRelationshipsCreatedByUserData_1.StatusPageAsIncludedRelationshipsCreatedByUserData,
    StatusPageAsIncludedRelationshipsLastModifiedByUser: StatusPageAsIncludedRelationshipsLastModifiedByUser_1.StatusPageAsIncludedRelationshipsLastModifiedByUser,
    StatusPageAsIncludedRelationshipsLastModifiedByUserData: StatusPageAsIncludedRelationshipsLastModifiedByUserData_1.StatusPageAsIncludedRelationshipsLastModifiedByUserData,
    StatusPageData: StatusPageData_1.StatusPageData,
    StatusPageDataAttributes: StatusPageDataAttributes_1.StatusPageDataAttributes,
    StatusPageDataAttributesComponentsItems: StatusPageDataAttributesComponentsItems_1.StatusPageDataAttributesComponentsItems,
    StatusPageDataAttributesComponentsItemsComponentsItems: StatusPageDataAttributesComponentsItemsComponentsItems_1.StatusPageDataAttributesComponentsItemsComponentsItems,
    StatusPageDataRelationships: StatusPageDataRelationships_1.StatusPageDataRelationships,
    StatusPageDataRelationshipsCreatedByUser: StatusPageDataRelationshipsCreatedByUser_1.StatusPageDataRelationshipsCreatedByUser,
    StatusPageDataRelationshipsCreatedByUserData: StatusPageDataRelationshipsCreatedByUserData_1.StatusPageDataRelationshipsCreatedByUserData,
    StatusPageDataRelationshipsLastModifiedByUser: StatusPageDataRelationshipsLastModifiedByUser_1.StatusPageDataRelationshipsLastModifiedByUser,
    StatusPageDataRelationshipsLastModifiedByUserData: StatusPageDataRelationshipsLastModifiedByUserData_1.StatusPageDataRelationshipsLastModifiedByUserData,
    StatusPagesComponent: StatusPagesComponent_1.StatusPagesComponent,
    StatusPagesComponentArray: StatusPagesComponentArray_1.StatusPagesComponentArray,
    StatusPagesComponentData: StatusPagesComponentData_1.StatusPagesComponentData,
    StatusPagesComponentDataAttributes: StatusPagesComponentDataAttributes_1.StatusPagesComponentDataAttributes,
    StatusPagesComponentDataAttributesComponentsItems: StatusPagesComponentDataAttributesComponentsItems_1.StatusPagesComponentDataAttributesComponentsItems,
    StatusPagesComponentDataRelationships: StatusPagesComponentDataRelationships_1.StatusPagesComponentDataRelationships,
    StatusPagesComponentDataRelationshipsCreatedByUser: StatusPagesComponentDataRelationshipsCreatedByUser_1.StatusPagesComponentDataRelationshipsCreatedByUser,
    StatusPagesComponentDataRelationshipsCreatedByUserData: StatusPagesComponentDataRelationshipsCreatedByUserData_1.StatusPagesComponentDataRelationshipsCreatedByUserData,
    StatusPagesComponentDataRelationshipsGroup: StatusPagesComponentDataRelationshipsGroup_1.StatusPagesComponentDataRelationshipsGroup,
    StatusPagesComponentDataRelationshipsGroupData: StatusPagesComponentDataRelationshipsGroupData_1.StatusPagesComponentDataRelationshipsGroupData,
    StatusPagesComponentDataRelationshipsLastModifiedByUser: StatusPagesComponentDataRelationshipsLastModifiedByUser_1.StatusPagesComponentDataRelationshipsLastModifiedByUser,
    StatusPagesComponentDataRelationshipsLastModifiedByUserData: StatusPagesComponentDataRelationshipsLastModifiedByUserData_1.StatusPagesComponentDataRelationshipsLastModifiedByUserData,
    StatusPagesComponentDataRelationshipsStatusPage: StatusPagesComponentDataRelationshipsStatusPage_1.StatusPagesComponentDataRelationshipsStatusPage,
    StatusPagesComponentDataRelationshipsStatusPageData: StatusPagesComponentDataRelationshipsStatusPageData_1.StatusPagesComponentDataRelationshipsStatusPageData,
    StatusPagesComponentGroup: StatusPagesComponentGroup_1.StatusPagesComponentGroup,
    StatusPagesComponentGroupAttributes: StatusPagesComponentGroupAttributes_1.StatusPagesComponentGroupAttributes,
    StatusPagesComponentGroupAttributesComponentsItems: StatusPagesComponentGroupAttributesComponentsItems_1.StatusPagesComponentGroupAttributesComponentsItems,
    StatusPagesComponentGroupRelationships: StatusPagesComponentGroupRelationships_1.StatusPagesComponentGroupRelationships,
    StatusPagesComponentGroupRelationshipsCreatedByUser: StatusPagesComponentGroupRelationshipsCreatedByUser_1.StatusPagesComponentGroupRelationshipsCreatedByUser,
    StatusPagesComponentGroupRelationshipsCreatedByUserData: StatusPagesComponentGroupRelationshipsCreatedByUserData_1.StatusPagesComponentGroupRelationshipsCreatedByUserData,
    StatusPagesComponentGroupRelationshipsGroup: StatusPagesComponentGroupRelationshipsGroup_1.StatusPagesComponentGroupRelationshipsGroup,
    StatusPagesComponentGroupRelationshipsGroupData: StatusPagesComponentGroupRelationshipsGroupData_1.StatusPagesComponentGroupRelationshipsGroupData,
    StatusPagesComponentGroupRelationshipsLastModifiedByUser: StatusPagesComponentGroupRelationshipsLastModifiedByUser_1.StatusPagesComponentGroupRelationshipsLastModifiedByUser,
    StatusPagesComponentGroupRelationshipsLastModifiedByUserData: StatusPagesComponentGroupRelationshipsLastModifiedByUserData_1.StatusPagesComponentGroupRelationshipsLastModifiedByUserData,
    StatusPagesComponentGroupRelationshipsStatusPage: StatusPagesComponentGroupRelationshipsStatusPage_1.StatusPagesComponentGroupRelationshipsStatusPage,
    StatusPagesComponentGroupRelationshipsStatusPageData: StatusPagesComponentGroupRelationshipsStatusPageData_1.StatusPagesComponentGroupRelationshipsStatusPageData,
    StatusPagesUser: StatusPagesUser_1.StatusPagesUser,
    StatusPagesUserAttributes: StatusPagesUserAttributes_1.StatusPagesUserAttributes,
    Step: Step_1.Step,
    StepDisplay: StepDisplay_1.StepDisplay,
    StepDisplayBounds: StepDisplayBounds_1.StepDisplayBounds,
    SuiteCreateEdit: SuiteCreateEdit_1.SuiteCreateEdit,
    SuiteCreateEditRequest: SuiteCreateEditRequest_1.SuiteCreateEditRequest,
    SuppressionVersionHistory: SuppressionVersionHistory_1.SuppressionVersionHistory,
    SuppressionVersions: SuppressionVersions_1.SuppressionVersions,
    SyncProperty: SyncProperty_1.SyncProperty,
    SyncPropertyWithMapping: SyncPropertyWithMapping_1.SyncPropertyWithMapping,
    SyntheticsGlobalVariable: SyntheticsGlobalVariable_1.SyntheticsGlobalVariable,
    SyntheticsGlobalVariableAttributes: SyntheticsGlobalVariableAttributes_1.SyntheticsGlobalVariableAttributes,
    SyntheticsGlobalVariableOptions: SyntheticsGlobalVariableOptions_1.SyntheticsGlobalVariableOptions,
    SyntheticsGlobalVariableParseTestOptions: SyntheticsGlobalVariableParseTestOptions_1.SyntheticsGlobalVariableParseTestOptions,
    SyntheticsGlobalVariableTOTPParameters: SyntheticsGlobalVariableTOTPParameters_1.SyntheticsGlobalVariableTOTPParameters,
    SyntheticsGlobalVariableValue: SyntheticsGlobalVariableValue_1.SyntheticsGlobalVariableValue,
    SyntheticsNetworkAssertionJitter: SyntheticsNetworkAssertionJitter_1.SyntheticsNetworkAssertionJitter,
    SyntheticsNetworkAssertionLatency: SyntheticsNetworkAssertionLatency_1.SyntheticsNetworkAssertionLatency,
    SyntheticsNetworkAssertionMultiNetworkHop: SyntheticsNetworkAssertionMultiNetworkHop_1.SyntheticsNetworkAssertionMultiNetworkHop,
    SyntheticsNetworkAssertionPacketLossPercentage: SyntheticsNetworkAssertionPacketLossPercentage_1.SyntheticsNetworkAssertionPacketLossPercentage,
    SyntheticsNetworkTest: SyntheticsNetworkTest_1.SyntheticsNetworkTest,
    SyntheticsNetworkTestConfig: SyntheticsNetworkTestConfig_1.SyntheticsNetworkTestConfig,
    SyntheticsNetworkTestEdit: SyntheticsNetworkTestEdit_1.SyntheticsNetworkTestEdit,
    SyntheticsNetworkTestEditRequest: SyntheticsNetworkTestEditRequest_1.SyntheticsNetworkTestEditRequest,
    SyntheticsNetworkTestRequest: SyntheticsNetworkTestRequest_1.SyntheticsNetworkTestRequest,
    SyntheticsNetworkTestResponse: SyntheticsNetworkTestResponse_1.SyntheticsNetworkTestResponse,
    SyntheticsNetworkTestResponseData: SyntheticsNetworkTestResponseData_1.SyntheticsNetworkTestResponseData,
    SyntheticsSuite: SyntheticsSuite_1.SyntheticsSuite,
    SyntheticsSuiteOptions: SyntheticsSuiteOptions_1.SyntheticsSuiteOptions,
    SyntheticsSuiteResponse: SyntheticsSuiteResponse_1.SyntheticsSuiteResponse,
    SyntheticsSuiteResponseData: SyntheticsSuiteResponseData_1.SyntheticsSuiteResponseData,
    SyntheticsSuiteSearchResponse: SyntheticsSuiteSearchResponse_1.SyntheticsSuiteSearchResponse,
    SyntheticsSuiteSearchResponseData: SyntheticsSuiteSearchResponseData_1.SyntheticsSuiteSearchResponseData,
    SyntheticsSuiteSearchResponseDataAttributes: SyntheticsSuiteSearchResponseDataAttributes_1.SyntheticsSuiteSearchResponseDataAttributes,
    SyntheticsSuiteTest: SyntheticsSuiteTest_1.SyntheticsSuiteTest,
    SyntheticsTestOptions: SyntheticsTestOptions_1.SyntheticsTestOptions,
    SyntheticsTestOptionsMonitorOptions: SyntheticsTestOptionsMonitorOptions_1.SyntheticsTestOptionsMonitorOptions,
    SyntheticsTestOptionsRetry: SyntheticsTestOptionsRetry_1.SyntheticsTestOptionsRetry,
    SyntheticsTestOptionsScheduling: SyntheticsTestOptionsScheduling_1.SyntheticsTestOptionsScheduling,
    SyntheticsTestOptionsSchedulingTimeframe: SyntheticsTestOptionsSchedulingTimeframe_1.SyntheticsTestOptionsSchedulingTimeframe,
    SyntheticsVariableParser: SyntheticsVariableParser_1.SyntheticsVariableParser,
    TableResultV2: TableResultV2_1.TableResultV2,
    TableResultV2Array: TableResultV2Array_1.TableResultV2Array,
    TableResultV2Data: TableResultV2Data_1.TableResultV2Data,
    TableResultV2DataAttributes: TableResultV2DataAttributes_1.TableResultV2DataAttributes,
    TableResultV2DataAttributesFileMetadata: TableResultV2DataAttributesFileMetadata_1.TableResultV2DataAttributesFileMetadata,
    TableResultV2DataAttributesFileMetadataOneOfAccessDetails: TableResultV2DataAttributesFileMetadataOneOfAccessDetails_1.TableResultV2DataAttributesFileMetadataOneOfAccessDetails,
    TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail: TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail_1.TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail,
    TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAzureDetail: TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAzureDetail_1.TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAzureDetail,
    TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail: TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail_1.TableResultV2DataAttributesFileMetadataOneOfAccessDetailsGcpDetail,
    TableResultV2DataAttributesSchema: TableResultV2DataAttributesSchema_1.TableResultV2DataAttributesSchema,
    TableResultV2DataAttributesSchemaFieldsItems: TableResultV2DataAttributesSchemaFieldsItems_1.TableResultV2DataAttributesSchemaFieldsItems,
    TableRowResourceArray: TableRowResourceArray_1.TableRowResourceArray,
    TableRowResourceData: TableRowResourceData_1.TableRowResourceData,
    TableRowResourceDataAttributes: TableRowResourceDataAttributes_1.TableRowResourceDataAttributes,
    Team: Team_1.Team,
    TeamAttributes: TeamAttributes_1.TeamAttributes,
    TeamConnection: TeamConnection_1.TeamConnection,
    TeamConnectionAttributes: TeamConnectionAttributes_1.TeamConnectionAttributes,
    TeamConnectionCreateData: TeamConnectionCreateData_1.TeamConnectionCreateData,
    TeamConnectionCreateRequest: TeamConnectionCreateRequest_1.TeamConnectionCreateRequest,
    TeamConnectionDeleteRequest: TeamConnectionDeleteRequest_1.TeamConnectionDeleteRequest,
    TeamConnectionDeleteRequestDataItem: TeamConnectionDeleteRequestDataItem_1.TeamConnectionDeleteRequestDataItem,
    TeamConnectionRelationships: TeamConnectionRelationships_1.TeamConnectionRelationships,
    TeamConnectionsResponse: TeamConnectionsResponse_1.TeamConnectionsResponse,
    TeamCreate: TeamCreate_1.TeamCreate,
    TeamCreateAttributes: TeamCreateAttributes_1.TeamCreateAttributes,
    TeamCreateRelationships: TeamCreateRelationships_1.TeamCreateRelationships,
    TeamCreateRequest: TeamCreateRequest_1.TeamCreateRequest,
    TeamHierarchyLink: TeamHierarchyLink_1.TeamHierarchyLink,
    TeamHierarchyLinkAttributes: TeamHierarchyLinkAttributes_1.TeamHierarchyLinkAttributes,
    TeamHierarchyLinkCreate: TeamHierarchyLinkCreate_1.TeamHierarchyLinkCreate,
    TeamHierarchyLinkCreateRelationships: TeamHierarchyLinkCreateRelationships_1.TeamHierarchyLinkCreateRelationships,
    TeamHierarchyLinkCreateRequest: TeamHierarchyLinkCreateRequest_1.TeamHierarchyLinkCreateRequest,
    TeamHierarchyLinkCreateTeam: TeamHierarchyLinkCreateTeam_1.TeamHierarchyLinkCreateTeam,
    TeamHierarchyLinkCreateTeamRelationship: TeamHierarchyLinkCreateTeamRelationship_1.TeamHierarchyLinkCreateTeamRelationship,
    TeamHierarchyLinkRelationships: TeamHierarchyLinkRelationships_1.TeamHierarchyLinkRelationships,
    TeamHierarchyLinkResponse: TeamHierarchyLinkResponse_1.TeamHierarchyLinkResponse,
    TeamHierarchyLinkTeam: TeamHierarchyLinkTeam_1.TeamHierarchyLinkTeam,
    TeamHierarchyLinkTeamAttributes: TeamHierarchyLinkTeamAttributes_1.TeamHierarchyLinkTeamAttributes,
    TeamHierarchyLinkTeamRelationship: TeamHierarchyLinkTeamRelationship_1.TeamHierarchyLinkTeamRelationship,
    TeamHierarchyLinksResponse: TeamHierarchyLinksResponse_1.TeamHierarchyLinksResponse,
    TeamLink: TeamLink_1.TeamLink,
    TeamLinkAttributes: TeamLinkAttributes_1.TeamLinkAttributes,
    TeamLinkCreate: TeamLinkCreate_1.TeamLinkCreate,
    TeamLinkCreateRequest: TeamLinkCreateRequest_1.TeamLinkCreateRequest,
    TeamLinkResponse: TeamLinkResponse_1.TeamLinkResponse,
    TeamLinksResponse: TeamLinksResponse_1.TeamLinksResponse,
    TeamNotificationRule: TeamNotificationRule_1.TeamNotificationRule,
    TeamNotificationRuleAttributes: TeamNotificationRuleAttributes_1.TeamNotificationRuleAttributes,
    TeamNotificationRuleAttributesEmail: TeamNotificationRuleAttributesEmail_1.TeamNotificationRuleAttributesEmail,
    TeamNotificationRuleAttributesMsTeams: TeamNotificationRuleAttributesMsTeams_1.TeamNotificationRuleAttributesMsTeams,
    TeamNotificationRuleAttributesPagerduty: TeamNotificationRuleAttributesPagerduty_1.TeamNotificationRuleAttributesPagerduty,
    TeamNotificationRuleAttributesSlack: TeamNotificationRuleAttributesSlack_1.TeamNotificationRuleAttributesSlack,
    TeamNotificationRuleRequest: TeamNotificationRuleRequest_1.TeamNotificationRuleRequest,
    TeamNotificationRuleResponse: TeamNotificationRuleResponse_1.TeamNotificationRuleResponse,
    TeamNotificationRulesResponse: TeamNotificationRulesResponse_1.TeamNotificationRulesResponse,
    TeamNotificationRulesResponseMeta: TeamNotificationRulesResponseMeta_1.TeamNotificationRulesResponseMeta,
    TeamNotificationRulesResponseMetaPage: TeamNotificationRulesResponseMetaPage_1.TeamNotificationRulesResponseMetaPage,
    TeamOnCallResponders: TeamOnCallResponders_1.TeamOnCallResponders,
    TeamOnCallRespondersData: TeamOnCallRespondersData_1.TeamOnCallRespondersData,
    TeamOnCallRespondersDataRelationships: TeamOnCallRespondersDataRelationships_1.TeamOnCallRespondersDataRelationships,
    TeamOnCallRespondersDataRelationshipsEscalations: TeamOnCallRespondersDataRelationshipsEscalations_1.TeamOnCallRespondersDataRelationshipsEscalations,
    TeamOnCallRespondersDataRelationshipsEscalationsDataItems: TeamOnCallRespondersDataRelationshipsEscalationsDataItems_1.TeamOnCallRespondersDataRelationshipsEscalationsDataItems,
    TeamOnCallRespondersDataRelationshipsResponders: TeamOnCallRespondersDataRelationshipsResponders_1.TeamOnCallRespondersDataRelationshipsResponders,
    TeamOnCallRespondersDataRelationshipsRespondersDataItems: TeamOnCallRespondersDataRelationshipsRespondersDataItems_1.TeamOnCallRespondersDataRelationshipsRespondersDataItems,
    TeamPermissionSetting: TeamPermissionSetting_1.TeamPermissionSetting,
    TeamPermissionSettingAttributes: TeamPermissionSettingAttributes_1.TeamPermissionSettingAttributes,
    TeamPermissionSettingResponse: TeamPermissionSettingResponse_1.TeamPermissionSettingResponse,
    TeamPermissionSettingUpdate: TeamPermissionSettingUpdate_1.TeamPermissionSettingUpdate,
    TeamPermissionSettingUpdateAttributes: TeamPermissionSettingUpdateAttributes_1.TeamPermissionSettingUpdateAttributes,
    TeamPermissionSettingUpdateRequest: TeamPermissionSettingUpdateRequest_1.TeamPermissionSettingUpdateRequest,
    TeamPermissionSettingsResponse: TeamPermissionSettingsResponse_1.TeamPermissionSettingsResponse,
    TeamRef: TeamRef_1.TeamRef,
    TeamRefData: TeamRefData_1.TeamRefData,
    TeamReference: TeamReference_1.TeamReference,
    TeamReferenceAttributes: TeamReferenceAttributes_1.TeamReferenceAttributes,
    TeamRelationships: TeamRelationships_1.TeamRelationships,
    TeamRelationshipsLinks: TeamRelationshipsLinks_1.TeamRelationshipsLinks,
    TeamResponse: TeamResponse_1.TeamResponse,
    TeamRoutingRules: TeamRoutingRules_1.TeamRoutingRules,
    TeamRoutingRulesData: TeamRoutingRulesData_1.TeamRoutingRulesData,
    TeamRoutingRulesDataRelationships: TeamRoutingRulesDataRelationships_1.TeamRoutingRulesDataRelationships,
    TeamRoutingRulesDataRelationshipsRules: TeamRoutingRulesDataRelationshipsRules_1.TeamRoutingRulesDataRelationshipsRules,
    TeamRoutingRulesDataRelationshipsRulesDataItems: TeamRoutingRulesDataRelationshipsRulesDataItems_1.TeamRoutingRulesDataRelationshipsRulesDataItems,
    TeamRoutingRulesRequest: TeamRoutingRulesRequest_1.TeamRoutingRulesRequest,
    TeamRoutingRulesRequestData: TeamRoutingRulesRequestData_1.TeamRoutingRulesRequestData,
    TeamRoutingRulesRequestDataAttributes: TeamRoutingRulesRequestDataAttributes_1.TeamRoutingRulesRequestDataAttributes,
    TeamRoutingRulesRequestRule: TeamRoutingRulesRequestRule_1.TeamRoutingRulesRequestRule,
    TeamSyncAttributes: TeamSyncAttributes_1.TeamSyncAttributes,
    TeamSyncData: TeamSyncData_1.TeamSyncData,
    TeamSyncRequest: TeamSyncRequest_1.TeamSyncRequest,
    TeamSyncResponse: TeamSyncResponse_1.TeamSyncResponse,
    TeamTarget: TeamTarget_1.TeamTarget,
    TeamUpdate: TeamUpdate_1.TeamUpdate,
    TeamUpdateAttributes: TeamUpdateAttributes_1.TeamUpdateAttributes,
    TeamUpdateRelationships: TeamUpdateRelationships_1.TeamUpdateRelationships,
    TeamUpdateRequest: TeamUpdateRequest_1.TeamUpdateRequest,
    TeamsHierarchyLinksResponseLinks: TeamsHierarchyLinksResponseLinks_1.TeamsHierarchyLinksResponseLinks,
    TeamsHierarchyLinksResponseMeta: TeamsHierarchyLinksResponseMeta_1.TeamsHierarchyLinksResponseMeta,
    TeamsHierarchyLinksResponseMetaPage: TeamsHierarchyLinksResponseMetaPage_1.TeamsHierarchyLinksResponseMetaPage,
    TeamsResponse: TeamsResponse_1.TeamsResponse,
    TeamsResponseLinks: TeamsResponseLinks_1.TeamsResponseLinks,
    TeamsResponseMeta: TeamsResponseMeta_1.TeamsResponseMeta,
    TeamsResponseMetaPagination: TeamsResponseMetaPagination_1.TeamsResponseMetaPagination,
    TenancyConfig: TenancyConfig_1.TenancyConfig,
    TenancyConfigData: TenancyConfigData_1.TenancyConfigData,
    TenancyConfigDataAttributes: TenancyConfigDataAttributes_1.TenancyConfigDataAttributes,
    TenancyConfigDataAttributesLogsConfig: TenancyConfigDataAttributesLogsConfig_1.TenancyConfigDataAttributesLogsConfig,
    TenancyConfigDataAttributesMetricsConfig: TenancyConfigDataAttributesMetricsConfig_1.TenancyConfigDataAttributesMetricsConfig,
    TenancyConfigDataAttributesRegionsConfig: TenancyConfigDataAttributesRegionsConfig_1.TenancyConfigDataAttributesRegionsConfig,
    TenancyConfigList: TenancyConfigList_1.TenancyConfigList,
    TenancyProductsData: TenancyProductsData_1.TenancyProductsData,
    TenancyProductsDataAttributes: TenancyProductsDataAttributes_1.TenancyProductsDataAttributes,
    TenancyProductsDataAttributesProductsItems: TenancyProductsDataAttributesProductsItems_1.TenancyProductsDataAttributesProductsItems,
    TenancyProductsList: TenancyProductsList_1.TenancyProductsList,
    ThreatHuntingJobListMeta: ThreatHuntingJobListMeta_1.ThreatHuntingJobListMeta,
    ThreatHuntingJobOptions: ThreatHuntingJobOptions_1.ThreatHuntingJobOptions,
    ThreatHuntingJobQuery: ThreatHuntingJobQuery_1.ThreatHuntingJobQuery,
    ThreatHuntingJobResponse: ThreatHuntingJobResponse_1.ThreatHuntingJobResponse,
    ThreatHuntingJobResponseAttributes: ThreatHuntingJobResponseAttributes_1.ThreatHuntingJobResponseAttributes,
    ThreatHuntingJobResponseData: ThreatHuntingJobResponseData_1.ThreatHuntingJobResponseData,
    TimeRestriction: TimeRestriction_1.TimeRestriction,
    TimeRestrictions: TimeRestrictions_1.TimeRestrictions,
    TimelineCell: TimelineCell_1.TimelineCell,
    TimelineCellAuthorUser: TimelineCellAuthorUser_1.TimelineCellAuthorUser,
    TimelineCellAuthorUserContent: TimelineCellAuthorUserContent_1.TimelineCellAuthorUserContent,
    TimelineCellContentComment: TimelineCellContentComment_1.TimelineCellContentComment,
    TimelineCellResource: TimelineCellResource_1.TimelineCellResource,
    TimelineResponse: TimelineResponse_1.TimelineResponse,
    TimeseriesFormulaQueryRequest: TimeseriesFormulaQueryRequest_1.TimeseriesFormulaQueryRequest,
    TimeseriesFormulaQueryResponse: TimeseriesFormulaQueryResponse_1.TimeseriesFormulaQueryResponse,
    TimeseriesFormulaRequest: TimeseriesFormulaRequest_1.TimeseriesFormulaRequest,
    TimeseriesFormulaRequestAttributes: TimeseriesFormulaRequestAttributes_1.TimeseriesFormulaRequestAttributes,
    TimeseriesResponse: TimeseriesResponse_1.TimeseriesResponse,
    TimeseriesResponseAttributes: TimeseriesResponseAttributes_1.TimeseriesResponseAttributes,
    TimeseriesResponseSeries: TimeseriesResponseSeries_1.TimeseriesResponseSeries,
    TriggerRateLimit: TriggerRateLimit_1.TriggerRateLimit,
    UCConfigPair: UCConfigPair_1.UCConfigPair,
    UCConfigPairData: UCConfigPairData_1.UCConfigPairData,
    UCConfigPairDataAttributes: UCConfigPairDataAttributes_1.UCConfigPairDataAttributes,
    UCConfigPairDataAttributesConfigsItems: UCConfigPairDataAttributesConfigsItems_1.UCConfigPairDataAttributesConfigsItems,
    UnassignSeatsUserRequest: UnassignSeatsUserRequest_1.UnassignSeatsUserRequest,
    UnassignSeatsUserRequestData: UnassignSeatsUserRequestData_1.UnassignSeatsUserRequestData,
    UnassignSeatsUserRequestDataAttributes: UnassignSeatsUserRequestDataAttributes_1.UnassignSeatsUserRequestDataAttributes,
    Unit: Unit_1.Unit,
    UnpublishAppResponse: UnpublishAppResponse_1.UnpublishAppResponse,
    UpdateActionConnectionRequest: UpdateActionConnectionRequest_1.UpdateActionConnectionRequest,
    UpdateActionConnectionResponse: UpdateActionConnectionResponse_1.UpdateActionConnectionResponse,
    UpdateAppRequest: UpdateAppRequest_1.UpdateAppRequest,
    UpdateAppRequestData: UpdateAppRequestData_1.UpdateAppRequestData,
    UpdateAppRequestDataAttributes: UpdateAppRequestDataAttributes_1.UpdateAppRequestDataAttributes,
    UpdateAppResponse: UpdateAppResponse_1.UpdateAppResponse,
    UpdateAppResponseData: UpdateAppResponseData_1.UpdateAppResponseData,
    UpdateAppResponseDataAttributes: UpdateAppResponseDataAttributes_1.UpdateAppResponseDataAttributes,
    UpdateAppsDatastoreItemRequest: UpdateAppsDatastoreItemRequest_1.UpdateAppsDatastoreItemRequest,
    UpdateAppsDatastoreItemRequestData: UpdateAppsDatastoreItemRequestData_1.UpdateAppsDatastoreItemRequestData,
    UpdateAppsDatastoreItemRequestDataAttributes: UpdateAppsDatastoreItemRequestDataAttributes_1.UpdateAppsDatastoreItemRequestDataAttributes,
    UpdateAppsDatastoreItemRequestDataAttributesItemChanges: UpdateAppsDatastoreItemRequestDataAttributesItemChanges_1.UpdateAppsDatastoreItemRequestDataAttributesItemChanges,
    UpdateAppsDatastoreRequest: UpdateAppsDatastoreRequest_1.UpdateAppsDatastoreRequest,
    UpdateAppsDatastoreRequestData: UpdateAppsDatastoreRequestData_1.UpdateAppsDatastoreRequestData,
    UpdateAppsDatastoreRequestDataAttributes: UpdateAppsDatastoreRequestDataAttributes_1.UpdateAppsDatastoreRequestDataAttributes,
    UpdateConnectionRequest: UpdateConnectionRequest_1.UpdateConnectionRequest,
    UpdateConnectionRequestData: UpdateConnectionRequestData_1.UpdateConnectionRequestData,
    UpdateConnectionRequestDataAttributes: UpdateConnectionRequestDataAttributes_1.UpdateConnectionRequestDataAttributes,
    UpdateConnectionRequestDataAttributesFieldsToUpdateItems: UpdateConnectionRequestDataAttributesFieldsToUpdateItems_1.UpdateConnectionRequestDataAttributesFieldsToUpdateItems,
    UpdateCustomFrameworkRequest: UpdateCustomFrameworkRequest_1.UpdateCustomFrameworkRequest,
    UpdateCustomFrameworkResponse: UpdateCustomFrameworkResponse_1.UpdateCustomFrameworkResponse,
    UpdateDeploymentGateParams: UpdateDeploymentGateParams_1.UpdateDeploymentGateParams,
    UpdateDeploymentGateParamsData: UpdateDeploymentGateParamsData_1.UpdateDeploymentGateParamsData,
    UpdateDeploymentGateParamsDataAttributes: UpdateDeploymentGateParamsDataAttributes_1.UpdateDeploymentGateParamsDataAttributes,
    UpdateDeploymentRuleParams: UpdateDeploymentRuleParams_1.UpdateDeploymentRuleParams,
    UpdateDeploymentRuleParamsData: UpdateDeploymentRuleParamsData_1.UpdateDeploymentRuleParamsData,
    UpdateDeploymentRuleParamsDataAttributes: UpdateDeploymentRuleParamsDataAttributes_1.UpdateDeploymentRuleParamsDataAttributes,
    UpdateFlakyTestsRequest: UpdateFlakyTestsRequest_1.UpdateFlakyTestsRequest,
    UpdateFlakyTestsRequestAttributes: UpdateFlakyTestsRequestAttributes_1.UpdateFlakyTestsRequestAttributes,
    UpdateFlakyTestsRequestData: UpdateFlakyTestsRequestData_1.UpdateFlakyTestsRequestData,
    UpdateFlakyTestsRequestTest: UpdateFlakyTestsRequestTest_1.UpdateFlakyTestsRequestTest,
    UpdateFlakyTestsResponse: UpdateFlakyTestsResponse_1.UpdateFlakyTestsResponse,
    UpdateFlakyTestsResponseAttributes: UpdateFlakyTestsResponseAttributes_1.UpdateFlakyTestsResponseAttributes,
    UpdateFlakyTestsResponseData: UpdateFlakyTestsResponseData_1.UpdateFlakyTestsResponseData,
    UpdateFlakyTestsResponseResult: UpdateFlakyTestsResponseResult_1.UpdateFlakyTestsResponseResult,
    UpdateOnCallNotificationRuleRequest: UpdateOnCallNotificationRuleRequest_1.UpdateOnCallNotificationRuleRequest,
    UpdateOnCallNotificationRuleRequestAttributes: UpdateOnCallNotificationRuleRequestAttributes_1.UpdateOnCallNotificationRuleRequestAttributes,
    UpdateOnCallNotificationRuleRequestData: UpdateOnCallNotificationRuleRequestData_1.UpdateOnCallNotificationRuleRequestData,
    UpdateOpenAPIResponse: UpdateOpenAPIResponse_1.UpdateOpenAPIResponse,
    UpdateOpenAPIResponseAttributes: UpdateOpenAPIResponseAttributes_1.UpdateOpenAPIResponseAttributes,
    UpdateOpenAPIResponseData: UpdateOpenAPIResponseData_1.UpdateOpenAPIResponseData,
    UpdateOutcomesAsyncAttributes: UpdateOutcomesAsyncAttributes_1.UpdateOutcomesAsyncAttributes,
    UpdateOutcomesAsyncRequest: UpdateOutcomesAsyncRequest_1.UpdateOutcomesAsyncRequest,
    UpdateOutcomesAsyncRequestData: UpdateOutcomesAsyncRequestData_1.UpdateOutcomesAsyncRequestData,
    UpdateOutcomesAsyncRequestItem: UpdateOutcomesAsyncRequestItem_1.UpdateOutcomesAsyncRequestItem,
    UpdateResourceEvaluationFiltersRequest: UpdateResourceEvaluationFiltersRequest_1.UpdateResourceEvaluationFiltersRequest,
    UpdateResourceEvaluationFiltersRequestData: UpdateResourceEvaluationFiltersRequestData_1.UpdateResourceEvaluationFiltersRequestData,
    UpdateResourceEvaluationFiltersResponse: UpdateResourceEvaluationFiltersResponse_1.UpdateResourceEvaluationFiltersResponse,
    UpdateResourceEvaluationFiltersResponseData: UpdateResourceEvaluationFiltersResponseData_1.UpdateResourceEvaluationFiltersResponseData,
    UpdateRuleRequest: UpdateRuleRequest_1.UpdateRuleRequest,
    UpdateRuleRequestData: UpdateRuleRequestData_1.UpdateRuleRequestData,
    UpdateRuleResponse: UpdateRuleResponse_1.UpdateRuleResponse,
    UpdateRuleResponseData: UpdateRuleResponseData_1.UpdateRuleResponseData,
    UpdateRulesetRequest: UpdateRulesetRequest_1.UpdateRulesetRequest,
    UpdateRulesetRequestData: UpdateRulesetRequestData_1.UpdateRulesetRequestData,
    UpdateRulesetRequestDataAttributes: UpdateRulesetRequestDataAttributes_1.UpdateRulesetRequestDataAttributes,
    UpdateRulesetRequestDataAttributesRulesItems: UpdateRulesetRequestDataAttributesRulesItems_1.UpdateRulesetRequestDataAttributesRulesItems,
    UpdateRulesetRequestDataAttributesRulesItemsQuery: UpdateRulesetRequestDataAttributesRulesItemsQuery_1.UpdateRulesetRequestDataAttributesRulesItemsQuery,
    UpdateRulesetRequestDataAttributesRulesItemsQueryAddition: UpdateRulesetRequestDataAttributesRulesItemsQueryAddition_1.UpdateRulesetRequestDataAttributesRulesItemsQueryAddition,
    UpdateRulesetRequestDataAttributesRulesItemsReferenceTable: UpdateRulesetRequestDataAttributesRulesItemsReferenceTable_1.UpdateRulesetRequestDataAttributesRulesItemsReferenceTable,
    UpdateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems: UpdateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems_1.UpdateRulesetRequestDataAttributesRulesItemsReferenceTableFieldPairsItems,
    UpdateTenancyConfigData: UpdateTenancyConfigData_1.UpdateTenancyConfigData,
    UpdateTenancyConfigDataAttributes: UpdateTenancyConfigDataAttributes_1.UpdateTenancyConfigDataAttributes,
    UpdateTenancyConfigDataAttributesAuthCredentials: UpdateTenancyConfigDataAttributesAuthCredentials_1.UpdateTenancyConfigDataAttributesAuthCredentials,
    UpdateTenancyConfigDataAttributesLogsConfig: UpdateTenancyConfigDataAttributesLogsConfig_1.UpdateTenancyConfigDataAttributesLogsConfig,
    UpdateTenancyConfigDataAttributesMetricsConfig: UpdateTenancyConfigDataAttributesMetricsConfig_1.UpdateTenancyConfigDataAttributesMetricsConfig,
    UpdateTenancyConfigDataAttributesRegionsConfig: UpdateTenancyConfigDataAttributesRegionsConfig_1.UpdateTenancyConfigDataAttributesRegionsConfig,
    UpdateTenancyConfigRequest: UpdateTenancyConfigRequest_1.UpdateTenancyConfigRequest,
    UpdateWorkflowRequest: UpdateWorkflowRequest_1.UpdateWorkflowRequest,
    UpdateWorkflowResponse: UpdateWorkflowResponse_1.UpdateWorkflowResponse,
    UpsertCatalogEntityResponse: UpsertCatalogEntityResponse_1.UpsertCatalogEntityResponse,
    UpsertCatalogKindResponse: UpsertCatalogKindResponse_1.UpsertCatalogKindResponse,
    UrlParam: UrlParam_1.UrlParam,
    UrlParamUpdate: UrlParamUpdate_1.UrlParamUpdate,
    UsageApplicationSecurityMonitoringResponse: UsageApplicationSecurityMonitoringResponse_1.UsageApplicationSecurityMonitoringResponse,
    UsageAttributesObject: UsageAttributesObject_1.UsageAttributesObject,
    UsageAttributionTypesAttributes: UsageAttributionTypesAttributes_1.UsageAttributionTypesAttributes,
    UsageAttributionTypesBody: UsageAttributionTypesBody_1.UsageAttributionTypesBody,
    UsageAttributionTypesResponse: UsageAttributionTypesResponse_1.UsageAttributionTypesResponse,
    UsageDataObject: UsageDataObject_1.UsageDataObject,
    UsageLambdaTracedInvocationsResponse: UsageLambdaTracedInvocationsResponse_1.UsageLambdaTracedInvocationsResponse,
    UsageObservabilityPipelinesResponse: UsageObservabilityPipelinesResponse_1.UsageObservabilityPipelinesResponse,
    UsageTimeSeriesObject: UsageTimeSeriesObject_1.UsageTimeSeriesObject,
    User: User_1.User,
    UserAttributes: UserAttributes_1.UserAttributes,
    UserCreateAttributes: UserCreateAttributes_1.UserCreateAttributes,
    UserCreateData: UserCreateData_1.UserCreateData,
    UserCreateRequest: UserCreateRequest_1.UserCreateRequest,
    UserInvitationData: UserInvitationData_1.UserInvitationData,
    UserInvitationDataAttributes: UserInvitationDataAttributes_1.UserInvitationDataAttributes,
    UserInvitationRelationships: UserInvitationRelationships_1.UserInvitationRelationships,
    UserInvitationResponse: UserInvitationResponse_1.UserInvitationResponse,
    UserInvitationResponseData: UserInvitationResponseData_1.UserInvitationResponseData,
    UserInvitationsRequest: UserInvitationsRequest_1.UserInvitationsRequest,
    UserInvitationsResponse: UserInvitationsResponse_1.UserInvitationsResponse,
    UserRelationshipData: UserRelationshipData_1.UserRelationshipData,
    UserRelationships: UserRelationships_1.UserRelationships,
    UserResponse: UserResponse_1.UserResponse,
    UserResponseRelationships: UserResponseRelationships_1.UserResponseRelationships,
    UserTarget: UserTarget_1.UserTarget,
    UserTeam: UserTeam_1.UserTeam,
    UserTeamAttributes: UserTeamAttributes_1.UserTeamAttributes,
    UserTeamCreate: UserTeamCreate_1.UserTeamCreate,
    UserTeamPermission: UserTeamPermission_1.UserTeamPermission,
    UserTeamPermissionAttributes: UserTeamPermissionAttributes_1.UserTeamPermissionAttributes,
    UserTeamRelationships: UserTeamRelationships_1.UserTeamRelationships,
    UserTeamRequest: UserTeamRequest_1.UserTeamRequest,
    UserTeamResponse: UserTeamResponse_1.UserTeamResponse,
    UserTeamUpdate: UserTeamUpdate_1.UserTeamUpdate,
    UserTeamUpdateRequest: UserTeamUpdateRequest_1.UserTeamUpdateRequest,
    UserTeamsResponse: UserTeamsResponse_1.UserTeamsResponse,
    UserUpdateAttributes: UserUpdateAttributes_1.UserUpdateAttributes,
    UserUpdateData: UserUpdateData_1.UserUpdateData,
    UserUpdateRequest: UserUpdateRequest_1.UserUpdateRequest,
    UsersRelationship: UsersRelationship_1.UsersRelationship,
    UsersResponse: UsersResponse_1.UsersResponse,
    V2Event: V2Event_1.V2Event,
    V2EventAttributes: V2EventAttributes_1.V2EventAttributes,
    V2EventResponse: V2EventResponse_1.V2EventResponse,
    ValidationError: ValidationError_1.ValidationError,
    ValidationErrorMeta: ValidationErrorMeta_1.ValidationErrorMeta,
    ValidationResponse: ValidationResponse_1.ValidationResponse,
    VersionHistoryUpdate: VersionHistoryUpdate_1.VersionHistoryUpdate,
    ViewershipHistorySessionArray: ViewershipHistorySessionArray_1.ViewershipHistorySessionArray,
    ViewershipHistorySessionData: ViewershipHistorySessionData_1.ViewershipHistorySessionData,
    ViewershipHistorySessionDataAttributes: ViewershipHistorySessionDataAttributes_1.ViewershipHistorySessionDataAttributes,
    VirusTotalAPIKey: VirusTotalAPIKey_1.VirusTotalAPIKey,
    VirusTotalAPIKeyUpdate: VirusTotalAPIKeyUpdate_1.VirusTotalAPIKeyUpdate,
    VirusTotalIntegration: VirusTotalIntegration_1.VirusTotalIntegration,
    VirusTotalIntegrationUpdate: VirusTotalIntegrationUpdate_1.VirusTotalIntegrationUpdate,
    Vulnerability: Vulnerability_1.Vulnerability,
    VulnerabilityAdvisory: VulnerabilityAdvisory_1.VulnerabilityAdvisory,
    VulnerabilityAttributes: VulnerabilityAttributes_1.VulnerabilityAttributes,
    VulnerabilityCvss: VulnerabilityCvss_1.VulnerabilityCvss,
    VulnerabilityDependencyLocations: VulnerabilityDependencyLocations_1.VulnerabilityDependencyLocations,
    VulnerabilityRelationships: VulnerabilityRelationships_1.VulnerabilityRelationships,
    VulnerabilityRelationshipsAffects: VulnerabilityRelationshipsAffects_1.VulnerabilityRelationshipsAffects,
    VulnerabilityRelationshipsAffectsData: VulnerabilityRelationshipsAffectsData_1.VulnerabilityRelationshipsAffectsData,
    VulnerabilityRisks: VulnerabilityRisks_1.VulnerabilityRisks,
    Watch: Watch_1.Watch,
    WatchData: WatchData_1.WatchData,
    WatchDataAttributes: WatchDataAttributes_1.WatchDataAttributes,
    WatcherArray: WatcherArray_1.WatcherArray,
    WatcherData: WatcherData_1.WatcherData,
    WatcherDataAttributes: WatcherDataAttributes_1.WatcherDataAttributes,
    WorkflowData: WorkflowData_1.WorkflowData,
    WorkflowDataAttributes: WorkflowDataAttributes_1.WorkflowDataAttributes,
    WorkflowDataRelationships: WorkflowDataRelationships_1.WorkflowDataRelationships,
    WorkflowDataUpdate: WorkflowDataUpdate_1.WorkflowDataUpdate,
    WorkflowDataUpdateAttributes: WorkflowDataUpdateAttributes_1.WorkflowDataUpdateAttributes,
    WorkflowInstanceCreateMeta: WorkflowInstanceCreateMeta_1.WorkflowInstanceCreateMeta,
    WorkflowInstanceCreateRequest: WorkflowInstanceCreateRequest_1.WorkflowInstanceCreateRequest,
    WorkflowInstanceCreateResponse: WorkflowInstanceCreateResponse_1.WorkflowInstanceCreateResponse,
    WorkflowInstanceCreateResponseData: WorkflowInstanceCreateResponseData_1.WorkflowInstanceCreateResponseData,
    WorkflowInstanceListItem: WorkflowInstanceListItem_1.WorkflowInstanceListItem,
    WorkflowListInstancesResponse: WorkflowListInstancesResponse_1.WorkflowListInstancesResponse,
    WorkflowListInstancesResponseMeta: WorkflowListInstancesResponseMeta_1.WorkflowListInstancesResponseMeta,
    WorkflowListInstancesResponseMetaPage: WorkflowListInstancesResponseMetaPage_1.WorkflowListInstancesResponseMetaPage,
    WorkflowTriggerWrapper: WorkflowTriggerWrapper_1.WorkflowTriggerWrapper,
    WorkflowUserRelationship: WorkflowUserRelationship_1.WorkflowUserRelationship,
    WorkflowUserRelationshipData: WorkflowUserRelationshipData_1.WorkflowUserRelationshipData,
    WorklflowCancelInstanceResponse: WorklflowCancelInstanceResponse_1.WorklflowCancelInstanceResponse,
    WorklflowCancelInstanceResponseData: WorklflowCancelInstanceResponseData_1.WorklflowCancelInstanceResponseData,
    WorklflowGetInstanceResponse: WorklflowGetInstanceResponse_1.WorklflowGetInstanceResponse,
    WorklflowGetInstanceResponseData: WorklflowGetInstanceResponseData_1.WorklflowGetInstanceResponseData,
    WorklflowGetInstanceResponseDataAttributes: WorklflowGetInstanceResponseDataAttributes_1.WorklflowGetInstanceResponseDataAttributes,
    XRayServicesIncludeAll: XRayServicesIncludeAll_1.XRayServicesIncludeAll,
    XRayServicesIncludeOnly: XRayServicesIncludeOnly_1.XRayServicesIncludeOnly,
    ZoomConfigurationReference: ZoomConfigurationReference_1.ZoomConfigurationReference,
    ZoomConfigurationReferenceData: ZoomConfigurationReferenceData_1.ZoomConfigurationReferenceData,
};
const oneOfMap = {
    APIKeyResponseIncludedItem: ["User", "LeakedKey"],
    AWSAuthConfig: ["AWSAuthConfigKeys", "AWSAuthConfigRole"],
    AWSCredentials: ["AWSAssumeRole"],
    AWSCredentialsUpdate: ["AWSAssumeRoleUpdate"],
    AWSNamespaceFilters: [
        "AWSNamespaceFiltersExcludeOnly",
        "AWSNamespaceFiltersIncludeOnly",
    ],
    AWSRegions: ["AWSRegionsIncludeAll", "AWSRegionsIncludeOnly"],
    ActionConnectionIntegration: [
        "AWSIntegration",
        "AnthropicIntegration",
        "AsanaIntegration",
        "AzureIntegration",
        "CircleCIIntegration",
        "ClickupIntegration",
        "CloudflareIntegration",
        "ConfigCatIntegration",
        "DatadogIntegration",
        "FastlyIntegration",
        "FreshserviceIntegration",
        "GCPIntegration",
        "GeminiIntegration",
        "GitlabIntegration",
        "GreyNoiseIntegration",
        "HTTPIntegration",
        "LaunchDarklyIntegration",
        "NotionIntegration",
        "OktaIntegration",
        "OpenAIIntegration",
        "ServiceNowIntegration",
        "SplitIntegration",
        "StatsigIntegration",
        "VirusTotalIntegration",
    ],
    ActionConnectionIntegrationUpdate: [
        "AWSIntegrationUpdate",
        "AnthropicIntegrationUpdate",
        "AsanaIntegrationUpdate",
        "AzureIntegrationUpdate",
        "CircleCIIntegrationUpdate",
        "ClickupIntegrationUpdate",
        "CloudflareIntegrationUpdate",
        "ConfigCatIntegrationUpdate",
        "DatadogIntegrationUpdate",
        "FastlyIntegrationUpdate",
        "FreshserviceIntegrationUpdate",
        "GCPIntegrationUpdate",
        "GeminiIntegrationUpdate",
        "GitlabIntegrationUpdate",
        "GreyNoiseIntegrationUpdate",
        "HTTPIntegrationUpdate",
        "LaunchDarklyIntegrationUpdate",
        "NotionIntegrationUpdate",
        "OktaIntegrationUpdate",
        "OpenAIIntegrationUpdate",
        "ServiceNowIntegrationUpdate",
        "SplitIntegrationUpdate",
        "StatsigIntegrationUpdate",
        "VirusTotalIntegrationUpdate",
    ],
    ActionQueryCondition: ["boolean", "string"],
    ActionQueryDebounceInMs: ["number", "string"],
    ActionQueryMockedOutputs: ["string", "ActionQueryMockedOutputsObject"],
    ActionQueryMockedOutputsEnabled: ["boolean", "string"],
    ActionQueryOnlyTriggerManually: ["boolean", "string"],
    ActionQueryPollingIntervalInMs: ["number", "string"],
    ActionQueryRequiresConfirmation: ["boolean", "string"],
    ActionQueryShowToastOnError: ["boolean", "string"],
    ActionQuerySpec: ["string", "ActionQuerySpecObject"],
    ActionQuerySpecInputs: ["string", "{ [key: string]: any; }"],
    AnthropicCredentials: ["AnthropicAPIKey"],
    AnthropicCredentialsUpdate: ["AnthropicAPIKeyUpdate"],
    AnyValue: [
        "string",
        "number",
        "{ [key: string]: any; }",
        "Array<AnyValueItem>",
        "boolean",
    ],
    AnyValueItem: ["string", "number", "{ [key: string]: any; }", "boolean"],
    ApplicationKeyResponseIncludedItem: ["User", "Role", "LeakedKey"],
    AsanaCredentials: ["AsanaAccessToken"],
    AsanaCredentialsUpdate: ["AsanaAccessTokenUpdate"],
    AttachmentIncluded: ["IncidentUserData"],
    AuthNMappingCreateRelationships: [
        "AuthNMappingRelationshipToRole",
        "AuthNMappingRelationshipToTeam",
    ],
    AuthNMappingIncluded: ["SAMLAssertionAttribute", "Role", "AuthNMappingTeam"],
    AuthNMappingUpdateRelationships: [
        "AuthNMappingRelationshipToRole",
        "AuthNMappingRelationshipToTeam",
    ],
    AzureCredentials: ["AzureTenant"],
    AzureCredentialsUpdate: ["AzureTenantUpdate"],
    BatchUpsertRowsRequestDataAttributesValue: ["string", "number"],
    CIAppAggregateBucketValue: [
        "string",
        "number",
        "Array<CIAppAggregateBucketValueTimeseriesPoint>",
    ],
    CIAppCreatePipelineEventRequestAttributesResource: [
        "CIAppPipelineEventPipeline",
        "CIAppPipelineEventStage",
        "CIAppPipelineEventJob",
        "CIAppPipelineEventStep",
    ],
    CIAppCreatePipelineEventRequestDataSingleOrArray: [
        "CIAppCreatePipelineEventRequestData",
        "Array<CIAppCreatePipelineEventRequestData>",
    ],
    CIAppGroupByMissing: ["string", "number"],
    CIAppGroupByTotal: ["boolean", "string", "number"],
    CIAppPipelineEventPipeline: [
        "CIAppPipelineEventFinishedPipeline",
        "CIAppPipelineEventInProgressPipeline",
    ],
    ChangeRequestIncludedItem: [
        "ChangeRequestIncludedUser",
        "ChangeRequestIncludedDecision",
    ],
    CircleCICredentials: ["CircleCIAPIKey"],
    CircleCICredentialsUpdate: ["CircleCIAPIKeyUpdate"],
    ClickupCredentials: ["ClickupAPIKey"],
    ClickupCredentialsUpdate: ["ClickupAPIKeyUpdate"],
    CloudWorkloadSecurityAgentRuleActionSetValue: ["string", "number", "boolean"],
    CloudflareCredentials: ["CloudflareAPIToken", "CloudflareGlobalAPIToken"],
    CloudflareCredentialsUpdate: [
        "CloudflareAPITokenUpdate",
        "CloudflareGlobalAPITokenUpdate",
    ],
    ComponentGridPropertiesIsVisible: ["string", "boolean"],
    ComponentPropertiesIsVisible: ["boolean", "string"],
    ConfigCatCredentials: ["ConfigCatSDKKey"],
    ConfigCatCredentialsUpdate: ["ConfigCatSDKKeyUpdate"],
    ContainerImageItem: ["ContainerImage", "ContainerImageGroup"],
    ContainerItem: ["Container", "ContainerGroup"],
    CreateNotificationChannelConfig: [
        "CreatePhoneNotificationChannelConfig",
        "CreateEmailNotificationChannelConfig",
    ],
    CreateTableRequestDataAttributesFileMetadata: [
        "CreateTableRequestDataAttributesFileMetadataCloudStorage",
        "CreateTableRequestDataAttributesFileMetadataLocalFile",
    ],
    CustomAttributeValuesUnion: [
        "string",
        "Array<string>",
        "number",
        "Array<number>",
    ],
    CustomDestinationForwardDestination: [
        "CustomDestinationForwardDestinationHttp",
        "CustomDestinationForwardDestinationSplunk",
        "CustomDestinationForwardDestinationElasticsearch",
        "CustomDestinationForwardDestinationMicrosoftSentinel",
    ],
    CustomDestinationHttpDestinationAuth: [
        "CustomDestinationHttpDestinationAuthBasic",
        "CustomDestinationHttpDestinationAuthCustomHeader",
    ],
    CustomDestinationResponseForwardDestination: [
        "CustomDestinationResponseForwardDestinationHttp",
        "CustomDestinationResponseForwardDestinationSplunk",
        "CustomDestinationResponseForwardDestinationElasticsearch",
        "CustomDestinationResponseForwardDestinationMicrosoftSentinel",
    ],
    CustomDestinationResponseHttpDestinationAuth: [
        "CustomDestinationResponseHttpDestinationAuthBasic",
        "CustomDestinationResponseHttpDestinationAuthCustomHeader",
    ],
    DatadogCredentials: ["DatadogAPIKey"],
    DatadogCredentialsUpdate: ["DatadogAPIKeyUpdate"],
    DegradationIncluded: ["StatusPagesUser", "StatusPageAsIncluded"],
    DeploymentRulesOptions: [
        "DeploymentRuleOptionsFaultyDeploymentDetection",
        "DeploymentRuleOptionsMonitor",
    ],
    DowntimeMonitorIdentifier: [
        "DowntimeMonitorIdentifierId",
        "DowntimeMonitorIdentifierTags",
    ],
    DowntimeResponseIncludedItem: ["User", "DowntimeMonitorIncludedItem"],
    DowntimeScheduleCreateRequest: [
        "DowntimeScheduleRecurrencesCreateRequest",
        "DowntimeScheduleOneTimeCreateUpdateRequest",
    ],
    DowntimeScheduleResponse: [
        "DowntimeScheduleRecurrencesResponse",
        "DowntimeScheduleOneTimeResponse",
    ],
    DowntimeScheduleUpdateRequest: [
        "DowntimeScheduleRecurrencesUpdateRequest",
        "DowntimeScheduleOneTimeCreateUpdateRequest",
    ],
    EntityV3: [
        "EntityV3Service",
        "EntityV3Datastore",
        "EntityV3Queue",
        "EntityV3System",
        "EntityV3API",
    ],
    EntityV3APISpecInterface: [
        "EntityV3APISpecInterfaceFileRef",
        "EntityV3APISpecInterfaceDefinition",
    ],
    EscalationPolicyIncluded: [
        "EscalationPolicyStep",
        "EscalationPolicyUser",
        "ScheduleData",
        "ConfiguredSchedule",
        "TeamReference",
    ],
    EscalationTarget: [
        "TeamTarget",
        "UserTarget",
        "ScheduleTarget",
        "ConfiguredScheduleTarget",
    ],
    EventPayloadAttributes: [
        "ChangeEventCustomAttributes",
        "AlertEventCustomAttributes",
    ],
    FastlyCredentials: ["FastlyAPIKey"],
    FastlyCredentialsUpdate: ["FastlyAPIKeyUpdate"],
    FreshserviceCredentials: ["FreshserviceAPIKey"],
    FreshserviceCredentialsUpdate: ["FreshserviceAPIKeyUpdate"],
    GCPCredentials: ["GCPServiceAccount"],
    GCPCredentialsUpdate: ["GCPServiceAccountUpdate"],
    GeminiCredentials: ["GeminiAPIKey"],
    GeminiCredentialsUpdate: ["GeminiAPIKeyUpdate"],
    GitlabCredentials: ["GitlabAPIKey"],
    GitlabCredentialsUpdate: ["GitlabAPIKeyUpdate"],
    GreyNoiseCredentials: ["GreyNoiseAPIKey"],
    GreyNoiseCredentialsUpdate: ["GreyNoiseAPIKeyUpdate"],
    HTTPCredentials: ["HTTPTokenAuth"],
    HTTPCredentialsUpdate: ["HTTPTokenAuthUpdate"],
    IncidentFieldAttributes: [
        "IncidentFieldAttributesSingleValue",
        "IncidentFieldAttributesMultipleValue",
    ],
    IncidentHandleIncludedItemResponse: [
        "IncidentUserData",
        "IncidentTypeObject",
    ],
    IncidentImportFieldAttributes: [
        "IncidentImportFieldAttributesSingleValue",
        "IncidentImportFieldAttributesMultipleValue",
    ],
    IncidentImportResponseIncludedItem: [
        "IncidentUserData",
        "IncidentTypeObject",
    ],
    IncidentIntegrationMetadataMetadata: [
        "SlackIntegrationMetadata",
        "JiraIntegrationMetadata",
        "MSTeamsIntegrationMetadata",
    ],
    IncidentIntegrationMetadataResponseIncludedItem: ["User"],
    IncidentNotificationRuleIncludedItems: [
        "User",
        "IncidentTypeObject",
        "IncidentNotificationTemplateObject",
    ],
    IncidentNotificationTemplateIncludedItems: ["User", "IncidentTypeObject"],
    IncidentResponseIncludedItem: ["IncidentUserData", "AttachmentData"],
    IncidentServiceIncludedItems: ["User"],
    IncidentTeamIncludedItems: ["User"],
    IncidentTimelineCellCreateAttributes: [
        "IncidentTimelineCellMarkdownCreateAttributes",
    ],
    IncidentTodoAssignee: ["string", "IncidentTodoAnonymousAssignee"],
    IncidentTodoResponseIncludedItem: ["User"],
    IssueIncluded: ["IssueCase", "IssueUser", "IssueTeam"],
    IssuesSearchResultIncluded: ["Issue", "Case", "IssueUser", "IssueTeam"],
    LaunchDarklyCredentials: ["LaunchDarklyAPIKey"],
    LaunchDarklyCredentialsUpdate: ["LaunchDarklyAPIKeyUpdate"],
    ListEntityCatalogResponseIncludedItem: [
        "EntityResponseIncludedSchema",
        "EntityResponseIncludedRawSchema",
        "EntityResponseIncludedRelatedEntity",
        "EntityResponseIncludedOncall",
        "EntityResponseIncludedIncident",
    ],
    LogsAggregateBucketValue: [
        "string",
        "number",
        "Array<LogsAggregateBucketValueTimeseriesPoint>",
    ],
    LogsArchiveCreateRequestDestination: [
        "LogsArchiveDestinationAzure",
        "LogsArchiveDestinationGCS",
        "LogsArchiveDestinationS3",
    ],
    LogsArchiveDestination: [
        "LogsArchiveDestinationAzure",
        "LogsArchiveDestinationGCS",
        "LogsArchiveDestinationS3",
    ],
    LogsGroupByMissing: ["string", "number"],
    LogsGroupByTotal: ["boolean", "string", "number"],
    MetricAssetResponseIncluded: [
        "MetricDashboardAsset",
        "MetricMonitorAsset",
        "MetricNotebookAsset",
        "MetricSLOAsset",
    ],
    MetricVolumes: ["MetricDistinctVolume", "MetricIngestedIndexedVolume"],
    MetricsAndMetricTagConfigurations: ["Metric", "MetricTagConfiguration"],
    MonitorConfigPolicyPolicy: ["MonitorConfigPolicyTagPolicy"],
    MonitorConfigPolicyPolicyCreateRequest: [
        "MonitorConfigPolicyTagPolicyCreateRequest",
    ],
    MonitorNotificationRuleFilter: [
        "MonitorNotificationRuleFilterTags",
        "MonitorNotificationRuleFilterScope",
    ],
    MonitorNotificationRuleResponseIncludedItem: ["User"],
    NotificationChannelConfig: [
        "NotificationChannelPhoneConfig",
        "NotificationChannelEmailConfig",
        "NotificationChannelPushConfig",
    ],
    NotionCredentials: ["NotionAPIKey"],
    NotionCredentialsUpdate: ["NotionAPIKeyUpdate"],
    ObservabilityPipelineBufferOptions: [
        "ObservabilityPipelineDiskBufferOptions",
        "ObservabilityPipelineMemoryBufferOptions",
        "ObservabilityPipelineMemoryBufferSizeOptions",
    ],
    ObservabilityPipelineConfigDestinationItem: [
        "ObservabilityPipelineHttpClientDestination",
        "ObservabilityPipelineAmazonOpenSearchDestination",
        "ObservabilityPipelineAmazonS3Destination",
        "ObservabilityPipelineAmazonSecurityLakeDestination",
        "AzureStorageDestination",
        "ObservabilityPipelineCloudPremDestination",
        "ObservabilityPipelineCrowdStrikeNextGenSiemDestination",
        "ObservabilityPipelineDatadogLogsDestination",
        "ObservabilityPipelineElasticsearchDestination",
        "ObservabilityPipelineGoogleChronicleDestination",
        "ObservabilityPipelineGoogleCloudStorageDestination",
        "ObservabilityPipelineGooglePubSubDestination",
        "ObservabilityPipelineKafkaDestination",
        "MicrosoftSentinelDestination",
        "ObservabilityPipelineNewRelicDestination",
        "ObservabilityPipelineOpenSearchDestination",
        "ObservabilityPipelineRsyslogDestination",
        "ObservabilityPipelineSentinelOneDestination",
        "ObservabilityPipelineSocketDestination",
        "ObservabilityPipelineSplunkHecDestination",
        "ObservabilityPipelineSumoLogicDestination",
        "ObservabilityPipelineSyslogNgDestination",
        "ObservabilityPipelineDatadogMetricsDestination",
    ],
    ObservabilityPipelineConfigProcessorItem: [
        "ObservabilityPipelineFilterProcessor",
        "ObservabilityPipelineAddEnvVarsProcessor",
        "ObservabilityPipelineAddFieldsProcessor",
        "ObservabilityPipelineAddHostnameProcessor",
        "ObservabilityPipelineCustomProcessor",
        "ObservabilityPipelineDatadogTagsProcessor",
        "ObservabilityPipelineDedupeProcessor",
        "ObservabilityPipelineEnrichmentTableProcessor",
        "ObservabilityPipelineGenerateMetricsProcessor",
        "ObservabilityPipelineOcsfMapperProcessor",
        "ObservabilityPipelineParseGrokProcessor",
        "ObservabilityPipelineParseJSONProcessor",
        "ObservabilityPipelineParseXMLProcessor",
        "ObservabilityPipelineQuotaProcessor",
        "ObservabilityPipelineReduceProcessor",
        "ObservabilityPipelineRemoveFieldsProcessor",
        "ObservabilityPipelineRenameFieldsProcessor",
        "ObservabilityPipelineSampleProcessor",
        "ObservabilityPipelineSensitiveDataScannerProcessor",
        "ObservabilityPipelineSplitArrayProcessor",
        "ObservabilityPipelineThrottleProcessor",
        "ObservabilityPipelineMetricTagsProcessor",
    ],
    ObservabilityPipelineConfigSourceItem: [
        "ObservabilityPipelineDatadogAgentSource",
        "ObservabilityPipelineAmazonDataFirehoseSource",
        "ObservabilityPipelineAmazonS3Source",
        "ObservabilityPipelineFluentBitSource",
        "ObservabilityPipelineFluentdSource",
        "ObservabilityPipelineGooglePubSubSource",
        "ObservabilityPipelineHttpClientSource",
        "ObservabilityPipelineHttpServerSource",
        "ObservabilityPipelineKafkaSource",
        "ObservabilityPipelineLogstashSource",
        "ObservabilityPipelineRsyslogSource",
        "ObservabilityPipelineSocketSource",
        "ObservabilityPipelineSplunkHecSource",
        "ObservabilityPipelineSplunkTcpSource",
        "ObservabilityPipelineSumoLogicSource",
        "ObservabilityPipelineSyslogNgSource",
        "ObservabilityPipelineOpentelemetrySource",
    ],
    ObservabilityPipelineMetricValue: [
        "ObservabilityPipelineGeneratedMetricIncrementByOne",
        "ObservabilityPipelineGeneratedMetricIncrementByField",
    ],
    ObservabilityPipelineOcsfMapperProcessorMappingMapping: [
        "ObservabilityPipelineOcsfMappingLibrary",
        "ObservabilityPipelineOcsfMappingCustom",
    ],
    ObservabilityPipelineSensitiveDataScannerProcessorAction: [
        "ObservabilityPipelineSensitiveDataScannerProcessorActionRedact",
        "ObservabilityPipelineSensitiveDataScannerProcessorActionHash",
        "ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact",
    ],
    ObservabilityPipelineSensitiveDataScannerProcessorPattern: [
        "ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern",
        "ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern",
    ],
    ObservabilityPipelineSensitiveDataScannerProcessorScope: [
        "ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude",
        "ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude",
        "ObservabilityPipelineSensitiveDataScannerProcessorScopeAll",
    ],
    ObservabilityPipelineSocketDestinationFraming: [
        "ObservabilityPipelineSocketDestinationFramingNewlineDelimited",
        "ObservabilityPipelineSocketDestinationFramingBytes",
        "ObservabilityPipelineSocketDestinationFramingCharacterDelimited",
    ],
    ObservabilityPipelineSocketSourceFraming: [
        "ObservabilityPipelineSocketSourceFramingNewlineDelimited",
        "ObservabilityPipelineSocketSourceFramingBytes",
        "ObservabilityPipelineSocketSourceFramingCharacterDelimited",
        "ObservabilityPipelineSocketSourceFramingOctetCounting",
        "ObservabilityPipelineSocketSourceFramingChunkedGelf",
    ],
    OktaCredentials: ["OktaAPIToken"],
    OktaCredentialsUpdate: ["OktaAPITokenUpdate"],
    OnCallNotificationRuleChannelSettings: [
        "OnCallPhoneNotificationRuleSettings",
    ],
    OnCallNotificationRulesIncluded: ["NotificationChannelData"],
    OpenAICredentials: ["OpenAIAPIKey"],
    OpenAICredentialsUpdate: ["OpenAIAPIKeyUpdate"],
    PatchTableRequestDataAttributesFileMetadata: [
        "PatchTableRequestDataAttributesFileMetadataCloudStorage",
        "PatchTableRequestDataAttributesFileMetadataLocalFile",
    ],
    ProductAnalyticsBaseQuery: [
        "ProductAnalyticsEventQuery",
        "ProductAnalyticsOccurrenceQuery",
    ],
    Query: ["ActionQuery", "DataTransform", "StateVariable"],
    RUMAggregateBucketValue: [
        "string",
        "number",
        "Array<RUMAggregateBucketValueTimeseriesPoint>",
    ],
    RUMGroupByMissing: ["string", "number"],
    RUMGroupByTotal: ["boolean", "string", "number"],
    RestrictionQueryResponseIncludedItem: ["RestrictionQueryRole"],
    RoutingRuleAction: ["SendSlackMessageAction", "SendTeamsMessageAction"],
    ScalarColumn: ["GroupScalarColumn", "DataScalarColumn"],
    ScalarQuery: ["MetricsScalarQuery", "EventsScalarQuery"],
    ScheduleDataIncludedItem: [
        "TeamReference",
        "Layer",
        "ScheduleMember",
        "ScheduleUser",
    ],
    SecurityMonitoringRuleConvertPayload: [
        "SecurityMonitoringStandardRulePayload",
        "SecurityMonitoringSignalRulePayload",
    ],
    SecurityMonitoringRuleCreatePayload: [
        "SecurityMonitoringStandardRuleCreatePayload",
        "SecurityMonitoringSignalRuleCreatePayload",
        "CloudConfigurationRuleCreatePayload",
    ],
    SecurityMonitoringRuleQuery: [
        "SecurityMonitoringStandardRuleQuery",
        "SecurityMonitoringSignalRuleQuery",
    ],
    SecurityMonitoringRuleResponse: [
        "SecurityMonitoringStandardRuleResponse",
        "SecurityMonitoringSignalRuleResponse",
    ],
    SecurityMonitoringRuleTestPayload: [
        "SecurityMonitoringStandardRuleTestPayload",
    ],
    SecurityMonitoringRuleValidatePayload: [
        "SecurityMonitoringStandardRulePayload",
        "SecurityMonitoringSignalRulePayload",
        "CloudConfigurationRulePayload",
    ],
    SensitiveDataScannerGetConfigIncludedItem: [
        "SensitiveDataScannerRuleIncludedItem",
        "SensitiveDataScannerGroupIncludedItem",
    ],
    ServiceDefinitionSchema: [
        "ServiceDefinitionV1",
        "ServiceDefinitionV2",
        "ServiceDefinitionV2Dot1",
        "ServiceDefinitionV2Dot2",
    ],
    ServiceDefinitionV2Contact: [
        "ServiceDefinitionV2Email",
        "ServiceDefinitionV2Slack",
        "ServiceDefinitionV2MSTeams",
    ],
    ServiceDefinitionV2Dot1Contact: [
        "ServiceDefinitionV2Dot1Email",
        "ServiceDefinitionV2Dot1Slack",
        "ServiceDefinitionV2Dot1MSTeams",
    ],
    ServiceDefinitionsCreateRequest: [
        "ServiceDefinitionV2Dot2",
        "ServiceDefinitionV2Dot1",
        "ServiceDefinitionV2",
        "string",
    ],
    ServiceNowCredentials: ["ServiceNowBasicAuth"],
    ServiceNowCredentialsUpdate: ["ServiceNowBasicAuthUpdate"],
    ShiftIncluded: ["ScheduleUser"],
    SpansAggregateBucketValue: [
        "string",
        "number",
        "Array<SpansAggregateBucketValueTimeseriesPoint>",
    ],
    SpansGroupByMissing: ["string", "number"],
    SpansGroupByTotal: ["boolean", "string", "number"],
    SplitCredentials: ["SplitAPIKey"],
    SplitCredentialsUpdate: ["SplitAPIKeyUpdate"],
    StatsigCredentials: ["StatsigAPIKey"],
    StatsigCredentialsUpdate: ["StatsigAPIKeyUpdate"],
    StatusPageArrayIncluded: ["StatusPagesUser"],
    StatusPagesComponentArrayIncluded: [
        "StatusPagesUser",
        "StatusPageAsIncluded",
        "StatusPagesComponentGroup",
    ],
    SyntheticsNetworkAssertion: [
        "SyntheticsNetworkAssertionLatency",
        "SyntheticsNetworkAssertionMultiNetworkHop",
        "SyntheticsNetworkAssertionPacketLossPercentage",
        "SyntheticsNetworkAssertionJitter",
    ],
    TeamIncluded: ["User", "TeamLink", "UserTeamPermission"],
    TeamOnCallRespondersIncluded: ["User", "Escalation"],
    TeamRoutingRulesIncluded: ["RoutingRule"],
    TimelineCellAuthor: ["TimelineCellAuthorUser"],
    TimelineCellContent: ["TimelineCellContentComment"],
    TimeseriesQuery: ["MetricsTimeseriesQuery", "EventsTimeseriesQuery"],
    Trigger: [
        "APITriggerWrapper",
        "AppTriggerWrapper",
        "CaseTriggerWrapper",
        "ChangeEventTriggerWrapper",
        "DatabaseMonitoringTriggerWrapper",
        "DatastoreTriggerWrapper",
        "DashboardTriggerWrapper",
        "FormTriggerWrapper",
        "GithubWebhookTriggerWrapper",
        "IncidentTriggerWrapper",
        "MonitorTriggerWrapper",
        "NotebookTriggerWrapper",
        "OnCallTriggerWrapper",
        "ScheduleTriggerWrapper",
        "SecurityTriggerWrapper",
        "SelfServiceTriggerWrapper",
        "SlackTriggerWrapper",
        "SoftwareCatalogTriggerWrapper",
        "WorkflowTriggerWrapper",
    ],
    UpsertCatalogEntityRequest: ["EntityV3", "string"],
    UpsertCatalogEntityResponseIncludedItem: ["EntityResponseIncludedSchema"],
    UpsertCatalogKindRequest: ["KindObj", "string"],
    UserResponseIncludedItem: ["Organization", "Permission", "Role"],
    UserTeamIncluded: ["User", "Team"],
    V2EventAttributesAttributes: [
        "ChangeEventAttributes",
        "AlertEventAttributes",
    ],
    VirusTotalCredentials: ["VirusTotalAPIKey"],
    VirusTotalCredentialsUpdate: ["VirusTotalAPIKeyUpdate"],
    XRayServicesList: ["XRayServicesIncludeAll", "XRayServicesIncludeOnly"],
};
class ObjectSerializer {
    static serialize(data, type, format) {
        if (data == undefined || type == "any") {
            return data;
        }
        else if (data instanceof util_1.UnparsedObject) {
            return data._data;
        }
        else if (primitives.includes(type.toLowerCase()) &&
            typeof data == type.toLowerCase()) {
            return data;
        }
        else if (type.startsWith(ARRAY_PREFIX)) {
            if (!Array.isArray(data)) {
                throw new TypeError(`mismatch types '${data}' and '${type}'`);
            }
            // Array<Type> => Type
            const subType = type.substring(ARRAY_PREFIX.length, type.length - 1);
            const transformedData = [];
            for (const element of data) {
                transformedData.push(ObjectSerializer.serialize(element, subType, format));
            }
            return transformedData;
        }
        else if (type.startsWith(TUPLE_PREFIX)) {
            // We only support homegeneus tuples
            const subType = type
                .substring(TUPLE_PREFIX.length, type.length - 1)
                .split(", ")[0];
            const transformedData = [];
            for (const element of data) {
                transformedData.push(ObjectSerializer.serialize(element, subType, format));
            }
            return transformedData;
        }
        else if (type.startsWith(MAP_PREFIX)) {
            // { [key: string]: Type; } => Type
            const subType = type.substring(MAP_PREFIX.length, type.length - 3);
            const transformedData = {};
            for (const key in data) {
                transformedData[key] = ObjectSerializer.serialize(data[key], subType, format);
            }
            return transformedData;
        }
        else if (type === "Date") {
            if ("string" == typeof data) {
                return data;
            }
            if (format == "date" || format == "date-time") {
                return (0, util_1.dateToRFC3339String)(data);
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap[type]) {
                if (enumsMap[type].includes(data)) {
                    return data;
                }
                throw new TypeError(`unknown enum value '${data}'`);
            }
            if (oneOfMap[type]) {
                const oneOfs = [];
                for (const oneOf of oneOfMap[type]) {
                    try {
                        oneOfs.push(ObjectSerializer.serialize(data, oneOf, format));
                    }
                    catch (e) {
                        logger_1.logger.debug(`could not serialize ${oneOf} (${e})`);
                    }
                }
                if (oneOfs.length > 1) {
                    throw new TypeError(`${data} matches multiple types from ${oneOfMap[type]} ${oneOfs}`);
                }
                if (oneOfs.length == 0) {
                    throw new TypeError(`${data} doesn't match any type from ${oneOfMap[type]} ${oneOfs}`);
                }
                return oneOfs[0];
            }
            if (!typeMap[type]) {
                // dont know the type
                throw new TypeError(`unknown type '${type}'`);
            }
            // get the map for the correct type.
            const attributesMap = typeMap[type].getAttributeTypeMap();
            const instance = {};
            for (const attributeName in data) {
                const attributeObj = attributesMap[attributeName];
                if (attributeName === "_unparsed" ||
                    attributeName === "additionalProperties") {
                    continue;
                }
                else if (attributeObj === undefined &&
                    !("additionalProperties" in attributesMap)) {
                    throw new Error("unexpected attribute " + attributeName + " of type " + type);
                }
                else if (attributeObj) {
                    instance[attributeObj.baseName] = ObjectSerializer.serialize(data[attributeName], attributeObj.type, attributeObj.format);
                }
            }
            if (data.additionalProperties) {
                const additionalPropertiesMap = attributesMap["additionalProperties"];
                if (additionalPropertiesMap) {
                    const additionalProperties = ObjectSerializer.serialize(data.additionalProperties, additionalPropertiesMap.type, additionalPropertiesMap.format);
                    for (const key in additionalProperties) {
                        instance[key] = additionalProperties[key];
                    }
                }
                else {
                    throw new Error(`additionalProperties found in ${type}`);
                }
            }
            // check for required properties
            for (const attributeName in attributesMap) {
                const attributeObj = attributesMap[attributeName];
                if ((attributeObj === null || attributeObj === void 0 ? void 0 : attributeObj.required) &&
                    instance[attributeObj.baseName] === undefined) {
                    throw new Error(`missing required property '${attributeObj.baseName}'`);
                }
            }
            return instance;
        }
    }
    static deserialize(data, type, format = "") {
        var _a;
        if (data == undefined || type == "any") {
            return data;
        }
        else if (primitives.includes(type.toLowerCase()) &&
            typeof data == type.toLowerCase()) {
            return data;
        }
        else if (type.startsWith(ARRAY_PREFIX)) {
            // Assert the passed data is Array type
            if (!Array.isArray(data)) {
                throw new TypeError(`mismatch types '${data}' and '${type}'`);
            }
            // Array<Type> => Type
            const subType = type.substring(ARRAY_PREFIX.length, type.length - 1);
            const transformedData = [];
            for (const element of data) {
                transformedData.push(ObjectSerializer.deserialize(element, subType, format));
            }
            return transformedData;
        }
        else if (type.startsWith(TUPLE_PREFIX)) {
            // [Type,...] => Type
            const subType = type
                .substring(TUPLE_PREFIX.length, type.length - 1)
                .split(", ")[0];
            const transformedData = [];
            for (const element of data) {
                transformedData.push(ObjectSerializer.deserialize(element, subType, format));
            }
            return transformedData;
        }
        else if (type.startsWith(MAP_PREFIX)) {
            // { [key: string]: Type; } => Type
            const subType = type.substring(MAP_PREFIX.length, type.length - 3);
            const transformedData = {};
            for (const key in data) {
                transformedData[key] = ObjectSerializer.deserialize(data[key], subType, format);
            }
            return transformedData;
        }
        else if (type === "Date") {
            try {
                return (0, util_1.dateFromRFC3339String)(data);
            }
            catch (_b) {
                return new Date(data);
            }
        }
        else {
            if (enumsMap[type]) {
                if (enumsMap[type].includes(data)) {
                    return data;
                }
                return new util_1.UnparsedObject(data);
            }
            if (oneOfMap[type]) {
                const oneOfs = [];
                for (const oneOf of oneOfMap[type]) {
                    try {
                        const d = ObjectSerializer.deserialize(data, oneOf, format);
                        if (!(d === null || d === void 0 ? void 0 : d._unparsed)) {
                            oneOfs.push(d);
                        }
                    }
                    catch (e) {
                        logger_1.logger.debug(`could not deserialize ${oneOf} (${e})`);
                    }
                }
                if (oneOfs.length != 1) {
                    return new util_1.UnparsedObject(data);
                }
                return oneOfs[0];
            }
            if (!typeMap[type]) {
                // dont know the type
                throw new TypeError(`unknown type '${type}'`);
            }
            const instance = new typeMap[type]();
            const attributesMap = typeMap[type].getAttributeTypeMap();
            const attributesBaseNames = Object.keys(attributesMap).reduce((o, key) => Object.assign(o, { [attributesMap[key].baseName]: "" }), {});
            const extraAttributes = Object.keys(data).filter((key) => !Object.prototype.hasOwnProperty.call(attributesBaseNames, key));
            if (extraAttributes.length > 0) {
                if ("additionalProperties" in attributesMap) {
                    if (!instance.additionalProperties) {
                        instance.additionalProperties = {};
                    }
                    const additionalProperties = {};
                    for (const key of extraAttributes) {
                        additionalProperties[key] = data[key];
                    }
                    const attributeObj = attributesMap["additionalProperties"];
                    instance.additionalProperties = ObjectSerializer.deserialize(additionalProperties, attributeObj.type, attributeObj.format);
                }
                else {
                    throw new Error(`found extra attributes '${extraAttributes}' in ${type}`);
                }
            }
            for (const attributeName in attributesMap) {
                const attributeObj = attributesMap[attributeName];
                if (attributeName === "additionalProperties") {
                    continue;
                }
                instance[attributeName] = ObjectSerializer.deserialize(data[attributeObj.baseName], attributeObj.type, attributeObj.format);
                // check for required properties
                if ((attributeObj === null || attributeObj === void 0 ? void 0 : attributeObj.required) && instance[attributeName] === undefined) {
                    throw new Error(`missing required property '${attributeName}'`);
                }
                if (instance[attributeName] instanceof util_1.UnparsedObject ||
                    ((_a = instance[attributeName]) === null || _a === void 0 ? void 0 : _a._unparsed)) {
                    instance._unparsed = true;
                }
                if (Array.isArray(instance[attributeName])) {
                    for (const d of instance[attributeName]) {
                        if (d instanceof util_1.UnparsedObject || (d === null || d === void 0 ? void 0 : d._unparsed)) {
                            instance._unparsed = true;
                            break;
                        }
                    }
                }
            }
            return instance;
        }
    }
    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    static normalizeMediaType(mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }
    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    static getPreferredMediaType(mediaTypes) {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }
        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType = undefined;
        let selectedRank = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (mediaType === undefined) {
                continue;
            }
            const supported = supportedMediaTypes[mediaType];
            if (supported !== undefined && supported > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supported;
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }
        return selectedMediaType;
    }
    /**
     * Convert data to a string according the given media type
     */
    static stringify(data, mediaType) {
        if (mediaType === "application/json" || mediaType === "text/json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " +
            mediaType +
            " is not supported by ObjectSerializer.stringify.");
    }
    /**
     * Parse data from a string according to the given media type
     */
    static parse(rawData, mediaType) {
        try {
            return JSON.parse(rawData);
        }
        catch (error) {
            logger_1.logger.debug(`could not parse ${mediaType}: ${error}`);
            return rawData;
        }
    }
}
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map