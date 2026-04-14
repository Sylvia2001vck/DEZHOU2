"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail = void 0;
/**
 * Azure Blob Storage access configuration.
 */
class PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail.attributeTypeMap;
    }
}
exports.PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail = PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail;
/**
 * @ignore
 */
PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail.attributeTypeMap = {
    azureClientId: {
        baseName: "azure_client_id",
        type: "string",
    },
    azureContainerName: {
        baseName: "azure_container_name",
        type: "string",
    },
    azureStorageAccountName: {
        baseName: "azure_storage_account_name",
        type: "string",
    },
    azureTenantId: {
        baseName: "azure_tenant_id",
        type: "string",
    },
    filePath: {
        baseName: "file_path",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PatchTableRequestDataAttributesFileMetadataOneOfAccessDetailsAzureDetail.js.map