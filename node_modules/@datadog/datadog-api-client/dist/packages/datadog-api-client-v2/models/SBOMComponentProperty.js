"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SBOMComponentProperty = void 0;
/**
 * The custom property of the component of the SBOM.
 */
class SBOMComponentProperty {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SBOMComponentProperty.attributeTypeMap;
    }
}
exports.SBOMComponentProperty = SBOMComponentProperty;
/**
 * @ignore
 */
SBOMComponentProperty.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    value: {
        baseName: "value",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SBOMComponentProperty.js.map