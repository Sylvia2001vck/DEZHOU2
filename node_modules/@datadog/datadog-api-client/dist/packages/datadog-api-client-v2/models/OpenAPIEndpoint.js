"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAPIEndpoint = void 0;
/**
 * Endpoint info extracted from an `OpenAPI` specification.
 */
class OpenAPIEndpoint {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OpenAPIEndpoint.attributeTypeMap;
    }
}
exports.OpenAPIEndpoint = OpenAPIEndpoint;
/**
 * @ignore
 */
OpenAPIEndpoint.attributeTypeMap = {
    method: {
        baseName: "method",
        type: "string",
    },
    path: {
        baseName: "path",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OpenAPIEndpoint.js.map