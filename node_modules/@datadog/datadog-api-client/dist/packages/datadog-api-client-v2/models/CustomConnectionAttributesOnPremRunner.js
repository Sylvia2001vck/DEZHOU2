"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomConnectionAttributesOnPremRunner = void 0;
/**
 * Information about the Private Action Runner used by the custom connection, if the custom connection is associated with a Private Action Runner.
 */
class CustomConnectionAttributesOnPremRunner {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomConnectionAttributesOnPremRunner.attributeTypeMap;
    }
}
exports.CustomConnectionAttributesOnPremRunner = CustomConnectionAttributesOnPremRunner;
/**
 * @ignore
 */
CustomConnectionAttributesOnPremRunner.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    url: {
        baseName: "url",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomConnectionAttributesOnPremRunner.js.map