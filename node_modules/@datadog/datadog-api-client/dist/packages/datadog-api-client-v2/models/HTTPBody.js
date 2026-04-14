"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPBody = void 0;
/**
 * The definition of `HTTPBody` object.
 */
class HTTPBody {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HTTPBody.attributeTypeMap;
    }
}
exports.HTTPBody = HTTPBody;
/**
 * @ignore
 */
HTTPBody.attributeTypeMap = {
    content: {
        baseName: "content",
        type: "string",
    },
    contentType: {
        baseName: "content_type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HTTPBody.js.map