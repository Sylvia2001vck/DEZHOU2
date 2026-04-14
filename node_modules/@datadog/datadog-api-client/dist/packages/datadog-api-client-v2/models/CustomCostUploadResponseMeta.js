"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCostUploadResponseMeta = void 0;
/**
 * Meta for the response from the Upload Custom Costs endpoints.
 */
class CustomCostUploadResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomCostUploadResponseMeta.attributeTypeMap;
    }
}
exports.CustomCostUploadResponseMeta = CustomCostUploadResponseMeta;
/**
 * @ignore
 */
CustomCostUploadResponseMeta.attributeTypeMap = {
    version: {
        baseName: "version",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomCostUploadResponseMeta.js.map