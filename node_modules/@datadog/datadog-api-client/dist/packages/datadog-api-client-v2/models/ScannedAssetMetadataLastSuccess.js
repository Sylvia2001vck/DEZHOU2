"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScannedAssetMetadataLastSuccess = void 0;
/**
 * Metadata for the last successful scan of an asset.
 */
class ScannedAssetMetadataLastSuccess {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScannedAssetMetadataLastSuccess.attributeTypeMap;
    }
}
exports.ScannedAssetMetadataLastSuccess = ScannedAssetMetadataLastSuccess;
/**
 * @ignore
 */
ScannedAssetMetadataLastSuccess.attributeTypeMap = {
    env: {
        baseName: "env",
        type: "string",
    },
    origin: {
        baseName: "origin",
        type: "Array<string>",
    },
    timestamp: {
        baseName: "timestamp",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScannedAssetMetadataLastSuccess.js.map