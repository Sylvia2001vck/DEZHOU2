"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTransformProperties = void 0;
/**
 * The properties of the data transformer.
 */
class DataTransformProperties {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DataTransformProperties.attributeTypeMap;
    }
}
exports.DataTransformProperties = DataTransformProperties;
/**
 * @ignore
 */
DataTransformProperties.attributeTypeMap = {
    outputs: {
        baseName: "outputs",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DataTransformProperties.js.map