"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateVariableProperties = void 0;
/**
 * The properties of the state variable.
 */
class StateVariableProperties {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StateVariableProperties.attributeTypeMap;
    }
}
exports.StateVariableProperties = StateVariableProperties;
/**
 * @ignore
 */
StateVariableProperties.attributeTypeMap = {
    defaultValue: {
        baseName: "defaultValue",
        type: "any",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=StateVariableProperties.js.map