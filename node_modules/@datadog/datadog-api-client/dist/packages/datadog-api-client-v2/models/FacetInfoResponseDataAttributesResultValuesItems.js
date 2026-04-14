"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacetInfoResponseDataAttributesResultValuesItems = void 0;
class FacetInfoResponseDataAttributesResultValuesItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FacetInfoResponseDataAttributesResultValuesItems.attributeTypeMap;
    }
}
exports.FacetInfoResponseDataAttributesResultValuesItems = FacetInfoResponseDataAttributesResultValuesItems;
/**
 * @ignore
 */
FacetInfoResponseDataAttributesResultValuesItems.attributeTypeMap = {
    count: {
        baseName: "count",
        type: "number",
        format: "int64",
    },
    value: {
        baseName: "value",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FacetInfoResponseDataAttributesResultValuesItems.js.map