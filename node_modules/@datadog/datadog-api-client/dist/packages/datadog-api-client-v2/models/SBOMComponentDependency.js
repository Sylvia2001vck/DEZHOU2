"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SBOMComponentDependency = void 0;
/**
 * The dependencies of a component of the SBOM.
 */
class SBOMComponentDependency {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SBOMComponentDependency.attributeTypeMap;
    }
}
exports.SBOMComponentDependency = SBOMComponentDependency;
/**
 * @ignore
 */
SBOMComponentDependency.attributeTypeMap = {
    dependsOn: {
        baseName: "dependsOn",
        type: "Array<string>",
    },
    ref: {
        baseName: "ref",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SBOMComponentDependency.js.map