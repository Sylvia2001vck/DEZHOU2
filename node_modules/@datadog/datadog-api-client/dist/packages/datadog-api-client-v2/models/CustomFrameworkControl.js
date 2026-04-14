"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFrameworkControl = void 0;
/**
 * Framework Control.
 */
class CustomFrameworkControl {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomFrameworkControl.attributeTypeMap;
    }
}
exports.CustomFrameworkControl = CustomFrameworkControl;
/**
 * @ignore
 */
CustomFrameworkControl.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    rulesId: {
        baseName: "rules_id",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomFrameworkControl.js.map