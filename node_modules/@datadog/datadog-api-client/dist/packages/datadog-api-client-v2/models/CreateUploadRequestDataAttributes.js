"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUploadRequestDataAttributes = void 0;
/**
 * Upload configuration specifying how data is uploaded by the user, and properties of the table to associate the upload with.
 */
class CreateUploadRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateUploadRequestDataAttributes.attributeTypeMap;
    }
}
exports.CreateUploadRequestDataAttributes = CreateUploadRequestDataAttributes;
/**
 * @ignore
 */
CreateUploadRequestDataAttributes.attributeTypeMap = {
    headers: {
        baseName: "headers",
        type: "Array<string>",
        required: true,
    },
    partCount: {
        baseName: "part_count",
        type: "number",
        required: true,
        format: "int32",
    },
    partSize: {
        baseName: "part_size",
        type: "number",
        required: true,
        format: "int64",
    },
    tableName: {
        baseName: "table_name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateUploadRequestDataAttributes.js.map