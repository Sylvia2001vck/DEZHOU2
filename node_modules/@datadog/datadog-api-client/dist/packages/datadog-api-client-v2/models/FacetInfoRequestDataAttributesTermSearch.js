"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacetInfoRequestDataAttributesTermSearch = void 0;
class FacetInfoRequestDataAttributesTermSearch {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FacetInfoRequestDataAttributesTermSearch.attributeTypeMap;
    }
}
exports.FacetInfoRequestDataAttributesTermSearch = FacetInfoRequestDataAttributesTermSearch;
/**
 * @ignore
 */
FacetInfoRequestDataAttributesTermSearch.attributeTypeMap = {
    value: {
        baseName: "value",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FacetInfoRequestDataAttributesTermSearch.js.map