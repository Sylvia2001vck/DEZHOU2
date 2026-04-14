"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataDeletionResponseMeta = void 0;
/**
 * The metadata of the data deletion response.
 */
class DataDeletionResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DataDeletionResponseMeta.attributeTypeMap;
    }
}
exports.DataDeletionResponseMeta = DataDeletionResponseMeta;
/**
 * @ignore
 */
DataDeletionResponseMeta.attributeTypeMap = {
    countProduct: {
        baseName: "count_product",
        type: "{ [key: string]: number; }",
    },
    countStatus: {
        baseName: "count_status",
        type: "{ [key: string]: number; }",
    },
    nextPage: {
        baseName: "next_page",
        type: "string",
    },
    product: {
        baseName: "product",
        type: "string",
    },
    requestStatus: {
        baseName: "request_status",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DataDeletionResponseMeta.js.map