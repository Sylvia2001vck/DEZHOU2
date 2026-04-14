"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCostGetResponseMeta = void 0;
/**
 * Meta for the response from the Get Custom Costs endpoints.
 */
class CustomCostGetResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomCostGetResponseMeta.attributeTypeMap;
    }
}
exports.CustomCostGetResponseMeta = CustomCostGetResponseMeta;
/**
 * @ignore
 */
CustomCostGetResponseMeta.attributeTypeMap = {
    version: {
        baseName: "version",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomCostGetResponseMeta.js.map