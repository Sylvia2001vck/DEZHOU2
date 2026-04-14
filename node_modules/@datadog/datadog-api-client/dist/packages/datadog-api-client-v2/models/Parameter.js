"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parameter = void 0;
/**
 * The definition of `Parameter` object.
 */
class Parameter {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Parameter.attributeTypeMap;
    }
}
exports.Parameter = Parameter;
/**
 * @ignore
 */
Parameter.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    value: {
        baseName: "value",
        type: "any",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Parameter.js.map