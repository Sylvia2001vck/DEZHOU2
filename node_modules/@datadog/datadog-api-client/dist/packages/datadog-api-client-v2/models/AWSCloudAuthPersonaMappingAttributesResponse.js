"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSCloudAuthPersonaMappingAttributesResponse = void 0;
/**
 * Attributes for AWS cloud authentication persona mapping response
 */
class AWSCloudAuthPersonaMappingAttributesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSCloudAuthPersonaMappingAttributesResponse.attributeTypeMap;
    }
}
exports.AWSCloudAuthPersonaMappingAttributesResponse = AWSCloudAuthPersonaMappingAttributesResponse;
/**
 * @ignore
 */
AWSCloudAuthPersonaMappingAttributesResponse.attributeTypeMap = {
    accountIdentifier: {
        baseName: "account_identifier",
        type: "string",
        required: true,
    },
    accountUuid: {
        baseName: "account_uuid",
        type: "string",
        required: true,
    },
    arnPattern: {
        baseName: "arn_pattern",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSCloudAuthPersonaMappingAttributesResponse.js.map