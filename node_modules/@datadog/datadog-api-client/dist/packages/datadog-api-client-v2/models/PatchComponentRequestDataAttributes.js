"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchComponentRequestDataAttributes = void 0;
/**
 * The supported attributes for updating a component.
 */
class PatchComponentRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchComponentRequestDataAttributes.attributeTypeMap;
    }
}
exports.PatchComponentRequestDataAttributes = PatchComponentRequestDataAttributes;
/**
 * @ignore
 */
PatchComponentRequestDataAttributes.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
    },
    position: {
        baseName: "position",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PatchComponentRequestDataAttributes.js.map