"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUploadResponseDataAttributes = void 0;
/**
 * Pre-signed URLs for uploading parts of the file.
 */
class CreateUploadResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateUploadResponseDataAttributes.attributeTypeMap;
    }
}
exports.CreateUploadResponseDataAttributes = CreateUploadResponseDataAttributes;
/**
 * @ignore
 */
CreateUploadResponseDataAttributes.attributeTypeMap = {
    partUrls: {
        baseName: "part_urls",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateUploadResponseDataAttributes.js.map