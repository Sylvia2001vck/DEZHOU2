"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerpackTemplateVariable = void 0;
/**
 * Powerpack template variables.
 */
class PowerpackTemplateVariable {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PowerpackTemplateVariable.attributeTypeMap;
    }
}
exports.PowerpackTemplateVariable = PowerpackTemplateVariable;
/**
 * @ignore
 */
PowerpackTemplateVariable.attributeTypeMap = {
    availableValues: {
        baseName: "available_values",
        type: "Array<string>",
    },
    defaults: {
        baseName: "defaults",
        type: "Array<string>",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    prefix: {
        baseName: "prefix",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PowerpackTemplateVariable.js.map