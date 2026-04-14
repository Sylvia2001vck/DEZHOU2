"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SBOMComponentSupplier = void 0;
/**
 * The supplier of the component.
 */
class SBOMComponentSupplier {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SBOMComponentSupplier.attributeTypeMap;
    }
}
exports.SBOMComponentSupplier = SBOMComponentSupplier;
/**
 * @ignore
 */
SBOMComponentSupplier.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SBOMComponentSupplier.js.map